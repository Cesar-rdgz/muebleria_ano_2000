const staticCacheName = 'site-static';
const assets = [
    "index.html",
    "css/styles.css",
    "css/all.css",
    "js/app.js",
    "js/main.js",
    "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    "images/about-animation.gif",
];

// install service worker
self.addEventListener('install', evt => {
    //console.log('service worker has been installed');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

// activate service worker
self.addEventListener('activate', evt => {
    //console.log('service worker has been activated')
});

// fetch event
self.addEventListener('fetch', evt => {
    //console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes =>{
            return cacheRes || fetch(evt.request);
        })
    );
});