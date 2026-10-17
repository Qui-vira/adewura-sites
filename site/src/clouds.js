// The parent's sky, after museum.unesco.org: a field of soft clouds the visitor flies through.
// Scroll moves the camera forward; between the houses it passes straight through a cloud bank.
// The sky color itself is CSS behind a transparent canvas, so each house can tint it cheaply.
import {
  WebGLRenderer, Scene, PerspectiveCamera, PlaneGeometry, InstancedMesh, ShaderMaterial,
  CanvasTexture, Object3D, InstancedBufferAttribute, Color, SRGBColorSpace, LinearMipmapLinearFilter,
} from 'three';

// One cloud puff, drawn once: many soft blobs inside an oval, denser at the middle.
function puffTexture() {
  const s = 256;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const g = c.getContext('2d');
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  g.filter = 'blur(3px)'; // softer edges where canvas filters exist; harmless where they don't
  for (let i = 0; i < 22; i++) {
    const a = rnd() * Math.PI * 2;
    const d = Math.sqrt(rnd()) * 0.24;
    const x = s / 2 + Math.cos(a) * d * s;
    const y = s / 2 + Math.sin(a) * d * s * 0.6;
    const r = s * (0.14 + rnd() * 0.13) * (1 - d * 0.8);
    const grad = g.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, 'rgba(255,255,255,0.34)');
    grad.addColorStop(0.45, 'rgba(255,255,255,0.22)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fill();
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  t.minFilter = LinearMipmapLinearFilter;
  return t;
}

const vertex = /* glsl */ `
  attribute float aShade;
  uniform float uTime;
  varying vec2 vUv;
  varying float vShade;
  varying float vDepth;
  void main() {
    vUv = uv;
    vShade = aShade;
    vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
    wp.x += sin(uTime * 0.05 + aShade * 40.0) * 1.6; // slow drift, each puff on its own phase
    vec4 mv = viewMatrix * wp;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }`;

const fragment = /* glsl */ `
  uniform sampler2D uMap;
  uniform vec3 uLit;
  uniform vec3 uShade;
  uniform vec3 uFar;
  uniform float uFarDist;
  varying vec2 vUv;
  varying float vShade;
  varying float vDepth;
  void main() {
    float a = texture2D(uMap, vUv).a;
    // lit from above: the top of each puff catches the light, the underside goes warm grey
    vec3 col = mix(uShade, uLit, clamp(0.3 + vUv.y * 0.7 + vShade * 0.2, 0.0, 1.0));
    float far = smoothstep(uFarDist * 0.35, uFarDist, vDepth);
    col = mix(col, uFar, far);
    a *= 1.0 - smoothstep(uFarDist * 0.85, uFarDist, vDepth); // no popping at the far edge
    a *= smoothstep(0.6, 7.0, vDepth);                         // fade as the camera flies through
    gl_FragColor = vec4(col, a);
  }`;

export const PATH = 420; // how far the camera travels, in world units

// banks: z positions where the clouds close over the path
export function createClouds(canvas, { lowPower = false, reduced = false, banks = [] } = {}) {
  const renderer = new WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPower ? 1 : 1.5));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = SRGBColorSpace;

  const scene = new Scene();
  const camera = new PerspectiveCamera(55, 1, 0.5, 260);
  camera.rotation.x = -0.06;

  const material = new ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uMap: { value: puffTexture() },
      uTime: { value: 0 },
      uLit: { value: new Color('#fffaf2') },
      uShade: { value: new Color('#e2cfcb') },
      uFar: { value: new Color('#f3e6dc') },
      uFarDist: { value: 220 },
    },
  });

  // place the puffs: a sea below, walls either side, a few high wisps, and a bank across the path
  let seed = 11;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const span = (a, b) => a + rnd() * (b - a);
  const puffs = [];
  const total = lowPower ? 300 : 560;
  const zFrom = 40, zTo = -PATH - 120;
  for (let i = 0; i < total * 0.46; i++) puffs.push([span(-110, 110), span(-34, -13), span(zTo, zFrom), span(34, 64)]);
  for (let i = 0; i < total * 0.3; i++) {
    const side = rnd() < 0.5 ? -1 : 1;
    puffs.push([side * span(20, 85), span(-12, 14), span(zTo, zFrom), span(22, 44)]);
  }
  for (let i = 0; i < total * 0.08; i++) puffs.push([span(-90, 90), span(18, 34), span(zTo, zFrom), span(30, 50)]);
  const perBank = Math.round((total * 0.16) / Math.max(1, banks.length));
  for (const z of banks) {
    for (let i = 0; i < perBank; i++) puffs.push([span(-22, 22), span(-10, 9), z + span(-16, 16), span(18, 32)]);
  }

  const geo = new PlaneGeometry(1, 1);
  const mesh = new InstancedMesh(geo, material, puffs.length);
  const shade = new Float32Array(puffs.length);
  const o = new Object3D();
  // far puffs first, so the unsorted blend mostly draws back to front
  puffs.sort((a, b) => a[2] - b[2]);
  puffs.forEach(([x, y, z, s], i) => {
    o.position.set(x, y, z);
    o.rotation.set(0, 0, rnd() * Math.PI * 2);
    o.scale.set(s, s * span(0.55, 0.8), 1);
    o.updateMatrix();
    mesh.setMatrixAt(i, o.matrix);
    shade[i] = rnd();
  });
  mesh.geometry.setAttribute('aShade', new InstancedBufferAttribute(shade, 1));
  mesh.frustumCulled = false;
  scene.add(mesh);

  let w = 0, h = 0, raf = 0, running = false, z = 10, zSmooth = 10, last = 0;
  const t0 = performance.now();

  function resize() {
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / Math.max(1, h);
    // keep the field filling a tall phone screen
    camera.fov = camera.aspect < 0.8 ? 68 : 55;
    camera.updateProjectionMatrix();
  }

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const t = (now - t0) / 1000;
    const dt = Math.min(0.05, (now - (last || now)) / 1000);
    last = now;
    zSmooth += (z - zSmooth) * (reduced ? 1 : 1 - Math.exp(-dt * 6));
    material.uniforms.uTime.value = reduced ? 0 : t;
    camera.position.set(reduced ? 0 : Math.sin(t * 0.13) * 0.8, reduced ? 0 : Math.sin(t * 0.21) * 0.35, zSmooth);
    renderer.render(scene, camera);
  }

  resize();
  return {
    resize,
    // camera z in world units: 10 at the start, -PATH at the end
    setZ(v) { z = v; if (!running) { zSmooth = v; } },
    setTint(lit, shadeCol, far) {
      material.uniforms.uLit.value.set(lit);
      material.uniforms.uShade.value.set(shadeCol);
      material.uniforms.uFar.value.set(far);
    },
    start() { if (running) return; running = true; last = 0; raf = requestAnimationFrame(frame); },
    stop() { running = false; cancelAnimationFrame(raf); },
    renderOnce() { zSmooth = z; frame(performance.now()); cancelAnimationFrame(raf); if (running) raf = requestAnimationFrame(frame); },
  };
}
