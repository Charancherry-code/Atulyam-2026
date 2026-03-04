import ToggleTheme from "./ToggleTheme";
import ThreeDPanel from "./ThreeDPanel";

export default function Footer() {
  return (
    <footer className="border-t border-fuchsia-200/15 mt-20 py-8 bg-linear-to-b from-transparent to-violet-950/25">
      <div className="max-w-6xl mx-auto px-6">
        <ThreeDPanel className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl border border-fuchsia-200/20 bg-linear-to-br from-fuchsia-950/35 to-violet-950/30 p-5 shadow-[0_0_22px_rgba(255,42,122,0.18)]">
          <div className="text-sm text-violet-200/85">
            © 2026 ATULYAM — Haru no Stars. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <nav aria-label="Footer navigation">
              <a href="#events" className="mr-4 text-sm hover:underline">
                Events
              </a>
              <a href="#timeline" className="mr-4 text-sm hover:underline">
                Timeline
              </a>
              <a href="#about" className="mr-4 text-sm hover:underline">
                About
              </a>
              <a href="#merchandise" className="mr-4 text-sm hover:underline">
                Merchandise
              </a>
              <a href="#hero" className="text-sm hover:underline">
                Top
              </a>
            </nav>
            <ToggleTheme />
          </div>
        </ThreeDPanel>
      </div>
    </footer>
  );
}
