"use client";

import Link from "next/link";
import { useState } from "react";

type Faq = { q: string; a: string; href?: string; hrefLabel?: string };

const FAQS: Faq[] = [
  {
    q: "Wo gibt es einen Halal-Supermarkt in Flamatt?",
    a: "Ali Supermarkt an der Bernstrasse 25 in Flamatt ist der lokale Supermarkt mit Halal-Sortiment und internationalen Spezialitäten in Flamatt.",
    href: "/sortiment/halal-fleisch",
    hrefLabel: "Zur Metzgerei",
  },
  {
    q: "Wo kann ich Halal-Fleisch in Flamatt kaufen?",
    a: "An unserer Fleischtheke im Ali Supermarkt erhalten Sie täglich frisches, Halal-zertifiziertes Fleisch – Rind, Lamm, Geflügel und Wurstwaren, inklusive persönlicher Beratung.",
    href: "/sortiment/halal-fleisch",
    hrefLabel: "Zur Metzgerei",
  },
  {
    q: "Hat Ali Supermarkt sonntags geöffnet?",
    a: "Ja. Wir haben sonntags von 10:00 bis 16:00 Uhr für Sie geöffnet – auch wenn andere Geschäfte zu haben.",
    href: "/#kontakt",
    hrefLabel: "Öffnungszeiten und Anfahrt",
  },
  {
    q: "Wo gibt es türkische Lebensmittel in Flamatt?",
    a: "Bei Ali Supermarkt finden Sie eine Auswahl an türkischen und internationalen Spezialitäten – von Antipasti über Salça bis zu Weinblättern.",
    href: "/sortiment/internationale-spezialitaeten",
    hrefLabel: "Zu den internationalen Spezialitäten",
  },
  {
    q: "Wo kann ich frisches Obst und Gemüse in Flamatt kaufen?",
    a: "Unsere Obst- und Gemüseauswahl wird bei Ali Supermarkt in Flamatt täglich frisch bestückt.",
    href: "/sortiment/obst-gemuese",
    hrefLabel: "Zu Obst & Gemüse",
  },
  {
    q: "Gibt es bei Ali Supermarkt internationale Lebensmittel?",
    a: "Ja, unser Sortiment reicht von Grundnahrungsmitteln bis zu internationalen Spezialitäten aus verschiedenen Küchen und Kulturen.",
    href: "/#sortiment",
    hrefLabel: "Alle Kategorien ansehen",
  },
  {
    q: "Wo befindet sich Ali Supermarkt?",
    a: "Ali Supermarkt befindet sich an der Bernstrasse 25, 3175 Wünnewil-Flamatt, Schweiz.",
    href: "/#kontakt",
    hrefLabel: "Route planen",
  },
  {
    q: "Wie sind die Öffnungszeiten?",
    a: "Montag bis Donnerstag 08:00–19:00 Uhr, Freitag 08:00–20:00 Uhr, Samstag 08:00–16:00 Uhr, Sonntag 10:00–16:00 Uhr.",
    href: "/#kontakt",
    hrefLabel: "Öffnungszeiten und Anfahrt",
  },
  {
    q: "Gibt es beim Ali Supermarkt Parkplätze?",
    a: "Ja. Direkt beim Geschäft an der Bernstrasse 25 stehen kostenlose Parkplätze zur Verfügung – Sie können also bequem mit dem Auto vorfahren.",
    href: "/#kontakt",
    hrefLabel: "Anfahrt und Karte",
  },
  {
    q: "Wie erreiche ich Ali Supermarkt mit dem öffentlichen Verkehr?",
    a: "Der Bahnhof Flamatt liegt rund 300 Meter entfernt, das sind etwa fünf Minuten zu Fuss. Von dort erreichen Sie uns über die Bernstrasse.",
    href: "/#kontakt",
    hrefLabel: "Anfahrt und Karte",
  },
  {
    q: "Kann ich Fleisch oder grössere Mengen vorbestellen?",
    a: "Ja. Sprechen Sie unser Team an der Theke an oder schreiben Sie uns vorab über WhatsApp an +41 79 648 30 72 – wir bereiten Ihre Bestellung gerne vor. Ziege und Schaf führen wir auf Bestellung.",
    href: "/sortiment/halal-fleisch",
    hrefLabel: "Zur Metzgerei",
  },
  {
    q: "Gibt es Milchprodukte wie Käse, Joghurt und Ayran?",
    a: "Ja. Im Kühlregal finden Sie Milch, Butter, Rahm, Joghurt in verschiedenen Grössen sowie Käsesorten von Weichkäse in Salzlake bis Kaşar. Ayran und gekühlte Desserts gehören ebenfalls dazu.",
    href: "/sortiment/milchprodukte",
    hrefLabel: "Zu den Milchprodukten",
  },
  {
    q: "Führt Ali Supermarkt auch Tiefkühlprodukte?",
    a: "Ja. In unseren Tiefkühltruhen finden Sie Geflügel und Fleischprodukte, Fisch, Tiefkühlgemüse sowie vorbereitete Teigwaren und Backwaren wie Börek und Fladenbrot.",
    href: "/sortiment/tiefkuehlprodukte",
    hrefLabel: "Zu den Tiefkühlprodukten",
  },
  {
    q: "Bekomme ich hier auch Reinigungs- und Haushaltsartikel?",
    a: "Ja. Neben Lebensmitteln führen wir Waschmittel, Putzmittel, Körperpflege und Haushaltsartikel wie Papiertücher und Abfallsäcke – so erledigen Sie den ganzen Einkauf an einem Ort.",
    href: "/sortiment/reinigung-haushalt",
    hrefLabel: "Zu Reinigung & Haushalt",
  },
  {
    q: "Wer führt Ali Supermarkt?",
    a: "Ali Supermarkt wird von Kader Yurteri geführt, der Inhaberin der Ali Supermarkt GmbH. Das Geschäft ist seit Mai 2025 in Flamatt für Sie da und wird als Familienbetrieb geführt.",
    href: "/#ueber-uns",
    hrefLabel: "Mehr über uns",
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
                    <div className="px-5 pb-4">
                      <p className="text-sm leading-relaxed text-charcoal/65">
                        {item.a}
                      </p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-deep-green transition hover:gap-2.5"
                        >
                          {item.hrefLabel}
                          <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.4]">
                            <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      ) : null}
                    </div>
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
