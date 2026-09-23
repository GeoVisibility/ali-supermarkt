import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/business";

/**
 * Crawler, die wir ausdrücklich begrüssen. Die Regel `*` erlaubt ohnehin
 * alles; ein eigener Block ist vor allem ein klares Signal, dass die Inhalte
 * für Antworten in KI-Assistenten verwendet werden dürfen.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
  "meta-externalagent",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
