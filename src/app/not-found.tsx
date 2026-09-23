import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CATEGORIES } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  description:
    "Diese Seite gibt es nicht (mehr). Hier finden Sie den Weg zurück zum Sortiment von Ali Supermarkt in Flamatt.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="top">
      <Header />

      <section className="pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
            Fehler 404
          </span>
          <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Diese Seite gibt es nicht
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/70">
            Vielleicht hat sich die Adresse geändert oder der Link ist nicht
            mehr aktuell. Unser Sortiment finden Sie hier:
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-orange-dark px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:brightness-95"
            >
              Zur Startseite
            </Link>
            <Link
              href="/sortiment"
              className="inline-flex items-center justify-center rounded-xl border border-smoke/15 bg-white px-6 py-3.5 text-base font-semibold text-ink transition hover:border-smoke/30"
            >
              Zum Sortiment
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/sortiment/${category.slug}`}
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
