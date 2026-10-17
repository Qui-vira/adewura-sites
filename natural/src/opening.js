// The opening, after museum.unesco.org: the wordmark first, then "load ___ ing" with botanical
// icons swapping in the gap, then a welcome scene whose Enter button turns the sound on.
// Slower and softer than a product launch: this is a medicine brand.
import { gsap } from 'gsap';
import { icons } from './icons.js';

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

function el(tag, cls, html) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
}

const letters = (word) => [...word].map((c) => `<span>${c}</span>`).join('');

export async function runOpening({ ready, reduced, onEnter }) {
  const overlay = el('div', 'opening');
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Welcome to Adewura Natural');
  document.body.appendChild(overlay);

  const target = document.getElementById('wordmark');
  const mark = el('div', 'opening__mark', 'Adewura Natural');
  mark.setAttribute('aria-hidden', 'true');
  overlay.appendChild(mark);

  if (!reduced) {
    // 1. The wordmark settles in the middle, then glides up into the header
    gsap.fromTo(mark, { opacity: 0, y: 16, filter: 'blur(6px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power2.out' });
    await wait(1200);
    const from = mark.getBoundingClientRect();
    const to = target.getBoundingClientRect();
    await gsap.to(mark, {
      x: to.left + to.width / 2 - (from.left + from.width / 2),
      y: to.top + to.height / 2 - (from.top + from.height / 2),
      scale: to.height / from.height,
      duration: 0.95,
      ease: 'power3.inOut',
    });

    // 2. load ___ ing, with botanical icons swapping in the gap until the page is ready
    const loader = el('div', 'loader');
    loader.setAttribute('role', 'status');
    loader.setAttribute('aria-label', 'Loading');
    const left = el('span', 'loader__part', letters('load'));
    const gap = el('span', 'loader__gap');
    const right = el('span', 'loader__part', letters('ing'));
    loader.append(left, gap, right);
    overlay.appendChild(loader);
    gsap.from([...left.children, ...right.children], { opacity: 0, y: 8, stagger: 0.04, duration: 0.6, ease: 'power2.out' });

    let isReady = false;
    Promise.race([ready, wait(7000)]).then(() => { isReady = true; });
    let shown = 0;
    while (shown < 3 || !isReady) {
      gap.innerHTML = icons[shown % icons.length];
      gsap.fromTo(gap.firstChild, { scale: 0.7, opacity: 0, rotate: -8 }, { scale: 1, opacity: 1, rotate: 0, duration: 0.32, ease: 'power2.out' });
      shown++;
      await wait(460);
    }

    // 3. The gap closes and the word breathes out
    await gsap.to(gap, { width: 0, duration: 0.45, ease: 'power2.inOut', onStart: () => { gap.innerHTML = ''; } });
    const all = [...left.children, ...right.children];
    await gsap.to(all, { y: -6, duration: 0.22, ease: 'sine.out', stagger: 0.04, yoyo: true, repeat: 1 });
    await gsap.to(all, { opacity: 0, y: -10, filter: 'blur(4px)', duration: 0.4, ease: 'power2.in', stagger: 0.03 });
    loader.remove();
  } else {
    await ready;
    mark.style.display = 'none';
  }

  // 4. Welcome scene. Enter turns the sound on, because browsers only allow sound after a tap.
  const welcome = el('div', 'welcome', `
    <div class="welcome__center">
      <p class="welcome__title" aria-hidden="true">Adewura Natural</p>
      <p class="welcome__sub">Medical Centre</p>
      <p class="welcome__lede">Your trusted partner in natural remedies.</p>
      <button class="pill pill--mint pill--arrow welcome__enter" type="button">Enter with sound <span class="pill__dot" aria-hidden="true"></span></button>
    </div>
    <div class="welcome__foot">
      <span>Best with sound on</span>
      <button class="welcome__quiet" type="button">Enter without sound</button>
    </div>`);
  overlay.appendChild(welcome);
  const parts = welcome.querySelectorAll('.welcome__center > *');
  if (!reduced) gsap.from(parts, { opacity: 0, y: 18, filter: 'blur(6px)', duration: 0.9, ease: 'power2.out', stagger: 0.1 });
  const enter = welcome.querySelector('.welcome__enter');
  enter.classList.add('no-ring');
  enter.focus({ preventScroll: true });
  welcome.addEventListener('keydown', () => enter.classList.remove('no-ring'), { once: true });

  const withSound = await new Promise((resolve) => {
    enter.addEventListener('click', () => resolve(true), { once: true });
    welcome.querySelector('.welcome__quiet').addEventListener('click', () => resolve(false), { once: true });
  });
  onEnter(withSound);

  await gsap.to(overlay, {
    opacity: 0,
    filter: reduced ? 'none' : 'blur(12px)',
    duration: reduced ? 0.25 : 0.9,
    ease: 'power2.out',
  });
  overlay.remove();
}
