import Link from "next/link";

const OFFERS = [
  { name: "Rind Steak", unit: "pro kg", oldPrice: "33.90", price: "23.90" },
  { name: "Rindsragout", unit: "pro kg", oldPrice: "22.90", price: "18.90" },
  { name: "Hackfleisch", unit: "pro kg", oldPrice: "14.90", price: "12.90" },
  { name: "Poulet", unit: "pro kg", oldPrice: null, price: "11.90" },
];

export default function Offers() {
  return (
    <section className="bg-white py-16 md:py-24" id="angebote">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-fresh-green">
              Unsere Angebote
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-4xl">
              Beispiele aus unseren Wochenaktionen
            </h2>
          </div>
          <Link
            href="https://www.instagram.com/ali.supermarkt.gmbh/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-xl border border-charcoal/15 bg-white px-6 py-3.5 text-base font-semibold text-charcoal transition hover:border-charcoal/30"
          >
            Alle Angebote ansehen
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2.2]">
              <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {OFFERS.map((offer) => (
            <div
              key={offer.name}
              className="flex flex-col gap-2 rounded-2xl border border-charcoal/8 p-5"
            >
              <span className="font-heading text-base font-bold text-charcoal">
                {offer.name}
              </span>
              {offer.oldPrice && (
                <span className="text-sm text-charcoal/40 line-through">
                  CHF {offer.oldPrice}
                </span>
              )}
              <span className="font-heading text-2xl font-extrabold text-tomato">
                CHF {offer.price}
              </span>
              <span className="text-xs text-charcoal/50">{offer.unit}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 flex items-center gap-2 text-xs text-charcoal/45">
          <span className="h-1.5 w-1.5 rounded-full bg-fresh-green" />
          Beispielpreise aus vergangenen Wochenaktionen – die aktuellen
          Angebote finden Sie auf Instagram und im Laden.
        </p>
      </div>
    </section>
  );
}
