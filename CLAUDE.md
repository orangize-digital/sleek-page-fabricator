# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

German-language business website for Metallbaumeister Albrecht (metal fabrication company in Bückeburg, Germany). All user-facing content is in German.

Live site: https://www.metallbaumeister-albrecht.de/

## Commands

- `npm run dev` — Start dev server on `localhost:8080`
- `npm run build` — Production build (outputs to `/dist`)
- `npm run build:dev` — Development build
- `npm run lint` — ESLint check
- `npm run preview` — Preview production build
- `npm run check-assets` — Validate images with sharp (strict mode)

No test framework is configured.

## Tech Stack

- **React 18** + **TypeScript** (relaxed — `strict: false`, `noImplicitAny: false`)
- **Vite 5** with SWC plugin for fast transpilation
- **Tailwind CSS 3** with `tailwindcss-animate` plugin
- **shadcn/ui** (Radix UI primitives) — components in `src/components/ui/`
- **React Router v6** for client-side routing
- **React Query** for async state (provider at app level, minimal usage)

## Architecture

### Routing

All routes defined in `src/App.tsx`. The home page (`/`) uses anchor-based scroll navigation for sections (`#home`, `#services`, `#projects`, etc.). Add new routes above the `*` catch-all.

### Page Structure

Pages live in `src/pages/`. The home page (`Index.tsx`) composes section components from `src/components/sections/` (Hero, About, Services, Projects, Process, Testimonials, Contact, CTA, MaterialWahl).

### Import Alias

`@/` maps to `./src/` (configured in both `vite.config.ts` and `tsconfig.json`).

### Styling

- Tailwind with custom color palettes: `metallic` (#C0C0B5 family) and `steel` (#194d88 family)
- HSL CSS variables for shadcn/ui theming (defined in `src/index.css`)
- Custom `glass-panel` CSS class for frosted glass effects
- `reveal` class + IntersectionObserver for scroll-triggered animations
- Custom keyframe animations: `fade-in`, `fade-in-right`, `fade-in-left`, `slide-in-bottom`, `scale-in`

### External Integrations

- **Contact form** submits to `https://joshevski.com/v1/send` email API (with `X-Form-Key` header)
- **WhatsApp** floating button for direct messaging
- **Google Tag Manager** and **CCM19** cookie consent (in `index.html`)
- **JotForm** embedded form on the Zertifikate page
