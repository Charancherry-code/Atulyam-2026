import Hero from "./components/Hero";
import CherryBlossoms3D from "./components/CherryBlossoms3D";

export default function Home() {
  return (
    <>
      <Hero />
      <section aria-label="Cherry blossom motion experience">
        <CherryBlossoms3D />
      </section>
    </>
  );
}
