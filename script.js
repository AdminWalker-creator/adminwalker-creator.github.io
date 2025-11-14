// JOIN NOW BUTTON
function openLinks() {
    window.open("https://discord.gg/fWKBXeT6P", "_blank");
    window.open("https://chat.whatsapp.com/JE0Wdo8p7SqDEnTaGpydvw?mode=hqrt2", "_blank");
    window.open("https://www.youtube.com/@Admin_Walker", "_blank");
}

// CHATBOX (local demo)
function sendMessage() {
    let box = document.getElementById("chatbox");
    let input = document.getElementById("chatInput");

    if (input.value.trim() === "") return;

    let user = localStorage.getItem("username") || "Guest";

    box.innerHTML += `<p><strong>${user}:</strong> ${input.value}</p>`;
    input.value = "";
    box.scrollTop = box.scrollHeight;
}

// PROFILE SYSTEM
function saveUsername() {
    let name = document.getElementById("usernameInput").value;
    if (name.trim() === "") return;

    localStorage.setItem("username", name);
    document.getElementById("savedUser").innerText = "Saved Username: " + name;
}

// Load username when page opens
window.onload = function () {
    let saved = localStorage.getItem("username");
    if (saved) {
        document.getElementById("savedUser").innerText = "Saved Username: " + saved;
    }
};
