// The parent's sound: the shared kit (soundkit.js) with a throat-sung drone on D, bowls,
// plucked phrases in G pentatonic (G A B D E, the scale of many Korean folk songs) and the
// shaman bells. Scrolling raises the wind; each cloud bank opens like a door.
import { createSoundKit } from './soundkit.js';

const SCALE = [196.0, 220.0, 246.94, 293.66, 329.63, 392.0, 440.0, 493.88, 587.33];

export function createSound() {
  const kit = createSoundKit({ scale: SCALE, drone: { hz: 73.42, level: 0.05 }, bowls: [146.83, 196.0, 293.66] });
  return {
    get on() { return kit.on; },
    start() {
      kit.start();
      kit.whoosh(0.25, 2.8); // the way in, as UNESCO's sound starts with a rush of air
      kit.later(() => kit.bowl(146.83, 0.06), 1400);
    },
    stop: kit.stop,
    scroll: kit.scroll,
    // through a cloud bank, into the next house
    passage() { kit.whoosh(); },
    // a house arrives out of the clouds: its own bowl, and the bells
    house(i) {
      kit.bowl([146.83, 196.0, 246.94][i] || 196.0, 0.06);
      kit.jingle(0.35, 4, 9);
    },
    // a button: one small bell
    tap() { kit.jingle(0.28, 1); },
  };
}
