import Hero from "./components/Hero";
import CherryBlossoms3D from "./components/CherryBlossoms3D";

export default function Home() {
  return (
    <>
      <section id="hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="sr-only">
          ATULYAM 2026
        </h1>
        <Hero />
      </section>
      <section
        id="sakura-motion"
        aria-label="Cherry blossom motion experience"
      >
        <CherryBlossoms3D />
      </section>
    </>
  );
}
