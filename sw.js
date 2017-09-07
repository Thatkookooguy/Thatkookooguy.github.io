self.addEventListener('install', function(e) {
  e.waitUntil(caches.open('achievibit').then(function(cache) {
    return cache.addAll([
      '/',
      '/index.html',
      '/index.html?homescreen=1',
      '/?homescreen=1',
      '/materialIcons.css',
      '/materialize.min.css',
      '/style.css',
      '/jquery.min.js',
      '/three.min.js',
      '/tween.min.js',
      '/Stats.js',
      '/dat.gui.min.js',
      '/leap.min.js',
      '/materialize.min.js',
      '/main.js'
    ]);
  })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    if (response) {
      console.info('response for ' +
        event.request.url + ' was returned from cache!');
    }

    return response || fetch(event.request);
  }));
});
