importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
if (workbox)
  console.log(`Workbox berhasil dimuat`);
else
  console.log(`Workbox gagal dimuat`);

workbox.precaching.precacheAndRoute([{
    "url": "css/materialize.min.css",
    "revision": "ec1df3ba49973dcb9ff212f052d39483"
  },
  {
    "url": "css/style.css",
    "revision": "20df2784188faef74be6912d717d0786"
  },
  {
    "url": "detail.html",
    "revision": "1cabde9ef9fa4ec255ec5e43c7d4de01"
  },
  {
    "url": "favicomatic/apple-touch-icon-114x114.png",
    "revision": "6734c116cea3be440ac3c4d6ac792d54"
  },
  {
    "url": "favicomatic/apple-touch-icon-120x120.png",
    "revision": "0b71543a00c8f0ba2e576e3b050e9b0c"
  },
  {
    "url": "favicomatic/apple-touch-icon-144x144.png",
    "revision": "7501221beed9f567a98b676183354ec9"
  },
  {
    "url": "favicomatic/apple-touch-icon-152x152.png",
    "revision": "dd0199559a879c5ee65429a8136300d5"
  },
  {
    "url": "favicomatic/apple-touch-icon-57x57.png",
    "revision": "12ea66ba6f6ab926410443dcb71aa2c8"
  },
  {
    "url": "favicomatic/apple-touch-icon-60x60.png",
    "revision": "391c245dfa27c3be72ff163e95c2d892"
  },
  {
    "url": "favicomatic/apple-touch-icon-72x72.png",
    "revision": "8dfe7116dd1fd14b8f6641b3525e4665"
  },
  {
    "url": "favicomatic/apple-touch-icon-76x76.png",
    "revision": "e8864b40e2576b15e2f4042e16ceebad"
  },
  {
    "url": "favicomatic/code.txt",
    "revision": "3eefd6f286ef79e3471e70d6bd75469a"
  },
  {
    "url": "favicomatic/favicon-128.png",
    "revision": "e9dd44d5b0497095508cbf4bab8dff7f"
  },
  {
    "url": "favicomatic/favicon-16x16.png",
    "revision": "8dae11cfc685371887e05a1dc38f41f4"
  },
  {
    "url": "favicomatic/favicon-196x196.png",
    "revision": "d72ccfc8c74c8cd28ba0a9aab502dea8"
  },
  {
    "url": "favicomatic/favicon-32x32.png",
    "revision": "1ce1f743b89dec4b981a8e11152df2d5"
  },
  {
    "url": "favicomatic/favicon-96x96.png",
    "revision": "827628e94f284cc2aebcd4e1338786ee"
  },
  {
    "url": "favicomatic/favicon.ico",
    "revision": "c515285e68ff4105bdce2d123b0b65c5"
  },
  {
    "url": "favicomatic/mstile-144x144.png",
    "revision": "7501221beed9f567a98b676183354ec9"
  },
  {
    "url": "favicomatic/mstile-150x150.png",
    "revision": "6e6accfe0a072cea766915610eb8a17a"
  },
  {
    "url": "favicomatic/mstile-310x150.png",
    "revision": "7dee2f2e55422ae32c10b5faee0fa013"
  },
  {
    "url": "favicomatic/mstile-310x310.png",
    "revision": "50a5eba83821cdfbb2d0340bdf07d0bc"
  },
  {
    "url": "favicomatic/mstile-70x70.png",
    "revision": "e9dd44d5b0497095508cbf4bab8dff7f"
  },
  {
    "url": "icon/bg.png",
    "revision": "f7ffc0a8073502e6629c46a171f50c5f"
  },
  {
    "url": "icon/icon-192.png",
    "revision": "8c026f45557639888516998ea9232cd9"
  },
  {
    "url": "icon/icon-48.png",
    "revision": "3fc2549e49d8771b5b3a733bc07c287c"
  },
  {
    "url": "icon/icon-512.png",
    "revision": "a20a9d2d88583d415359d1fc208abc36"
  },
  {
    "url": "icon/icon-96.png",
    "revision": "ccb2ad1823129d4d1ff2ed42b6557336"
  },
  {
    "url": "index.html",
    "revision": "cabcf99a59327f310c3f7bbc6195dbdb"
  },
  {
    "url": "index1.html",
    "revision": "1e36fb871c65d68405c1c0fcb99a4602"
  },
  {
    "url": "js/api.js",
    "revision": "6903d9b80ea9cb739b5f0d7214d9d3f8"
  },
  {
    "url": "js/db.js",
    "revision": "59de06e46904fa3c337d52484f3d5d03"
  },
  {
    "url": "js/idb.js",
    "revision": "cd4cda4796cf6827935648bf94b7955f"
  },
  {
    "url": "js/materialize.min.js",
    "revision": "87d84bf8b4cc051c16092d27b1a7d9b3"
  },
  {
    "url": "js/nav.js",
    "revision": "7074a4aff142e13008cdae2dffbbed0c"
  },
  {
    "url": "js/notif.js",
    "revision": "134329e77def353db317847276f1a6b5"
  },
  {
    "url": "manifest.json",
    "revision": "75c472e99f61f851db97ca3cb51597f8"
  },
  {
    "url": "nav.html",
    "revision": "b7ff0f973b97fbf83fa8568c7bb79074"
  },
  {
    "url": "pages/favorit.html",
    "revision": "25310dbbdbe85c0bb1c01037965536c9"
  },
  {
    "url": "pages/standing.html",
    "revision": "fa863862ddb36e0a70fd2ae7dede7699"
  },
  {
    "url": "pages/team.html",
    "revision": "1f798503f7327eec8aa1a97409b8fec7"
  },
  {
    "url": "push.js",
    "revision": "4cb397269bace6632869983bcc70894c"
  },
  {
    "url": "service-worker.js",
    "revision": "20ea549b6710c6f1167b23037a9f9a30"
  }
], {
  ignoreUrlParametersMatching: [/.*/]
});


workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'api-data',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24,
        maxEntries: 30,
      }),

    ]
  })
)

//Cache Images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheOnly({
    cacheName: 'caches-images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 14 * 60 * 60,
      }),
    ],
  }),
);

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