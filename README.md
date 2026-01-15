# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

---

## Environment variables 🔒

This project uses **server-side** environment variables. Create a local `.env` file for development (do **not** commit it) and keep a `.env.example` in repo as reference.

**Required variable:**

- `API_BASE` — Base URL for the backend API (e.g. `http://localhost:8000`). Accessed on the server via `import { API_BASE } from '$env/static/private'`.

**Example (`.env.example`):**

```
API_BASE=http://localhost:8000
```

**Setup:**

1. Copy `.env.example` to `.env` and edit values:

   ```bash
   cp .env.example .env
   ```

2. Start dev server: `pnpm dev` or `npm run dev`.

3. For production, set `API_BASE` in your deployment provider.

> Note: `$env/static/private` is evaluated at build time. If you need runtime server env, consider `$env/dynamic/private` instead.

---
