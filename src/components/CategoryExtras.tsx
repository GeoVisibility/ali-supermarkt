import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, type Category } from "@/lib/categories";

export function Breadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="pt-28 pb-2">
      <div className="mx-auto max-w-6xl px-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-charcoal/50">
          <li>
            <Link href="/" className="transition hover:text-deep-green">
              Startseite
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/#sortiment" className="transition hover:text-deep-green">
              Sortiment
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-medium text-charcoal/75">{title}</li>
        </ol>
      </div>
    </nav>
  );
}

export function RelatedCategories({ currentSlug }: { currentSlug: string }) {
  const others = CATEGORIES.filter((c) => c.slug !== currentSlug);

  return (
    <section className="border-t border-charcoal/8 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-sm font-semibold uppercase tracking-[0.14em] text-fresh-green">
          Weitere Kategorien
        </span>
        <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-charcoal sm:text-3xl">
          Entdecken Sie mehr aus unserem Sortiment
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {others.map((cat) => (
            <CategoryTile key={cat.slug} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryTile({ cat }: { cat: Category }) {
  return (
    <Link
      href={`/sortiment/${cat.slug}`}
      className="group relative aspect-square overflow-hidden rounded-xl"
    >
      <Image
        src={cat.img}
        alt={cat.title}
        fill
        sizes="(min-width: 1024px) 180px, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/5 to-transparent"
      />
      <span className="absolute inset-x-0 bottom-0 p-3 font-heading text-sm font-bold leading-tight text-cream">
        {cat.title}
      </span>
    </Link>
  );
}
