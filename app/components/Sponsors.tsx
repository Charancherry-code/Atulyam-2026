export default function Sponsors() {
  const sponsors = [
    { id: 1, name: "Sakura Co.", url: "#" },
    { id: 2, name: "Hoshi Media", url: "#" },
    { id: 3, name: "Unity Arts", url: "#" },
  ];

  return (
    <section id="sponsors" className="py-16 relative" aria-labelledby="sponsor-title">
      <BlossomOverlay count={10} />
      <div className="max-w-6xl mx-auto px-6 text-center relative">
        <h2 id="sponsor-title" className="text-2xl md:text-3xl font-bold mb-6">Sponsors</h2>
        <p className="text-muted-foreground mb-8">We thank our generous partners and supporters</p>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          {sponsors.map((s) => (
            <a key={s.id} href={s.url} className="px-4 py-3 bg-white/5 rounded-md border border-white/10 hover:scale-105 transition-transform" aria-label={`${s.name} sponsor`}>
              <span className="text-sm font-medium">{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
