import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createScene } from './scene.js';
import { createGhost } from './ghost.js';
import { createPowder } from './powder.js';
import { createSound } from './sound.js';
import { runOpening } from './opening.js';

gsap.registerPlugin(ScrollTrigger);

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lowPower = (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4 || innerWidth < 760;
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const range = (p, a, b) => clamp01((p - a) / (b - a));
const SESSION_KEY = 'ategbe-entered';

// ---------- Smooth scroll, slower than a product page ----------
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
document.addEventListener('pointerdown', (e) => { if (e.target.closest('.pill, .sound, .navlink')) sound.tap(); });

// ---------- Stage: crown, powder, headlines ----------
const stage = document.querySelector('.stage');
const gl = document.getElementById('gl');
const shadow = document.getElementById('shadow');
const aside = document.getElementById('aside');
const cue = document.querySelector('.intro__cue');
const line = document.querySelector('.intro__line');

// wrap each word (keeping the Yoruba language spans) so the sentence can dissolve word by word
function splitWords(node) {
  for (const child of [...node.childNodes]) {
    if (child.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      child.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.append(part); return; }
        const s = document.createElement('span');
        s.className = 'w';
        s.textContent = part;
        frag.append(s);
      });
      child.replaceWith(frag);
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      child.classList.add('w');
    }
  }
}
splitWords(line);
const words = [...line.querySelectorAll('.w')];

const ghosts = [...document.querySelectorAll('[data-ghost]')].map((el) => createGhost(el, { blur: !lowPower && !reduced }));
const GHOST_TIMES = [
  [0.16, 0.23, 0.31, 0.36],
  [0.37, 0.44, 0.53, 0.58],
  [0.59, 0.66, 0.84, 0.9],
];

// The crown is built a moment after the opening starts, so compiling it never freezes the name
let scene = null;
let stageActive = true;
let lastP = 0;
const sceneReady = new Promise((resolve) => {
  requestAnimationFrame(() => setTimeout(() => {
    try {
      scene = createScene(gl, { lowPower, reduced });
      scene.onFrame((pose, motion) => {
        const near = clamp01(1 - Math.abs(pose.y) / 3.5);
        shadow.style.setProperty('--shadow-s', (0.4 + 0.6 * near).toFixed(3));
        shadow.style.setProperty('--shadow-o', near.toFixed(3));
        sound.swish(motion.speed);
      });
      scene.setProgress(lastP);
      if (stageActive) scene.start();
    } catch (err) {
      document.documentElement.classList.add('no-gl');
      console.warn('WebGL unavailable, showing the page without the 3D crown.', err);
    }
    resolve();
  }, 60));
});

const powder = createPowder(document.getElementById('powder'), { count: lowPower ? 180 : 320, reduced });

function setProgress(p) {
  lastP = p;
  scene?.setProgress(p);
  powder.setProgress(p);

  // the sentence dissolves softly, word by word, sinking with the powder
  words.forEach((w, i) => {
    const t = range(p, 0.015 + i * 0.006, 0.08 + i * 0.006);
    w.style.transform = t ? `translate3d(0, ${t * 1.6}rem, 0)` : '';
    w.style.opacity = String(Math.max(0, 1 - t * 1.4));
    if (!reduced) w.style.filter = t ? `blur(${(t * 8).toFixed(1)}px)` : '';
  });
  cue.style.opacity = String(1 - range(p, 0, 0.03));

  ghosts.forEach((update, i) => {
    const [a, b, c, d] = GHOST_TIMES[i];
    if (update(range(p, a, b), range(p, c, d))) sound.chime();
  });

  const asideIn = range(p, 0.4, 0.47) * (1 - range(p, 0.84, 0.9));
  aside.style.opacity = String(asideIn);
  aside.style.transform = `translateY(${(1 - asideIn) * 0.75}rem)`;
  aside.style.pointerEvents = asideIn > 0.5 ? 'auto' : 'none';
}

ScrollTrigger.create({
  trigger: stage,
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: (self) => setProgress(self.progress),
  onToggle: (self) => {
    stageActive = self.isActive;
    if (self.isActive) { scene?.start(); powder.start(); } else { scene?.stop(); powder.stop(); }
  },
});
setProgress(0);
powder.start();
addEventListener('resize', () => { scene?.resize(); powder.resize(); });

// ---------- Panels after the stage ----------
const nav = document.getElementById('nav');
ScrollTrigger.create({
  trigger: '#services',
  start: 'top 8%',
  end: 'bottom 8%',
  onToggle: (self) => { nav.dataset.on = self.isActive ? 'laterite' : ''; },
});

if (!reduced) {
  // the laterite panel slides up over the stage
  gsap.fromTo('#services', { clipPath: 'inset(12% 0 0 0 round 2.5rem 2.5rem 0 0)' }, {
    clipPath: 'inset(0% 0 0 0 round 0rem 0rem 0 0)',
    ease: 'none',
    scrollTrigger: { trigger: '#services', start: 'top bottom', end: 'top 30%', scrub: true },
  });
  gsap.utils.toArray('.services__list li').forEach((li) => {
    gsap.from(li, {
      opacity: 0,
      y: 24,
      duration: 1.1,
      ease: 'power2.out',
      scrollTrigger: { trigger: li, start: 'top 88%', once: true },
    });
  });

  const wide = matchMedia('(min-width: 761px)').matches;
  document.querySelectorAll('.photo').forEach((photo) => {
    const depth = Number(photo.dataset.depth) || 0;
    gsap.to(photo, {
      y: () => depth * (wide ? -460 : -160),
      ease: 'none',
      scrollTrigger: { trigger: '#collage', start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
    });
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
