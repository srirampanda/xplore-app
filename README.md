# XploreApp

Discover budget-friendly treks, stays, and scenic drive routes — built for hikers and nature explorers who want great trips without overspending.

## Monorepo structure

```
xplore-app/
├── apps/
│   └── web/            Next.js 14 (App Router) + TypeScript + Tailwind — the main web app
├── packages/
│   ├── ui/              Shared React components (@xplore/ui)
│   └── config/          Shared TypeScript + Tailwind config
├── package.json          Root workspace config (npm workspaces)
```

## Getting started

Requires Node 18.18+ and npm 9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the web app in development mode |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the web app |

## Current scope

The app currently runs on curated mock data (`apps/web/src/lib/data.ts`) for treks, stays, and scenic drive routes so the UI/UX can be reviewed end-to-end before a backend is wired up. Swap in real data sources (API + database) by replacing the functions in that file.

## Pages

- `/` — Home: hero search, trending treks, budget stays, scenic drives
- `/treks` — Browse all treks with difficulty & budget filters
- `/treks/[slug]` — Trek detail page
- `/stays` — Browse budget-friendly stays near trailheads
- `/routes` — Scenic car routes to trailheads
