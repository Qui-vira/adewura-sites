# Brand audit: AGFICI, Adewura Natural, Ilé Àtègbè

Scraped 17 October 2026 with Scrapling and a real Chromium browser. Colors come from what each page actually renders, measured two ways: how much screen area a background covers, and how many letters of text use a color. Logo colors were sampled from the logo files.

Raw data, screenshots and downloads sit in `sites/` next to this file.


## 1. AGFICI (adewuragfici.com, built on Wix)

Adewura Giant Farmers International Community Initiative. Farming nonprofit in rural Nigeria. Restoria page and a Restoria product page live here too.

Colors

| Role | Hex | Share |
|---|---|---|
| Main background, dark olive | #403F2B | 71% of page area |
| Accent blocks, buttons and almost all text, butter yellow | #F7F290 | 16% of area, 91% of text |
| Second background, lighter olive | #4D4B36 | 6% of area |
| Deepest band, near-black olive | #29291F | 1% of area |
| Cream, small text and overlays | #FEFAF1 | 3% of text |
| Logo | #F7F290 on #403F2B | |

Fonts: Fraunces (big serif headings), Avenir Light (body, 91% of all text), Bai Jamjuree (one small heading style).

What this means: the site is a dark site today. Seven tenths of every page is dark olive. Your "no dark backgrounds" rule changes this brand more than the other two.

Pages (17): Home, Restoria, Restoria product page, Donate, Events, 3 event detail pages, Members, Groups, Notifications, My Subscriptions, plus Privacy, Accessibility, Terms and Refund pages.

Media: 21 images, 2 videos, 1 Instagram feed embed, 3 Google Map embeds.

- Videos are small and vertical. One is 368x656 pixels, 15 seconds. The other is 480x848, 64 seconds. Wix had no larger copy.
- One photo (the woman with the basket) is very likely from Wix's free stock library. Its file name starts with 11062b_, the prefix Wix's own stock files carry. Most of the client's own uploads start with 162907_.
- Several images (the woman in the yellow headwrap, the woman in the green hijab, the hands with the seedling, the tomato pot, the boardroom) look AI generated or stock. I cannot confirm this from the files alone. Ask the client which photos are real AGFICI work.
- Real field photos found: goats, cassava and garri processing, the tractor, the maize field, the raised garden beds.

Problems on the live site

- The four legal pages are unedited Wix templates. They still say "What to include in the Privacy Policy". They are not real policies.
- Footer says "© 2035 by AGFICI". That is the Wix template date.
- Several sections showed up empty in our capture (the Community card, the Follow Us block, a large yellow panel). The Instagram feed did not load.


## 2. Adewura Natural (adewuranatural.com, WordPress with Astra and Elementor)

Adewura Natural Medical Centre. Herbal remedies. Products: B Vtán, ALΣ, Restoria, Stabiliphier, CinnaSorg, Ferrumé and others.

Colors

| Role | Hex | Share |
|---|---|---|
| Page background, off-white | #FAFAFA | 35% of area |
| Footer, dark navy | #001524 | 31% of area |
| Theme accent, leaf green | #8BC34A | links and labels, 3% of text |
| Darker accent green | #6A9739 | hover states |
| Body text, charcoal | #333333 | 74% of text |
| Headings, near-black | #111111 | |
| Logo green | #467041 | sampled from logo |
| Logo leaf greens | #124D11, #086C05, #376A35, #72A26E | sampled from leaf mark |

Fonts: Open Sans (body, 84%), Merriweather (headings).

What this means: the real brand color is the logo's forest green (#467041), not the template's lime (#8BC34A). The lime came with the WordPress theme.

Real pages (7): Home, About, Products, Contact, and three product sales pages (ALΣ, B Vtán, Restoria).

Media: 15 usable images, no video. Product photos are around 800 pixels wide. Fine for cards, too small for a full-screen 3D hero.

Problems on the live site. These are serious.

- The site is hacked. The homepage contains a hidden casino ad: "At Jackpot City, you'll find a premier gaming platform..." with a link to jackpotcity-nz.com.
- 40 spam posts were published by an account called "itsme". Most advertise betting and casino sites (Bahiscom, Betboo, 20bet, Sekabet and others). They are written in at least ten languages, including Turkish, Dutch, German, Italian, Spanish and Portuguese. Search engines see these pages. This damages the brand's search ranking and trust. The full list is in `sites/adewuranatural/spam-evidence/urls.txt`.
- The client should change all WordPress passwords, delete the "itsme" account, remove the spam posts, and update WordPress and every plugin. This is separate from the redesign and should happen now.
- Placeholder content is live: Lorem ipsum in the footer, "coming soon!!!" under About the MD, a generic illustrated woman image, a broken footer logo, "Hello world" and "Test" posts.


## 3. Ilé Àtègbè (ileategbe.org, WordPress with Astra and Elementor)

Ifá and Òrìṣà spiritual house in Conley, Georgia. Prayers, education, divination, products. The homepage says it took over the spiritual content that used to live on adewuranatural.com.

Colors

| Role | Hex | Share |
|---|---|---|
| Main background, amber | #FFB100 | 81% of page area |
| Footer, black | #000000 | 15% of area |
| Body and heading text, dark navy | #00008B | 78% of text |
| Heading accent, bright blue | #0404FB | |
| Secondary text, warm grey | #62615C | |
| Theme dark brown (unused much) | #1E1810 | |
| Theme cream (unused much) | #F8F7F3 | |
| Logo, antique gold | #B59055, #CFAE73, #E1C99E | sampled from logo |
| Logo shadow brown | #453117, #7D6037 | sampled from logo |
| Crown beads, indigo | #301F93 | sampled from the Àtègbè crown photo |

Fonts: Raleway (body, 78%), Montserrat (menu and small text), Orbitron (headings, a futuristic font that clashes with the subject).

What this means: amber and indigo are the strongest identity here, and both come from the real crown. That pairing is worth keeping. Orbitron is not.

Pages (13): Home, Our History, Our Custodian, Iwure (Prayers), Prayer Calendar, Education, 16 Major Odù Ifá, Àkóṣe, Classes, Ifá Divination, Services, Products, Contact.

Media: 24 images, 1 phone video (1440x1080, 17 seconds, HEVC .mov, needs conversion to MP4 for browsers), 1 YouTube video on the Education page.

- Two ancestor portraits are tiny (about 220x330 pixels).
- The Odù Ifá slides are 480x360 screenshots of a presentation.
- Two product images are missing on the server (cd.jpg, chalk.jpg return "not found").

Font warning for all three sites: Yoruba needs letters with dots under them (ẹ, ọ, ṣ) plus tone marks (à, é). Any new font must draw these correctly. Many display fonts don't.


## Shared across brands

- Restoria (a sleep supplement) appears on both AGFICI and Adewura Natural. The client should say which brand owns it.
- The same portrait of the Medical Director on Adewura Natural appears as "Oba Àtègbè" on Ilé Àtègbè. Same person across two brands.
