import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { LanguageNames } from "@/components/LanguageSwitcher";
import { LOCALES, localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";

/** `path` und `germanOnly` wie beim Header – für die Sprachlinks. */
export default async function Footer({
  path = "/",
  germanOnly = false,
}: {
  path?: string;
  germanOnly?: boolean;
}) {
  const { locale, t } = await getDictionary();
  const languageLinks = LOCALES.map((l) => ({
    locale: l,
    href: localizePath(germanOnly && l !== "de" ? "/" : path, l),
  }));
  const href = (p: string) => localizePath(p, locale);

  const NAV_COLUMN = [
    { label: t.common.home, href: href("/#top") },
    { label: t.common.sortiment, href: href("/sortiment") },
    { label: t.header.halal, href: href("/#halal-fleisch") },
    { label: t.header.offers, href: href("/#angebote") },
    { label: t.header.about, href: href("/#ueber-uns") },
    { label: t.footer.contact, href: href("/#kontakt") },
  ];

  // Die Rechtstexte gibt es nur auf Deutsch.
  const LEGAL_COLUMN = [
    { label: t.footer.impressum, href: "/impressum" },
    { label: t.footer.datenschutz, href: "/datenschutz" },
  ];

  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-24">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-mist p-1.5">
              <Image
                src="/images/logo.png"
                alt="Ali Supermarkt"
                width={200}
                height={200}
                sizes="56px"
                className="h-full w-full object-contain"
              />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              {t.footer.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
              {t.footer.page}
            </h3>
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
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
              {t.footer.contact}
            </h3>
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
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
              Social
            </h3>
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

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
              {t.footer.legal}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {LEGAL_COLUMN.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    hrefLang={locale === "de" ? undefined : "de"}
                    className="transition hover:text-white"
                  >
                    {link.label}
                    {t.footer.legalLanguageNote ? ` ${t.footer.legalLanguageNote}` : ""}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <LanguageNames
            current={locale}
            links={languageLinks}
            label={t.header.language}
            variant="footer"
          />
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Ali Supermarkt GmbH. {t.footer.rights}
          </p>
          <p>
            {t.footer.design}{" "}
            <Link
              href="https://growusagency.com/"
              target="_blank"
              rel="noopener"
              className="font-medium text-white/75 underline underline-offset-2 transition hover:text-white"
            >
              Growus Agency
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
