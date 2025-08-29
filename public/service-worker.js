
const CACHE_NAME = 'nexify-cache-v2';
const OFFLINE_URL = '/offline.html';
const toCache = [
  '/',
  '/offline.html',
  '/favicon.svg',
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
    caches.open(CACHE_NAME).then(cache => cache.addAll(toCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request).then(response => response || caches.match(OFFLINE_URL)))
  );
});
