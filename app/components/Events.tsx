import ThreeDPanel from "./ThreeDPanel";
import SectionBlossoms3D from "./SectionBlossoms3D";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Opening Ceremony",
      date: "2026-04-10",
      time: "10:00 AM",
      location: "Main Stage",
      desc: "Join us for the grand opening with music, dance and announcements.",
    },
    {
      id: 2,
      title: "Cultural Parade",
      date: "2026-04-11",
      time: "2:00 PM",
      location: "Parade Route",
      desc: "A colorful procession celebrating traditions and creativity.",
    },
    {
      id: 3,
      title: "Sakura Night Concert",
      date: "2026-04-11",
      time: "7:30 PM",
      location: "Open Air Arena",
      desc: "An evening concert under the cherry blossoms.",
    },
  ];

  return (
    <section
      id="events"
      className="relative overflow-hidden pt-12 pb-20 bg-linear-to-b from-transparent via-fuchsia-900/10 to-violet-900/10"
      aria-labelledby="events-title"
    >
      <SectionBlossoms3D count={18} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2
          id="events-title"
          className="text-3xl md:text-4xl font-bold text-center mb-6 bg-linear-to-r from-fuchsia-300 to-violet-300 bg-clip-text text-transparent"
        >
          Events
        </h2>
        <p className="text-center text-violet-200/80 mb-10">
          Featured highlights from the ATULYAM 2026 program
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e) => (
            <ThreeDPanel
              key={e.id}
              className="p-6 rounded-xl bg-linear-to-br from-fuchsia-900/35 to-violet-900/25 border border-fuchsia-200/20 shadow-[0_0_24px_rgba(255,42,122,0.2)]"
            >
              <article>
                <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
                <p className="text-sm text-violet-200/80 mb-3">
                  {e.date} • {e.time} — {e.location}
                </p>
                <p className="text-sm leading-relaxed">{e.desc}</p>
              </article>
            </ThreeDPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
