import ToggleTheme from "./ToggleTheme";
import ThreeDPanel from "./ThreeDPanel";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 mt-20 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <ThreeDPanel className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm text-muted-foreground">© 2026 ATULYAM — Haru no Stars. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <nav aria-label="Footer navigation">
              <a href="#events" className="mr-4 text-sm hover:underline">Events</a>
              <a href="#sponsors" className="mr-4 text-sm hover:underline">Sponsors</a>
              <a href="#hero" className="text-sm hover:underline">Top</a>
            </nav>
            <ToggleTheme />
          </div>
        </ThreeDPanel>
      </div>
    </footer>
  );
}
