import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createParticles } from './particles.js';
import { createSound } from './sound.js';
import { runOpening } from './opening.js';

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

// ---------- The three doors ----------
// enter: the scroll window in which each house slides up over the last.
// rest: the brand's own scroll progress that shows its object well; sway: how far it idles around that.
const DOORS = [
  { brand: 'natural', load: () => import('../natural/src/scene.js'), enter: [0.08, 0.2], rest: 0.315, sway: 0.012 },
  { brand: 'ategbe', load: () => import('../ategbe/src/scene.js'), enter: [0.38, 0.5], rest: 0.32, sway: 0.05 },
  { brand: 'farmers', load: () => import('../farmers/src/scene.js'), enter: [0.68, 0.8], rest: 0.4, sway: 0.045 },
].map((d, i) => {
  const el = document.querySelector(`.door--${d.brand}`);
  return { ...d, i, el, canvas: el.querySelector('.door__gl'), text: el.querySelector('.door__text'), scene: null, loading: null, running: false, e: 0, arrived: false };
});
const nav = document.getElementById('nav');
const navLinks = [...document.querySelectorAll('.nav__link')];

function ensureScene(door) {
  if (door.scene || door.loading) return;
  door.loading = door.load()
    .then(({ createScene }) => {
      door.scene = createScene(door.canvas, { lowPower, reduced });
      door.scene.setProgress(0.07);
      setProgress(p); // start it right away if its door is already on screen
    })
    .catch((err) => {
      door.el.classList.add('no-gl');
      console.warn(`3D unavailable for ${door.brand}; the door still works without it.`, err);
    });
}

function setRunning(door, run) {
  if (!door.scene || run === door.running) return;
  door.running = run;
  run ? door.scene.start() : door.scene.stop();
}

let p = 0;
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

  let current = -1;
  DOORS.forEach((door, i) => {
    if (p > door.enter[0] - 0.07) ensureScene(door);
    const e = range(p, door.enter[0], door.enter[1]);
    door.e = e;
    const ee = easeOut(e);
    door.el.style.clipPath = `inset(${((1 - ee) * 100).toFixed(2)}% 0 0 0)`;
    door.el.classList.toggle('is-open', e > 0.95);
    door.text.style.transform = `translate3d(0, ${((1 - ee) * 12).toFixed(2)}vh, 0)`;
    if (e > 0.5) current = i;
    if (e >= 1 && !door.arrived) { door.arrived = true; sound.house(i); }
    if (e < 0.9) door.arrived = false;
  });
  // a house renders only while some of it is on screen
  DOORS.forEach((door, i) => {
    const next = DOORS[i + 1];
    setRunning(door, door.e > 0 && !(next && next.e >= 1));
  });

  nav.dataset.on = current >= 0 ? DOORS[current].brand : '';
  navLinks.forEach((a, i) => a.setAttribute('aria-current', String(i === current)));
}

// each running object rises with its door, then idles gently around its best angle
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
    if (self.isActive) particles.start();
    else { particles.stop(); DOORS.forEach((d) => setRunning(d, false)); }
  },
});
setProgress(0);
particles.start();

addEventListener('resize', () => {
  particles.resize();
  DOORS.forEach((d) => d.scene?.resize());
});

// nav links jump to the moment each house has fully arrived
navLinks.forEach((a) => a.addEventListener('click', (e) => {
  e.preventDefault();
  const door = DOORS[Number(a.dataset.door)];
  const span = stage.offsetHeight - innerHeight;
  lenis.scrollTo(stage.offsetTop + span * (door.enter[1] + 0.02), { duration: reduced ? 0 : 1.4 });
}));

// ---------- Visit: the house's color floods the screen, then its own opening takes over ----------
document.querySelectorAll('.door__visit').forEach((link) => link.addEventListener('click', (e) => {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
  e.preventDefault();
  const ground = getComputedStyle(link.closest('.door')).getPropertyValue('--door-ground').trim();
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
  runOpening({
    ready: document.fonts.ready,
    reduced,
    parentName,
    onEnter(withSound) {
      setSound(withSound);
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch {}
      document.documentElement.style.overflow = '';
      lenis.start();
      ScrollTrigger.refresh();
    },
  });
}
