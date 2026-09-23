import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Suchmaschinen und KI-Assistenten dürfen alles lesen – die Seite soll
      // in Antworten von ChatGPT, Claude, Perplexity & Co. auftauchen.
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
