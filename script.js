const sounds = [
    "sounds/tiki-tiki-boosted.mp3",
    "sounds/hub-intro-sound.mp3",
];

let played = false;

function playRandomSound() {
    if (played) return;
    played = true;

    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(randomSound);

    audio.play();
}

document.addEventListener("click", playRandomSound, { once: true });
document.addEventListener("keydown", playRandomSound, { once: true });
