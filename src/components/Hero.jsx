import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import HeroContent from "./HeroContent";

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Three.js Canvas Background */}
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>

      {/* Hero Content Overlay */}
      <HeroContent />
    </div>
  );
}
