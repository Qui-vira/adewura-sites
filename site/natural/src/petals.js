// Hibiscus petals on a 2D canvas. They drift slowly across the opening sentence, part to both
// sides as the visitor starts to scroll, and let the Restoria bottle rise through the gap.
const REDS = [['#8e1520', '#d8352f'], ['#a01d26', '#e2473a'], ['#7a0f1a', '#c92a2c'], ['#b4262e', '#ef6a55']];

export function createPetals(canvas, { count = 32, reduced = false } = {}) {
  const ctx = canvas.getContext('2d');
  let w = 0;
  let h = 0;
  let p = 0;
  let running = false;
  let raf = 0;
  let last = 0;
  const petals = [];

  function seed(o, anywhere) {
    o.x = anywhere ? Math.random() * w : -40 - Math.random() * 120;
    o.y = anywhere ? Math.random() * h : Math.random() * h * 0.7;
    o.size = 10 + Math.random() * 16;
    o.rot = Math.random() * Math.PI * 2;
    o.spin = (Math.random() - 0.5) * 0.8;
    o.flip = Math.random() * Math.PI * 2;
    o.vx = 10 + Math.random() * 16;
    o.vy = 6 + Math.random() * 10;
    o.c = REDS[Math.floor(Math.random() * REDS.length)];
    o.a = 0.75 + Math.random() * 0.25;
    o.px = 0; // sideways push while parting
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!petals.length) for (let i = 0; i < count; i++) { const o = {}; seed(o, true); petals.push(o); }
  }

  function drawPetal(o, alpha) {
    const s = o.size;
    ctx.save();
    ctx.translate(o.x + o.px, o.y);
    ctx.rotate(o.rot);
    ctx.scale(0.35 + 0.65 * Math.abs(Math.cos(o.flip)), 1); // turning over in the air
    const g = ctx.createLinearGradient(0, s * 0.6, 0, -s * 0.6);
    g.addColorStop(0, o.c[0]);
    g.addColorStop(1, o.c[1]);
    ctx.fillStyle = g;
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.moveTo(0, s * 0.6);
    ctx.bezierCurveTo(-s * 0.75, s * 0.1, -s * 0.55, -s * 0.7, 0, -s * 0.55);
    ctx.bezierCurveTo(s * 0.55, -s * 0.7, s * 0.75, s * 0.1, 0, s * 0.6);
    ctx.fill();
    ctx.restore();
  }

  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    const part = Math.min(1, Math.max(0, (p - 0.02) / 0.12)); // petals move aside
    const fade = 1 - Math.min(1, Math.max(0, (p - 0.12) / 0.08));
    ctx.clearRect(0, 0, w, h);
    if (fade <= 0.001) return;
    for (const o of petals) {
      o.flip += dt * 1.1;
      o.rot += o.spin * dt;
      o.x += o.vx * dt;
      o.y += (o.vy + Math.sin(o.flip) * 8) * dt;
      // parting: each petal is pushed away from the middle, harder the closer it sits to it
      const side = o.x < w / 2 ? -1 : 1;
      const near = 1 - Math.min(1, Math.abs(o.x - w / 2) / (w * 0.5));
      o.px += (side * part * (120 + near * w * 0.35) - o.px) * Math.min(1, dt * 3);
      if (o.y > h + 40 || o.x > w + 60) seed(o, false);
      drawPetal(o, o.a * fade);
    }
  }

  function loop(now) {
    frame(now);
    raf = running ? requestAnimationFrame(loop) : 0;
  }

  resize();
  return {
    resize,
    setProgress(v) {
      p = v;
      if (reduced) { last = performance.now(); frame(last); }
    },
    start() {
      if (running) return;
      if (reduced) { frame(performance.now()); return; }
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
