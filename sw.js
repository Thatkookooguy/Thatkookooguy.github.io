self.addEventListener('install', function(e) {
  e.waitUntil(caches.open('achievibit').then(function(cache) {
    return cache.addAll([
      
      '/assets/fonts/octicons/octicons.eot',
      
      '/assets/fonts/octicons/octicons.svg',
      
      '/assets/fonts/octicons/octicons.ttf',
      
      '/assets/fonts/octicons/octicons.woff',
      
      '/assets/fonts/roboto/Roboto-Bold.ttf',
      
      '/assets/fonts/roboto/Roboto-Bold.woff',
      
      '/assets/fonts/roboto/Roboto-Bold.woff2',
      
      '/assets/fonts/roboto/Roboto-Light.ttf',
      
      '/assets/fonts/roboto/Roboto-Light.woff',
      
      '/assets/fonts/roboto/Roboto-Light.woff2',
      
      '/assets/fonts/roboto/Roboto-Medium.ttf',
      
      '/assets/fonts/roboto/Roboto-Medium.woff',
      
      '/assets/fonts/roboto/Roboto-Medium.woff2',
      
      '/assets/fonts/roboto/Roboto-Regular.ttf',
      
      '/assets/fonts/roboto/Roboto-Regular.woff',
      
      '/assets/fonts/roboto/Roboto-Regular.woff2',
      
      '/assets/fonts/roboto/Roboto-Thin.woff',
      
      '/assets/fonts/roboto/Roboto-Thin.woff2',
      
      '/assets/fonts/roboto/roboto.css',
      
      '/assets/fonts/socicon/Socicon.eot',
      
      '/assets/fonts/socicon/Socicon.ttf',
      
      '/assets/fonts/socicon/Socicon.woff',
      
      '/assets/fonts/socicon/Socicon.woff2',
      
      '/assets/icons/icon-128x128.png',
      
      '/assets/icons/icon-144x144.png',
      
      '/assets/icons/icon-152x152.png',
      
      '/assets/icons/icon-192x192.png',
      
      '/assets/icons/icon-384x384.png',
      
      '/assets/icons/icon-512x512.png',
      
      '/assets/icons/icon-72x72.png',
      
      '/assets/icons/icon-96x96.png',
      
      '/assets/icons/manifest.json',
      
      '/assets/images/86_trans.png',
      
      '/assets/images/86_trans.webp',
      
      '/assets/images/amdocs.jpg',
      
      '/assets/images/amdocs.webp',
      
      '/assets/images/aperco-battle.jpg',
      
      '/assets/images/aperco-battle.webp',
      
      '/assets/images/bars.svg',
      
      '/assets/images/bilgo-rewind.jpg',
      
      '/assets/images/bilgo-rewind.webp',
      
      '/assets/images/carmel-funny.jpg',
      
      '/assets/images/carmel-funny.webp',
      
      '/assets/images/google.png',
      
      '/assets/images/google.webp',
      
      '/assets/images/leon01.jpg',
      
      '/assets/images/leon01.webp',
      
      '/assets/images/leon02.jpg',
      
      '/assets/images/leon02.webp',
      
      '/assets/images/leon03.jpg',
      
      '/assets/images/leon03.webp',
      
      '/assets/images/leon04.jpg',
      
      '/assets/images/leon04.webp',
      
      '/assets/images/leon05.jpg',
      
      '/assets/images/leon05.webp',
      
      '/assets/images/neuman.png',
      
      '/assets/images/neuman.webp',
      
      '/assets/images/pancho-pancho.jpg',
      
      '/assets/images/pancho-pancho.webp',
      
      '/assets/images/pepsi_max.jpg',
      
      '/assets/images/pepsi_max.webp',
      
      '/assets/images/redkix.png',
      
      '/assets/images/redkix.webp',
      
      '/assets/images/tel-aviv-university.svg',
      
      '/assets/images/toy-croc.jpg',
      
      '/assets/images/toy-croc.webp',
      
      '/assets/images/toy-roots.jpg',
      
      '/assets/images/toy-roots.webp',
      
      '/assets/images/video_adi.jpg',
      
      '/assets/images/video_adi.webp',
      
      '/assets/images/video_ariel.webp',
      
      '/assets/images/video_brief_job.jpg',
      
      '/assets/images/video_brief_job.webp',
      
      '/assets/images/video_brief_psy.jpg',
      
      '/assets/images/video_brief_psy.webp',
      
      '/assets/images/video_family.webp',
      
      '/assets/images/video_shlem.webp',
      
      '/assets/images/video_terr.webp',
      
      '/assets/images/vinyl.png',
      
      '/assets/images/vinyl.webp',
      
      '/',
      
      '/index.html',
      
      '/index.html?homescreen=1',
      
      '/?homescreen=1',
      
      '/css/combined.css',
      
      '/scripts/combined.js',
      
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
