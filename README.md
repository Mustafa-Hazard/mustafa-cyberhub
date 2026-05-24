# mustafa-cyberhub

Private Next.js 14 portfolio — Mustafa Iqbal.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Formspree (contact form)

## Structure
```
app/              → layout, page, globals.css
components/
  ui/             → Cursor, Loader, Navbar, Footer, ScrollToTop
  sections/       → Hero, About, Experience, Projects, Skills, Beyond, Education, Contact
data/             → projects.ts, skills.ts, experience.ts, beyond.ts
hooks/            → useReveal.ts, useScrollSpy.ts
lib/              → constants.ts
public/
  images/         → all project + profile images
  fonts/          → Clash Display woff2 files
```

## Adding a project
Edit `data/projects.ts` — add one object to the array. Done.

## Fonts
Download Clash Display from https://www.fontshare.com/fonts/clash-display
Place the `.woff2` files in `/public/fonts/`:
- ClashDisplay-Medium.woff2
- ClashDisplay-Semibold.woff2
- ClashDisplay-Bold.woff2

## Dev
```bash
npm install
npm run dev
```

## Deploy
Push to `main` → Vercel auto-deploys.
