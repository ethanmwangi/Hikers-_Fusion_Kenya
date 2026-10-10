import type { Metadata } from "next";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Travel | Hikers Fusion KE",
  description: "Trip planning across Kenya and East Africa with Hikers Fusion KE.",
};

const waLink = `https://wa.me/254181189908?text=${encodeURIComponent("Hi! I'd like help planning a trip with Hikers Fusion KE.")}`;

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

      <section className="px-6 py-24 text-center lg:px-8">
        <Reveal>
          <p className="mx-auto max-w-xl leading-relaxed text-gray-600">
            Have somewhere specific in mind? Tell us where you want to go, when you want to travel and who you are travelling with, and we&apos;ll help create an itinerary around your needs.
          </p>
          <a
            href={waLink}
            className="mt-8 inline-block rounded-full bg-[#1F4D36] px-8 py-3.5 font-semibold text-[#FAF9F4] transition hover:bg-[#286447]"
          >
            Enquire on WhatsApp
          </a>
        </Reveal>
      </section>
    </main>
  );
}