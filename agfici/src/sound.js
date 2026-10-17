// Placeholder sound, synthesized with the Web Audio API until the ElevenLabs files arrive.
// Three layers, following the UNESCO reference: a calm bed, a whoosh on the dive, soft taps.
// Nothing plays until start() runs inside the Enter click, as browsers require.

const PENTATONIC = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33]; // C major pentatonic

export function createSound() {
  let ctx, master, windGain, windFilter, pluckTimer;
  let on = false;

  function noiseBuffer(seconds) {
    const len = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  function pad() {
    // Warm held chord: C3 G3 E4 D5, two slightly detuned voices each, through a slow-moving low-pass
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 900;
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.07;
    lfoGain.gain.value = 300;
    lfo.connect(lfoGain).connect(filter.frequency);
    lfo.start();
    const g = ctx.createGain();
    g.gain.value = 0;
    g.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 4);
    filter.connect(g).connect(master);
    for (const f of [130.81, 196.0, 329.63, 587.33]) {
      for (const detune of [-6, 6]) {
        const o = ctx.createOscillator();
        o.type = 'triangle';
        o.frequency.value = f;
        o.detune.value = detune;
        const v = ctx.createGain();
        v.gain.value = f > 400 ? 0.12 : 0.22;
        o.connect(v).connect(filter);
        o.start();
      }
    }
  }

  function pluck(freq, when = ctx.currentTime, level = 0.06) {
    // Thumb-piano-like: sine plus a quiet upper partial, fast decay
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, when);
    g.gain.linearRampToValueAtTime(level, when + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, when + 1.6);
    g.connect(master);
    for (const [mult, amp] of [[1, 1], [4.2, 0.18]]) {
      const o = ctx.createOscillator();
      o.frequency.value = freq * mult;
      const a = ctx.createGain();
      a.gain.value = amp;
      o.connect(a).connect(g);
      o.start(when);
      o.stop(when + 1.7);
    }
  }

  function startPlucks() {
    const tick = () => {
      if (!on) return;
      const n = PENTATONIC[Math.floor(Math.random() * PENTATONIC.length)];
      pluck(n);
      if (Math.random() < 0.35) pluck(n * 1.5, ctx.currentTime + 0.18, 0.035);
      pluckTimer = setTimeout(tick, 1800 + Math.random() * 1800);
    };
    tick();
  }

  function wind() {
    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer(4);
    src.loop = true;
    windFilter = ctx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.frequency.value = 500;
    windFilter.Q.value = 0.8;
    windGain = ctx.createGain();
    windGain.gain.value = 0;
    src.connect(windFilter).connect(windGain).connect(master);
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
        wind();
      }
      ctx.resume();
      on = true;
      master.gain.setTargetAtTime(0.9, ctx.currentTime, 0.4);
      startPlucks();
    },
    stop() {
      if (!ctx) return;
      on = false;
      clearTimeout(pluckTimer);
      master.gain.setTargetAtTime(0, ctx.currentTime, 0.25);
    },
    // amount 0..1, driven by how fast the cob rises out of the dust
    wind(amount) {
      if (!ctx || !on) return;
      windGain.gain.setTargetAtTime(Math.min(amount, 1) * 0.16, ctx.currentTime, 0.12);
      windFilter.frequency.setTargetAtTime(400 + amount * 900, ctx.currentTime, 0.2);
    },
    // A dry seed tap for buttons
    tap() {
      if (!ctx || !on) return;
      const src = ctx.createBufferSource();
      src.buffer = noiseBuffer(0.04);
      const f = ctx.createBiquadFilter();
      f.type = 'highpass';
      f.frequency.value = 2400;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.25, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
      src.connect(f).connect(g).connect(master);
      src.start();
    },
    // One clear note when a headline lands
    chime() {
      if (!ctx || !on) return;
      pluck(PENTATONIC[4], ctx.currentTime, 0.07);
      pluck(PENTATONIC[6], ctx.currentTime + 0.09, 0.04);
    },
  };
}
