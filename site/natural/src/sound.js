// Placeholder sound, synthesized with the Web Audio API until the ElevenLabs files arrive.
// Night-time and calm: a slow minor pad, a breath of air through leaves as the bottle rises,
// a water drop on buttons, a soft two-note chime when a headline lands.
// Nothing plays until start() runs inside the Enter click, as browsers require.

const BELLS = [440.0, 523.25, 587.33, 659.25, 783.99, 880.0]; // A minor pentatonic, upper octave

export function createSound() {
  let ctx, master, airGain, airFilter, bellTimer;
  let on = false;

  function noise(seconds) {
    const len = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    // softened noise: a running average takes the hiss off
    let last = 0;
    for (let i = 0; i < len; i++) { last = last * 0.6 + (Math.random() * 2 - 1) * 0.4; d[i] = last; }
    return buf;
  }

  function pad() {
    // A minor 9: A2 E3 G3 B3 C4, sine voices that breathe in and out slowly
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 720;
    const g = ctx.createGain();
    g.gain.value = 0;
    g.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 6);
    filter.connect(g).connect(master);
    [110.0, 164.81, 196.0, 246.94, 261.63].forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = i < 2 ? 'sine' : 'triangle';
      o.frequency.value = f;
      const v = ctx.createGain();
      v.gain.value = 0.18;
      const lfo = ctx.createOscillator();
      const depth = ctx.createGain();
      lfo.frequency.value = 0.035 + i * 0.011; // each voice swells on its own slow cycle
      depth.gain.value = 0.08;
      lfo.connect(depth).connect(v.gain);
      o.connect(v).connect(filter);
      o.start();
      lfo.start();
    });
  }

  function bell(freq, when = ctx.currentTime, level = 0.035) {
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, when);
    g.gain.linearRampToValueAtTime(level, when + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, when + 3.2);
    g.connect(master);
    for (const [mult, amp] of [[1, 1], [2.76, 0.12]]) {
      const o = ctx.createOscillator();
      o.frequency.value = freq * mult;
      const a = ctx.createGain();
      a.gain.value = amp;
      o.connect(a).connect(g);
      o.start(when);
      o.stop(when + 3.3);
    }
  }

  function startBells() {
    const tick = () => {
      if (!on) return;
      bell(BELLS[Math.floor(Math.random() * BELLS.length)]);
      bellTimer = setTimeout(tick, 5500 + Math.random() * 4500);
    };
    bellTimer = setTimeout(tick, 2500);
  }

  function air() {
    const src = ctx.createBufferSource();
    src.buffer = noise(5);
    src.loop = true;
    airFilter = ctx.createBiquadFilter();
    airFilter.type = 'bandpass';
    airFilter.frequency.value = 800;
    airFilter.Q.value = 0.5;
    airGain = ctx.createGain();
    airGain.gain.value = 0;
    src.connect(airFilter).connect(airGain).connect(master);
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
        pad();
        air();
      }
      ctx.resume();
      on = true;
      master.gain.setTargetAtTime(0.9, ctx.currentTime, 0.6);
      startBells();
    },
    stop() {
      if (!ctx) return;
      on = false;
      clearTimeout(bellTimer);
      master.gain.setTargetAtTime(0, ctx.currentTime, 0.3);
    },
    // amount 0..1: a breath of air through leaves while the bottle rises
    air(amount) {
      if (!ctx || !on) return;
      airGain.gain.setTargetAtTime(Math.min(amount, 1) * 0.12, ctx.currentTime, 0.25);
      airFilter.frequency.setTargetAtTime(600 + amount * 700, ctx.currentTime, 0.3);
    },
    // A water drop for buttons: a sine that falls fast in pitch
    tap() {
      if (!ctx || !on) return;
      const t = ctx.currentTime;
      const o = ctx.createOscillator();
      o.frequency.setValueAtTime(1400, t);
      o.frequency.exponentialRampToValueAtTime(380, t + 0.07);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.18, t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
      o.connect(g).connect(master);
      o.start(t);
      o.stop(t + 0.14);
    },
    chime() {
      if (!ctx || !on) return;
      bell(BELLS[3], ctx.currentTime, 0.05);
      bell(BELLS[5], ctx.currentTime + 0.14, 0.03);
    },
  };
}
