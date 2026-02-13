import React, { useEffect, useRef, FC } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;

    if (!section || !title || !content) return;

    gsap.from(title, {
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(content.children, {
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-night-dark via-night-indigo to-night-dark py-20 px-6"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-10 w-48 h-48 bg-sakura-pink opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-gold opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          style={
            {
              background:
                "linear-gradient(135deg, #FFD700 0%, #FF69B4 50%, #FFED4E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            } as React.CSSProperties
          }
        >
          About ATULYAM
        </h2>

        <div ref={contentRef} className="space-y-8 text-center">
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            <span className="text-sakura-pink font-semibold">Haru</span> means{" "}
            <span className="text-gold font-semibold">spring</span> in Japanese
            culture—a season of{" "}
            <span className="text-sakura-light font-semibold">
              new beginnings
            </span>
            ,{" "}
            <span className="text-gold-light font-semibold">
              blooming beauty
            </span>
            , and endless possibilities.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            ATULYAM is a celebration of culture, creativity, and artistic
            expression. Like cherry blossoms blooming in spring, every
            participant shines with their unique brilliance.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-night-indigo bg-opacity-50 rounded-xl border border-sakura-pink border-opacity-20 hover:border-opacity-50 transition-all duration-300">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="text-xl font-bold text-sakura-pink mb-2">
                Cultural Performances
              </h3>
              <p className="text-gray-400">
                Showcasing traditional and contemporary art forms
              </p>
            </div>

            <div className="p-6 bg-night-indigo bg-opacity-50 rounded-xl border border-gold border-opacity-20 hover:border-opacity-50 transition-all duration-300">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gold mb-2">
                Creative Excellence
              </h3>
              <p className="text-gray-400">
                A platform for every star to shine bright
              </p>
            </div>

            <div className="p-6 bg-night-indigo bg-opacity-50 rounded-xl border border-sakura-light border-opacity-20 hover:border-opacity-50 transition-all duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-sakura-light mb-2">
                Artistic Innovation
              </h3>
              <p className="text-gray-400">
                Where tradition meets modern expression
              </p>
            </div>
          </div>

          <div className="mt-16">
            <button className="px-12 py-4 bg-gradient-to-r from-gold to-sakura-pink text-night-dark font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
              Join the Celebration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
