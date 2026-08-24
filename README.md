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
npm run build:worker   # next build + OpenNext adapter → .open-next/
npm run deploy         # build:worker + opennext deploy
```

### Workers Builds (dashboard) — required settings

Cloudflare’s defaults (`npm run build` + `npx wrangler deploy`) **will fail** for OpenNext.

In **Workers → your worker → Settings → Build**, set:

| Field | Value |
| --- | --- |
| **Build command** | `npm run build:worker` |
| **Deploy command** | `npx opennextjs-cloudflare deploy` |
| **Non-production deploy** | `npx opennextjs-cloudflare upload` |

Do **not** leave Build as `npm run build` — that only runs Next.js and skips `.open-next/.build/open-next.config.edge.mjs`, which causes:

`Could not find compiled Open Next config, did you run the build command?`

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
