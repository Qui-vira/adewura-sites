// The maize cob, built in code: a tapered core, kernels in staggered rows, husk leaves that peel,
// silk at the tip. Scroll progress (0..1 across the stage) drives one pose curve.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, InstancedMesh, Object3D, Vector3, Color,
  LatheGeometry, SphereGeometry, PlaneGeometry, CylinderGeometry, TubeGeometry, CatmullRomCurve3, Vector2,
  MeshPhysicalMaterial, MeshStandardMaterial, DirectionalLight, HemisphereLight, PMREMGenerator,
  DoubleSide, SRGBColorSpace, NeutralToneMapping, Float32BufferAttribute, MathUtils,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const L = 3; // cob length
const R = 0.56; // max radius

// Radius along the cob, t from -1 (base) to 1 (tip): rounded ends, slight taper to the tip
const radiusAt = (t) => R * Math.pow(Math.max(0, 1 - t * t), 0.34) * (1 - 0.2 * (t + 1) * 0.5);

// Pose keyframes over stage progress. Values between keys are eased.
const KEYS = [
  [0.0, { y: -4.6, rx: 0.16, ry: -0.7, rz: 0.08, peel: 0, fall: 0 }],
  [0.05, { y: -4.6, rx: 0.16, ry: -0.7, rz: 0.08, peel: 0, fall: 0 }],
  [0.17, { y: 0, rx: 0.12, ry: 0.15, rz: 0.06, peel: 0, fall: 0 }],
  [0.3, { y: 0.05, rx: 0.2, ry: 1.5, rz: 0.02, peel: 0.18, fall: 0 }],
  [0.46, { y: 0, rx: 0.34, ry: 3.0, rz: -0.18, peel: 1, fall: 0 }],
  [0.6, { y: 0, rx: 0.5, ry: 3.9, rz: -0.9, peel: 1, fall: 0 }],
  [0.72, { y: -0.1, rx: 0.3, ry: 4.5, rz: -1.5, peel: 1, fall: 0.12 }],
  [0.86, { y: -0.35, rx: 0.25, ry: 5.1, rz: -1.62, peel: 1, fall: 0.7 }],
  [1.0, { y: -5.8, rx: 0.2, ry: 5.6, rz: -1.75, peel: 1, fall: 1 }],
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

export function createScene(canvas, { lowPower = false, reduced = false } = {}) {
  const renderer = new WebGLRenderer({ canvas, antialias: !lowPower, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPower ? 1.25 : 1.75));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = NeutralToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;

  const camera = new PerspectiveCamera(28, 1, 0.1, 100);
  camera.position.set(0, 0.2, 10);

  const key = new DirectionalLight(0xfff0cf, 2.4);
  key.position.set(-3, 4.5, 5);
  const rim = new DirectionalLight(0xfffbe6, 1.3);
  rim.position.set(4, 2, -4);
  scene.add(key, rim, new HemisphereLight(0xfff8c4, 0x7a5a36, 0.6));

  const rig = new Group(); // position and scale for the viewport
  const cob = new Group(); // the pose
  rig.add(cob);
  scene.add(rig);

  const rand = seeded(7);

  // Core: barely visible between kernels
  const coreProfile = [];
  for (let i = 0; i <= 40; i++) {
    const t = -1 + (2 * i) / 40;
    coreProfile.push(new Vector2(radiusAt(t) * 0.82, (t * L) / 2));
  }
  const core = new Mesh(
    new LatheGeometry(coreProfile, 32),
    new MeshStandardMaterial({ color: 0xd8a33a, roughness: 0.6 }),
  );
  cob.add(core);

  // Kernels
  const ROWS = lowPower ? 14 : 16;
  const RINGS = lowPower ? 24 : 30;
  const kernelGeo = new SphereGeometry(0.5, 12, 9);
  const kernelMat = new MeshPhysicalMaterial({
    roughness: 0.32, clearcoat: 0.7, clearcoatRoughness: 0.28, sheen: 0.3, sheenColor: new Color(0xfff2b0),
  });
  const kernelData = [];
  const dummy = new Object3D();
  for (let j = 0; j < RINGS; j++) {
    const t = -0.93 + (1.86 * j) / (RINGS - 1);
    const r = radiusAt(t);
    if (r < 0.1) continue;
    const y = (t * L) / 2;
    const dy = (1.86 * L) / 2 / (RINGS - 1);
    const w = ((2 * Math.PI * r) / ROWS) * 0.94;
    for (let i = 0; i < ROWS; i++) {
      const a = ((i + (j % 2) * 0.5) / ROWS) * Math.PI * 2;
      const depth = 0.1 + 0.08 * (r / R);
      kernelData.push({
        pos: new Vector3(Math.cos(a) * (r + depth * 0.15), y, Math.sin(a) * (r + depth * 0.15)),
        scale: new Vector3(w, dy * 0.92, depth),
        a,
      });
    }
  }
  const kernels = new InstancedMesh(kernelGeo, kernelMat, kernelData.length);
  const base = new Color(0xf0b52c);
  const palette = [0xf0b52c, 0xf4c24a, 0xe9a722, 0xf7cf63, 0xeab33a, 0xf2c55a].map((c) => new Color(c));
  kernelData.forEach((k, i) => {
    dummy.position.copy(k.pos);
    dummy.lookAt(k.pos.x * 2, k.pos.y, k.pos.z * 2);
    dummy.scale.copy(k.scale);
    dummy.updateMatrix();
    k.matrix = dummy.matrix.clone();
    kernels.setMatrixAt(i, k.matrix);
    const c = palette[Math.floor(rand() * palette.length)].clone();
    if (k.pos.y > L * 0.36) c.lerp(new Color(0xf9e6a6), 0.45); // paler kernels at the tip
    kernels.setColorAt(i, c || base);
  });
  cob.add(kernels);

  // Falling kernels live in world space so gravity points down whatever the cob's pose
  const FALL_N = Math.min(lowPower ? 90 : 160, kernelData.length);
  const fallIdx = [];
  const order = kernelData.map((_, i) => i).sort(() => rand() - 0.5);
  for (let i = 0; i < FALL_N; i++) {
    fallIdx.push({ i: order[i], delay: rand() * 0.55, drift: (rand() - 0.5) * 1.6, spin: (rand() - 0.5) * 12 });
  }
  const falling = new InstancedMesh(kernelGeo, kernelMat, FALL_N);
  falling.frustumCulled = false;
  fallIdx.forEach((f, n) => falling.setColorAt(n, palette[n % palette.length]));
  scene.add(falling);
  const hidden = new Object3D();
  hidden.scale.setScalar(0);
  hidden.updateMatrix();

  // Husk leaves: curved strips hinged at the base, peeling outward
  const LEAVES = 7;
  const leaves = [];
  const H = L * 1.1;
  const baseY = -L / 2 - 0.1;
  for (let n = 0; n < LEAVES; n++) {
    const geo = new PlaneGeometry(1, 1, 8, 28);
    const pos = geo.attributes.position;
    const colors = [];
    const vAttr = [];
    const W = ((2 * Math.PI * R) / LEAVES) * 1.55;
    const leafR = (y) => Math.max(radiusAt(MathUtils.clamp((y / L) * 2, -1, 1)), 0.05) + 0.12;
    const r0 = leafR(baseY); // hinge sits where the leaf meets the shank
    const tone = rand();
    for (let k = 0; k < pos.count; k++) {
      const u = pos.getX(k); // -0.5..0.5
      const v = pos.getY(k) + 0.5; // 0..1
      const y = baseY + v * H;
      const rr = leafR(y) + 0.04 * v + n * 0.012; // each leaf a hair further out, so overlaps never flicker
      const taper = (1 - Math.pow(v, 2.4)) * 0.92 + 0.08 * (1 - v);
      const a = (u * W * taper) / rr;
      pos.setXYZ(k, rr * Math.sin(a), v * H, rr * Math.cos(a) - r0);
      // green at the base fading to straw at the tip, with faint veins
      const vein = 0.94 + 0.06 * Math.cos(u * Math.PI * 14);
      const g = new Color().lerpColors(new Color(0x6c8c33), new Color(0xcfc684), Math.pow(v, 1.4) * (0.75 + tone * 0.25));
      g.multiplyScalar(vein);
      colors.push(g.r, g.g, g.b);
      vAttr.push(v);
    }
    geo.setAttribute('color', new Float32BufferAttribute(colors, 3));
    geo.setAttribute('aV', new Float32BufferAttribute(vAttr, 1));
    geo.computeVertexNormals();

    const mat = new MeshStandardMaterial({ vertexColors: true, roughness: 0.68, side: DoubleSide });
    const curl = { value: 0 };
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uCurl = curl;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float aV;\nuniform float uCurl;')
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
          float ca = uCurl * aV * aV;
          float cs = cos(ca), sn = sin(ca);
          transformed.yz = mat2(cs, sn, -sn, cs) * transformed.yz;`,
        );
    };
    const mesh = new Mesh(geo, mat);
    const hinge = new Group();
    hinge.position.set(0, baseY, r0);
    hinge.add(mesh);
    const pivot = new Group();
    pivot.rotation.y = (n / LEAVES) * Math.PI * 2 + rand() * 0.2;
    pivot.add(hinge);
    cob.add(pivot);
    leaves.push({ hinge, curl, delay: rand() * 0.25, max: 1.75 + rand() * 0.5 });
  }

  // Silk: fine strands from the tip, seen once the husk opens
  const silkGeos = [];
  for (let s = 0; s < (lowPower ? 14 : 26); s++) {
    const a = rand() * Math.PI * 2;
    const spread = 0.25 + rand() * 0.55;
    const top = L / 2 - 0.05;
    const pts = [
      new Vector3(Math.cos(a) * 0.05, top, Math.sin(a) * 0.05),
      new Vector3(Math.cos(a) * spread * 0.4, top + 0.35, Math.sin(a) * spread * 0.4),
      new Vector3(Math.cos(a) * spread, top + 0.55 + rand() * 0.25, Math.sin(a) * spread),
      new Vector3(Math.cos(a) * spread * 1.4, top + 0.45 + rand() * 0.2, Math.sin(a) * spread * 1.4),
    ];
    silkGeos.push(new TubeGeometry(new CatmullRomCurve3(pts), 16, 0.009, 4));
  }
  const silk = new Mesh(mergeGeometries(silkGeos), new MeshStandardMaterial({ color: 0xd8b36a, roughness: 0.45 }));
  cob.add(silk);

  // Shank at the base
  const shank = new Mesh(new CylinderGeometry(0.16, 0.2, 0.5, 16), new MeshStandardMaterial({ color: 0x7d9a45, roughness: 0.7 }));
  shank.position.y = -L / 2 - 0.3;
  cob.add(shank);

  // ---------- Pose and render ----------
  let target = poseAt(0);
  const cur = { ...target };
  let width = 1;
  let height = 1;
  let mobile = false;
  let dirty = true;
  const tmp = new Vector3();

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    mobile = camera.aspect < 0.8;
    // keep the sideways cob inside narrow screens
    rig.scale.setScalar(mobile ? Math.max(0.62, camera.aspect * 1.25) : 1);
    rig.position.y = mobile ? -0.55 : -0.05;
    dirty = true;
  }

  function applyPose(dt, time) {
    const k = reduced ? 1 : 1 - Math.exp(-dt * 7);
    for (const key in target) cur[key] += (target[key] - cur[key]) * k;
    const sway = reduced ? 0 : Math.sin(time * 0.6) * 0.04;
    cob.position.y = cur.y;
    cob.rotation.set(cur.rx + sway * 0.5, cur.ry + sway, cur.rz);

    for (const leaf of leaves) {
      const p = MathUtils.clamp((cur.peel - leaf.delay) / (1 - leaf.delay), 0, 1);
      const e = smooth(p);
      leaf.hinge.rotation.x = e * leaf.max;
      leaf.curl.value = e * 1.1;
    }
    silk.scale.setScalar(0.4 + 0.6 * smooth(MathUtils.clamp(cur.peel * 1.4, 0, 1)));

    // kernels: the falling set detaches from the cob and drops in world space
    cob.updateMatrixWorld(true);
    fallIdx.forEach((f, n) => {
      const ft = MathUtils.clamp((cur.fall - f.delay) / 0.45, 0, 1);
      const k2 = kernelData[f.i];
      if (ft <= 0) {
        kernels.setMatrixAt(f.i, k2.matrix);
        falling.setMatrixAt(n, hidden.matrix);
        return;
      }
      kernels.setMatrixAt(f.i, hidden.matrix);
      tmp.copy(k2.pos).applyMatrix4(cob.matrixWorld);
      dummy.position.set(tmp.x + f.drift * ft, tmp.y - 9 * ft * ft, tmp.z + 0.5 * ft);
      dummy.rotation.set(f.spin * ft, f.spin * 0.6 * ft, 0);
      dummy.scale.copy(k2.scale).multiplyScalar(rig.scale.x);
      dummy.updateMatrix();
      falling.setMatrixAt(n, dummy.matrix);
    });
    kernels.instanceMatrix.needsUpdate = true;
    falling.instanceMatrix.needsUpdate = true;
  }

  let last = performance.now();
  let running = false;
  let raf = 0;
  const listeners = new Set();
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    applyPose(dt, now / 1000);
    renderer.render(scene, camera);
    listeners.forEach((fn) => fn(cur));
    raf = running ? requestAnimationFrame(frame) : 0;
  }

  resize();
  applyPose(1, 0);
  renderer.compile(scene, camera);
  renderer.render(scene, camera);

  return {
    ready: Promise.resolve(),
    setProgress(p) {
      target = poseAt(MathUtils.clamp(p, 0, 1));
      dirty = true;
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
    get dirty() { return dirty; },
  };
}
