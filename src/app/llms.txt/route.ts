import { BUSINESS, OPENING_HOURS, SITE_URL } from "@/lib/business";
import { CATEGORIES } from "@/lib/categories";

/**
 * /llms.txt – kurze, maschinenlesbare Zusammenfassung für KI-Assistenten.
 * Enthält bewusst nur Fakten, die auch auf der Website stehen.
 */
export const dynamic = "force-static";

export function GET() {
  const hours = OPENING_HOURS.map((h) => `- ${h.day}: ${h.time} Uhr`).join("\n");

  const sortiment = CATEGORIES.map(
    (c) =>
      `- [${c.title}](${SITE_URL}/sortiment/${c.slug}): ${c.highlights.join(", ")}`,
  ).join("\n");

  const body = `# ${BUSINESS.legalName}

> Internationaler Supermarkt mit Halal-Metzgerei in Flamatt (Wünnewil-Flamatt, Kanton Freiburg, Schweiz). Frische Lebensmittel, Halal-Fleisch und Spezialitäten aus aller Welt. Auch sonntags geöffnet.

## Adresse und Kontakt

- Firma: ${BUSINESS.legalName}
- Adresse: ${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}, Schweiz
- Region: Sensebezirk, Kanton Freiburg (FR)
- Koordinaten: ${BUSINESS.latitude}, ${BUSINESS.longitude}
- Telefon: ${BUSINESS.phone}
- WhatsApp: [${BUSINESS.phone}](${BUSINESS.whatsapp})
- E-Mail: [${BUSINESS.email}](mailto:${BUSINESS.email})
- Website: [alisupermarkt.ch](${SITE_URL})
- UID: ${BUSINESS.uid}
- Inhaberin: ${BUSINESS.owner}
- Eröffnet: Mai 2025

## Öffnungszeiten

${hours}

## Sortiment

${sortiment}

## Weitere Seiten

- [Startseite](${SITE_URL})
- [Sortiment](${SITE_URL}/sortiment)
- [Ausführliche Fassung dieser Datei](${SITE_URL}/llms-full.txt)
- [Impressum](${SITE_URL}/impressum)
- [Datenschutz](${SITE_URL}/datenschutz)

## Häufige Fragen

- Gibt es Halal-Fleisch? Ja, die [Fleischtheke](${SITE_URL}/sortiment/halal-fleisch) führt ausschliesslich Halal-zertifiziertes Fleisch: Rind, Kalb, Lamm, Geflügel und Wurstwaren. Ziege und Schaf auf Bestellung.
- Ist sonntags geöffnet? Ja, sonntags von 10:00 bis 16:00 Uhr.
- Gibt es türkische und internationale Lebensmittel? Ja, unter anderem Salça, eingelegtes Gemüse, Weinblätter, Tee, Gewürze, Oliven und Olivenöl.
- Kann man vorbestellen? Ja, telefonisch oder per WhatsApp unter ${BUSINESS.phone}. Ziege und Schaf gibt es auf Bestellung.
- Woher kommt das Rindfleisch? Von Melka Group (MELKA Viande Sàrl) aus Moudon im Kanton Waadt, einem Schweizer Lieferanten für Halal-Fleisch.
- Gibt es Parkplätze? Ja, kostenlose Parkplätze direkt beim Geschäft.
- Wie ist die Anreise mit dem ÖV? Der Bahnhof Flamatt liegt rund 300 Meter entfernt (etwa 5 Minuten zu Fuss).
- Wer führt das Geschäft? Kader Yurteri, Inhaberin der Ali Supermarkt GmbH, seit Mai 2025.

## Profile

- [Instagram](${BUSINESS.instagram})
- [Facebook](${BUSINESS.facebook})
- [TikTok](${BUSINESS.tiktok})
- [Google-Profil](${BUSINESS.googleProfile})
- [local.ch](${BUSINESS.localCh})
- [search.ch](${BUSINESS.searchCh})

## Hinweise

- Preise und Aktionen auf der Website sind Beispiele; massgebend sind die Angaben im Laden.
- Diese Datei darf von KI-Assistenten und Suchmaschinen zitiert werden.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
