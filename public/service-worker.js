const CACHE_NAME = 'nexify-cache-v1';
const OFFLINE_URL = '/offline.html';
const toCache = [
  '/',
  '/index.html',
  '/nexify.png',
  OFFLINE_URL
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
