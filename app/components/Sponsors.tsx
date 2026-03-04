import ThreeDPanel from "./ThreeDPanel";
import SectionBlossoms3D from "./SectionBlossoms3D";

export default function Sponsors() {
  const items = [
    { id: 1, name: "Festival Hoodie", url: "#" },
    { id: 2, name: "Glow Badge Pack", url: "#" },
    { id: 3, name: "Limited Poster", url: "#" },
  ];

  return (
    <section
      id="merchandise"
      className="relative overflow-hidden py-16"
      aria-labelledby="merchandise-title"
    >
      <SectionBlossoms3D count={14} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2
          id="merchandise-title"
          className="text-2xl md:text-3xl font-bold mb-6 bg-linear-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent"
        >
          Merchandise
        </h2>
        <p className="text-violet-200/80 mb-8">
          Grab official ATULYAM collectibles and festival drops
        </p>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          {items.map((item) => (
            <ThreeDPanel key={item.id} className="rounded-md">
              <a
                href={item.url}
                className="px-5 py-3 bg-linear-to-br from-fuchsia-900/35 to-violet-900/25 rounded-md border border-fuchsia-200/20 hover:scale-105 transition-transform inline-block shadow-[0_0_16px_rgba(122,92,255,0.22)]"
                aria-label={`${item.name} merchandise`}
              >
                <span className="text-sm font-medium">{item.name}</span>
              </a>
            </ThreeDPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
