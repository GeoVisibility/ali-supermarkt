/**
 * Sprachen der Website. Deutsch liegt ohne Präfix unter der Wurzel, die
 * übrigen Sprachen unter /fr, /en und /sq. Diese Datei ist bewusst frei von
 * Server-Code – Header, Sprachwahl und Hinweisleiste nutzen sie im Browser.
 */

export const LOCALES = ["de", "fr", "en", "sq"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "de";

/** Cookie mit der ausdrücklich gewählten Sprache; hat Vorrang vor dem Browser. */
export const LOCALE_COOKIE = "lang";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Seiten, die es nur auf Deutsch gibt (rechtlich massgebender Text). */
export const GERMAN_ONLY_PATHS = ["/impressum", "/datenschutz"];

export const LOCALE_NAMES: Record<Locale, string> = {
  de: "Deutsch",
  fr: "Français",
  en: "English",
  sq: "Shqip",
};

/** hreflang- bzw. Open-Graph-Kennungen. */
export const OG_LOCALES: Record<Locale, string> = {
  de: "de_CH",
  fr: "fr_CH",
  en: "en_GB",
  sq: "sq_AL",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/**
 * Macht aus einem deutschen Pfad (ohne Präfix) den Pfad in einer Sprache.
 * Anker bleiben erhalten: ("/#kontakt", "sq") → "/sq#kontakt".
 */
export function localizePath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE || /^https?:/.test(path)) return path;
  const hashIndex = path.indexOf("#");
  const pathname = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : path.slice(hashIndex);
  const prefixed = pathname === "/" || pathname === "" ? `/${locale}` : `/${locale}${pathname}`;
  return prefixed + hash;
}

/**
 * Wählt aus einer Sprachliste (Accept-Language oder navigator.languages, in
 * Reihenfolge der Vorliebe) die erste Sprache, die wir anbieten.
 */
export function matchLocale(preferred: readonly string[]): Locale | null {
  for (const tag of preferred) {
    const primary = tag.trim().toLowerCase().split("-")[0];
    if (isLocale(primary)) return primary;
  }
  return null;
}

/** Zerlegt einen Accept-Language-Header in eine nach q-Wert sortierte Liste. */
export function parseAcceptLanguage(header: string | null): string[] {
  if (!header) return [];
  return header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith("q="));
      return { tag, q: q ? Number(q.slice(2)) || 0 : 1, index };
    })
    .filter((entry) => entry.tag && entry.tag !== "*" && entry.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index)
    .map((entry) => entry.tag);
}

/** Texte der Hinweisleiste – klein und fest, deshalb nicht im Wörterbuch. */
export const BANNER_TEXT: Record<
  Locale,
  { auto: string; available: string; others: string; close: string }
> = {
  de: {
    auto: "Diese Seite wird auf Deutsch angezeigt.",
    available: "Diese Seite gibt es auch auf Deutsch.",
    others: "Andere Sprachen:",
    close: "Schliessen",
  },
  fr: {
    auto: "Page affichée en français selon la langue de votre navigateur.",
    available: "Cette page existe aussi en français.",
    others: "Autres langues :",
    close: "Fermer",
  },
  en: {
    auto: "Shown in English based on your browser language.",
    available: "This page is also available in English.",
    others: "Other languages:",
    close: "Close",
  },
  sq: {
    auto: "Faqja u shfaq në shqip sipas gjuhës së shfletuesit tuaj.",
    available: "Kjo faqe është edhe në shqip.",
    others: "Gjuhë të tjera:",
    close: "Mbyll",
  },
};
