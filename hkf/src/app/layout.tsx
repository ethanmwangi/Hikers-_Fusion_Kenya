import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hikers Fusion KE | Adventure & Travel",
  description:
    "Hiking, safaris, camping and travel experiences across Kenya and East Africa.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const navItems = [
  { label: "Hiking", href: "/hiking" },
  { label: "Safaris", href: "/safaris" },
  { label: "Camping", href: "/camping" },
  { label: "Travel", href: "/travel" },
  { label: "Contact", href: "/contact" },
];

// CSS-only mobile menu (checkbox + peer selectors) — no client-side JS needed,
// so this works as a plain Server Component and can't break from hydration issues.
function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#18221D] px-6 text-[#FAF9F4] lg:px-8">
      <input type="checkbox" id="nav-toggle" className="peer hidden" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between py-5">
        <a href="/" className="font-serif text-lg font-bold tracking-wide">
          Hikers Fusion KE
        </a>

        <div className="hidden gap-8 text-sm uppercase tracking-[0.15em] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#C49A3A]">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/254181189908"
          className="hidden rounded-full bg-[#C49A3A] px-5 py-2 text-sm font-semibold text-[#18221D] transition hover:bg-[#D3AE59] md:block"
        >
          Plan a Trip
        </a>

        <label
          htmlFor="nav-toggle"
          className="cursor-pointer text-2xl leading-none peer-checked:hidden md:hidden"
          aria-label="Open menu"
        >
          &#9776;
        </label>
        <label
          htmlFor="nav-toggle"
          className="hidden cursor-pointer text-2xl leading-none peer-checked:block md:hidden"
          aria-label="Close menu"
        >
          &#10005;
        </label>
      </nav>

      <div className="hidden flex-col gap-5 pb-6 text-sm uppercase tracking-[0.15em] peer-checked:flex md:hidden">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="transition hover:text-[#C49A3A]">
            {item.label}
          </a>
        ))}
        <a
          href="https://wa.me/254181189908"
          className="inline-block w-fit rounded-full bg-[#C49A3A] px-5 py-2 font-semibold text-[#18221D]"
        >
          Plan a Trip
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-[#18221D] px-6 py-12 text-[#FAF9F4] lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <h2 className="font-serif text-xl font-bold">Hikers Fusion KE</h2>
          <p className="mt-2 text-sm text-[#F7F3E8]/70">Adventure &amp; Travel Company</p>
        </div>
        <div className="text-sm text-[#F7F3E8]/70">
          <p>Hiking &bull; Safaris &bull; Camping &bull; Travel</p>
          <p className="mt-2">Kenya &amp; East Africa</p>
          <p className="mt-2">
            <a href="https://wa.me/254181189908" className="hover:text-[#C49A3A]">+254 181 189908</a>
            {" "}&bull;{" "}
            <a href="mailto:info@hikersfusion.co.ke" className="hover:text-[#C49A3A]">info@hikersfusion.co.ke</a>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-[#F7F3E8]/50">
        © 2026 Hikers Fusion KE. All rights reserved.
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-[#FAF9F4]">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}