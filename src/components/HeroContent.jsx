import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroContent() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Intro animation timeline
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    })
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1",
      )
      .from(
        taglineRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1",
      )
      .from(
        buttonRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.8",
      );

    // Floating animation for title
    gsap.to(titleRef.current, {
      y: -20,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Subtle floating for subtitle
    gsap.to(subtitleRef.current, {
      y: -10,
      duration: 5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Button hover glow effect
    const button = buttonRef.current;
    if (button) {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          boxShadow:
            "0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 105, 180, 0.4)",
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
      {/* Main title */}
      <div
        ref={titleRef}
        className="text-center mb-6"
        style={{
          filter: "drop-shadow(0 0 30px rgba(255, 215, 0, 0.5))",
        }}
      >
        <h1
          className="text-7xl md:text-8xl font-black tracking-wider"
          style={{
            background:
              "linear-gradient(135deg, #FFD700 0%, #FF69B4 50%, #FFED4E 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 30px rgba(255, 215, 0, 0.3)",
          }}
        >
          ATULYAM
        </h1>
      </div>

      {/* Subtitle with sakura emoji */}
      <div ref={subtitleRef} className="mb-8 text-center">
        <p
          className="text-3xl md:text-5xl font-light tracking-widest"
          style={{
            background: "linear-gradient(90deg, #FF69B4 0%, #FFD700 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Haru no Stars 🌸
        </p>
      </div>

      {/* Tagline */}
      <div ref={taglineRef} className="mb-12 px-6 text-center">
        <p className="text-lg md:text-2xl text-gray-200 font-light italic tracking-wide">
          "Where Cultures Bloom & Stars Shine"
        </p>
      </div>

      {/* CTA Button */}
      <button
        ref={buttonRef}
        className="pointer-events-auto px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #FFD700 0%, #FF69B4 100%)",
          color: "#050812",
          boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
          fontSize: "1.125rem",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        Register Now
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <svg
          className="w-6 h-6 text-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
