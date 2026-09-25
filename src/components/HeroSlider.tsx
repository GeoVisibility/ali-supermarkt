"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type Slide = { src: string; alt: string };

/** Beschriftungen der Bedienelemente; `show` enthält den Platzhalter {n}. */
export type SliderLabels = { prev: string; next: string; show: string };

const AUTOPLAY_MS = 4500;

export default function HeroSlider({
  slides,
  labels,
  className = "aspect-[4/5] shadow-ink/10 sm:aspect-[5/4] lg:aspect-[4/5]",
  priority = true,
}: {
  slides: Slide[];
  labels: SliderLabels;
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
      {slides.map((slide, i) => {
        // Nur das aktuelle Bild und seine beiden Nachbarn stehen im DOM – der
        // Rest wird erst geladen, wenn er an die Reihe kommt.
        const offset = Math.abs(i - index);
        const distance = Math.min(offset, slides.length - offset);
        if (distance > 1) return null;

        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={priority && i === 0}
            quality={65}
            sizes="(min-width: 1024px) 480px, 100vw"
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        );
      })}

      {/* darken bottom edge so dots stay legible over any photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/45 to-transparent"
      />

      {/* prev / next arrows */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label={labels.prev}
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm backdrop-blur transition hover:bg-white"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2.5]">
          <path d="M15 5 8 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label={labels.next}
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm backdrop-blur transition hover:bg-white"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2.5]">
          <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* dot pagination – der Punkt bleibt klein, die Schaltfläche ist 24x36px
          gross, damit sie sich auf dem Handy sicher treffen lässt. */}
      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => handleDot(i)}
            aria-label={labels.show.replace("{n}", String(i + 1))}
            aria-current={i === index}
            className="flex h-9 w-6 items-center justify-center"
          >
            <span
              aria-hidden
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/55"
              }`}
            />
          </button>
        ))}
      </div>

    </div>
  );
}
