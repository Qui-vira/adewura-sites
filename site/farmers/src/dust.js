// Soil dust on a 2D canvas. Drifts across the opening sentence, blows harder as the visitor
// starts to scroll, then settles into the field just before the cob rises.
const COLORS = ['122,90,54', '107,79,44', '176,138,85', '143,108,64', '64,63,43'];

export function createDust(canvas, { count = 220, reduced = false } = {}) {
  const ctx = canvas.getContext('2d');
  let w = 0;
  let h = 0;
  let dpr = 1;
  let p = 0;
  let running = false;
  let raf = 0;
  let last = 0;
  const parts = [];

  function seed(prt, anywhere) {
    prt.x = anywhere ? Math.random() * w : -20 - Math.random() * w * 0.3;
    prt.y = h * (0.25 + Math.random() * 0.7);
    prt.vx = 20 + Math.random() * 40;
    prt.vy = (Math.random() - 0.5) * 10;
    prt.r = Math.random() < 0.08 ? 2.2 + Math.random() * 2 : 0.6 + Math.random() * 1.4;
    prt.c = COLORS[Math.floor(Math.random() * COLORS.length)];
    prt.a = 0.25 + Math.random() * 0.5;
    prt.ph = Math.random() * Math.PI * 2;
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!parts.length) for (let i = 0; i < count; i++) { const o = {}; seed(o, true); parts.push(o); }
  }

  function draw(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    // 0..0.12: wind builds as the sentence blows away. 0.1..0.2: the dust settles.
    const gust = Math.min(1, p / 0.11);
    const settle = Math.min(1, Math.max(0, (p - 0.1) / 0.09));
    const fade = 1 - settle;
    ctx.clearRect(0, 0, w, h);
    if (fade <= 0.001) return;
    for (const d of parts) {
      d.ph += dt * 1.3;
      const wind = d.vx * (1 + gust * 9) * (1 - settle * 0.85);
      d.x += wind * dt;
      d.y += (d.vy + Math.sin(d.ph) * 14 - gust * 30 * (1 - settle) + settle * 260) * dt;
      if (d.y > h * 0.97) d.y = h * 0.97;
      if (d.x > w + 20) seed(d, false);
      ctx.fillStyle = `rgba(${d.c},${(d.a * fade).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r * (1 + gust * 0.4), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop(now) {
    draw(now);
    raf = running ? requestAnimationFrame(loop) : 0;
  }

  resize();
  return {
    resize,
    setProgress(v) { p = v; },
    start() {
      if (running || reduced) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    },
    stop() {
      running = false;
      cancelAnimationFrame(raf);
    },
  };
}
