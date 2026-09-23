import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Ali Supermarkt GmbH in Flamatt: welche Daten beim Besuch dieser Website bearbeitet werden und welche Rechte Sie haben.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" updated="September 2026">
      <LegalSection heading="Verantwortliche Stelle">
        <p>
          Verantwortlich für die Bearbeitung von Personendaten im Zusammenhang
          mit dieser Website ist:
        </p>
        <p>
          {BUSINESS.legalName}
          <br />
          {BUSINESS.street}, {BUSINESS.postalCode} {BUSINESS.city}
          <br />
          E-Mail:{" "}
          <a
            href={`mailto:${BUSINESS.email}`}
            className="font-medium text-orange-dark underline underline-offset-2"
          >
            {BUSINESS.email}
          </a>
          <br />
          Telefon: {BUSINESS.phone}
        </p>
      </LegalSection>

      <LegalSection heading="Grundsatz">
        <p>
          Wir bearbeiten Personendaten nach dem Schweizer
          Datenschutzgesetz (DSG). Diese Website ist eine reine
          Informationsseite: Es gibt kein Kundenkonto, keinen Online-Shop, kein
          Kontaktformular und keinen Newsletter. Sie können unser Sortiment
          ansehen, ohne Angaben zu Ihrer Person zu machen.
        </p>
      </LegalSection>

      <LegalSection heading="Server-Logdateien">
        <p>
          Diese Website wird bei der Vercel Inc. (USA) gehostet. Beim Aufruf
          einer Seite werden – wie bei jedem Internetdienst – technische Daten
          bearbeitet: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene
          Seite, übertragene Datenmenge sowie Angaben zu Browser und
          Betriebssystem. Diese Daten dienen dem sicheren und stabilen Betrieb
          der Website und werden nicht mit anderen Datenquellen zusammengeführt.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies und Analyse">
        <p>
          Wir setzen keine Cookies zu Werbe- oder Analysezwecken und verwenden
          keine Statistik- oder Tracking-Dienste. Die verwendeten Schriftarten
          werden von unserem eigenen Server geladen; es erfolgt dabei keine
          Verbindung zu externen Schriftanbietern.
        </p>
      </LegalSection>

      <LegalSection heading="Google Maps">
        <p>
          Auf der Startseite binden wir im Abschnitt «Besuchen Sie uns» eine
          Karte von Google Maps ein, damit Sie den Weg zu uns finden. Beim
          Laden der Karte wird eine Verbindung zu Servern von Google
          hergestellt; dabei werden unter anderem Ihre IP-Adresse und Angaben zu
          Ihrem Gerät an Google übermittelt. Anbieterin ist die Google Ireland
          Limited, Gordon House, Barrow Street, Dublin 4, Irland. Auf diese
          Bearbeitung haben wir keinen Einfluss. Weitere Angaben finden Sie in
          der Datenschutzerklärung von Google.
        </p>
      </LegalSection>

      <LegalSection heading="Links zu sozialen Netzwerken und WhatsApp">
        <p>
          Wir verlinken auf unsere Profile bei Instagram und TikTok sowie auf
          WhatsApp. Es sind reine Links – Inhalte dieser Dienste werden nicht in
          unsere Website eingebettet. Erst wenn Sie einen Link anklicken, werden
          Daten an den jeweiligen Anbieter übermittelt. Es gelten dann dessen
          Datenschutzbestimmungen.
        </p>
      </LegalSection>

      <LegalSection heading="Kontaktaufnahme">
        <p>
          Wenn Sie uns anrufen, uns eine E-Mail oder eine Nachricht über
          WhatsApp schreiben, bearbeiten wir Ihre Angaben ausschliesslich, um
          Ihre Anfrage zu beantworten. Wir geben diese Daten nicht an Dritte
          weiter und bewahren sie nicht länger auf, als es dafür nötig ist.
        </p>
      </LegalSection>

      <LegalSection heading="Ihre Rechte">
        <p>
          Sie haben im Rahmen des geltenden Rechts jederzeit das Recht auf
          Auskunft über die von uns bearbeiteten Personendaten sowie auf deren
          Berichtigung oder Löschung. Wenden Sie sich dafür an die oben
          genannte Adresse.
        </p>
      </LegalSection>

      <LegalSection heading="Änderungen">
        <p>
          Wir können diese Datenschutzerklärung anpassen, wenn sich die Website
          oder die rechtlichen Vorgaben ändern. Es gilt jeweils die hier
          veröffentlichte Fassung. Das{" "}
          <Link
            href="/impressum"
            className="font-medium text-orange-dark underline underline-offset-2"
          >
            Impressum
          </Link>{" "}
          enthält unsere vollständigen Firmenangaben.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
