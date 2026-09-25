import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/lib/categories";
import { localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";

export default async function CategoryGrid() {
  const { locale, t } = await getDictionary();

  return (
    <section className="bg-white py-16 md:py-24" id="sortiment">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
              {t.common.sortiment}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              {t.categoryGrid.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
            {t.categoryGrid.lead}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {getCategories(t).map((cat) => (
            <Link
              key={cat.slug}
              href={localizePath(`/sortiment/${cat.slug}`, locale)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                sizes="(min-width: 1024px) 380px, 50vw"
                quality={65}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 sm:p-5">
                <div>
                  <h3 className="font-heading text-base font-bold text-white sm:text-lg">
                    {cat.title}
                  </h3>
                  <p className="mt-0.5 hidden text-xs text-white/75 sm:block">
                    {cat.tagline}
                  </p>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist/15 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-orange-dark group-hover:text-white">
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
