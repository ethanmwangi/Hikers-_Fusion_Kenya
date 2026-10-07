const services = [
  {
    title: "Hiking",
    description:
      "Explore mountains, forests, hills and scenic trails across Kenya, East Africa and beyond.",
    href: "/hiking",
  },
  {
    title: "Safaris",
    description:
      "Experience Kenya's incredible wildlife through carefully planned safari adventures.",
    href: "/safaris",
  },
  {
    title: "Camping",
    description:
      "Enjoy scenic campsites, outdoor getaways and unforgettable nights under the stars.",
    href: "/camping",
  },
  {
    title: "Travel",
    description:
      "Plan trips across Kenya, East Africa and beyond around your own journey.",
    href: "/travel",
  },
];

const routes = [
  ["Sirimon", "Forest, moorland and mountain scenery."],
  ["Chogoria", "Valleys, waterfalls and dramatic landscapes."],
  ["Naro Moru", "A popular route toward the higher parts of the mountain."],
  ["Burguret", "A quieter and more remote mountain experience."],
];

const destinations = [
  "Nairobi National Park",
  "Amboseli",
  "Maasai Mara",
  "Lake Nakuru",
  "Samburu",
  "Tsavo",
];

const audiences = [
  "Individuals",
  "Friends & Families",
  "Groups",
  "Organisations",
  "International Visitors",
];

const steps = [
  ["01", "Choose Your Experience", "Pick the adventure that fits what you want to explore."],
  ["02", "Send an Enquiry", "Tell us your preferred date, number of people and requirements."],
  ["03", "Get Your Itinerary", "Receive your trip details, quotation and booking information."],
  ["04", "Confirm Your Trip", "Once everything is set, get ready for your adventure."],
];

export default function Home() {
  return (
    <main>
      {/* NAVBAR + HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#18221D]/65" />

        <div className="relative z-10">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-[#FAF9F4] lg:px-8">
            <a href="/" className="text-xl font-bold tracking-wide">
              Hikers Fusion KE
            </a>

            <div className="hidden gap-7 md:flex">
              {["Hiking", "Safaris", "Camping", "Travel", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="transition hover:text-[#C49A3A]"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            <a
              href="/contact"
              className="hidden rounded-full bg-[#C49A3A] px-5 py-2.5 font-semibold text-[#18221D] transition hover:bg-[#D3AE59] md:block"
            >
              Plan a Trip
            </a>
          </nav>

          <div className="mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 py-20 lg:px-8">
            <div className="max-w-3xl text-[#FAF9F4]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C49A3A]">
                Hiking • Safaris • Camping • Travel
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
                Adventure Starts Here
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#F7F3E8] md:text-xl">
                Discover Kenya and East Africa through unforgettable hiking,
                safari, camping and travel experiences.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/hiking"
                  className="rounded-full bg-[#1F4D36] px-7 py-3.5 text-center font-semibold transition hover:bg-[#286447]"
                >
                  Explore Experiences
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-[#FAF9F4] px-7 py-3.5 text-center font-semibold transition hover:bg-[#FAF9F4] hover:text-[#18221D]"
                >
                  Plan Your Trip
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#F7F3E8] px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">
              Discover More
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#18221D] md:text-5xl">
              Your Adventure,
              <br />
              Our Journey.
            </h2>

            <div className="mt-6 space-y-4 leading-relaxed text-gray-700">
              <p>
                At Hikers Fusion KE, we believe that exploring Africa should be
                simple, enjoyable and memorable.
              </p>
              <p>
                We bring together hiking, safaris, camping and travel to create
                well-planned outdoor experiences across Kenya and the rest of
                Africa.
              </p>
              <p>
                Whether it&apos;s hiking a mountain trail, spending a night
                under the stars, going on a wildlife safari, or planning a
                trip with friends, family or a group, we help you put it
                together.
              </p>
            </div>

            <a
              href="/about"
              className="mt-8 inline-block rounded-full bg-[#1F4D36] px-7 py-3.5 font-semibold text-[#FAF9F4] transition hover:bg-[#286447]"
            >
              Discover Hikers Fusion
            </a>
          </div>

          <div className="relative min-h-[400px] overflow-hidden bg-[#1F4D36]">
            <div className="absolute inset-0 flex items-center justify-center p-10 text-center">
              <div>
                <p className="text-3xl font-bold text-[#FAF9F4]">
                  Kenya & East Africa
                </p>
                <div className="mx-auto mt-5 h-px w-16 bg-[#C49A3A]" />
                <p className="mt-5 text-sm tracking-wide text-[#F7F3E8]">
                  Explore. Experience. Remember.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#FAF9F4] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">
            What We Offer
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#18221D] md:text-5xl">
            Experiences Worth Exploring
          </h2>

          <p className="mt-5 max-w-2xl leading-relaxed text-gray-600">
            From mountain trails to wildlife safaris, we create outdoor
            experiences designed around how you want to explore.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="border-t-2 border-[#C49A3A] bg-[#F7F3E8] p-7"
              >
                <h3 className="text-2xl font-bold text-[#18221D]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className="mt-6 inline-block font-semibold text-[#1F4D36] hover:text-[#C49A3A]"
                >
                  Explore {service.title} →
                </a>
              </article>
            ))}
          </div>

          <div className="mt-6 bg-[#1F4D36] p-8 text-[#FAF9F4] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A3A]">
              Custom Experiences
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Build a trip around your plans.
            </h3>

            <p className="mt-3 max-w-2xl leading-relaxed text-[#F7F3E8]">
              We can create a custom itinerary based on where you want to go,
              when you want to travel and who you&apos;re travelling with.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-block font-semibold text-[#C49A3A] hover:text-[#FAF9F4]"
            >
              Plan Your Experience →
            </a>
          </div>
        </div>
      </section>

      {/* MOUNT KENYA */}
      <section className="bg-[#1F4D36] px-6 py-24 text-[#FAF9F4] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">
            Explore Kenya
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Discover Mount Kenya
          </h2>

          <p className="mt-5 max-w-2xl leading-relaxed text-[#F7F3E8]">
            Explore one of Kenya&apos;s most iconic mountain destinations
            through a range of routes and experiences.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {routes.map(([name, description]) => (
              <div
                key={name}
                className="border border-white/15 bg-white/10 p-6"
              >
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#F7F3E8]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFARI */}
      <section className="bg-[#F7F3E8] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="bg-[#18221D] px-8 py-16 text-center text-[#FAF9F4] md:px-16">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">
              Wildlife & Safari
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
              See Kenya Beyond the Trail
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#F7F3E8]">
              From Nairobi National Park and Amboseli to the Maasai Mara,
              Samburu and Tsavo, experience Kenya&apos;s incredible wildlife
              and landscapes.
            </p>

            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-[#F7F3E8]/80">
              {destinations.map((destination) => (
                <span key={destination}>{destination}</span>
              ))}
            </div>

            <a
              href="/safaris"
              className="mt-9 inline-block rounded-full bg-[#C49A3A] px-8 py-3.5 font-semibold text-[#18221D] transition hover:bg-[#D3AE59]"
            >
              Explore Safaris
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-[#FAF9F4] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">
            Made For Every Explorer
          </p>

          <h2 className="mt-3 text-center text-4xl font-bold text-[#18221D] md:text-5xl">
            Who We Serve
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((group) => (
              <div
                key={group}
                className="border border-[#1F4D36]/10 bg-[#F7F3E8] p-6 text-center font-semibold text-[#18221D]"
              >
                {group}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#F7F3E8] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">
            Simple Booking
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#18221D] md:text-5xl">
            How It Works
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-4">
            {steps.map(([number, title, description]) => (
              <div key={number}>
                <span className="text-4xl font-bold text-[#C49A3A]">
                  {number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#18221D]">
                  {title}
                </h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#1F4D36] px-6 py-24 text-center text-[#FAF9F4] lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">
            Ready to Explore?
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Your Next Adventure Starts Here.
          </h2>

          <p className="mt-5 leading-relaxed text-[#F7F3E8]">
            Tell us where you want to go, when you want to travel and who
            you&apos;re travelling with. We&apos;ll help you put the experience
            together.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#C49A3A] px-8 py-3.5 font-semibold text-[#18221D] transition hover:bg-[#D3AE59]"
          >
            Plan Your Trip
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#18221D] px-6 py-12 text-[#FAF9F4] lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
          <div>
            <h2 className="text-xl font-bold">Hikers Fusion KE</h2>
            <p className="mt-2 text-sm text-[#F7F3E8]/70">
              Adventure & Travel Company
            </p>
          </div>

          <div className="text-sm text-[#F7F3E8]/70">
            <p>Hiking • Safaris • Camping • Travel</p>
            <p className="mt-2">Kenya & East Africa</p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-[#F7F3E8]/50">
          © 2026 Hikers Fusion KE. All rights reserved.
        </div>
      </footer>
    </main>
  );
}