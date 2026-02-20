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

    // Create realistic cherry blossom flower
    const createFlowerGeometry = () => {
      const group = new THREE.Group();

      // Center stamen - brown/red color like real blossoms
      const stamenGeometry = new THREE.SphereGeometry(0.2, 10, 10);
      const stamenMaterial = new THREE.MeshPhongMaterial({
        color: 0xa0522d,
        shininess: 80,
        emissive: 0x8b4513,
      });
      const stamen = new THREE.Mesh(stamenGeometry, stamenMaterial);
      group.add(stamen);

      // Add small stamens around center
      for (let s = 0; s < 5; s++) {
        const smallStamen = new THREE.Mesh(
          new THREE.SphereGeometry(0.06, 8, 8),
          new THREE.MeshPhongMaterial({
            color: 0xcd853f,
            shininess: 70,
          }),
        );
        const sAngle = (s / 5) * Math.PI * 2;
        smallStamen.position.set(
          Math.cos(sAngle) * 0.22,
          Math.sin(sAngle) * 0.22,
          0.12,
        );
        group.add(smallStamen);
      }

      // Create full layer of petals - white with pink edges, matching reference image
      const petalCount = 12;
      const petalMaterial = new THREE.MeshPhongMaterial({
        color: 0xfff5f7,
        shininess: 100,
        emissive: 0xffc0d9,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.93,
      });

      // Create delicate petal shape with wavy ruffled edges
      const createPetalShape = () => [
        new THREE.Vector2(0, 0),
        new THREE.Vector2(0.08, 0.03),
        new THREE.Vector2(0.14, 0.07),
        new THREE.Vector2(0.19, 0.12),
        new THREE.Vector2(0.24, 0.18),
        new THREE.Vector2(0.28, 0.28),
        new THREE.Vector2(0.3, 0.38),
        new THREE.Vector2(0.31, 0.5),
        new THREE.Vector2(0.3, 0.62),
        new THREE.Vector2(0.27, 0.72),
        new THREE.Vector2(0.23, 0.8),
        new THREE.Vector2(0.18, 0.86),
        new THREE.Vector2(0.12, 0.88),
        new THREE.Vector2(0.06, 0.86),
        new THREE.Vector2(0.02, 0.82),
      ];

      // Create petals arranged in fuller circular pattern
      for (let i = 0; i < petalCount; i++) {
        const angle = (i / petalCount) * Math.PI * 2;

        const points = createPetalShape();
        const petalGeometry = new THREE.LatheGeometry(points, 16);
        const petal = new THREE.Mesh(petalGeometry, petalMaterial);

        petal.scale.set(0.62, 0.82, 0.48);
        petal.position.x = Math.cos(angle) * 0.88;
        petal.position.y = Math.sin(angle) * 0.88;
        petal.position.z = -0.02;

        petal.rotation.z = angle;
        petal.rotation.x = 0.35 + Math.random() * 0.1;
        petal.rotation.y = Math.random() * 0.2;

        group.add(petal);
      }

      // Add subtle second layer petals for fuller appearance
      const petalCount2 = 12;
      for (let i = 0; i < petalCount2; i++) {
        const angle = (i / petalCount2) * Math.PI * 2 + Math.PI / petalCount2;

        const points = createPetalShape();
        const petalGeometry = new THREE.LatheGeometry(points, 16);
        const petal = new THREE.Mesh(petalGeometry, petalMaterial);

        petal.scale.set(0.55, 0.75, 0.45);
        petal.position.x = Math.cos(angle) * 0.78;
        petal.position.y = Math.sin(angle) * 0.78;
        petal.position.z = 0.08;

        petal.rotation.z = angle;
        petal.rotation.x = 0.35;

        group.add(petal);
      }

      return group;
    };

    // Create falling petal particles
    const createFallingPetal = () => {
      const petalMaterial = new THREE.MeshPhongMaterial({
        color: 0xfff5f7,
        shininess: 100,
        emissive: 0xffb6d9,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
      });

      const points = [
        new THREE.Vector2(0, 0),
        new THREE.Vector2(0.08, 0.05),
        new THREE.Vector2(0.15, 0.12),
        new THREE.Vector2(0.2, 0.3),
        new THREE.Vector2(0.18, 0.5),
        new THREE.Vector2(0.1, 0.62),
        new THREE.Vector2(0.02, 0.58),
      ];
      const petalGeometry = new THREE.LatheGeometry(points, 12);
      const petal = new THREE.Mesh(petalGeometry, petalMaterial);

      petal.scale.set(0.52, 0.72, 0.48);
      petal.position.set(
        (Math.random() - 0.5) * 60,
        Math.random() * 40 + 20,
        (Math.random() - 0.5) * 60,
      );

      petal.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
      );

      return petal;
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

      const scale = Math.random() * 0.627 + 0.392;
      flower.scale.set(scale, scale, scale);

      scene.add(flower);
      return flower;
    };

    // Create multiple blossoms and falling petals
    const blossomCount = 15;
    const blossoms: THREE.Group[] = [];
    for (let i = 0; i < blossomCount; i++) {
      blossoms.push(createBlossom());
    }
    blossomMeshesRef.current = blossoms;

    // Create falling petals
    const petalCount = 80;
    const fallingPetals: THREE.Mesh[] = [];
    for (let i = 0; i < petalCount; i++) {
      const petal = createFallingPetal();
      scene.add(petal);
      fallingPetals.push(petal);
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate and animate blossoms (slower)
      blossoms.forEach((blossom, index) => {
        blossom.rotation.x += 0.008;
        blossom.rotation.y += 0.012;
        blossom.rotation.z += 0.006;

        blossom.position.y -= 0.03 + (index % 3) * 0.01;

        if (blossom.position.y < -25) {
          blossom.position.y = 45;
          blossom.position.x = (Math.random() - 0.5) * 65;
          blossom.position.z = (Math.random() - 0.5) * 65;
        }
      });

      // Animate falling petals (faster falling and spinning)
      fallingPetals.forEach((petal, index) => {
        petal.rotation.x += 0.025 + Math.random() * 0.01;
        petal.rotation.y += 0.02 + Math.random() * 0.008;
        petal.rotation.z += 0.03;

        petal.position.y -= 0.12 + (index % 5) * 0.03;
        petal.position.x += Math.sin(Date.now() * 0.0003 + index) * 0.06;
        petal.position.z += Math.cos(Date.now() * 0.00025 + index * 0.5) * 0.03;

        if (petal.position.y < -30) {
          petal.position.y = 50;
          petal.position.x = (Math.random() - 0.5) * 70;
          petal.position.z = (Math.random() - 0.5) * 70;
          petal.rotation.set(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
          );
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Scroll animation with GSAP
    const scrollTween = gsap.to(blossoms, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        blossoms.forEach((blossom, index) => {
          // Move in 3D space based on scroll
          blossom.position.x +=
            (scrollProgress * 0.5 - blossom.position.x * 0.02) * 2;
          blossom.position.z += Math.sin(scrollProgress * Math.PI + index) * 5;
          blossom.rotation.z += scrollProgress * 0.1;
        });
        // Petals also move with scroll
        fallingPetals.forEach((petal, index) => {
          petal.position.x += scrollProgress * 0.3 * Math.cos(index);
          petal.position.z +=
            Math.sin(scrollProgress * Math.PI + index * 0.5) * 3;
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
      scrollTween.kill();
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
