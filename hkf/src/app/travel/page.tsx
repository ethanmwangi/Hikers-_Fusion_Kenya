import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Travel | Hikers Fusion KE",
  description: "Trip planning across Kenya and East Africa with Hikers Fusion KE, including Diani and Mombasa beach packages.",
};

const generalWaLink = `https://wa.me/254181189908?text=${encodeURIComponent("Hi! I'd like help planning a trip with Hikers Fusion KE.")}`;

const destinations = [
  { slug: "diani", name: "Diani", image: "/images/travel/diani.jpg" },
  { slug: "mombasa", name: "Mombasa", image: "/images/travel/mombasa.jpg" },
];

function waLink(subject: string) {
  const text = `Hi! I'd like to enquire about a ${subject} package with Hikers Fusion KE.`;
  return `https://wa.me/254181189908?text=${encodeURIComponent(text)}`;
}

export default function TravelPage() {
  return (
    <main className="bg-[#FAF9F4]">
      <section className="relative flex min-h-[55vh] items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/services/travel.jpg')" }} />
        <div className="absolute inset-0 bg-[#18221D]/60" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 text-[#FAF9F4] lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C49A3A]">Travel</p>
          <h1 className="mt-4 font-serif text-5xl font-bold md:text-7xl">Travel Planning</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-[#F7F3E8]">
            We help plan trips for individuals and groups who want to explore Kenya, East Africa and beyond.
          </p>
        </div>
      </section>

      {/* BEACH DESTINATIONS */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">Beach Getaways</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[#18221D] md:text-4xl">Diani &amp; Mombasa Packages</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600">
              Tap a destination to send us an enquiry on WhatsApp &mdash; we&apos;ll follow up with an itinerary and quotation based on your dates and group size.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            {destinations.map((d, i) => (
              <Reveal key={d.slug} delay={i * 100}>
                <a
                  href={waLink(d.name)}
                  className="group relative block aspect-[4/3] overflow-hidden"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.image}
                    alt={`${d.name} beach`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#18221D]/35 transition group-hover:bg-[#18221D]/50" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="font-serif text-2xl font-bold text-[#FAF9F4]">{d.name}</span>
                    <span className="mt-1 block text-sm font-semibold uppercase tracking-[0.15em] text-[#C49A3A]">
                      Enquire on WhatsApp &rarr;
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM TRIPS */}
      <section className="px-6 py-24 text-center lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">Somewhere Else In Mind?</p>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-600">
            Have somewhere specific in mind? Tell us where you want to go, when you want to travel and who you are travelling with, and we&apos;ll help create an itinerary around your needs.
          </p>
          <a
            href={generalWaLink}
            className="mt-8 inline-block rounded-full bg-[#1F4D36] px-8 py-3.5 font-semibold text-[#FAF9F4] transition hover:bg-[#286447]"
          >
            Enquire on WhatsApp
          </a>
        </Reveal>
      </section>
    </main>
  );
}