import Image from "next/image";
import Link from "next/link";

const TILES = [
  "/images/manav.webp",
  "/images/et.webp",
  "/images/icecek.webp",
  "/images/bakliyat.webp",
  "/images/kuruyemis.webp",
  "/images/tursu-salca-yaprak.webp",
];

const CameraIcon = () => (
  <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-cream stroke-[1.8]">
    <rect x="3.5" y="5.5" width="17" height="15" rx="4" />
    <circle cx="12" cy="13" r="3.6" />
    <circle cx="16.3" cy="9" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export default function InstagramSection() {
  return (
    <section className="bg-cream py-16 md:py-24" id="instagram">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-fresh-green">
              Folgen Sie uns
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-4xl">
              Was gibt&apos;s Neues bei Ali Supermarkt?
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/65">
              Über 1.400 Follower auf Instagram – täglich neue Einblicke aus
              unserem Markt: neue Produkte, Aktionen und was gerade frisch
              hereinkommt.
            </p>
          </div>
          <Link
            href="https://www.instagram.com/ali.supermarkt.gmbh/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-xl bg-deep-green px-6 py-3.5 text-base font-semibold text-cream shadow-sm transition hover:bg-[#0e2b23]"
          >
            Instagram folgen
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2.2]">
              <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
          {TILES.map((src) => (
            <Link
              key={src}
              href="https://www.instagram.com/ali.supermarkt.gmbh/"
              target="_blank"
              rel="noopener"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt="Eindruck aus dem Sortiment von Ali Supermarkt"
                fill
                sizes="(min-width: 1024px) 180px, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/40"
              >
                <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <CameraIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
