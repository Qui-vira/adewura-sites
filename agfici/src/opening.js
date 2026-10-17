// The opening, after museum.unesco.org: the wordmark first, then "load ___ ing" with farm
// icons swapping in the gap, then a welcome scene whose Enter button turns the sound on.
import { gsap } from 'gsap';
import { icons } from './icons.js';

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

function el(tag, cls, html) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
}

function letters(word) {
  return [...word].map((c) => `<span>${c}</span>`).join('');
}

export async function runOpening({ ready, reduced, onEnter }) {
  const overlay = el('div', 'opening');
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Welcome to AGFICI');
  document.body.appendChild(overlay);

  const target = document.getElementById('wordmark');
  const mark = el('div', 'opening__mark', 'AGFICI');
  mark.setAttribute('aria-hidden', 'true');
  overlay.appendChild(mark);

  if (!reduced) {
    // 1. The wordmark sits in the middle, then slides up into the header
    gsap.fromTo(mark, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
    await wait(900);
    const from = mark.getBoundingClientRect();
    const to = target.getBoundingClientRect();
    await gsap.to(mark, {
      x: to.left + to.width / 2 - (from.left + from.width / 2),
      y: to.top + to.height / 2 - (from.top + from.height / 2),
      scale: to.height / from.height,
      duration: 0.75,
      ease: 'expo.inOut',
    });

    // 2. load ___ ing, with icons swapping in the gap until the page is ready
    const loader = el('div', 'loader');
    loader.setAttribute('role', 'status');
    loader.setAttribute('aria-label', 'Loading');
    const left = el('span', 'loader__part', letters('load'));
    const gap = el('span', 'loader__gap');
    const right = el('span', 'loader__part', letters('ing'));
    loader.append(left, gap, right);
    overlay.appendChild(loader);
    gsap.from([...left.children, ...right.children], { opacity: 0, y: 10, stagger: 0.03, duration: 0.4, ease: 'power3.out' });

    let isReady = false;
    Promise.race([ready, wait(7000)]).then(() => { isReady = true; });
    let shown = 0;
    while (shown < 3 || !isReady) {
      gap.innerHTML = icons[shown % icons.length];
      gsap.fromTo(gap.firstChild, { scale: 0.55, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.22, ease: 'power3.out' });
      shown++;
      await wait(380);
    }

    // 3. The gap closes, the letters ripple back into one word, then break into dots
    await gsap.to(gap, { width: 0, duration: 0.35, ease: 'power3.inOut', onStart: () => { gap.innerHTML = ''; } });
    const all = [...left.children, ...right.children];
    await gsap.to(all, { y: -8, duration: 0.16, ease: 'power2.out', stagger: 0.035, yoyo: true, repeat: 1 });
    await gsap.to(all, { scale: 0.15, opacity: 0, duration: 0.3, ease: 'power2.in', stagger: 0.03 });
    loader.remove();
  } else {
    await ready;
    mark.style.display = 'none';
  }

  // 4. Welcome scene. Enter turns the sound on, because browsers only allow sound after a tap.
  const welcome = el('div', 'welcome', `
    <div class="welcome__center">
      <p class="welcome__title" aria-hidden="true">AGFICI</p>
      <p class="welcome__sub">Adewura Giant Farmers International Community Initiative</p>
      <p class="welcome__lede">Advancing food security, education and community-led empowerment in rural Nigeria.</p>
      <button class="pill pill--arrow welcome__enter" type="button">Enter with sound <span class="pill__dot" aria-hidden="true"></span></button>
    </div>
    <div class="welcome__foot">
      <span>Best with sound on</span>
      <button class="welcome__quiet" type="button">Enter without sound</button>
    </div>`);
  overlay.appendChild(welcome);
  const parts = welcome.querySelectorAll('.welcome__center > *');
  if (!reduced) gsap.from(parts, { opacity: 0, y: 24, duration: 0.7, ease: 'power3.out', stagger: 0.08 });
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
    filter: reduced ? 'none' : 'blur(10px)',
    scale: reduced ? 1 : 1.03,
    duration: reduced ? 0.25 : 0.7,
    ease: 'power2.out',
  });
  overlay.remove();
}
