import Hero from "./components/Hero";
import Events from "./components/Events";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import ThreeDPanel from "./components/ThreeDPanel";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-fuchsia-200/20 bg-[#070312]/80 backdrop-blur-md">
        <nav
          aria-label="Primary"
          className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-center gap-4 md:gap-8 text-sm md:text-base"
        >
          <a href="#hero" className="hover:text-fuchsia-300 transition-colors">
            Home
          </a>
          <a href="#events" className="hover:text-fuchsia-300 transition-colors">
            Events
          </a>
          <a href="#timeline" className="hover:text-fuchsia-300 transition-colors">
            Timeline
          </a>
          <a href="#about" className="hover:text-fuchsia-300 transition-colors">
            About
          </a>
          <a href="#merchandise" className="hover:text-fuchsia-300 transition-colors">
            Merchandise
          </a>
        </nav>
      </header>

      <section id="hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="sr-only">
          ATULYAM 2026 — Haru no Stars
        </h1>
        <Hero />
      </section>

      <Events />

      <section id="timeline" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-linear-to-r from-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
            Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ThreeDPanel className="p-5 rounded-xl border border-fuchsia-200/20 bg-linear-to-br from-fuchsia-950/35 to-violet-950/25">
              <p className="text-sm text-violet-200/85">Day 1 • Opening & performances</p>
            </ThreeDPanel>
            <ThreeDPanel className="p-5 rounded-xl border border-fuchsia-200/20 bg-linear-to-br from-fuchsia-950/35 to-violet-950/25">
              <p className="text-sm text-violet-200/85">Day 2 • Competitions & cultural parade</p>
            </ThreeDPanel>
            <ThreeDPanel className="p-5 rounded-xl border border-fuchsia-200/20 bg-linear-to-br from-fuchsia-950/35 to-violet-950/25">
              <p className="text-sm text-violet-200/85">Day 3 • Headliner night & closing</p>
            </ThreeDPanel>
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-linear-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
            About
          </h2>
          <p className="text-violet-200/85 leading-relaxed">
            ATULYAM 2026 celebrates culture, performance, creativity, and
            collaboration through an immersive festival experience inspired by
            spring bloom and cosmic energy.
          </p>
        </div>
      </section>

      <Sponsors />

      <Footer />
    </>
  );
}
