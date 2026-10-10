import type { Metadata } from "next";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Hiking | Hikers Fusion KE",
  description: "Mount Kenya routes and Aberdare Range hiking experiences with Hikers Fusion KE.",
};

type Route = { slug: string; name: string; desc: string; image: string };

const routes: Route[] = [
  { slug: "sirimon", name: "Sirimon", image: "/images/routes/sirimoni.jpg",
    desc: "Forest, moorland and beautiful mountain scenery." },
  { slug: "chogoria", name: "Chogoria", image: "/images/routes/chogoria.jpg",
    desc: "Known for valleys, waterfalls, dramatic landscapes and scenic views." },
  { slug: "naro-moru", name: "Naro Moru", image: "/images/routes/naro-moru.jpg",
    desc: "A popular route providing access to the higher parts of the mountain." },
  { slug: "burguret", name: "Burguret", image: "/images/routes/burguret.jpg",
    desc: "A quieter and more remote route for those looking for a less crowded experience." },
];

const aberdarePeaks = [
  "Mt Satima / Ol Donyo Lesatima",
  "Kinangop",
  "Elephant Hill",
  "The Table",
  "Rurimeria",
  "Mt Kipipiri",
  "Seven Ponds",
];

// Pre-fills a WhatsApp message with the specific route/peak name, so a tap
// sends a ready-to-send enquiry rather than just opening a blank chat.
function waLink(subject: string) {
  const text = `Hi! I'd like to enquire about the ${subject} on Mount Kenya / the Aberdares.`;
  return `https://wa.me/254181189908?text=${encodeURIComponent(text)}`;
}

export default function HikingPage() {
  return (
    <main className="bg-[#FAF9F4]">
      <section className="relative flex min-h-[55vh] items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }} />
        <div className="absolute inset-0 bg-[#18221D]/60" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 text-[#FAF9F4] lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C49A3A]">Hiking</p>
          <h1 className="mt-4 font-serif text-5xl font-bold md:text-7xl">Explore Mount Kenya</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-[#F7F3E8]">
            Mount Kenya offers a range of experiences, from scenic day hikes and mountain walks to multi-day trekking adventures and summit attempts. We can help you explore the mountain through different routes depending on your experience, fitness, available time and the kind of scenery you want to experience.
          </p>
        </div>
      </section>

      {/* ROUTES */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-24">
          {routes.map((route, i) => (
            <Reveal
              key={route.slug}
              id={route.slug}
              className={`scroll-mt-24 flex flex-col items-center gap-10 md:gap-16 ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden md:w-1/2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={route.image} alt={route.name} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <span className="font-serif text-6xl font-light text-[#C49A3A]/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-serif text-3xl font-bold text-[#18221D] md:text-4xl">{route.name}</h2>
                <p className="mt-4 max-w-md leading-relaxed text-gray-600">{route.desc}</p>
                <p className="mt-2 text-sm text-gray-500">Contact for rates &mdash; itinerary built around your dates and group size.</p>
                <a
                  href={waLink(route.name)}
                  className="mt-6 inline-block rounded-full bg-[#1F4D36] px-6 py-2.5 text-sm font-semibold text-[#FAF9F4] transition hover:bg-[#286447]"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABERDARES */}
      <section id="aberdares" className="scroll-mt-24 border-t border-[#C49A3A]/30 px-6 py-24 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">Explore The Aberdares</p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-[#18221D] md:text-5xl">The Aberdare Range</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600">
            The Aberdare Range offers a mix of mountain scenery, forests, wildlife, hiking, camping and scenic drives. From exploring the highlands to camping in the mountains, the Aberdares offer different ways to experience the outdoors.
          </p>
        </Reveal>
        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-3">
          {aberdarePeaks.map((peak, i) => (
            <Reveal key={peak} delay={i * 80}>
              <a
                href={waLink(peak)}
                className="rounded-full border border-[#1F4D36]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#18221D] transition hover:border-[#C49A3A] hover:text-[#1F4D36]"
              >
                {peak}
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">Tap a peak to enquire on WhatsApp.</p>
      </section>
    </main>
  );
}