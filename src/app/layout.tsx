import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import BusinessSchema from "@/components/BusinessSchema";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BUSINESS, SITE_URL } from "@/lib/business";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ali Supermarkt Flamatt | Halal-Fleisch & internationale Lebensmittel",
    template: "%s | Ali Supermarkt Flamatt",
  },
  description:
    "Internationaler Supermarkt in Flamatt: Halal-Metzgerei, frisches Obst und Gemüse, Getränke und Spezialitäten aus aller Welt. Bernstrasse 25, auch sonntags geöffnet.",
  keywords: [
    "Supermarkt Flamatt",
    "Halal Fleisch Flamatt",
    "Halal Metzgerei Freiburg",
    "türkische Lebensmittel Flamatt",
    "internationaler Supermarkt Sensebezirk",
    "sonntags geöffnet Flamatt",
  ],
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.legalName }],
  creator: BUSINESS.legalName,
  publisher: BUSINESS.legalName,
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: BUSINESS.name,
    url: SITE_URL,
    title: "Ali Supermarkt Flamatt | Halal-Fleisch & internationale Lebensmittel",
    description:
      "Internationaler Supermarkt in Flamatt: Halal-Metzgerei, frisches Obst und Gemüse und Spezialitäten aus aller Welt. Auch sonntags geöffnet.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Supermarkt an der Bernstrasse 25 in Flamatt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Supermarkt Flamatt",
    description:
      "Halal-Metzgerei, frisches Obst und Gemüse und internationale Spezialitäten in Flamatt. Auch sonntags geöffnet.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-mist text-ink font-body">
        <BusinessSchema />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
