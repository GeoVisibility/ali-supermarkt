import type { Dictionary } from "@/i18n/dictionaries";

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  img: string;
  highlights: string[];
  /** Hero-Slider auf der Kategorieseite */
  slides?: { src: string; alt: string }[];
  /** Fliesstext auf der Kategorieseite (je Absatz ein Eintrag) */
  body?: string[];
};

type CategorySlug = keyof Dictionary["categories"];

/**
 * Reihenfolge, Titelbild und Anzahl Slider-Bilder je Kategorie. Die Texte
 * (Titel, Beschreibung, Alt-Texte …) stehen in den Wörterbüchern.
 */
const CATEGORY_BASE: { slug: CategorySlug; img: string; slides: boolean }[] = [
  { slug: "halal-fleisch", img: "/images/kasap/lammkrone.webp", slides: false },
  { slug: "obst-gemuese", img: "/images/obst-gemuese/obst-gemuese-01.webp", slides: true },
  {
    slug: "internationale-spezialitaeten",
    img: "/images/internationale-spezialitaeten/internationale-spezialitaeten-01.webp",
    slides: true,
  },
  {
    slug: "grundnahrungsmittel",
    img: "/images/grundnahrungsmittel/grundnahrungsmittel-01.webp",
    slides: true,
  },
  { slug: "getraenke", img: "/images/getraenke/getraenke-01.webp", slides: true },
  {
    slug: "suesses-knabbereien",
    img: "/images/suesses-knabbereien/suesses-knabbereien-01.webp",
    slides: true,
  },
  { slug: "milchprodukte", img: "/images/milchprodukte/milchprodukte-01.webp", slides: true },
  {
    slug: "tiefkuehlprodukte",
    img: "/images/tiefkuehlprodukte/tiefkuehlprodukte-01.webp",
    slides: true,
  },
  {
    slug: "reinigung-haushalt",
    img: "/images/reinigung-haushalt/reinigung-haushalt-01.webp",
    slides: true,
  },
];

export const CATEGORY_SLUGS: string[] = CATEGORY_BASE.map((c) => c.slug);

/** Baut die Slider-Bilder: ein Alt-Text pro Bild, in der Reihenfolge der Dateien. */
function slides(slug: string, alts: string[]) {
  return alts.map((alt, i) => ({
    src: `/images/${slug}/${slug}-${String(i + 1).padStart(2, "0")}.webp`,
    alt,
  }));
}

export function getCategories(t: Dictionary): Category[] {
  return CATEGORY_BASE.map(({ slug, img, slides: hasSlides }) => {
    const text = t.categories[slug];
    return {
      slug,
      img,
      title: text.title,
      tagline: text.tagline,
      description: text.description,
      highlights: text.highlights,
      slides: hasSlides ? slides(slug, text.slides) : undefined,
      body: text.body.length ? text.body : undefined,
    };
  });
}

export function getCategory(t: Dictionary, slug: string) {
  return getCategories(t).find((c) => c.slug === slug);
}
