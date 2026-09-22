export type Category = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  img: string;
  highlights: string[];
  /** Hero-Slider auf der Kategorieseite */
  slides?: { src: string; alt: string }[];
};

function slides(slug: string, count: number, alt: string) {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/${slug}/${slug}-${String(i + 1).padStart(2, "0")}.webp`,
    alt: `${alt} – Bild ${i + 1}`,
  }));
}

export const CATEGORIES: Category[] = [
  {
    slug: "halal-fleisch",
    title: "Frisches Halal-Fleisch",
    tagline: "Täglich frisch, Halal-zertifiziert",
    description:
      "An unserer Fleischtheke wählen wir täglich aus, was frisch und Halal-zertifiziert ist.",
    img: "/images/kasap/lammkrone.webp",
    highlights: [
      "Rindfleisch",
      "Kalbfleisch",
      "Lammfleisch",
      "Geflügel",
      "Wurstwaren",
      "Ziege (auf Bestellung)",
      "Schaf (auf Bestellung)",
    ],
  },
  {
    slug: "obst-gemuese",
    title: "Obst & Gemüse",
    tagline: "Täglich frisch ausgewählt",
    description:
      "Unsere Obst- und Gemüseauswahl wird täglich neu bestückt – für Geschmack, der stimmt. Von saisonalen Klassikern bis zu frischen Kräutern.",
    img: "/images/obst-gemuese/obst-gemuese-01.webp",
    slides: slides("obst-gemuese", 14, "Obst & Gemüse bei Ali Supermarkt in Flamatt"),
    highlights: ["Obst", "Gemüse", "Kräuter", "Saisonale Produkte"],
  },
  {
    slug: "internationale-spezialitaeten",
    title: "Internationale Spezialitäten",
    tagline: "Geschmäcker aus aller Welt",
    description:
      "Produkte aus verschiedenen Küchen und Kulturen unter einem Dach – von Antipasti über Salça bis zu Weinblättern.",
    img: "/images/internationale-spezialitaeten/internationale-spezialitaeten-01.webp",
    slides: slides("internationale-spezialitaeten", 10, "Internationale Spezialitäten bei Ali Supermarkt in Flamatt"),
    highlights: [
      "Tee",
      "Salça (Tomaten- & Paprikamark)",
      "Kichererbsen",
      "Bohnen",
      "Linsen",
      "Bulgur",
      "Oliven & Olivenöl",
      "Eingelegtes (Turşu)",
      "Weinblätter",
      "Tahin & Pekmez",
      "Konserven",
      "Antipasti",
      "Gewürze",
    ],
  },
  {
    slug: "grundnahrungsmittel",
    title: "Grundnahrungsmittel",
    tagline: "Die Basis für Ihre Küche",
    description:
      "Von Hülsenfrüchten über Reis bis zu Gewürzen und Ölen – alles, was für die tägliche Küche dazugehört.",
    img: "/images/grundnahrungsmittel/grundnahrungsmittel-01.webp",
    slides: slides("grundnahrungsmittel", 6, "Grundnahrungsmittel bei Ali Supermarkt in Flamatt"),
    highlights: ["Hülsenfrüchte", "Reis", "Gewürze", "Öle"],
  },
  {
    slug: "getraenke",
    title: "Getränke",
    tagline: "Erfrischung für jeden Tag",
    description:
      "Erfrischungsgetränke, Tee und mehr – für den Durst zwischendurch oder für Ihren nächsten Besuch.",
    img: "/images/getraenke/getraenke-01.webp",
    slides: slides("getraenke", 10, "Getränke bei Ali Supermarkt in Flamatt"),
    highlights: ["Erfrischungsgetränke", "Tee", "Wasser", "Säfte"],
  },
  {
    slug: "suesses-knabbereien",
    title: "Süsses & Knabbereien",
    tagline: "Für den kleinen Hunger zwischendurch",
    description:
      "Nüsse, Trockenfrüchte und Knabbereien – eine grosse Auswahl für zu Hause oder unterwegs.",
    img: "/images/suesses-knabbereien/suesses-knabbereien-01.webp",
    slides: slides("suesses-knabbereien", 10, "Süsses & Knabbereien bei Ali Supermarkt in Flamatt"),
    highlights: ["Nüsse", "Trockenfrüchte", "Snacks", "Süssigkeiten"],
  },
  {
    slug: "milchprodukte",
    title: "Milchprodukte",
    tagline: "Frisch aus dem Kühlregal",
    description:
      "Joghurt, Käse, Butter und Milch – eine grosse Auswahl an Milchprodukten, gut gekühlt und täglich nachgefüllt.",
    img: "/images/milchprodukte/milchprodukte-01.webp",
    slides: slides("milchprodukte", 3, "Milchprodukte bei Ali Supermarkt in Flamatt"),
    highlights: ["Joghurt & Ayran", "Käse", "Butter", "Milch"],
  },
  {
    slug: "tiefkuehlprodukte",
    title: "Tiefkühlprodukte",
    tagline: "Vorrat für jeden Tag",
    description:
      "In unseren Tiefkühltruhen finden Sie Geflügel, Fisch, Fleischprodukte und mehr – praktisch für den Vorrat zu Hause.",
    img: "/images/tiefkuehlprodukte/tiefkuehlprodukte-01.webp",
    slides: slides("tiefkuehlprodukte", 5, "Tiefkühlprodukte bei Ali Supermarkt in Flamatt"),
    highlights: ["Geflügel", "Fisch", "Fleischprodukte", "Tiefkühlgemüse"],
  },
  {
    slug: "reinigung-haushalt",
    title: "Reinigung & Haushalt",
    tagline: "Alles für ein sauberes Zuhause",
    description:
      "Waschmittel, Reinigungsmittel und Haushaltsbedarf – damit Sie alles für Ihren Alltag an einem Ort finden.",
    img: "/images/reinigung-haushalt/reinigung-haushalt-01.webp",
    slides: slides("reinigung-haushalt", 3, "Reinigung & Haushalt bei Ali Supermarkt in Flamatt"),
    highlights: ["Waschmittel", "Reinigungsmittel", "Körperpflege", "Haushaltsbedarf"],
  },
];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
