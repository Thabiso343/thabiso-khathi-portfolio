# Thabiso Khathi — Portfolio

Personal developer portfolio for Thabiso Khathi, Software Engineer & AI
Enthusiast. Built with Next.js (App Router), TypeScript, Tailwind CSS v4,
and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Purpose                              |
| --------------- | ------------------------------------- |
| `npm run dev`   | Local development server (Turbopack) |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build            |
| `npm run lint`  | ESLint                                |

## Editing content

All copy — profile info, skills, experience, education, and projects — lives
in one file: `src/lib/data.ts`. Update it and every section re-renders
automatically. Project cards in particular are intentionally left as
placeholders (`name`/`description`/`github`/`demo` set to `null`); fill them
in as real work ships.

## Project structure

```text
src/
  app/                # Routes, layout, metadata, generated icons/OG image
  components/         # Section + UI components (Navbar, Hero, About, ...)
  components/ui/      # Small shared primitives (Button, Section, Reveal)
  components/icons/   # Hand-drawn brand icons (GitHub/LinkedIn)
  lib/                 # Content (data.ts) + utils
public/                # Static assets
```

## Deployment

This is a standard Next.js app — deploy to Vercel (recommended, zero-config)
or any Node host:

```bash
npm run build
npm run start
```

Before going live, update `siteUrl` in `src/app/layout.tsx` to your real
production domain (used for canonical links and Open Graph/Twitter image
resolution).
