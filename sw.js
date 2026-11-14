// Sixtap: keeps the app working without internet.
const CACHE = 'sixtap-v1';
const FILES = ['./', './index.html', './manifest.webmanifest', './assets/icon-192.png', './assets/icon-512.png', './assets/apple-touch-icon.png', './assets/fonts.css',
  './assets/fonts/barlow-condensed-latin-500-normal.woff2', './assets/fonts/barlow-condensed-latin-600-normal.woff2', './assets/fonts/barlow-condensed-latin-700-normal.woff2', './assets/fonts/ibm-plex-mono-cyrillic-500-normal.woff2', './assets/fonts/ibm-plex-mono-cyrillic-600-normal.woff2', './assets/fonts/ibm-plex-mono-latin-500-normal.woff2', './assets/fonts/ibm-plex-mono-latin-600-normal.woff2', './assets/fonts/ibm-plex-sans-cyrillic-400-normal.woff2', './assets/fonts/ibm-plex-sans-cyrillic-500-normal.woff2', './assets/fonts/ibm-plex-sans-cyrillic-600-normal.woff2', './assets/fonts/ibm-plex-sans-latin-400-normal.woff2', './assets/fonts/ibm-plex-sans-latin-500-normal.woff2', './assets/fonts/ibm-plex-sans-latin-600-normal.woff2'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

// Network first (so updates arrive), cache when offline.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r => { if (r.status === 200) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || (e.request.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
