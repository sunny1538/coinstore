importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDHY1pLnwGI-9L6ZBg5BW-QvVss9iyTgyQ",
  authDomain: "coinstore-4ac0b.firebaseapp.com",
  projectId: "coinstore-4ac0b",
  messagingSenderId: "260817591155",
  appId: "1:260817591155:web:3669abbaf72b1e3c3fc306"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body: body,
    icon: '/coinstore/icon.png',
    badge: '/coinstore/icon.png',
    requireInteraction: true,
    actions: [
      { action: 'accept', title: '✅ Accept' },
      { action: 'decline', title: '❌ Decline' }
    ]
  });
});