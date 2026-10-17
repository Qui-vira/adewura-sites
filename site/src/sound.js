// Placeholder sound for the parent, synthesized with the Web Audio API until the ElevenLabs
// files arrive: a soft open fifth that breathes slowly, a low bell when a house slides in,
// and a quiet tap on buttons. Nothing plays until start() runs inside the Enter click.
export function createSound() {
  let ctx, master;
  let on = false;

  function bed() {
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 700;
    const g = ctx.createGain();
    g.gain.value = 0;
    g.gain.linearRampToValueAtTime(0.045, ctx.currentTime + 5);
    filter.connect(g).connect(master);
    // D3, A3, E4: an open, unresolved sound that belongs to none of the three houses
    for (const [f, amp] of [[146.83, 0.3], [220.0, 0.22], [329.63, 0.12]]) {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = f;
      const v = ctx.createGain();
      v.gain.value = amp;
      const lfo = ctx.createOscillator();
      const depth = ctx.createGain();
      lfo.frequency.value = 0.05 + Math.random() * 0.05;
      depth.gain.value = amp * 0.5;
      lfo.connect(depth).connect(v.gain);
      o.connect(v).connect(filter);
      o.start();
      lfo.start();
    }
  }

  function bell(freq, level = 0.06) {
    const t = ctx.currentTime;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(level, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 3.2);
    g.connect(master);
    for (const [mult, amp] of [[1, 1], [2.76, 0.3], [5.4, 0.12]]) {
      const o = ctx.createOscillator();
      o.frequency.value = freq * mult;
      const a = ctx.createGain();
      a.gain.value = amp;
      o.connect(a).connect(g);
      o.start(t);
      o.stop(t + 3.3);
    }
  }

  return {
    get on() { return on; },
    start() {
      if (!ctx) {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
        master = ctx.createGain();
        master.connect(ctx.destination);
        bed();
      }
      ctx.resume();
      on = true;
      master.gain.setTargetAtTime(0.9, ctx.currentTime, 0.5);
    },
    stop() {
      if (!ctx) return;
      on = false;
      master.gain.setTargetAtTime(0, ctx.currentTime, 0.3);
    },
    // a house arrives: each gets its own note
    house(i) { if (ctx && on) bell([196.0, 220.0, 246.94][i] || 220); },
    tap() {
      if (!ctx || !on) return;
      const t = ctx.currentTime;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.frequency.value = 880;
      g.gain.setValueAtTime(0.05, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
      o.connect(g).connect(master);
      o.start(t);
      o.stop(t + 0.1);
    },
  };
}
