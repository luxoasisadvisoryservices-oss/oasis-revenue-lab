# Oasis Revenue Lab — website

The site is now split into lots of small files so you can change one bit of the
page without scrolling through a thousand lines. Nothing about how the site
looks or works has changed — only how the source is organised.

---

## The one rule

**Never edit `index.html`, `styles.css`, `script.js`, `privacy.html` or
`terms.html` directly.**

Those five files are *generated*. Each one starts with a line that says
`GENERATED FILE — do not edit directly`. If you type into them, your change gets
wiped out the next time the site is rebuilt.

Edit the small files in `partials/`, `styles/`, `scripts/` and `pages/` instead,
then rebuild.

---

## The one command

From inside the `orl` folder, in a terminal:

```
python3 build.py
```

That reads all the small files and writes the five generated files. It takes
under a second and prints a summary like:

```
Oasis Revenue Lab — build complete
  index.html      98568 bytes   <- 25 partials
  styles.css      72269 bytes   <- 34 style files
  script.js       28022 bytes   <- 14 script files
  privacy.html    10716 bytes   <- pages/privacy.html
  terms.html       9903 bytes   <- pages/terms.html
```

Then commit and push. Vercel picks up the commit and redeploys the site
automatically — there is no build step on Vercel, it just serves the files you
committed. No npm, no framework, no `node_modules`.

---

## What each folder is

### `partials/` — the page, section by section

One file per section of the home page, in the order they appear on screen. The
number at the front of the filename is what fixes the order, so `20-hero.html`
always renders before `25-dashboard.html`.

| File | What it is on the page |
|---|---|
| `00-head.html` | Page title, description, social-share preview, fonts, favicon |
| `05-whatsapp-float.html` | The floating green WhatsApp button |
| `10-header.html` | Top bar: logo, menu links, WhatsApp button |
| `15-main-open.html` | Structural tag only — leave it alone |
| `20-hero.html` | Headline, sub-headline, buttons, terminal card |
| `22-credentials-strip.html` | The credentials band under the hero (PriceLabs / HSMAI / DTCM) |
| `25-dashboard.html` | The "morning brief assembles itself" dashboard scene |
| `30-features.html` | The AI agent feature grid |
| `35-telegram.html` | The Telegram phone mock-up |
| `40-story.html` | Who we are / the story |
| `42-ecosystem.html` | The Lux Oasis ecosystem strip |
| `45-consultancy.html` | Consultancy positioning |
| `47-rm-services.html` | Revenue Management Services — the hands-on work |
| `50-how-it-works.html` | How it works / the tiers |
| `55-why.html` | "Why this exists" + the scroll-drawn chart |
| `58-tower.html` | Tower strategy |
| `60-data-sources.html` | Data sources |
| `62-scale.html` | Who we work with |
| `65-calculator.html` | The free floor-price calculator |
| `70-pricing.html` | **Pricing — to change prices or plan text, open this file** |
| `75-credentials.html` | Credentials |
| `78-global.html` | Global / beyond Dubai |
| `80-get-started.html` | Get-started call to action |
| `85-faq.html` | FAQ questions and answers |
| `88-main-close.html` | Structural tag only — leave it alone |
| `90-footer.html` | Footer: links, contact, TRN |
| `99-scripts.html` | Loads `script.js` — leave it alone |

`partials/legal/` holds the header and footer that the Privacy and Terms pages
share. Change `legal-header.html` once and both legal pages update.

### `styles/` — the look

One file per part of the design, numbered so the styles stack in the right
order. `00-tokens.css` holds the colours, fonts and spacing used everywhere
else — change a colour there and it changes across the whole site. The rest
mirror the sections above (`20-hero.css`, `65-calculator.css`, `70-pricing.css`
and so on).

The last few are special and load after everything else:

- `90-responsive.css` — how the page adapts to phones and tablets
- `91-` to `99-motion-*.css` — the scroll-driven animations (morning brief
  assembling, Telegram messages typing, the chart drawing itself, the calculator
  bars). `99-motion-responsive.css` must stay last.

**The numbers matter.** In CSS, whichever rule comes last wins. If you add a new
file, give it a number that puts it where you want it in that order.

### `scripts/` — the behaviour

One file per behaviour, numbered so they run in the right order:

- `00-ui-core.js` — sticky header
- `05-mobile-nav.js` — the hamburger menu
- `10-reveal.js` — fade-in-on-scroll
- `15-countup.js` — numbers counting up
- `20-calculator.js` — **the floor-price calculator maths lives here**
- `29-ui-close.js` — closing bracket, leave it alone
- `30-motion-engine.js` — shared animation helpers
- `40-hero-spark.js` — the little green chart in the hero card
- `45-why-chart.js` — the "why this exists" comparison chart
- `50-floor-scene.js` — the floor-protection shield animation
- `55-dash-scene.js` — the morning-brief dashboard scene
- `60-telegram-scene.js` — the Telegram typing scene
- `70-scene-registry.js` — the animation loop
- `90-init.js` — starts everything; must stay last

**Important:** these JavaScript files are pieces of one continuous program that
get glued together in number order. `00-ui-core.js` and `30-motion-engine.js`
open blocks that `29-ui-close.js` and `90-init.js` close. That means an
individual file will look "unbalanced" if you open it on its own — that is
expected. Change the code inside a file freely; don't reorder, rename or delete
the files.

### `pages/` — the legal pages

`pages/privacy.html` and `pages/terms.html` are the editable sources for the
Privacy Policy and Terms pages. Edit the wording there. The two lines that read
`<!--#include legal-header.html-->` and `<!--#include legal-footer.html-->` are
placeholders that `build.py` swaps for the shared header and footer — leave them
in place.

### `_qa/`

Screenshots and Playwright checks used to prove the restructure changed nothing.
Not part of the live site.

---

## Common jobs

| You want to… | Open… |
|---|---|
| Change a price or plan description | `partials/70-pricing.html` |
| Change the headline | `partials/20-hero.html` |
| Add or edit an FAQ | `partials/85-faq.html` |
| Change the WhatsApp number | search for `971585089283` across `partials/` |
| Change a brand colour | `styles/00-tokens.css` |
| Change the calculator formulas | `scripts/20-calculator.js` |
| Swap in a real HSMAI / DTCM badge | search for `LOGO SLOT` across `partials/` |
| Change the PriceLabs partner badge embed | `partials/22-credentials-strip.html` and `partials/75-credentials.html` (`pl-badge`) |
| Change the brand logo or favicon | replace the files in `assets/` (same filenames) |
| Change the Privacy Policy wording | `pages/privacy.html` |

Then run `python3 build.py`, commit, push. Done.

---

## If something looks broken

Run `python3 build.py` again — running it twice always produces exactly the same
result, so it is safe to re-run any time. If the page still looks wrong, the
problem is in whichever small file you last edited, not in the generated files.
