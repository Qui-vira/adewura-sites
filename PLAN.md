# Plan and design system: three-site rebrand

Status: plan only. Nothing is built yet. Items marked APPROVE need your yes before the build starts. Items marked CLIENT need an answer from the client.

Decisions made by you (17 Oct 2026):

- Option 2: three separate identities. Nothing visibly connects the sites.
- The design reference is your Instagram reel (instagram.com/reel/DbgjytGySiQ, by suryaxtech). The website references I suggested are rejected.
- The opening reference is how museum.unesco.org loads (section 2), from your screen recording.
- Static HTML. One WebGL 3D hero per site, CSS depth everywhere else.
- Presentation prototypes. No payments yet, no Wix.
- One repo, `adewura-sites`, one folder per site. Private preview links on Vercel or Netlify.
- Keep each brand's signature hue. Bright brand-color sections are welcome. Banned: neon glow on black, and black or near-black panels.
- Copy: clean up and keep meaning. Pages: homepage plus 3 to 4 key pages each.
- Images: originals, AI upscales and new images all happen eventually, each with client approval.
- Hero objects: maize cob (AGFICI), Restoria bottle (Natural), beaded crown (Àtègbè).
- Motion graphics with ElevenLabs voiceover come later, from your prompt and skill.


## 1. The reel, beat by beat

The reel shows a product site for Hungry Tiger Tikka Masala, scrolled on a laptop. Frames are saved in `research/reference-reel/screen-beats.jpg`.

| Beat | What happens | What we take |
|---|---|---|
| 1 | Full red ground with a faint paper grain. The jar rises in from the bottom. Pill-shaped nav buttons, logo centered, a dotted rule under the nav. | Saturated ground with grain, product enters from below, pill buttons, dotted rules |
| 2 | "A NEW ANGLE OF FLAVOR" appears in heavy wide capitals while the jar tumbles in 3D. The words arrive as ghost copies smeared along the scroll, then snap sharp. | The ghost-trail headline, the tumbling object |
| 3 | "BOLD FLAVOR / TIKKA MASALA" centered and huge. Jar rises under it. Small body text and a pill button at the left. | Big centered statement plus a small supporting block |
| 4 | Jar pinned in the middle. Headlines swap around it: "UNWRAP THE ADVENTURE", "A NEW PERSPECTIVE ON TASTE". The jar lies sideways and flips to show its lid. | Object stays put, words move. Each headline gets its own object pose. |
| 5 | Headlines are always a lighter tint of the ground (peach on red), never white. | Tone-on-tone type |
| 6 | Color panels slide in (pink, then apricot) as the jar drops away. "WHAT'S INSIDE", "JUST BOLD TASTE IN EVERY JAR", "TRADITION & CREATION". | Section changes by sliding color panels |
| 7 | Apricot section. Photos float past at different depths and speeds. | The floating photo collage (our CSS depth) |
| 8 | "WHY THE JAR MATTERS" breaks apart in a split pink and teal glitch. | One glitch headline per site, used once |
| 9 | Three cards with text over photos, then a strip of product photos. | Card row and photo strip |
| 10 | Full-screen product photo with "UNLOCK THE MAGIC INSIDE THE JAR" over it. | One full-bleed photo moment |
| 11 | Red "LET'S GET COOKING" with a small icon, then recipe cards with pill tags. | A closing call to action, then cards |

What we leave out: the black "WHAT'S INSIDE" panel (your rule bans black), and any neon glow.


## 2. The opening, from the UNESCO museum site

You sent a screen recording of museum.unesco.org. Frame sheets are in `research/reference-unesco/`. The recording has sound. I can't listen to audio, so the sound design is still yours to describe.

### What UNESCO does

| Time | What happens | What we take |
|---|---|---|
| 0 to 3 s | Plain cream screen. The logo sits in the middle, then slides up into the header. | Logo-first opening |
| 3 to 9 s | "loading" splits into "load ___ ing". Solid dark-brown icons of collection objects pop into the gap and swap about every half second (helmet, portrait, book, drum, sprout, shrine, stool, column). The gap closes, the letters ripple back together, then scatter into dots. A brushstroke spinner turns below. | The split-word loader with the brand's own objects |
| 9 to 18 s | Fades into soft painted clouds in cream and blush. A glass globe floats in the middle. Two-tone title (dark plus rose), one dark pill button, a sound toggle. | A calm welcome scene, two-tone title |
| 20 to 23 s | One sentence: "Cultural objects carry the stories of their communities." Dust blows across the words. "Scroll to explore" cue. | One sentence, with particles that belong to the brand |
| 23 to 32 s | On scroll, the camera pushes through the clouds, dives over a forest, flashes white, and lands inside the 3D building. | The dive that hands over to the 3D hero |
| Between rooms | A "Did you know?" card with a real fact shows while the next room loads. | A fact card instead of a blank wait |

### How each site opens (APPROVE)

The opening comes first. Then the reel's pinned 3D object takes over (section 1).

AGFICI, on butter yellow:
1. Logo in the middle, slides into the header.
2. "load ___ ing" in Archivo, olive. Icons swapping in the gap: maize cob, hoe, garri sack, seedling, goat, basket, tractor wheel.
3. One sentence from the client's copy, "From sustainable farms to empowered futures." Soil dust blows across it.
4. The dust settles into the field and the maize cob rises out of it. The reel's sequence starts.

Adewura Natural, on forest green:
1. Logo in the middle, slides into the header.
2. "load ___ ing" in Young Serif, mint. Icons: hibiscus flower, peperomia leaf, capsule, mortar and pestle, bottle, leaf, drop.
3. One sentence: "Rest is not a luxury." It's built from the Restoria page line "Modern life has made rest feel like a luxury instead of a necessity." Hibiscus petals drift across it.
4. The petals part and the Restoria bottle rises through them.

Ilé Àtègbè, on amber:
1. Logo in the middle, slides into the header.
2. "load ___ ing" in Cormorant Garamond, indigo. Icons: the crown, the ọpọ́n Ifá tray, the òpèlè chain, a cowrie shell, a drum, the irùkẹ̀rẹ̀ whisk, a bead strand.
3. One sentence: "Ilé means house. Àtègbè means stepping into greatness." It comes from the client's history page. Instead of dust, divination powder (ìyẹ̀rọ̀sùn, the powder spread on the Ifá tray; client to confirm spelling and color) drifts across the words.
4. The powder settles and the crown rises out of it.
5. CLIENT: these icons and the powder are sacred. The client approves each one before anything goes public.

### Rules for the opening

- The loader lasts only as long as the page really takes to load. It shows at least three icons (about 1.5 s), then gets out of the way. A returning visitor in the same browser session skips it.
- No percentage counter.
- The page text is in the HTML from the start, so search engines and screen readers never wait for the loader.
- Fact cards show only while something is actually loading, with real facts from the client's copy, for example "Restoria has 350 mg of botanicals per capsule" or "AGFICI grows corn, cashew, teak, bamboo and African walnut."
- Sound: decided in section 2a.

### 2a. Sound and the welcome button (OPEN)

UNESCO has a sound toggle and a "Visit now" button before the experience starts. Browsers only allow sound after a visitor taps something, which is why sites like this put a button first. The trade-off: a button before the content costs some visitors, especially on slow phones. Your call:

- Option A: no button. The site starts silent with a small sound toggle in the corner.
- Option B: an "Enter" button after the loader, which also switches on sound. This is closer to UNESCO's feel.

The ElevenLabs voiceover could live here later: one short spoken line per brand in the welcome scene.


## 3. How the 3D gets built (APPROVE)

The objects are built in code with Three.js, not downloaded. None of them exists as a 3D model, and code lets us build this exact crown and this exact bottle. Scroll drives the object's pose with GSAP ScrollTrigger.

Phone safety:

- The 3D loads after the page is usable.
- Phones get fewer beads and kernels and a lower pixel ratio. A phone that can't run WebGL gets a pre-rendered flipbook of the same object, scrubbed by scroll.
- "Reduce motion" turns off spinning and parallax. Short fades only.
- The 3D stops drawing when it's off screen.


## 4. AGFICI

Who it's for: donors, partners and volunteers deciding whether to support farming work in rural Nigeria.

### Colors (APPROVE)

| Token | Hex | Use | Contrast |
|---|---|---|---|
| butter | #F7F290 | hero ground, the signature | olive on butter 9.2:1 |
| maize | #E8B931 | second full-bleed section | ink on maize 8.0:1 |
| cream | #FEFAF1 | reading sections, cards | ink on cream 14.1:1 |
| leaf | #5E7F2E | one full-bleed section, big headlines only | cream on leaf 4.4:1, large text only |
| ink | #29291F | body text | |
| olive | #403F2B | headlines on butter (tone-on-tone) | |

The old site was 71% dark olive. Olive now lives in the type, not the background.

### Type (APPROVE)

- Headlines: Archivo Expanded Black, uppercase. Wide and heavy, the closest match to the reel's headlines.
- Body: Archivo regular, same family.
- Yoruba test: passed except ǹ, which the browser builds from n plus the tone mark.

### Homepage beats

1. Butter ground. The maize cob rises from below, wrapped in husk.
2. "FROM SUSTAINABLE FARMS" ghosts in. The husk peels back as you scroll.
3. "TO EMPOWERED FUTURES". The cob turns to show the kernels.
4. "GARRI FEEDS A COMMUNITY". The cob lies sideways. Kernels start dropping.
5. Kernels fall into a maize-gold panel: Farming, Empowerment, Community.
6. Cream section: real field photos float at different depths (goats, garri processing, the tractor, the maize field).
7. Glitch headline: "WHY THE SOIL MATTERS", over the client's own text about soil health and farm tools.
8. Full-bleed field photo with "THE WORK IS IN THE FIELD".
9. Leaf-green closing: "GET INVOLVED", then event cards.

Every headline above is a placeholder built from the client's existing copy. Final lines get your approval.

### Pages

Home, Our Story, Projects (Farming, Women's Empowerment, Community, Garri Livelihoods), Events with one event page, Get Involved and Contact.


## 5. Adewura Natural

Who it's for: adults looking for plant-based remedies, in Nigeria and the US, who need to trust the source before they buy.

### Colors (APPROVE)

| Token | Hex | Use | Contrast |
|---|---|---|---|
| forest | #467041 | hero ground, the signature (logo green) | mint on forest 5.2:1 |
| mint | #F2F5EC | headlines on forest (tone-on-tone) | |
| hibiscus | #B4262E | Restoria section ground (the hibiscus in Restoria) | blush on hibiscus 5.3:1 |
| blush | #FFE3E0 | headlines on hibiscus | |
| leaf | #E4EBDC | soft section ground (from the logo) | |
| paper | #F8F6F3 | reading sections | |
| ink | #1E241D | body text | 14.7:1 on paper |

Retired: the template lime #8BC34A (1.9:1, fails as text). The white Restoria bottle pops against forest green the way the red jar pops in the reel.

### Type (APPROVE)

- Headlines: Young Serif. Heavy enough for the reel's scale, but a serif, so it reads as medicine and plants, not snack food.
- Body: Epilogue.
- Yoruba test: both pass except ǹ (built by the browser).

### Homepage beats

1. Forest-green ground. The Restoria bottle rises from below.
2. "QUIET YOUR MIND AT NIGHT" ghosts in. The bottle tumbles to show its label.
3. "HIBISCUS". A hibiscus flower turns beside the bottle.
4. "PEPEROMIA PELLUCIDA". Peperomia leaves drift past. The bottle shows the ingredients panel.
5. "350 MG OF BOTANICALS". The bottle lies sideways and drops away.
6. Hibiscus-red panel slides in: the Restoria story and the order button.
7. Leaf section: the product range floats at different depths.
8. Glitch headline: "WHY PLANTS FIRST", over the client's text about the centre.
9. Paper section: the medical director, his training, Lagos and the US.
10. Forest-green closing: "START WITH RESTORIA", then product cards.

All lines come from the client's current Restoria and About pages, and need your approval.

### Health claims (CLIENT)

Only wording already on the client's site, and every claim flagged for client review. US supplements making structure or function claims need the FDA disclaimer in 21 CFR 101.93. In Nigeria, NAFDAC pre-approves medicine advertising. The client's counsel confirms final wording.

### Pages

Home, Products, Restoria, About, Contact.


## 6. Ilé Àtègbè

Who it's for: people drawn to Ifá and Òrìṣà, from first-time seekers to initiates, many in the US diaspora.

### Colors (APPROVE)

| Token | Hex | Use | Contrast |
|---|---|---|---|
| amber | #FFB100 | hero ground, the signature | indigo on amber 6.6:1 |
| indigo | #301F93 | headlines and bead pattern, from the real crown | 11.4:1 on ivory |
| laterite | #A8431B | second full-bleed section (red earth) | ivory on laterite 5.7:1 |
| ivory | #FFF8E8 | reading sections | |
| ink | #1E1810 | body text | 16.6:1 on ivory |
| gold | #B59055 | ornament and rules only, never text (2.8:1) | |

The amber crown sits on an amber ground, tone-on-tone, the way the red jar sits on red in the reel. The indigo beads carry the contrast.

### Type (APPROVE)

- Headlines: Cormorant Garamond Bold. Ceremonial, and it draws every Yoruba letter.
- Body: Source Serif 4. Made for long reading, and the history pages are long. Draws every Yoruba letter.
- Orbitron, the old sci-fi heading font, is retired.
- Before build: a render test of "Ilé Àtègbè, Ifá, Òrìṣà, Èṣù, Ọ̀ṣun, Àkóṣe, Ẹgbẹ́" at every size, checked by eye.

### Homepage beats

1. Amber ground. The crown rises from below, bead fringe hanging still.
2. "ÀBỌRÚ ÀBỌYÈ ÀBỌṢÍṢẸ" ghosts in. The crown turns slowly and the fringe sways with the scroll.
3. "STEPPING INTO GREATNESS" (the meaning of Àtègbè, from the client's own page).
4. "FIVE HUNDRED YEARS OF IFÁ". The crown tilts to show the top.
5. The crown rises away. A laterite panel slides in: services (Ifá divination, head rogation, receiving Òrìṣà, initiation).
6. Ivory section: the lineage photos float at different depths (the rocks, Oba Adédèjì, the custodian).
7. The glitch beat is replaced here. Glitching sacred words would read as disrespect. The headline settles bead by bead instead.
8. Full-bleed photo of the custodian with "THE THIRD OBA SINCE ÒJÓ IFÁ".
9. Amber closing: "BOOK A DIVINATION", then education cards.

The crown, the Odù signs and the ancestor portraits need the client's approval before going public (CLIENT).

### Pages

Home, History and Custodian, Education, Iwure and the 2026 Prayer Calendar, Contact.


## 7. Motion rules (all three sites)

From the apple-design and emil-design-eng skills. Same rules, different speed per brand.

- Ghost-trail headlines: three to five fading copies of the words, offset in the scroll direction, collapsing to one sharp line. Driven by scroll position, so scrolling back plays it in reverse.
- The 3D object always moves from where it is now, so fast scrolling back and forth never jumps.
- Section panels slide in from the edge they leave by.
- Buttons: shrink to 97% on press, 100 to 160ms.
- Menus: 150 to 250ms, ease-out curve cubic-bezier(0.23, 1, 0.32, 1). Never ease-in.
- Hover effects only on devices with a mouse.
- Only transform and opacity animate.
- Speed: AGFICI quick and punchy. Natural slow and calm. Àtègbè slow and ceremonial.


## 8. Repo layout

```
adewura-sites/
  PRODUCT.md            shared product record
  PLAN.md               this file
  research/             scraped text, screenshots, brand audit, the reel frames, font test
  assets/<site>/        downloaded photos and video, with manifest.json
  agfici/  natural/  ategbe/   one site each, own PRODUCT.md, later DESIGN.md
```

No shared visual code, since the identities are separate. Build tools (image resizing, font subsetting) can be shared because visitors never see them.


## 9. Build order

1. You approve the colors, type, openings and homepage beats in this file, and pick Option A or B for sound.
2. Impeccable's direction step turns each approved brand into a DESIGN.md, with the reel as the binding reference.
3. One 3D hero prototype per site with the opening, the ghost-trail headlines and the object turning on scroll. You see the object turn on scroll before any page gets built around it.
4. Homepages, then the inner pages.
5. Checks: impeccable's design detector, screenshots on desktop and phone, page speed, the Yoruba render test, reduced motion.
6. Preview links, one per site.
7. Later: motion graphics with ElevenLabs voiceover.


## 10. Questions for the client

1. Keep the current logos or design new ones?
2. Restoria: medical brand only, or does AGFICI keep a mention?
3. House spelling of Àtègbè, Òrìṣà and the custodian's name. The old site mixes forms.
4. Current AGFICI events. The ones on the site are from January 2026 or earlier.
5. Which AGFICI photos are real AGFICI work, and which are stock.
6. Full-size originals of the small photos: Natural product shots (about 800px), the medical director portrait (640px), the Àtègbè ancestor portraits (about 220px), the Odù Ifá slides (480x360), both AGFICI videos (368x656 and 480x848).
7. Restoria label artwork file.
8. Approval to show the Àtègbè crown in 3D.
9. Real privacy, terms and refund policies. AGFICI's are unedited Wix templates.
10. Urgent and separate from the redesign: adewuranatural.com is hacked. Change every WordPress password, delete the "itsme" user, remove the 40 spam posts and the casino link, and update WordPress and its plugins.
