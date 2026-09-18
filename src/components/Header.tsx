"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CATEGORIES } from "@/lib/categories";

const NAV_LINKS = [
  { label: "Halal Fleisch", href: "/#halal-fleisch" },
  { label: "Angebote", href: "/#angebote" },
  { label: "Über uns", href: "/#ueber-uns" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSortOpen, setMobileSortOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-full border border-white/10 bg-charcoal/85 px-6 py-3 shadow-lg shadow-charcoal/20 backdrop-blur-md">
        {/* Logo */}
        <Link href="/#top" className="flex shrink-0 items-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream p-1 sm:h-12 sm:w-12">
            <Image
              src="/images/logo.png"
              alt="Ali Supermarkt"
              width={200}
              height={200}
              className="h-full w-full object-contain"
              priority
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* Sortiment dropdown */}
          <div className="group relative">
            <Link
              href="/#sortiment"
              className="inline-flex items-center gap-1 py-2 text-[15px] font-medium text-cream/90 transition hover:text-cream"
            >
              Sortiment
              <svg
                aria-hidden
                viewBox="0 0 12 8"
                className="h-2.5 w-2.5 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover:rotate-180"
              >
                <path d="M1 1.5 6 6.5 11 1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="invisible absolute left-1/2 top-full grid w-64 -translate-x-1/2 translate-y-1 grid-cols-1 gap-0.5 rounded-2xl border border-white/10 bg-charcoal/95 p-2 opacity-0 shadow-lg shadow-charcoal/30 backdrop-blur-md transition-all duration-150 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/sortiment/${cat.slug}`}
                  className="rounded-xl px-3 py-2 text-sm text-cream/85 transition hover:bg-white/8 hover:text-cream"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-cream/90 transition hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/#kontakt"
          className="hidden shrink-0 rounded-full bg-fresh-green px-5 py-2.5 text-sm font-semibold text-deep-green transition hover:brightness-95 md:inline-flex"
        >
          Jetzt kontaktieren
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-cream md:hidden"
        >
          <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-charcoal/95 p-4 shadow-lg shadow-charcoal/20 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1">
            <div>
              <button
                type="button"
                onClick={() => setMobileSortOpen((v) => !v)}
                aria-expanded={mobileSortOpen}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[15px] font-medium text-cream/90 transition hover:bg-white/5 hover:text-cream"
              >
                Sortiment
                <svg
                  aria-hidden
                  viewBox="0 0 12 8"
                  className={`h-2.5 w-2.5 fill-none stroke-current stroke-2 transition-transform duration-200 ${
                    mobileSortOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="M1 1.5 6 6.5 11 1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileSortOpen && (
                <div className="ml-2 mt-1 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/sortiment/${cat.slug}`}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-cream/75 transition hover:bg-white/5 hover:text-cream"
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-cream/90 transition hover:bg-white/5 hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-fresh-green px-3 py-2.5 text-center text-sm font-semibold text-deep-green"
            >
              Jetzt kontaktieren
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
