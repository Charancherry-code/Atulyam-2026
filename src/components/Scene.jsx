import { useRef, useMemo, useLayoutEffect } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

function Stars() {
  const starsRef = useRef(null);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const starCount = 2000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 50;

      const brightness = Math.random() * 0.5 + 0.5;
      colors[i] = brightness;
      colors[i + 1] = brightness;
      colors[i + 2] = brightness;
    }

    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geom;
  }, []);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.z += 0.00005;
      starsRef.current.rotation.y += 0.00003;
    }
  });

  return (
    <points ref={starsRef} geometry={geometry}>
      <pointsMaterial size={0.1} vertexColors sizeAttenuation />
    </points>
  );
}

function FloatingParticles() {
  const particlesRef = useRef(null);
  const particlesGeometryRef = useRef(null);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const particleCount = 300;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 15;
      positions[i + 1] = (Math.random() - 0.5) * 15;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }

    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeometryRef.current = geom;
    return geom;
  }, []);

  useFrame(() => {
    if (particlesGeometryRef.current) {
      const positions = particlesGeometryRef.current.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(Date.now() * 0.0001 + i) * 0.001;
        positions[i] += Math.cos(Date.now() * 0.00008 + i) * 0.0005;
      }
      particlesGeometryRef.current.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.15}
        color={0xffd700}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function SakuraPetals() {
  const sakuraRef = useRef(null);
  const sakuraGeometryRef = useRef(null);
  const velocitiesRef = useRef(null);
  const scrollFactorRef = useRef(1);

  const sakuraCount = 500;

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(sakuraCount * 3);
    const velocities = new Float32Array(sakuraCount * 3);

    for (let i = 0; i < sakuraCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = Math.random() * 15;
      positions[i + 2] = (Math.random() - 0.5) * 8;

      velocities[i] = (Math.random() - 0.5) * 0.02;
      velocities[i + 1] = -Math.random() * 0.01;
      velocities[i + 2] = (Math.random() - 0.5) * 0.005;
    }

    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    sakuraGeometryRef.current = geom;
    velocitiesRef.current = velocities;
    return geom;
  }, []);

  useFrame(() => {
    if (sakuraGeometryRef.current && velocitiesRef.current) {
      const positions = sakuraGeometryRef.current.attributes.position.array;
      const velocities = velocitiesRef.current;
      const scrollY = window.scrollY || 0;

      // Increase scroll factor based on scroll depth
      scrollFactorRef.current = 1 + Math.min(scrollY / 1000, 1);

      for (let i = 0; i < sakuraCount * 3; i += 3) {
        positions[i] += velocities[i] * scrollFactorRef.current;
        positions[i + 1] += velocities[i + 1] * scrollFactorRef.current;
        positions[i + 2] += velocities[i + 2];

        // Add wind sway - increases with scroll
        positions[i] +=
          Math.sin(Date.now() * 0.0001 + i) * 0.002 * scrollFactorRef.current;

        // Reset if below
        if (positions[i + 1] < -10) {
          positions[i + 1] = 15;
          positions[i] = (Math.random() - 0.5) * 20;
        }
      }

      sakuraGeometryRef.current.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={sakuraRef} geometry={geometry}>
      <pointsMaterial
        size={0.2}
        color={0xff69b4}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene() {
  const { camera } = useThree();
  const cameraZRef = useRef(5);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      const scrollFactor = Math.min(scrollY / 1000, 3);
      camera.position.y = -scrollY * 0.001 * 5;
      camera.position.z = 5 + scrollFactor * 0.5;
      cameraZRef.current = camera.position.z;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [camera]);

  useFrame(() => {
    // Subtle camera drift
    camera.position.x = Math.sin(Date.now() * 0.00005) * 0.3;
  });

  return (
    <>
      <color attach="background" args={["#050812"]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color={0xffd700} />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color={0xff69b4} />
      <Stars />
      <FloatingParticles />
      <SakuraPetals />
    </>
  );
}
