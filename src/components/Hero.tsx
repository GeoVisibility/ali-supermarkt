import HeroSlider from "@/components/HeroSlider";
import { getDictionary } from "@/i18n/server";

const SLIDE_IMAGES = [
  "/images/kasap/lammkoteletts-theke.webp",
  "/images/obst-gemuese/obst-gemuese-12.webp",
  "/images/getraenke/getraenke-06.webp",
  "/images/internationale-spezialitaeten/internationale-spezialitaeten-01.webp",
  "/images/grundnahrungsmittel/grundnahrungsmittel-01.webp",
  "/images/suesses-knabbereien/suesses-knabbereien-01.webp",
];

export default async function Hero() {
  const { t } = await getDictionary();
  const slides = SLIDE_IMAGES.map((src, i) => ({ src, alt: t.slider.slides[i] }));

  return (
    <section className="relative overflow-hidden bg-mist">
      {/* soft brand-green backdrop shape, kept behind the photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-16 h-[420px] w-[420px] rounded-full bg-orange/12 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-[34px] pb-16 md:pt-[66px] md:pb-24 lg:grid-cols-2 lg:gap-16">
        {/* Text column */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-smoke/15 bg-white px-4 py-1.5 text-sm font-medium text-orange-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            <span className="text-orange">{t.hero.fresh}</span>{" "}
            <span className="text-smoke">{t.hero.halal}</span>{" "}
            {t.hero.international}
            <span className="mt-2 block text-2xl font-bold leading-snug text-ink/70 sm:text-3xl lg:text-[2.1rem]">
              {t.hero.subtitle}
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
            {t.hero.lead}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#sortiment"
              className="inline-flex items-center justify-center rounded-xl bg-orange-dark px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-orange-dark"
            >
              {t.hero.ctaSortiment}
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-xl border border-smoke/15 bg-white px-6 py-3.5 text-base font-semibold text-ink transition hover:border-smoke/30"
            >
              {t.common.routePlan}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/70">
            <span className="inline-flex items-center gap-1.5">
              <span className="font-semibold text-ink">4,9 ★</span>
              {t.hero.reviews}
            </span>
            <span className="h-1 w-1 rounded-full bg-ink/25" />
            <span className="inline-flex items-center gap-1.5">
              <span className="font-semibold text-ink">
                {t.hero.sunday}
              </span>
              10:00 – 16:00{t.common.timeSuffix}
            </span>
          </div>
        </div>

        {/* Photo column */}
        <div className="relative">
          <HeroSlider
            slides={slides}
            labels={{ prev: t.slider.prev, next: t.slider.next, show: t.slider.show }}
          />

          {/* promo-style sticker — the one place brand red is used */}
          <div className="absolute -left-4 top-6 -rotate-3 rounded-2xl bg-orange-dark px-4 py-3 text-white shadow-lg sm:-left-8">
            <p className="font-heading text-sm font-bold leading-tight">
              {t.hero.stickerLine1}
              <br />
              {t.hero.stickerLine2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
