# AGENTS.md — How a coding agent submits a new vibe

Hey, agent. This file is the contract for adding a new vibe to **Vibe Code
Themer**. Follow it exactly and your PR will be mergeable on first read.

A "vibe" is just **two artifacts** plus **one entry in a TypeScript array**:

```
public/vibes/<slug>/preview.html   # standalone HTML showcase
public/vibes/<slug>/prompt.md      # the agent prompt = the design kit
src/data/vibes.ts                  # add one entry to the VIBES array
```

That's the whole contract. No build steps, no asset pipeline, no JS framework
inside the showcase — every vibe must run from a single HTML file.

---

## The 5-step submission flow

1. **Pick a slug.** Lowercase, hyphenated, unique. Examples: `vaporwave`,
   `brutalism`, `y2k-bubble`, `swiss-grid`, `glassmorphism`, `memphis`.
2. **Create the directory** `public/vibes/<slug>/`.
3. **Write `preview.html`** — a self-contained HTML file that demos the
   aesthetic. See "preview.html requirements" below.
4. **Write `prompt.md`** — the design kit, written as a prompt a coding agent
   can paste into another agent. See "prompt.md requirements" below.
5. **Append an entry to `src/data/vibes.ts`** matching the `Vibe` type in
   `src/data/types.ts`. Keep alphabetical-ish order or just add at the end.

Then `pnpm install && pnpm dev` (or `npm`/`yarn`) and confirm the card shows
up at `http://localhost:5173`, you can click into the detail page, the iframe
loads your preview, and the "Copy prompt" button works.

Open a PR with the title:

```
Add <Vibe Name> vibe
```

The PR template (`.github/pull_request_template.md`) walks you through the
checklist.

---

## From a reference website (optional workflow)

Sometimes a human sends a **live URL** and you derive a vibe from what you see,
then iterate until the kit feels right. The contract below still applies —
this section only describes **how to get from a URL to those files**.

### What to do with the URL

1. **Inspect the reference** in a browser (or inspect static assets where
   permitted). Note dominant colors and roles, type stacks and scale, spacing
   rhythm, borders/shadows, and recurring motifs. You are **not** scraping a
   pixel-perfect clone.
2. **Map findings into this repo's contract** — named palette + roles,
   gradient strings, typography (CDN links in the prompt where needed),
   motifs, and component recipes. See `prompt.md` and canonical `preview.html`
   section order so nothing is improvised off-structure.
3. **Do not** paste the reference site's analytics, tag managers, beacons,
   or other tracking into `preview.html`. Hard rule: vibes stay static art.

### Inspiration vs cloning

Treat the site as **reference material** for mood, palette, typography, and
layout language — not something to photocopy.

- Do **not** reproduce trademarked logos, wordmarks, mascots, or distinctive
  brand illustration systems.
- Use **original** names, imaginary companies, and your own realistic copy in
  UX mockups (the same realism rules as other vibes — no lorem ipsum).
- When unsure, abstract one level (e.g. “bold financial serif + electric
  cyan CTAs”) instead of duplicating a specific brand’s recognizable marks.

### Keeping artifacts in sync (especially when iterating)

The design kit should match everywhere it appears. When you change colors,
fonts, motifs, or stack choices, update **all** of:

- **`prompt.md`** — Source of truth for **names**, hex codes, gradients, fonts,
  and motif descriptions.
- **`preview.html`** — Theme spec **Palette** chips must show the same named
  hex values as in `prompt.md`. **Gradients** and **Typography** must match the
  prompt’s strings and font choices (specimens use the actual faces).
- **`src/data/vibes.ts`** — `palette` (name + hex), `fonts`, `motifs[]`,
  `kits[]`, and `shapes[]` should mirror the prompt in short form; `cardGradient`
  should fit what the preview sells.

**Iteration:** It is fine to sketch in `preview.html` first, but before the
vibe is “done,” **backfill** `prompt.md` and `vibes.ts` so nothing drifts. If
you edit the prompt first, refresh the preview until the theme spec and
applications match.

---

## `preview.html` requirements

Hard rules (your PR will be requested-changes if any of these fail):

1. **Single file.** No external JS bundles, no React, no Vue. Inline `<style>`
   and `<script>` are fine.
2. **Tailwind via CDN is allowed and encouraged**:
   `<script src="https://cdn.tailwindcss.com"></script>`. Other CSS libraries
   are allowed via CDN as long as the file remains self-contained.
3. **Google Fonts via CDN is allowed.** Pick fonts that match the vibe.
4. **Iframe-safe.** No `top.location` redirects, no autoplay audio, no popups,
   no `window.open`. Assume the file will be embedded in an `<iframe>` on a
   white parent page.
5. **Follows the canonical preview.html structure.** See the section below.
   Showing the design kit *before* using it is the entire point.
6. **No tracking.** No analytics scripts, no Google Tag Manager, no Sentry, no
   pixels. Vibes are static art.
7. **Renders standalone.** Opening the file directly in a browser must work —
   no relative imports outside the directory.

Soft rules (strongly recommended):

- Render in dark **and** light modes if the vibe supports both.
- Keep the file under ~50 KB. UX applications and a real component shelf
  push files into the 30–50 KB range, which is fine. If you're reaching for
  more, you probably want a binary asset that should live next to the HTML
  in the same directory.
- Only put assets inside `public/vibes/<slug>/`. Reference them with relative
  paths like `./logo.svg`.

---

## Canonical `preview.html` structure (mandatory)

Every `preview.html` MUST be organized in this exact order, top to bottom, so
that the gallery feels coherent regardless of which vibe a visitor opens.
**Show the kit, then use the kit.** Reviewers will reject PRs that skip,
reorder, or merge these sections.

1. **Identity** — masthead / hero that establishes the vibe name, tagline,
   and signature visual (logo mark, hero motif, key gradient).
2. **Theme specification** — the design kit, made visible. This block must
   contain four labelled sub-sections, in this order:
   1. **Palette** — every named hex swatch from `prompt.md`, rendered as
      filled chips with `name` + `hex` shown.
   2. **Gradients** — each named gradient (brand, surface, accent, etc.)
      rendered as a strip with the gradient applied and its CSS string or
      role label visible.
   3. **Typography** — display / body / mono specimens, each set in the
      actual font with its role and tracking annotated.
   4. **Components** — button variants, inputs, badges, cards, and any other
      core primitives in their default + one alternate state.
3. **UX applications** — at least **two** (ideally three) concrete product
   mockups that *use* the kit on real surfaces. The point is to show an
   agent pasting the prompt elsewhere what an on-vibe product actually
   looks like, not just decoration. Pick mockups that fit the vibe:
   - **Thunderdome** → contestant leaderboard, tournament bracket, live
     match scoreboard.
   - **VaporWave** → music broadcast / playlist, vintage mall shop, DJ card.
   - **Swiss Editorial** → magazine masthead + index, subscription form.
   - **Conserva** → product range, recipe card, "puntos de venta" map.

   Use **realistic copy**, not lorem ipsum. Use plausible names, numbers,
   timestamps, prices, and statuses. Each application should be one full
   visual block (not a single button) and should look like a screenshot
   of a real product the vibe could ship.
4. **Footer / colophon**.

Section breaks should be visually obvious — a labelled rule, a corner tag,
a section number, or whatever the vibe's idiom is. The theme specification
ALWAYS comes before the UX applications. No exceptions.

---

## `prompt.md` requirements

This file is the entire design kit, written as one continuous prompt. Another
coding agent should be able to paste it into Cursor / Claude / Codex and
immediately produce on-vibe UI. Cover, in this order:

1. **Mood** — one short paragraph: what feeling, what era, what reference.
2. **Palette** — every hex code you use, named, with explicit roles
   (primary brand, accent, background, text). No "feel free to pick", be
   prescriptive.
3. **Required gradients** — full `linear-gradient(...)` strings, named.
4. **Typography** — exact font families (CDN URL if not standard), sizes
   per role (display, body, mono), weights, letter-spacing rules.
5. **Visual motifs** — the recurring elements (e.g. "perspective grid floor",
   "scanlines", "halftone dots"). Tell the agent how to build each one.
6. **Components** — exact recipes for buttons, cards, inputs, nav, badges.
   Border radius, padding, shadow, hover state.
7. **Component kits & libraries** — which CSS framework, which icon set,
   which animation library. Be opinionated — vibes break when mixed.
8. **Logos & shapes** — the shape language. What primitives are allowed,
   what's banned (e.g. "no organic blobs"), how the logo mark is constructed.
9. **Accessibility** — minimum contrast, anything that needs special care.
10. **Deliverable** — describe the expected output (e.g. "single HTML file").

Length: aim for ~400–800 words. Long enough to be specific, short enough that
an agent reads the whole thing.

---

## `src/data/vibes.ts` entry

Add one object that matches the `Vibe` interface in
[`src/data/types.ts`](src/data/types.ts). Required fields:

- `slug` — must match the directory name.
- `name`, `tagline`, `description`, `tags`.
- `cardGradient` — the CSS gradient that becomes the card hero.
- `cardForeground` — `"light"` or `"dark"` for text-on-card.
- `palette` — at least 4, max 8 swatches with `name` + `hex`.
- `fonts.display`, `fonts.body`, optional `fonts.mono`.
- `motifs[]`, `kits[]`, `shapes[]` — the same content as your prompt, but in
  short bullet form (these render on the detail page).
- `previewHtml: "vibes/<slug>/preview.html"`.
- `promptMarkdown: "vibes/<slug>/prompt.md"`.
- Optional `author: { name, url }` — your handle gets a credit on the page.

---

## Self-check before opening the PR

Run through this checklist (the PR template asks for it):

- [ ] `npm run build` succeeds locally.
- [ ] Card appears on the home page with the right gradient + palette dots.
- [ ] Clicking the card loads the detail page; iframe renders the preview.
- [ ] "Copy prompt" copies the full `prompt.md` text.
- [ ] `preview.html` opens directly in a browser with no console errors.
- [ ] `preview.html` follows the canonical structure: identity → theme spec
      (palette, gradients, typography, components) → at least two UX
      applications with realistic copy → footer.
- [ ] Prompt is prescriptive — every color, gradient, and font is named.
- [ ] Named colors, fonts, and kit bullets match across `prompt.md`, theme spec
      in `preview.html`, and `src/data/vibes.ts` (see "Keeping artifacts in
      sync").
- [ ] If derived from a reference site: follows "Inspiration vs cloning" above;
      no trademarked marks or tracking from the source.
- [ ] No tracking, no autoplay, no popups, no broken images.

---

## Style guide for the vibes themselves

The whole point of this site is that **vibes are loud and the gallery is
quiet**. The home page is intentionally white, restrained, and Apple-clean so
that each card pops against it. Don't try to make the gallery match your
vibe — make the vibe match itself, and trust the gallery to frame it.

Anti-patterns we'll reject:

- "Generic dark dashboard with neon accents" — be specific to a movement.
- Vibes that are 90% one library's defaults (e.g. raw shadcn, raw DaisyUI).
- Prompts that say "use any sans-serif" or "any pastel palette". Be exact.
- AI-slop hero illustrations. Use shapes, type, and gradients.

Good first vibes to add: Brutalism, Y2K Bubble, Swiss/Helvetica, Memphis,
Glassmorphism, Claymorphism, Solarpunk, Cyberpunk, Editorial Print,
Skeuomorphic, Newspaper, Terminal/TUI, Pixel Art.
