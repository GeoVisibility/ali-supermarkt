import type { Faq } from "@/lib/faqs";

/** Fleischsorten an der Theke – Seite und /llms-full.txt teilen sich die Liste. */
export const MEAT_TYPES:{ name: string; desc: string }[] = [
  {
    name: "Rindfleisch",
    desc: "Saftiges Rindfleisch für Braten, Steaks und Gulasch – täglich frisch zugeschnitten.",
  },
  {
    name: "Kalbfleisch",
    desc: "Zartes Kalbfleisch für feine Braten und Schnitzel.",
  },
  {
    name: "Lammfleisch",
    desc: "Zartes Lammfleisch, ideal für traditionelle Gerichte und den Grill.",
  },
  {
    name: "Geflügel",
    desc: "Frisches Geflügel – von ganzen Hähnchen bis zu ausgewählten Teilstücken.",
  },
  {
    name: "Wurstwaren",
    desc: "Ausgewählte Wurstspezialitäten aus Halal-Fleisch.",
  },
  {
    name: "Ziege",
    desc: "Auf Bestellung erhältlich – sprechen Sie unser Team an der Theke an.",
  },
  {
    name: "Schaf",
    desc: "Auf Bestellung erhältlich – sprechen Sie unser Team an der Theke an.",
  },
];

/** Fragen und Antworten zur Metzgerei. */
export const MEAT_FAQS: Faq[] = [
  {
    q: "Ist das Fleisch bei Ali Supermarkt Halal-zertifiziert?",
    a: "Ja, das gesamte Fleischsortiment an unserer Theke ist Halal-zertifiziert.",
  },
  {
    q: "Kann ich Fleisch für eine grössere Menge vorbestellen?",
    a: "Ja, sprechen Sie unser Team an der Theke an oder schreiben Sie uns vorab über WhatsApp – wir bereiten Ihre Bestellung gerne vor.",
  },
  {
    q: "Woher kommt Ihr Rindfleisch?",
    a: "Unser Rindfleisch beziehen wir von Melka Group (MELKA Viande Sàrl) aus Moudon im Kanton Waadt, einem Schweizer Lieferanten für Halal-Fleisch.",
  },
  {
    q: "Bieten Sie auch Wurstwaren an?",
    a: "Ja, wir führen eine Auswahl an Wurstwaren aus Halal-Fleisch.",
  },
];
