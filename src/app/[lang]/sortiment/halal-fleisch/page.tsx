import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import QuickFacts from "@/components/QuickFacts";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { BEEF_SUPPLIER } from "@/lib/business";
import Footer from "@/components/Footer";
import { Breadcrumb, RelatedCategories } from "@/components/CategoryExtras";
import { localizePath } from "@/i18n/config";
import { alternatesFor } from "@/i18n/dictionaries";
import { getDictionary } from "@/i18n/server";

const PATH = "/sortiment/halal-fleisch";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return {
    title: t.halalPage.metaTitle,
    description: t.halalPage.metaDescription,
    alternates: alternatesFor(PATH, locale),
  };
}

/** Bilder des Sliders; die Alt-Texte stehen im Wörterbuch (halalPage.slides). */
const HERO_IMAGES = [
  "/images/kasap/lammkoteletts-theke.webp",
  "/images/kasap/rindsfilet.webp",
  "/images/kasap/lammkrone.webp",
  "/images/kasap/lammrack.webp",
  "/images/kasap/sucuk.webp",
  "/images/kasap/fleischtheke-hackfleisch.webp",
  "/images/kasap/mariniert-theke.webp",
  "/images/kasap/halal-theke.webp",
];

export default async function HalalFleischPage() {
  const { locale, t } = await getDictionary();
  const HERO_SLIDES = HERO_IMAGES.map((src, i) => ({ src, alt: t.halalPage.slides[i] }));
  const TRUST_POINTS = t.halalMeat.trust;
  const MEAT_TYPES = t.halalPage.types;
  const FAQS = t.halalPage.faqs;

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
      <Header path={PATH} />
      <Breadcrumb title={t.categories["halal-fleisch"].title} slug="halal-fleisch" />

      {/* Hero */}
      <section className="pt-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <HeroSlider
              slides={HERO_SLIDES}
              labels={{ prev: t.slider.prev, next: t.slider.next, show: t.slider.show }}
              className="aspect-[4/3] shadow-ink/10 lg:aspect-[5/4]"
            />

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
                {t.halalPage.eyebrow}
              </span>
              <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                {t.halalPage.title}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/70">
                {t.halalPage.lead}
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
                <WhatsAppLink>{t.halalPage.whatsappCta}</WhatsAppLink>
                <Link
                  href={localizePath("/#kontakt", locale)}
                  className="inline-flex items-center justify-center rounded-xl border border-smoke/15 bg-white px-6 py-3.5 text-base font-semibold text-ink transition hover:border-smoke/30"
                >
                  {t.common.routePlan}
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
            {t.halalPage.typesEyebrow}
          </span>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            {t.halalPage.typesTitle}
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
            sortiment={t.halalPage.sortiment}
          />
        </div>
      </section>

      {/* Lieferant */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
            {t.halalPage.originEyebrow}
          </span>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            {t.halalPage.originTitle}
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-ink/70">
            {t.halalPage.originParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <a
            href={BEEF_SUPPLIER.url}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-dark transition hover:gap-2.5"
          >
            {t.halalPage.supplierLink}
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
            {t.halalPage.faqEyebrow}
          </span>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            {t.halalPage.faqTitle}
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
      <Footer path={PATH} />
    </main>
  );
}
