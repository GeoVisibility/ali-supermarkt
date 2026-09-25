import { SITE_URL } from "@/lib/business";
import { LOCALES, LOCALE_NAMES, localizePath } from "@/i18n/config";

/** Startseiten aller Sprachfassungen als Markdown-Liste für llms.txt und llms-full.txt. */
export const LANGUAGE_LIST = LOCALES.map(
  (locale) => `- [${LOCALE_NAMES[locale]}](${SITE_URL}${localizePath("/", locale)})`,
).join("\n");
