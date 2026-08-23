# Thabiso Khathi — Portfolio

Personal developer portfolio for Thabiso Khathi, Software Engineer & AI
Enthusiast. Built with Next.js (App Router), TypeScript, Tailwind CSS v4,
and Framer Motion.
## 🚀 Live Demo

[Try RecruitIQ live](https://ats-resume-screening-system-be4dxbhsayedrzsv6iurfz.streamlit.app/)

> [!NOTE]
> This app is hosted on Streamlit Community Cloud's free tier, which puts apps to sleep after a period of inactivity. If the demo shows a "Zzz..." screen or seems to hang on first load, click **"Yes, get this app back up!"** and wait 15–60 seconds for it to spin back up — it's not broken, just waking up.
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
