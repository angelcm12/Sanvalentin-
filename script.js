document.getElementById("yes-btn").addEventListener("click", function () {
    alert("Sabía que dirías que sí, my love. 사랑해");
});

const noBtn = document.getElementById("no-btn");

noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Animación de corazones flotando
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.getElementById("hearts-container").appendChild(heart);

    const size = Math.random() * 20 + 10; // Tamaño aleatorio
    const x = Math.random() * window.innerWidth; // Posición aleatoria en el eje X
    const y = Math.random() * window.innerHeight; // Posición aleatoria en el eje Y

    heart.style.fontSize = `${size}px`;
    heart.style.position = "absolute"; // Necesario para posicionar los corazones en la pantalla
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    setTimeout(() => {
        heart.remove(); // Elimina el corazón después de 4 segundos
    }, 4000);
}
}

setInterval(createHeart, 300);
