# Mango77x — Software Portfolio

Personal portfolio for Antoine Giz (Mango77x), focused on independent software projects and technical experiments. Built with Vite, React, TypeScript and Tailwind CSS v4.

Deployed at [mango77x.github.io](https://mango77x.github.io) through GitHub Pages.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- IBM Plex Sans and IBM Plex Mono, self-hosted with Fontsource

## Project structure

- `src/data/projects.ts` — project information, grouping and English/Spanish descriptions
- `src/data/contact.ts` — contact links used in the footer
- `src/components/` — page sections and reusable UI components
- `src/i18n/` — language context and translated interface copy
- `src/index.css` — global styles, design tokens and typography

The language toggle supports English and Spanish. The initial language is detected from the browser locale, and the selected language is saved in local storage.

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npx tsc -b
npm run build
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`. The workflow installs locked dependencies, runs lint and TypeScript checks, builds the site, and deploys the generated `dist` directory to GitHub Pages.

GitHub Pages must be configured to use **Settings → Pages → Build and deployment → GitHub Actions**.
