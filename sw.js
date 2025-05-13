const CACHE_NAME = 'knight_tour_v1.0';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './open_graph.png'
  // 필요 시 JS/CSS 파일 추가
];
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => resp || fetch(e.request))
  );
});