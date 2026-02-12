import Hero from "./components/Hero";
import About from "./components/About";

export default function App() {
  return (
    <main className="w-full min-h-screen bg-night-dark text-white overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
}
