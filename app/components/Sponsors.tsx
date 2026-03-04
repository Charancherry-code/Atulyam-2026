
import ThreeDPanel from "./ThreeDPanel";

export default function Sponsors() {
  const sponsors = [
    { id: 1, name: "Sakura Co.", url: "#" },
    { id: 2, name: "Hoshi Media", url: "#" },
    { id: 3, name: "Unity Arts", url: "#" },
  ];

  return (
    <section id="sponsors" className="py-16" aria-labelledby="sponsor-title">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 id="sponsor-title" className="text-2xl md:text-3xl font-bold mb-6">Sponsors</h2>
        <p className="text-muted-foreground mb-8">We thank our generous partners and supporters</p>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          {sponsors.map((s) => (
            <ThreeDPanel key={s.id} className="rounded-md">
              <a href={s.url} className="px-5 py-3 bg-white/8 rounded-md border border-white/15 hover:scale-105 transition-transform inline-block" aria-label={`${s.name} sponsor`}>
                <span className="text-sm font-medium">{s.name}</span>
              </a>
            </ThreeDPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
