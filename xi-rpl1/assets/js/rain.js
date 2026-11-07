(function () {
  const canvas = document.getElementById("rainCanvas");
  const flash = document.getElementById("lightning");

  if (!canvas) {
    return;
  }

  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const colors = [
    "rgba(170, 200, 255, 0.55)",
    "rgba(170, 200, 255, 0.4)",
    "rgba(0, 240, 255, 0.55)",
    "rgba(255, 43, 214, 0.45)"
  ];

  let width = 0;
  let height = 0;
  let drops = [];
  let splashes = [];
  let wind = -1.2;
  let flashLevel = 0;

  function createDrop(randomY) {
    const depth = Math.random();
    return {
      x: Math.random() * (width + 200) - 100,
      y: randomY ? Math.random() * height : -20 - Math.random() * height * 0.3,
      length: 10 + depth * 22,
      speed: 9 + depth * 14,
      width: 0.6 + depth * 1.1,
      color: Math.random() < 0.12 ? colors[2 + Math.floor(Math.random() * 2)] : colors[Math.floor(Math.random() * 2)],
      depth: depth
    };
  }

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const total = Math.min(Math.floor((width * height) / 4200), 420);
    drops = [];
    for (let i = 0; i < total; i++) {
      drops.push(createDrop(true));
    }
  }

  function addSplash(x, y, color) {
    for (let i = 0; i < 3; i++) {
      splashes.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 3,
        vy: -Math.random() * 3 - 1,
        life: 1,
        color: color
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    if (flashLevel > 0) {
      ctx.fillStyle = "rgba(200, 190, 255, " + flashLevel * 0.12 + ")";
      ctx.fillRect(0, 0, width, height);
      flashLevel -= 0.04;
    }

    ctx.lineCap = "round";

    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      ctx.beginPath();
      ctx.strokeStyle = d.color;
      ctx.lineWidth = d.width;
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x + wind * (d.length / 10), d.y + d.length);
      ctx.stroke();

      d.x += wind * (d.speed / 10);
      d.y += d.speed;

      const floor = height - 20 - (1 - d.depth) * height * 0.25;

      if (d.y > floor) {
        if (d.depth > 0.55) {
          addSplash(d.x, floor, d.color);
        }
        drops[i] = createDrop(false);
      }
    }

    for (let i = splashes.length - 1; i >= 0; i--) {
      const s = splashes[i];
      ctx.fillStyle = s.color;
      ctx.globalAlpha = Math.max(s.life, 0);
      ctx.fillRect(s.x, s.y, 1.5, 1.5);
      ctx.globalAlpha = 1;
      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.25;
      s.life -= 0.05;
      if (s.life <= 0) {
        splashes.splice(i, 1);
      }
    }

    requestAnimationFrame(draw);
  }

  function strike() {
    if (flash) {
      flash.classList.remove("is-flash");
      void flash.offsetWidth;
      flash.classList.add("is-flash");
    }
    flashLevel = 1;
    window.setTimeout(strike, 9000 + Math.random() * 12000);
  }

  function gust() {
    wind = -0.6 - Math.random() * 2.2;
    window.setTimeout(gust, 4000 + Math.random() * 5000);
  }

  resize();
  window.addEventListener("resize", resize);

  if (reduce) {
    return;
  }

  requestAnimationFrame(draw);
  window.setTimeout(strike, 5000);
  gust();
})();
