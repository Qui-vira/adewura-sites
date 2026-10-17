// Solid botanical silhouettes for the "load ___ ing" loader. 24x24, one fill color.
// Shapes with class="cut" are knocked out in the ground color.
const svg = (body) => `<svg viewBox="0 0 24 24" aria-hidden="true">${body}</svg>`;
const petal = (deg) => `<path transform="rotate(${deg} 12 12)" d="M12 11.2c-2.2-1.6-3.3-4-2.9-6.3.3-1.6 1.6-2.7 2.9-2.7s2.6 1.1 2.9 2.7c.4 2.3-.7 4.7-2.9 6.3z"/>`;

export const icons = [
  // Hibiscus: five petals around a long staminal column
  svg(`${[0, 72, 144, 216, 288].map(petal).join('')}
    <circle cx="12" cy="12" r="2"/>
    <path class="cut" d="M11.6 12h.8l.6 6.4h-2z"/>
    <path d="M12.4 12.2l4.6 4.4-.7.7-4.4-4.4z"/>
    <circle cx="17.6" cy="17.6" r="1.2"/>`),
  // Peperomia pellucida: one heart-shaped leaf on a stem
  svg(`
    <path d="M12 21.2c-4.8-2.6-7.8-6.3-7.8-10.1 0-2.9 1.9-4.9 4.3-4.9 1.4 0 2.6.6 3.5 1.7.9-1.1 2.1-1.7 3.5-1.7 2.4 0 4.3 2 4.3 4.9 0 3.8-3 7.5-7.8 10.1z"/>
    <path class="cut" d="M11.6 8.2h.8v11.4h-.8z"/>
    <path d="M11.4 2.6h1.2v4.2h-1.2z"/>`),
  // Capsule, split in two halves
  svg(`
    <path transform="rotate(-40 12 12)" d="M8 8h8a4 4 0 0 1 0 8H8a4 4 0 0 1 0-8z"/>
    <path class="cut" transform="rotate(-40 12 12)" d="M11.6 8h.8v8h-.8z"/>
    <path class="cut" transform="rotate(-40 12 12)" d="M6.6 10.4h3.2v.9H6.6z"/>`),
  // Mortar and pestle
  svg(`
    <path d="M3 11.4h18v1.4c0 3.9-2.8 6.9-6.6 7.6l.6 1.8H9l.6-1.8C5.8 19.7 3 16.7 3 12.8z"/>
    <path d="M14.6 2.4l1.8 1 -3.6 7.6-1.8-1z"/>
    <path class="cut" d="M5.4 13.2h13.2v.9H5.4z"/>`),
  // Bottle with a label band
  svg(`
    <path d="M8.6 2.4h6.8v3.4H8.6z"/>
    <path d="M7.4 7h9.2c1.1 0 2 .9 2 2v10.6c0 1.1-.9 2-2 2H7.4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2z"/>
    <path class="cut" d="M5.4 11.2h13.2v6H5.4z"/>
    <path d="M8 13.4h8v1.6H8z"/>`),
  // Leaf with a midrib
  svg(`
    <path d="M4.2 19.8C3.6 11.6 8.8 4.4 19.8 4.2c.2 11-7 16.2-15.6 15.6z"/>
    <path class="cut" d="M5.6 18.9l12.6-13 .6.6-12.6 13z"/>`),
  // Drop
  svg(`
    <path d="M12 2.4c3.6 4.6 6.4 8.4 6.4 12 0 3.6-2.9 6.6-6.4 6.6s-6.4-3-6.4-6.6c0-3.6 2.8-7.4 6.4-12z"/>
    <path class="cut" d="M8.6 14.2c.1 1.9 1.3 3.3 3 3.6l-.2 1c-2.2-.4-3.7-2.2-3.8-4.6z"/>`),
];
