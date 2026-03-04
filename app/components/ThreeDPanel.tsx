"use client";

import { ReactNode, useState } from "react";

interface ThreeDPanelProps {
  children: ReactNode;
  className?: string;
}

export default function ThreeDPanel({
  children,
  className = "",
}: ThreeDPanelProps) {
  const [transform, setTransform] = useState(
    "rotateX(0deg) rotateY(0deg) translateZ(0px)",
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;

    const rotateY = (px - 0.5) * 10;
    const rotateX = (0.5 - py) * 8;
    setTransform(
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`,
    );
  };

  const resetTransform = () => {
    setTransform("rotateX(0deg) rotateY(0deg) translateZ(0px)");
  };

  return (
    <div className="perspective-distant">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
        className={`transition-transform duration-200 ease-out will-change-transform hover:shadow-[0_0_24px_rgba(255,42,122,0.2)] ${className}`}
        style={{ transform, transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}
