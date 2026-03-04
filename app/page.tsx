import Hero from "./components/Hero";
import CherryBlossoms3D from "./components/CherryBlossoms3D";
import Events from "./components/Events";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <section id="hero" aria-labelledby="hero-title">
        <h1
          id="hero-title"
          className="text-4xl md:text-5xl font-black text-center tracking-wide bg-linear-to-r from-fuchsia-300 via-pink-300 to-violet-300 bg-clip-text text-transparent"
        >
          ATULYAM 2026 — Haru no Stars
        </h1>
        <p className="mt-2 text-center text-violet-200/85">
          Where cultures bloom and stars shine
        </p>
        <Hero />
      </section>
      <section id="sakura-motion" aria-label="Cherry blossom motion experience">
        <CherryBlossoms3D />
      </section>

      <Events />

      <Sponsors />

      <Footer />
    </>
  );
}
