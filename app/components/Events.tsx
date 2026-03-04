
import ThreeDPanel from "./ThreeDPanel";

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
    <section id="events" className="py-20 bg-white/3" aria-labelledby="events-title">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="events-title" className="text-3xl md:text-4xl font-bold text-center mb-6">Events</h2>
        <p className="text-center text-muted-foreground mb-10">Featured highlights from the ATULYAM 2026 program</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e) => (
            <ThreeDPanel key={e.id} className="p-6 rounded-xl bg-linear-to-br from-white/10 to-white/3 border border-white/15 shadow-lg">
              <article>
                <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{e.date} • {e.time} — {e.location}</p>
                <p className="text-sm leading-relaxed">{e.desc}</p>
              </article>
            </ThreeDPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
