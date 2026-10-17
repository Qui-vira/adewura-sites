// The phone menu on every brand page is a <details> element, so it opens and closes with no
// script at all. This only closes it when the visitor taps outside it or presses Escape.
document.querySelectorAll('details.menu').forEach((menu) => {
  document.addEventListener('click', (e) => { if (menu.open && !menu.contains(e.target)) menu.open = false; });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
  });
});
