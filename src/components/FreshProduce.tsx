import Image from "next/image";
import { getDictionary } from "@/i18n/server";

const iconProps = {
  viewBox: "0 0 24 24",
  className: "h-5 w-5 fill-none stroke-current stroke-[1.8]",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Symbole der vier Kacheln; die Beschriftungen sind die Stichworte der
 *  Kategorie Obst & Gemüse im Wörterbuch. */
const ICONS = [
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 9c-4 0-6.5 3-6.5 6.5S9 21 12 21s6.5-2 6.5-5.5S16 9 12 9Z" />
        <path d="M12 9c0-2 1-3.5 2.5-4M11 6c-1-1.3-1-2.3-.6-3.5" />
      </svg>
    ),
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 21c-5-2-8-6-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5-3 9-8 11Z" />
        <path d="M12 6v4" />
      </svg>
    ),
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 21V9" />
        <path d="M12 9c-1-4-4-6-8-6 0 4.5 3 7 8 7" />
        <path d="M12 13c1-3.5 4-5.5 7-5.5-.3 3.8-3 6-7 6.5" />
      </svg>
    ),
  },
  {
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
    ),
  },
];

export default async function FreshProduce() {
  const { t } = await getDictionary();
  const labels = t.categories["obst-gemuese"].highlights;
  const HIGHLIGHTS = ICONS.map((item, i) => ({ ...item, label: labels[i] }));

  return (
    <section className="bg-mist py-16 md:py-24" id="frisch">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-xl shadow-ink/10 sm:aspect-[21/9]">
          <Image
            src="/images/obst-gemuese/obst-gemuese-02.webp"
            alt={t.fresh.imageAlt}
            fill
            sizes="(min-width: 1152px) 1100px, 100vw"
            quality={65}
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">
              {t.fresh.eyebrow}
            </span>
            <h2 className="mt-2 max-w-md font-heading text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              {t.fresh.title}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              {t.fresh.lead}
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-smoke/8 bg-white px-4 py-3.5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange/12 text-orange-dark">
                {item.icon}
              </span>
              <span className="text-sm font-semibold text-ink">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
