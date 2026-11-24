// IndexNow gönderimi (Bing, Yandex ve diğer IndexNow motorları).
// Kullanım:
//   node scripts/indexnow-submit.mjs                 -> canlı sitemap'teki tüm URL'ler
//   node scripts/indexnow-submit.mjs /sortiment /en  -> sadece verilen yollar
//   node scripts/indexnow-submit.mjs --build         -> build adımı (npm postbuild): yeni derlenen
//        sitemap'teki tüm URL'ler. Yalnız Vercel üretim derlemesinde çalışır, derlemeyi asla düşürmez.
//
// Göndermeden önce anahtar dosyasının canlıda olduğu kontrol edilir.
// Uç nokta Bing: api.indexnow.org'a yapılan gönderimler Bing Webmaster Tools'ta görünmedi,
// Bing'e doğrudan yapılanlar göründü. Bing aldığı URL'leri diğer motorlarla paylaşır.
import { readFile } from "node:fs/promises";

const HOST = "alisupermarkt.ch";
const ORIGIN = `https://${HOST}`;
const KEY = "d64d1eeef1145ee064e71bdc30ac0a10";
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const ENDPOINT = "https://www.bing.com/indexnow";
const BUILT_SITEMAP = new URL("../.next/server/app/sitemap.xml.body", import.meta.url);

const args = process.argv.slice(2);
const buildMode = args.includes("--build");
const paths = args.filter((arg) => !arg.startsWith("--"));

const locs = (xml) => [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) => m[1]);

async function fetchText(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return res.text();
}

function toUrl(value) {
  const url = new URL(value, ORIGIN);
  if (url.host !== HOST) throw new Error(`Bu site dışında bir adres: ${value}`);
  return url.href;
}

async function collectUrls() {
  if (paths.length) return [...new Set(paths.map(toUrl))];
  // Build sırasında yeni sitemap henüz canlıda değil; yeni sayfalar da gönderilsin diye derleneni oku.
  if (buildMode) return locs(await readFile(BUILT_SITEMAP, "utf8"));
  return locs(await fetchText(`${ORIGIN}/sitemap.xml`));
}

async function main() {
  if (buildMode && process.env.VERCEL_ENV !== "production") {
    console.log("IndexNow: üretim derlemesi değil, gönderim atlandı.");
    return;
  }
  let keyText = "";
  try { keyText = (await fetchText(`${KEY_LOCATION}?check=${Date.now()}`)).trim(); } catch { /* aşağıda raporlanır */ }
  if (keyText !== KEY) throw new Error(`Anahtar dosyası canlıda yok veya içeriği farklı: ${KEY_LOCATION}`);

  const urlList = await collectUrls();
  if (!urlList.length) {
    console.log("IndexNow: gönderilecek URL yok.");
    return;
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  // 200 = alındı, 202 = alındı (anahtar doğrulaması bekliyor). 403 = anahtar geçersiz,
  // 422 = URL'ler host ile uyuşmuyor, 429 = çok sık gönderim.
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
  console.log(`IndexNow: ${urlList.length} URL gönderildi (HTTP ${res.status}).`);
}

main().catch((error) => {
  console.error(`IndexNow: ${error.message}`);
  // Build adımı yayını asla durdurmaz; elle çalıştırmada hata kodu 1 döner.
  if (!buildMode) process.exitCode = 1;
});
