// Adewura Natural's sound: the shared kit (../../src/soundkit.js), calm and healing. A very
// soft drone on A, bowls in a higher register and more often, quiet plucked phrases in A minor
// pentatonic (A C D E G), bells rarely, air through leaves while the bottle rises, and a water
// drop on buttons. Each later section opens with a soft door whoosh and a bowl.
// Nothing plays until start() runs inside the Enter click, as browsers require.
import { createSoundKit } from '../../src/soundkit.js';

const SCALE = [220.0, 261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];

export function createSound() {
  const kit = createSoundKit({
    scale: SCALE,
    drone: { hz: 55, level: 0.022 },
    bowls: [220, 293.66, 440],
    every: { bowl: [10, 18], phrase: [10, 18], bells: [40, 70] },
    wind: { level: 0.4, low: 500, high: 1500 },
    pluckLevel: 0.24,
  });

  return {
    get on() { return kit.on; },
    start() {
      kit.start();
      kit.later(() => kit.bowl(220, 0.055), 800);
    },
    stop: kit.stop,
    // amount 0..1: a breath of air through leaves while the bottle rises
    air: kit.scroll,
    stage(active) { if (!active) kit.scroll(0); },
    // a new section comes into view: a door opens
    section(i) {
      kit.whoosh(0.26, 2.2, 0.1);
      kit.later(() => kit.bowl([293.66, 220, 440, 329.63][i % 4], 0.045), 900);
    },
    // a water drop: a sine that falls fast in pitch
    tap() {
      const { ctx } = kit;
      if (!ctx || !kit.on) return;
      const t = ctx.currentTime;
      const o = ctx.createOscillator();
      o.frequency.setValueAtTime(1400, t);
      o.frequency.exponentialRampToValueAtTime(380, t + 0.07);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.18, t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
      o.connect(g);
      kit.out(g);
      o.start(t);
      o.stop(t + 0.14);
    },
    // a headline settles: a high bowl
    chime() { kit.bowl(440, 0.035); },
  };
}
