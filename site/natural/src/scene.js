// The Restoria bottle, built in code to match the real white bottle: lathe body, ribbed cap and a
// wrap-around label drawn from the text on the bottle. A hibiscus flower and peperomia leaves,
// also built in code, drift in on their beats. Scroll progress (0..1) drives one pose curve.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, InstancedMesh, Object3D, Vector3, Vector2, Color,
  LatheGeometry, CylinderGeometry, PlaneGeometry, SphereGeometry, CanvasTexture,
  MeshPhysicalMaterial, MeshStandardMaterial, DirectionalLight, HemisphereLight, PMREMGenerator,
  DoubleSide, SRGBColorSpace, NeutralToneMapping, Float32BufferAttribute, MathUtils,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// Pose keyframes over stage progress. x is scaled to 0 on narrow screens.
const KEYS = [
  [0.0, { y: -4.8, x: 0, rx: 0.25, ry: -0.6, rz: 0.1 }],
  [0.05, { y: -4.8, x: 0, rx: 0.25, ry: -0.6, rz: 0.1 }],
  [0.17, { y: 0, x: 0, rx: -0.15, ry: -0.35, rz: 0.04 }],
  [0.24, { y: 0.1, x: 0, rx: 3.0, ry: 0.2, rz: -0.05 }],
  [0.31, { y: -0.25, x: 0, rx: 6.23, ry: 0.02, rz: 0 }],
  [0.38, { y: -0.3, x: -2.1, rx: 6.3, ry: -0.25, rz: 0.03 }],
  [0.5, { y: -0.3, x: -2.1, rx: 6.3, ry: 0.35, rz: 0.02 }],
  [0.58, { y: -0.3, x: 0, rx: 6.73, ry: 0, rz: 0 }],
  [0.7, { y: -0.3, x: 0, rx: 6.48, ry: -0.4, rz: 0.02 }],
  [0.78, { y: -0.8, x: 0, rx: 6.58, ry: -0.2, rz: -1.57 }],
  [0.88, { y: -0.95, x: 0, rx: 6.6, ry: 0.15, rz: -1.62 }],
  [1.0, { y: -5.6, x: 0, rx: 6.7, ry: 0.4, rz: -1.8 }],
];
const smooth = (x) => x * x * (3 - 2 * x);
const range = (p, a, b) => MathUtils.clamp((p - a) / (b - a), 0, 1);

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

// ---------- The label, transcribed from the photo of the real bottle ----------
function labelTexture() {
  const W = 2560;
  const H = 1000;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#fbfbf8';
  g.fillRect(0, 0, W, H);
  const green = '#2c5a49';
  const ink = '#1d1f1c';
  const x = 840; // left edge of the front panel; the front of the bottle sits at W / 2
  const font = (weight, size) => `${weight} ${size}px Arial, Helvetica, "Liberation Sans", sans-serif`;
  const line = (text, y, weight, size, color = ink) => {
    g.font = font(weight, size);
    g.fillStyle = color;
    g.fillText(text, x, y);
  };
  line('RESTORIA', 190, 700, 150, green);
  g.font = font(700, 150);
  const rw = g.measureText('RESTORIA').width;
  g.font = font(700, 62);
  g.fillText('™', x + rw + 10, 120);
  line('Calm • Restore • Sleep', 292, 700, 66);
  g.font = font(700, 66);
  g.fillRect(x, 304, g.measureText('Calm • Restore • Sleep').width, 5); // underline, as on the label
  g.fillStyle = green;
  g.fillRect(x - 20, 324, W - x - 300, 7);
  line('Natural Stress, Anxiety & Night Support', 398, 700, 50);
  line('Hibiscus + Peperomia Pellucida', 462, 400, 50);
  line('Melatonin-Free', 526, 400, 50);
  line('NON-GMO | GLUTEN-FREE | SOY-FREE', 590, 400, 50);
  line('30 Capsules', 654, 400, 50);
  line('350 mg per capsule', 718, 400, 50);
  line('Dietary Supplement', 782, 400, 50);
  g.fillStyle = green;
  g.fillRect(x - 20, 808, W - x - 300, 5);
  line('Supplement Facts', 868, 700, 48);
  line('Serving Size: 1 Capsule', 922, 400, 38);
  line('Servings Per Container: 30', 964, 400, 38);
  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

// ---------- Hibiscus: five ruffled petals and a staminal column ----------
function makeHibiscus(rand) {
  const flower = new Group();
  const petalMat = new MeshStandardMaterial({ vertexColors: true, roughness: 0.55, side: DoubleSide });
  const dark = new Color(0x6e0b16);
  const red = new Color(0xd8352f);
  const tip = new Color(0xec5a45);
  for (let i = 0; i < 5; i++) {
    const geo = new PlaneGeometry(1, 1, 14, 20);
    const pos = geo.attributes.position;
    const colors = [];
    for (let k = 0; k < pos.count; k++) {
      const u = pos.getX(k);
      const v = pos.getY(k) + 0.5;
      const width = 0.62 * Math.pow(Math.sin(Math.PI * Math.min(1, v * 1.04)), 0.6) * (0.5 + 0.5 * v);
      const xx = u * width * 2;
      const zz = 0.22 * v * v + 0.045 * Math.sin(u * Math.PI * 7 + i) * Math.pow(v, 3);
      pos.setXYZ(k, xx, v * 0.92, zz);
      const col = v < 0.3 ? dark.clone().lerp(red, v / 0.3) : red.clone().lerp(tip, (v - 0.3) / 0.7);
      colors.push(col.r, col.g, col.b);
    }
    geo.setAttribute('color', new Float32BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    const petal = new Mesh(geo, petalMat);
    const holder = new Group();
    holder.rotation.z = (i / 5) * Math.PI * 2 + rand() * 0.15;
    petal.rotation.x = -0.32;
    holder.add(petal);
    flower.add(holder);
  }
  const column = new Mesh(new CylinderGeometry(0.022, 0.034, 0.78, 10), new MeshStandardMaterial({ color: 0xf1b2aa, roughness: 0.5 }));
  column.rotation.x = Math.PI / 2;
  column.position.z = 0.39;
  flower.add(column);
  const pollen = new InstancedMesh(new SphereGeometry(1, 8, 6), new MeshStandardMaterial({ color: 0xe8b931, roughness: 0.6 }), 18);
  const d = new Object3D();
  for (let i = 0; i < 18; i++) {
    const a = rand() * Math.PI * 2;
    d.position.set(Math.cos(a) * 0.06, Math.sin(a) * 0.06, 0.55 + rand() * 0.2);
    d.scale.setScalar(0.022 + rand() * 0.01);
    d.updateMatrix();
    pollen.setMatrixAt(i, d.matrix);
  }
  flower.add(pollen);
  const stigma = new InstancedMesh(new SphereGeometry(1, 8, 6), new MeshStandardMaterial({ color: 0x9e1b25, roughness: 0.5 }), 5);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    d.position.set(Math.cos(a) * 0.045, Math.sin(a) * 0.045, 0.8);
    d.scale.setScalar(0.03);
    d.updateMatrix();
    stigma.setMatrixAt(i, d.matrix);
  }
  flower.add(stigma);
  return flower;
}

// ---------- Peperomia pellucida: small, glossy, heart-shaped leaves ----------
function makeLeaves(rand, count) {
  const geo = new PlaneGeometry(1, 1, 10, 14);
  const pos = geo.attributes.position;
  const colors = [];
  const mid = new Color(0x6fb24a);
  const edge = new Color(0xa9d77d);
  for (let k = 0; k < pos.count; k++) {
    const u = pos.getX(k);
    const v = pos.getY(k) + 0.5;
    const width = 0.5 * Math.pow(Math.sin(Math.PI * (0.16 + 0.84 * v)), 0.85) * (1.2 - 0.55 * v);
    const xx = u * width * 2;
    pos.setXYZ(k, xx, v * 0.82 - 0.2, 0.09 * Math.abs(xx) - 0.05 * v * v);
    const col = mid.clone().lerp(edge, Math.min(1, Math.abs(u) * 2));
    colors.push(col.r, col.g, col.b);
  }
  geo.setAttribute('color', new Float32BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const mat = new MeshPhysicalMaterial({ vertexColors: true, roughness: 0.3, clearcoat: 0.6, clearcoatRoughness: 0.25, side: DoubleSide });
  const mesh = new InstancedMesh(geo, mat, count);
  mesh.frustumCulled = false;
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      a: (i / count) * Math.PI * 2 + rand() * 0.4,
      r: 1.15 + rand() * 0.55,
      y: (rand() - 0.5) * 1.8,
      s: 0.32 + rand() * 0.22,
      spin: (rand() - 0.5) * 2,
      tilt: rand() * Math.PI,
      delay: rand() * 0.35,
    });
  }
  return { mesh, data };
}

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
  scene.environmentIntensity = 0.7;

  const camera = new PerspectiveCamera(26, 1, 0.1, 100);
  camera.position.set(0, 0.15, 10);

  const key = new DirectionalLight(0xfff8ee, 2.1);
  key.position.set(-3.5, 4, 5);
  const rim = new DirectionalLight(0xe9f5dd, 1.6);
  rim.position.set(4, 1.5, -4);
  scene.add(key, rim, new HemisphereLight(0xf2f5ec, 0x2f4f2b, 0.55));

  const rand = seeded(11);
  const rig = new Group();
  const bottle = new Group();
  rig.add(bottle);
  scene.add(rig);

  // Body: rounded base and shoulder, short neck
  const white = new MeshPhysicalMaterial({ color: 0xf4f3ef, roughness: 0.42, clearcoat: 0.25, clearcoatRoughness: 0.5, sheen: 0.2, sheenColor: new Color(0xffffff) });
  const profile = [
    [0, -0.98], [0.46, -0.98], [0.56, -0.965], [0.605, -0.93], [0.62, -0.87], [0.62, 0.7],
    [0.612, 0.755], [0.585, 0.795], [0.545, 0.825], [0.535, 0.93], [0, 0.93],
  ].map(([r, y]) => new Vector2(r, y));
  bottle.add(new Mesh(new LatheGeometry(profile, 96), white));

  // Label wrapped around most of the body; its middle faces the camera at rest
  const span = Math.PI * 2 * 0.88;
  const label = new Mesh(
    new CylinderGeometry(0.624, 0.624, 1.36, 160, 1, true, -span / 2, span),
    new MeshStandardMaterial({ map: labelTexture(), roughness: 0.55 }),
  );
  label.position.y = -0.06;
  bottle.add(label);

  // Cap: smooth lower band and a ribbed upper part, as on the real bottle
  const capMat = new MeshPhysicalMaterial({ color: 0xf7f6f2, roughness: 0.5, clearcoat: 0.15 });
  const band = new Mesh(new CylinderGeometry(0.585, 0.585, 0.13, 96, 1, true), capMat);
  band.position.y = 0.99;
  bottle.add(band);
  const ribGeo = new CylinderGeometry(0.6, 0.6, 0.36, 192, 1, true);
  const rp = ribGeo.attributes.position;
  for (let k = 0; k < rp.count; k++) {
    const x = rp.getX(k);
    const z = rp.getZ(k);
    const a = Math.atan2(z, x);
    const r = 0.6 + (Math.sin(a * 48) > 0 ? 0.012 : 0);
    rp.setX(k, Math.cos(a) * r);
    rp.setZ(k, Math.sin(a) * r);
  }
  ribGeo.computeVertexNormals();
  const ribs = new Mesh(ribGeo, capMat);
  ribs.position.y = 1.235;
  bottle.add(ribs);
  const top = new Mesh(new LatheGeometry([[0, 0], [0.56, 0], [0.6, -0.035]].map(([r, y]) => new Vector2(r, y)), 96), capMat);
  top.position.y = 1.415;
  bottle.add(top);
  bottle.children.forEach((m) => { m.position.y -= 0.2; }); // centre the whole bottle

  // Botanicals
  const hibiscus = makeHibiscus(rand);
  hibiscus.scale.setScalar(0);
  rig.add(hibiscus);
  const { mesh: leaves, data: leafData } = makeLeaves(rand, lowPower ? 8 : 14);
  rig.add(leaves);

  // ---------- Pose and render ----------
  let p = 0;
  let target = poseAt(0);
  const cur = { ...target };
  let xs = 1;
  const dummy = new Object3D();
  const hidden = new Object3D();
  hidden.scale.setScalar(0);
  hidden.updateMatrix();
  const proj = new Vector3();
  const out = { y: 0, near: 0, sx: 0 };
  let width = 1;
  let height = 1;

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    const mobile = camera.aspect < 0.8;
    xs = MathUtils.clamp((camera.aspect - 0.8) / 0.75, 0, 1); // sideways moves shrink on narrower screens
    rig.scale.setScalar(mobile ? Math.max(0.6, camera.aspect * 1.3) : 1);
    rig.position.y = mobile ? -0.5 : -0.05;
  }

  function apply(dt, time) {
    const k = reduced ? 1 : 1 - Math.exp(-dt * 4.5);
    for (const key in target) cur[key] += (target[key] - cur[key]) * k;
    const float = reduced ? 0 : Math.sin(time * 0.8) * 0.035;
    bottle.position.set(cur.x * xs, cur.y + float, 0);
    bottle.rotation.set(cur.rx, cur.ry, cur.rz);

    // Hibiscus: arrives beside the bottle for its beat, turning slowly
    const hIn = smooth(range(p, 0.35, 0.42)) * (1 - smooth(range(p, 0.52, 0.59)));
    hibiscus.scale.setScalar(hIn * (0.6 + 0.4 * xs));
    hibiscus.position.set(0.6 + 1.5 * xs, -0.55 + 0.35 * xs + (1 - hIn) * -0.8, 0.9);
    // three-quarter view, so the staminal column reads and the flower has depth
    hibiscus.rotation.set(-0.25 + Math.sin(time * 0.5) * 0.08, -0.95 + Math.sin(time * 0.3) * 0.25, 0.15);

    // Peperomia leaves: drift in on a slow ring around the bottle, then away
    const lIn = range(p, 0.55, 0.63);
    const lOut = range(p, 0.7, 0.78);
    leafData.forEach((d, i) => {
      const t = MathUtils.clamp((lIn - d.delay) / (1 - d.delay), 0, 1);
      if (t <= 0 || lOut >= 1) { leaves.setMatrixAt(i, hidden.matrix); return; }
      const a = d.a + time * 0.12 + lOut * 2;
      const r = d.r * (xs ? 1 : 0.8) + (1 - smooth(t)) * 2.5 + lOut * 3;
      dummy.position.set(Math.cos(a) * r, d.y + Math.sin(time * 0.7 + i) * 0.08 - lOut * 1.5, Math.sin(a) * r * 0.6);
      dummy.rotation.set(d.tilt + time * d.spin * 0.3, a, d.tilt * 0.5);
      dummy.scale.setScalar(d.s * smooth(t) * (1 - lOut));
      dummy.updateMatrix();
      leaves.setMatrixAt(i, dummy.matrix);
    });
    leaves.instanceMatrix.needsUpdate = true;

    // screen position of the bottle, for the CSS shadow under it
    proj.set(bottle.position.x, 0, 0).applyMatrix4(rig.matrixWorld).project(camera);
    out.y = cur.y;
    out.near = MathUtils.clamp(1 - Math.abs(cur.y) / 3, 0, 1);
    out.sx = (proj.x * width) / 2;
  }

  let last = performance.now();
  let running = false;
  let raf = 0;
  const listeners = new Set();
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    rig.updateMatrixWorld();
    apply(dt, now / 1000);
    renderer.render(scene, camera);
    listeners.forEach((fn) => fn(out));
    raf = running ? requestAnimationFrame(frame) : 0;
  }

  resize();
  apply(1, 0);
  renderer.compile(scene, camera);
  renderer.render(scene, camera);

  return {
    setProgress(v) {
      p = MathUtils.clamp(v, 0, 1);
      target = poseAt(p);
    },
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
