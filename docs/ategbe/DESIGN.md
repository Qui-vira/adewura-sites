# Ilé Àtègbè design system

Approved 17 Oct 2026. Sources: the designer's Instagram reel (scroll-pinned 3D object, ghost-trail headlines, tone-on-tone type, sliding color panels, floating photos) and the museum.unesco.org opening (name first, split-word loader, welcome scene with an Enter button that turns sound on, one sentence with particles, the object rising into view).

Changed for this house: no glitch anywhere, and no overshoot. Sacred words settle; they never bounce or break apart.

## World

A ceremonial house on an amber ground with a fine bead texture. The beaded Àtègbè crown is the hero object, amber on amber like the reel's red jar on red, with indigo carrying the contrast. Divination powder (ìyẹ̀rọ̀sùn) is the particle. Slow, calm motion. Serif type throughout.

## Color

| Token | Hex | Role |
|---|---|---|
| --amber | #FFB100 | Hero ground, opening, closing panel |
| --indigo | #301F93 | Headlines and accents (6.6:1 on amber, 11.4:1 on ivory) |
| --laterite | #A8431B | Services panel. Ivory on it 5.7:1 |
| --ivory | #FFF8E8 | Lineage and custodian sections, type on laterite |
| --ink | #1E1810 | Body text (9.7:1 on amber, 16.6:1 on ivory) |
| --umber | #5A2A0E | Secondary text on amber (6.5:1), hover fill |
| --gold | #B59055 | Rules and ornament only, never text (2.8:1) |
| --gold-text | #7D6037 | Captions on ivory (5.5:1) |
| #FFE2B0 | | Secondary text on laterite (4.8:1) |

No black, no near-black panels, no glow.

## Type

- Display: Cormorant Garamond, 500 to 600. Scroll headlines are set in capitals with 0.02em tracking; section headings in sentence case. Italic for the loader and quiet lines.
- Body: Source Serif 4, 400, 1.0625rem, line-height 1.65, measure 46ch.
- Both faces draw every Yoruba letter (ẹ ọ ṣ and all tone marks), checked character by character and in rendered close-ups.
- Self-hosted from `fonts/`, latin, latin-ext and vietnamese subsets.
- Yoruba runs carry `lang="yo"`.

## Components

- Pills: indigo fill with ivory text; ivory pills on the laterite panel. A ringed circle with an arrow at the right end of primary pills. Press: scale 0.97.
- Nav: text links with soft underlines on the left, the name centered, sound toggle and "Book a divination" on the right, a gold-toned double hairline underneath.
- The double rule: two gold hairlines, used as the house's ornament between heading and text.
- Services: a list with hairline separators, no cards.
- Photos float at different depths. Archive portraits sit on a white mat at their true small size and are never enlarged.

## Motion

- Opening: the name in the middle, then it rises into the header. "load ___ ing" in italic with seven house objects (crown, ọpọ́n Ifá, òpèlè, cowrie, dùndún, irùkẹ̀rẹ̀, bead strand) appearing every 520 ms. The word dissolves like powder. Welcome with "Enter with sound" and "Enter without sound".
- Stage: 600svh, sticky viewport. The sentence sinks into the powder, the powder settles, the crown rises, turns, tilts to show its top, turns back, then rises away. The bead fringe hangs in world space and sways on a damped spring driven by the crown's turn and rise, then settles.
- Ghost-trail headlines: three soft copies trailing along the scroll, collapsing into one line with a cubic ease and no overshoot.
- Easing: cubic-bezier(0.23, 1, 0.32, 1) for UI. Crown pose eases with a 4/s follow, slower than a product turn. Lenis lerp 0.075.
- Reduced motion: no loader animation, no ghost layers, no sway, no parallax. Fades only.

## Sound (placeholder until ElevenLabs)

Built with the Web Audio API in code: a low, slow drone (A and E, breathing at 0.045 Hz, no drums), a bead-fringe swish that follows the fringe's motion, a single bead click on buttons, a soft inharmonic bell when a headline settles. Starts only after Enter. Toggle in the nav.

## Pending the house

The crown in 3D, the loader icons, the divination powder and every portrait need the house's approval before going public.
