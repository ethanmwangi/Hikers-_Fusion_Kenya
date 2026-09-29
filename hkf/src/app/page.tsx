export default function Home() {
  return (
    <main>
      
      <nav className="flex items-center justify-between px-8 py-4">

        <div className="flex gap-6">
          <a href="/">Home</a>
          <a href="/hiking">Hiking</a>
          <a href="/safaris">Safaris</a>
          <a href="/camping">Camping</a>
          <a href="/travel">Travel</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <h1>Adventure Starts Here</h1>
      <p>Adventure & Travel Company</p>
    </main>
  );
}