// Divination powder (ìyẹ̀rọ̀sùn) on a 2D canvas. It hangs and turns slowly in the air around the
// opening sentence, thickens as the visitor begins to scroll, then sinks and settles before the
// crown rises. Calm by design: no gusts.
const COLORS = ['255,248,232', '247,226,180', '233,201,138', '255,236,200'];

export function createPowder(canvas, { count = 320, reduced = false } = {}) {
  const ctx = canvas.getContext('2d');
  let w = 0;
  let h = 0;
  let p = 0;
  let running = false;
  let raf = 0;
  let last = 0;
  const parts = [];

  function seed(d) {
    d.x = Math.random() * w;
    d.y = h * (0.15 + Math.random() * 0.75);
    d.r = Math.random() < 0.08 ? 1.6 + Math.random() * 1.4 : 0.6 + Math.random() * 1.1;
    d.c = COLORS[Math.floor(Math.random() * COLORS.length)];
    d.a = 0.55 + Math.random() * 0.45;
    d.ph = Math.random() * Math.PI * 2;
    d.sp = 0.2 + Math.random() * 0.5;
    d.orb = 6 + Math.random() * 22;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!parts.length) for (let i = 0; i < count; i++) { const d = {}; seed(d); parts.push(d); }
  }

  function draw(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    // 0..0.11: the powder thickens as the sentence dissolves. 0.1..0.19: it sinks and settles.
    const lift = Math.min(1, p / 0.11);
    const settle = Math.min(1, Math.max(0, (p - 0.1) / 0.09));
    const fade = 1 - settle;
    ctx.clearRect(0, 0, w, h);
    if (fade <= 0.001) return;
    for (const d of parts) {
      d.ph += dt * d.sp * (1 + lift * 0.8);
      d.x += Math.cos(d.ph) * d.orb * dt * (1 + lift);
      d.y += (Math.sin(d.ph * 0.8) * d.orb * 0.6 + 4 + settle * 220 * d.sp) * dt;
      if (d.y > h * 0.98) d.y = h * 0.98;
      if (d.x < -10) d.x = w + 10;
      if (d.x > w + 10) d.x = -10;
      if (d.y < 0 || (settle === 0 && d.y > h * 0.96)) seed(d);
      const a = d.a * fade * (0.6 + lift * 0.4);
      ctx.fillStyle = `rgba(${d.c},${a.toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
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
