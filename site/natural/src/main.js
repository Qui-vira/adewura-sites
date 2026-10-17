import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createScene } from './scene.js';
import { createGhost } from './ghost.js';
import { createPetals } from './petals.js';
import { createSound } from './sound.js';
import { runOpening } from './opening.js';

gsap.registerPlugin(ScrollTrigger);

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lowPower = (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4 || innerWidth < 760;
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const range = (p, a, b) => clamp01((p - a) / (b - a));
const SESSION_KEY = 'natural-entered';
let narrow = matchMedia('(max-width: 760px)').matches;
addEventListener('resize', () => { narrow = matchMedia('(max-width: 760px)').matches; });

// ---------- Smooth scroll: a little slower than usual, to match the calm ----------
const lenis = new Lenis({ autoRaf: false, anchors: true, lerp: reduced ? 1 : 0.075 });
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

// ---------- Stage: the bottle, petals, ghost headlines ----------
const stage = document.querySelector('.stage');
const gl = document.getElementById('gl');
const shadow = document.getElementById('shadow');
const aside = document.getElementById('aside');
const cue = document.querySelector('.intro__cue');
const line = document.querySelector('.intro__line');

line.innerHTML = line.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(' ');
const words = [...line.querySelectorAll('.w')];

const ghosts = [...document.querySelectorAll('[data-ghost]')].map((el) => createGhost(el, { blur: !lowPower && !reduced }));
const GHOST_TIMES = [
  [0.15, 0.21, 0.31, 0.35],
  [0.36, 0.42, 0.5, 0.54],
  [0.55, 0.61, 0.69, 0.73],
  [0.74, 0.8, 0.88, 0.93],
];

// The bottle is built a moment after the opening starts, so compiling it never freezes the logo
let scene = null;
let stageActive = true;
let lastP = 0;
const sceneReady = new Promise((resolve) => {
  requestAnimationFrame(() => setTimeout(() => {
    try {
      scene = createScene(gl, { lowPower, reduced });
      scene.onFrame((pose) => {
        shadow.style.setProperty('--shadow-s', (0.35 + 0.65 * pose.near).toFixed(3));
        shadow.style.setProperty('--shadow-o', pose.near.toFixed(3));
        shadow.style.setProperty('--shadow-x', `${pose.sx.toFixed(1)}px`);
      });
      scene.setProgress(lastP);
      if (stageActive) scene.start();
    } catch (err) {
      document.documentElement.classList.add('no-gl');
      console.warn('WebGL unavailable, showing the page without the 3D bottle.', err);
    }
    resolve();
  }, 60));
});

const petals = createPetals(document.getElementById('petals'), { count: lowPower ? 20 : 34, reduced });

function setProgress(p) {
  lastP = p;
  scene?.setProgress(p);
  petals.setProgress(p);

  // the sentence lifts away word by word, softly
  words.forEach((w, i) => {
    const t = range(p, 0.015 + i * 0.012, 0.085 + i * 0.012);
    w.style.transform = t ? `translate3d(0, ${-t * 3.5}rem, 0)` : '';
    w.style.opacity = String(Math.max(0, 1 - t * 1.4));
    if (!reduced) w.style.filter = t ? `blur(${(t * 8).toFixed(1)}px)` : '';
  });
  cue.style.opacity = String(1 - range(p, 0, 0.03));

  ghosts.forEach((update, i) => {
    const [a, b, c, d] = GHOST_TIMES[i];
    if (update(range(p, a, b), range(p, c, d))) sound.chime();
  });

  // on phones the note waits for the last beat, so it never covers the hibiscus or the leaves
  const asideIn = narrow
    ? range(p, 0.79, 0.83) * (1 - range(p, 0.9, 0.94))
    : range(p, 0.24, 0.3) * (1 - range(p, 0.86, 0.92));
  aside.style.opacity = String(asideIn);
  aside.style.transform = `translateY(${(1 - asideIn) * 0.75}rem)`;
  aside.style.pointerEvents = asideIn > 0.5 ? 'auto' : 'none';

  // a breath of air while the bottle rises through the petals
  const rising = p > 0.03 && p < 0.2 ? 1 : 0;
  sound.air(rising * Math.min(Math.abs(lenis.velocity) / 30, 1));
}

ScrollTrigger.create({
  trigger: stage,
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: (self) => setProgress(self.progress),
  onToggle: (self) => {
    stageActive = self.isActive;
    sound.stage(self.isActive);
    if (self.isActive) { scene?.start(); petals.start(); } else { scene?.stop(); petals.stop(); }
  },
});

// each section after the stage opens like a door as it reaches the middle of the screen
let lastDoor = 0;
document.querySelectorAll('main > section:not(.stage)').forEach((el, i) => {
  ScrollTrigger.create({
    trigger: el,
    start: 'top 55%',
    end: 'bottom 45%',
    onToggle: (self) => {
      if (!self.isActive || performance.now() - lastDoor < 1500) return;
      lastDoor = performance.now();
      sound.section(i);
    },
  });
});
setProgress(0);
petals.start();

addEventListener('resize', () => { scene?.resize(); petals.resize(); });

// ---------- Nav colour follows the section under it ----------
const nav = document.getElementById('nav');
const themed = [...document.querySelectorAll('[data-nav]')];
function navTheme() {
  const mid = nav.offsetHeight / 2;
  const under = themed.find((sec) => { const r = sec.getBoundingClientRect(); return r.top <= mid && r.bottom > mid; });
  const on = under ? under.dataset.nav : '';
  if (nav.dataset.on !== on) nav.dataset.on = on;
  nav.classList.toggle('is-solid', stage.getBoundingClientRect().bottom <= nav.offsetHeight);
}
lenis.on('scroll', navTheme);
addEventListener('scroll', navTheme, { passive: true });
navTheme();

if (!reduced) {
  // The one glitch on the site: hibiscus and forest copies split apart, then settle
  const glitch = document.querySelector('.glitch');
  ScrollTrigger.create({
    trigger: glitch,
    start: 'top 88%',
    end: 'top 40%',
    onUpdate: ({ progress }) => {
      const g = Math.sin(progress * Math.PI) * (0.55 + 0.45 * Math.sin(progress * 46));
      glitch.style.setProperty('--g', Math.max(0, g).toFixed(3));
    },
  });

  const wide = matchMedia('(min-width: 761px)').matches;
  document.querySelectorAll('.bottle').forEach((b) => {
    const depth = Number(b.dataset.depth) || 0;
    gsap.to(b, {
      y: () => depth * (wide ? -520 : -180),
      ease: 'none',
      scrollTrigger: { trigger: '#float', start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
    });
  });

  gsap.from('.label', {
    rotate: -6,
    y: 60,
    opacity: 0,
    ease: 'none',
    scrollTrigger: { trigger: '.label', start: 'top bottom', end: 'top 65%', scrub: true },
  });
}

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
    ready: Promise.all([sceneReady, document.fonts.ready]),
    reduced,
    onEnter(withSound) {
      setSound(withSound);
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch {}
      document.documentElement.style.overflow = '';
      lenis.start();
      ScrollTrigger.refresh();
    },
  });
}
