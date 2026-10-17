# Parent homepage design system

Built 17 Oct 2026 for PLAN.md section 0 (Option 3: one parent, three houses, one domain). Working name "Adewura", always rendered as `<span data-parent-name>`, so `tools/build.mjs` swaps it from `site.config.json`. The `<title>`, `og:title` and the JSON-LD `name` also say "Adewura" and need the same swap by hand once the client picks the real name.

## World

A quiet, warm front hall that belongs to none of the three houses. Paper ground, deep warm ink, one clay accent. The houses bring their own colors, fonts and 3D objects; the parent only frames them. No black panels, no glow.

## Color

| Token | Hex | Role | Contrast |
|---|---|---|---|
| --paper | #F5EFE4 | Page and opening ground | |
| --paper-2 | #EBE2D2 | Footer | |
| --ink | #2B2420 | Text | 13.3:1 on paper |
| --ink-2 | #5E544B | Secondary text | 6.5:1 on paper, 5.7:1 on paper-2 |
| --clay | #8E4F33 | Second tone of the two-tone title, focus rings | 5.5:1 on paper |

Doors use each house's own pair: Natural mint #F2F5EC on forest #467041 (5.2:1), Àtègbè indigo #301F93 on amber #FFB100 (6.6:1), Trust Fund olive #403F2B on butter #F7F290 (9.2:1).

## Type

- Display: Noto Serif Display, light to regular. Body: Noto Sans. Both cover every Yoruba letter. Self-hosted from `fonts/` (file names had a `%` from the fetch script; renamed so the URLs are valid).
- Each door sets its house's name in that house's own display font: Young Serif, Cormorant Garamond, Archivo Expanded Black.

## Sequence

1. Opening after museum.unesco.org: the name in the middle, then it rises into the header. "load ___ ing" cycles icons from all three houses in turn (imported from each house's `icons.js`), at least six, until fonts are ready. Welcome: the name, "Three houses. One family.", the three names, "Enter with sound" and "Enter without sound". Plays once per browser session.
2. Stage, 560svh, sticky: the sentence "Three houses. One family." with soil dust, hibiscus petals and divination powder drifting together; words blow away on scroll.
3. Three doors slide up one over the last (the reel's color panels). Each is the house's ground with its live 3D object, imported on demand from `../<house>/src/scene.js`. The object rises as its door arrives, then idles around a resting pose. Only doors on screen render.
4. Visit: the house's ground floods out from the click point, then the browser goes to the house, whose own opening takes over. Book a call: `data-booking` links, email fallbacks until booking pages exist.

Resting poses (each house's own scroll progress): Natural 0.315 (label forward, level), Àtègbè 0.32, Trust Fund 0.4.

## Motion

- Easing cubic-bezier(0.23, 1, 0.32, 1) for UI, never ease-in. Press scale 0.97.
- Reduced motion: no loader animation, no idle sway, fades only.

## Sound (placeholder until ElevenLabs)

Web Audio: a soft open fifth (D, A, E) that breathes slowly, a bell in a different note as each house arrives, a quiet tap on buttons. Starts only after Enter with sound.

## Copy pending client approval

"Three houses. One family." and the one-line description on each door are placeholders built from each house's existing text. The parent makes no other claims.
