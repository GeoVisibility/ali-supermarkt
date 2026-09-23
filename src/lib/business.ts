/**
 * Eine Quelle für alle Angaben zum Geschäft (NAP, Öffnungszeiten, Profile).
 * Wird für die Anzeige und für die strukturierten Daten verwendet, damit die
 * Angaben überall identisch sind.
 */

export const SITE_URL = "https://alisupermarkt.ch";

export const BUSINESS = {
  legalName: "Ali Supermarkt GmbH",
  name: "Ali Supermarkt",
  owner: "Kader Yurteri",
  founded: "2025-05",
  street: "Bernstrasse 25",
  postalCode: "3175",
  city: "Wünnewil-Flamatt",
  region: "FR",
  country: "CH",
  latitude: 46.890485,
  longitude: 7.3163709,
  phone: "+41 79 648 30 72",
  phoneHref: "tel:+41796483072",
  whatsapp: "https://wa.me/41796483072",
  email: "info@alisupermarkt.ch",
  instagram: "https://www.instagram.com/ali.supermarkt.gmbh/",
  facebook: "https://www.facebook.com/profile.php?id=61576730932399",
  tiktok: "https://www.tiktok.com/@ali.supermarkt.gmbh",
  googleProfile: "https://www.google.com/maps?cid=13612409872101344473",
  localCh:
    "https://www.local.ch/de/d/flamatt/3175/lebensmittelgeschaeft/ali-supermarkt-gmbh-VNgTRlaD2-Wltp8qkyHOmg",
  searchCh: "https://search.ch/tel/flamatt/bernstrasse-25/ali-supermarkt-gmbh",
  /** Handelsregister Kanton Freiburg, Eintrag vom 27.01.2025 */
  uid: "CHE-402.117.715",
  chid: "CH-217-3591328-3",
  registerOffice: "Handelsregisteramt des Kantons Freiburg",
  registerDate: "27. Januar 2025",
  legalForm: "Gesellschaft mit beschränkter Haftung (GmbH)",
  mapsEmbed:
    "https://www.google.com/maps?q=Ali+Supermarkt,+Bernstrasse+25,+3175+Flamatt,+Switzerland&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Bernstrasse+25%2C+3175+Flamatt%2C+Switzerland",
} as const;

/** Öffnungszeiten für die Anzeige (zusammengefasste Tage). */
export const OPENING_HOURS = [
  { day: "Montag – Donnerstag", time: "08:00 – 19:00" },
  { day: "Freitag", time: "08:00 – 20:00" },
  { day: "Samstag", time: "08:00 – 16:00" },
  { day: "Sonntag", time: "10:00 – 16:00" },
];

/** Dieselben Zeiten als schema.org OpeningHoursSpecification. */
export const OPENING_HOURS_SCHEMA = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "08:00",
    closes: "19:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Friday",
    opens: "08:00",
    closes: "20:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "08:00",
    closes: "16:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Sunday",
    opens: "10:00",
    closes: "16:00",
  },
];
