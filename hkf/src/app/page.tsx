export default function Home() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#18221D]/60" />

        <div className="relative z-10">
          {/* Navbar */}
          <nav className="flex items-center justify-between px-8 py-6 text-[#FAF9F4]">
            <h2 className="text-xl font-bold tracking-wide">
              Hikers Fusion KE
            </h2>

            <div className="hidden gap-7 md:flex">
              <a href="/" className="transition hover:text-[#C49A3A]">
                Home
              </a>
              <a href="/hiking" className="transition hover:text-[#C49A3A]">
                Hiking
              </a>
              <a href="/safaris" className="transition hover:text-[#C49A3A]">
                Safaris
              </a>
              <a href="/camping" className="transition hover:text-[#C49A3A]">
                Camping
              </a>
              <a href="/travel" className="transition hover:text-[#C49A3A]">
                Travel
              </a>
              <a href="/contact" className="transition hover:text-[#C49A3A]">
                Contact
              </a>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="flex min-h-[calc(100vh-88px)] items-center px-8 py-20">
            <div className="max-w-3xl text-[#FAF9F4]">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#C49A3A]">
                Hiking • Safaris • Camping • Travel
              </p>

              <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                Adventure Starts Here
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#F7F3E8] md:text-xl">
                Discover Kenya and East Africa through unforgettable hiking,
                safari, camping and travel experiences.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/hiking"
                  className="rounded-full bg-[#1F4D36] px-7 py-3.5 text-center font-semibold text-[#FAF9F4] transition hover:bg-[#286447]"
                >
                  Explore Experiences
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-[#FAF9F4] px-7 py-3.5 text-center font-semibold text-[#FAF9F4] transition hover:bg-[#FAF9F4] hover:text-[#18221D]"
                >
                  Plan Your Trip
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-[#F7F3E8] px-8 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">
              Discover More
            </p>

            <h2 className="text-4xl font-bold leading-tight text-[#18221D] md:text-5xl">
              Your Adventure,
              <br />
              Our Journey.
            </h2>

            <p className="mt-6 leading-relaxed text-gray-700">
              At Hikers Fusion KE, we believe that exploring Africa should be
              simple, enjoyable and memorable.
            </p>

            <p className="mt-4 leading-relaxed text-gray-700">
              We bring together hiking, safaris, camping and travel to create
              well-planned outdoor experiences across Kenya and the rest of
              Africa.
            </p>

            <p className="mt-4 leading-relaxed text-gray-700">
              Whether it&apos;s hiking a mountain trail, spending a night under
              the stars, going on a wildlife safari, or planning a trip with
              friends, family or a group, we help you put it together.
            </p>

            <a
              href="/about"
              className="mt-8 inline-block rounded-full bg-[#1F4D36] px-7 py-3.5 font-semibold text-[#FAF9F4] transition hover:bg-[#286447]"
            >
              Discover Hikers Fusion
            </a>
          </div>

          <div className="relative min-h-[400px] overflow-hidden rounded-3xl bg-[#1F4D36]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-[#FAF9F4]">
                <p className="text-6xl">⛰</p>
                <p className="mt-4 text-xl font-semibold">
                  Kenya & East Africa
                </p>
                <p className="mt-2 text-sm text-[#F7F3E8]">
                  Explore. Experience. Remember.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="bg-[#FAF9F4] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">
              What We Offer
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#18221D] md:text-5xl">
              Experiences Worth Exploring
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              From mountain trails to wildlife safaris, we create outdoor
              experiences designed around how you want to explore.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Hiking */}
            <div className="rounded-3xl bg-[#F7F3E8] p-8">
              <div className="text-4xl">🥾</div>
              <h3 className="mt-6 text-2xl font-bold text-[#18221D]">
                Hiking
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Explore mountains, forests, hills and scenic trails across
                Kenya, East Africa and beyond.
              </p>
              <a
                href="/hiking"
                className="mt-6 inline-block font-semibold text-[#1F4D36] hover:text-[#C49A3A]"
              >
                Explore Hiking →
              </a>
            </div>

            {/* Safaris */}
            <div className="rounded-3xl bg-[#F7F3E8] p-8">
              <div className="text-4xl">🦁</div>
              <h3 className="mt-6 text-2xl font-bold text-[#18221D]">
                Safaris
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Experience Kenya&apos;s incredible wildlife through carefully
                planned safari adventures.
              </p>
              <a
                href="/safaris"
                className="mt-6 inline-block font-semibold text-[#1F4D36] hover:text-[#C49A3A]"
              >
                Explore Safaris →
              </a>
            </div>

            {/* Camping */}
            <div className="rounded-3xl bg-[#F7F3E8] p-8">
              <div className="text-4xl">⛺</div>
              <h3 className="mt-6 text-2xl font-bold text-[#18221D]">
                Camping
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Spend time outdoors with scenic campsites and unforgettable
                nights under the stars.
              </p>
              <a
                href="/camping"
                className="mt-6 inline-block font-semibold text-[#1F4D36] hover:text-[#C49A3A]"
              >
                Explore Camping →
              </a>
            </div>

            {/* Travel */}
            <div className="rounded-3xl bg-[#F7F3E8] p-8">
              <div className="text-4xl">🌍</div>
              <h3 className="mt-6 text-2xl font-bold text-[#18221D]">
                Travel
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Plan trips across Kenya, East Africa and beyond with
                experiences built around your journey.
              </p>
              <a
                href="/travel"
                className="mt-6 inline-block font-semibold text-[#1F4D36] hover:text-[#C49A3A]"
              >
                Explore Travel →
              </a>
            </div>

            {/* Custom Experiences */}
            <div className="rounded-3xl bg-[#1F4D36] p-8 text-[#FAF9F4] sm:col-span-2">
              <div className="text-4xl">✨</div>
              <h3 className="mt-6 text-2xl font-bold">
                Custom Experiences
              </h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-[#F7F3E8]">
                Have something specific in mind? We can help create a custom
                itinerary based on where you want to go, when you want to
                travel and who you&apos;re travelling with.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-block font-semibold text-[#C49A3A] hover:text-[#FAF9F4]"
              >
                Plan Your Experience →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MOUNT KENYA ================= */}
      <section className="bg-[#1F4D36] px-8 py-24 text-[#FAF9F4]">
        <div className="mx-auto max-w-6xl">
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
            {[
              {
                name: "Sirimon",
                description:
                  "Forest, moorland and mountain scenery.",
              },
              {
                name: "Chogoria",
                description:
                  "Valleys, waterfalls and dramatic landscapes.",
              },
              {
                name: "Naro Moru",
                description:
                  "A popular route toward the higher parts of the mountain.",
              },
              {
                name: "Burguret",
                description:
                  "A quieter and more remote mountain experience.",
              },
            ].map((route) => (
              <div
                key={route.name}
                className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-[#FAF9F4]">
                  {route.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#F7F3E8]">
                  {route.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SAFARI CTA ================= */}
      <section className="bg-[#F7F3E8] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-[#18221D] px-8 py-16 text-center text-[#FAF9F4] md:px-16">
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

            <a
              href="/safaris"
              className="mt-8 inline-block rounded-full bg-[#C49A3A] px-8 py-3.5 font-semibold text-[#18221D] transition hover:bg-[#D3AE59]"
            >
              Explore Safaris
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="bg-[#FAF9F4] px-8 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">
            Made For Every Explorer
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#18221D] md:text-5xl">
            Who We Serve
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Individuals",
              "Friends & Families",
              "Groups",
              "Organisations",
              "International Visitors",
            ].map((group) => (
              <div
                key={group}
                className="rounded-2xl border border-[#1F4D36]/10 bg-[#F7F3E8] p-6 font-semibold text-[#18221D]"
              >
                {group}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-[#F7F3E8] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">
            Simple Booking
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#18221D] md:text-5xl">
            How It Works
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Choose Your Experience",
                text: "Pick the adventure that fits what you want to explore.",
              },
              {
                number: "02",
                title: "Send an Enquiry",
                text: "Tell us your preferred date, number of people and requirements.",
              },
              {
                number: "03",
                title: "Get Your Itinerary",
                text: "Receive your trip details, quotation and booking information.",
              },
              {
                number: "04",
                title: "Confirm Your Trip",
                text: "Once everything is set, get ready for your adventure.",
              },
            ].map((step) => (
              <div key={step.number}>
                <span className="text-4xl font-bold text-[#C49A3A]">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#18221D]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#1F4D36] px-8 py-24 text-center text-[#FAF9F4]">
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

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#18221D] px-8 py-12 text-[#FAF9F4]">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row">
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

        <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6 text-sm text-[#F7F3E8]/50">
          © 2026 Hikers Fusion KE. All rights reserved.
        </div>
      </footer>
    </main>
  );
}