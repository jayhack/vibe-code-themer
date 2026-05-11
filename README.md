# Vibe Code Themer

> Muzli for coding agents — a curated, ever-growing wall of design aesthetics
> packaged as ready-to-use prompts.

Each card on the board is a **vibe**: a single HTML showcase plus a
prescriptive `prompt.md` that another coding agent (Cursor, Claude, Codex,
etc.) can paste in to immediately produce on-vibe UI.

Live site: <https://jayhack.github.io/vibe-code-themer/>

## What's in a vibe?

A vibe is a complete design kit:

- **Colors / gradients** — exact hex values, no "feel free to pick".
- **Visual motifs** — the recurring elements that make it the vibe.
- **Fonts** — exact families, weights, sizes per role.
- **Component kit** — buttons, cards, inputs, nav, badges, with recipes.
- **CSS libraries** — which framework / icon set / animation library.
- **Logos & shapes** — the shape language and what's banned.

## The canonical preview structure

Every `preview.html` follows the same shape so the gallery feels coherent.
**Show the kit, then use the kit:**

1. **Identity** — hero / masthead with the vibe's signature visual.
2. **Theme specification** — palette → gradients → typography → components.
   This is the design kit, made visible.
3. **UX applications** — at least two concrete product mockups (e.g. a
   leaderboard, a music broadcast, a checkout) with **realistic copy** that
   show what an on-vibe product actually looks like.
4. **Footer / colophon**.

Reviewers will reject PRs that skip the theme spec or replace UX applications
with lorem ipsum. See [`AGENTS.md`](AGENTS.md) for the full contract.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

Requirements: Node 18+. Uses Vite + React + TypeScript + Tailwind. The
gallery itself is intentionally white and restrained so each vibe pops
against it — please don't theme the gallery.

## Project layout

```
.
├── public/
│   └── vibes/<slug>/
│       ├── preview.html     # standalone HTML showcase (single file)
│       └── prompt.md        # the agent prompt = the design kit
├── src/
│   ├── data/
│   │   ├── types.ts         # Vibe interface
│   │   └── vibes.ts         # source-of-truth array of every vibe
│   ├── pages/
│   │   ├── Home.tsx         # the wall of cards
│   │   ├── VibeDetail.tsx   # iframe preview + prompt + meta
│   │   └── NotFound.tsx
│   └── components/
│       ├── Header.tsx
│       └── VibeCard.tsx
├── AGENTS.md                # how to submit a new vibe (read this!)
└── .github/
    ├── pull_request_template.md
    └── workflows/deploy.yml # GitHub Pages deploy on push to main
```

## Contributing

**Adding a new vibe is a 5-step PR:**

1. Pick a `slug` (e.g. `brutalism`, `y2k-bubble`, `swiss-grid`).
2. Create `public/vibes/<slug>/`.
3. Add `preview.html` (single file, Tailwind/Google Fonts via CDN OK).
4. Add `prompt.md` (the design kit, written as one continuous prompt).
5. Append an entry to `src/data/vibes.ts`.

Open a PR with the title `Add <Vibe Name> vibe`. The PR template walks you
through the checklist.

**Read [`AGENTS.md`](AGENTS.md)** for the full contract — it's the source of
truth for what makes a valid vibe.

## License

MIT. Vibes are shared. Build something nostalgic.
