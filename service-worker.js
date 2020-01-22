const CACHE_NAME = "football-apps-v2.3.4";
const urlsToCache = [
    "/",
    "/index.html",
    "/detail.html",
    "/nav.html",
    "/css/materialize.min.css",
    "/js/api.js",
    "/js/materialize.min.js",
    "/js/nav.js",
    "/js/db.js",
    "/js/idb.js",
    "/pages/standing.html",
    "/pages/team.html",
    "/pages/favorit.html",
    "/icon/icon-48.png",
    "/icon/icon-96.png",
    "/icon/icon-192.png",
    "/favicomatic/apple-touch-icon-57x57.png",
    "/favicomatic/apple-touch-icon-60x60.png",
    "/favicomatic/apple-touch-icon-72x72.png",
    "/favicomatic/apple-touch-icon-76x76.png",
    "/favicomatic/apple-touch-icon-120x120.png",
    "/favicomatic/apple-touch-icon-114x114.png",
    "/favicomatic/apple-touch-icon-144x144.png",
    "/favicomatic/apple-touch-icon-152x152.png",
    "/favicomatic/favicon-16x16.png",
    "/favicomatic/favicon-32x32.png",
    "/favicomatic/favicon-96x96.png",
    "/favicomatic/favicon-128.png",
    "/favicomatic/favicon-196x196.png",
    "/favicomatic/favicon.ico",
    "/favicomatic/mstile-70x70.png",
    "/favicomatic/mstile-144x144.png",
    "/favicomatic/mstile-150x150.png",
    "/favicomatic/mstile-310x150.png",
    "/favicomatic/mstile-310x310.png",
];

self.addEventListener("install", function (event) {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log("ServiceWorker: cache " + cacheName + " dihapus");
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", function (event) {
    const base_url = "https://api.football-data.org/v2/";
    if (event.request.url.indexOf(base_url) > -1) {
        event.respondWith(
            caches.open(CACHE_NAME).then(function (cache) {
                return fetch(event.request).then(function (response) {
                    cache.put(event.request.url, response.clone());
                    return response;
                })
            })
        );
    } else {
        event.respondWith(
            caches.match(event.request, {
                'ignoreSearch': true
            }).then(function (response) {
                return response || fetch(event.request);
            })
        )
    }
});