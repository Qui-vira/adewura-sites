// The Trust Fund's sound: the shared kit (../../src/soundkit.js) in daylight. A faint drone on
// C, plucked phrases in C major pentatonic (C D E G A) played more often, wind through the
// maize as the visitor scrolls past the cob, birds now and then, bowls and bells rarely.
// Each later section opens with a soft door whoosh and a pluck.
// Nothing plays until start() runs inside the Enter click, as browsers require.
import { createSoundKit } from '../../src/soundkit.js';

const SCALE = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];

export function createSound() {
  const kit = createSoundKit({
    scale: SCALE,
    drone: { hz: 65.41, level: 0.025 },
    bowls: [196.0, 261.63],
    every: { bowl: [24, 40], phrase: [5, 10], bells: [30, 55] },
    wind: { level: 0.6, low: 420, high: 2400 },
  });

  // a small bird: two to four quick rising whistles
  function bird() {
    const { ctx, rnd } = kit;
    const base = rnd(2400, 3400);
    let t = ctx.currentTime + 0.02;
    const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (pan) pan.pan.value = rnd(-0.8, 0.8);
    for (let k = 0, n = Math.floor(rnd(2, 5)); k < n; k++) {
      const o = ctx.createOscillator();
      o.frequency.setValueAtTime(base, t);
      o.frequency.exponentialRampToValueAtTime(base * rnd(1.25, 1.5), t + 0.07);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.035, t + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
      o.connect(g);
      kit.out(pan ? g.connect(pan) : g);
      o.start(t);
      o.stop(t + 0.1);
      t += rnd(0.11, 0.18);
    }
  }
  kit.addLayer(() => kit.loop(bird, [8, 18]));

  return {
    get on() { return kit.on; },
    start() {
      kit.start();
      kit.later(() => kit.phrase(), 700);
    },
    stop: kit.stop,
    // amount 0..1: wind through the maize while the cob rises
    wind: kit.scroll,
    stage(active) { if (!active) kit.scroll(0); },
    // a new section comes into view: a door opens onto the field
    section(i) {
      kit.whoosh(0.3, 2, 0.12);
      kit.later(() => kit.pluck(SCALE[[3, 4, 5, 2][i % 4]], undefined, { last: true }), 800);
    },
    tap() { kit.jingle(0.2, 1); },
    // a headline settles: a single plucked note and a bell
    chime() {
      if (!kit.on) return;
      kit.pluck(SCALE[5]);
      kit.jingle(0.15, 2, 9);
    },
  };
}
