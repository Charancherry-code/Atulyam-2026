import { useEffect } from "react";
import Hero from "./components/Hero";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Smooth scroll
    document.documentElement.style.scrollBehavior = "smooth";

    // Prevent scroll jump on page load
    window.scrollTo(0, 0);

    // Scroll animations
    gsap.utils.toArray(".fade-in").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="w-full h-full bg-night-dark text-white overflow-x-hidden">
      <Hero />

      {/* Additional sections can be added here */}
      <div className="relative h-[200vh] bg-linear-to-b from-night-indigo via-night-dark to-night-dark">
        <div className="sticky top-0 h-screen flex items-center justify-center fade-in">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-linear-to-r from-gold via-sakura-pink to-gold-light bg-clip-text text-transparent">
              Experience Culture. Celebrate Creativity.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              ATULYAM brings together the best of cultural performances, art
              installations, and interactive experiences. Like cherry blossoms
              blooming in spring, every creator here shines with their unique
              brilliance.
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-screen bg-linear-to-b from-night-dark to-night-indigo flex items-center justify-center fade-in">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Ready to Bloom?
          </h2>
          <button className="mt-12 px-8 py-4 bg-linear-to-r from-gold to-sakura-pink text-night-dark font-bold text-lg rounded-lg animate-glow hover:scale-110 transition-transform duration-300 cursor-pointer">
            Register Now
          </button>
        </div>
      </div>
    </main>
  );
}
