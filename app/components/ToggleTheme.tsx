"use client";

import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      aria-pressed={theme === "dark"}
      className="px-3 py-1 rounded-md bg-white/10 backdrop-blur text-sm"
    >
      {theme === "dark" ? "Switch to light" : "Switch to dark"}
    </button>
  );
}
