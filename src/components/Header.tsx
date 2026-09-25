import HeaderMenu from "@/components/HeaderMenu";
import LanguageBanner from "@/components/LanguageBanner";
import { LOCALES, localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import { getCategories } from "@/lib/categories";

/**
 * Header mit Navigation, Sprachwahl und Sprachhinweis.
 * `path` ist der deutsche Pfad der aktuellen Seite – daraus entstehen die
 * Links auf dieselbe Seite in den anderen Sprachen. Bei Seiten, die es nur
 * auf Deutsch gibt (`germanOnly`), führen die anderen Sprachen zur Startseite.
 */
export default async function Header({
  path = "/",
  germanOnly = false,
}: {
  path?: string;
  germanOnly?: boolean;
}) {
  const { locale, t } = await getDictionary();
  const href = (p: string) => localizePath(p, locale);

  const languageLinks = LOCALES.map((l) => ({
    locale: l,
    href: localizePath(germanOnly && l !== "de" ? "/" : path, l),
  }));

  return (
    <>
      <HeaderMenu
        locale={locale}
        homeHref={href("/#top")}
        sortimentHref={href("/sortiment")}
        contactHref={href("/#kontakt")}
        categories={getCategories(t).map((c) => ({
          title: c.title,
          href: href(`/sortiment/${c.slug}`),
        }))}
        navLinks={[
          { label: t.header.halal, href: href("/#halal-fleisch") },
          { label: t.header.offers, href: href("/#angebote") },
          { label: t.header.about, href: href("/#ueber-uns") },
        ]}
        languageLinks={languageLinks}
        labels={{
          sortiment: t.common.sortiment,
          cta: t.header.cta,
          menuOpen: t.header.menuOpen,
          menuClose: t.header.menuClose,
          language: t.header.language,
        }}
      />
      {/* Auf rein deutschen Seiten gäbe es keine Fassung, auf die der Hinweis
          verweisen könnte. */}
      {germanOnly ? null : <LanguageBanner current={locale} links={languageLinks} />}
    </>
  );
}
