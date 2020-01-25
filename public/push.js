webPush = require('web-push');

const vapidKeys = {
  "publicKey": "BDZffxEUiFn2YZIzmP48d1Q5w88GSZQcAD0jIhCbljWvrg1opQ56FiJCXanFT5gP_HSvpyfTP_8QkipQ3_pENsc",
  "privateKey": "QjKvagJ-lpwDKBp2X-nOqpKJhJ0qFH_iFvWb_RffwGA"
};


webPush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)
var pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/dAFHNV0dIZg:APA91bFbLuKl94PuVC1H-KbCZGHZUjGnyELD9A6ZflcpzdQ6lMS9qAaEAsRB9yVWmx91OY4YptkHXbOG7yZXw4LsXLVMY8Nb430u-zjDHrNvWWcMIjuw6qCYvZybhR9d3dxilRL3RE7G",
  "keys": {
    "p256dh": "BKnJD3JXza2ua6l9L6h9rA6Ncce1gfSYjkn1ujk3olrS2icxVW+jKSqhvg2Ap/WoGeEPtw/xSCnCzKigufmOzM8=",
    "auth": "kVtMqQjtyL2fXEmxnDaGQ=="
  }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
  gcmAPIKey: '326407799937',
  TTL: 60
};
webPush.sendNotification(
  pushSubscription,
  payload,
  options
);