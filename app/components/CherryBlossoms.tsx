"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface Blossom {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const pseudoRandom = (seed: number) => {
  const value = Math.sin(seed * 9999.1) * 10000;
  return value - Math.floor(value);
};

export default function CherryBlossoms() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const blossoms = useMemo<Blossom[]>(() => {
    const count = 20;
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      left: pseudoRandom(index + 1) * 100,
      delay: pseudoRandom(index + 101) * 2,
      duration: 8 + pseudoRandom(index + 201) * 4,
      size: 10 + pseudoRandom(index + 301) * 20,
    }));
  }, []);

  useEffect(() => {
    let frameId = 0;

    // Handle scroll event
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const containerTop = scrollY + rect.top;
        const viewportCenter = window.innerHeight / 2;

        // Calculate scroll offset relative to this section
        const nextOffset = Math.max(
          0,
          scrollY - (containerTop - viewportCenter),
        );
        cancelAnimationFrame(frameId);
        frameId = requestAnimationFrame(() => setScrollOffset(nextOffset));
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-black overflow-hidden py-20 px-4"
    >
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(1000px);
            opacity: 0;
          }
        }
        @keyframes sway {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(30px);
          }
        }
        .blossom {
          position: absolute;
          animation: fall linear forwards, sway 3s ease-in-out infinite;
          opacity: 0.8;
          filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
        }
      `}</style>

      {/* Animated blossoms */}
      {blossoms.map((blossom) => (
        <div
          key={blossom.id}
          className="blossom"
          style={{
            left: `${blossom.left}%`,
            top: `-${blossom.size}px`,
            fontSize: `${blossom.size}px`,
            animationDelay: `${blossom.delay}s`,
            animationDuration: `${blossom.duration}s`,
            transform: `translateX(${scrollOffset * 0.3}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          🌸
        </div>
      ))}

      {/* Content section */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Scroll Down
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Watch the cherry blossoms dance as you scroll
          </p>
        </div>

        {/* Test content cards */}
        <div className="space-y-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-linear-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm p-8 rounded-lg border border-pink-400/30 hover:border-pink-400/60 transition-all"
            >
              <h3 className="text-2xl font-bold text-pink-300 mb-3">
                Section {item}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scroll
                to see the cherry blossoms move diagonally across the screen in
                a natural falling pattern. Each blossom has its own unique
                animation timing and movement.
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            Keep scrolling to see more blossoms ↓
          </p>
        </div>
      </div>
    </div>
  );
}
