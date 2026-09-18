"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Wo gibt es einen Halal-Supermarkt in Flamatt?",
    a: "Ali Supermarkt an der Bernstrasse 25 in Flamatt ist der lokale Supermarkt mit Halal-Sortiment und internationalen Spezialitäten in Flamatt.",
  },
  {
    q: "Wo kann ich Halal-Fleisch in Flamatt kaufen?",
    a: "An unserer Fleischtheke im Ali Supermarkt erhalten Sie täglich frisches, Halal-zertifiziertes Fleisch – Rind, Lamm, Geflügel und Wurstwaren, inklusive persönlicher Beratung.",
  },
  {
    q: "Hat Ali Supermarkt sonntags geöffnet?",
    a: "Ja. Wir haben sonntags von 10:00 bis 16:00 Uhr für Sie geöffnet – auch wenn andere Geschäfte zu haben.",
  },
  {
    q: "Wo gibt es türkische Lebensmittel in Flamatt?",
    a: "Bei Ali Supermarkt finden Sie eine Auswahl an türkischen und internationalen Spezialitäten – von Antipasti über Salça bis zu Weinblättern.",
  },
  {
    q: "Wo kann ich frisches Obst und Gemüse in Flamatt kaufen?",
    a: "Unsere Obst- und Gemüseauswahl wird bei Ali Supermarkt in Flamatt täglich frisch bestückt.",
  },
  {
    q: "Gibt es bei Ali Supermarkt internationale Lebensmittel?",
    a: "Ja, unser Sortiment reicht von Grundnahrungsmitteln bis zu internationalen Spezialitäten aus verschiedenen Küchen und Kulturen.",
  },
  {
    q: "Wo befindet sich Ali Supermarkt?",
    a: "Ali Supermarkt befindet sich an der Bernstrasse 25, 3175 Wünnewil-Flamatt, Schweiz.",
  },
  {
    q: "Wie sind die Öffnungszeiten?",
    a: "Montag bis Donnerstag 08:00–19:00 Uhr, Freitag 08:00–20:00 Uhr, Samstag 08:00–16:00 Uhr, Sonntag 10:00–16:00 Uhr.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="bg-white py-16 md:py-24" id="faq">
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-fresh-green">
            Häufige Fragen
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-4xl">
            Gut zu wissen
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-charcoal/8"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-heading text-[15px] font-bold text-charcoal sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fresh-green/12 text-deep-green transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.4]">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-charcoal/65">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
