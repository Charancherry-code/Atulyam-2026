import ToggleTheme from "./ToggleTheme";
import BlossomOverlay from "./BlossomOverlay";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 mt-20 py-8 relative">
      <BlossomOverlay count={12} />
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 relative">
        <div className="text-sm text-muted-foreground">© 2026 ATULYAM — Haru no Stars. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <nav aria-label="Footer navigation">
            <a href="#events" className="mr-4 text-sm hover:underline">Events</a>
            <a href="#sponsors" className="mr-4 text-sm hover:underline">Sponsors</a>
            <a href="#hero" className="text-sm hover:underline">Top</a>
          </nav>
          <ToggleTheme />
        </div>
      </div>
    </footer>
  );
}
