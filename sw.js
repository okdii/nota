// Pekerja servis: simpan fail aplikasi supaya Jalinan boleh dibuka tanpa internet.
// Tukar nombor versi CACHE setiap kali fail aplikasi dikemas kini.
const CACHE = 'jalinan-v1';
const ASET = [
  './',
  'index.html',
  'css/style.css',
  'js/data.js',
  'js/app.js',
  'manifest.webmanifest',
  'icons/icon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASET)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((hit) => {
      if (hit) return hit;
      return fetch(event.request)
        .then((res) => {
          const url = new URL(event.request.url);
          const bolehSimpan = res.ok && (url.origin === self.location.origin || url.hostname.endsWith('gstatic.com'));
          if (bolehSimpan) {
            const salinan = res.clone();
            caches.open(CACHE).then((c) => c.put(event.request, salinan));
          }
          return res;
        })
        .catch(() => (event.request.mode === 'navigate' ? caches.match('index.html') : undefined));
    })
  );
});
