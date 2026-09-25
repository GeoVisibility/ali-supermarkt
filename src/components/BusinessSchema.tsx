import {
  BUSINESS,
  OPENING_HOURS_SCHEMA,
  SITE_URL,
} from "@/lib/business";
import { getCategories } from "@/lib/categories";
import { localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";

/**
 * Strukturierte Daten zum Geschäft (GroceryStore). Liegt im Root-Layout und
 * gilt damit für alle Seiten – Suchmaschinen und KI-Assistenten finden NAP,
 * Öffnungszeiten und Sortiment an einer festen Stelle.
 */
export default async function BusinessSchema() {
  const { locale, t } = await getDictionary();

  const schema = {
    "@context": "https://schema.org",
    "@type": "GroceryStore",
    "@id": `${SITE_URL}/#store`,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: `${SITE_URL}${localizePath("/", locale)}`,
    logo: `${SITE_URL}/images/logo.png`,
    image: [
      `${SITE_URL}/images/ladenfront.webp`,
      `${SITE_URL}/images/kasap/lammkoteletts-theke.webp`,
      `${SITE_URL}/images/obst-gemuese/obst-gemuese-01.webp`,
    ],
    description: t.schema.description,
    foundingDate: BUSINESS.founded,
    founder: {
      "@type": "Person",
      name: BUSINESS.owner,
      jobTitle: t.schema.founderTitle,
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
    hasMap: BUSINESS.googleProfile,
    identifier: BUSINESS.uid,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    sameAs: [
      BUSINESS.instagram,
      BUSINESS.facebook,
      BUSINESS.tiktok,
      BUSINESS.googleProfile,
      BUSINESS.localCh,
      BUSINESS.searchCh,
    ],
    openingHoursSpecification: OPENING_HOURS_SCHEMA,
    currenciesAccepted: "CHF",
    publicAccess: true,
    amenityFeature: {
      "@type": "LocationFeatureSpecification",
      name: t.schema.parking,
      value: true,
    },
    areaServed: [
      { "@type": "City", name: "Wünnewil-Flamatt" },
      { "@type": "City", name: "Flamatt" },
      { "@type": "AdministrativeArea", name: "Sensebezirk" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.common.sortiment,
      itemListElement: getCategories(t).map((category) => ({
        "@type": "OfferCatalog",
        name: category.title,
        url: `${SITE_URL}${localizePath(`/sortiment/${category.slug}`, locale)}`,
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
