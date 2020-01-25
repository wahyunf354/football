function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
// Periksa fitur Notification API
function requestPromission() {
  if ('Notification' in window) {
    Notification.requestPermission().then(function (result) {
      if (result == 'denied') {
        console.log('Fitur notifikasi tidak diijinkan');
        return;
      } else if (result == 'default') {
        console.log("pengguna Mennutup kotak dialog Permintaan ijin");
        return;
      }

    });
  };
}

// Berlangganan object pushmanager
if (('PushManager' in window)) {
  navigator.serviceWorker.getRegistration().then(function (registration) {
    registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array("BDZffxEUiFn2YZIzmP48d1Q5w88GSZQcAD0jIhCbljWvrg1opQ56FiJCXanFT5gP_HSvpyfTP_8QkipQ3_pENsc")
    }).then(function (subscribe) {
      console.log('Berhasil melakukan subscribe dengan endpoint: ', subscribe.endpoint);
      console.log('Berhasil melakukan subscribe dengan p256dh key: ', btoa(String.fromCharCode.apply(
        null, new Uint8Array(subscribe.getKey('p256dh')))));
      console.log('Berhasil melakukan subscribe dengan auth key: ', btoa(String.fromCharCode.apply(
        null, new Uint8Array(subscribe.getKey('auth')))));
    }).catch(function (e) {
      console.error('Tidak dapat melakukan subscribe ', e.message);
    });
  });
};


// Menampikan Notifikasi Sedarhana
function snowNotifikasiSederhana() {
  // notifikasi pertama
  const title = "Football WNF";
  const options = {
    'body': `Update Klasemen. \nLiga Campion`,
    'icon': '/icon/icon-96.png', //Menampilkan Logo pada Notifikasi
    'badge': '/icon/icon-48.png',
    'action': [{
        'action': 'yes-action',
        'title': 'Ya',
      },
      {
        'action': 'no-action',
        'title': 'Tidak',
      }
    ],
    requireInteraction: true,
    'tag': 'klasemen',
  }

  // notifikasi ke dua
  const title1 = "Football WNF";
  const options1 = {
    'body': "Upadate Aplikasi.\nFootball WNF",
    'icon': '/icon/icon-96.png', //Menampilkan Logo pada Notifikasi
    'badge': '/icon/icon-48.png',
    'action': [{
        'action': 'yes-action',
        'title': 'Ya',
      },
      {
        'action': 'no-action',
        'title': 'Tidak',
      }
    ],
    'requireInteraction': true,
    'tag': 'app',
    'renotify': true,
    'silent': true,
    'image': '/icon/bg.png'
  }
  if (Notification.permission === "granted") {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.showNotification(title, options);
      registration.showNotification(title1, options1);
    });
  } else {
    console.error("Fitur Tidak Diijinkan");
  }
}