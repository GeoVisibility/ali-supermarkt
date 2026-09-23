import {
  BUSINESS,
  OPENING_HOURS_SCHEMA,
  SITE_URL,
} from "@/lib/business";
import { CATEGORIES } from "@/lib/categories";

/**
 * Strukturierte Daten zum Geschäft (GroceryStore). Liegt im Root-Layout und
 * gilt damit für alle Seiten – Suchmaschinen und KI-Assistenten finden NAP,
 * Öffnungszeiten und Sortiment an einer festen Stelle.
 */
export default function BusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GroceryStore",
    "@id": `${SITE_URL}/#store`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: [
      `${SITE_URL}/images/ladenfront.webp`,
      `${SITE_URL}/images/kasap/lammkoteletts-theke.webp`,
      `${SITE_URL}/images/obst-gemuese/obst-gemuese-01.webp`,
    ],
    description:
      "Internationaler Supermarkt in Flamatt mit Halal-Metzgerei, frischem Obst und Gemüse sowie Spezialitäten aus aller Welt. Auch sonntags geöffnet.",
    foundingDate: BUSINESS.founded,
    founder: {
      "@type": "Person",
      name: BUSINESS.owner,
      jobTitle: "Inhaberin",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      postalCode: BUSINESS.postalCode,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    hasMap: BUSINESS.mapsDirections,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    sameAs: [BUSINESS.instagram],
    openingHoursSpecification: OPENING_HOURS_SCHEMA,
    currenciesAccepted: "CHF",
    areaServed: [
      { "@type": "City", name: "Wünnewil-Flamatt" },
      { "@type": "City", name: "Flamatt" },
      { "@type": "AdministrativeArea", name: "Sensebezirk" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sortiment",
      itemListElement: CATEGORIES.map((category) => ({
        "@type": "OfferCatalog",
        name: category.title,
        url: `${SITE_URL}/sortiment/${category.slug}`,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
