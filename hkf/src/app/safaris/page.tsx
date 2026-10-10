import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safaris | Hikers Fusion KE",
  description: "Wildlife and safari experiences across Kenya with Hikers Fusion KE.",
};

const destinations = ["Nairobi National Park", "Amboseli", "Maasai Mara", "Lake Nakuru", "Samburu", "Tsavo"];

function waLink(subject: string) {
  const text = `Hi! I'd like to enquire about a safari to ${subject}.`;
  return `https://wa.me/254181189908?text=${encodeURIComponent(text)}`;
}

export default function SafarisPage() {
  return (
    <main className="bg-[#FAF9F4]">
      <section className="relative flex min-h-[55vh] items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/services/safaris.jpg')" }} />
        <div className="absolute inset-0 bg-[#18221D]/60" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 text-[#FAF9F4] lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C49A3A]">Safaris</p>
          <h1 className="mt-4 font-serif text-5xl font-bold md:text-7xl">Wildlife &amp; Safari Experiences</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-[#F7F3E8]">
            Discover Kenya&apos;s wildlife through game drives and carefully planned safari experiences. From Nairobi National Park and nearby wildlife experiences to longer safaris across Kenya, we can help you plan an experience that fits your time, group and budget.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-3xl font-bold text-[#18221D] md:text-4xl">Destinations</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-gray-600">
            Tap a destination to send us an enquiry on WhatsApp &mdash; we&apos;ll follow up with an itinerary and quotation based on your dates and group size.
          </p>
          <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
            {destinations.map((d) => (
              <a
                key={d}
                href={waLink(d)}
                className="flex items-center justify-between border border-[#1F4D36]/15 bg-white px-6 py-5 font-semibold text-[#18221D] transition hover:border-[#C49A3A] hover:text-[#1F4D36]"
              >
                {d}
                <span className="text-[#C49A3A]">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}