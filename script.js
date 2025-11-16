import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔥 Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCUw599ZSYdjmv5uJFgsxyRW16Fs9ef4Qg",
  authDomain: "aw-community-chat.firebaseapp.com",
  projectId: "aw-community-chat",
  storageBucket: "aw-community-chat.firebasestorage.app",
  messagingSenderId: "753015399762",
  appId: "1:753015399762:web:50e8094b2d0cf4a344c68b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM elements
const chatBox = document.getElementById("chat-box");
const nameInput = document.getElementById("name-input");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

// Send Message
sendBtn.onclick = async () => {
    const name = nameInput.value.trim();
    const text = messageInput.value.trim();

    if (!name || !text) return;

    await addDoc(collection(db, "messages"), {
        name,
        text,
        time: serverTimestamp()
    });

    messageInput.value = "";
};

// Real-time updates
const q = query(collection(db, "messages"), orderBy("time"));
onSnapshot(q, snapshot => {
    chatBox.innerHTML = "";
    snapshot.forEach(doc => {
        const msg = doc.data();

        const div = document.createElement("div");
        div.className = "msg";
        div.textContent = `${msg.name}: ${msg.text}`;

        chatBox.appendChild(div);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
});
