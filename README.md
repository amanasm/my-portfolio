# Amana S M — Interactive Portfolio

A single-page interactive portfolio built with **TanStack Start (React 19 + Vite 7)** and **Tailwind CSS v4**.

## Features

- Animated hero with a character that follows your cursor (64 pre-rendered gaze frames drawn on canvas)
- Word-by-word reveal animations on section titles, scroll-triggered reveals
- Opt-in sound effects (synthesized with the Web Audio API — muted by default, toggle button bottom-right)
- Project modal, sticky pill navigation, mobile menu, custom cursor
- Fully responsive, respects `prefers-reduced-motion`

## Run locally (VS Code / any editor)

Requires **Node.js 20+**. Using bun is faster, but npm works too.

```bash
# install dependencies
bun install     # or: npm install

# start the dev server (http://localhost:3000 — check the terminal output)
bun run dev     # or: npm run dev

# production build
bun run build   # or: npm run build
```

Open the printed local URL in your browser.

## Project structure

```
src/
  components/portfolio/     # All portfolio sections & logic
    Sections.tsx            # Nav, Hero, About, Skills, Projects, Experience, Contact
    CharacterCanvas.tsx     # Cursor-following character (canvas, 64 frames)
    Interactions.tsx        # Sound engine, reveal animations, custom cursor
    Button.tsx              # Shared action button/link
    data.ts                 # ← Edit your projects, skills, certifications here
  routes/
    index.tsx               # Page assembly + SEO meta (title/description)
    __root.tsx              # Fonts, favicon, root shell
  styles.css                # Theme tokens, colors, animations (Tailwind v4)
public/frames/              # Character gaze frames (look-01..64.webp + center.webp)
src/assets/                 # Original character.png & character.mp4 source media
```

## Quick edits

| What | Where |
|---|---|
| Projects, skills, certifications | `src/components/portfolio/data.ts` |
| About / experience text | `src/components/portfolio/Sections.tsx` |
| Email / phone / social links | `Contact()` in `Sections.tsx` |
| Colors & theme | `src/styles.css` (look for `:root` / `@theme`) |
| Page title & SEO | `src/routes/index.tsx` and `src/routes/__root.tsx` |

## Notes

- The gaze frames in `public/frames/` were extracted from `src/assets/character.mp4` (24 fps video → 64 frames). To regenerate them after changing the video, extract every 3rd frame as WebP (960×540) and one neutral `center.webp`.
- This template targets edge deployment, but runs fine locally with `npm run dev` and builds a standard production bundle with `npm run build`.
