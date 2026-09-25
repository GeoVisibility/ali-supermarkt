import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE, type Locale } from "./config";

/** Merkt sich die gewählte Sprache; der Proxy richtet sich danach. */
export function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`;
}

export function hasRememberedLocale() {
  return document.cookie
    .split(";")
    .some((part) => part.trim().startsWith(`${LOCALE_COOKIE}=`));
}
