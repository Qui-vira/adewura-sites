# Product

<!-- impeccable:product-schema 1 -->

Shared record for the three-site rebrand. Each site has its own PRODUCT.md in its folder. This file holds only what is true for all three.

## Platform

web

## Stack

Static HTML, CSS and JavaScript. Three.js for one WebGL hero per site. CSS for every other depth effect (parallax, tilt, layered photos). No framework, no CMS. Confirmed by the designer, 17 Oct 2026.

These builds are presentation prototypes for client approval. No checkout, no donations processing, no accounts. Commerce moves to a platform chosen later. Wix is not used again.

Previews: one private preview link per site on Vercel or Netlify. Account not yet connected.

## Users

Primary user of this repo: the designer (BigQuiv Digitals), presenting to the client.

Client: the family behind three organizations. Dr. Ifábùkúnmi O. Adéwálé is the common figure. Per ileategbe.org/our-custodian, he is Oba Àtègbè of Ilé Àtègbè and medical director of Adewura Natural Medical Centre (Lagos) and Adewura Natural Remedies (United States). AGFICI's full name, Adewura Giant Farmers International Community Initiative, shares the Adewura name.

Site visitors differ per brand. See each site's PRODUCT.md.

## Positioning

Three separate identities (Option 2). Each site gets its own look from scratch and nothing visibly connects them. Final decision by the designer on 17 Oct 2026, to keep the farming, medical and spiritual work apart in the public eye. The client note in `research/client-note-brand-family.md` recommends this option.

## Capabilities and Constraints

- Light or bright brand-color page grounds only. Banned: the generic AI look of neon glow on black or near-black. Bright saturated brand-color sections are allowed.
- Each homepage hero is one brand-specific 3D object that turns with scroll, while big headlines change behind it.
- The design reference is the designer's Instagram reel DbgjytGySiQ by suryaxtech (a Tikka Masala jar site), frames in `research/reference-reel/`. The loading reference is museum.unesco.org, which the designer likes. The designer rejected other website references on 17 Oct 2026. Do not propose more unless asked.
- Scope per site: full homepage plus 3 to 4 key inner pages.
- Yoruba text must render correctly: ẹ ọ ṣ with tone marks (à á è é ì í ò ó ù ú ń ǹ). Every font must pass `research/fonts/check.py`.
- Copy: clean up, keep meaning. Fix typos, cut repeats, remove spam, Lorem ipsum and template text. No new claims.
- Images: build with the downloaded photos. Three later routes, each needing client approval before use: originals from the client, AI upscales of small files, new stock or AI images for gaps. Any image not supplied by the client is labeled as a placeholder in the build.
- Later phase: top-level motion graphics with ElevenLabs voiceover. Designer will supply the prompt and skill.

## Evidence on Hand

- Scraped pages, text and screenshots: `research/<site>/`
- Downloaded photos and video: `assets/<site>/`, each with `manifest.json` listing source URL and page.
- Brand audit with every measured color: `research/brand-audit.md`
- Do not invent testimonials, statistics, prices, certifications or health outcomes. The "Mila Jean" review and the "10+ products" counters on adewuranatural.com come from the old site and are not verified.

## Product Principles

1. Each brand looks like itself and nobody else, including its sister brands.
2. The 3D object is the brand's real thing (its bottle, its crown, its crop), never decoration.
3. Real photos over stock. Small photos are placed at the size they can hold.
4. Every claim on a page already exists on the client's current site or comes from the client.
5. Fast on a mid-range Android phone on a Nigerian mobile network.
