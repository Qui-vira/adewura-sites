# Adewura Giant Farmers Trust Fund design system

Approved 17 Oct 2026 for AGFICI, moved to the Trust Fund the same day after the client asked for AGFICI to be left alone. The palette stays because the Trust Fund crown logo is gold and green (sampled #E4C352 and #57EA68). Sources: the designer's Instagram reel (scroll-pinned 3D object, ghost-trail headlines, tone-on-tone type, sliding color panels, floating photos) and the museum.unesco.org opening (logo first, split-word loader, welcome scene with an Enter button that turns sound on, one sentence with particles, a dive into the 3D).

Raise taken from a declined direction (depot destination blind): headline swaps settle with one small overshoot, then hold still.

## World

A sunlit field on a butter-yellow page. The maize cob is the hero object. Soil dust is the particle. Olive lives in the type, never in the background. Quick, punchy motion.

## Color

| Token | Hex | Role |
|---|---|---|
| --butter | #F7F290 | Hero ground, opening ground |
| --maize | #E8B931 | Initiatives panel |
| --cream | #FEFAF1 | Field section, reading surfaces |
| --leaf | #57772B | Closing panel. Cream text on it passes at 4.9:1 |
| --ink | #29291F | Body text |
| --olive | #403F2B | Headlines on butter (9.2:1) |
| --soil | #7A5A36 | Dust particles, small details |

No black, no near-black panels, no glow.

## Type

- Display: Archivo, width 125, weight 900, uppercase, line-height 0.86, tracking -0.02em. Hero headlines up to about 9rem, as in the reel.
- Body: Archivo, width 100, weight 400, 1.0625rem, line-height 1.6, measure 60ch.
- Labels and buttons: Archivo, width 112, weight 650.
- Self-hosted from `fonts/`, with latin, latin-ext and vietnamese subsets so Yoruba renders.

## Components

- Pill buttons: olive fill with butter text, or outline. A circle with an arrow at the right end of primary pills. Press: scale 0.97.
- Nav: pill links left, wordmark centered, pill CTA and sound toggle right, dotted rule underneath.
- Photo tiles: no frames, no rounded-rectangle cards. Photos float at different depths with short factual captions.

## Motion

- Opening: wordmark centered, then slides to the header. "load ___ ing" with farm icons swapping in the gap every 380 ms. Welcome scene with Enter (turns sound on). Soil dust across one sentence.
- Stage: 600vh, sticky viewport. The cob rises from the dust, turns, the husk peels, it lies sideways, kernels fall, it drops away.
- Ghost-trail headlines: five copies smeared along the scroll, collapsing into one with a small overshoot.
- Easing: cubic-bezier(0.23, 1, 0.32, 1) for UI, 150 to 250 ms. Never ease-in.
- Reduced motion: no loader animation, no ghost layers, no spinning cob. Fades only.

## Sound (placeholder until ElevenLabs)

Built with the Web Audio API in code: a warm pad with thumb-piano plucks, wind when the cob rises, a dry seed tap on buttons. Starts only after Enter. Toggle in the nav.

## Trust Fund content (17 Oct 2026)

- Name: Adewura Giant Farmers Trust Fund (the old site says "Adewura Giant Farmers, Inc").
- Logo: the crown emblem, `img/crown-logo-*.webp`, trimmed from the old site's IMG_4024-1.png.
- Real copy used: the mission statement and the four program names (Corn Field, Livestock Farming, Poultry Farming, Plantain Farming).
- Headlines: "Organic nurturing" (the old hero line), "Corn field", "Affordable organic food" (from the mission).
- Not used: the template filler on the old site (4.8 Google rating, (123) 456-7890, the Emma Fieldsworth testimonial, lorem ipsum) and the four Pixabay stock photos.
- Still needed from the client: real farm photos, a description for each program, a phone number, and the booking link.
- No AGFICI words or photos remain in this folder.
