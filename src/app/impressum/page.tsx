import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der Ali Supermarkt GmbH, Bernstrasse 25, 3175 Wünnewil-Flamatt: Firmenangaben, Handelsregister und Kontakt.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum" updated="September 2026">
      <LegalSection heading="Verantwortlich für diese Website">
        <p>
          {BUSINESS.legalName}
          <br />
          {BUSINESS.street}
          <br />
          {BUSINESS.postalCode} {BUSINESS.city}
          <br />
          Schweiz
        </p>
      </LegalSection>

      <LegalSection heading="Kontakt">
        <p>
          Telefon:{" "}
          <a
            href={BUSINESS.phoneHref}
            className="font-medium text-deep-green underline underline-offset-2"
          >
            {BUSINESS.phone}
          </a>
          <br />
          E-Mail:{" "}
          <a
            href={`mailto:${BUSINESS.email}`}
            className="font-medium text-deep-green underline underline-offset-2"
          >
            {BUSINESS.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection heading="Firmenangaben">
        <p>
          Rechtsform: {BUSINESS.legalForm}
          <br />
          Sitz: {BUSINESS.city}, Kanton Freiburg
          <br />
          Unternehmens-Identifikationsnummer (UID): {BUSINESS.uid}
          <br />
          Handelsregister: {BUSINESS.registerOffice}, eingetragen am{" "}
          {BUSINESS.registerDate}
        </p>
        <p>Geschäftsführung: {BUSINESS.owner}</p>
      </LegalSection>

      <LegalSection heading="Haftung für Inhalte">
        <p>
          Die Inhalte dieser Website werden mit Sorgfalt erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität der Angaben – insbesondere
          bei Preisen, Aktionen und Sortimentsangaben – übernehmen wir keine
          Gewähr. Massgebend sind die Angaben und Preise im Laden.
        </p>
      </LegalSection>

      <LegalSection heading="Haftung für Links">
        <p>
          Diese Website enthält Links zu externen Websites Dritter, etwa zu
          unseren Profilen in sozialen Netzwerken. Auf deren Inhalte haben wir
          keinen Einfluss; für diese ist ausschliesslich der jeweilige Anbieter
          verantwortlich.
        </p>
      </LegalSection>

      <LegalSection heading="Urheberrecht">
        <p>
          Texte und Bilder auf dieser Website sind urheberrechtlich geschützt.
          Die Fotos stammen aus unserem Geschäft an der {BUSINESS.street} in{" "}
          {BUSINESS.city}. Eine Verwendung ausserhalb dieser Website bedarf
          unserer schriftlichen Zustimmung.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
