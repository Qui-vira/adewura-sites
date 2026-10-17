# Plan and design system: three-site rebrand

Status: plan only. Nothing is built yet. Items marked APPROVE need your yes before the build starts. Items marked CLIENT need an answer from the client.

Decisions already made by you (17 Oct 2026):

- Three separate identities. Nothing visibly connects the sites.
- Static HTML. One WebGL 3D hero per site, CSS depth everywhere else.
- Presentation prototypes. No payments yet, no Wix.
- One repo, `adewura-sites`, with one folder per site.
- Private preview links on Vercel or Netlify.
- Keep each brand's signature hue, rebuilt on light or bright grounds.
- Banned look: neon glow on black. Bright brand-color sections are fine.
- Copy: clean up and keep meaning.
- Pages: homepage plus 3 to 4 key pages each.
- Images: originals, AI upscales and new images all happen eventually, each with client approval.
- Hero objects: Restoria bottle (Natural), beaded crown (Àtègbè), maize cob (AGFICI).
- Motion graphics with ElevenLabs voiceover come later, from your prompt and skill.


## 1. The pattern every homepage follows

Taken from your reference reel (the Tikka Masala jar site, saved in `research/reference-reel/`).

1. First screen: the brand's object sits in the middle, big and lit like a product photo. A giant headline sits behind it.
2. As you scroll, the page pins. The object turns, tilts and moves. The headline behind it changes two or three times. Each headline is a short line taken from the client's own copy.
3. The pin releases. The page moves into full-color brand sections, then photo collages, then cards (products, projects or services).
4. It ends with one clear action: order, book, or get involved.

Each brand runs this pattern in its own look. The pattern is shared. The look is not.


## 2. How the 3D gets built

Two ways exist, and the references use both:

- Real-time 3D: the object is built in code with Three.js and moved by scroll. Used by Agrumea, SŌM, LIÁ.
- Frame sequence: the object is pre-rendered as 100 or so still frames, and scroll flips through them like a flipbook. Used by More Nutrition. Cheaper on phones.

Recommendation (APPROVE): build all three objects in real-time Three.js, from code, not from downloaded 3D models. None of the three objects exists as a 3D model today, and code lets us build exactly this crown and this bottle. Then render the same scene once into a frame sequence for weak phones. Every visitor sees the same object either way.

Safety rules for all three:

- A still poster image shows first. The 3D loads after the page is usable.
- No loading screen with a percentage counter.
- Phones get fewer beads and kernels and a lower pixel ratio. If the phone can't run WebGL, it gets the frame sequence.
- People who turn on "reduce motion" get the still poster and simple fades, no spinning.
- The 3D stops drawing when it's off screen.


## 3. AGFICI

Who it's for: donors, partners and volunteers deciding whether to support farming work in rural Nigeria.

### Colors (direction approved, values APPROVE)

| Token | Hex | Use | Contrast |
|---|---|---|---|
| ground | #FEFAF1 | page background (cream, from the old theme) | |
| ground-2 | #F3F1C4 | soft panels (pale butter, from the old theme) | |
| signal | #F7F290 | full-bleed hero and feature sections, buttons | never text on cream (1.1:1, fails) |
| ink | #29291F | headings and body | 14.1:1 on cream |
| olive | #403F2B | secondary text, text on butter yellow | 10.3:1 on cream, 9.2:1 on butter |
| muted | #5C5A2E | captions | 6.8:1 on cream |

The old site was 71% dark olive. In the new one, olive moves from the background to the text. Cream and butter yellow become the page.

### Type (APPROVE)

- Headlines: Anton. Tall, condensed, uppercase, close to the reel's headlines. Passed the Yoruba letter test in full.
- Body: Archivo. Passed except ǹ, which the browser builds from n plus the tone mark.

### 3D hero: the maize cob

- Husk leaves wrap the cob on the first screen. As you scroll, the husk peels back and the kernels show, built one by one (about 800 kernels, in one draw call so phones cope).
- Headlines that swap behind it, from the client's copy: "From sustainable farms", "to empowered futures", "Garri feeds a community".
- At the end of the pin, kernels drop out of frame into the next section, which opens on the garri story.

### Pages

1. Home: maize hero, impact in three cards (Farming, Empowerment, Community), the garri story with real processing photos, events, one video, Get Involved.
2. Our Story: who AGFICI is, the crops, the problem it works on.
3. Projects: Farming, Women's Empowerment, Community, Garri Livelihoods.
4. Events: list plus one event page.
5. Get Involved and Contact: donate (presentation only), volunteer, partner, contact details.

### References (APPROVE)

1. Agrumea Farm, agrumeafarm.it/en. A farm selling jars, built as a scroll-driven Three.js scene on a cream ground. The closest match to your reel. Awwwards Nominee, Oct 2026. Don't copy its "0%" loading screen.
2. Savor, savor.it. Almost AGFICI's own palette: cream #FFF9EB, butter yellow #F8E47D. Stacked one-word-per-line headlines and photo strips. Awwwards Site of the Day, Sep 2025. It's a slick startup, so take the palette and the type rhythm, not the tone.
3. One Acre Fund, oneacrefund.org. A real African smallholder nonprofit. Documentary photos of named farmers in their own fields, sand-colored headline boxes, donate prompts down the page. No 3D. Take the photo honesty and the headline box.


## 4. Adewura Natural

Who it's for: adults looking for plant-based remedies, in Nigeria and the US, who must trust the source before they buy.

### Colors (direction approved, values APPROVE)

| Token | Hex | Use | Contrast |
|---|---|---|---|
| ground | #F8F6F3 | page background (warm off-white, from the old theme) | |
| ground-2 | #E4EBDC | leaf-tint panels (sampled from the logo) | |
| brand | #467041 | forest green from the logo: buttons, links, full-bleed sections | 5.3:1 on ground; white on green 5.8:1 |
| brand-deep | #124D11 | headings on light panels | 9.3:1 |
| ink | #1E241D | body text | 14.7:1 |
| muted | #5B6158 | captions | 5.9:1 |

Retired: the template lime #8BC34A. It reads at 1.9:1 on the background and fails as text.

A second accent for Restoria (hibiscus red from the product photos) gets measured in the direction round.

### Type (APPROVE)

- Headlines: Young Serif. Warm, bold serif with a botanical feel. Passed except ǹ (built by the browser).
- Body: Epilogue. Clean sans with a medical calm. Passed except ǹ.

### 3D hero: the Restoria bottle

- A white capsule bottle with a cap, shaped from the product photos, wearing the Restoria label.
- As you scroll it turns to show the label, then the ingredients panel. Hibiscus petals and peperomia leaves drift around it.
- Headlines from the client's copy: "Finally quiet your mind at night", "Hibiscus", "Peperomia pellucida", "350 mg of botanicals".
- The label is rebuilt from the photo for the prototype. For the final site we need the client's label artwork file (CLIENT).

### Pages

1. Home: Restoria hero, the product range, the medical director, the centre in Lagos and the US.
2. Products: all named products as cards.
3. Restoria: full product page.
4. About: the centre and Dr. Adéwálé's training and lineage.
5. Contact.

### Health claims (CLIENT)

Only wording already on the client's site, and every claim flagged for client review. Two rules apply: US supplements making structure or function claims need the FDA disclaimer in 21 CFR 101.93, and in Nigeria NAFDAC pre-approves medicine advertising. The client's counsel confirms final wording.

### References (APPROVE)

1. SŌM, drinksom.eu. A wellness brand with a real 3D bottle that responds to scroll and mouse, on a white ground with one strong accent. Awwwards Site of the Day, Apr 2026. Swap their red for our forest green.
2. LIÁ Olive Oil, liaoliveoil.com. Olive green, botanical, a 3D bottle that turns as you scroll, italic serif headings on #F4F4F4. Built in 2022. Please open it on your phone and confirm the bottle still shows; the agent confirmed it from the code, not by watching it.
3. More Nutrition (concept), more-nutrition.webflow.io. The closest match to your reel's motion: a product spin scrubbed by scroll, giant condensed headlines, pale green grounds. It's a studio concept, not a real store. Don't copy its weight-loss claims.


## 5. Ilé Àtègbè

Who it's for: people drawn to Ifá and Òrìṣà, from first-time seekers to initiates, many in the US diaspora.

### Colors (direction approved, values APPROVE)

| Token | Hex | Use | Contrast |
|---|---|---|---|
| ground | #FFF8E8 | page background (warm ivory, new, drawn from the amber) | |
| signal | #FFB100 | full-bleed amber sections, as on the old site | never text on ivory (1.7:1, fails) |
| indigo | #301F93 | crown-bead indigo: headlines, links, accents | 11.4:1 on ivory, 6.6:1 on amber |
| ink | #1E1810 | body text (dark brown, from the old theme) | 16.6:1 |
| gold | #B59055 | ornament, rules, the logo only | 2.8:1, never text |
| gold-text | #7D6037 | gold-colored small text when needed | 5.5:1 |
| muted | #62615C | captions | 5.9:1 |

The old navy text #00008B is replaced by the crown's own indigo, so the color comes from the object itself.

### Type (APPROVE)

- Headlines: Cormorant Garamond. A classical serif with ceremony. Passed the Yoruba test in full.
- Body: Source Serif 4. Built for long reading (the history and custodian pages are long). Passed in full.
- The old heading font, Orbitron, is retired. It's a sci-fi font.
- Before build: a render test of "Ilé Àtègbè, Ifá, Òrìṣà, Èṣù, Ọ̀ṣun, Àkóṣe, Ẹgbẹ́" in both fonts at every size, checked by eye in screenshots.

### 3D hero: the beaded crown

- Built from the site's two crown photos: the conical body in amber beads with the indigo pattern, and the long bead fringe.
- The fringe is thousands of individual beads in strands. When you scroll, the crown turns slowly and the strands sway with the speed of your scroll, then settle.
- Headlines: "Àbọrú Àbọyè Àbọṣíṣẹ", "Stepping into greatness", "Five hundred years of Ifá".
- CLIENT: the client approves how the crown is shown before anything goes public. It's sacred regalia.

### Pages

1. Home: crown hero, what Àtègbè means, services, education, the custodian, contact.
2. History and Custodian: the lineage from Oba Òjó Ifá to Dr. Adéwálé, with the ancestor portraits.
3. Education: classes, the 16 Major Odù Ifá, the Àkóṣe book, the YouTube talk.
4. Iwure and the 2026 Prayer Calendar.
5. Contact.

### References (APPROVE)

1. UNESCO Virtual Museum of Stolen Cultural Objects, museum.unesco.org. Sacred cultural objects shown in 3D with ceremony and respect, on warm cream. Awwwards Site of the Day, Jan 2026. The site blocked our automated check, so please open it in your browser to confirm the light ground.
2. MOWAA, Museum of West African Art, wearemowaa.org. A Nigerian heritage institution on a cream ground (#F7F7DC) with ochre and deep red accents. Serious without going dark. No 3D.
3. Te Papa, tepapa.govt.nz. New Zealand's national museum sets Māori with all its accent marks as an equal to English, in a serif with full accent support. The model for how Yoruba should sit on this site. No 3D.


## 6. Motion rules (all three sites)

From the apple-design and emil-design-eng skills. Same rules, different feel per brand.

- Scroll-driven hero: GSAP ScrollTrigger with smooth scrolling. The object always moves from where it is now, so fast scrolling back and forth never jumps.
- Buttons: shrink to 97% on press, 100 to 160ms. Feedback on press, not on release.
- Menus and panels: 150 to 250ms, strong ease-out curve cubic-bezier(0.23, 1, 0.32, 1). Never ease-in.
- Hover effects only on devices with a mouse.
- Card tilt and object drag use critically damped springs (no wobble). Bounce only after a flick.
- Lists and cards appear with a short stagger, 30 to 80ms apart. Never block clicks while they animate.
- Only transform and opacity animate.
- Reduced motion: no spin, no parallax. Short fades only.
- Per brand feel: AGFICI quick and punchy. Natural slow and calm. Àtègbè slow and ceremonial.


## 7. Repo layout

```
adewura-sites/
  PRODUCT.md            shared product record
  PLAN.md               this file
  research/             scraped text, screenshots, brand audit, references, font test
  assets/<site>/        downloaded photos and video, with manifest.json
  agfici/               AGFICI site (own PRODUCT.md, later DESIGN.md)
  natural/              Adewura Natural site
  ategbe/               Ilé Àtègbè site
```

No shared visual code, since the identities are separate. Build tools (image resizing, font subsetting) can be shared because visitors never see them.


## 8. Build order

1. You create the empty GitHub repo (see section 10). I push this plan and the research.
2. You approve the colors, fonts, references and the 3D approach in this file.
3. Direction round per brand: impeccable's process turns each approved direction into a DESIGN.md for that site.
4. One 3D hero prototype per site, tested on desktop and a mid-range Android phone before any page gets built around it.
5. Homepages, then the inner pages.
6. Checks: impeccable's design detector, screenshots on desktop and phone, page speed, the Yoruba render test, reduced motion.
7. Preview links, one per site.
8. Later: motion graphics with ElevenLabs voiceover.


## 9. Questions for the client

1. Do we keep the current logos or design new ones?
2. Restoria: medical brand only, or does AGFICI keep a mention?
3. House spelling of Àtègbè, Òrìṣà and the custodian's name. The old site mixes forms.
4. Current AGFICI events. The ones on the site are from January 2026 or earlier.
5. Which AGFICI photos are real AGFICI work, and which are stock.
6. Full-size originals of the small photos (list below).
7. Restoria label artwork file.
8. Approval to show the Àtègbè crown in 3D.
9. Real privacy, terms and refund policies (AGFICI's are unedited Wix templates).
10. Urgent and separate from the redesign: adewuranatural.com is hacked. Change every WordPress password, delete the "itsme" user, remove the 40 spam posts and the casino link, and update WordPress and its plugins.

Photos to request in full size: all Natural product shots (now about 800px), the medical director portrait (640px), the Àtègbè ancestor portraits (about 220px), the Odù Ifá slides (480x360), both AGFICI videos (368x656 and 480x848).


## 10. What I need from you now

1. Create an empty private repo named `adewura-sites` under your Qui-vira GitHub account (github.com/new, no README). The GitHub connection in this session isn't allowed to create repos, only to work in ones that exist.
2. Approve or change the items marked APPROVE.
3. Connect Vercel or Netlify when we reach the preview step.
