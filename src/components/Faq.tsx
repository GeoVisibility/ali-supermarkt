import FaqAccordion from "@/components/FaqAccordion";
import { localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";

export default async function Faq() {
  const { locale, t } = await getDictionary();
  const FAQS = t.faq.items.map((item) => ({
    ...item,
    href: localizePath(item.href, locale),
  }));

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
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
            {t.faq.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {t.faq.title}
          </h2>
        </div>

        <FaqAccordion items={FAQS} />
      </div>
    </section>
  );
}
