import ThreeDPanel from "./ThreeDPanel";
import SectionBlossoms3D from "./SectionBlossoms3D";

export default function Sponsors() {
  const sponsors = [
    { id: 1, name: "Sakura Co.", url: "#" },
    { id: 2, name: "Hoshi Media", url: "#" },
    { id: 3, name: "Unity Arts", url: "#" },
  ];

  return (
    <section
      id="sponsors"
      className="relative overflow-hidden py-16"
      aria-labelledby="sponsor-title"
    >
      <SectionBlossoms3D count={14} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2
          id="sponsor-title"
          className="text-2xl md:text-3xl font-bold mb-6 bg-linear-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent"
        >
          Sponsors
        </h2>
        <p className="text-violet-200/80 mb-8">
          We thank our generous partners and supporters
        </p>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          {sponsors.map((s) => (
            <ThreeDPanel key={s.id} className="rounded-md">
              <a
                href={s.url}
                className="px-5 py-3 bg-linear-to-br from-fuchsia-900/35 to-violet-900/25 rounded-md border border-fuchsia-200/20 hover:scale-105 transition-transform inline-block shadow-[0_0_16px_rgba(122,92,255,0.22)]"
                aria-label={`${s.name} sponsor`}
              >
                <span className="text-sm font-medium">{s.name}</span>
              </a>
            </ThreeDPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
