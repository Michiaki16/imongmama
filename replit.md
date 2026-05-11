# Happy Birthday App

An interactive birthday greeting page for "Dudu" with an SVG birthday cake featuring 29 flickering candles, microphone-based candle blowing, confetti, a cat video reveal, and a birthday wishes section.

## Run & Operate

- `pnpm --filter @workspace/birthday-app run dev` — run the birthday app (dev mode)
- `pnpm --filter @workspace/birthday-app run build` — build for production (outputs to `artifacts/birthday-app/dist`)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React 18 + Vite 7
- Pure CSS animations (no external animation libraries)
- Web Audio API for microphone-based candle blowing

## Where things live

- `artifacts/birthday-app/src/pages/BirthdayPage.jsx` — main page component
- `artifacts/birthday-app/src/components/BirthdayCake.jsx` — SVG cake with 29 animated candles
- `artifacts/birthday-app/src/components/Confetti.jsx` — confetti and static decorations
- `artifacts/birthday-app/src/components/WishModal.jsx` — birthday wish submission modal
- `artifacts/birthday-app/src/assets/` — asd.jpg (avatar), hbd.mp3 (birthday song), cat.mp4 (reveal video)
- `artifacts/birthday-app/src/birthday.css` — all keyframe animations
- `vercel.json` — root-level Vercel deployment config

## Deploying to Vercel

Download the codebase and run `vercel deploy` from the project root — the root `vercel.json` handles everything automatically:
- Install: `pnpm install`
- Build: `pnpm --filter @workspace/birthday-app run build`
- Output: `artifacts/birthday-app/dist`

Alternatively, in the Vercel dashboard you can set **Root Directory** to `artifacts/birthday-app` and use the `vercel.json` inside that folder.

## User preferences

- Static build only — no backend or database needed
- Vercel-ready deployment out of the box

## Gotchas

- The vite.config.ts reads `PORT` and `BASE_PATH` from env — both have safe defaults (`5173` and `/`) so the build works without those env vars set (unlike the monorepo pattern).
- Assets (jpg, mp3, mp4) are bundled by Vite via static imports — no CDN needed.
