import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createParticles } from './particles.js';
import { createSound } from './sound.js';
import { runOpening } from './opening.js';
import { createClouds } from './clouds.js';

gsap.registerPlugin(ScrollTrigger);

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lowPower = (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4 || innerWidth < 760;
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const range = (p, a, b) => clamp01((p - a) / (b - a));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const SESSION_KEY = 'parent-entered';
const parentName = document.querySelector('[data-parent-name]')?.textContent.trim() || 'Adewura';

// ---------- Smooth scroll ----------
const lenis = new Lenis({ autoRaf: false, anchors: false, lerp: reduced ? 1 : 0.1 });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);

// ---------- Sound ----------
const sound = createSound();
const toggle = document.getElementById('sound-toggle');
function setSound(on) {
  on ? sound.start() : sound.stop();
  toggle.setAttribute('aria-pressed', String(on));
  toggle.setAttribute('aria-label', on ? 'Sound on' : 'Sound off');
}
toggle.addEventListener('click', () => setSound(!sound.on));
document.addEventListener('pointerdown', (e) => { if (e.target.closest('.pill, .sound')) sound.tap(); });
// the wind follows the scroll speed, and settles when the visitor stops
let windIdle = 0;
lenis.on('scroll', ({ velocity }) => {
  sound.scroll(velocity / 40);
  clearTimeout(windIdle);
  windIdle = setTimeout(() => sound.scroll(0), 160);
});

// ---------- Intro sentence and particles ----------
const stage = document.querySelector('.stage');
const intro = document.getElementById('intro');
const cue = intro.querySelector('.intro__cue');
const words = [];
intro.querySelectorAll('.intro__a, .intro__b').forEach((part) => {
  part.innerHTML = part.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(' ');
  words.push(...part.querySelectorAll('.w'));
});
const particles = createParticles(document.getElementById('particles'), { count: lowPower ? 120 : 200, reduced });

// ---------- The journey: the camera flies through the clouds and meets each house in turn ----------
// at: the scroll window in which a house stands in front of the visitor. Before it, the camera
// passes through a cloud bank; after it, the house rushes past and the next bank closes in.
// rest: the brand's own scroll progress that shows its object well; sway: how far it idles around that.
const DOORS = [
  { brand: 'ategbe', load: () => import('../ategbe/src/scene.js'), at: [0.2, 0.34], rest: 0.32, sway: 0.05 },
  { brand: 'farmers', load: () => import('../farmers/src/scene.js'), at: [0.47, 0.61], rest: 0.4, sway: 0.045 },
  { brand: 'natural', load: () => import('../natural/src/scene.js'), at: [0.74, 2], rest: 0.315, sway: 0.012 },
].map((d, i) => {
  const el = document.querySelector(`.door--${d.brand}`);
  return { ...d, i, el, canvas: el.querySelector('.door__gl'), text: el.querySelector('.door__text'), scene: null, loading: null, running: false, e: 0, l: 0, arrived: false };
});
const nav = document.getElementById('nav');
const navLinks = [...document.querySelectorAll('.nav__link')];
const veil = document.getElementById('veil');
const sky = document.getElementById('sky');

// camera z along the scroll: it holds still for the intro, travels between houses, drifts at each one
const PATH_KEYS = [[0, 10], [0.07, 10], [0.2, -110], [0.34, -128], [0.47, -238], [0.61, -256], [0.74, -366], [1, -392]];
const BANKS = [-55, -183, -311]; // a wall of cloud halfway between each stop
const smooth = (t) => t * t * (3 - 2 * t);
function cameraZ(v) {
  for (let i = 1; i < PATH_KEYS.length; i++) {
    const [p1, z1] = PATH_KEYS[i];
    const [p0, z0] = PATH_KEYS[i - 1];
    if (v <= p1) return z0 + (z1 - z0) * smooth(range(v, p0, p1));
  }
  return PATH_KEYS[PATH_KEYS.length - 1][1];
}

// each house tints the sky: dawn for the intro, amber for Àtègbè, butter for the farm, sage for Natural
const SKIES = [
  { at: 0.07, top: '#c3d6e6', mid: '#f3e2d6', low: '#f8eee4', lit: '#ffffff', shade: '#e2cfcb', far: '#f4e6dc' },
  { at: 0.2, top: '#f2d9a6', mid: '#fae8c9', low: '#f8efe1', lit: '#fffbf2', shade: '#ead3ac', far: '#f8eacf' },
  { at: 0.47, top: '#cfe0e9', mid: '#f7efc4', low: '#f7f2dd', lit: '#fffef6', shade: '#e2dbb4', far: '#f5f0d6' },
  { at: 0.74, top: '#cde2d5', mid: '#e8f0e0', low: '#f4f6ee', lit: '#fdfefb', shade: '#d2dfcc', far: '#e9f0e3' },
];
const KEYS6 = ['top', 'mid', 'low', 'lit', 'shade', 'far'];
const toRGB = (hex) => [1, 3, 5].map((k) => parseInt(hex.slice(k, k + 2), 16));
const SKY_RGB = SKIES.map((s) => Object.fromEntries(KEYS6.map((k) => [k, toRGB(s[k])])));
const mixHex = (a, b, t) => '#' + a.map((v, i) => Math.round(v + (b[i] - v) * t).toString(16).padStart(2, '0')).join('');
function skyAt(v) {
  let i = 0;
  while (i < SKIES.length - 1 && v > SKIES[i + 1].at) i++;
  const j = Math.min(i + 1, SKIES.length - 1);
  // change color only while travelling, hidden mostly by the cloud bank
  const t = j === i ? 0 : smooth(range(v, SKIES[i].at + 0.03, SKIES[j].at - 0.02));
  return Object.fromEntries(KEYS6.map((k) => [k, mixHex(SKY_RGB[i][k], SKY_RGB[j][k], t)]));
}

let clouds = null;
try {
  clouds = createClouds(document.getElementById('clouds'), { lowPower, reduced, banks: BANKS });
} catch (err) {
  sky.classList.add('no-gl');
  console.warn('3D clouds unavailable; the sky stays a plain gradient.', err);
}

function ensureScene(door) {
  if (door.scene || door.loading) return;
  door.loading = door.load()
    .then(({ createScene }) => {
      door.scene = createScene(door.canvas, { lowPower, reduced });
      door.scene.setProgress(0.07);
      setProgress(p); // start it right away if its house is already in view
    })
    .catch((err) => {
      door.el.classList.add('no-gl');
      console.warn(`3D unavailable for ${door.brand}; the house still works without it.`, err);
    });
}

function setRunning(door, run) {
  if (!door.scene || run === door.running) return;
  door.running = run;
  run ? door.scene.start() : door.scene.stop();
}

let p = 0;
let lastSky = '';
const passed = BANKS.map(() => false);
function setProgress(v) {
  p = v;
  particles.setProgress(p);

  words.forEach((w, i) => {
    const t = range(p, 0.01 + i * 0.008, 0.06 + i * 0.008);
    w.style.transform = t ? `translate3d(${t * 4}rem, ${-t * 2.6}rem, 0) rotate(${t * 6}deg)` : '';
    w.style.opacity = String(Math.max(0, 1 - t * 1.7));
    if (!reduced) w.style.filter = t ? `blur(${(t * 5).toFixed(1)}px)` : '';
  });
  cue.style.opacity = String(1 - range(p, 0, 0.03));

  const z = cameraZ(p);
  clouds?.setZ(z);
  // the screen goes white as the camera passes through each bank
  let fog = 0;
  BANKS.forEach((b, i) => {
    const f = 1 - Math.abs(z - b) / 26;
    fog = Math.max(fog, f);
    // a whoosh as each bank closes in, once per pass
    if (f > 0.2 && !passed[i]) { passed[i] = true; sound.passage(); }
    if (f < 0.02) passed[i] = false;
  });
  veil.style.opacity = (smooth(clamp01(fog)) * 0.94).toFixed(3);

  const c = skyAt(p);
  const key = c.top + c.mid + c.low;
  if (key !== lastSky) {
    lastSky = key;
    sky.style.setProperty('--sky-top', c.top);
    sky.style.setProperty('--sky-mid', c.mid);
    sky.style.setProperty('--sky-low', c.low);
    clouds?.setTint(c.lit, c.shade, c.far);
  }

  let current = -1;
  DOORS.forEach((door, i) => {
    const [a, b] = door.at;
    if (p > a - 0.14) ensureScene(door);
    // arrive out of the bank small and far, then rush past and away
    const e = range(p, a - 0.06, a + 0.005);
    const l = range(p, b, b + 0.055);
    door.e = e;
    door.l = l;
    const shown = e * (1 - l);
    door.el.style.visibility = shown > 0.001 ? 'visible' : 'hidden';
    const scale = reduced ? 1 : (0.45 + 0.55 * easeOut(e)) * (1 + 1.5 * l * l);
    door.canvas.style.transform = scale === 1 ? '' : `scale(${scale.toFixed(4)})`;
    door.canvas.style.opacity = shown.toFixed(3);
    const tIn = range(p, a - 0.012, a + 0.02);
    const tOut = range(p, b - 0.015, b + 0.015);
    door.text.style.opacity = (tIn * (1 - tOut)).toFixed(3);
    door.text.style.transform = `translate3d(0, ${((1 - easeOut(tIn)) * 6 - tOut * 4).toFixed(2)}vh, 0)`;
    door.el.classList.toggle('is-open', tIn > 0.9 && tOut < 0.1);
    if (shown > 0.5) current = i;
    if (tIn >= 1 && tOut === 0 && !door.arrived) { door.arrived = true; sound.house(door.i); }
    if (tIn < 0.9 || tOut > 0) door.arrived = false;
    setRunning(door, shown > 0);
  });

  nav.dataset.on = current >= 0 ? DOORS[current].brand : '';
  navLinks.forEach((el, i) => el.setAttribute('aria-current', String(i === current)));
}

// each running object rises as it arrives, then idles gently around its best angle
gsap.ticker.add((time) => {
  for (const door of DOORS) {
    if (!door.scene || !door.running) continue;
    const rise = easeOut(door.e);
    const idle = reduced ? 0 : Math.sin(time * 0.35 + door.i * 1.7) * door.sway;
    door.scene.setProgress(0.07 + (door.rest - 0.07) * rise + idle * rise);
  }
});

ScrollTrigger.create({
  trigger: stage,
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: (self) => setProgress(self.progress),
  onToggle: (self) => {
    if (self.isActive) { particles.start(); clouds?.start(); }
    else { particles.stop(); clouds?.stop(); DOORS.forEach((d) => setRunning(d, false)); }
  },
});
setProgress(0);
particles.start();
clouds?.start();

addEventListener('resize', () => {
  particles.resize();
  clouds?.resize();
  DOORS.forEach((d) => d.scene?.resize());
});

// nav links jump to the moment each house has fully arrived
navLinks.forEach((a) => a.addEventListener('click', (e) => {
  e.preventDefault();
  const door = DOORS[Number(a.dataset.door)];
  const span = stage.offsetHeight - innerHeight;
  lenis.scrollTo(stage.offsetTop + span * (door.at[0] + 0.03), { duration: reduced ? 0 : 2.2 });
}));

// ---------- Visit: the house's color floods the screen, then its own opening takes over ----------
document.querySelectorAll('.door__visit').forEach((link) => link.addEventListener('click', (e) => {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
  e.preventDefault();
  const ground = getComputedStyle(link.closest('.door')).getPropertyValue('--door-flood').trim();
  const flood = document.createElement('div');
  flood.className = 'flood';
  flood.style.background = ground;
  document.body.appendChild(flood);
  const x = e.clientX || innerWidth / 2;
  const y = e.clientY || innerHeight / 2;
  sound.stop();
  if (reduced) { location.href = link.href; return; }
  gsap.fromTo(flood, { clipPath: `circle(0% at ${x}px ${y}px)` }, {
    clipPath: `circle(150% at ${x}px ${y}px)`,
    duration: 0.7,
    ease: 'power3.inOut',
    onComplete: () => { location.href = link.href; },
  });
}));
// coming back with the browser's Back button must not show a stale flood
addEventListener('pageshow', () => document.querySelectorAll('.flood').forEach((f) => f.remove()));

// ---------- Opening ----------
toggle.hidden = false;
let returning = false;
try { returning = sessionStorage.getItem(SESSION_KEY) === '1'; } catch {}

if (returning) {
  setSound(false);
} else {
  lenis.stop();
  document.documentElement.style.overflow = 'hidden';
  intro.style.opacity = '0'; // the welcome sits on the same sky; the intro line waits behind it
  runOpening({
    ready: document.fonts.ready,
    reduced,
    parentName,
    onEnter(withSound) {
      setSound(withSound);
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch {}
      document.documentElement.style.overflow = '';
      gsap.to(intro, { opacity: 1, duration: reduced ? 0.01 : 1.1, delay: reduced ? 0 : 0.35, ease: 'power2.out' });
      lenis.start();
      ScrollTrigger.refresh();
    },
  });
}
