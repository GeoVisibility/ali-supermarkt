import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Rahmen für die Rechtstexte (Impressum, Datenschutz). Nur auf Deutsch. */
export default function LegalPage({
  title,
  path,
  updated,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main id="top">
      <Header path={path} germanOnly />

      <nav aria-label="Breadcrumb" className="pt-28 pb-2">
        <div className="mx-auto max-w-3xl px-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink/65">
            <li>
              <Link href="/" className="transition hover:text-orange-dark">
                Startseite
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-ink/75">{title}</li>
          </ol>
        </div>
      </nav>

      <section className="pt-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink/65">Stand: {updated}</p>

          <div className="mt-10 flex flex-col gap-8">{children}</div>
        </div>
      </section>

      <Footer path={path} germanOnly />
    </main>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-xl font-bold text-ink">
        {heading}
      </h2>
      <div className="mt-3 flex flex-col gap-3 text-base leading-relaxed text-ink/70">
        {children}
      </div>
    </section>
  );
}
