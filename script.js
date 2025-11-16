import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔥 Your Firebase Config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Init Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM elements
const chatBox = document.getElementById("chat-box");
const nameInput = document.getElementById("name-input");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

// Send message
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

// Realtime listener
const q = query(collection(db, "messages"), orderBy("time"));

onSnapshot(q, (snapshot) => {
    chatBox.innerHTML = "";

    snapshot.forEach((doc) => {
        const msg = doc.data();

        const div = document.createElement("div");
        div.className = "msg";
        div.textContent = `${msg.name}: ${msg.text}`;

        chatBox.appendChild(div);
    });

    chatBox.scrollTop = chatBox.scrollHeight;
});
