import Image from "next/image";
import { BUSINESS } from "@/lib/business";

export default function OurStory() {
  return (
    <section className="bg-white py-16 md:py-24" id="ueber-uns">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Owner photo */}
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl shadow-ink/10 lg:max-w-none">
            <Image
              src="/images/kader-inhaberin.webp"
              alt={`${BUSINESS.owner}, Inhaberin der ${BUSINESS.legalName}, vor dem Laden in Flamatt`}
              fill
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 100vw"
              quality={65}
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md shadow-ink/20">
              Seit Mai 2025 in Flamatt
            </span>
          </div>

          {/* Message */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark">
              Über uns
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Eine neue Generation. Eine neue Vision.
            </h2>

            <div className="mt-6 flex max-w-xl flex-col gap-4 text-base leading-relaxed text-ink/70">
              <p>
                Seit Mai 2025 führe ich die Ali Supermarkt GmbH mit viel
                Leidenschaft und einer klaren Vision: Ich möchte zeigen, dass
                ein internationaler Supermarkt modern, vielfältig und
                gleichzeitig persönlich sein kann.
              </p>
              <p>
                Als junge und dynamische Inhaberin ist es mein Ziel, frischen
                Wind in den internationalen Lebensmittelhandel zu bringen.
                Dabei verbinde ich die Vielfalt verschiedener Kulturen mit
                einem modernen Einkaufserlebnis, guter Qualität und
                persönlicher Nähe zu unseren Kundinnen und Kunden.
              </p>
              <p>
                Als Familienbetrieb sind uns Herzlichkeit, Vertrauen und ein
                respektvoller Umgang besonders wichtig. Bei uns sollen sich
                alle willkommen fühlen – unabhängig davon, ob sie vertraute
                Produkte aus ihrer Heimat suchen oder neue Spezialitäten aus
                aller Welt entdecken möchten.
              </p>
              <p>
                Ich freue mich, gemeinsam mit meiner Familie die Ali Supermarkt
                GmbH weiterzuentwickeln und Sie persönlich bei uns begrüssen zu
                dürfen.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-orange pl-4">
              <p className="font-heading text-xl font-bold text-ink">
                {BUSINESS.owner}
              </p>
              <p className="mt-0.5 text-sm text-ink/60">
                Inhaberin der {BUSINESS.legalName}
              </p>
            </div>
          </div>
        </div>

        {/* Storefront */}
        <div className="relative mt-14 aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-ink/10 sm:aspect-[21/9]">
          <Image
            src="/images/ladenfront.webp"
            alt="Eingang von Ali Supermarkt an der Bernstrasse 25 in Flamatt"
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
              Jetzt auch sonntags für Sie da
            </p>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              Auf vielfachen Wunsch haben wir die Bewilligung für den
              Sonntagsverkauf erhalten – Sie finden uns an der Bernstrasse 25
              in Flamatt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
