self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(this.cacheVersion).then(cache => cache.addAll(
        'https://sites.google.com/zapp.zone/OPW',
        'https://drive.google.com/uc?id=15BDXnUFcvdUr6aLkZ9ZS_DN9S1eGZdaj',
        'https://drive.google.com/uc?id=1wItUZZr1YDY6YUvTFFwMXM1Y4y6Uk9cG',
        this.precache)));
		});
    

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});