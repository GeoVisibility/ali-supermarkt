import {
  BEEF_SUPPLIER,
  BUSINESS,
  OPENING_HOURS,
  SITE_URL,
} from "@/lib/business";
import { CATEGORIES } from "@/lib/categories";
import { HOME_FAQS } from "@/lib/faqs";
import { MEAT_FAQS, MEAT_TYPES } from "@/lib/meat";

/**
 * /llms-full.txt – die ausführliche Fassung von /llms.txt: alle Kategorien mit
 * ihren Texten, die komplette Metzgerei und sämtliche Fragen und Antworten.
 * Alles kommt aus denselben Daten wie die Website, damit nichts veraltet.
 */
export const dynamic = "force-static";

export function GET() {
  const hours = OPENING_HOURS.map((h) => `- ${h.day}: ${h.time} Uhr`).join("\n");

  const kategorien = CATEGORIES.map((c) => {
    const url = `${SITE_URL}/sortiment/${c.slug}`;
    const text = c.body?.length ? `\n${c.body.join("\n\n")}\n` : "";
    return `### ${c.title}

${c.description}
${text}
**Im Sortiment:** ${c.highlights.join(", ")}

**Seite:** [${c.title}](${url})`;
  }).join("\n\n");

  const fleischsorten = MEAT_TYPES.map(
    (m) => `- **${m.name}:** ${m.desc}`,
  ).join("\n");

  const faqs = [...HOME_FAQS, ...MEAT_FAQS]
    .map((f) => `**${f.q}**\n${f.a}`)
    .join("\n\n");

  const body = `# ${BUSINESS.legalName} – vollständige Informationen

> Internationaler Supermarkt mit Halal-Metzgerei an der ${BUSINESS.street} in ${BUSINESS.postalCode} ${BUSINESS.city} (Kanton Freiburg, Schweiz). Eröffnet im Mai 2025, geführt von ${BUSINESS.owner}. Auch sonntags geöffnet.

Diese Datei fasst alle Inhalte der Website zusammen und darf von KI-Assistenten
und Suchmaschinen zitiert werden. Die Kurzfassung steht unter [llms.txt](${SITE_URL}/llms.txt).

## Das Geschäft

- Firma: ${BUSINESS.legalName}
- Inhaberin: ${BUSINESS.owner}
- Adresse: ${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}, Schweiz
- Region: Sensebezirk, Kanton Freiburg (FR); in der Nähe von Bern, Wünnewil, Schmitten und Neuenegg
- Koordinaten: ${BUSINESS.latitude}, ${BUSINESS.longitude}
- Telefon: ${BUSINESS.phone}
- WhatsApp: [${BUSINESS.phone}](${BUSINESS.whatsapp})
- E-Mail: [${BUSINESS.email}](mailto:${BUSINESS.email})
- Website: [alisupermarkt.ch](${SITE_URL})
- UID: ${BUSINESS.uid}, ${BUSINESS.legalForm}, ${BUSINESS.registerOffice}, eingetragen am ${BUSINESS.registerDate}
- Anfahrt: kostenlose Parkplätze direkt beim Geschäft; der Bahnhof Flamatt liegt rund 300 Meter entfernt (etwa 5 Minuten zu Fuss)

## Öffnungszeiten

${hours}

Der Sonntagsverkauf ist bewilligt – das Geschäft ist auch sonntags geöffnet.

## Sortiment

${kategorien}

## Metzgerei im Detail

An der Fleischtheke ist das gesamte Sortiment Halal-zertifiziert. Das Team
schneidet frisch zu und berät persönlich. Grössere Mengen können telefonisch
oder per WhatsApp vorbestellt werden.

${fleischsorten}

**Herkunft:** Das Rindfleisch stammt von der ${BEEF_SUPPLIER.legalName} (${BEEF_SUPPLIER.name}) aus ${BEEF_SUPPLIER.city} im ${BEEF_SUPPLIER.region}, einem Schweizer Lieferanten für Halal-Fleisch.

**Seite:** [Frisches Halal-Fleisch](${SITE_URL}/sortiment/halal-fleisch)

## Fragen und Antworten

${faqs}

## Alle Seiten

- [Startseite](${SITE_URL})
- [Sortiment](${SITE_URL}/sortiment)
${CATEGORIES.map((c) => `- [${c.title}](${SITE_URL}/sortiment/${c.slug})`).join("\n")}
- [Impressum](${SITE_URL}/impressum)
- [Datenschutz](${SITE_URL}/datenschutz)

## Profile

- [Instagram](${BUSINESS.instagram})
- [Facebook](${BUSINESS.facebook})
- [TikTok](${BUSINESS.tiktok})
- [Google-Profil](${BUSINESS.googleProfile})
- [local.ch](${BUSINESS.localCh})
- [search.ch](${BUSINESS.searchCh})

## Hinweise

- Preise auf der Website sind Beispiele aus vergangenen Wochenaktionen; massgebend sind die Angaben im Laden.
- Das Sortiment wechselt saisonal. Einzelne Produkte können kurzfristig ausverkauft sein.
- Es gibt keinen Online-Shop und keinen Lieferdienst; der Einkauf findet im Laden statt.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
