importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
if (workbox)
    console.log(`Workbox berhasil dimuat`);
else
    console.log(`Workbox gagal dimuat`);

workbox.precaching.precacheAndRoute([{
        url: '/',
        revision: '1'
    },
    {
        url: "/index.html",
        revision: '3'
    },
    {
        url: '/detail.html',
        revision: '3'
    },
    {
        url: '/nav.html',
        revision: '1'
    },
    {
        url: '/css/materialize.min.css',
        revision: '2'
    },
    {
        url: '/js/materialize.min.js',
        revision: '1'
    },
    {
        url: '/js/nav.js',
        revision: '1'
    },
    {
        url: '/js/idb.js',
        revision: '1'
    },
    {
        url: '/js/db.js',
        revision: '1'
    },
    {
        url: '/js/notif.js',
        revision: '1'
    },
    {
        url: '/icon/icon-48.png',
        revision: '1'
    },
    {
        url: '/icon/icon-96.png',
        revision: '1'
    },
    {
        url: '/icon/icon-192.png',
        revision: '1'
    },
    {
        url: '/favicomatic/apple-touch-icon-57x57.png',
        revision: '1'
    },
    {
        url: '/favicomatic/apple-touch-icon-60x60.png',
        revision: '1'
    },
    {
        url: '/favicomatic/apple-tauch-icon-72x72.png',
        revision: '1'
    },
    {
        url: '/favicomatic/apple-touch-icon-76x76.png',
        revision: '1'
    },
    {
        url: '/favicomatic/apple-touch-icon-120x120.png',
        revision: '1'
    },
    {
        url: '/favicomatic/apple-touch-icon-114x114.png',
        revision: '1'
    },
    {
        url: '/favicomatic/apple-touch-icon-144x144.png',
        revision: '1'
    },
    {
        url: '/favicomatic/apple-touch-icon-152x152.png',
        revision: '1'
    },
    {
        url: '/favicomatic/favicon-16x16.png',
        revision: '1'
    },
    {
        url: '/favicomatic/favicon-32x32.png',
        revision: '1'
    },
    {
        url: '/favicomatic/favicon-96x96.png',
        revision: '1'
    },
    {
        url: '/favicomatic/favicon-128.png',
        revision: '1'
    },
    {
        url: '/favicomatic/favicon-196x196.png',
        revision: '1'
    },
    {
        url: '/favicomatic/favicon.ico',
        revision: '1'
    },
    {
        url: '/favicomatic/mstile-70x70.png',
        revision: '1'
    },
    {
        url: '/favicomatic/mstile-144x144.png',
        revision: '1'
    },
    {
        url: '/favicomatic/mstile-150x150.png',
        revision: '1'
    },
    {
        url: '/favicomatic/mstile-310x150.png',
        revision: '1'
    },
    {
        url: '/favicomatic/mstile-310x310.png',
        revision: '1'
    },
    {
        url: '/js/api.js',
        revision: '1'
    }

]);

workbox.routing.registerRoute(
    new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'pages'
    })
);

workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org'),
    new workbox.strategies.NetworkFirst({
        cacheName: 'api-data',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24,
                maxEntries: 30,
            }),
        ]
    })
)

self.addEventListener('notificationclick', (event) => {
    event.notification.close(); // agar ketika penguna menekan manakan notifikasi akan hilang
    if (!event.action) {
        // Penguna menyentuh area notifikasi diluar action
        console.log("Notifikasi Click");
        return;
    }

    switch (event.action) {
        case 'yes-action':
            console.log("Penguna mengeklik action yes");
            //buka tab baru
            clients.openWindow('https://google.com');
            break;
        case 'no.action':
            console.log('Penguna menekan action no');
            break;
        default:
            console.log(`Action yang ditekan tidak dikenali ${event.action}`);
            break;
    }
});


self.addEventListener('push', event => {
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    var options = {
        body: body,
        icon: 'icon/icon-96.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});