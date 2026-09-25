import Image from "next/image";
import { BUSINESS } from "@/lib/business";
import { getDictionary } from "@/i18n/server";

export default async function OurStory() {
  const { t } = await getDictionary();

  return (
    <section className="bg-white py-16 md:py-24" id="ueber-uns">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Owner photo */}
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl shadow-ink/10 lg:max-w-none">
            <Image
              src="/images/kader-inhaberin.webp"
              alt={t.story.imageAlt}
              fill
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 100vw"
              quality={65}
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md shadow-ink/20">
              {t.story.badge}
            </span>
          </div>

          {/* Message */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
              {t.story.eyebrow}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              {t.story.title}
            </h2>

            <div className="mt-6 flex max-w-xl flex-col gap-4 text-base leading-relaxed text-ink/70">
              {t.story.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 border-l-2 border-orange pl-4">
              <p className="font-heading text-xl font-bold text-ink">
                {BUSINESS.owner}
              </p>
              <p className="mt-0.5 text-sm text-ink/60">
                {t.story.role}
              </p>
            </div>
          </div>
        </div>

        {/* Storefront */}
        <div className="relative mt-14 aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-ink/10 sm:aspect-[21/9]">
          <Image
            src="/images/ladenfront.webp"
            alt={t.story.storeAlt}
            fill
            sizes="(min-width: 1152px) 1100px, 100vw"
            quality={65}
            className="object-cover object-top"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="font-heading text-xl font-extrabold text-white sm:text-2xl">
              {t.story.storeTitle}
            </p>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              {t.story.storeText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
