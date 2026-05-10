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
5. **Looks complete.** Include at minimum: a hero, one feature/section grid,
   one component (button, card, input, or form), and a footer. Show the vibe,
   don't just describe it.
6. **No tracking.** No analytics scripts, no Google Tag Manager, no Sentry, no
   pixels. Vibes are static art.
7. **Renders standalone.** Opening the file directly in a browser must work —
   no relative imports outside the directory.

Soft rules (strongly recommended):

- Render in dark **and** light modes if the vibe supports both.
- Keep the file under ~25 KB. If you need more, you're probably reaching for
  an asset that should live next to the HTML in the same directory.
- Only put assets inside `public/vibes/<slug>/`. Reference them with relative
  paths like `./logo.svg`.

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
- [ ] Prompt is prescriptive — every color, gradient, and font is named.
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
