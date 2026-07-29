# Mango77x — Operations Log

Personal portfolio for Antoine (Mango77x), built as an operations logbook rather than a project grid. Vite + React + TypeScript + Tailwind CSS v4.

Deployed at [mango77x.github.io](https://mango77x.github.io) via GitHub Actions on every push to `main`.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (`src/index.css` — design tokens live in the `@theme` block)
- Self-hosted fonts: Instrument Serif, IBM Plex Sans, IBM Plex Mono (`@fontsource/*`)

## Structure

- `src/data/projects.ts` — project records (dossiers), bilingual copy (`en`/`es`)
- `src/data/contact.ts` — contact links shown in the footer signature block — **fill in before deploying**
- `src/components/BoidsCanvas.tsx` — live boids flocking + task-auction simulation used in the hero
- `src/i18n/` — lightweight language context + string dictionary (EN/ES toggle, auto-detected from browser locale)

## Local development

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. `.github/workflows/deploy.yml` builds the site and publishes it via GitHub Pages. To enable it the first time, set the repo's **Settings → Pages → Source** to "GitHub Actions".
