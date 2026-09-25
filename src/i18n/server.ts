import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./config";
import { dictionaryFor } from "./dictionaries";

/** Aktuelle Sprache aus dem Segment app/[lang]. Nur in Server Components. */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!isLocale(value)) notFound();
  return value;
}

/** Für Seiten, die es nur auf Deutsch gibt: andere Sprachen erhalten 404. */
export async function germanOnly() {
  if ((await getLocale()) !== "de") notFound();
}

export async function getDictionary() {
  const locale = await getLocale();
  return { locale, t: dictionaryFor(locale) };
}
