import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  GERMAN_ONLY_PATHS,
  LOCALE_COOKIE,
  isLocale,
  localizePath,
  matchLocale,
  parseAcceptLanguage,
} from "@/i18n/config";

/**
 * Sprachsteuerung:
 * - /fr, /en, /sq … werden unverändert ausgeliefert.
 * - Deutsch liegt ohne Präfix unter der Wurzel und wird intern auf /de/…
 *   umgeschrieben; wer /de/… aufruft, landet dauerhaft auf der Adresse ohne /de.
 * - Beim Aufruf einer deutschen Adresse leiten wir auf dieselbe Seite in einer
 *   anderen Sprache weiter, wenn der Besucher diese Sprache gewählt hat
 *   (Cookie) oder – ohne Wahl – sein Browser sie bevorzugt. Suchmaschinen und
 *   andere Bots werden nie weitergeleitet, damit jede Sprachfassung unter ihrer
 *   eigenen Adresse indexiert wird.
 */
const BOT_PATTERN =
  /bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|lighthouse|pagespeed|headless|validator|whatsapp|telegram/i;

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const [, first = ""] = pathname.split("/");

  if (first === DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (isLocale(first)) return NextResponse.next();

  const target = preferredLocale(request);
  if (target && target !== DEFAULT_LOCALE && !GERMAN_ONLY_PATHS.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = localizePath(pathname, target);
    url.search = search;
    const response = NextResponse.redirect(url, 307);
    response.headers.set("Vary", "Accept-Language, Cookie");
    response.headers.set("Cache-Control", "private, no-store");
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.rewrite(url);
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

/** Ausdrückliche Wahl (Cookie) vor Browsersprache; Bots bleiben auf Deutsch. */
function preferredLocale(request: NextRequest) {
  const chosen = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(chosen)) return chosen;

  const userAgent = request.headers.get("user-agent") ?? "";
  if (!userAgent || BOT_PATTERN.test(userAgent)) return null;

  return matchLocale(parseAcceptLanguage(request.headers.get("accept-language")));
}

export const config = {
  // Alles ausser Next-Interna und Dateien mit Endung (Bilder, robots.txt,
  // sitemap.xml, llms.txt …).
  matcher: ["/((?!_next/|.*\\..*).*)"],
};
