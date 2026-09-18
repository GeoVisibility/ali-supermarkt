import Image from "next/image";

export default function OurStory() {
  return (
    <section className="bg-white py-16 md:py-24" id="ueber-uns">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Badge */}
        <div className="flex justify-center lg:order-2 lg:justify-end">
          <div className="flex aspect-square w-56 flex-col items-center justify-center rounded-full bg-deep-green text-cream shadow-md shadow-deep-green/20 sm:w-64">
            <span className="font-heading text-6xl font-extrabold sm:text-7xl">1</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-cream/75">
              Jahr in Flamatt
            </span>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:order-1">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-fresh-green">
            Unsere Geschichte
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-4xl">
            Seit 2025 in Flamatt
          </h2>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal/70">
            Seit Mai 2025 sind wir für unsere Kundinnen und Kunden in Flamatt
            da. Was als kleines lokales Geschäft begann, ist mit unserer
            Nachbarschaft gewachsen – Woche für Woche, Einkauf für Einkauf.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-charcoal/70">
            Auf vielfachen Wunsch haben wir zudem die Bewilligung für den
            Sonntagsverkauf erhalten – seither sind wir auch sonntags für Sie
            da.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl">
            <Image
              src="/images/recel-ev-dekorasyonu.webp"
              alt="Blick in den Verkaufsraum von Ali Supermarkt in Flamatt"
              width={900}
              height={520}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
