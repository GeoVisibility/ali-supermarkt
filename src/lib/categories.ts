export type Category = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  img: string;
  highlights: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "halal-fleisch",
    title: "Frisches Halal-Fleisch",
    tagline: "Täglich frisch, Halal-zertifiziert",
    description:
      "An unserer Fleischtheke wählen wir täglich aus, was frisch und Halal-zertifiziert ist.",
    img: "/images/et.webp",
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
    img: "/images/manav.webp",
    highlights: ["Obst", "Gemüse", "Kräuter", "Saisonale Produkte"],
  },
  {
    slug: "internationale-spezialitaeten",
    title: "Internationale Spezialitäten",
    tagline: "Geschmäcker aus aller Welt",
    description:
      "Produkte aus verschiedenen Küchen und Kulturen unter einem Dach – von Antipasti über Salça bis zu Weinblättern.",
    img: "/images/tursu-salca-yaprak.webp",
    highlights: ["Antipasti", "Salça & Konserven", "Weinblätter", "Gewürze"],
  },
  {
    slug: "grundnahrungsmittel",
    title: "Grundnahrungsmittel",
    tagline: "Die Basis für Ihre Küche",
    description:
      "Von Hülsenfrüchten über Reis bis zu Gewürzen und Ölen – alles, was für die tägliche Küche dazugehört.",
    img: "/images/bakliyat.webp",
    highlights: ["Hülsenfrüchte", "Reis", "Gewürze", "Öle"],
  },
  {
    slug: "getraenke",
    title: "Getränke",
    tagline: "Erfrischung für jeden Tag",
    description:
      "Erfrischungsgetränke, Tee und mehr – für den Durst zwischendurch oder für Ihren nächsten Besuch.",
    img: "/images/icecek.webp",
    highlights: ["Erfrischungsgetränke", "Tee", "Wasser", "Säfte"],
  },
  {
    slug: "suesses-knabbereien",
    title: "Süsses & Knabbereien",
    tagline: "Für den kleinen Hunger zwischendurch",
    description:
      "Nüsse, Trockenfrüchte und Knabbereien – eine grosse Auswahl für zu Hause oder unterwegs.",
    img: "/images/kuruyemis.webp",
    highlights: ["Nüsse", "Trockenfrüchte", "Snacks", "Süssigkeiten"],
  },
];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
