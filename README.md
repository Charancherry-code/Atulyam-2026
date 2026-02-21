# ATULYAM 2026 — Haru no Stars

Immersive landing experience built with Next.js, Tailwind CSS, Three.js, and GSAP.

## Run locally

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start development server
- `npm run build` — create production build
- `npm run start` — run production build
- `npm run lint` — run lint checks

## Project structure

- `app/layout.tsx` — root metadata, fonts, and accessibility shell
- `app/page.tsx` — homepage composition
- `app/components/Hero.tsx` — hero 3D blossom scene
- `app/components/CherryBlossoms3D.tsx` — scroll-reactive 3D blossom section
- `app/globals.css` — global theme and base styles

## Accessibility + performance notes

- Includes a keyboard-accessible skip link to jump to main content
- Respects `prefers-reduced-motion` in both CSS and 3D scene behavior
- Caps WebGL renderer pixel ratio for more stable rendering on high-DPI screens
- Disposes 3D mesh resources on unmount to reduce memory pressure

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Three.js
- GSAP + ScrollTrigger
