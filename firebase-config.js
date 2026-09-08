/* firebase-config.js — connexion Firebase uniquement */
const firebaseConfig = {
  apiKey: "AIzaSyDvnZZw8HW0LSuC2mlWecf6aVGiKzk6o6Y",
  authDomain: "note-journaliere.firebaseapp.com",
  projectId: "note-journaliere",
  storageBucket: "note-journaliere.firebasestorage.app",
  messagingSenderId: "412765917805",
  appId: "1:412765917805:web:8dc8ba387195ed05026564",
  measurementId: "G-QVPHXN13MS"
};

var auth = null;
var db = null;
var analytics = null;

try {
  if (typeof firebase !== "undefined") {
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
    try { analytics = firebase.analytics(); } catch (e) {}
  } else {
    console.warn("Firebase indisponible — mode local uniquement");
  }
} catch (e) {
  console.warn("Firebase init error", e);
}
