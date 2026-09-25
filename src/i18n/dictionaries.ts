import type { Metadata } from "next";
import de from "./dictionaries/de.json";
import fr from "./dictionaries/fr.json";
import en from "./dictionaries/en.json";
import sq from "./dictionaries/sq.json";
import { DEFAULT_LOCALE, LOCALES, localizePath, type Locale } from "./config";

export type Dictionary = typeof de;

/** Die Übersetzungen müssen dieselbe Struktur haben wie das deutsche Original. */
const DICTIONARIES: Record<Locale, Dictionary> = { de, fr, en, sq };

export function dictionaryFor(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

/** Ersetzt {name}-Platzhalter in einem Wörterbuch-Text. */
export function fill(text: string, values: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (match, key) =>
    key in values ? String(values[key]) : match,
  );
}

/**
 * Kanonische URL und hreflang-Verweise für einen deutschen Pfad. Deutsch ist
 * zugleich x-default, weil es ohne Präfix unter der Wurzel liegt.
 */
export function alternatesFor(path: string, locale: Locale): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = localizePath(path, l);
  languages["x-default"] = localizePath(path, DEFAULT_LOCALE);
  return { canonical: localizePath(path, locale), languages };
}
