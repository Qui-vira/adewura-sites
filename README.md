# adewura-sites

One website for a parent brand (working name "Adewura") and three brands under it:

- `site/`: the parent homepage, with the UNESCO-style opening and a door to each brand
- `site/natural/`: Adewura Natural Medical Centre
- `site/ategbe/`: Ilé Àtègbè
- `site/farmers/`: Adewura Giant Farmers Trust Fund

AGFICI (adewuragfici.com) is not part of this project. The client asked for it to be left alone.

Static HTML, one Three.js object per brand, light and bright grounds.

## Working on it

```
npm install
npm run build    # bundles everything into site/, applies site.config.json
npm run serve    # preview at http://localhost:4173/
```

- Settings (parent name, site address, booking links, indexing, old-domain forwarding): `site.config.json`
- Launch steps for the client and the designer: `LAUNCH.md`
- Plan and decisions: `PLAN.md` (section 0 is the current direction)
- Product notes and design systems per brand: `docs/`
- Scrape of the old sites, brand audit and references: `research/`
- Netlify: one site, base directory `site`

Only `site/` is published. Keep notes and research out of it.
