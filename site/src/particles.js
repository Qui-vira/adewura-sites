// Particles from all three houses drifting across the opening sentence together: soil dust
// (Trust Fund), hibiscus petals (Natural) and fine divination powder (Àtègbè). They blow away
// as the visitor starts to scroll and clear before the first house slides in.
const KINDS = [
  { share: 0.45, colors: ['122,90,54', '143,108,64', '176,138,85'], size: [0.6, 1.8], petal: false },
  { share: 0.2, colors: ['180,38,46', '206,62,70', '226,110,104'], size: [3, 5.5], petal: true },
  { share: 0.35, colors: ['214,190,140', '190,160,104', '228,208,168'], size: [0.5, 1.3], petal: false },
];

export function createParticles(canvas, { count = 200, reduced = false } = {}) {
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, p = 0, running = false, raf = 0, last = 0;
  const parts = [];

  function seed(d, anywhere) {
    const r = Math.random();
    const kind = r < KINDS[0].share ? KINDS[0] : r < KINDS[0].share + KINDS[1].share ? KINDS[1] : KINDS[2];
    d.kind = kind;
    d.x = anywhere ? Math.random() * w : -20 - Math.random() * w * 0.25;
    d.y = h * (0.2 + Math.random() * 0.7);
    d.vx = 16 + Math.random() * 34;
    d.vy = (Math.random() - 0.5) * 8;
    d.r = kind.size[0] + Math.random() * (kind.size[1] - kind.size[0]);
    d.c = kind.colors[Math.floor(Math.random() * kind.colors.length)];
    d.a = 0.3 + Math.random() * 0.5;
    d.ph = Math.random() * Math.PI * 2;
    d.rot = Math.random() * Math.PI;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!parts.length) for (let i = 0; i < count; i++) { const d = {}; seed(d, true); parts.push(d); }
  }

  function draw(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    const gust = Math.min(1, p / 0.08);
    const fade = 1 - Math.min(1, Math.max(0, (p - 0.06) / 0.06));
    ctx.clearRect(0, 0, w, h);
    if (fade <= 0.001) return;
    for (const d of parts) {
      d.ph += dt * 1.2;
      d.x += d.vx * (1 + gust * 8) * dt;
      d.y += (d.vy + Math.sin(d.ph) * 12 - gust * 26) * dt;
      d.rot += dt * (d.kind.petal ? 1.4 : 0);
      if (d.x > w + 30) seed(d, false);
      ctx.fillStyle = `rgba(${d.c},${(d.a * fade).toFixed(3)})`;
      ctx.beginPath();
      if (d.kind.petal) ctx.ellipse(d.x, d.y, d.r, d.r * 0.55, d.rot, 0, Math.PI * 2);
      else ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  const loop = (now) => { draw(now); raf = running ? requestAnimationFrame(loop) : 0; };

  resize();
  return {
    resize,
    setProgress(v) { p = v; },
    start() { if (running || reduced) return; running = true; last = performance.now(); raf = requestAnimationFrame(loop); },
    stop() { running = false; cancelAnimationFrame(raf); },
  };
}
