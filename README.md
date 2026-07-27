# SarahFolio

Next.js 15 + TypeScript + Tailwind portfolio — assembled from the Rocket.new-generated
source you shared, with your photo dropped into place.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4028

## What's inside

```
sarahfolio/
├── public/
│   ├── favicon.ico
│   └── assets/images/
│       ├── IMG_7814-1785096710564.png   ← your photo (used in Hero + About)
│       ├── app_logo.png                  ← placeholder gold "S." wordmark logo
│       └── no_image.png                  ← fallback image
├── src/
│   ├── app/
│   │   ├── layout.tsx, page.tsx, not-found.tsx, robots.ts, sitemap.ts
│   │   └── components/
│   │       ├── HeroSection.tsx
│   │       ├── AboutEducationSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── TutoringSection.tsx
│   │       ├── SkillsSection.tsx
│   │       ├── GlobalSection.tsx
│   │       └── ContactSection.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ui/ (AppIcon, AppImage, AppLogo)
│   └── styles/tailwind.css
├── package.json, tsconfig.json, tailwind.config.js, postcss.config.js,
│   next.config.mjs, image-hosts.config.mjs, .eslintrc.json, .prettierrc,
│   .gitignore, .env.example
```

## Notes

- **Your photo** is already placed at `public/assets/images/IMG_7814-1785096710564.png`
  and shows up in the Hero and About sections — converted from your original `.heic`.
- **Logo**: `app_logo.png` and `favicon.ico` are a simple placeholder (gold "S." on
  crimson) so nothing looks broken. Swap them out any time with your own logo — same
  filenames, same folder.
- The `<script>` tags in `layout.tsx` pointing to `static.rocket.new` are Rocket.new's
  own analytics/editor scripts — safe to delete if you're not using Rocket.new anymore.
- The contact form in `ContactSection.tsx` is a mock submit handler (no backend wired
  up yet) — hook it up to an email service (e.g. Formspree, Resend) or your own API
  route when you're ready.

## Deploy

**Vercel (easiest for Next.js):**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod
```

**GitHub (to push the repo first):**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/sarahhhwhat/sarahfolio.git
git push -u origin main
```
Then connect that repo to Vercel or Netlify for automatic deploys.
