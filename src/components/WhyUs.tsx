type Card = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  highlight?: boolean;
};

const iconProps = {
  viewBox: "0 0 24 24",
  className: "h-6 w-6 fill-none stroke-current stroke-[1.8]",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const CARDS: Card[] = [
  {
    title: "Frisches Halal-Fleisch",
    desc: "Täglich ausgewählte Fleischprodukte und persönliche Beratung an der Theke.",
    icon: (
      <svg {...iconProps}>
        <path d="M5 15c0-4 3-9 8-9s8 3.5 8 7-3 5-6 5c-1.2 0-1.8-.6-2.5-1.3" />
        <path d="M9 15.5 5 19.5" />
        <circle cx="15" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Frisches Obst & Gemüse",
    desc: "Jeden Tag frische Auswahl für Ihren täglichen Einkauf.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 21c-5-2-8-6-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5-3 9-8 11Z" />
        <path d="M12 6v4" />
      </svg>
    ),
  },
  {
    title: "Internationale Spezialitäten",
    desc: "Produkte aus verschiedenen Küchen und Kulturen unter einem Dach.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.4 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.4-3.8-8.5S9.5 5.8 12 3.5Z" />
      </svg>
    ),
  },
  {
    title: "Alles für den Alltag",
    desc: "Von Grundnahrungsmitteln bis zu besonderen Zutaten.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 9h16l-1.5 11a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 9Z" />
        <path d="M8 9V7a4 4 0 0 1 8 0v2" />
      </svg>
    ),
  },
  {
    title: "Auch sonntags geöffnet",
    desc: "Sonntag 10:00 – 16:00 Uhr — für Sie da, auch wenn andere zu haben.",
    highlight: true,
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="bg-mist py-16 md:py-24" id="warum-ali">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
            Warum Ali Supermarkt?
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Fünf Gründe für Ali Supermarkt
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col gap-4 rounded-2xl p-6 ${
                card.highlight
                  ? "bg-ink text-white shadow-md shadow-ink/20 sm:col-span-2 lg:col-span-1"
                  : "border border-smoke/8 bg-white text-ink"
              }`}
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full ${
                  card.highlight
                    ? "bg-mist/15 text-white"
                    : "bg-orange/12 text-orange-dark"
                }`}
              >
                {card.icon}
              </span>
              <div>
                <h3
                  className={`font-heading text-base font-bold ${
                    card.highlight ? "text-white" : "text-ink"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`mt-1.5 text-sm leading-relaxed ${
                    card.highlight ? "text-white/80" : "text-ink/65"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
