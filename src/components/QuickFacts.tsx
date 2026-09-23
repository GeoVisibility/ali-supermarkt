import { BUSINESS, OPENING_HOURS } from "@/lib/business";

/**
 * «Auf einen Blick»: die harten Fakten als Definitionsliste – gut zu scannen
 * für Besucher und gut zu zitieren für Suchmaschinen und KI-Assistenten.
 */
export default function QuickFacts({
  sortiment,
  className = "",
}: {
  /** Optionale Zeile für die Kategorieseiten, z. B. die Produktgruppen. */
  sortiment?: string;
  className?: string;
}) {
  const rows: { label: string; value: React.ReactNode }[] = [
    {
      label: "Adresse",
      value: `${BUSINESS.legalName}, ${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}`,
    },
    {
      label: "Öffnungszeiten",
      value: (
        <span className="flex flex-col gap-0.5">
          {OPENING_HOURS.map((hour) => (
            <span key={hour.day}>
              {hour.day}: {hour.time} Uhr
            </span>
          ))}
        </span>
      ),
    },
    {
      label: "Telefon",
      value: (
        <a
          href={BUSINESS.phoneHref}
          className="font-medium text-orange-dark underline underline-offset-2"
        >
          {BUSINESS.phone}
        </a>
      ),
    },
    ...(sortiment ? [{ label: "Sortiment", value: sortiment }] : []),
  ];

  return (
    <div
      className={`rounded-2xl border border-smoke/10 bg-white p-6 sm:p-7 ${className}`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
        Auf einen Blick
      </p>
      <dl className="mt-4 flex flex-col divide-y divide-dashed divide-smoke/12 text-sm">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1 py-2.5 first:pt-0 last:pb-0 sm:flex-row sm:gap-6"
          >
            <dt className="font-semibold text-ink sm:w-40 sm:shrink-0">
              {row.label}
            </dt>
            <dd className="text-ink/70">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
