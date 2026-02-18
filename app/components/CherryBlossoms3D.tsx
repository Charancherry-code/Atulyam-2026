"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CherryBlossoms3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const blossomMeshesRef = useRef<THREE.Group[]>([]);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);
    sceneRef.current = scene;

    // Camera setup
    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 30;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffa0d2, 1, 100);
    pointLight.position.set(10, 10, 20);
    scene.add(pointLight);

    // Create cherry blossom flower shape function
    const createFlowerGeometry = () => {
      const group = new THREE.Group();

      // Center of flower - yellow stamen
      const centerGeometry = new THREE.SphereGeometry(0.4, 14, 14);
      const centerMaterial = new THREE.MeshPhongMaterial({
        color: 0xffd700,
        shininess: 130,
        emissive: 0xffaa00,
      });
      const center = new THREE.Mesh(centerGeometry, centerMaterial);
      group.add(center);

      // Inner magenta layer (5 petals between main petals)
      const innerPetalCount = 5;
      const innerPetalMaterial = new THREE.MeshPhongMaterial({
        color: 0xd91e63,
        shininess: 100,
        emissive: 0xc2185b,
        side: THREE.DoubleSide,
      });

      for (let i = 0; i < innerPetalCount; i++) {
        const angle = (i / innerPetalCount) * Math.PI * 2 + Math.PI / innerPetalCount;
        const innerGeometry = new THREE.SphereGeometry(0.48, 12, 12);
        const innerPetal = new THREE.Mesh(innerGeometry, innerPetalMaterial);

        innerPetal.scale.set(0.75, 1.2, 0.65);
        innerPetal.position.x = Math.cos(angle) * 0.82;
        innerPetal.position.y = Math.sin(angle) * 0.82;
        innerPetal.position.z = -0.1;

        innerPetal.rotation.z = angle;
        innerPetal.rotation.x = 0.25;

        group.add(innerPetal);
      }

      // Create 5 main outer petals - light pink
      const petalCount = 5;
      const petalMaterial = new THREE.MeshPhongMaterial({
        color: 0xffb6d9,
        shininess: 115,
        emissive: 0xff69b4,
        side: THREE.DoubleSide,
      });

      for (let i = 0; i < petalCount; i++) {
        const angle = (i / petalCount) * Math.PI * 2;

        // Create petal using LatheGeometry for more realistic shape
        const points = [
          new THREE.Vector2(0, 0),
          new THREE.Vector2(0.14, 0.08),
          new THREE.Vector2(0.28, 0.22),
          new THREE.Vector2(0.35, 0.42),
          new THREE.Vector2(0.32, 0.62),
          new THREE.Vector2(0.2, 0.72),
          new THREE.Vector2(0.09, 0.68),
          new THREE.Vector2(0.02, 0.38),
        ];
        const petalGeometry = new THREE.LatheGeometry(points, 14);
        const petal = new THREE.Mesh(petalGeometry, petalMaterial);

        // Scale and position petal
        petal.scale.set(0.7, 0.82, 0.62);
        petal.position.x = Math.cos(angle) * 1.15;
        petal.position.y = Math.sin(angle) * 1.15;
        petal.position.z = -0.2;

        // Rotate petal to face outward
        petal.rotation.z = angle;
        petal.rotation.x = 0.35;

        group.add(petal);
      }

      return group;
    };

    // Create cherry blossom particles
    const createBlossom = () => {
      const flower = createFlowerGeometry();

      flower.position.set(
        (Math.random() - 0.5) * 60,
        Math.random() * 40 + 20,
        (Math.random() - 0.5) * 60,
      );

      flower.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      );

      const scale = Math.random() * 0.784 + 0.49;
      flower.scale.set(scale, scale, scale);

      scene.add(flower);
      return flower;
    };

    // Create multiple blossoms
    const blossomCount = 30;
    const blossoms: THREE.Group[] = [];
    for (let i = 0; i < blossomCount; i++) {
      blossoms.push(createBlossom());
    }
    blossomMeshesRef.current = blossoms;

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate and animate blossoms
      blossoms.forEach((blossom, index) => {
        blossom.rotation.x += 0.01;
        blossom.rotation.y += 0.015;
        blossom.rotation.z += 0.008;

        // Gentle bobbing motion
        blossom.position.y -= 0.05 + (index % 3) * 0.02;

        // Reset position when below screen
        if (blossom.position.y < -20) {
          blossom.position.y = 40;
          blossom.position.x = (Math.random() - 0.5) * 60;
          blossom.position.z = (Math.random() - 0.5) * 60;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Scroll animation with GSAP
    gsap.to(blossoms, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
      onUpdate: () => {
        const scrollProgress = ScrollTrigger.getAll()[0]?.progress || 0;
        blossoms.forEach((blossom, index) => {
          // Move in 3D space based on scroll
          blossom.position.x +=
            (scrollProgress * 0.5 - blossom.position.x * 0.02) * 2;
          blossom.position.z += Math.sin(scrollProgress * Math.PI + index) * 5;
          blossom.rotation.z += scrollProgress * 0.1;
        });
      },
    });

    // Handle window resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen">
      <style>{`
        canvas {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-2xl text-center">
          3D Cherry Blossoms
        </h2>
        <p className="text-xl text-gray-200 drop-shadow-lg text-center px-4">
          Scroll to see them dance in 3D space ↓
        </p>
      </div>
    </div>
  );
}
