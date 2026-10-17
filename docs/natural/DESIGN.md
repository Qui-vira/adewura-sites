# Adewura Natural design system

Approved 17 Oct 2026. Sources: the designer's Instagram reel (scroll-pinned 3D object, ghost-trail headlines, tone-on-tone type, sliding color panels, floating photos, one glitch headline) and the museum.unesco.org opening (logo first, split-word loader, welcome scene with an Enter button that turns sound on, one sentence with particles, the hand-over into the 3D).

Separate identity from AGFICI and Ilé Àtègbè: serif, sentence case, slow motion, hairline rules, a dispensary label as the signature component.

## World

A calm night-time remedy on a forest-green page. The real white Restoria bottle is the hero object, wearing its real label. Hibiscus petals are the particle. Clinical calm, botanical warmth. Slow, soft motion.

## Color

| Token | Hex | Role |
|---|---|---|
| --forest | #467041 | Hero ground, opening, closing (logo green) |
| --forest-deep | #2F4F2B | Headings on light grounds (8.6:1 on paper) |
| --mint | #F2F5EC | Headlines and text on forest (5.2:1) |
| --sage | #C8DDB0 | Second tone on forest, large type only (3.95:1) |
| --hibiscus | #B4262E | Restoria panel |
| --blush | #FFE3E0 | Text on hibiscus (5.3:1) |
| --rose | #F6B8B0 | Second tone on hibiscus, large type only (3.8:1) |
| --leaf | #E4EBDC | The range section |
| --paper | #F8F6F3 | Medical director section, the label card |
| --ink | #1E241D | Body text on light grounds (14.7:1 on paper) |

Retired: the template lime #8BC34A. No black, no near-black panels, no glow.

## Type

- Display: Young Serif 400, sentence case, line-height 0.96, tracking -0.025em. Hero headlines up to about 8.75rem.
- Body: Epilogue 400 and 500, 1.0625rem, line-height 1.65.
- Self-hosted from `fonts/`. Young Serif is converted from the complete TTF, because Google's web subsets drop ẹ and ọ.

## Components

- Pills: mint on forest, forest on light, 1px hairline outlines. A circle with an arrow on primary pills. Press: scale 0.97.
- Text links: underline that darkens on hover.
- Nav: serif wordmark left, text links, sound toggle, Order pill right. Hairline rule underneath. Past the stage the nav takes the color of the section under it.
- The label card: the Restoria bottle label set as a paper card with a forest rule, the facts from the bottle, the price and the order button. Tilted 1.2 degrees.
- Bottles: product photos float at depth, rounded corners, serif captions with the exact product names.

## Motion

- Opening: wordmark fades in with a blur, then glides into the header. "load ___ ing" with botanical icons every 460 ms. Welcome scene with "Enter with sound" and "Enter without sound". Hibiscus petals drift across "Rest is not a luxury." and part as the visitor scrolls.
- Stage: 640svh, sticky viewport. The bottle rises through the petals, tumbles once and lands label-forward, moves aside for the hibiscus flower, shows the label for the peperomia leaves, lies down under "350 mg of botanicals" and drops away.
- Ghost-trail headlines: four copies in sage behind the mint line, collapsing with a small overshoot.
- One glitch: "Why plants first" splits into hibiscus and forest copies as it enters, then settles.
- Smooth scroll lerp 0.075, scene smoothing slower than AGFICI. Easing cubic-bezier(0.22, 0.61, 0.36, 1) for color, cubic-bezier(0.23, 1, 0.32, 1) for presses.
- Reduced motion: no loader animation, no ghost layers, no tumbling. Fades only.

## Sound (placeholder until ElevenLabs)

Built with the Web Audio API in code: a slow A minor pad with rare soft bells, a breath of air through leaves as the bottle rises, a water drop on buttons, a two-note chime when a headline lands. Starts only after Enter. Toggle in the nav.
