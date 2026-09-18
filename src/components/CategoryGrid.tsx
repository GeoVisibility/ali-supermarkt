import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export default function CategoryGrid() {
  return (
    <section className="bg-white py-16 md:py-24" id="sortiment">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-fresh-green">
              Sortiment
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-4xl">
              Unsere Hauptkategorien
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-charcoal/60">
            Von frischem Halal-Fleisch bis zu internationalen Spezialitäten
            – entdecken Sie, was Sie bei uns in Flamatt finden.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/sortiment/${cat.slug}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                sizes="(min-width: 1024px) 380px, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 sm:p-5">
                <div>
                  <h3 className="font-heading text-base font-bold text-cream sm:text-lg">
                    {cat.title}
                  </h3>
                  <p className="mt-0.5 hidden text-xs text-cream/75 sm:block">
                    {cat.tagline}
                  </p>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/15 text-cream transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-fresh-green group-hover:text-deep-green">
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-none stroke-current stroke-[2.2]"
                  >
                    <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
