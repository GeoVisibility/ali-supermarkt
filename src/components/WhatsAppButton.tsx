import { BUSINESS } from "@/lib/business";

const WhatsAppIcon = ({ className }: { className: string }) => (
  <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.14.83.84-3.07-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23Zm-3.2 4.3c-.16 0-.4.06-.61.29-.21.23-.8.79-.8 1.92s.82 2.23.94 2.38c.11.16 1.6 2.44 3.87 3.42.54.23.96.37 1.29.48.54.17 1.04.15 1.43.09.43-.07 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.15-.44-.27-.23-.11-1.34-.66-1.55-.74-.21-.08-.36-.11-.51.12-.15.22-.58.73-.71.88-.13.15-.26.17-.49.06-.23-.12-.96-.36-1.83-1.13-.68-.6-1.13-1.35-1.27-1.58-.13-.23-.01-.35.1-.47.1-.1.23-.27.34-.4.11-.14.15-.23.23-.39.08-.15.04-.29-.02-.4-.06-.12-.5-1.24-.7-1.7-.18-.44-.37-.38-.51-.39h-.42Z" />
  </svg>
);

/** WhatsApp-CTA im Textfluss. */
export function WhatsAppLink({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={BUSINESS.whatsapp}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp-dark px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:brightness-110 ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

/** Schwebender Button unten rechts, auf allen Seiten. */
export default function WhatsAppButton() {
  return (
    <a
      href={BUSINESS.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Schreiben Sie uns auf WhatsApp"
      title="Schreiben Sie uns auf WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-ink/25 ring-1 ring-ink/10 transition hover:scale-105 hover:brightness-105 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
