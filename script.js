// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCUw599ZSYdjmv5uJFgsxyRW16Fs9ef4Qg",
  authDomain: "aw-community-chat.firebaseapp.com",
  projectId: "aw-community-chat",
  storageBucket: "aw-community-chat.firebasestorage.app",
  messagingSenderId: "753015399762",
  appId: "1:753015399762:web:50e8094b2d0cf4a344c68b"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Init Firestore
const db = getFirestore(app);

// Export db so other scripts can use it
export { db, collection, addDoc, onSnapshot, serverTimestamp };
