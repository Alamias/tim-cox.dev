# Tim Cox — Portfolio

Personal portfolio site for Tim Cox, Senior Frontend Engineer.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cloudflare deploy

This site deploys to Cloudflare Workers via `@opennextjs/cloudflare`.

```bash
npm run build:worker   # next build + OpenNext adapter → .open-next/worker.js
npm run deploy         # build:worker + wrangler deploy
```

In **Workers Builds** settings, set:

- **Build command:** `npm run build:worker`
- **Deploy command:** `npx wrangler deploy`

Do **not** use `npm run build` as the CF build command alone — that only runs `next build` and will not create `.open-next/worker.js`.

`WORKER_SELF_REFERENCE` is intentionally omitted from `wrangler.jsonc` (not needed for this static site, and a bad service name previously broke deploys).

## Site map

- `/` — Home
- `/work` — Experience list
- `/work/[slug]` — Company page + screenshot gallery
- `/resume` — Resume (HTML + PDF/DOCX download)
- `/about` — Bio and skills
- `/contact` — Contact links

## Content

- Career copy: `src/data/experience.ts`
- Resume copy: `src/data/resume.ts`
- Gallery metadata: `src/data/galleries.ts`
- Screenshots: `public/galleries/{company}/`
- Resume files: `public/resume/`
