import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/ali.supermarkt.gmbh/";

const InstagramIcon = () => (
  <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export default function InstagramSection() {
  return (
    <section className="bg-mist py-12 md:py-16" id="instagram">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-ink p-7 sm:p-9 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange/15 text-orange">
              <InstagramIcon />
            </span>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">
                Folgen Sie uns
              </span>
              <h2 className="mt-1 font-heading text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
                Was gibt&apos;s Neues bei Ali Supermarkt?
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
                Neue Produkte, Aktionen und was gerade frisch hereinkommt –
                täglich auf Instagram.
              </p>
            </div>
          </div>

          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-orange-dark px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            @ali.supermarkt.gmbh
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2.2]">
              <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
