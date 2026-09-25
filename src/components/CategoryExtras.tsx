import Image from "next/image";
import Link from "next/link";
import { getCategories, type Category } from "@/lib/categories";
import { SITE_URL } from "@/lib/business";
import { localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";

export async function Breadcrumb({ title, slug }: { title: string; slug: string }) {
  const { locale, t } = await getDictionary();
  const href = (p: string) => localizePath(p, locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.common.home, item: `${SITE_URL}${href("/")}` },
      {
        "@type": "ListItem",
        position: 2,
        name: t.common.sortiment,
        item: `${SITE_URL}${href("/sortiment")}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${SITE_URL}${href(`/sortiment/${slug}`)}`,
      },
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="pt-28 pb-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink/65">
          <li>
            <Link href={href("/")} className="transition hover:text-orange-dark">
              {t.common.home}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href={href("/sortiment")} className="transition hover:text-orange-dark">
              {t.common.sortiment}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-medium text-ink/75">{title}</li>
        </ol>
      </div>
    </nav>
  );
}

export async function RelatedCategories({ currentSlug }: { currentSlug: string }) {
  const { locale, t } = await getDictionary();
  const others = getCategories(t).filter((c) => c.slug !== currentSlug);

  return (
    <section className="border-t border-smoke/8 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
          {t.categoryPage.relatedEyebrow}
        </span>
        <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          {t.categoryPage.relatedTitle}
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {others.map((cat) => (
            <CategoryTile key={cat.slug} cat={cat} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryTile({ cat, locale }: { cat: Category; locale: Locale }) {
  return (
    <Link
      href={localizePath(`/sortiment/${cat.slug}`, locale)}
      className="group relative aspect-square overflow-hidden rounded-xl"
    >
      <Image
        src={cat.img}
        alt={cat.title}
        fill
        sizes="(min-width: 1024px) 180px, 33vw"
        quality={65}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent"
      />
      <span className="absolute inset-x-0 bottom-0 p-3 font-heading text-sm font-bold leading-tight text-white">
        {cat.title}
      </span>
    </Link>
  );
}
