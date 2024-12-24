// Hiệu ứng tuyết rơi
const canvas = document.getElementById('snowfall');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

class Snowflake {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 3 + 1;
    this.speedY = Math.random() * 1 + 0.5;
    this.speedX = Math.random() * 0.5 - 0.25;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;

    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
  }
}

function createSnowflakes() {
  for (let i = 0; i < 150; i++) {
    snowflakes.push(new Snowflake());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach((snowflake) => {
    snowflake.update();
    snowflake.draw();
  });

  requestAnimationFrame(animate);
}

createSnowflakes();
animate();

// Tắt/Bật nhạc nền
const bgMusic = document.getElementById('bg-music');
const toggleMusicBtn = document.getElementById('toggle-music');

toggleMusicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    toggleMusicBtn.textContent = 'Tắt Nhạc';
  } else {
    bgMusic.pause();
    toggleMusicBtn.textContent = 'Bật Nhạc';
  }
});
