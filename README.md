# Oasis Revenue Lab — Landing Page

A production-ready Next.js landing page for **Oasis Revenue Lab**, a division of **Lux Oasis Advisory & Services LLC**.

## Project Overview

This is the public-facing marketing site for Oasis Revenue Lab, combining:
- AI Revenue Agent product positioning
- Revenue management consultancy
- Hybrid model offering
- Lead magnet (free Floor Price Calculator)

---

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — utility classes + custom design system
- **Google Fonts** — Cormorant Garamond (display) + DM Sans (body) + JetBrains Mono
- **Vercel** — deployment

---

## Folder Structure

```
oasis-revenue-lab/
├── app/
│   ├── layout.jsx          # Root layout + metadata
│   └── page.jsx            # Page assembly (imports all sections)
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── AIProductSection.jsx
│   ├── ConsultancySection.jsx
│   ├── HybridSection.jsx
│   ├── ProblemSection.jsx
│   ├── CalculatorLeadMagnet.jsx
│   ├── PricingSection.jsx
│   ├── CredentialsSection.jsx
│   ├── GlobalPositioning.jsx
│   ├── CTASection.jsx
│   └── Footer.jsx
├── styles/
│   └── globals.css         # Design system + global styles
├── public/                 # Static assets (add images here)
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## Setup & Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Deployment (Vercel)

1. Push repo to GitHub: `luxoasisadvisoryservices-oss/oasis-revenue-lab`
2. Import project in Vercel dashboard
3. Framework: **Next.js** (auto-detected)
4. No environment variables required for static site
5. Deploy

---

## Customisation Checklist

Before going live, replace these placeholders:

### WhatsApp number
Search for `971XXXXXXXXX` across all component files and replace with the real UAE WhatsApp number.

### Email address
Replace `info@luxoasisadvisory.com` with the live business email.

### Website domain
Replace `oasisrevenuelab.com` in the Footer with the live domain.

### Pricing
- AI Agent: currently shows `from AED 149/listing/month` — update in `PricingSection.jsx`
- Adjust founding client notes as needed

### Metadata
Update `app/layout.jsx` with final OG image, canonical URL, and any analytics scripts.

---

## Design System

CSS variables defined in `styles/globals.css`:

| Variable | Usage |
|---|---|
| `--color-bg` | Page background (warm off-white) |
| `--color-surface` | Card/panel backgrounds |
| `--color-accent` | Gold accent (#c49632) |
| `--color-dark` | Dark navy sections (#0d1520) |
| `--color-text-primary` | Main body text |
| `--color-text-secondary` | Subdued text |
| `--shadow-card` | Standard card shadow |
| `--radius-card` | Card border radius (12px) |

Font families:
- `Cormorant Garamond` — headings/display
- `DM Sans` — body/UI
- `JetBrains Mono` — data/code elements

---

## Brand Architecture

```
Lux Oasis Advisory & Services LLC (parent)
└── Oasis Revenue Lab (this site — revenue intelligence)
└── Lux Oasis Holiday Homes (STR operations)
└── Nest Match (renovation / STR prep)
```

This site is structured so components can be reused across sibling brands with minimal modification.

---

## License

Private — Lux Oasis Advisory & Services LLC. All rights reserved.
