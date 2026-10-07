export default function Home() {
  return (
    <main>
      <nav className="flex items-center justify-between px-8 py-4">
        <h2>Hikers Fusion KE</h2>

        <div className="flex gap-6">
          <a href="/">Home</a>
          <a href="/hiking">Hiking</a>
          <a href="/safaris">Safaris</a>
          <a href="/camping">Camping</a>
          <a href="/travel">Travel</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <section className="min-h-[70vh] px-8 py-24 flex flex-col justify-center">
        <h1 className="text-5xl font-bold">
          Adventure Starts Here
        </h1>

        <p className="mt-4 text-xl">
          Hiking, safaris, camping and travel across Kenya and East Africa.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/hiking"
            className="rounded-full bg-green-800 px-6 py-3 text-white"
          >
            Explore Experiences
          </a>

          <a
            href="/contact"
            className="rounded-full border border-green-800 px-6 py-3 text-green-800"
          >
            Plan Your Trip
          </a>
        </div>
      </section>
    </main>
  );
}