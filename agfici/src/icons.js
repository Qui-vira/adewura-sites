// Solid farm silhouettes for the "load ___ ing" loader. 24x24, one fill color.
// Shapes with class="cut" are knocked out in the ground color.
const svg = (body) => `<svg viewBox="0 0 24 24" aria-hidden="true">${body}</svg>`;

export const icons = [
  // Maize cob with two husk leaves and kernel rows
  svg(`
    <path d="M12 2.6c2.4 0 3.8 3.3 3.8 8.6 0 5.5-1.7 8.6-3.8 8.6s-3.8-3.1-3.8-8.6C8.2 5.9 9.6 2.6 12 2.6z"/>
    <path class="cut" d="M10.6 6.2h2.8v.9h-2.8zM10.2 8.6h3.6v.9h-3.6zM10 11h4v.9h-4zM10.1 13.4h3.8v.9h-3.8zM10.4 15.8h3.2v.9h-3.2z"/>
    <path d="M8.9 9.2c-2.7 3-3.6 7.2-2.5 12.3 1.4-2 3.1-3 5-3.3-1.9-2.1-2.6-5.1-2.5-9zM15.1 9.2c2.7 3 3.6 7.2 2.5 12.3-1.4-2-3.1-3-5-3.3 1.9-2.1 2.6-5.1 2.5-9z"/>`),
  // Hoe
  svg(`
    <path d="M17.9 4.4l1.6 1.6L6.3 19.2l-1.6-1.6z"/>
    <path d="M15.2 2.4l3.1-.6 3.9 3.9-.6 3.1c-.4 2-2.6 2.8-4 1.4l-3.8-3.8c-1.4-1.4-.6-3.6 1.4-4z"/>`),
  // Garri sack, tied at the neck
  svg(`
    <path d="M7.3 7.4C5.4 10.2 4.2 13.8 4.2 17c0 3 3.5 4.6 7.8 4.6s7.8-1.6 7.8-4.6c0-3.2-1.2-6.8-3.1-9.6z"/>
    <path d="M8.4 6.4h7.2l-1.3-1.9 1.7-2.4c-1.5.5-2.8.5-4 0-1.2.5-2.5.5-4 0l1.7 2.4z"/>
    <path class="cut" d="M6.2 13.2c3.8 1.2 7.8 1.2 11.6 0l.3 1.3c-4 1.3-8.2 1.3-12.2 0z"/>`),
  // Seedling in a soil mound
  svg(`
    <path d="M2.8 21.6c2-2.8 5.4-4.3 9.2-4.3s7.2 1.5 9.2 4.3z"/>
    <path d="M11.2 9.8h1.6v8.2h-1.6z"/>
    <path d="M12 11.4C11.6 7.6 8.7 5.3 4.2 5.5c.2 4.2 3.2 6.5 7.8 5.9z"/>
    <path d="M12 9.8c.3-3.8 3.1-6.6 7.9-6.7-.1 4.5-3.1 6.9-7.9 6.7z"/>`),
  // Woven basket
  svg(`
    <path d="M6.6 10.2a5.4 5.4 0 0 1 10.8 0h-1.9a3.5 3.5 0 0 0-7 0z"/>
    <path d="M2.6 10.4h18.8l-2.2 10c-.2 1-1.1 1.6-2.1 1.6H6.9c-1 0-1.9-.6-2.1-1.6z"/>
    <path class="cut" d="M5.4 13.2h13.2v1H5.4zM6 16.4h12v1H6zM8.6 12.2h1v8.6h-1zM14.4 12.2h1v8.6h-1z"/>`),
  // Tractor wheel with tread lugs
  svg(`
    <path fill-rule="evenodd" d="M12 2.2a9.8 9.8 0 1 1 0 19.6 9.8 9.8 0 0 1 0-19.6zm0 5.6a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4z"/>
    <circle class="cut" cx="12" cy="12" r="2.2"/>
    <circle cx="12" cy="12" r="1.2"/>
    <path class="cut" d="M11.4 2.2h1.2v2.2h-1.2zM11.4 19.6h1.2v2.2h-1.2zM2.2 11.4h2.2v1.2H2.2zM19.6 11.4h2.2v1.2h-2.2zM4.6 5.5l.9-.9 1.6 1.6-.9.9zM16.9 17.8l.9-.9 1.6 1.6-.9.9zM18.5 4.6l.9.9-1.6 1.6-.9-.9zM6.2 16.9l.9.9-1.6 1.6-.9-.9z"/>`),
];
