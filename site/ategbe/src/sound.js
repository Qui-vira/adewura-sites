// Ilé Àtègbè's sound: the shared kit (../../src/soundkit.js) at its deepest. A throat-sung
// drone on A, low bowls, plucked phrases in A minor pentatonic (A C D E G) and the shaman
// bells more often than on the other pages. The bead fringe rustles only while the crown is
// on screen and goes quiet the moment the visitor leaves it. Each later section opens with
// a soft door whoosh and a bowl.
// Nothing plays until start() runs inside the Enter click, as browsers require.
import { createSoundKit } from '../../src/soundkit.js';

const SCALE = [146.83, 164.81, 196.0, 220.0, 261.63, 293.66, 329.63, 392.0, 440.0];

export function createSound() {
  const kit = createSoundKit({
    scale: SCALE,
    drone: { hz: 55, level: 0.06 },
    bowls: [110, 146.83, 220],
    every: { bowl: [12, 20], phrase: [9, 16], bells: [14, 26] },
  });
  let beadGain, beadFilter, inStage = true;

  // the fringe: sparse clicks rather than smooth hiss, so it reads as beads, not wind
  function beads() {
    const { ctx } = kit;
    const len = Math.floor(ctx.sampleRate * 3);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() < 0.02 ? Math.random() * 2 - 1 : (Math.random() * 2 - 1) * 0.08;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    beadFilter = ctx.createBiquadFilter();
    beadFilter.type = 'bandpass';
    beadFilter.frequency.value = 4200;
    beadFilter.Q.value = 1.2;
    beadGain = ctx.createGain();
    beadGain.gain.value = 0;
    src.connect(beadFilter).connect(beadGain);
    kit.out(beadGain, { reverb: false });
    src.start();
  }

  return {
    get on() { return kit.on; },
    start() {
      kit.start();
      if (!beadGain) beads();
      kit.later(() => kit.bowl(110, 0.06), 600);
    },
    stop() {
      if (beadGain) beadGain.gain.setTargetAtTime(0, kit.ctx.currentTime, 0.05);
      kit.stop();
    },
    // amount 0..1: how fast the fringe is moving; silent once the crown is left behind
    swish(amount) {
      if (!kit.on || !beadGain) return;
      const v = inStage ? Math.min(amount, 1) : 0;
      beadGain.gain.setTargetAtTime(v * 0.5, kit.ctx.currentTime, 0.08);
      beadFilter.frequency.setTargetAtTime(3400 + v * 1800, kit.ctx.currentTime, 0.15);
    },
    // the crown's section is on screen or not
    stage(active) {
      inStage = active;
      if (!active && beadGain) beadGain.gain.setTargetAtTime(0, kit.ctx.currentTime, 0.06);
      if (!active) kit.scroll(0);
    },
    // a new section comes into view: a door opens
    section(i) {
      kit.whoosh(0.32, 2.2, 0.18);
      kit.later(() => kit.bowl([146.83, 110, 196.0, 220][i % 4], 0.045), 900);
    },
    // a single bead touching another
    tap() {
      const { ctx } = kit;
      if (!ctx || !kit.on) return;
      const t = ctx.currentTime;
      const o = ctx.createOscillator();
      o.frequency.setValueAtTime(3100, t);
      o.frequency.exponentialRampToValueAtTime(2400, t + 0.03);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.12, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      o.connect(g);
      kit.out(g, { reverb: false });
      o.start(t);
      o.stop(t + 0.06);
    },
    // a headline settles: a bowl and a few bells
    chime() {
      kit.bowl(220, 0.04);
      kit.jingle(0.22, 3, 9);
    },
  };
}
