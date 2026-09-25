import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCategories } from "@/lib/categories";
import { localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return {
    title: t.notFound.metaTitle,
    description: t.notFound.metaDescription,
    robots: { index: false, follow: true },
  };
}

export default async function NotFound() {
  const { locale, t } = await getDictionary();
  const href = (p: string) => localizePath(p, locale);

  return (
    <main id="top">
      <Header />

      <section className="pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
            {t.notFound.eyebrow}
          </span>
          <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {t.notFound.title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/70">
            {t.notFound.lead}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={href("/")}
              className="inline-flex items-center justify-center rounded-xl bg-orange-dark px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:brightness-95"
            >
              {t.notFound.home}
            </Link>
            <Link
              href={href("/sortiment")}
              className="inline-flex items-center justify-center rounded-xl border border-smoke/15 bg-white px-6 py-3.5 text-base font-semibold text-ink transition hover:border-smoke/30"
            >
              {t.notFound.sortiment}
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {getCategories(t).map((category) => (
              <li key={category.slug}>
                <Link
                  href={href(`/sortiment/${category.slug}`)}
                  className="inline-flex rounded-full border border-smoke/15 px-4 py-1.5 text-sm text-ink/75 transition hover:border-smoke/35 hover:text-ink"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
