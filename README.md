# Battleship

Battleship game with a Vite/TypeScript frontend and a WebSocket backend.

## Stack

- Frontend: Vite + TypeScript, Vitest, ESLint + Prettier, Husky + lint-staged
- Backend (`server/`): Node.js + TypeScript, `ws` (WebSocket), run with `tsx`

## Getting started

```bash
npm install        # installs root (client) deps and server deps via workspaces
npm run dev         # runs client (Vite) and server (ws) together
```

The client runs at the Vite dev URL (printed in the terminal); the WebSocket
server listens on `ws://localhost:3000`.

## Scripts

- `npm run dev` — run client + server together
- `npm run dev:client` — Vite dev server only
- `npm run dev:server` — WebSocket server only (`server/`)
- `npm run build` — type-check + production build (client)
- `npm run preview` — preview production build
- `npm test` — run tests once
- `npm run test:watch` — run tests in watch mode
- `npm run lint` / `npm run lint:fix` — ESLint (client)
- `npm run lint:server` — ESLint (server)
- `npm run format` / `npm run format:check` — Prettier (client)

## Structure

- `src/components` — UI components
- `src/models` — game logic/data models
- `src/styles` — stylesheets
- `src/utils` — helpers
- `public` — static assets
- `server/` — WebSocket backend (its own `package.json`/`tsconfig.json`,
  linted and formatted independently of the client)
