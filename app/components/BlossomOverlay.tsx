"use client";

import { useMemo } from "react";

export default function BlossomOverlay({ count = 20 }: { count?: number }) {
  const blossoms = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.floor(Math.random() * 100),
      delay: (Math.random() * 6).toFixed(2),
      duration: (6 + Math.random() * 6).toFixed(2),
      size: 12 + Math.floor(Math.random() * 28),
    }));
  }, [count]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes blossomFall { to { transform: translateY(110vh) rotate(720deg); opacity: 0; } }
        @keyframes blossomSway { 0% { transform: translateX(0); } 50% { transform: translateX(24px); } 100% { transform: translateX(0); } }
        .blossom-emoji { position: absolute; will-change: transform, opacity; filter: drop-shadow(0 6px 12px rgba(0,0,0,0.35)); }
      `}</style>

      {blossoms.map((b) => (
        <div
          key={b.id}
          className="blossom-emoji"
          style={{
            left: `${b.left}%`,
            top: `-${b.size}px`,
            fontSize: `${b.size}px`,
            animation: `blossomFall ${b.duration}s linear ${b.delay}s forwards, blossomSway ${3 + (b.id % 3)}s ease-in-out ${b.delay}s infinite`,
            color: "var(--accent)",
            opacity: 0.95,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
}
