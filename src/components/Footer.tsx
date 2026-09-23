import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

const NAV_COLUMN = [
  { label: "Startseite", href: "/#top" },
  { label: "Sortiment", href: "/#sortiment" },
  { label: "Halal Fleisch", href: "/#halal-fleisch" },
  { label: "Angebote", href: "/#angebote" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Kontakt", href: "/#kontakt" },
];

const LEGAL_COLUMN = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-mist p-1.5">
              <Image
                src="/images/logo.png"
                alt="Ali Supermarkt"
                width={200}
                height={200}
                className="h-full w-full object-contain"
              />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Frisch. Halal. International. Nah. – Ihr internationaler
              Supermarkt in Flamatt.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Seite
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {NAV_COLUMN.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Kontakt
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>{BUSINESS.street}</li>
              <li>
                {BUSINESS.postalCode} {BUSINESS.city}
              </li>
              <li>
                <a href={BUSINESS.phoneHref} className="transition hover:text-white">
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="transition hover:text-white"
                >
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social + legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Social
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener"
                  className="transition hover:text-white"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href={BUSINESS.facebook}
                  target="_blank"
                  rel="noopener"
                  className="transition hover:text-white"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href={BUSINESS.tiktok}
                  target="_blank"
                  rel="noopener"
                  className="transition hover:text-white"
                >
                  TikTok
                </Link>
              </li>
            </ul>

            <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Rechtliches
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {LEGAL_COLUMN.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Ali Supermarkt GmbH. Alle Rechte
          vorbehalten.
        </div>
      </div>
    </footer>
  );
}
