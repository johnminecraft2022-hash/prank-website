const sounds = [
    "sounds/tiki-tiki-boosted.mp3",
    "sounds/hub-intro-sound.mp3",
];

function playRandomSound() {
    const random = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(random);

    audio.play().catch(() => {
        console.log("Autoplay blocked until user interacts.");
    });
}

// Try immediately
window.addEventListener("load", playRandomSound);

// Fallback if browser blocks autoplay
document.body.addEventListener("click", playRandomSound, { once: true });

document.getElementById("playBtn").addEventListener("click", playRandomSound);
