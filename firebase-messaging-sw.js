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
