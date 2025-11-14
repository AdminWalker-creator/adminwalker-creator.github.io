function openLink(url) {
    window.open(url, "_blank");
}

function sendMessage() {
    const chatInput = document.getElementById("chatInput");
    const chatbox = document.getElementById("chatbox");

    let text = chatInput.value.trim();
    if (text === "") return;

    let msg = document.createElement("div");
    msg.className = "chat-msg";
    msg.textContent = "You: " + text;

    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight;

    chatInput.value = "";
}
