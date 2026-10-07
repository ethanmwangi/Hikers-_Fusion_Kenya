export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#18221D]/60" />

        {/* Hero Content */}
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
                {/* Primary Button */}
                <a
                  href="/hiking"
                  className="rounded-full bg-[#1F4D36] px-7 py-3.5 text-center font-semibold text-[#FAF9F4] transition hover:bg-[#286447]"
                >
                  Explore Experiences
                </a>

                {/* Secondary Button */}
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
    </main>
  );
}