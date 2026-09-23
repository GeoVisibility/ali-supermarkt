import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import QuickFacts from "@/components/QuickFacts";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { BEEF_SUPPLIER } from "@/lib/business";
import { MEAT_FAQS, MEAT_TYPES as MEAT_TYPES_LIST } from "@/lib/meat";
import Footer from "@/components/Footer";
import { Breadcrumb, RelatedCategories } from "@/components/CategoryExtras";

export const metadata: Metadata = {
  title: "Halal-Fleisch",
  description:
    "Frisches, Halal-zertifiziertes Fleisch an der Theke von Ali Supermarkt in Flamatt: Rind, Lamm, Geflügel und Wurstwaren – täglich frisch, persönlich beraten.",
  alternates: { canonical: "/sortiment/halal-fleisch" },
};

const MEAT_TYPES = MEAT_TYPES_LIST;

const HERO_SLIDES = [
  { src: "/images/kasap/lammkoteletts-theke.webp", alt: "Lammkoteletts und abgepacktes Fleisch an der Theke" },
  { src: "/images/kasap/rindsfilet.webp", alt: "Frisches Rindsfilet an der Halal-Fleischtheke von Ali Supermarkt" },
  { src: "/images/kasap/lammkrone.webp", alt: "Lammkrone mit Kräutern an der Fleischtheke" },
  { src: "/images/kasap/lammrack.webp", alt: "Mariniertes Lammrack auf Eis" },
  { src: "/images/kasap/sucuk.webp", alt: "Sucuk und Wurstwaren aus Halal-Fleisch" },
  { src: "/images/kasap/fleischtheke-hackfleisch.webp", alt: "Fleischtheke mit Hackfleisch und frischen Teilstücken" },
  { src: "/images/kasap/mariniert-theke.webp", alt: "Mariniertes Fleisch in der Auslage" },
  { src: "/images/kasap/halal-theke.webp", alt: "Halal-Fleischtheke von Ali Supermarkt in Flamatt" },
];

const TRUST_POINTS = [
  "Halal-zertifiziert",
  "Täglich frisch",
  "Persönliche Beratung",
];

const FAQS = MEAT_FAQS;

export default function HalalFleischPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main id="top">
      <Header />
      <Breadcrumb title="Frisches Halal-Fleisch" slug="halal-fleisch" />

      {/* Hero */}
      <section className="pt-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <HeroSlider
              slides={HERO_SLIDES}
              className="aspect-[4/3] shadow-ink/10 lg:aspect-[5/4]"
            />

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
                Täglich frisch, Halal-zertifiziert
              </span>
              <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                Frisches Halal-Fleisch in Flamatt
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/70">
                An unserer Fleischtheke wählen wir täglich aus, was frisch
                und Halal-zertifiziert ist. Unser Team berät Sie gerne
                persönlich – vom passenden Stück bis zur Zubereitung.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {TRUST_POINTS.map((point) => (
                  <span
                    key={point}
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink/80"
                  >
                    <svg
                      aria-hidden
                      viewBox="0 0 20 20"
                      className="h-4 w-4 flex-none fill-none stroke-orange-dark stroke-[2.2]"
                    >
                      <path d="m4 10.5 3.5 3.5L16 5.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {point}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppLink>Bestellung per WhatsApp</WhatsAppLink>
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center justify-center rounded-xl border border-smoke/15 bg-white px-6 py-3.5 text-base font-semibold text-ink transition hover:border-smoke/30"
                >
                  Route planen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meat types */}
      <section className="border-t border-smoke/8 bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
            Unser Angebot
          </span>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Was Sie an unserer Theke finden
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {MEAT_TYPES.map((meat) => (
              <div
                key={meat.name}
                className="rounded-2xl border border-smoke/8 bg-white p-6"
              >
                <h3 className="font-heading text-lg font-bold text-ink">
                  {meat.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {meat.desc}
                </p>
              </div>
            ))}
          </div>

          <QuickFacts
            className="mt-8"
            sortiment="Rind, Kalb, Lamm, Geflügel, Wurstwaren; Ziege und Schaf auf Bestellung"
          />
        </div>
      </section>

      {/* Lieferant */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
            Herkunft
          </span>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Unser Rindfleisch kommt von {BEEF_SUPPLIER.name}
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-ink/70">
            <p>
              Beim Fleisch zählt für uns, woher es kommt. Unser Rindfleisch
              beziehen wir von der {BEEF_SUPPLIER.legalName} ({BEEF_SUPPLIER.name})
              aus {BEEF_SUPPLIER.city} im {BEEF_SUPPLIER.region} – einem
              Schweizer Lieferanten, der auf Halal-Fleisch spezialisiert ist und
              Metzgereien und Lebensmittelgeschäfte in der ganzen Schweiz
              beliefert.
            </p>
            <p>
              So wissen Sie bei jedem Stück, das wir an unserer Theke
              zuschneiden, woher es stammt. Haben Sie Fragen zur Herkunft eines
              Produkts? Sprechen Sie uns an der Theke an – wir geben Ihnen gerne
              Auskunft.
            </p>
          </div>

          <a
            href={BEEF_SUPPLIER.url}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-dark transition hover:gap-2.5"
          >
            Website von {BEEF_SUPPLIER.name}
            <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.4]">
              <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-smoke/8 bg-white py-16 md:py-24">
        {/* eslint-disable-next-line react/no-danger */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
            Häufige Fragen
          </span>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Zu unserer Fleischtheke
          </h2>

          <div className="mt-8 flex flex-col gap-5">
            {FAQS.map((item) => (
              <div key={item.q}>
                <p className="font-heading text-base font-bold text-ink">
                  {item.q}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedCategories currentSlug="halal-fleisch" />
      <Footer />
    </main>
  );
}
