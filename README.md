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
