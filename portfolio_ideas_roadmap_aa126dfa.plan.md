---
name: Portfolio Ideas Roadmap
overview: "Track the portfolio ideas as a phased roadmap: keep GitHub Pages compatibility now, while leaving room for a Vercel-backed publishing/editor workflow later."
todos:
  - id: docs-next16
    content: Read relevant Next 16 docs for App Router static rendering/export before coding.
    status: pending
  - id: nav-structure
    content: Plan and implement routes plus sidebar links for about, blog, hobbies, cooking, and Kheaven.
    status: pending
  - id: content-model
    content: Create typed static content models for blog posts and recipes.
    status: pending
  - id: rendering
    content: Add list/detail rendering for blog posts and cooking entries.
    status: pending
  - id: kheaven-entry
    content: Add a lightweight Explore Kheaven entry page before building the Three.js world.
    status: pending
isProject: false
---

# Portfolio Ideas Roadmap

## Direction From Questionnaire

- Current deployment target: GitHub Pages/static hosting.
- Future target: possible Vercel deployment.
- Priority: full roadmap and idea tracking, not implementing every idea immediately.
- Recommended first content workflow: static repo-authored content using Markdown/MDX-style files, with a content layer that can later be swapped or extended for richer editing.

## Phase 1: Site Structure And Navigation

- Add top-level sections that match the portfolio concept:
  - `/about` for a short personal introduction.
  - `/blog` for writing.
  - `/hobbies` for cooking, guitar, and Beli/food exploration.
  - `/hobbies/cooking` or `/recipes` for recipe/cooking-log content.
  - `/kheaven` as the future entry point for the Three.js world.
- Update [`src/components/SiteSidebar.tsx`](src/components/SiteSidebar.tsx) so navigation includes the new sections while preserving the existing minimal sidebar style.
- Keep core personal metadata in [`src/content/site.ts`](src/content/site.ts), and add separate content files for about/hobbies/blog data so the sidebar does not become a content dumping ground.

## Phase 2: Blogging Infrastructure

- Introduce a static content model for posts and recipes under a content directory, likely something like:
  - `src/content/blog/`
  - `src/content/recipes/`
  - shared post metadata: `slug`, `title`, `date`, `summary`, `tags`, `kind`, and optional `html`/`interactive` flags.
- Start with Markdown/MDX-oriented rendering because it works well with static export and GitHub Pages.
- Treat raw plug-and-play HTML as a later, explicit feature because it needs sanitization and styling rules. If added, it should be opt-in per post rather than the default.
- Before implementation, read the relevant Next 16 docs in `node_modules/next/dist/docs/` for App Router/static rendering/export behavior, per the repo rules.

## Phase 3: About And Hobbies

- Build `/about` as a concise personal page with links into hobbies rather than a long biography.
- Build `/hobbies` as an index page for:
  - cooking and recipes
  - guitar playing
  - Beli / restaurants / food map ideas
- Make cooking the first deep hobby section because it can reuse the blog/recipe infrastructure.
- Add a cooking log page that lists recipes and notes using the same post list/detail components as the blog.

## Phase 4: Recipes And Cooking Log

- Define recipes as a specialized post type with optional fields like ingredients, steps, source/inspiration, cook date, notes, rating, and images.
- Render recipe detail pages with a cleaner structure than normal blog posts, but keep both powered by the same content pipeline.
- Keep recipe content static at first for GitHub Pages. Later, on Vercel, this could grow into an authenticated upload/editor flow.

## Phase 5: Explore Kheaven

- Add a lightweight `/kheaven` landing page first with an “Explore Kheaven” button from the main site.
- Plan the Three.js world as a separate interactive island so it does not slow down the normal portfolio/blog pages.
- Defer Three.js dependencies and scene architecture until the content sections are stable, unless you decide the world is the main priority.

## Upgrade Path For Vercel Later

- Keep content APIs internal and simple: pages should read through helper functions like `getAllPosts()` / `getPostBySlug()` rather than importing raw files everywhere.
- This keeps the first version static, but leaves room for later options:
  - Vercel deployment with server-rendered or ISR pages.
  - A private editor/admin route.
  - A headless CMS.
  - Rich text storage or MDX compilation at build time.

## Suggested First Implementation Slice

- Add sidebar navigation.
- Add `/about`, `/blog`, `/hobbies`, and `/hobbies/cooking` placeholder pages.
- Add a typed static content model for blog posts and recipes.
- Add one sample blog post and one sample recipe/cooking-log entry.
- Verify the app still builds and remains compatible with static deployment assumptions.
