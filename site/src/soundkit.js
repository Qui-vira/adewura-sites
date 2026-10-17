// The shared instruments behind every page's sound, synthesized with the Web Audio API.
// Nothing plays until start() runs inside a tap (browsers allow sound only after one).
//   Drone: a low voice through vowel-like filters that drift, after Tibetan throat singing.
//   Bowls: singing bowls whose twin partials beat, so each strike wavers as it rings.
//   Plucks: silk strings by the Karplus-Strong method, in a pentatonic scale, the last note
//   of each phrase pressed and shaken the way a gayageum player does.
//   Bells: small brass bells shaken in bursts, after the bell clusters Korean shamans shake
//   to drive spirits away.
//   Wind: air that follows the scroll speed. Whoosh: a door opening, with the bells after it.
// The bowl, bells and strings are computed into sample buffers once, then played.

// small brass bells: three sizes, each with partials that are not whole-number ratios
const BELLS = [2650, 3300, 4150];
const BELL_PARTIALS = [[1, 1, 0.55], [1.52, 0.6, 0.32], [2.21, 0.35, 0.2], [2.93, 0.18, 0.12]]; // ratio, level, seconds
// singing bowl partials: ratio, level, seconds to fade
const BOWL = [[1, 1, 16], [2.76, 0.5, 9], [5.4, 0.22, 4.5], [8.9, 0.09, 2]];
const BOWL_BASE = 196;

// options, all per page:
//   scale        pluck notes in Hz
//   drone        { hz, level } or null for no drone
//   bowls        bowl pitches the bed picks from
//   every        { bowl, phrase, bells } as [min, max] seconds, or null to skip that layer
//   wind         { level, low, high }: how loud and bright the scroll wind gets
//   pluckLevel   string loudness
export function createSoundKit({
  scale,
  drone = { hz: 73.42, level: 0.05 },
  bowls = [146.83, 196.0, 293.66],
  every = { bowl: [14, 24], phrase: [7, 14], bells: [22, 40] },
  wind = { level: 0.55, low: 260, high: 1560 },
  pluckLevel = 0.32,
} = {}) {
  const kit = { ctx: null, on: false, dry: null, wet: null, noise: null };
  let master, bellIn, windGain, windFilter, bellBufs, bowlBuf;
  let timers = [];
  const strings = new Map();

  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  kit.rnd = rnd;
  kit.pick = pick;

  function noiseBuffer(seconds) {
    const { ctx } = kit;
    const b = ctx.createBuffer(1, Math.round(ctx.sampleRate * seconds), ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }

  // a long, dark hall: decaying noise in two channels
  function reverbBuffer() {
    const { ctx } = kit;
    const len = Math.round(ctx.sampleRate * 5);
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = ir.getChannelData(c);
      for (let i = 0; i < len; i++) {
        const k = 1 - i / len;
        d[i] = (Math.random() * 2 - 1) * k * k * k;
      }
    }
    return ir;
  }

  // one small bell, struck: its partials ring and fade, with the pellet's rattle at the start
  function bellBuffer(freq) {
    const { ctx } = kit;
    const sr = ctx.sampleRate;
    const len = Math.round(sr * 0.7);
    const b = ctx.createBuffer(1, len, sr);
    const d = b.getChannelData(0);
    for (const [ratio, level, secs] of BELL_PARTIALS) {
      const w = (2 * Math.PI * freq * ratio) / sr;
      const ph = Math.random() * 6.28;
      for (let i = 0; i < len; i++) d[i] += level * Math.sin(w * i + ph) * Math.exp(-i / (sr * secs * 0.4));
    }
    let lp = 0;
    for (let i = 0; i < sr * 0.025; i++) {
      const n = Math.random() * 2 - 1;
      lp += (n - lp) * 0.6;
      d[i] += (n - lp) * 0.5 * (1 - i / (sr * 0.025)); // high, papery rattle
    }
    return b;
  }

  // a singing bowl at BOWL_BASE Hz; other pitches play it faster or slower
  function bowlBuffer() {
    const { ctx } = kit;
    const sr = 24000;
    const len = sr * 16;
    const b = ctx.createBuffer(1, len, sr);
    const d = b.getChannelData(0);
    for (const [ratio, level, secs] of BOWL) {
      for (const beat of [0, 0.6 + Math.random() * 2]) {
        const w = (2 * Math.PI * (BOWL_BASE * ratio + beat)) / sr;
        const ph = Math.random() * 6.28;
        for (let i = 0; i < len; i++) d[i] += level * 0.5 * Math.sin(w * i + ph) * Math.exp(-i / (sr * secs * 0.35));
      }
    }
    // the mallet: a soft thump of low noise
    let lp = 0;
    for (let i = 0; i < sr * 0.03; i++) {
      lp += (Math.random() * 2 - 1 - lp) * 0.08;
      d[i] += lp * 1.6 * (1 - i / (sr * 0.03));
    }
    for (let i = 0; i < 120; i++) d[i] *= i / 120; // a gentle onset, so the strike doesn't click
    return b;
  }

  // a plucked silk string by the Karplus-Strong method: a burst of noise circulates in a
  // delay as long as one period, softened a little each time round, as a real string does
  function stringBuffer(freq) {
    if (strings.has(freq)) return strings.get(freq);
    const { ctx } = kit;
    const sr = ctx.sampleRate;
    const len = Math.round(sr * 3.4);
    const N = Math.max(2, Math.round(sr / freq - 0.5));
    const b = ctx.createBuffer(1, len, sr);
    const d = b.getChannelData(0);
    let lp = 0;
    for (let i = 0; i < N; i++) { lp += (Math.random() * 2 - 1 - lp) * 0.5; d[i] = lp; } // a warm, felt-soft pluck
    const loss = 0.4985;
    for (let i = N; i < len; i++) d[i] = loss * (d[i - N] + d[Math.max(0, i - N - 1)]);
    strings.set(freq, b);
    return b;
  }

  // send a node to the room: dry and into the hall
  kit.out = (node, { reverb = true } = {}) => {
    node.connect(kit.dry);
    if (reverb) node.connect(kit.wet);
    return node;
  };

  function build() {
    const ctx = (kit.ctx = new (window.AudioContext || window.webkitAudioContext)());
    master = ctx.createGain();
    master.gain.value = 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.ratio.value = 3;
    master.connect(comp).connect(ctx.destination);
    kit.dry = ctx.createGain();
    kit.dry.connect(master);
    const conv = ctx.createConvolver();
    kit.wet = ctx.createGain();
    kit.wet.gain.value = 0.9;
    kit.wet.connect(conv).connect(master);
    kit.noise = noiseBuffer(3);
    // the heavier buffers are built just after the tap, so it responds at once
    setTimeout(() => { conv.buffer = reverbBuffer(); bellBufs = BELLS.map(bellBuffer); }, 20);
    setTimeout(() => { bowlBuf = bowlBuffer(); }, 60);

    bellIn = kit.out(ctx.createGain());

    // wind: a looped noise that the scroll opens and closes
    const src = ctx.createBufferSource();
    src.buffer = kit.noise;
    src.loop = true;
    windFilter = ctx.createBiquadFilter();
    windFilter.type = 'lowpass';
    windFilter.frequency.value = wind.low;
    windFilter.Q.value = 4; // a soft whistle at the cutoff, as air does past an edge
    windGain = ctx.createGain();
    windGain.gain.value = 0;
    src.connect(windFilter).connect(windGain);
    kit.out(windGain);
    src.start();

    if (drone) droneVoice(drone.hz, drone.level);
  }

  // a low voice: two slightly detuned saws through vowel-like filters that drift slowly
  // between "oo" and "ah", with a soft fifth above
  function droneVoice(hz, level) {
    const { ctx } = kit;
    const g = ctx.createGain();
    g.gain.value = 0;
    g.gain.linearRampToValueAtTime(level, ctx.currentTime + 6);
    kit.out(g);
    const voice = ctx.createGain();
    for (const detune of [-4, 5]) {
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = hz;
      o.detune.value = detune;
      o.connect(voice);
      o.start();
    }
    for (const [base, swing, amp] of [[420, 280, 1], [900, 350, 0.5], [2600, 400, 0.12]]) {
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = base;
      bp.Q.value = 9;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = rnd(0.03, 0.06);
      const depth = ctx.createGain();
      depth.gain.value = swing;
      lfo.connect(depth).connect(bp.frequency);
      lfo.start();
      const a = ctx.createGain();
      a.gain.value = amp;
      voice.connect(bp).connect(a).connect(g);
    }
    const fifth = ctx.createOscillator();
    fifth.frequency.value = hz * 1.5;
    const fg = ctx.createGain();
    fg.gain.value = 0.25;
    fifth.connect(fg).connect(g);
    fifth.start();
  }

  // a singing bowl: the strike rings for many seconds, wavering as its twin partials beat
  kit.bowl = (freq = 293.66, level = 0.05) => {
    const { ctx } = kit;
    if (!ctx || !kit.on || !bowlBuf) return;
    const src = ctx.createBufferSource();
    src.buffer = bowlBuf;
    src.playbackRate.value = freq / BOWL_BASE;
    const g = ctx.createGain();
    g.gain.value = level * 2.2;
    src.connect(g);
    kit.out(g);
    src.start();
  };

  // one plucked silk string; the last note of a phrase is pressed and shaken (nonghyeon)
  // and may fall a whole tone at the end
  kit.pluck = (freq, when, { last = false, level = pluckLevel } = {}) => {
    const { ctx } = kit;
    const t = when ?? ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = stringBuffer(freq);
    const g = ctx.createGain();
    g.gain.value = level;
    const body = ctx.createBiquadFilter();
    body.type = 'peaking'; // the wooden body
    body.frequency.value = 520;
    body.Q.value = 1.2;
    body.gain.value = 5;
    src.connect(body).connect(g);
    kit.out(g);
    if (last) {
      const lfo = ctx.createOscillator();
      lfo.frequency.value = rnd(4.8, 6.2);
      const depth = ctx.createGain();
      depth.gain.setValueAtTime(0, t);
      depth.gain.linearRampToValueAtTime(rnd(25, 45), t + 1.2);
      lfo.connect(depth).connect(src.detune);
      lfo.start(t);
      lfo.stop(t + 3.4);
      if (Math.random() < 0.5) src.detune.setTargetAtTime(-200, t + 1.6, 0.35);
    } else if (Math.random() < 0.3) {
      // a grace slide up into the note
      src.detune.setValueAtTime(-100, t);
      src.detune.linearRampToValueAtTime(0, t + 0.09);
    }
    src.start(t);
  };

  kit.phrase = () => {
    if (!kit.on || !scale) return;
    let i = Math.floor(rnd(1, scale.length - 2));
    let t = kit.ctx.currentTime + 0.05;
    const count = Math.floor(rnd(2, 6));
    for (let k = 0; k < count; k++) {
      kit.pluck(scale[i], t, { last: k === count - 1 });
      t += rnd(0.32, 0.85);
      i = Math.max(0, Math.min(scale.length - 1, i + pick([-2, -1, -1, 1, 1, 2])));
    }
  };

  // the bells shaken: a run of shakes, each one striking two or three bells at once
  kit.jingle = (level = 0.5, shakes = 5, rate = 10) => {
    const { ctx } = kit;
    if (!ctx || !kit.on || !bellBufs) return;
    const t0 = ctx.currentTime + 0.02;
    for (let k = 0; k < shakes; k++) {
      const t = t0 + k / rate + rnd(-0.012, 0.012);
      const fade = 1 - k / (shakes + 2);
      for (let j = 0, n = Math.floor(rnd(2, 4)); j < n; j++) {
        const s = ctx.createBufferSource();
        s.buffer = pick(bellBufs);
        s.playbackRate.value = rnd(0.94, 1.08);
        const g = ctx.createGain();
        g.gain.value = level * 0.22 * rnd(0.4, 1) * fade;
        const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
        if (pan) { pan.pan.value = rnd(-0.5, 0.5); s.connect(g).connect(pan).connect(bellIn); }
        else s.connect(g).connect(bellIn);
        s.start(t + j * rnd(0.003, 0.012));
      }
    }
  };

  // a door opening: a swell of air that opens, a low breath under it, the bells after it
  kit.whoosh = (level = 0.5, length = 2.4, bells = 0.26) => {
    const { ctx } = kit;
    if (!ctx || !kit.on) return;
    const t = ctx.currentTime;
    const s = ctx.createBufferSource();
    s.buffer = kit.noise;
    s.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.Q.value = 0.7;
    bp.frequency.setValueAtTime(180, t);
    bp.frequency.exponentialRampToValueAtTime(2600, t + length * 0.45);
    bp.frequency.exponentialRampToValueAtTime(320, t + length);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(level, t + length * 0.45);
    g.gain.exponentialRampToValueAtTime(0.0001, t + length);
    s.connect(bp).connect(g);
    if (ctx.createStereoPanner) {
      const pan = ctx.createStereoPanner();
      pan.pan.setValueAtTime(-0.6, t);
      pan.pan.linearRampToValueAtTime(0.6, t + length);
      kit.out(g.connect(pan));
    } else kit.out(g);
    s.start(t, rnd(0, 2));
    s.stop(t + length + 0.1);
    // the low breath of a heavy door
    const o = ctx.createOscillator();
    o.frequency.setValueAtTime(48, t + length * 0.3);
    o.frequency.exponentialRampToValueAtTime(34, t + length);
    const og = ctx.createGain();
    og.gain.setValueAtTime(0.0001, t + length * 0.3);
    og.gain.exponentialRampToValueAtTime(0.12 * (level / 0.5), t + length * 0.5);
    og.gain.exponentialRampToValueAtTime(0.0001, t + length * 1.1);
    o.connect(og).connect(kit.dry);
    o.start(t + length * 0.3);
    o.stop(t + length * 1.2);
    if (bells) setTimeout(() => kit.jingle(bells, 6, 11), length * 520);
  };

  // scroll speed, roughly 0 to 1: the wind rises and brightens with it
  kit.scroll = (speed) => {
    const { ctx } = kit;
    if (!ctx || !kit.on) return;
    const v = Math.min(1, Math.abs(speed));
    const t = ctx.currentTime;
    windGain.gain.setTargetAtTime(wind.level * Math.pow(v, 0.8), t, v > 0.02 ? 0.15 : 0.6);
    windFilter.frequency.setTargetAtTime(wind.low + (wind.high - wind.low) * v, t, 0.25);
  };

  // the bed plays itself: each layer at its own loose interval
  kit.loop = (fn, [min, max]) => {
    const id = setTimeout(function tick() {
      if (kit.on) fn();
      timers.push(setTimeout(tick, rnd(min, max) * 1000));
    }, rnd(min * 0.4, max * 0.6) * 1000);
    timers.push(id);
  };

  // extra layers a page adds; they run again on every start
  const extras = [];
  kit.addLayer = (fn) => extras.push(fn);

  kit.start = () => {
    if (!kit.ctx) build();
    kit.ctx.resume();
    kit.on = true;
    master.gain.setTargetAtTime(0.9, kit.ctx.currentTime, 0.6);
    timers.forEach(clearTimeout);
    timers = [];
    if (every.bowl) kit.loop(() => kit.bowl(pick(bowls), 0.045), every.bowl);
    if (every.phrase) kit.loop(kit.phrase, every.phrase);
    if (every.bells) kit.loop(() => kit.jingle(0.3, Math.floor(rnd(3, 7)), rnd(8, 12)), every.bells);
    extras.forEach((fn) => fn());
  };
  kit.stop = () => {
    if (!kit.ctx) return;
    kit.on = false;
    timers.forEach(clearTimeout);
    timers = [];
    master.gain.setTargetAtTime(0, kit.ctx.currentTime, 0.3);
  };
  // a page's scheduled extras use this so stop() cancels them too
  kit.later = (fn, ms) => timers.push(setTimeout(() => kit.on && fn(), ms));

  return kit;
}
