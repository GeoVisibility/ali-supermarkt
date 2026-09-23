import type { NextConfig } from "next";

/** Sicherheitsheader für alle Seiten. Kein CSP – Next und die eingebettete
 *  Google-Maps-Karte brauchen Inline-Code, eine falsche Regel würde die Seite
 *  zerschiessen. */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    // 65 für die grossen Fotos (Slider, Kategoriekacheln), 75 bleibt der
    // Standard für alles andere. Ab Next 16 muss jede genutzte Stufe hier stehen.
    qualities: [65, 75],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
