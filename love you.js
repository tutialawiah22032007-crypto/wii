const heart = document.getElementById("heart");

// Membuat tulisan mengikuti bentuk hati
for (let i = 0; i < 220; i++) {

    const t = (i / 220) * Math.PI * 2;

    const x = 16 * Math.pow(Math.sin(t), 3);

    const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

    const span = document.createElement("span");

    span.className = "word";
    span.innerHTML = "I Love You";

    span.style.left = (x * 16 + 250) + "px";
    span.style.top = (-y * 16 + 220) + "px";

    // Delay animasi agar bergerak bergantian
    span.style.animationDelay = (i * 0.03) + "s";

    heart.appendChild(span);
}

// Efek hati berdetak
let scale = 1;
let besar = true;

setInterval(() => {

    if (besar) {
        scale += 0.002;
        if (scale >= 1.08) besar = false;
    } else {
        scale -= 0.002;
        if (scale <= 1) besar = true;
    }

    heart.style.transform = `scale(${scale})`;

}, 16);