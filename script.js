<style>
  body {
    position: relative;
    overflow: hidden;
  }

  .heart {
    position: absolute;
    color: pink;
    font-size: 20px;
    animation: float 5s linear infinite;
    user-select: none;
  }

  @keyframes float {
    0% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) scale(1.5);
      opacity: 0;
    }
  }

  #no-btn {
    position: absolute;
  }
</style>

<div id="hearts-container"></div>

<script>
  document.getElementById("yes-btn").addEventListener("click", function () {
    alert("Sabía que dirías que sí, my love. 사랑해");
  });

  const noBtn = document.getElementById("no-btn");

  noBtn.addEventListener("mouseover", function () {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });

  // Verificar si existe un contenedor de corazones, si no, crearlo
  let heartsContainer = document.getElementById("hearts-container");
  if (!heartsContainer) {
    heartsContainer = document.createElement("div");
    heartsContainer.id = "hearts-container";
    document.body.appendChild(heartsContainer);
  }

  // Animación de corazones flotando
  function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heartsContainer.appendChild(heart);

    const size = Math.random() * 20 + 10;
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${Math.random() * 100}%`;

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }

  setInterval(createHeart, 300);
</script>
