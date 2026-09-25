import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import { Breadcrumb, RelatedCategories } from "@/components/CategoryExtras";
import { CATEGORY_SLUGS, getCategory } from "@/lib/categories";
import QuickFacts from "@/components/QuickFacts";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { localizePath, OG_LOCALES } from "@/i18n/config";
import { alternatesFor, fill } from "@/i18n/dictionaries";
import { getDictionary } from "@/i18n/server";

export function generateStaticParams() {
  return CATEGORY_SLUGS.filter((slug) => slug !== "halal-fleisch").map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/sortiment/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { locale, t } = await getDictionary();
  const category = getCategory(t, slug);
  if (!category) return {};
  const path = `/sortiment/${category.slug}`;
  return {
    title: category.title,
    description: fill(t.categoryPage.metaDescription, { description: category.description }),
    alternates: alternatesFor(path, locale),
    openGraph: {
      title: `${category.title} | Ali Supermarkt Flamatt`,
      description: category.description,
      url: localizePath(path, locale),
      locale: OG_LOCALES[locale],
      images: [{ url: category.img, alt: category.title }],
    },
  };
}

export default async function CategoryPage({
  params,
}: PageProps<"/[lang]/sortiment/[slug]">) {
  const { slug } = await params;
  const { locale, t } = await getDictionary();
  const category = getCategory(t, slug);
  if (!category || slug === "halal-fleisch") notFound();

  return (
    <main id="top">
      <Header path={`/sortiment/${category.slug}`} />
      <Breadcrumb title={category.title} slug={category.slug} />

      <section className="pt-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {category.slides?.length ? (
              <HeroSlider
                slides={category.slides}
                labels={{ prev: t.slider.prev, next: t.slider.next, show: t.slider.show }}
                className="aspect-[4/3] shadow-ink/10 lg:aspect-[5/4]"
              />
            ) : (
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-ink/10 lg:aspect-[5/4]">
                <Image
                  src={category.img}
                  alt={category.title}
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
                {category.tagline}
              </span>
              <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                {category.title}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/70">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-smoke/15 px-4 py-1.5 text-sm text-ink/80"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppLink>{t.categoryPage.whatsappCta}</WhatsAppLink>
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

      {category.body?.length ? (
        <section className="border-t border-smoke/8 bg-mist py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
              {t.categoryPage.bodyEyebrow}
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              {fill(t.categoryPage.bodyTitle, { title: category.title })}
            </h2>

            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-ink/70">
              {category.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <QuickFacts
              className="mt-8"
              sortiment={category.highlights.join(", ")}
            />

          </div>
        </section>
      ) : null}

      <RelatedCategories currentSlug={category.slug} />
      <Footer path={`/sortiment/${category.slug}`} />
    </main>
  );
}
