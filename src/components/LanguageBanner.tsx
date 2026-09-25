"use client";

import { useEffect, useState } from "react";
import { BANNER_TEXT, LOCALE_NAMES, matchLocale, type Locale } from "@/i18n/config";
import { hasRememberedLocale, rememberLocale } from "@/i18n/client";
import type { LanguageLink } from "@/components/LanguageSwitcher";

type Mode =
  /** Seite wurde in der Browsersprache geöffnet – andere Sprachen anbieten. */
  | { kind: "auto" }
  /** Die Browsersprache gibt es auch – dorthin wechseln anbieten. */
  | { kind: "available"; target: Locale };

/**
 * Kleine Hinweiskarte unten links. Erscheint nur, solange niemand selbst eine
 * Sprache gewählt hat; jede Wahl (auch das Schliessen) wird gemerkt. Schwebt
 * über dem Inhalt, damit nichts auf der Seite verrutscht.
 */
export default function LanguageBanner({
  current,
  links,
}: {
  current: Locale;
  links: LanguageLink[];
}) {
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    if (hasRememberedLocale()) return;
    const preferred = matchLocale(navigator.languages?.length ? navigator.languages : [navigator.language]);
    if (!preferred) return;
    const next: Mode | null =
      preferred !== current
        ? { kind: "available", target: preferred }
        : current !== "de"
          ? { kind: "auto" }
          : null;
    // Cookie und Browsersprache gibt es erst im Browser – der Hinweis
    // erscheint deshalb bewusst nach dem Laden.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMode(next);
  }, [current]);

  if (!mode) return null;

  const dismiss = () => {
    rememberLocale(current);
    setMode(null);
  };

  const textLocale = mode.kind === "available" ? mode.target : current;
  const text = BANNER_TEXT[textLocale];
  const target = mode.kind === "available" ? links.find((l) => l.locale === mode.target) : undefined;

  return (
    <div
      role="region"
      aria-label={LOCALE_NAMES[textLocale]}
      lang={textLocale}
      className="fixed bottom-5 left-4 z-40 flex max-w-[calc(100%-6.5rem)] items-start gap-3 rounded-2xl bg-ink px-4 py-3.5 text-sm text-white shadow-lg shadow-ink/25 ring-1 ring-white/10 sm:bottom-7 sm:left-7 sm:max-w-sm"
    >
      <svg aria-hidden viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-none fill-none stroke-orange stroke-[1.8]">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.4 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.4-3.8-8.5S9.5 5.8 12 3.5Z" />
      </svg>

      <div className="flex-1">
        {mode.kind === "available" && target ? (
          <>
            <p className="leading-snug text-white/85">{text.available}</p>
            <a
              href={target.href}
              hrefLang={target.locale}
              onClick={() => rememberLocale(target.locale)}
              className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-orange-dark px-3 py-1.5 font-semibold text-white transition hover:brightness-95"
            >
              {LOCALE_NAMES[target.locale]}
              <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.4]">
                <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </>
        ) : (
          <>
            <p className="leading-snug text-white/85">{text.auto}</p>
            <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-white/60">
              {text.others}
              {links
                .filter((l) => l.locale !== current)
                .map((l) => (
                  <a
                    key={l.locale}
                    href={l.href}
                    hrefLang={l.locale}
                    lang={l.locale}
                    onClick={() => rememberLocale(l.locale)}
                    className="font-semibold text-white underline underline-offset-2 transition hover:text-orange"
                  >
                    {LOCALE_NAMES[l.locale]}
                  </a>
                ))}
            </p>
          </>
        )}
      </div>

      <button
        type="button"
        onClick={dismiss}
        aria-label={text.close}
        className="-mr-1.5 -mt-1.5 flex h-8 w-8 flex-none items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
          <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
