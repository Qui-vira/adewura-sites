// Placeholder sound for Ilé Àtègbè, synthesized with the Web Audio API until the ElevenLabs files
// arrive. A low, slow drone (no drum kit), the swish of the bead fringe as the crown rises,
// a single bead click on buttons and a soft bell when a headline settles.
// Nothing plays until start() runs inside the Enter click, as browsers require.

export function createSound() {
  let ctx, master, swishGain, swishFilter;
  let on = false;

  function noiseBuffer(seconds) {
    const len = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    // sparse clicks rather than smooth hiss, so it reads as beads, not wind
    for (let i = 0; i < len; i++) d[i] = Math.random() < 0.02 ? Math.random() * 2 - 1 : (Math.random() * 2 - 1) * 0.08;
    return buf;
  }

  function drone() {
    // A and E low in the register, a soft fifth above, breathing very slowly
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 520;
    const g = ctx.createGain();
    g.gain.value = 0;
    g.gain.linearRampToValueAtTime(0.07, ctx.currentTime + 6);
    const breathe = ctx.createOscillator();
    const depth = ctx.createGain();
    breathe.frequency.value = 0.045;
    depth.gain.value = 0.025;
    breathe.connect(depth).connect(g.gain);
    breathe.start();
    filter.connect(g).connect(master);
    for (const [f, type, amp] of [[55, 'sine', 0.5], [82.41, 'triangle', 0.22], [110, 'sine', 0.2], [164.81, 'sine', 0.07]]) {
      for (const detune of [-4, 4]) {
        const o = ctx.createOscillator();
        o.type = type;
        o.frequency.value = f;
        o.detune.value = detune;
        const v = ctx.createGain();
        v.gain.value = amp;
        o.connect(v).connect(filter);
        o.start();
      }
    }
  }

  function bell(freq, when, level) {
    // inharmonic partials, long gentle decay
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, when);
    g.gain.linearRampToValueAtTime(level, when + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, when + 3.2);
    g.connect(master);
    for (const [mult, amp] of [[1, 1], [2.76, 0.35], [5.4, 0.12]]) {
      const o = ctx.createOscillator();
      o.frequency.value = freq * mult;
      const a = ctx.createGain();
      a.gain.value = amp;
      o.connect(a).connect(g);
      o.start(when);
      o.stop(when + 3.3);
    }
  }

  function swish() {
    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer(3);
    src.loop = true;
    swishFilter = ctx.createBiquadFilter();
    swishFilter.type = 'bandpass';
    swishFilter.frequency.value = 4200;
    swishFilter.Q.value = 1.2;
    swishGain = ctx.createGain();
    swishGain.gain.value = 0;
    src.connect(swishFilter).connect(swishGain).connect(master);
    src.start();
  }

  return {
    get on() { return on; },
    start() {
      if (!ctx) {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
        master = ctx.createGain();
        master.gain.value = 0.9;
        master.connect(ctx.destination);
        drone();
        swish();
      }
      ctx.resume();
      on = true;
      master.gain.setTargetAtTime(0.9, ctx.currentTime, 0.6);
    },
    stop() {
      if (!ctx) return;
      on = false;
      master.gain.setTargetAtTime(0, ctx.currentTime, 0.3);
    },
    // amount 0..1: how fast the fringe is moving
    swish(amount) {
      if (!ctx || !on) return;
      swishGain.gain.setTargetAtTime(Math.min(amount, 1) * 0.5, ctx.currentTime, 0.08);
      swishFilter.frequency.setTargetAtTime(3400 + amount * 1800, ctx.currentTime, 0.15);
    },
    // a single bead touching another
    tap() {
      if (!ctx || !on) return;
      const t = ctx.currentTime;
      const o = ctx.createOscillator();
      o.frequency.setValueAtTime(3100, t);
      o.frequency.exponentialRampToValueAtTime(2400, t + 0.03);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.12, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      o.connect(g).connect(master);
      o.start(t);
      o.stop(t + 0.06);
    },
    chime() {
      if (!ctx || !on) return;
      bell(392, ctx.currentTime, 0.05);
    },
  };
}
