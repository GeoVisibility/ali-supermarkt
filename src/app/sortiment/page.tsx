import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickFacts from "@/components/QuickFacts";
import { CATEGORIES } from "@/lib/categories";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: "Sortiment",
  description:
    "Das Sortiment von Ali Supermarkt in Flamatt: Halal-Metzgerei, Obst und Gemüse, internationale Spezialitäten, Grundnahrungsmittel, Getränke, Milchprodukte, Tiefkühlware und Haushaltsartikel.",
  alternates: { canonical: "/sortiment" },
};

export default function SortimentPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sortiment",
          item: `${SITE_URL}/sortiment`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Sortiment von Ali Supermarkt",
      itemListElement: CATEGORIES.map((category, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: category.title,
        url: `${SITE_URL}/sortiment/${category.slug}`,
      })),
    },
  ];

  return (
    <main id="top">
      <Header />

      <nav aria-label="Breadcrumb" className="pt-28 pb-2">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="mx-auto max-w-6xl px-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink/50">
            <li>
              <Link href="/" className="transition hover:text-orange-dark">
                Startseite
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-ink/75">Sortiment</li>
          </ol>
        </div>
      </nav>

      {/* Intro */}
      <section className="pt-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
            Unser Sortiment
          </span>
          <h1 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Alles für den täglichen Einkauf in Flamatt
          </h1>
          <div className="mt-5 flex max-w-2xl flex-col gap-4 text-base leading-relaxed text-ink/70">
            <p>
              Bei Ali Supermarkt an der Bernstrasse 25 finden Sie den ganzen
              Wocheneinkauf unter einem Dach: eine Halal-Metzgerei mit eigener
              Theke, täglich frisches Obst und Gemüse, Spezialitäten aus der
              türkischen, arabischen, balkanischen und mediterranen Küche sowie
              alles, was im Vorratsschrank und im Haushalt dazugehört.
            </p>
            <p>
              Neun Kategorien, ein Einkauf – und bei Fragen beraten wir Sie
              gerne persönlich im Laden.
            </p>
          </div>
        </div>
      </section>

      {/* Kategorien */}
      <section className="border-t border-smoke/8 bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Unsere Kategorien
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/sortiment/${category.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-smoke/8 bg-white transition hover:border-smoke/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.img}
                    alt={category.title}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    quality={65}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg font-bold text-ink">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {category.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-dark transition-all group-hover:gap-2.5">
                    {category.title} ansehen
                    <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.4]">
                      <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <QuickFacts className="mt-10" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
