# Handoff

Last updated 17 Oct 2026. Repo: Qui-vira/adewura-sites, branch `main`. Live preview: https://adewura-preview.netlify.app (Netlify publishes every push to `main`).

## 1. Goal

Rebrand three of the client's (Dr. Ifábùkúnmi O. Adéwálé) organizations as one parent, **Adewura Group**, on one new domain (suggested: adewuragroup.com), with three brands under it:

- **Adewura Natural** (medical; Restoria) at `/natural/`
- **Ilé Àtègbè** (spiritual; Ifá and Òrìṣà) at `/ategbe/`
- **Adewura Giant Farmers Trust Fund** (farming) at `/farmers/`

AGFICI (adewuragfici.com) must not be touched. Static HTML with 3D (Three.js), not Wix. Design references: the designer's Instagram reel DbgjytGySiQ (pinned 3D object, ghost headlines) and museum.unesco.org (opening, cloud journey). No neon-on-black. Every claim must come from the client's existing sites or the client.

## 2. Current state

- 15 pages are built and live: the parent homepage, 3 brand homepages and 11 inner pages (Natural: restoria, products, about, contact; Àtègbè: history, custodian, services, learn; Trust Fund: programs, about, contact).
- The parent homepage has a UNESCO-style opener, then a cloud journey: Àtègbè crown, then the maize, then Restoria. Each brand homepage has its own opener with Book a call.
- Sound is synthesized in code (Web Audio): Tibetan drone and bowls, Korean pentatonic plucks, shaman bells, scroll wind and door whooshes.
- The full-site audit on 17 Oct found no broken links, no overflow, no console errors and no template text. Headers fit from 320px up, and the phone menu works on all 14 brand pages.
- Book a call opens WhatsApp +1 678 373 6836 on every page. The client has not confirmed this number yet.
- The site is still marked noindex (`"indexable": false`), because no domain has been bought yet.
- The client has not yet answered the 18 verification questions; the message to him is drafted (see Next steps).

## 3. Active files

- `site.config.json`: parent name, site address, indexable, pages and sitemap, WhatsApp number and messages, old-domain redirects (a `paths` map per domain).
- `tools/build.mjs`: esbuild bundling plus `applyConfig`. Always run `node tools/build.mjs` after edits, and `--clean` after JS changes so stale chunks in `site/shared/` are removed.
- `tools/serve.mjs`: local server (`node tools/serve.mjs 4174`).
- `site/index.html` and `site/src/`: parent page (`main.js`, `opening.js`, `clouds.js`, `sound.js`, `style.css`).
- `site/src/soundkit.js`: the shared instruments; each brand's `src/sound.js` sets its own mix.
- `site/menu.js`: closes the phone menu on an outside tap or Escape.
- `site/<brand>/index.html`, `site/<brand>/src/{main,scene,opening,sound,...}.js`, `site/<brand>/src/style.css`: brand homepages.
- `site/<brand>/<page>/index.html` and `site/<brand>/inner.css`: inner pages. They have no bundled JS.
- `site/farmers/video/`: 12 farm videos (H.264, 72 MB) with poster images.
- `site/img/family/`: the parent "family" logo, made of the three original brand logos.
- `LAUNCH.md`: launch steps and the client checklist. `PLAN.md` section 0 holds the current direction. `research/`: scraped source text, the UNESCO frame analysis (`reference-unesco/timeline.md`).

## 4. Changes made (this session)

- Parent logo: the three original logos joined as a family tree, approved by the designer. The brand logos themselves are unchanged.
- Parent named "Adewura Group". The build now writes the name into the title, the og tags and the structured data too.
- UNESCO rework: a bigger loader, a cloud sky behind the welcome, the ring-and-mouse scroll cue, and a fly-through of the three houses.
- Sound rebuilt on all four pages. The Àtègbè bead rustle now stops when the visitor leaves the crown section.
- 11 inner pages. The build applies the config to inner pages, adds them to the sitemap and forwards old URLs to their new pages.
- Old-site claims the designer asked to keep were restored as published (Tola, Sarah, 1090+, offers, Certified, CDC text, the Àkóṣe workshop, the spiritual treasures). All are flagged in `LAUNCH.md` for the client.
- 2026 prayer calendar on Àtègbè Learn: the image, a text key and a "today" line that only shows in 2026.
- Trust Fund About uses the exact founder message and vision. Programs is a numbered timeline with the 12 farm videos.
- One phone menu on all brand pages, and "Book a call" in every brand header.

## 5. Failed attempts

- Cloudflare blocks downloads of page text and video from adewuragiantfarmers.org (403). Images under `wp-content/uploads` do download. The designer supplied the text through Claude in Chrome and the videos through Drive.
- The first Àtègbè products download missed the calendar image; it was found in the live page markup (`wp-content/uploads/2026/01/IMG_3901.jpeg`).
- Playwright's Chromium cannot play H.264 (`canPlayType` returns empty). Videos were verified by full ffmpeg decode instead. Real browsers play them.
- Full-page Playwright screenshots show false grey bands and hide lazy images. Check with viewport screenshots before "fixing" these.
- A class-name clash: the Trust Fund homepage's `.tile` collage rule staggered the program videos. They now use `.ptile`. Check for clashes before reusing class names across pages.
- `site/farmers/img/goats-*.webp` were overwritten once by mistake and restored from git. Check names before writing images.
- The first audio pass sounded like clicks (bell resonators with too low a Q). It was rebuilt with computed bell, bowl and Karplus-Strong buffers and checked with the MIT AST classifier.

## 6. Next steps

1. The designer sends the client the 18-question WhatsApp message (Trust Fund review and feature boxes, program details, Natural claims and offers, Akoogun safety note, FDA notice, the workshop date, prayer spellings, the WhatsApp number, the domain). Apply his answers.
2. The designer tests on a real phone: menu, videos, the cloud journey, sound, scroll smoothness.
3. The domain is bought, then follow `LAUNCH.md`: Netlify domain, `siteUrl`, `"indexable": true`, old-domain aliases, Search Console Change of Address.
4. The client creates Google Business Profiles. Showing reviews on the site needs a Places API key.
5. The designer disables or deletes the old Netlify projects (natural-preview, ategbe-preview, agfici-preview): Project configuration > Configuration > Danger zone.
6. Before January 2027: a 2027 prayer calendar image.
7. Later: ElevenLabs motion graphics and voiceover (the designer will send the prompt), and a flat fallback for phones without WebGL.
