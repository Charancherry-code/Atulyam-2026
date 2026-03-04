import Hero from "./components/Hero";
import CherryBlossoms3D from "./components/CherryBlossoms3D";

export default function Home() {
  return (
    <>
      <section id="hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="text-4xl font-bold text-center">
          ATULYAM 2026 — Haru no Stars
        </h1>
        <p className="mt-2 text-center text-muted-foreground">
          Where cultures bloom and stars shine
        </p>
        <Hero />
      </section>
      <section id="sakura-motion" aria-label="Cherry blossom motion experience">
        <CherryBlossoms3D />
      </section>
    </>
  );
}
