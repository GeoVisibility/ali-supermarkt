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

/** Baut die Slider-Bilder: ein Alt-Text pro Bild, in der Reihenfolge der Dateien. */
function slides(slug: string, alts: string[]) {
  return alts.map((alt, i) => ({
    src: `/images/${slug}/${slug}-${String(i + 1).padStart(2, "0")}.webp`,
    alt,
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
    slides: slides("obst-gemuese", [
      "Obst- und Gemüseregal mit Tomaten, Peperoni und Zwiebeln bei Ali Supermarkt in Flamatt",
      "Gemüseregal mit Beeren, Tomaten und Kartoffeln in Holzkisten",
      "Obstinsel mit Äpfeln, Melonen und Trauben",
      "Gekühltes Gemüseregal mit Lauch, Zucchini und Karotten",
      "Auslage mit Ingwer, Zitronen und Knoblauch",
      "Blick auf das gekühlte Obst- und Gemüseregal",
      "Kühlregal mit frischen Kräutern und Salaten",
      "Obstregal mit Zitrusfrüchten und Äpfeln",
      "Gemüseregal mit Tomaten, Peperoni und Auberginen",
      "Langes Kühlregal mit Gemüse und Salat",
      "Auslage mit Zitronen, Salat und frischen Kräutern",
      "Gemüseregal mit Tomaten, Peperoni und Zucchini",
      "Regal mit Melonen, Beeren und Blattgemüse",
      "Obstauslage mit Orangen, Äpfeln und Melonen",
    ]),
    body: [
      "Unsere Obst- und Gemüseabteilung ist das Erste, was Sie bei uns in Flamatt sehen – und sie wird jeden Tag neu bestückt. Was am Morgen angeliefert wird, liegt am selben Tag im Regal: Tomaten, Peperoni, Auberginen, Zucchini und Zwiebeln für die tägliche Küche, dazu Salate und frische Kräuter aus dem Kühlregal.",
      "Beim Obst finden Sie neben den Klassikern wie Äpfeln, Bananen und Orangen auch Melonen, Trauben, Feigen und Zitrusfrüchte, wie sie in vielen Küchen rund ums Mittelmeer und im Nahen Osten dazugehören. Je nach Saison kommen weitere Sorten dazu – fragen Sie unser Team, was gerade besonders gut ist.",
      "Wer für mehrere Tage oder für Gäste einkauft, findet viele Sorten auch in grösseren Gebinden und Kisten. Sprechen Sie uns an, wenn Sie grössere Mengen für eine Feier brauchen – wir stellen Ihnen die Bestellung gerne zusammen.",
    ],
    highlights: ["Obst", "Gemüse", "Kräuter", "Saisonale Produkte"],
  },
  {
    slug: "internationale-spezialitaeten",
    title: "Internationale Spezialitäten",
    tagline: "Geschmäcker aus aller Welt",
    description:
      "Produkte aus verschiedenen Küchen und Kulturen unter einem Dach – von Antipasti über Salça bis zu Weinblättern.",
    img: "/images/internationale-spezialitaeten/internationale-spezialitaeten-01.webp",
    slides: slides("internationale-spezialitaeten", [
      "Regal mit Konserven, Salça und eingelegtem Gemüse bei Ali Supermarkt in Flamatt",
      "Regal mit Gläsern, Salça und Antipasti",
      "Regal mit Tee, Olivenöl und Konserven",
      "Regal mit Ölen, Essig und Saucen",
      "Regal mit internationalen Spezialitäten",
      "Regal mit Konserven und Fertigprodukten",
      "Gang mit internationalen Lebensmitteln",
      "Regal mit Spezialitäten und Snacks",
      "Auslage mit frischen Backwaren und Börek",
      "Regal mit Gewürzen und Salça-Gläsern",
    ]),
    body: [
      "Internationale Spezialitäten sind der Kern unseres Sortiments. In den Regalen stehen Produkte aus der türkischen, arabischen, balkanischen und mediterranen Küche nebeneinander – von Salça aus Tomaten und Paprika über eingelegtes Gemüse und Weinblätter bis zu Oliven, Olivenöl und Tahin.",
      "Bei den Gewürzen finden Sie die Mischungen, die man für die Gerichte aus diesen Küchen wirklich braucht: Paprika in mild und scharf, Kreuzkümmel, Sumach, Minze, Thymian und fertige Gewürzmischungen. Dazu kommen Tee in vielen Varianten, türkischer Kaffee sowie Konserven und Antipasti für die schnelle Mahlzeit.",
      "Viele unserer Kundinnen und Kunden kommen, weil sie hier ein bestimmtes Produkt aus ihrer Heimat finden. Wenn etwas fehlt, sagen Sie es uns – wir prüfen gerne, ob wir es ins Sortiment aufnehmen können.",
    ],
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
    slides: slides("grundnahrungsmittel", [
      "Regal mit Reis, Bulgur und Hülsenfrüchten bei Ali Supermarkt in Flamatt",
      "Regal mit Reissäcken und Teigwaren",
      "Regal mit abgepackten Grundnahrungsmitteln",
      "Regal mit Mehl, Griess und Backzutaten",
      "Regal mit Konserven und Trockenwaren",
      "Regal mit Hülsenfrüchten, Reis und Teigwaren",
    ]),
    body: [
      "Grundnahrungsmittel sind bei uns bewusst breit aufgestellt, damit Sie den Wocheneinkauf an einem Ort erledigen können. Reis in verschiedenen Sorten, Bulgur in feiner und grober Körnung, Couscous, Mehl, Griess und Zucker stehen ebenso im Regal wie Teigwaren in vielen Formen.",
      "Bei den Hülsenfrüchten finden Sie Kichererbsen, weisse und rote Bohnen sowie verschiedene Linsen – lose abgepackt und in Konserven. Dazu kommen Öle, Essig und Konserven für die Vorratshaltung.",
      "Viele Produkte gibt es auch in grossen Packungen, etwa Reis- und Mehlsäcke für Familien oder für den Vorrat. Das lohnt sich, wenn Sie regelmässig für viele Personen kochen.",
    ],
    highlights: ["Hülsenfrüchte", "Reis", "Gewürze", "Öle"],
  },
  {
    slug: "getraenke",
    title: "Getränke",
    tagline: "Erfrischung für jeden Tag",
    description:
      "Erfrischungsgetränke, Tee und mehr – für den Durst zwischendurch oder für Ihren nächsten Besuch.",
    img: "/images/getraenke/getraenke-01.webp",
    slides: slides("getraenke", [
      "Getränkekühlschränke mit Softdrinks und Säften bei Ali Supermarkt in Flamatt",
      "Kühlregal mit Getränkeflaschen und Dosen",
      "Kühlschränke mit Erfrischungsgetränken",
      "Getränkekühlung mit Energy Drinks und Softdrinks",
      "Kühlregal mit Wasser und Erfrischungsgetränken",
      "Getränkeregal mit Fruchtsäften und Sirup",
      "Regal mit Flaschen und Getränkespezialitäten",
      "Getränkeregal mit Säften und Eistee",
      "Paletten mit Wasserflaschen und Getränkekisten",
      "Getränkeabteilung mit Kühltheke",
    ]),
    body: [
      "Unsere Getränkeabteilung reicht von der gekühlten Flasche für unterwegs bis zur Harasse für zu Hause. In den Kühlschränken stehen Mineralwasser, Erfrischungsgetränke, Eistee, Energy Drinks und Fruchtsäfte – gut gekühlt und schnell griffbereit.",
      "Im Regal finden Sie zudem Getränke, die man nicht in jedem Supermarkt bekommt: Ayran, Malzgetränke, Fruchtnektare und Sirup sowie eine grosse Auswahl an Tee. Wasser und Süssgetränke gibt es auch im Sechserpack und in Kisten.",
      "Für Feiern und grössere Anlässe stellen wir Ihnen gerne eine Bestellung bereit. Melden Sie sich einfach vorab per WhatsApp oder sprechen Sie uns im Laden an.",
    ],
    highlights: ["Erfrischungsgetränke", "Tee", "Wasser", "Säfte"],
  },
  {
    slug: "suesses-knabbereien",
    title: "Süsses & Knabbereien",
    tagline: "Für den kleinen Hunger zwischendurch",
    description:
      "Nüsse, Trockenfrüchte und Knabbereien – eine grosse Auswahl für zu Hause oder unterwegs.",
    img: "/images/suesses-knabbereien/suesses-knabbereien-01.webp",
    slides: slides("suesses-knabbereien", [
      "Regal mit Süssigkeiten und Knabbereien bei Ali Supermarkt in Flamatt",
      "Regal mit Chips und salzigen Snacks",
      "Regal mit Schokolade, Keksen und Süssigkeiten",
      "Regal mit Keksen, Waffeln und Schokoladenpackungen",
      "Regal mit Halva, Honig und Brotaufstrichen",
      "Regal mit Keksen und Snacks in der Mitte des Ladens",
      "Regal mit Nüssen und Trockenfrüchten",
      "Regal mit Nüssen, Kernen und Trockenfrüchten",
      "Aktionsinsel mit Süssigkeiten und Knabbereien",
      "Regal mit Schokoladen und kleinen Geschenkartikeln",
    ]),
    body: [
      "Für den kleinen Hunger zwischendurch führen wir eine grosse Auswahl an Süssem und Salzigem. Neben Schokolade, Keksen und Waffeln finden Sie orientalische Süssigkeiten wie Halva und Lokum sowie Brotaufstriche und Honig.",
      "Besonders beliebt ist unsere Auswahl an Nüssen, Kernen und Trockenfrüchten – von gesalzenen und ungesalzenen Nüssen über Pistazien und Sonnenblumenkerne bis zu getrockneten Aprikosen, Datteln und Feigen.",
      "Dazu kommen Chips und salzige Snacks sowie wechselnde Aktionen auf unserer Aktionsinsel in der Ladenmitte. Für Gastgeschenke und Gebäckplatten beraten wir Sie gerne persönlich.",
    ],
    highlights: ["Nüsse", "Trockenfrüchte", "Snacks", "Süssigkeiten"],
  },
  {
    slug: "milchprodukte",
    title: "Milchprodukte",
    tagline: "Frisch aus dem Kühlregal",
    description:
      "Joghurt, Käse, Butter und Milch – eine grosse Auswahl an Milchprodukten, gut gekühlt und täglich nachgefüllt.",
    img: "/images/milchprodukte/milchprodukte-01.webp",
    slides: slides("milchprodukte", [
      "Kühlregal mit Joghurt, Käse und Milchprodukten bei Ali Supermarkt in Flamatt",
      "Kühlregal mit Ayran, Joghurt und Butter",
      "Kühlregal mit Käse, Joghurt und Desserts",
    ]),
    body: [
      "Im Kühlregal finden Sie Milchprodukte für den täglichen Bedarf und für die internationale Küche. Neben Milch, Butter und Rahm führen wir Joghurt in verschiedenen Grössen – vom Becher bis zum Familieneimer.",
      "Bei den Käsesorten reicht die Auswahl von Weichkäse in Salzlake über Kaşar bis zu geriebenem Käse für Börek und Aufläufe. Dazu kommen Ayran, Sahne und gekühlte Desserts.",
      "Alle Produkte sind gut gekühlt und werden laufend nachgefüllt – auch am Sonntag, wenn Sie kurzfristig etwas brauchen.",
    ],
    highlights: ["Joghurt & Ayran", "Käse", "Butter", "Milch"],
  },
  {
    slug: "tiefkuehlprodukte",
    title: "Tiefkühlprodukte",
    tagline: "Vorrat für jeden Tag",
    description:
      "In unseren Tiefkühltruhen finden Sie Geflügel, Fisch, Fleischprodukte und mehr – praktisch für den Vorrat zu Hause.",
    img: "/images/tiefkuehlprodukte/tiefkuehlprodukte-01.webp",
    slides: slides("tiefkuehlprodukte", [
      "Tiefkühltruhe mit Fleisch- und Fertigprodukten bei Ali Supermarkt in Flamatt",
      "Tiefkühltruhe mit Geflügel und Fleischprodukten",
      "Tiefkühltruhe mit Fisch und Meeresfrüchten",
      "Tiefkühltruhen mit Teigwaren und Fertiggerichten",
      "Tiefkühlabteilung mit Truhen und Backwaren",
    ]),
    body: [
      "In unseren Tiefkühltruhen finden Sie, was sich gut auf Vorrat halten lässt. Neben Geflügel und Fleischprodukten führen wir Fisch und Meeresfrüchte sowie Tiefkühlgemüse.",
      "Beliebt sind die vorbereiteten Teigwaren und Backwaren: Börek, Teigblätter, Mantı und Fladenbrot, die Sie zu Hause nur noch fertig zubereiten müssen. Dazu kommen Fertiggerichte und Pommes frites.",
      "Wenn Sie grössere Mengen für eine Feier oder für den Gefrierschrank zu Hause brauchen, sprechen Sie unser Team an – wir helfen Ihnen gerne beim Zusammenstellen.",
    ],
    highlights: ["Geflügel", "Fisch", "Fleischprodukte", "Tiefkühlgemüse"],
  },
  {
    slug: "reinigung-haushalt",
    title: "Reinigung & Haushalt",
    tagline: "Alles für ein sauberes Zuhause",
    description:
      "Waschmittel, Reinigungsmittel und Haushaltsbedarf – damit Sie alles für Ihren Alltag an einem Ort finden.",
    img: "/images/reinigung-haushalt/reinigung-haushalt-01.webp",
    slides: slides("reinigung-haushalt", [
      "Regal mit Wasch- und Reinigungsmitteln bei Ali Supermarkt in Flamatt",
      "Regal mit Reinigungsmitteln und Haushaltsartikeln",
      "Gang mit Reinigungsmitteln und Körperpflege",
    ]),
    body: [
      "Damit Sie nicht für jede Kleinigkeit ein zweites Geschäft ansteuern müssen, führen wir auch alles für Haushalt und Reinigung. Im Regal stehen Waschmittel und Weichspüler, Spül- und Putzmittel sowie Reiniger für Küche und Bad.",
      "Dazu kommen Produkte für die tägliche Körperpflege wie Seife, Shampoo und Zahnpasta sowie Haushaltsartikel: Papiertücher, Abfallsäcke, Alufolie und Schwämme.",
      "Viele Artikel gibt es auch in grösseren Gebinden – praktisch für Familien und für alle, die nicht jede Woche nachkaufen möchten.",
    ],
    highlights: ["Waschmittel", "Reinigungsmittel", "Körperpflege", "Haushaltsbedarf"],
  },
];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
