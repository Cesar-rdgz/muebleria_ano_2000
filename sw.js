const staticCacheName = 'site-static-v1.4.7';
const dynamicCacheName = 'site-dynamic-v1.4.7';
const assets = [
    "index.html",
    "css/styles.css",
    "css/all.css",
    "js/app.js",
    "js/main.js",
    "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    "images/about-animation.gif",
    "images/logo-company-muebleria.jpg",
    "images/salas.jpg",
    "images/centro-tv.jpg",
    "images/recamara.jpg",
    "images/refri.jpg",
    "images/ventilador.jpg",
    "images/sillones.jpg",
    "images/mesa.jpg",
    "images/mueble-de-almacenaje.jpg",
    "images/linea-recamaras.jpg",
    "images/bicicleta.gif",
    "images/lavadora.gif",
    "images/moto-cicleta.gif",
    "pages/fallback.html",
];

//cache size limit function
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        })
    })
};

//install service worker
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
    evt.waitUntil(
        caches.keys().then(keys => {
            //console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))    
            )
        })
    );
});

// fetch event
self.addEventListener('fetch', evt => {
    if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
        evt.respondWith(
            caches.match(evt.request).then(cacheRes => {
                return cacheRes || fetch(evt.request).then(fetchRes => {
                    return caches.open(dynamicCacheName).then(cache => {
                        cache.put(evt.request.url, fetchRes.clone());
                        //limitCacheSize(dynamicCacheName, 2);
                        //console.log(fetchRes);
                        return fetchRes;
                    })
                });
            }).catch(() => {
                if(evt.request.url.indexOf('.html') > -1){
                    return caches.match('pages/fallback.html');
                }
            
            })
        );
    }
});