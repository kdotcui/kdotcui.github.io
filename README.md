# Portfolio

Minimal open portfolio — homepage shows each project with a horizontal image strip (inspired by [andrewliu.site](https://andrewliu.site/)), white layout, self-hosted [Satoshi](https://www.fontshare.com/fonts/satoshi) (Regular, Medium, Bold, Black in `src/app/fonts/`).

## Customize

1. **Name, work line, links** — edit `src/content/site.ts` (work URL, email, LinkedIn, Instagram, GitHub).
2. **Projects** — edit `src/content/projects.ts` (titles, copy, image paths).
3. **Images** — add JPG/PNG/WebP under `public/projects/<slug>/` and point `images[].src` at those paths (e.g. `/projects/my-work/hero.jpg`). Include `width` and `height` for best performance.

## Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Works on [Vercel](https://vercel.com) or any static host after `npm run build`.
