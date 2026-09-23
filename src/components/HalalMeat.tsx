import Image from "next/image";
import Link from "next/link";
import { BEEF_SUPPLIER } from "@/lib/business";

const MEAT_TYPES = [
  "Rindfleisch",
  "Kalbfleisch",
  "Lammfleisch",
  "Geflügel",
  "Wurstwaren",
  "Ziege (auf Bestellung)",
  "Schaf (auf Bestellung)",
];

const TRUST_POINTS = [
  "Halal-zertifiziert",
  "Täglich frisch",
  "Persönliche Beratung",
];

export default function HalalMeat() {
  return (
    <section className="bg-ink py-16 md:py-24" id="halal-fleisch">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Photo */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-black/20 lg:aspect-[5/4]">
          <Image
            src="/images/kasap/lammkoteletts-theke.webp"
            alt="Frische Fleischauswahl an der Halal-Theke von Ali Supermarkt"
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">
            Unsere Metzgerei
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Frisches Halal-Fleisch in Flamatt
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75">
            An unserer Fleischtheke wählen wir täglich aus, was frisch und
            Halal&#8209;zertifiziert ist. Unser Team berät Sie gerne persönlich
            – vom passenden Stück bis zur Zubereitung.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75">
            Unser Rindfleisch beziehen wir von{" "}
            <a
              href={BEEF_SUPPLIER.url}
              target="_blank"
              rel="noopener"
              className="font-semibold text-orange underline underline-offset-4"
            >
              {BEEF_SUPPLIER.name}
            </a>{" "}
            ({BEEF_SUPPLIER.legalName}) aus {BEEF_SUPPLIER.city} im{" "}
            {BEEF_SUPPLIER.region} – einem Schweizer Lieferanten für
            Halal-Fleisch.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {MEAT_TYPES.map((type) => (
              <span
                key={type}
                className="rounded-full border border-white/25 px-4 py-1.5 text-sm text-white/90"
              >
                {type}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {TRUST_POINTS.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 text-sm text-white/85">
                <svg
                  aria-hidden
                  viewBox="0 0 20 20"
                  className="h-4 w-4 flex-none fill-none stroke-orange stroke-[2.2]"
                >
                  <path d="m4 10.5 3.5 3.5L16 5.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {point}
              </span>
            ))}
          </div>

          <Link
            href="/sortiment/halal-fleisch"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-dark px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            Mehr über unsere Metzgerei
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2.2]">
              <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
