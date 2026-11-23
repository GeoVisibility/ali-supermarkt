// IndexNow gönderimi: sitemap.xml'deki tüm URL'leri (veya argüman olarak verilenleri) bildirir.
// Kullanım:
//   node indexnow-submit.mjs                 -> sitemap'teki tüm URL'ler
//   node indexnow-submit.mjs /sortiment /en  -> sadece verilen yollar
const HOST = "alisupermarkt.ch";
const KEY = "d64d1eeef1145ee064e71bdc30ac0a10";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function urlsFromSitemap() {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const args = process.argv.slice(2);
const urlList = args.length
  ? args.map((p) => (p.startsWith("http") ? p : `https://${HOST}${p}`))
  : await urlsFromSitemap();

// Önce anahtar dosyasının canlıda olduğunu doğrula
const keyRes = await fetch(KEY_LOCATION);
const keyText = (await keyRes.text()).trim();
if (!keyRes.ok || keyText !== KEY) {
  console.error(`Anahtar dosyası canlıda bulunamadı veya içerik uyuşmuyor: ${KEY_LOCATION} (HTTP ${keyRes.status})`);
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});
console.log(`${urlList.length} URL gönderildi -> HTTP ${res.status} ${res.statusText}`);
// 200 veya 202 = kabul edildi. 403 = anahtar geçersiz, 422 = URL'ler host ile uyuşmuyor, 429 = çok sık gönderim.
