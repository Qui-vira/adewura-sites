// The parent's opening, after museum.unesco.org: the wordmark first, then "load ___ ing" with
// objects from all three houses swapping in the gap, then a welcome scene whose Enter turns
// the sound on (browsers only allow sound after a tap).
import { gsap } from 'gsap';
import { icons as naturalIcons } from '../natural/src/icons.js';
import { icons as ategbeIcons } from '../ategbe/src/icons.js';
import { icons as farmersIcons } from '../farmers/src/icons.js';

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// one from each house in turn: bottle-house, crown-house, farm-house
const mixed = [];
for (let i = 0; i < Math.max(naturalIcons.length, ategbeIcons.length, farmersIcons.length); i++) {
  for (const set of [naturalIcons, ategbeIcons, farmersIcons]) if (set[i]) mixed.push(set[i]);
}

function el(tag, cls, html) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
}
const letters = (word) => [...word].map((c) => `<span>${c}</span>`).join('');

export async function runOpening({ ready, reduced, parentName, onEnter }) {
  const overlay = el('div', 'opening');
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', `Welcome to ${parentName}`);
  document.body.appendChild(overlay);

  const target = document.getElementById('wordmark');
  const mark = el('div', 'opening__mark');
  mark.textContent = parentName;
  mark.setAttribute('aria-hidden', 'true');
  overlay.appendChild(mark);

  if (!reduced) {
    // 1. The name sits in the middle, then rises into the header
    gsap.fromTo(mark, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
    await wait(1000);
    const from = mark.getBoundingClientRect();
    const to = target.getBoundingClientRect();
    await gsap.to(mark, {
      x: to.left + to.width / 2 - (from.left + from.width / 2),
      y: to.top + to.height / 2 - (from.top + from.height / 2),
      scale: to.height / from.height,
      duration: 0.8,
      ease: 'expo.inOut',
    });

    // 2. load ___ ing, cycling through the three houses until the page is ready
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
    while (shown < 6 || !isReady) {
      gap.innerHTML = mixed[shown % mixed.length];
      gsap.fromTo(gap.firstChild, { scale: 0.55, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.22, ease: 'power3.out' });
      shown++;
      await wait(400);
    }

    // 3. The gap closes, the word ripples back together, then breaks into dots
    await gsap.to(gap, { width: 0, duration: 0.35, ease: 'power3.inOut', onStart: () => { gap.innerHTML = ''; } });
    const all = [...left.children, ...right.children];
    await gsap.to(all, { y: -8, duration: 0.16, ease: 'power2.out', stagger: 0.035, yoyo: true, repeat: 1 });
    await gsap.to(all, { scale: 0.15, opacity: 0, duration: 0.3, ease: 'power2.in', stagger: 0.03 });
    loader.remove();
  } else {
    await ready;
    mark.style.display = 'none';
  }

  // 4. Welcome
  const welcome = el('div', 'welcome', `
    <div class="welcome__center">
      <p class="welcome__title" aria-hidden="true"></p>
      <p class="welcome__sub">Three houses. One family.</p>
      <div class="family welcome__family" role="img" aria-label="The family: Adewura Natural Medical Centre, the Adewura Giant Farmers Trust Fund and Ilé Àtègbè">
        <span class="family__kid"><img src="img/family/natural.webp" width="340" height="112" alt=""></span>
        <span class="family__kid family__kid--crown"><img src="img/family/crown.webp" width="369" height="240" alt=""></span>
        <span class="family__kid family__kid--ategbe"><img src="img/family/ategbe.webp" width="447" height="93" alt=""></span>
      </div>
      <button class="pill pill--solid welcome__enter" type="button">Enter with sound <span class="pill__dot" aria-hidden="true"></span></button>
    </div>
    <div class="welcome__foot">
      <span>Best with sound on</span>
      <button class="welcome__quiet" type="button">Enter without sound</button>
    </div>`);
  welcome.querySelector('.welcome__title').textContent = parentName;
  overlay.appendChild(welcome);
  if (!reduced) gsap.from(welcome.querySelectorAll('.welcome__center > *'), { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out', stagger: 0.09 });
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
    duration: reduced ? 0.25 : 0.8,
    ease: 'power2.out',
  });
  overlay.remove();
}
