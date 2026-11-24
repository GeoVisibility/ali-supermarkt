/**
 * Leitet das Änderungsdatum jeder Sitemap-Seite aus ihrem Inhalt ab.
 *
 * Für jede Seite (je Sprache) wird ein SHA-1 über die Dateien und Wörterbuch-
 * Abschnitte gebildet, die ihren Inhalt bestimmen. Ist der Hash neu oder anders
 * als in src/lib/page-dates.json, wird das Datum auf heute (Europe/Zurich)
 * gesetzt; sonst bleibt es. Header, Footer und Layout zählen bewusst nicht:
 * eine geänderte Navigation ist keine Inhaltsänderung der Seite.
 *
 * Läuft automatisch vor `npm run build` (package.json → prebuild). Vor dem
 * Commit lokal bauen (oder `node scripts/update-page-dates.mjs`), damit die
 * aktualisierte JSON mit in den Commit kommt; sonst setzt jeder Vercel-Build
 * das Datum erneut auf den Build-Tag.
 *
 * Neue Seiten bekommen beim ersten Lauf das Datum des letzten Git-Commits ihrer
 * Quelldateien (falls verfügbar), sonst heute.
 */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const outFile = path.join(root, "src", "lib", "page-dates.json");
const LOCALES = ["de", "fr", "en", "sq"];
const LEGAL = ["impressum", "datenschutz"];

const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Zurich" }).format(new Date());
const rel = (p) => path.relative(root, p).replaceAll("\\", "/");
const src = (...p) => path.join(root, "src", ...p);
const read = (p) => (existsSync(p) ? readFileSync(p, "utf8").replace(/\r\n/g, "\n") : "");
const dict = Object.fromEntries(LOCALES.map((l) => [l, JSON.parse(read(src("i18n", "dictionaries", `${l}.json`)))]));
const categorySlugs = Object.keys(dict.de.categories);

/** Dateinamen und Grössen eines Bildordners: neue oder ersetzte Bilder ändern den Hash. */
function imageFolder(name) {
  const dir = path.join(root, "public", "images", name);
  if (!existsSync(dir)) return [];
  return readdirSync(dir).sort().map((f) => `${f}:${statSync(path.join(dir, f)).size}`);
}

const component = (name) => src("components", `${name}.tsx`);
const HOME_COMPONENTS = ["Hero", "HeroSlider", "WhyUs", "CategoryGrid", "HalalMeat", "FreshProduce", "Offers", "InstagramSection", "OurStory", "Location", "Faq", "FaqAccordion"];
const HOME_KEYS = ["meta", "hero", "slider", "whyUs", "categoryGrid", "halalMeat", "fresh", "offers", "instagram", "story", "location", "faq", "categories"];

/** Schlüssel wie in src/app/sitemap.ts: "<locale>:<deutscher Pfad>" bzw. der Pfad für Rechtstexte. */
function pages() {
  const list = [];
  for (const l of LOCALES) {
    const t = dict[l];
    list.push({
      key: `${l}:/`,
      files: [src("app", "[lang]", "page.tsx"), ...HOME_COMPONENTS.map(component), src("lib", "business.ts"), src("lib", "categories.ts")],
      data: HOME_KEYS.map((k) => t[k]),
    });
    list.push({
      key: `${l}:/sortiment`,
      files: [src("app", "[lang]", "sortiment", "page.tsx"), component("QuickFacts"), src("lib", "categories.ts")],
      data: [t.sortimentPage, t.categories, t.quickFacts],
    });
    for (const slug of categorySlugs) {
      const halal = slug === "halal-fleisch";
      list.push({
        key: `${l}:/sortiment/${slug}`,
        files: [
          halal ? src("app", "[lang]", "sortiment", "halal-fleisch", "page.tsx") : src("app", "[lang]", "sortiment", "[slug]", "page.tsx"),
          component("HeroSlider"), component("CategoryExtras"), component("QuickFacts"), src("lib", "categories.ts"),
          ...(halal ? [src("lib", "business.ts")] : []),
        ],
        data: [halal ? t.halalPage : t.categoryPage, t.categories[slug], t.quickFacts, imageFolder(halal ? "kasap" : slug)],
      });
    }
  }
  for (const page of LEGAL) {
    list.push({
      key: `/${page}`,
      files: [src("app", "[lang]", page, "page.tsx"), component("LegalPage"), src("lib", "business.ts")],
      data: [],
    });
  }
  return list;
}

function lastCommitDate(files) {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...files.map(rel)], { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch {
    return null;
  }
}

const previous = existsSync(outFile) ? JSON.parse(read(outFile)) : {};
const next = {};
let changed = 0;
for (const page of pages()) {
  const hash = createHash("sha1");
  for (const file of page.files) hash.update(`${rel(file)}\n${read(file)}\n`);
  hash.update(JSON.stringify(page.data));
  const digest = hash.digest("hex");
  const before = previous[page.key];
  if (before && before.hash === digest) {
    next[page.key] = before;
  } else {
    const locale = page.key.includes(":") ? page.key.split(":")[0] : "de";
    const gitFiles = [...page.files, src("i18n", "dictionaries", `${locale}.json`)];
    next[page.key] = { hash: digest, date: before ? today : (lastCommitDate(gitFiles) ?? today) };
    changed++;
  }
}

const json = `${JSON.stringify(next, null, 2)}\n`;
if (json !== read(outFile)) writeFileSync(outFile, json);
console.log(`page-dates: ${Object.keys(next).length} Seiten, ${changed} neu oder geändert.`);
