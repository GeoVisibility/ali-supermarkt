"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALE_NAMES, type Locale } from "@/i18n/config";
import { rememberLocale } from "@/i18n/client";

export type LanguageLink = { locale: Locale; href: string };

/*
 * Alle Sprachlinks sind normale <a> statt <Link>, damit die Seite neu geladen
 * wird und der Proxy das frisch gesetzte Cookie sieht.
 */

/** Desktop-Header: alle Sprachen als Kürzel nebeneinander (DE FR EN SQ). */
export function LanguageCodes({
  current,
  links,
  label,
}: {
  current: Locale;
  links: LanguageLink[];
  label: string;
}) {
  return (
    <nav aria-label={label} className="flex items-center">
      {links.map((link) => {
        const active = link.locale === current;
        return (
          <a
            key={link.locale}
            href={link.href}
            hrefLang={link.locale}
            lang={link.locale}
            title={LOCALE_NAMES[link.locale]}
            aria-label={LOCALE_NAMES[link.locale]}
            aria-current={active ? "page" : undefined}
            onClick={() => rememberLocale(link.locale)}
            className={`rounded-full px-2 py-1.5 text-[13px] font-semibold uppercase tracking-wide transition ${
              active ? "bg-white/12 text-white" : "text-white/55 hover:text-white"
            }`}
          >
            {link.locale}
          </a>
        );
      })}
    </nav>
  );
}

/** Mobiles Menü und Footer: alle Sprachen mit vollem Namen. */
export function LanguageNames({
  current,
  links,
  label,
  variant,
}: {
  current: Locale;
  links: LanguageLink[];
  label: string;
  variant: "menu" | "footer";
}) {
  return (
    <nav
      aria-label={label}
      className={variant === "menu" ? "grid grid-cols-4 gap-1.5" : "flex flex-wrap gap-x-4 gap-y-2"}
    >
      {links.map((link) => {
        const active = link.locale === current;
        return (
          <a
            key={link.locale}
            href={link.href}
            hrefLang={link.locale}
            lang={link.locale}
            aria-current={active ? "page" : undefined}
            onClick={() => rememberLocale(link.locale)}
            className={
              variant === "menu"
                ? `rounded-xl px-1 py-2.5 text-center text-[13px] font-semibold transition ${
                    active ? "bg-white text-ink" : "bg-white/6 text-white/80 hover:bg-white/12 hover:text-white"
                  }`
                : `text-sm transition hover:text-white ${active ? "font-semibold text-white" : ""}`
            }
          >
            {LOCALE_NAMES[link.locale]}
          </a>
        );
      })}
    </nav>
  );
}

/** Kompakte Sprachwahl für die schmale mobile Kopfzeile. */
export default function LanguageSwitcher({
  current,
  links,
  label,
}: {
  current: Locale;
  links: LanguageLink[];
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent && event.key !== "Escape") return;
      if (event instanceof MouseEvent && rootRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`${label}: ${LOCALE_NAMES[current]}`}
        className="inline-flex h-9 items-center gap-1.5 rounded-full px-2.5 text-sm font-semibold uppercase text-white/90 transition hover:bg-white/8 hover:text-white"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.4 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.4-3.8-8.5S9.5 5.8 12 3.5Z" />
        </svg>
        {current}
      </button>

      {open && (
        <ul className="absolute right-0 top-full mt-3 flex w-44 flex-col gap-0.5 rounded-2xl border border-white/10 bg-ink/95 p-2 shadow-lg shadow-ink/30 backdrop-blur-md">
          {links.map((link) => (
            <li key={link.locale}>
              <a
                href={link.href}
                hrefLang={link.locale}
                lang={link.locale}
                aria-current={link.locale === current ? "page" : undefined}
                onClick={() => rememberLocale(link.locale)}
                className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition hover:bg-white/8 hover:text-white ${
                  link.locale === current ? "font-semibold text-white" : "text-white/80"
                }`}
              >
                {LOCALE_NAMES[link.locale]}
                <span className="text-xs uppercase text-white/45">{link.locale}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
