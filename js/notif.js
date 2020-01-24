 // Periksa fitur Notification API
 if ("Notification" in window) {
   requestPermission();
 } else {
   console.error("Browser tidak mendukung notifikasi.");
 }

 // Meminta ijin menggunakan Notification API
 function requestPermission() {
   Notification.requestPermission().then(function (result) {
     if (result === "denied") {
       console.log("Fitur notifikasi tidak diijinkan.");
       return;
     } else if (result === "default") {
       console.error("Pengguna menutup kotak dialog permintaan ijin.");
       return;
     }

     console.log("Fitur notifikasi diijinkan.");
   });
 }

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