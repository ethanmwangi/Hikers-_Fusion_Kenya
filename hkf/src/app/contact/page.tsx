import type { Metadata } from "next";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Contact | Hikers Fusion KE",
  description: "Get in touch with Hikers Fusion KE to plan your hiking, safari, camping or travel experience.",
};

const waLink = `https://wa.me/254181189908?text=${encodeURIComponent("Hi! I'd like to get in touch about planning a trip with Hikers Fusion KE.")}`;

export default function ContactPage() {
  return (
    <main className="bg-[#FAF9F4]">
      <section className="px-6 py-28 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A3A]">Get In Touch</p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-[#18221D] md:text-5xl">Let&apos;s Plan Your Trip</h1>
          <p className="mt-6 leading-relaxed text-gray-600">
            Tell us your preferred date, number of people and any special requirements, and we&apos;ll send you an itinerary and quotation. The fastest way to reach us is WhatsApp.
          </p>

          <a
            href={waLink}
            className="mt-8 inline-block rounded-full bg-[#C49A3A] px-8 py-3.5 font-semibold text-[#18221D] transition hover:bg-[#D3AE59]"
          >
            Message Us on WhatsApp
          </a>

          <div className="mx-auto mt-12 h-px w-16 bg-[#C49A3A]" />

          <div className="mt-8 space-y-2 text-gray-600">
            <p>
              <a href="https://wa.me/254181189908" className="font-semibold text-[#1F4D36] hover:text-[#C49A3A]">+254 181 189908</a>
            </p>
            <p>
              <a href="mailto:info@hikersfusion.co.ke" className="font-semibold text-[#1F4D36] hover:text-[#C49A3A]">info@hikersfusion.co.ke</a>
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}