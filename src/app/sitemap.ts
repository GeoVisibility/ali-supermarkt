import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/business";
import { CATEGORY_SLUGS } from "@/lib/categories";
import { DEFAULT_LOCALE, GERMAN_ONLY_PATHS, LOCALES, localizePath } from "@/i18n/config";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  /** Ein Eintrag je Sprache, jeweils mit Verweisen auf alle Sprachfassungen. */
  const localized = (
    path: string,
    changeFrequency: Entry["changeFrequency"],
    priority: number,
  ): Entry[] => {
    const languages: Record<string, string> = {};
    for (const locale of LOCALES) languages[locale] = `${SITE_URL}${localizePath(path, locale)}`;
    languages["x-default"] = `${SITE_URL}${localizePath(path, DEFAULT_LOCALE)}`;

    return LOCALES.map((locale) => ({
      url: `${SITE_URL}${localizePath(path, locale)}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    }));
  };

  return [
    ...localized("/", "weekly", 1),
    ...localized("/sortiment", "monthly", 0.9),
    ...CATEGORY_SLUGS.flatMap((slug) =>
      localized(`/sortiment/${slug}`, "monthly", slug === "halal-fleisch" ? 0.9 : 0.8),
    ),
    // Rechtstexte nur auf Deutsch.
    ...GERMAN_ONLY_PATHS.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
