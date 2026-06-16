const CONFETTI_COLORS = ['#bd58f2', '#d48aff', '#ffffff', '#a347d9', '#3ba55d', '#f0f0f5'];

export function burstConfetti(originX, originY) {
  const canvas = document.createElement('canvas');
  canvas.className = 'confetti-canvas';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const particles = [];

  for (let i = 0; i < 140; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 3 + Math.random() * 10;
    particles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (4 + Math.random() * 4),
      w: 4 + Math.random() * 5,
      h: 5 + Math.random() * 7,
      rot: Math.random() * Math.PI * 2,
      rotV: (Math.random() - 0.5) * 0.35,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      life: 0.9 + Math.random() * 0.1,
    });
  }

  let frameId;

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22;
      p.vx *= 0.985;
      p.life -= 0.014;
      if (p.life <= 0) continue;

      alive = true;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      p.rot += p.rotV;
      ctx.globalAlpha = Math.min(1, p.life);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }

    if (alive) {
      frameId = requestAnimationFrame(tick);
    } else {
      canvas.remove();
    }
  }

  frameId = requestAnimationFrame(tick);

  setTimeout(() => {
    cancelAnimationFrame(frameId);
    canvas.remove();
  }, 4000);
}
