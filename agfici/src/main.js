import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createScene } from './scene.js';
import { createGhost } from './ghost.js';
import { createDust } from './dust.js';
import { createSound } from './sound.js';
import { runOpening } from './opening.js';

gsap.registerPlugin(ScrollTrigger);

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lowPower = (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4 || innerWidth < 760;
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const range = (p, a, b) => clamp01((p - a) / (b - a));
const SESSION_KEY = 'agfici-entered';

// ---------- Smooth scroll ----------
const lenis = new Lenis({ autoRaf: false, anchors: true, lerp: reduced ? 1 : 0.1 });
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

// ---------- Stage: 3D cob, dust, ghost headlines ----------
const stage = document.querySelector('.stage');
const gl = document.getElementById('gl');
const shadow = document.getElementById('shadow');
const aside = document.getElementById('aside');
const cue = document.querySelector('.intro__cue');
const line = document.querySelector('.intro__line');

// split the opening sentence into words so the wind can carry them off one by one
line.innerHTML = line.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(' ');
const words = [...line.querySelectorAll('.w')];

const ghosts = [...document.querySelectorAll('[data-ghost]')].map((el) => createGhost(el, { blur: !lowPower && !reduced }));
const GHOST_TIMES = [
  [0.15, 0.21, 0.3, 0.35],
  [0.36, 0.42, 0.52, 0.57],
  [0.58, 0.64, 0.84, 0.9],
];

// The cob is built a moment after the opening starts, so compiling it never freezes the logo
let scene = null;
let stageActive = true;
const sceneReady = new Promise((resolve) => {
  requestAnimationFrame(() => setTimeout(() => {
    try {
      scene = createScene(gl, { lowPower, reduced });
      scene.onFrame((pose) => {
        const near = clamp01(1 - Math.abs(pose.y) / 3);
        shadow.style.setProperty('--shadow-s', (0.35 + 0.65 * near).toFixed(3));
        shadow.style.setProperty('--shadow-o', (near * (1 - pose.fall * 0.6)).toFixed(3));
      });
      scene.setProgress(Math.max(lastP, 0));
      if (stageActive) scene.start();
    } catch (err) {
      // No WebGL: the headlines and copy still carry the page
      document.documentElement.classList.add('no-gl');
      console.warn('WebGL unavailable, showing the page without the 3D cob.', err);
    }
    resolve();
  }, 60));
});

const dust = createDust(document.getElementById('dust'), { count: lowPower ? 130 : 230, reduced });

let lastP = -1;
function setProgress(p) {
  scene?.setProgress(p);
  dust.setProgress(p);

  // the sentence blows away word by word
  words.forEach((w, i) => {
    const t = range(p, 0.015 + i * 0.008, 0.075 + i * 0.008);
    w.style.transform = t ? `translate3d(${t * 5}rem, ${-t * 3.2}rem, 0) rotate(${t * 8}deg)` : '';
    w.style.opacity = String(Math.max(0, 1 - t * 1.7));
    if (!reduced) w.style.filter = t ? `blur(${(t * 6).toFixed(1)}px)` : '';
  });
  cue.style.opacity = String(1 - range(p, 0, 0.03));

  ghosts.forEach((update, i) => {
    const [a, b, c, d] = GHOST_TIMES[i];
    if (update(range(p, a, b), range(p, c, d))) sound.chime();
  });

  const asideIn = range(p, 0.38, 0.44) * (1 - range(p, 0.84, 0.9));
  aside.style.opacity = String(asideIn);
  aside.style.transform = `translateY(${(1 - asideIn) * 1}rem)`;
  aside.style.pointerEvents = asideIn > 0.5 ? 'auto' : 'none';

  // wind while the cob rises out of the dust, stronger the faster the visitor scrolls
  const rising = p > 0.03 && p < 0.2 ? 1 : 0;
  sound.wind(rising * Math.min(Math.abs(lenis.velocity) / 35, 1));
  lastP = p;
}

ScrollTrigger.create({
  trigger: stage,
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: (self) => setProgress(self.progress),
  onToggle: (self) => {
    stageActive = self.isActive;
    if (self.isActive) { scene?.start(); dust.start(); } else { scene?.stop(); dust.stop(); }
  },
});
setProgress(0);
dust.start();

addEventListener('resize', () => { scene?.resize(); dust.resize(); });

// ---------- Panels after the stage ----------
const nav = document.getElementById('nav');
ScrollTrigger.create({
  trigger: '#involved',
  start: 'top 8%',
  endTrigger: 'body',
  end: 'bottom bottom',
  onToggle: (self) => { nav.dataset.on = self.isActive ? 'leaf' : ''; },
});

if (!reduced) {
  document.querySelectorAll('.initiative h3').forEach((h, i) => {
    gsap.fromTo(h, { xPercent: i % 2 ? -14 : 14 }, {
      xPercent: 0,
      ease: 'none',
      scrollTrigger: { trigger: h, start: 'top bottom', end: 'top 50%', scrub: true },
    });
  });

  const wide = matchMedia('(min-width: 761px)').matches;
  document.querySelectorAll('.tile').forEach((tile) => {
    const depth = Number(tile.dataset.depth) || 0;
    gsap.to(tile, {
      y: () => depth * (wide ? -520 : -200),
      ease: 'none',
      scrollTrigger: { trigger: '#collage', start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
    });
  });
}

// videos load and play only while on screen
const videoIO = new IntersectionObserver((entries) => {
  for (const { target: v, isIntersecting } of entries) {
    if (isIntersecting) {
      if (!v.src) v.src = v.dataset.src;
      if (!reduced) v.play().catch(() => {});
    } else {
      v.pause();
    }
  }
}, { rootMargin: '200px 0px' });
document.querySelectorAll('video[data-src]').forEach((v) => videoIO.observe(v));

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
