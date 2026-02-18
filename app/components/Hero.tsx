"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const blossomMeshesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    sceneRef.current = scene;

    // Camera setup
    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffa0d2, 1.2, 100);
    pointLight.position.set(10, 15, 20);
    scene.add(pointLight);

    // Create cherry blossom particles
    const createBlossom = () => {
      const geometry = new THREE.ConeGeometry(0.8, 1.5, 5);
      const material = new THREE.MeshPhongMaterial({
        color: 0xffc0cb,
        shininess: 100,
        emissive: 0xff69b4,
      });
      const blossom = new THREE.Mesh(geometry, material);

      blossom.position.set(
        (Math.random() - 0.5) * 80,
        Math.random() * 60 + 10,
        (Math.random() - 0.5) * 80
      );

      blossom.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = Math.random() * 0.4 + 0.25;
      blossom.scale.set(scale, scale, scale);

      scene.add(blossom);
      return blossom;
    };

    // Create multiple blossoms
    const blossomCount = 40;
    const blossoms: THREE.Mesh[] = [];
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
        blossom.rotation.x += 0.008;
        blossom.rotation.y += 0.012;
        blossom.rotation.z += 0.006;

        // Gentle falling motion with wave
        blossom.position.y -= 0.03 + (index % 4) * 0.01;
        blossom.position.x += Math.sin(Date.now() * 0.0001 + index) * 0.02;

        // Reset position when below screen
        if (blossom.position.y < -30) {
          blossom.position.y = 40;
          blossom.position.x = (Math.random() - 0.5) * 80;
          blossom.position.z = (Math.random() - 0.5) * 80;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

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
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        canvas {
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>

      {/* Hero content on top of 3D scene */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center animate-fade-in-up px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-linear-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            ATULYAM
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 bg-linear-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
            Haru no Stars
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 italic mb-4 tracking-wider">
            Where Cultures Bloom & Stars Shine
          </p>
          <span className="inline-block text-3xl sm:text-4xl animate-bounce">
            🌸
          </span>
        </div>
      </div>
    </div>
  );
}
