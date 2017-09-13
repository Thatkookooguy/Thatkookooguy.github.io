// Here we add an event listener for the "install" event.
// Once it registers successfully, it will automatically
// install the service worker for you. Cool!

this.addEventListener('install', function(event) {
    console.log('[SW]: installing....');

    // Here we are once again using promises! the event
    // object has a waitUntil property that is a promise.
    // This promise waits until the cache portions (below) // are populated before declaring the service worker
    // "installed!"

    event.waitUntil(

        // See this 'v1' here? That's the version of your
        // Service Worker cache. If you ever need to add
        // new dependencies in the future, you'll have to
        // use the "delete" functionality below and make
        // this a 'v2' //(or whatever you wish to call it.

        caches.open('v1').then(function(cache) {
            return cache.addAll([
                //  These are the files we want to cache so // we can access offline! For your project
                // you'll need to add your own. You can
                // include any file you wish here.
                
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
                
                '/assets/images/v-army-beatles.jpg',
                
                '/assets/images/v-army-beatles.webp',
                
                '/assets/images/v-army-broza.jpg',
                
                '/assets/images/v-army-broza.webp',
                
                '/assets/images/v-bilgo-tower.jpg',
                
                '/assets/images/v-bilgo-tower.webp',
                
                '/assets/images/v-carmel-egg.jpg',
                
                '/assets/images/v-carmel-egg.webp',
                
                '/assets/images/v-carmel-gras.jpg',
                
                '/assets/images/v-carmel-gras.webp',
                
                '/assets/images/v-carmel-neil.jpg',
                
                '/assets/images/v-carmel-neil.webp',
                
                '/assets/images/v-carmel-trains.jpg',
                
                '/assets/images/v-carmel-trains.webp',
                
                '/assets/images/v-dan-kid.jpg',
                
                '/assets/images/v-dan-kid.webp',
                
                '/assets/images/v-dan-peg.jpg',
                
                '/assets/images/v-dan-peg.webp',
                
                '/assets/images/v-dan-school.jpg',
                
                '/assets/images/v-dan-school.webp',
                
                '/assets/images/v-dan-work.jpg',
                
                '/assets/images/v-dan-work.webp',
                
                '/assets/images/v-edry-abraxas.jpg',
                
                '/assets/images/v-edry-abraxas.webp',
                
                '/assets/images/v-edry-alma.jpg',
                
                '/assets/images/v-edry-alma.webp',
                
                '/assets/images/v-funny-gron.jpg',
                
                '/assets/images/v-funny-gron.webp',
                
                '/assets/images/v-pancho-cinc.jpg',
                
                '/assets/images/v-pancho-cinc.webp',
                
                '/assets/images/v-pancho-shwarma.jpg',
                
                '/assets/images/v-pancho-shwarma.webp',
                
                '/assets/images/v-push.jpg',
                
                '/assets/images/v-push.webp',
                
                '/assets/images/v-reo-assaf.jpg',
                
                '/assets/images/v-reo-assaf.webp',
                
                '/assets/images/v-reo-ometz.jpg',
                
                '/assets/images/v-reo-ometz.webp',
                
                '/assets/images/v-toys-kutner.jpg',
                
                '/assets/images/v-toys-kutner.webp',
                
                '/assets/images/v-toys-skele.jpg',
                
                '/assets/images/v-toys-skele.webp',
                
                '/assets/images/v-zbang-doo-wop.jpg',
                
                '/assets/images/v-zbang-doo-wop.webp',
                
                '/assets/images/v-zbang-sikes.jpg',
                
                '/assets/images/v-zbang-sikes.webp',
                
                '/assets/images/v-zbang-spitz.jpg',
                
                '/assets/images/v-zbang-spitz.webp',
                
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
                
                '/assets/fonts/socicon/Socicon.eot',
                
                '/assets/fonts/socicon/Socicon.ttf',
                
                '/assets/fonts/socicon/Socicon.woff',
                
                '/assets/fonts/socicon/Socicon.woff2',
                
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


// This is where the really cool stuff happens. We make use
// of the Fetch API in order to first check the cached
// resources, then if those don't exist, we check the
// server, if we are online. Essentially, this is great for
// both offline mode as well as from a site speed
// standpoint!

this.addEventListener('fetch', function(event) {
    // Full documentation for respondWith is available on
    // MDN (http://mzl.la/1SKtV92), but basically with this
    // you are able to customize the response from the
    // request you initially get by the browser.

    event.respondWith(

    // caches.open look familiar? It should! We just used
    // it in the code above! Here we are finding a match
    // for the event.request in our cached v1 storage (in
    // the browser).
    //
    // If we find a match for the request in the cache
    // storage, that means our service worker will serve
    // that file right up from the browser itself rather
    // than going alllll the way to the server to get it!
    // NICE!!!

    // However, if the resource isn't found, then it WILL
    // go ALLLL the way to the server to grab it, or if
    // it's in offline mode, will break and not show the
    // file. Bummer!

        caches.open('v1').then(function(cache) {
            return cache.match(event.request).then(function(response) {
                return response || fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});

// An event listener for the 'activate' functionality that
// goes along with Service Worker registration.

this.addEventListener('activate', function activator(event) {
    console.log('[SW]: activate!');

    // Here we see another wait until....
    event.waitUntil(

        // I won't go too much into detail here because
        // there's a lot of stuff you can look up yourself // (filter() and map() being two of them), but
        // basically this function is in case there's
        // previously cached content, then we get rid of
        // it and populate it with the newest cached
        // content. This is only if you need them to
        // install a v2, v3, v4, etc... In a nutshell it
        // wipes out their previous cache and replaces it
        // with the new version.

        caches.keys().then(function(keys) {
            return Promise.all(keys
                .filter(function(key) {
                    return key.indexOf('v1') !== 0;
                })
                .map(function(key) {
                    console.log("[SW]: old cache found. deleting...");

                    return caches.delete(key);
                })
            );
        })
    );
});
