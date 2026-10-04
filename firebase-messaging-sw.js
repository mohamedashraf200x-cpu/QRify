importScripts(
  "https://www.gstatic.com/firebasejs/12.3.0/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/12.3.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyD0EFlJAk8pR8NaHDR3DpBActrr1obh_qY",
  authDomain: "qrify-d02da.firebaseapp.com",
  projectId: "qrify-d02da",
  storageBucket: "qrify-d02da.firebasestorage.app",
  messagingSenderId: "745508886217",
  appId: "1:745508886217:web:ec2e9d549260ad28e11f18"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

  console.log(
    "Background FCM message:",
    payload
  );

  const notification =
    payload.notification || {};

  const title =
    notification.title || "QRify";

  const body =
    notification.body ||
    "You received a new message.";

  /*
    firebase-messaging-sw.js is in:

    /QRify/firebase-messaging-sw.js

    FCM scope is:

    /QRify/firebase-messaging-scope/

    So ../logo.png points to:

    /QRify/logo.png
  */

  const iconUrl =
    new URL(
      "../logo.png",
      self.registration.scope
    ).href;

  self.registration.showNotification(
    title,
    {
      body: body,
      icon: iconUrl,
      badge: iconUrl
    }
  );

});
