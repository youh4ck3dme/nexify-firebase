
const CACHE_NAME = 'nexify-cache-v3';
const OFFLINE_URL = '/offline.html';
const ASSETS_TO_CACHE = [
  '/',
  '/offline.html',
  '/favicon.svg',
  '/manifest.json',
  '/apple-touch-icon.png',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/icon-180x180.png',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/images/portfolio-1.svg',
  '/images/portfolio-2.svg',
  '/images/portfolio-3.svg',
  '/images/portfolio-4.svg',
  '/images/portfolio-5.svg',
  '/images/portfolio-6.svg',
  '/images/team-1.svg',
  '/images/team-2.svg',
  '/images/team-3.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
