import { BUSINESS, openingHours } from "@/lib/business";
import { getDictionary } from "@/i18n/server";

/**
 * «Auf einen Blick»: die harten Fakten als Definitionsliste – gut zu scannen
 * für Besucher und gut zu zitieren für Suchmaschinen und KI-Assistenten.
 */
export default async function QuickFacts({
  sortiment,
  className = "",
}: {
  /** Optionale Zeile für die Kategorieseiten, z. B. die Produktgruppen. */
  sortiment?: string;
  className?: string;
}) {
  const { t } = await getDictionary();

  const rows: { label: string; value: React.ReactNode }[] = [
    {
      label: t.quickFacts.address,
      value: `${BUSINESS.legalName}, ${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}`,
    },
    {
      label: t.quickFacts.hours,
      value: (
        <span className="flex flex-col gap-0.5">
          {openingHours(t.common.days).map((hour) => (
            <span key={hour.day}>
              {hour.day}: {hour.time}
              {t.common.timeSuffix}
            </span>
          ))}
        </span>
      ),
    },
    {
      label: t.quickFacts.phone,
      value: (
        <a
          href={BUSINESS.phoneHref}
          className="font-medium text-orange-dark underline underline-offset-2"
        >
          {BUSINESS.phone}
        </a>
      ),
    },
    ...(sortiment ? [{ label: t.quickFacts.sortiment, value: sortiment }] : []),
  ];

  return (
    <div
      className={`rounded-2xl border border-smoke/10 bg-white p-6 sm:p-7 ${className}`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
        {t.quickFacts.title}
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
