import { BUSINESS, OPENING_HOURS } from "@/lib/business";

const HOURS = OPENING_HOURS;

const MAPS_EMBED_SRC = BUSINESS.mapsEmbed;
const MAPS_DIRECTIONS_HREF = BUSINESS.mapsDirections;

export default function Location() {
  return (
    <section className="bg-cream py-16 md:py-24" id="kontakt">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-fresh-green">
            Besuchen Sie uns
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-4xl">
            Ali Supermarkt in Flamatt
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Map */}
          <div className="overflow-hidden rounded-3xl border border-charcoal/8 shadow-sm">
            <iframe
              title="Standort von Ali Supermarkt auf Google Maps"
              src={MAPS_EMBED_SRC}
              loading="lazy"
              className="h-80 w-full lg:h-full"
              style={{ border: 0, minHeight: 320 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info card */}
          <div className="flex flex-col justify-between gap-8 rounded-3xl bg-white p-7 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-heading text-lg font-bold text-charcoal">
                  {BUSINESS.legalName}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-charcoal/65">
                  {BUSINESS.street}
                  <br />
                  {BUSINESS.postalCode} {BUSINESS.city}
                  <br />
                  Schweiz
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 font-semibold text-charcoal transition hover:text-deep-green"
                >
                  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.7c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1L6.6 10.8Z" />
                  </svg>
                  {BUSINESS.phone}
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="inline-flex items-center gap-2 text-charcoal/70 transition hover:text-deep-green"
                >
                  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                  {BUSINESS.email}
                </a>
              </div>

              <table className="w-full border-collapse text-sm">
                <tbody>
                  {HOURS.map((row) => (
                    <tr key={row.day} className="border-t border-dashed border-charcoal/12">
                      <td className="py-2 text-charcoal/70">{row.day}</td>
                      <td className="py-2 text-right font-medium text-charcoal">
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <a
              href={MAPS_DIRECTIONS_HREF}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-deep-green px-6 py-3.5 text-base font-semibold text-cream shadow-sm transition hover:bg-[#0e2b23]"
            >
              Route planen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
