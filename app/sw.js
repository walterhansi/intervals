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
];

self.addEventListener("install", e => {
  // Kein skipWaiting: die neue Version wartet, bis du in der App „Aktualisieren“ tippst.
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
  if (e.data && e.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  // App-Aufruf (auch mit ?source=pwa) immer aus dem Cache – funktioniert offline
  if (req.mode === "navigate") {
    e.respondWith(caches.match("index.html", { cacheName: CACHE }).then(r => r || fetch(req)));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req)));
});
