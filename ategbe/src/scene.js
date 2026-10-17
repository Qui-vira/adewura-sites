// The beaded Àtègbè crown, built in code from the house's photos: a domed body of amber beads
// with the indigo stars, lettering and rim band (painted bead by bead into a texture), an indigo
// finial, and the bead fringe. The fringe hangs in world space and sways on a damped spring
// driven by the crown's own motion, then settles when scrolling stops.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, InstancedMesh, Object3D, Vector3, Vector2, Color,
  LatheGeometry, SphereGeometry, CylinderGeometry, TorusGeometry, MeshPhysicalMaterial, MeshStandardMaterial,
  DirectionalLight, HemisphereLight, PMREMGenerator, CanvasTexture, DoubleSide, SRGBColorSpace,
  NeutralToneMapping, MathUtils, RepeatWrapping,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// Crown body profile (radius, height), rim at y = 0, crown of the dome at 1.42
const PROFILE = [
  [1.0, 0], [1.05, 0.04], [1.06, 0.12], [1.03, 0.2], [0.99, 0.28], [1.0, 0.45], [1.01, 0.62],
  [0.98, 0.8], [0.92, 0.97], [0.8, 1.12], [0.62, 1.26], [0.4, 1.36], [0.18, 1.41], [0.0, 1.42],
];
const TOP = 1.42;

// Pose keyframes over stage progress: slow turns, one tilt to show the top, then the crown rises away
const KEYS = [
  [0.0, { y: -6.2, rx: 0.1, ry: -0.5 }],
  [0.05, { y: -6.2, rx: 0.1, ry: -0.5 }],
  [0.19, { y: 0.15, rx: 0.12, ry: 0.15 }],
  [0.32, { y: 0.15, rx: 0.1, ry: 0.85 }],
  [0.46, { y: -0.05, rx: 0.58, ry: 1.45 }],
  [0.58, { y: -0.05, rx: 0.52, ry: 2.15 }],
  [0.72, { y: 0.1, rx: 0.14, ry: 2.85 }],
  [0.86, { y: 0.2, rx: 0.1, ry: 3.45 }],
  [1.0, { y: 6.8, rx: 0.05, ry: 4.1 }],
];
const smooth = (x) => x * x * (3 - 2 * x);

function poseAt(p) {
  for (let i = 1; i < KEYS.length; i++) {
    const [p1, b] = KEYS[i];
    const [p0, a] = KEYS[i - 1];
    if (p <= p1) {
      const t = smooth(MathUtils.clamp((p - p0) / (p1 - p0 || 1), 0, 1));
      const out = {};
      for (const k in a) out[k] = a[k] + (b[k] - a[k]) * t;
      return out;
    }
  }
  return { ...KEYS[KEYS.length - 1][1] };
}

function seeded(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

// ---------- The beadwork texture ----------
function profileLength() {
  let len = 0;
  for (let i = 1; i < PROFILE.length; i++) {
    len += Math.hypot(PROFILE[i][0] - PROFILE[i - 1][0], PROFILE[i][1] - PROFILE[i - 1][1]);
  }
  return len;
}

function beadSprite(size, color, rand) {
  const c = document.createElement('canvas');
  c.width = size.x;
  c.height = size.y;
  const g = c.getContext('2d');
  const rx = size.x / 2;
  const ry = size.y / 2;
  const grad = g.createRadialGradient(rx * 0.7, ry * 0.6, 0, rx, ry, Math.max(rx, ry));
  const base = new Color(color);
  const hi = base.clone().lerp(new Color(0xffffff), 0.45);
  const lo = base.clone().multiplyScalar(0.62);
  grad.addColorStop(0, `#${hi.getHexString()}`);
  grad.addColorStop(0.45, `#${base.getHexString()}`);
  grad.addColorStop(1, `#${lo.getHexString()}`);
  g.fillStyle = grad;
  g.beginPath();
  g.ellipse(rx, ry, rx * 0.92, ry * 0.92, 0, 0, Math.PI * 2);
  g.fill();
  return c;
}

function buildBeadwork(lowPower) {
  const W = lowPower ? 1024 : 2048;
  const H = W / 2;
  // world size of one canvas pixel, horizontally (around the band) and vertically (up the profile)
  const stretch = ((2 * Math.PI * 1.0) / W) / (profileLength() / H);
  const pitchY = lowPower ? 7 : 9;
  const pitchX = pitchY / stretch;
  const rand = seeded(11);

  // 1. Paint the pattern as flat colors into a mask
  const mask = document.createElement('canvas');
  mask.width = W;
  mask.height = H;
  const m = mask.getContext('2d');
  m.fillStyle = '#f00'; // amber body
  m.fillRect(0, 0, W, H);
  const vy = (v) => (1 - v) * H; // texture v (0 rim, 1 top) to canvas y
  m.fillStyle = '#00f'; // indigo
  m.fillRect(0, vy(0.13), W, vy(0) - vy(0.13)); // rim band
  m.fillRect(0, vy(0.6), W, H * 0.012); // thin rule above the lettering
  m.fillRect(0, vy(0.24), W, H * 0.012); // thin rule below

  // lettering and six-pointed stars, as on the house's crown, drawn with the stretch undone
  const drawStretched = (fn) => {
    m.save();
    m.scale(1 / stretch, 1);
    fn(W * stretch);
    m.restore();
  };
  drawStretched((w) => {
    m.fillStyle = '#00f';
    m.textAlign = 'center';
    m.textBaseline = 'middle';
    m.font = `700 ${Math.round(H * 0.2)}px 'Source Serif 4', Georgia, serif`;
    for (const u of [0.25, 0.75]) m.fillText('ÀTÈGBÈ', u * w, vy(0.42));
    const star = (cx, cy, r) => {
      m.lineWidth = r * 0.16;
      m.strokeStyle = '#00f';
      for (const rot of [0, Math.PI]) {
        m.beginPath();
        for (let k = 0; k < 3; k++) {
          const a = rot - Math.PI / 2 + (k * 2 * Math.PI) / 3;
          const x = cx + Math.cos(a) * r;
          const y = cy + Math.sin(a) * r;
          k ? m.lineTo(x, y) : m.moveTo(x, y);
        }
        m.closePath();
        m.stroke();
      }
    };
    for (const u of [0, 0.5, 1]) star(u * w, vy(0.42), H * 0.13);
    // small indigo diamonds scattered on the dome
    for (let i = 0; i < 10; i++) {
      const cx = ((i + 0.5) / 10) * w;
      const cy = vy(0.78 + (i % 2) * 0.06);
      m.fillStyle = '#00f';
      m.beginPath();
      m.moveTo(cx, cy - H * 0.035);
      m.lineTo(cx + H * 0.025, cy);
      m.lineTo(cx, cy + H * 0.035);
      m.lineTo(cx - H * 0.025, cy);
      m.closePath();
      m.fill();
    }
  });
  const maskData = m.getImageData(0, 0, W, H).data;

  // 2. Lay beads row by row, colored by the mask, onto a thread-colored ground
  const color = document.createElement('canvas');
  color.width = W;
  color.height = H;
  const c = color.getContext('2d');
  c.fillStyle = '#6a3a12';
  c.fillRect(0, 0, W, H);
  const bump = document.createElement('canvas');
  bump.width = W;
  bump.height = H;
  const b = bump.getContext('2d');
  b.fillStyle = '#000';
  b.fillRect(0, 0, W, H);

  const size = { x: Math.ceil(pitchX), y: Math.ceil(pitchY) };
  const amber = [0xf2a33a, 0xee9a2c, 0xf5ae48, 0xe8912a, 0xf7b85a, 0xea9634].map((h) => beadSprite(size, h));
  const indigo = [0x2c1d8f, 0x34249c, 0x261883, 0x3b2ba6].map((h) => beadSprite(size, h));
  const bumpSprite = beadSprite(size, 0xffffff);

  for (let row = 0, y = 0; y < H; row++, y += pitchY) {
    const offset = row % 2 ? pitchX / 2 : 0;
    for (let x = -offset; x < W; x += pitchX) {
      const sx = Math.min(W - 1, Math.max(0, Math.round(x + pitchX / 2)));
      const sy = Math.min(H - 1, Math.round(y + pitchY / 2));
      const isIndigo = maskData[(sy * W + sx) * 4 + 2] > 128;
      const set = isIndigo ? indigo : amber;
      c.drawImage(set[Math.floor(rand() * set.length)], x, y);
      b.drawImage(bumpSprite, x, y);
    }
  }

  const map = new CanvasTexture(color);
  map.colorSpace = SRGBColorSpace;
  map.wrapS = RepeatWrapping;
  map.anisotropy = 4;
  const bumpMap = new CanvasTexture(bump);
  bumpMap.wrapS = RepeatWrapping;
  return { map, bumpMap };
}

// ---------- The scene ----------
export function createScene(canvas, { lowPower = false, reduced = false } = {}) {
  const renderer = new WebGLRenderer({ canvas, antialias: !lowPower, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPower ? 1.25 : 1.75));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.5;

  const camera = new PerspectiveCamera(28, 1, 0.1, 100);
  camera.position.set(0, 0.6, 10);
  camera.lookAt(0, 0.1, 0);

  const key = new DirectionalLight(0xfff1d6, 2.2);
  key.position.set(-3.5, 5, 5);
  const rim = new DirectionalLight(0xffe7b8, 1.4);
  rim.position.set(4, 3, -4);
  scene.add(key, rim, new HemisphereLight(0xffe2a0, 0x5a2a0e, 0.55));

  const rig = new Group();
  const crown = new Group();
  rig.add(crown);
  scene.add(rig);
  const rand = seeded(5);

  // Body
  const { map, bumpMap } = buildBeadwork(lowPower);
  const body = new Mesh(
    new LatheGeometry(PROFILE.map(([r, y]) => new Vector2(r, y)), lowPower ? 64 : 96),
    new MeshPhysicalMaterial({
      map, bumpMap, bumpScale: 3, roughness: 0.4, clearcoat: 0.45, clearcoatRoughness: 0.35, side: DoubleSide,
    }),
  );
  crown.add(body);

  // Finial: an indigo bead on a short stem, ringed with small beads
  const indigoMat = new MeshPhysicalMaterial({ color: 0x2f2196, roughness: 0.3, clearcoat: 0.6 });
  const stem = new Mesh(new CylinderGeometry(0.04, 0.05, 0.14, 12), indigoMat);
  stem.position.y = TOP + 0.05;
  const knob = new Mesh(new SphereGeometry(0.12, 24, 16), indigoMat);
  knob.position.y = TOP + 0.2;
  const ring = new Mesh(new TorusGeometry(0.07, 0.022, 8, 24), new MeshPhysicalMaterial({ color: 0xf2b347, roughness: 0.35 }));
  ring.rotation.x = Math.PI / 2;
  ring.position.y = TOP + 0.08;
  crown.add(stem, knob, ring);

  // Fringe: strands of small beads all round the rim, plus two long amber tassels at the sides
  const STRANDS = lowPower ? 64 : 112;
  const PER = lowPower ? 30 : 42;
  const SPACING = 0.044;
  const TASSEL = lowPower ? 44 : 62;
  const total = STRANDS * PER + 2 * TASSEL;
  const beadGeo = new SphereGeometry(1, 8, 6);
  const beadMat = new MeshPhysicalMaterial({ roughness: 0.3, clearcoat: 0.5, clearcoatRoughness: 0.3 });
  const beads = new InstancedMesh(beadGeo, beadMat, total);
  beads.frustumCulled = false;
  const palette = [0xc8202a, 0xf3c13a, 0x2b3bae, 0xf6f0e2, 0x2e8b57, 0xe87b1e, 0x6b2a86, 0xf2a33a].map((h) => new Color(h));
  const strands = [];
  let n = 0;
  for (let j = 0; j < STRANDS; j++) {
    const a = (j / STRANDS) * Math.PI * 2 + rand() * 0.02;
    const bias = [0, 1, 2].map(() => palette[Math.floor(rand() * palette.length)]);
    strands.push({ a, r: 0.99, count: PER, start: n, size: 0.019, len: 1, phase: rand() * 6.28 });
    for (let k = 0; k < PER; k++) {
      const col = rand() < 0.7 ? bias[Math.floor(rand() * 3)] : palette[Math.floor(rand() * palette.length)];
      beads.setColorAt(n++, col);
    }
  }
  for (const a of [0, Math.PI]) {
    strands.push({ a: a + 0.5 * Math.PI, r: 1.02, count: TASSEL, start: n, size: 0.027, len: 1, phase: rand() * 6.28 });
    for (let k = 0; k < TASSEL; k++) beads.setColorAt(n++, new Color(k % 7 === 6 ? 0xc8202a : k % 2 ? 0xe9a93a : 0xc9862a));
  }
  scene.add(beads);

  // ---------- Pose, sway and render ----------
  let target = poseAt(0);
  const cur = { ...target };
  const prev = { ...target };
  const spring = { w: 0, wv: 0, f: 0, fv: 0 };
  const motion = { speed: 0 };
  const dummy = new Object3D();
  const A = new Vector3();
  const T = new Vector3();
  const Rd = new Vector3();
  const local = new Vector3();
  let mobile = false;

  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    mobile = camera.aspect < 0.8;
    rig.scale.setScalar(mobile ? Math.max(0.6, camera.aspect * 1.3) : 0.95);
    rig.position.y = mobile ? -0.15 : -0.42;
  }

  function step(dt, time) {
    const k = reduced ? 1 : 1 - Math.exp(-dt * 4); // ceremonial: slower easing than a product turn
    for (const key in target) cur[key] += (target[key] - cur[key]) * k;
    const breathe = reduced ? 0 : Math.sin(time * 0.5) * 0.02;
    crown.position.y = cur.y;
    crown.rotation.set(cur.rx + breathe, cur.ry, 0);
    crown.updateMatrixWorld(true);

    // the fringe lags behind the crown's turn and flares when it rises
    const omega = dt > 0 ? (cur.ry - prev.ry) / dt : 0;
    const vy = dt > 0 ? (cur.y - prev.y) / dt : 0;
    prev.ry = cur.ry;
    prev.y = cur.y;
    if (!reduced) {
      const tw = MathUtils.clamp(-omega * 0.6, -1.2, 1.2);
      spring.wv += (14 * (tw - spring.w) - 2.4 * spring.wv) * dt;
      spring.w += spring.wv * dt;
      const tf = MathUtils.clamp(Math.abs(vy) * 0.08, 0, 1);
      spring.fv += (10 * (tf - spring.f) - 2 * spring.fv) * dt;
      spring.f += spring.fv * dt;
    }
    motion.speed = Math.min(1, Math.abs(spring.wv) * 0.4 + Math.abs(spring.fv) * 0.6);

    const scale = rig.scale.x;
    for (const s of strands) {
      local.set(Math.cos(s.a) * s.r, 0.02, Math.sin(s.a) * s.r);
      A.copy(local).applyMatrix4(crown.matrixWorld);
      T.set(-Math.sin(s.a), 0, Math.cos(s.a)).transformDirection(crown.matrixWorld);
      T.y = 0;
      T.normalize();
      Rd.set(Math.cos(s.a), 0, Math.sin(s.a)).transformDirection(crown.matrixWorld);
      Rd.y = 0;
      Rd.normalize();
      const idle = reduced ? 0 : Math.sin(time * 0.7 + s.phase) * 0.015;
      for (let i = 0; i < s.count; i++) {
        const d = i * SPACING * scale;
        const swirl = (spring.w + idle) * Math.pow(d, 1.4) * 0.55;
        const flare = 0.035 * d + spring.f * Math.pow(d, 1.2) * 0.35 * (0.6 + 0.4 * Math.sin(s.phase));
        dummy.position.set(A.x + T.x * swirl + Rd.x * flare, A.y - d, A.z + T.z * swirl + Rd.z * flare);
        dummy.scale.setScalar(s.size * scale);
        dummy.updateMatrix();
        beads.setMatrixAt(s.start + i, dummy.matrix);
      }
    }
    beads.instanceMatrix.needsUpdate = true;
  }

  let last = performance.now();
  let running = false;
  let raf = 0;
  const listeners = new Set();
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    step(dt, now / 1000);
    renderer.render(scene, camera);
    listeners.forEach((fn) => fn(cur, motion));
    raf = running ? requestAnimationFrame(frame) : 0;
  }

  resize();
  step(0, 0);
  renderer.compile(scene, camera);
  renderer.render(scene, camera);

  return {
    setProgress(p) { target = poseAt(MathUtils.clamp(p, 0, 1)); },
    onFrame(fn) { listeners.add(fn); },
    resize,
    start() {
      if (running) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    },
    stop() {
      running = false;
      cancelAnimationFrame(raf);
    },
  };
}
