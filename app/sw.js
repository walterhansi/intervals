// Service Worker für ao Puls-Intervalle
// __APP_VERSION__ wird beim Veröffentlichen automatisch ersetzt. Dadurch ändert sich
// diese Datei bei jeder neuen Version, und das Handy erkennt das Update.
const VERSION = "__APP_VERSION__";
const CACHE = "ao-puls-" + VERSION;
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-48.png",
  "icons/icon.svg",
  "anleitung.html",
  "aosync.js",
  "lib/qrcode.js",
  "lib/jsqr.js",
];

self.addEventListener("install", e => {
  // Kein skipWaiting: Läuft die App gerade, wartet die neue Version, bis du „Aktualisieren“ tippst
  // (nie mitten im Training). Wurde die Seite schon neu geladen, übernimmt die App sie still.
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" })))));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("ao-puls-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", e => {
  if (!e.data) return;
  if (e.data.type === "SKIP_WAITING") self.skipWaiting();
  // Die App fragt, welche Version dieser Service Worker mitbringt
  if (e.data.type === "VERSION" && e.ports && e.ports[0]) e.ports[0].postMessage(VERSION);
});

// Laden: zuerst aus dem Netz (so bringt einfaches Neuladen sofort die neue Version),
// bei fehlendem oder zu langsamem Netz (3 s) aus dem Speicher – die App läuft also auch offline.
// Symbole und Bibliotheken ändern sich praktisch nie und kommen direkt aus dem Speicher.
const NET_TIMEOUT = 3000;

function fromNetwork(url) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout")), NET_TIMEOUT);
    fetch(url, { cache: "no-cache" }).then(r => {
      clearTimeout(timer);
      if (!r.ok) { reject(new Error("HTTP " + r.status)); return; }
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(url, copy)).catch(() => {});
      resolve(r);
    }, err => { clearTimeout(timer); reject(err); });
  });
}

async function fromCache(url) {
  return (await caches.match(url, { cacheName: CACHE, ignoreSearch: true }))
      || (await caches.match(url, { ignoreSearch: true }));
}

async function networkFirst(url, original) {
  try { return await fromNetwork(url); }
  catch {
    const hit = await fromCache(url);
    return hit || fetch(original);
  }
}

self.addEventListener("fetch", e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;
  if (req.mode === "navigate") {
    // Eigene Seiten (z. B. anleitung.html) direkt, alles andere – auch ./?source=pwa – als App
    const page = url.pathname.endsWith("/anleitung.html") ? "anleitung.html" : "index.html";
    e.respondWith(networkFirst(new URL(page, self.registration.scope).href, req));
    return;
  }
  if (/\/(icons|lib)\//.test(url.pathname)) {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req)));
    return;
  }
  url.search = "";
  e.respondWith(networkFirst(url.href, req));
});
