"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type Slide = { src: string; alt: string };

const DEFAULT_SLIDES: Slide[] = [
  { src: "/images/kasap/lammkoteletts-theke.webp", alt: "Frische Halal-Fleischauswahl von Ali Supermarkt" },
  { src: "/images/obst-gemuese/obst-gemuese-03.webp", alt: "Obstinsel mit Äpfeln, Melonen und Trauben bei Ali Supermarkt" },
  { src: "/images/getraenke/getraenke-06.webp", alt: "Regal mit Fruchtsäften und Erfrischungsgetränken bei Ali Supermarkt" },
  { src: "/images/internationale-spezialitaeten/internationale-spezialitaeten-01.webp", alt: "Salça, Konserven und internationale Spezialitäten bei Ali Supermarkt" },
  { src: "/images/grundnahrungsmittel/grundnahrungsmittel-01.webp", alt: "Reis, Teigwaren und Grundnahrungsmittel bei Ali Supermarkt" },
  { src: "/images/suesses-knabbereien/suesses-knabbereien-01.webp", alt: "Süsses und Knabbereien bei Ali Supermarkt" },
];

const AUTOPLAY_MS = 4500;

export default function HeroSlider({
  slides = DEFAULT_SLIDES,
  className = "aspect-[4/5] shadow-ink/10 sm:aspect-[5/4] lg:aspect-[4/5]",
  priority = true,
}: {
  slides?: Slide[];
  className?: string;
  priority?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, [slides.length]);

  const restartTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
  }, [slides.length]);

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [restartTimer]);

  const handlePrev = () => {
    goTo(index - 1);
    restartTimer();
  };
  const handleNext = () => {
    goTo(index + 1);
    restartTimer();
  };
  const handleDot = (i: number) => {
    goTo(i);
    restartTimer();
  };

  return (
    <div className={`relative w-full overflow-hidden rounded-3xl shadow-xl ${className}`}>
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={priority && i === 0}
          sizes="(min-width: 1024px) 480px, 100vw"
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* darken bottom edge so dots stay legible over any photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/45 to-transparent"
      />

      {/* prev / next arrows */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Vorheriges Bild"
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm backdrop-blur transition hover:bg-white"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2.5]">
          <path d="M15 5 8 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="Nächstes Bild"
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm backdrop-blur transition hover:bg-white"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2.5]">
          <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* dot pagination */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => handleDot(i)}
            aria-label={`Bild ${i + 1} anzeigen`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/55 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
