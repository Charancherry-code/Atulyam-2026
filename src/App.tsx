import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-night-dark text-white overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
};

export default App;
