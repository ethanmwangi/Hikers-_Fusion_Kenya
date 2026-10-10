import Reveal from "../components/Reveal";

type Item = { slug: string; title: string; desc: string; href: string; image: string };

const services: Item[] = [
  { slug: "hiking", title: "Hiking", href: "/hiking", image: "/images/services/hiking.jpg",
    desc: "Explore mountains, hills, forests and scenic trails across Kenya, East Africa and beyond." },
  { slug: "safaris", title: "Safaris", href: "/safaris", image: "/images/services/safaris.jpg",
    desc: "Experience Kenya's wildlife and natural landscapes through game drives and safari experiences." },
  { slug: "camping", title: "Camping", href: "/camping", image: "/images/services/camping.jpg",
    desc: "Get closer to nature through camping experiences across Kenya, East Africa and beyond." },
  { slug: "travel", title: "Travel", href: "/travel", image: "/images/services/travel.jpg",
    desc: "We help plan trips for individuals and groups who want to explore Kenya, East Africa and beyond." },
];

const routes: Item[] = [
  { slug: "sirimon", title: "Sirimon", href: "/hiking#sirimon", image: "/images/routes/sirimoni.jpg",
    desc: "Forest, moorland and beautiful mountain scenery." },
  { slug: "chogoria", title: "Chogoria", href: "/hiking#chogoria", image: "/images/routes/chogoria.jpg",
    desc: "Known for valleys, waterfalls, dramatic landscapes and scenic views." },
  { slug: "naro-moru", title: "Naro Moru", href: "/hiking#naro-moru", image: "/images/routes/naro-moru.jpg",
    desc: "A popular route providing access to the higher parts of the mountain." },
  { slug: "burguret", title: "Burguret", href: "/hiking#burguret", image: "/images/routes/burguret.jpg",
    desc: "A quieter and more remote route for those looking for a less crowded experience." },
];

const destinations = ["Nairobi National Park", "Amboseli", "Maasai Mara", "Lake Nakuru", "Samburu", "Tsavo"];
const audiences = ["Individuals", "Friends & Families", "Groups", "Organisations", "International Visitors"];
const steps = [
  ["01", "Choose Your Experience", "Browse our hikes, safaris, camping and travel experiences."],
  ["02", "Send an Enquiry", "Tell us your preferred date, number of people and any special requirements."],
  ["03", "Get Your Itinerary", "We will send you the trip details, quotation and booking information."],
  ["04", "Confirm Your Trip", "Once everything is agreed, we confirm your booking and share the final trip information."],
];

// A numbered, full-bleed row: big photo one side, number + copy + link the
// other. Alternates sides down the list for rhythm. Reused for both the
// service offerings and the Mount Kenya routes so the two sections read
// as one continuous, consistent gallery rather than two different styles.
function OfferRow({ index, item }: { index: number; item: Item }) {
  const reversed = index % 2 === 1;
  return (
    <Reveal className={`flex flex-col items-center gap-10 md:gap-16 ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className="relative aspect-[4/3] w-full overflow-hidden md:w-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      </div>
      <div className="w-full md:w-1/2">
        <span className="font-serif text-6xl font-light text-[#C49A3A]/50">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-3 font-serif text-3xl font-bold text-[#18221D] md:text-4xl">{item.title}</h3>
        <p className="mt-4 max-w-md leading-relaxed text-gray-600">{item.desc}</p>
        <a
          href={item.href}
          className="mt-6 inline-block border-b border-[#C49A3A] pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F4D36] transition hover:text-[#C49A3A]"
        >
          Explore
        </a>
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <main className="bg-[#FAF9F4]">
      {/* HERO — reveals on page load are handled by browser paint, not scroll,
          so the hero text stays immediately visible (no Reveal wrapper). */}
      <section className="relative flex min-h-[90vh] items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }} />
        <div className="absolute inset-0 bg-[#18221D]/55" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 text-[#FAF9F4] lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C49A3A]">
            01°17&prime;S 36°49&prime;E &nbsp;&bull;&nbsp; Nairobi, Kenya &nbsp;&bull;&nbsp; Hiking &bull; Safaris &bull; Camping &bull; Travel
          </p>
          <h1 className="mt-6 font-serif text-6xl font-bold leading-[0.95] md:text-8xl">
            Hikers
            <br />
            <span className="italic text-[#C49A3A]">Fusion</span> KE
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#F7F3E8]">
            Adventure &amp; travel, designed around you. Discover Kenya and East Africa through hiking, safari, camping and travel experiences.
          </p>
          <a
            href="https://wa.me/254181189908?text=Hi!%20I'd%20like%20to%20find%20out%20more%20about%20planning%20a%20trip%20with%20Hikers%20Fusion%20KE."
            className="mt-9 inline-block rounded-full bg-[#C49A3A] px-8 py-3.5 font-semibold text-[#18221D] transition hover:bg-[#D3AE59]"
          >
            Begin Your Journey
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-28 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">Who We Are</p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#18221D] md:text-5xl">
            Where <span className="italic text-[#1F4D36]">adventure</span> meets the wild.
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-5 leading-relaxed text-gray-600">
            <p>At Hikers Fusion KE, we believe that exploring Africa should be simple, enjoyable and memorable. We bring together hiking, safaris, camping and travel to create well-planned outdoor experiences across Kenya and the rest of Africa.</p>
            <p>We create experiences for people who want to get outdoors, discover new places and enjoy nature in a real and meaningful way. Whether it&apos;s hiking a mountain trail, spending a night under the stars, going on a wildlife safari, or planning a trip with friends, family or a group, we help you put it together.</p>
            <p>Our aim is simple: to make travel accessible while offering safe, well-organised and enjoyable experiences.</p>
          </div>
          <div className="mx-auto mt-10 h-px w-16 bg-[#C49A3A]" />
          <p className="mt-6 font-serif text-lg italic text-[#1F4D36]">&ldquo;Explore. Experience. Remember.&rdquo;</p>
        </Reveal>
      </section>

      {/* WHAT WE OFFER */}
      <section id="services" className="px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">What We Offer</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-[#18221D] md:text-5xl">
              Experiences crafted with <span className="italic text-[#1F4D36]">intention</span>
            </h2>
          </Reveal>
          <div className="mt-20 space-y-24">
            {services.map((service, i) => (
              <OfferRow key={service.slug} index={i} item={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM EXPERIENCES — short break between the two galleries */}
      <section className="px-6 lg:px-8">
        <Reveal className="mx-auto max-w-7xl border-y border-[#C49A3A]/30 py-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A3A]">Custom Experiences</p>
          <h3 className="mt-3 font-serif text-2xl font-bold text-[#18221D]">Build a trip around your plans.</h3>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-gray-600">
            Have somewhere specific in mind? Tell us where you want to go, when you want to travel and who you are travelling with. We can help create an itinerary around your needs.
          </p>
          <a
            href="https://wa.me/254181189908?text=Hi!%20I'd%20like%20a%20custom%20itinerary%20built%20around%20my%20plans."
            className="mt-5 inline-block border-b border-[#C49A3A] pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F4D36] transition hover:text-[#C49A3A]"
          >
            Plan Your Experience
          </a>
        </Reveal>
      </section>

      {/* EXPLORE KENYA / MOUNT KENYA — identical row treatment to Services above */}
      <section id="hiking" className="px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">Explore Kenya</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-[#18221D] md:text-5xl">
              Discover <span className="italic text-[#1F4D36]">Mount Kenya</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-gray-600">
              From scenic day hikes to multi-day trekking adventures and summit attempts &mdash; explore the mountain through routes that match your fitness, time and the scenery you want to see.
            </p>
          </Reveal>
          <div className="mt-20 space-y-24">
            {routes.map((route, i) => (
              <OfferRow key={route.slug} index={i} item={route} />
            ))}
          </div>
          <Reveal className="mt-16 text-center">
            <a
              href="/hiking#aberdares"
              className="inline-block border-b border-[#C49A3A] pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F4D36] transition hover:text-[#C49A3A]"
            >
              Also Explore The Aberdares
            </a>
          </Reveal>
        </div>
      </section>

      {/* SAFARI HIGHLIGHT */}
      <section id="safaris" className="px-6 py-28 lg:px-8">
        <Reveal className="mx-auto max-w-5xl border border-[#C49A3A]/40 bg-[#18221D] px-8 py-16 text-center text-[#FAF9F4] md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">Wildlife &amp; Safari</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-bold md:text-5xl">See Kenya Beyond the Trail</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#F7F3E8]">
            From Nairobi National Park and nearby wildlife experiences to longer safaris across Kenya, we can help you plan an experience that fits your time, group and budget.
          </p>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-[#F7F3E8]/80">
            {destinations.map((d, i) => (
              <span key={d}>{i > 0 && <span className="mr-6 text-[#C49A3A]">&bull;</span>}{d}</span>
            ))}
          </div>
          <a
            href="/safaris"
            className="mt-9 inline-block rounded-full bg-[#C49A3A] px-8 py-3.5 font-semibold text-[#18221D] transition hover:bg-[#D3AE59]"
          >
            Explore Safaris
          </a>
        </Reveal>
      </section>

      {/* WHO WE SERVE */}
      <section className="px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">Made For Every Explorer</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-serif text-xl text-[#18221D]">
            {audiences.map((a, i) => (
              <span key={a} className="flex items-center gap-3">
                {a}
                {i < audiences.length - 1 && <span className="text-[#C49A3A]">&diams;</span>}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SAFETY & RESPONSIBLE TRAVEL */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 text-center md:grid-cols-2 md:text-left">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">Safety</p>
            <p className="mt-4 leading-relaxed text-gray-600">
              We plan our trips carefully and work with experienced guides and service providers to ensure our clients have well-organised experiences.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">Responsible Travel</p>
            <p className="mt-4 leading-relaxed text-gray-600">
              We respect the places we visit, minimise our impact on the environment and encourage responsible interaction with local communities and wildlife.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">Simple Booking</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-[#18221D] md:text-5xl">How It Works</h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-4">
            {steps.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 120} className="text-center">
                <span className="font-serif text-5xl font-light text-[#C49A3A]/60">{n}</span>
                <h3 className="mt-4 text-xl font-bold text-[#18221D]">{t}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#1F4D36] px-6 py-28 text-center text-[#FAF9F4] lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">Ready to Explore?</p>
          <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
            Your Next <span className="italic text-[#C49A3A]">Adventure</span> Starts Here.
          </h2>
          <p className="mt-5 leading-relaxed text-[#F7F3E8]">
            Tell us where you want to go, when you want to travel and who you&apos;re travelling with. We&apos;ll help you put the experience together.
          </p>
          <a
            href="https://wa.me/254181189908?text=Hi!%20I'd%20like%20to%20find%20out%20more%20about%20planning%20a%20trip%20with%20Hikers%20Fusion%20KE."
            className="mt-8 inline-block rounded-full bg-[#C49A3A] px-8 py-3.5 font-semibold text-[#18221D] transition hover:bg-[#D3AE59]"
          >
            Book via WhatsApp
          </a>
        </Reveal>
      </section>
    </main>
  );
}