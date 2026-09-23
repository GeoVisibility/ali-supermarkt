import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/business";
import { CATEGORIES } from "@/lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/sortiment`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...CATEGORIES.map((category) => ({
      url: `${SITE_URL}/sortiment/${category.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: category.slug === "halal-fleisch" ? 0.9 : 0.8,
    })),
    ...["/impressum", "/datenschutz"].map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
