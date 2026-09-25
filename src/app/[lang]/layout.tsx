import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import BusinessSchema from "@/components/BusinessSchema";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { LOCALES, OG_LOCALES } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";

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

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.meta.title,
      template: "%s | Ali Supermarkt Flamatt",
    },
    description: t.meta.description,
    keywords: t.meta.keywords,
    applicationName: BUSINESS.name,
    authors: [{ name: BUSINESS.legalName }],
    creator: BUSINESS.legalName,
    publisher: BUSINESS.legalName,
    openGraph: {
      type: "website",
      locale: OG_LOCALES[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALES[l]),
      siteName: BUSINESS.name,
      title: t.meta.title,
      description: t.meta.ogDescription,
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: t.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ali Supermarkt Flamatt",
      description: t.meta.twitterDescription,
      images: ["/og.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { locale, t } = await getDictionary();

  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-mist text-ink font-body">
        <BusinessSchema />
        {children}
        <WhatsAppButton label={t.whatsapp.label} />
      </body>
    </html>
  );
}
