import { notFound } from "next/navigation";

/**
 * Fängt alle unbekannten Adressen ab, damit die 404-Seite im Layout der
 * jeweiligen Sprache erscheint (app/[lang]/not-found.tsx).
 */
export default function CatchAll() {
  notFound();
}
