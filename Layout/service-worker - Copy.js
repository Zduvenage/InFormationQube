// service-worker.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('your-app-cache').then((cache) => {
      return cache.addAll([
        'https://drive.google.com/uc?id=1XZIYjy8A4d7eFAxiaDhvo7dL0wety3wI', //FILE_ID_FOR_ROOT',
        'https://drive.google.com/uc?id=1lpncYS8mRkaTdEg25utR1OggTG62GDqhP-oNe2CDeAg', //FILE_ID_FOR_INDEX_HTML? might have to change together with root above',
        'https://drive.google.com/uc?id=15BDXnUFcvdUr6aLkZ9ZS_DN9S1eGZdaj', //FILE_ID_FOR_STYLES_CSShttps://drive.google.com/file/d/15BDXnUFcvdUr6aLkZ9ZS_DN9S1eGZdaj/view?usp=sharing',
        'https://drive.google.com/uc?id=1wItUZZr1YDY6YUvTFFwMXM1Y4y6Uk9cG', //FILE_ID_FOR_SCRIPTS_JShttps://drive.google.com/file/d/1wItUZZr1YDY6YUvTFFwMXM1Y4y6Uk9cG/view?usp=sharing',
        'https://drive.google.com/uc?id=1t1QzbedY15Je2RjDSV4xybBTwvgLaVTl', //FILE_ID_FOR_ICON_PNGhttps://drive.google.com/file/d/1t1QzbedY15Je2RjDSV4xybBTwvgLaVTl/view?usp=sharing'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
