# Launch guide

Everything the client and the designer must do to move from the preview to the real site. Each step says who does it.

All settings live in one file, `site.config.json`. After changing it, run `npm run build`, commit and push. Netlify updates the site in about 30 seconds.


## 1. Parent company name (done)

- The parent is "Adewura Group" (17 Oct 2026, matching the suggested domain adewuragroup.com).
- To change it, edit `"parentName"` in `site.config.json` and rebuild. The build updates every visible mention, the page title, the share title and the structured data on all four pages.
- The share image `site/img/og-parent.jpg` carries the name as a picture and must be re-rendered by hand.


## 2. Buy the new domain (client)

The client suggested adewuragroup.com on 17 Oct 2026 ("I think"). The .com registry had no record for it on 17 Oct 2026.

Checked 17 Oct 2026 in the official domain registries: adewura.com, adewura.org, adewuragroup.com, adewuragroup.org, adewuraholdings.com and adewurafamily.com had no registration record. That strongly suggests they are free, but only a registrar can confirm it at checkout.

Then (designer):
1. In Netlify, open the site and go to Domain management. Add the new domain and follow Netlify's DNS steps.
2. In `site.config.json`, set `"siteUrl"` to the new address, for example `"https://adewura.com"`.
3. Set `"indexable": true`. This removes the "don't index" tag from every page and opens `robots.txt` to search engines.
4. Build, commit, push.


## 3. Book a call on WhatsApp (client gives the number, designer sets it)

The client chose WhatsApp, one number for all three brands (17 Oct 2026).

Put the number in `site.config.json` under `"whatsapp"` → `"number"`: digits only, with the country code, for example `2348012345678`. Every Book a call button then opens WhatsApp with a message naming the brand, for example "Hello, I would like to book a call with Ilé Àtègbè." The messages are editable in the same place. Until the number is set, Book a call opens an email to that brand.


## 4. Google Business Profiles (client)

One profile per business at business.google.com. Google verifies ownership, usually by video, phone or post, so the owner must do this.

| Brand | Address on the profile | Note |
|---|---|---|
| Adewura Natural Medical Centre | The Lagos centre's street address | Google does not accept P.O. boxes, so the US P.O. Box in Grayson, GA cannot be used. |
| Ilé Àtègbè | The Conley, GA location, or a service area if visitors don't come in person | |
| Adewura Giant Farmers Trust Fund | The farm's location | |

For each profile: the exact brand name, a category, opening hours, phone, and the website address on the new domain (for example `https://adewura.com/natural/`). Pick the closest category from Google's own list.

Reviews on the website: once the profiles exist and have reviews, the site can show them. This needs a Google Places API key from the client's Google Cloud account. Google's terms require showing its attribution next to the reviews.


## 5. Forward the old domains (designer, with access to each domain)

`site/_redirects` is already generated from `site.config.json`. It takes effect only after each old domain is attached to the Netlify site:

1. In Netlify, add each old domain as a domain alias: adewuranatural.com, ileategbe.org, adewuragiantfarmers.org.
2. Change each old domain's DNS to Netlify, following Netlify's instructions. They are on Bluehost today.
3. Every page of ileategbe.org and adewuragiantfarmers.org then forwards to the matching brand page.
4. adewuranatural.com forwards only its seven real pages. The 40 spam pages left by the hack return "not found", so Google drops them.
5. Keep the domains renewed for 6 to 12 months, until Google shows the new addresses, then let them expire.

AGFICI (adewuragfici.com) is not touched.


## 6. Tell Google about the move (designer)

1. Add the new domain to Google Search Console and verify it.
2. Submit `https://NEW-DOMAIN/sitemap.xml`.
3. For each old domain that is verified in Search Console, use its Change of Address tool to point at the new domain.


## Still needed from the client

- Domain purchase (adewuragroup.com suggested, not confirmed)
- Confirm +1 678 373 6836 is the right WhatsApp number for Book a call
- Program details for the Trust Fund
- Approval of the Àtègbè crown, icons and divination powder
- Confirmation of Natural's phone numbers and the Restoria price
- Review of the Aristolochia (Akoogun) safety note on two Natural products
