// ===== A_W Community JavaScript =====

// Button click animation
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.style.transform = "scale(0.95)";
            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 150);
        });
    });
});

// Smooth fade-in animation
window.onload = () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "1.2s";
        document.body.style.opacity = 1;
    }, 100);
};
