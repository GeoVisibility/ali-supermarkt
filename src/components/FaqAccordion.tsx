"use client";

import Link from "next/link";
import { useState } from "react";

export type FaqItem = { q: string; a: string; href?: string; hrefLabel?: string };

/** Aufklappbare Fragen der Startseite; Rahmen und JSON-LD liefert <Faq />. */
export default function FaqAccordion({ items: FAQS }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 flex flex-col gap-3">
      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-smoke/8"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-heading text-[15px] font-bold text-ink sm:text-base">
                {item.q}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange/12 text-orange-dark transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.4]">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-4">
                  <p className="text-sm leading-relaxed text-ink/65">
                    {item.a}
                  </p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-dark transition hover:gap-2.5"
                    >
                      {item.hrefLabel}
                      <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.4]">
                        <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
