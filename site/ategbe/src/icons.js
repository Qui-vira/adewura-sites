// Solid silhouettes of Àtègbè objects for the "load ___ ing" loader. 24x24, one fill color.
// Shapes with class="cut" are knocked out in the ground color.
const svg = (body) => `<svg viewBox="0 0 24 24" aria-hidden="true">${body}</svg>`;

export const icons = [
  // The crown: domed body, rim band, finial and bead fringe
  svg(`
    <circle cx="12" cy="3.3" r="1.5"/>
    <path d="M11.3 4.4h1.4v1.4h-1.4z"/>
    <path d="M4.8 13.2C4.8 8.6 8 5.6 12 5.6s7.2 3 7.2 7.6z"/>
    <path d="M4.2 13.2h15.6v2.3H4.2z"/>
    <path class="cut" d="M10.6 8.1l1.4-1.9 1.4 1.9h1.7l-.9 1.4.9 1.4h-1.7L12 12.8l-1.4-1.9H8.9l.9-1.4-.9-1.4z"/>
    <path d="M5.4 15.5h1v5.6h-1zM7.5 15.5h1v6.5h-1zM9.6 15.5h1v5.9h-1zM11.7 15.5h1v6.8h-1zM13.8 15.5h1v5.7h-1zM15.9 15.5h1v6.4h-1zM18 15.5h1v5.3h-1z"/>`),
  // Ọpọ́n Ifá: the divination tray, carved rim with a face at the top, marks in the powder
  svg(`
    <path fill-rule="evenodd" d="M12 1.8a10.2 10.2 0 1 1 0 20.4 10.2 10.2 0 0 1 0-20.4zm0 4.4a5.8 5.8 0 1 0 0 11.6 5.8 5.8 0 0 0 0-11.6z"/>
    <circle class="cut" cx="12" cy="4" r="1.5"/>
    <circle cx="12" cy="4" r=".6"/>
    <path d="M9.6 9.4h1.1v1.6H9.6zM13.3 9.4h1.1v1.6h-1.1zM9.6 12.2h1.1v1.6H9.6zM13.3 12.2h.4v1.6h-.4zM14 12.2h.4v1.6H14z"/>`),
  // Òpèlè: the divining chain with eight seed pods
  svg(`
    <path d="M6 2.6c-1.1 6.4-.4 13.3 6 18.8 6.4-5.5 7.1-12.4 6-18.8" fill="none" stroke="currentColor" stroke-width="1.1"/>
    <ellipse cx="5.6" cy="5.6" rx="1.4" ry="2"/>
    <ellipse cx="5.5" cy="10.2" rx="1.4" ry="2"/>
    <ellipse cx="6.6" cy="14.6" rx="1.4" ry="2" transform="rotate(-20 6.6 14.6)"/>
    <ellipse cx="8.9" cy="18.2" rx="1.4" ry="2" transform="rotate(-40 8.9 18.2)"/>
    <ellipse cx="15.1" cy="18.2" rx="1.4" ry="2" transform="rotate(40 15.1 18.2)"/>
    <ellipse cx="17.4" cy="14.6" rx="1.4" ry="2" transform="rotate(20 17.4 14.6)"/>
    <ellipse cx="18.5" cy="10.2" rx="1.4" ry="2"/>
    <ellipse cx="18.4" cy="5.6" rx="1.4" ry="2"/>`),
  // Cowrie shell, toothed opening
  svg(`
    <ellipse cx="12" cy="12" rx="6.8" ry="9.6"/>
    <path class="cut" d="M12 4.4c-.9 2.4-.9 12.8 0 15.2.9-2.4.9-12.8 0-15.2z"/>
    <path class="cut" d="M9.6 7.2h1.6v.8H9.6zM9.3 9.6h1.9v.8H9.3zM9.2 12h2v.8h-2zM9.3 14.4h1.9v.8H9.3zM9.6 16.8h1.6v.8H9.6zM12.8 7.2h1.6v.8h-1.6zM12.8 9.6h1.9v.8h-1.9zM12.8 12h2v.8h-2zM12.8 14.4h1.9v.8h-1.9zM12.8 16.8h1.6v.8h-1.6z"/>`),
  // Dùndún: the hourglass talking drum with its tension cords
  svg(`
    <path d="M4.6 2.4h14.8c-1.8 3.2-3.6 6.4-3.6 9.6s1.8 6.4 3.6 9.6H4.6c1.8-3.2 3.6-6.4 3.6-9.6S6.4 5.6 4.6 2.4z"/>
    <path class="cut" d="M7.6 3.6l.8-.1 3.4 16.9-.8.1zM12.2 3.5h.8l-.4 17h-.8zM15.6 3.5l.8.1-3.4 16.9-.8-.1z"/>
    <path d="M4 1.6h16v1.6H4zM4 20.8h16v1.6H4z"/>`),
  // Irùkẹ̀rẹ̀: the horsetail whisk, beaded handle and flowing hair
  svg(`
    <path d="M10.8 1.6h2.4v1.6h-2.4z"/>
    <path d="M11 3.2h2v7.6h-2z"/>
    <path class="cut" d="M11 4.6h2v.7h-2zM11 6.6h2v.7h-2zM11 8.6h2v.7h-2z"/>
    <path d="M12 10.4c-3.1 2.1-5.1 6.2-5.6 12 1.6-1.5 2.5-1.9 3.3-2 .2 1 .8 1.6 2.3 2 1.5-.4 2.1-1 2.3-2 .8.1 1.7.5 3.3 2-.5-5.8-2.5-9.9-5.6-12z"/>`),
  // A strand of beads with a pendant
  svg(`
    <circle cx="12" cy="3.4" r="1.4"/><circle cx="15.6" cy="4.4" r="1.4"/><circle cx="18.2" cy="7" r="1.4"/>
    <circle cx="19.2" cy="10.6" r="1.4"/><circle cx="18.2" cy="14.2" r="1.4"/><circle cx="8.4" cy="4.4" r="1.4"/>
    <circle cx="5.8" cy="7" r="1.4"/><circle cx="4.8" cy="10.6" r="1.4"/><circle cx="5.8" cy="14.2" r="1.4"/>
    <circle cx="8.6" cy="16.8" r="1.4"/><circle cx="15.4" cy="16.8" r="1.4"/>
    <path d="M12 16.6c1.7 0 3 1.6 3 3.3 0 1.5-1.3 2.5-3 2.5s-3-1-3-2.5c0-1.7 1.3-3.3 3-3.3z"/>`),
];
