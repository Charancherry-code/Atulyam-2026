"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type SectionBlossoms3DProps = {
  count?: number;
};

type BlossomSprite = THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;

export default function SectionBlossoms3D({ count = 16 }: SectionBlossoms3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.CircleGeometry(0.1, 7);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff8ec6,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const blossomCount = prefersReducedMotion ? Math.max(6, Math.floor(count * 0.55)) : count;
    const blossoms: BlossomSprite[] = [];

    for (let index = 0; index < blossomCount; index++) {
      const blossom = new THREE.Mesh(geometry, material);
      blossom.position.set(
        (Math.random() - 0.5) * 10,
        Math.random() * 8 - 1,
        (Math.random() - 0.5) * 6,
      );
      const scale = 0.7 + Math.random() * 1.4;
      blossom.scale.set(scale, scale, scale);
      blossom.rotation.z = Math.random() * Math.PI * 2;
      blossom.userData = {
        speed: 0.006 + Math.random() * 0.012,
        drift: 0.002 + Math.random() * 0.008,
      };
      scene.add(blossom);
      blossoms.push(blossom);
    }

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const factor = prefersReducedMotion ? 0.45 : 1;

      blossoms.forEach((blossom, index) => {
        const speed = blossom.userData.speed as number;
        const drift = blossom.userData.drift as number;

        blossom.position.y -= speed * factor;
        blossom.position.x += Math.sin(time + index * 0.7) * drift * factor;
        blossom.rotation.z += 0.006 * factor;

        if (blossom.position.y < -4.8) {
          blossom.position.y = 5.2;
          blossom.position.x = (Math.random() - 0.5) * 10;
          blossom.position.z = (Math.random() - 0.5) * 6;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const nextWidth = container.clientWidth || window.innerWidth;
      const nextHeight = container.clientHeight || 500;
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-70"
    />
  );
}
