"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import LanguageSwitcher, {
  LanguageCodes,
  LanguageNames,
  type LanguageLink,
} from "@/components/LanguageSwitcher";

type NavLink = { label: string; href: string };

export default function HeaderMenu({
  locale,
  homeHref,
  sortimentHref,
  contactHref,
  categories,
  navLinks,
  languageLinks,
  labels,
}: {
  locale: Locale;
  homeHref: string;
  sortimentHref: string;
  contactHref: string;
  categories: { title: string; href: string }[];
  navLinks: NavLink[];
  languageLinks: LanguageLink[];
  labels: {
    sortiment: string;
    cta: string;
    menuOpen: string;
    menuClose: string;
    language: string;
  };
}) {
  const [open, setOpen] = useState(false);
  const [mobileSortOpen, setMobileSortOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-full border border-white/10 bg-ink/85 px-6 py-3 shadow-lg shadow-ink/20 backdrop-blur-md">
        {/* Logo */}
        <Link href={homeHref} className="flex shrink-0 items-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist p-1 sm:h-12 sm:w-12">
            <Image
              src="/images/logo.png"
              alt="Ali Supermarkt"
              width={200}
              height={200}
              sizes="(min-width: 640px) 48px, 44px"
              className="h-full w-full object-contain"
              priority
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {/* Sortiment dropdown */}
          <div className="group relative">
            <Link
              href={sortimentHref}
              className="inline-flex items-center gap-1 py-2 text-[15px] font-medium text-white/90 transition hover:text-white"
            >
              {labels.sortiment}
              <svg
                aria-hidden
                viewBox="0 0 12 8"
                className="h-2.5 w-2.5 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover:rotate-180"
              >
                <path d="M1 1.5 6 6.5 11 1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="invisible absolute left-1/2 top-full grid w-64 -translate-x-1/2 translate-y-1 grid-cols-1 gap-0.5 rounded-2xl border border-white/10 bg-ink/95 p-2 opacity-0 shadow-lg shadow-ink/30 backdrop-blur-md transition-all duration-150 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="rounded-xl px-3 py-2 text-sm text-white/85 transition hover:bg-white/8 hover:text-white"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-white/90 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden lg:block">
            <LanguageCodes current={locale} links={languageLinks} label={labels.language} />
          </div>
          <div className="lg:hidden">
            <LanguageSwitcher current={locale} links={languageLinks} label={labels.language} />
          </div>

          {/* CTA */}
          <Link
            href={contactHref}
            className="hidden shrink-0 rounded-full bg-orange-dark px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95 lg:inline-flex"
          >
            {labels.cta}
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? labels.menuClose : labels.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white lg:hidden"
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
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-ink/95 p-4 shadow-lg shadow-ink/20 backdrop-blur-md lg:hidden">
          <div className="mb-3 border-b border-white/10 pb-4">
            <LanguageNames
              current={locale}
              links={languageLinks}
              label={labels.language}
              variant="menu"
            />
          </div>
          <nav className="flex flex-col gap-1">
            <div>
              <button
                type="button"
                onClick={() => setMobileSortOpen((v) => !v)}
                aria-expanded={mobileSortOpen}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[15px] font-medium text-white/90 transition hover:bg-white/5 hover:text-white"
              >
                {labels.sortiment}
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
                  {categories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-white/90 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={contactHref}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-orange-dark px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              {labels.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
