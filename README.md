# Abhi — Cinematic Engineering Portfolio

A premium, animation-driven engineering portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**.

It covers software engineering, embedded systems, IoT, applied AI and networking/security — with honest project status labels and clearly marked placeholders instead of invented credentials or fake links.

---

## Features

- Cinematic intro overlay, scroll progress bar and a desktop-only custom cursor
- Animated hero with canvas particle field, parallax orb and rotating role text
- Scroll-reveal animations on every section, animated counters and hover states
- A travelling "field engineer" character that jumps between sections and changes pose
  for each area — typing at a PC, reading books, soldering a board, running a packet
  trace, guarding the security lab and more
- Scene-aware props and lighting around the character (monitor, open book, PCB, rocket,
  neural net, router, radar shield, envelope)
- Six skill categories with honest proficiency labels (no fake percentages)
- Skill → project mapping chains
- 7 project case studies (4 featured + 3 additional), each with a dedicated page
- Six separate specialty scenes: embedded systems, IoT, software engineering, AI/ML,
  networking and cybersecurity — each with its own anchor, gradient lighting, capability
  list, stack and related work
- Journey timeline, education and certification placeholders, dev tools
- Working contact form (opens the visitor's email app — no backend, no stored data)
- Functional resume download (`public/resume.pdf`)
- SEO metadata, Open Graph/Twitter cards, `sitemap.xml` and `robots.txt`
- Accessible navigation, skip link, focus states and `prefers-reduced-motion` support
- Mobile navigation with animated panel and a compact character companion
- Film-grain, vignette and scanline layer for a cinematic finish
- Fully responsive layout

---

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion, CSS keyframes, canvas |
| Icons | Lucide React |
| Deployment | Vercel or Render |

---

## Project structure

```
abhi-portfolio/
├─ app/
│  ├─ layout.tsx              # metadata, fonts, navbar/footer, overlays
│  ├─ page.tsx                # single-page composition of all sections
│  ├─ not-found.tsx           # custom 404
│  ├─ robots.ts               # generated robots.txt
│  ├─ sitemap.ts              # generated sitemap.xml
│  └─ projects/[slug]/page.tsx# static case-study pages
├─ components/
│  ├─ character/              # SVG character rig, scene props, travelling stage
│  ├─ layout/                 # navbar, footer
│  ├─ sections/               # hero, about, journey, skills, projects, specialties, education, contact
│  └─ ui/                     # reveal, magnetic, counter, cursor, particles, cards, cinematic layer, etc.
├─ lib/data.ts                # ← ALL CONTENT LIVES HERE
├─ public/
│  ├─ resume.pdf              # placeholder resume (replace it)
│  └─ og-image.svg            # social preview image
├─ scripts/generate-resume.mjs
├─ styles/globals.css
├─ tailwind.config.js
├─ postcss.config.js
└─ next.config.js
```

---

## Local development

Requires **Node.js 18.17 or newer**.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build    # production build
npm start        # run the production build
```

> If `npm install` complains about peer dependencies, use `npm install --legacy-peer-deps`.

---

## Editing your content

Everything editable is in **`lib/data.ts`**:

1. **Profile** — name, email, phone, location, availability, bio, rotating roles.
2. **Social links** — `profile.linkedin` and `profile.github` currently contain
   `[YOUR LINKEDIN]` / `[YOUR GITHUB]`. Replace them with real URLs; the UI hides
   placeholder links and shows an “add URL” note instead.
3. **Domain** — set `profile.domain` and the `NEXT_PUBLIC_SITE_URL` env var.
4. **Projects** — 7 sample projects are included. Replace them with your real work:
   - `status` must be `"Completed"`, `"In Development"` or `"Concept"` — the UI colour-codes each.
   - `repo` and `demo` are `null` by default. **Only** set them to real URLs; otherwise the case-study page shows “no public repository yet” instead of a fake button.
   - `featured: true` puts a project in the large featured grid.
5. **Skills** — keep the `level` labels honest: `Expert`, `Advanced`, `Intermediate` or `Learning`.
6. **Specialties** — six scenes are defined in the `specialties` array: embedded, IoT,
   software, AI/ML, networking and cybersecurity. Each entry controls the anchor id,
   gradient, capabilities, stack, related projects, character pose and scene label.
   Add another entry and it automatically appears in the nav's scene list and the
   character stage.
7. **Education / certifications** — placeholders only. Add your real college,
   years and verified certificates. Do not publish unverifiable credentials.
8. **Resume** — overwrite `public/resume.pdf` with your real PDF. The placeholder
   file is generated by `scripts/generate-resume.mjs`.

After edits, run `npm run build` to confirm everything still compiles.

---

## The travelling character

The character is a hand-built SVG rig (no 3D library) in
`components/character/character.tsx`. Poses are Framer Motion variants:
`idle`, `wave`, `jump`, `type`, `read`, `think`, `build`, `shield`, `contact`, `run`.

`components/character/character-stage.tsx` watches the section anchors and, when the
active section changes, plays a jump → landing → new-pose sequence. It docks into a
reserved 300 px rail on screens ≥ 1280 px; below that it becomes a compact bottom-right
companion. It hides over the hero and the footer. Scene props live in
`components/character/scene-props.tsx`.

To add a section to the character's route, give it an `id` and add that id to
`sectionIds` in `lib/data.ts`, then add a scene entry in `character-stage.tsx`.

---

## Environment variables

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This value is used for canonical URLs, Open Graph metadata, `sitemap.xml` and
`robots.txt`. If unset, it falls back to `https://example.com` so the build never
crashes.

No secrets or API keys are required. The contact form uses a `mailto:` link, so
no message data leaves the browser.

---

## Deploying to Render

Next.js needs a **Node web service** (not a static site) because of the dynamic
metadata and SSG routes.

1. Push this folder to a GitHub repository.
2. In Render: **New → Web Service** → connect the repository.
3. Settings:
   - **Environment:** Node
   - **Build command:** `npm install && npm run build`
   - **Start command:** `npm start`
   - **Health check path:** `/`
4. Environment variables:
   - `NODE_VERSION` = `18.17.0` (or `20`)
   - `NEXT_PUBLIC_SITE_URL` = your Render URL or custom domain
5. Deploy. Render injects `PORT` automatically and `next start` picks it up.

If you use a custom domain, update `NEXT_PUBLIC_SITE_URL` and redeploy so
metadata and the sitemap use the correct host.

---

## Deploying to Vercel

1. Import the repository at <https://vercel.com/new>.
2. Framework preset: **Next.js** (defaults are correct).
3. Add `NEXT_PUBLIC_SITE_URL` with your production URL.
4. Deploy.

---

## Before you publish — checklist

- [ ] Replace `[YOUR LINKEDIN]` and `[YOUR GITHUB]` in `lib/data.ts`
- [ ] Replace `[YOUR COLLEGE NAME]`, years and education details
- [ ] Replace or delete certification placeholders
- [ ] Replace the 7 sample projects with your real projects
- [ ] Add real `repo` / `demo` URLs only where they exist
- [ ] Replace `public/resume.pdf` with your real resume
- [ ] Replace `public/og-image.svg` with a 1200×630 PNG/JPG if you want richer social previews
- [ ] Set `NEXT_PUBLIC_SITE_URL` in your host
- [ ] Run `npm run build` locally one final time
- [ ] Check every page and both mobile and desktop layouts

---

## Notes on honesty

This project intentionally avoids:

- invented company names, employment history or years of experience
- invented grades, awards or certifications
- fake GitHub or live-demo links
- proficiency percentages that imply measurement
- claims that in-progress or concept projects are deployed

Keep those constraints when you edit the content — it is what makes the
portfolio credible.

---

## License

Personal portfolio code. Replace the content with your own before publishing.
