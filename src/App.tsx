import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-night-dark text-white overflow-x-hidden flex flex-col">
      <section className="flex-1">
        <Hero />
        <About />
      </section>
      <Footer />
    </main>
  );
};

export default App;
