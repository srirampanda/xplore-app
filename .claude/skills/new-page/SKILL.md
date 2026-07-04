---
name: new-page
description: Scaffold a new content-listing page in apps/web following the existing treks/stays/routes convention (mock-data-backed App Router page + shared UI components). Use when the user asks to add a new page/section to the site that lists or details items from mock data.
---

This app (`apps/web`) currently has no backend — every listing page reads from arrays exported by `apps/web/src/lib/data.ts`, typed in `apps/web/src/lib/types.ts`. New content pages should follow the same shape as the existing `stays`, `treks`, and `routes` pages:

1. **Type**: add/extend an interface in `src/lib/types.ts` for the new content shape.
2. **Data**: add a mock array in `src/lib/data.ts` (use the `img()` helper for Unsplash images if the content has photos).
3. **Card component**: add a `src/components/<Thing>Card.tsx` presentational component (mirror `StayCard.tsx` or `TrekCard.tsx` — same Tailwind class conventions: `container-page`, `text-ink-900`, `text-forest-600`, etc. from the shared `@xplore/config` Tailwind preset).
4. **List page**: add `src/app/<thing>/page.tsx` — a server component that imports the data array and card component, sets `metadata.title`, and renders a `container-page py-10` wrapper with a heading block + a `grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3` of cards. See `src/app/stays/page.tsx` for the reference shape.
5. **Detail page (optional)**: if the content needs a detail view (like treks have), add `src/app/<thing>/[slug]/page.tsx` — check `src/app/treks/[slug]/page.tsx` for the pattern (params, `notFound()` on missing slug, metadata per item).
6. **Nav**: if the page should be reachable from the header, update `src/components/Header.tsx`.

Reuse `@xplore/ui` primitives (`Badge`, `Button`, `IconTile`, `StarRating`) where they fit instead of inventing new ones — check `packages/ui/src` first.
