You are styling a web UI in the **Conserva** aesthetic. Apply the design kit
below verbatim — do not invent new colors, fonts, or motifs.

## Mood
A heritage software workshop, reissued for 2026. Cream butcher-paper
backgrounds, crimson stamped headlines stacked tight in Anton, old-gold
monogram crests, banner / pennant-shaped buttons, curve-cut photo strips,
and the year `EST. 1987` repeated like a stamp of authenticity. The brand
position is _hand-crafted developer tools that are meant to age — not to
trend_. Warm, opinionated, hand-set, anti-AI-slop.

The aesthetic comes from heritage food packaging (Don Molinico, Brindisa,
Levain) but is applied here to **software**: code editors, documentation,
release journals, CLI welcomes, changelogs, manuals. Think: a printed
software box you'd find on a shelf in 1987, redrawn for a developer in 2026.

References for the look (not the topic): Don Molinico (donmolinico.es),
Brindisa, vintage software box art (Lotus, MacWrite), letterpress release
manuals.

## Palette (use these hex values — no substitutions)
- Cream:        #FBF5E7  (page background — warm butcher paper)
- Cream Warm:   #F4EAD0  (alt surface, gingham base, code-comment text)
- Crimson:      #D70321  (brand red — headlines, primary buttons, side rail)
- Crimson Deep: #A8021A  (deep stamps, hover states, secondary fills)
- Oxblood:      #6A0613  (secondary button, drop-shadow offset, footer rules)
- Gold:         #CBA058  (monogram, button text, decorative rings)
- Gold Deep:    #A37B32  (italic script accents, "— Section labels")
- Coffee:       #2A1810  (body text, terminal background, dark gradients)

Default page background is **Cream (#FBF5E7)**. Headlines and labels are
**Crimson (#D70321)**; long-form copy is **Coffee (#2A1810)**. Italic
heritage accents (Playfair) are always **Gold Deep (#A37B32)**.

### Required surfaces
- **Paper grain**: three radial-gradient dot layers in tiny opacities of
  crimson / gold / coffee, sized 6px / 8px / 10px, layered on Cream. Subtle —
  it should read as "warm paper", not "polka dots".
- **Gingham tablecloth** (for photo-panel backgrounds and decorative tiles):
  ```
  background-color: #F3DCD3;
  background-image:
    linear-gradient(45deg, rgba(168,2,26,0.18) 25%, transparent 25%, transparent 75%, rgba(168,2,26,0.18) 75%),
    linear-gradient(45deg, rgba(168,2,26,0.18) 25%, transparent 25%, transparent 75%, rgba(168,2,26,0.18) 75%);
  background-size: 18px 18px;
  background-position: 0 0, 9px 9px;
  ```
- **Warm marble** (for hero panels, manual page backgrounds): three
  layered radial gradients in warm peach / terracotta / amber.
- **Coffee gradient** (for dark callouts, terminal mockups, version
  stamps): `linear-gradient(135deg, #2a1810 0%, #5b3a2c 100%)`.

## Typography
Load these from Google Fonts:
- **Display: `"Anton"`** (single weight 400). All hero headlines.
  `text-transform: uppercase`, `line-height: 0.88`,
  `letter-spacing: -0.005em`. Hero size: `clamp(3rem, 9vw, 7.5rem)`.
  Anton should feel _stamped_, not delicate.
- **Body / labels: `"Oswald"`** weights 300/400/500/600/700. Used for
  paragraphs, labels, button copy, navigation. Body paragraphs are
  **all caps**, weight 600, `letter-spacing: 0.12em`. This is
  non-negotiable — sentences read as labels here. Reserve mixed-case
  for the rare lowercase italic accent only.
- **Heritage italic (sparingly): `"Playfair Display"`** italic 500/700.
  Used only for ≤2-word inserts inside a display headline (e.g. the
  word `new`, `tradition`, `finally`, `before`), and for ornamental
  moments. Always tinted Gold Deep (#A37B32). **Never** for body copy.
- **Code / monospace: `"JetBrains Mono"`** weights 400/500/600. Used
  inside the editor mockup, page numbers, version strings, and the
  CLI / terminal welcome. Never for headlines or labels.

Tracking rules:
- Anton display: `-0.005em` (already tight by design).
- Oswald uppercase: `0.12em` for paragraph labels, `0.22em` for the
  smallest tag labels (10–11px).
- Playfair italic: normal tracking, lowercase fine.
- JetBrains Mono: normal tracking.

## Visual motifs (include at least 5 per page)
1. **Heritage stamp**: a small crimson rectangle containing
   `EST. 1987 ✦ NEW TRADITION`. The `✦` is mandatory and tinted Gold.
   Always centered above the hero headline.
2. **Stacked display headline**: a hero set in Anton, broken onto 3–4
   short lines, each tightly stacked (`line-height: 0.88`). One word
   per headline may be swapped to Playfair italic in Gold Deep —
   typically `new`, `tradition`, `finally`, or an article like `before`.
3. **Olive-branch dingbat**: a small SVG arch of three olive-shaped
   ellipses on each side of a vertical stem, in Gold. Used as a section
   divider beneath display headlines. Tilt the ellipses ±15°. Width ~76px.
4. **Pennant / ribbon buttons** with chevron-cut right edge using
   `clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%,
   calc(100% - 18px) 100%, 0 100%)`. Solid Crimson background, Gold text
   in Oswald 600 uppercase tracked 0.12em. Secondary version uses Oxblood
   background and Cream text. **No rounded corners on buttons.**
5. **Curve-cut photo strips**: horizontal panels at the top of the page
   with a concave bottom edge produced via
   `mask-image: radial-gradient(ellipse 140% 70% at 50% 0%, black 70%,
   transparent 72%)`. Each panel contains a CSS-built mockup
   (code-editor window, manual page on marble, version stamp on coffee
   gradient) — **never a real photo**.
6. **Side rail brand bar** (right side of page, fixed, ~64px wide,
   Crimson background, full-height). Contains hamburger menu on top, the
   Gold "C" + crown monogram in the middle, vertical `EST. 1987` at the
   bottom rotated 180° with `writing-mode: vertical-rl`.
7. **Jar-lid medallions**: circular product tiles styled as red jar
   lids. Each is a `rounded-full` div with a Gold inner ring
   (`box-shadow: inset 0 0 0 2px gold, inset 0 0 0 6px lid-color,
   inset 0 0 0 7px gold`) and an SVG `<textPath>` running uppercase
   Oswald 700 around the circumference saying
   `EST · 1987 · NEW · TRADITION · ATELIER · <product>`. The product
   name sits in the center in Anton at ~24px with the version below in
   Oswald. Used to badge editor releases (e.g. QUILL v4.2).
8. **Section markers**: short labels prefixed with `— ` and set in
   Oswald 600 at 11–12px, tracked 0.12em, in Gold Deep. e.g.
   `— 02.1 / UX · Editor lineup`, `— Volume IV`. They sit above every
   sub-section heading.
9. **Hard offset shadow on cards**: paper cards that need to feel
   "letterpressed" use `box-shadow: 6px 6px 0 var(--oxblood)` with a
   2px Crimson border. Never use blurred shadows.

## Components
Use **Tailwind CSS** (CDN). Component shapes:
- **Buttons**: pennant clip-path. Square horizontal corners, chevron-cut
  right edge (`pennant`) or both edges (`pennant-both`). Padding:
  `px-7 py-3.5 pr-12` to account for the cut. Oswald 600 uppercase text
  tracked 0.12em. Hover: deepen background to Oxblood. There is also a
  reverse-pennant `pennant-left` for "back" buttons.
- **Inputs**: bottom-border-only (`border-b-2 border-[Crimson]`),
  transparent background, Coffee text, focus border becomes Gold Deep.
  Labels above inputs in the section-marker style.
- **Stamps**: small Crimson rectangles with Gold or Cream uppercase
  text, used for `EST. 1987`, `NEW`, version pills, and issue numbers.
  Always sized to content + tight padding. The deeper variant uses
  Oxblood.
- **Cards / panels**: 1px gap grid where the gap color is Coffee/15%,
  panels themselves are Paper. Hero / release cards use the 2px
  Crimson border + 6px Oxblood hard offset shadow. Never rounded
  except for jar lids and stamp pills.
- **Tables / TOCs**: dashed underline between rows
  (`border-bottom: 1px dashed rgba(42,24,16,0.25)`), Roman numerals
  in Anton on the left, Oswald label in the middle, JetBrains Mono
  page-range on the right.
- **Terminal / CLI block**: solid Coffee (#2A1810) background with a
  Coffee 1px border. Foreground text is Cream Warm; the prompt
  character (`$`) is Gold; cursor is Cream/40 opacity.
- **Nav**: lives entirely in the right-side rail. No top nav bar.

Optional libraries: none. **Do not** pull in shadcn, MUI, DaisyUI, or
any icon set. The icon system is exactly: `✦` (mandatory star), `·`
(middle dot separator for circular type and footer breadcrumbs),
`—` (em dash for section markers), the olive-branch SVG dingbat, and
hand-drawn-feel SVGs of workshop artifacts (code editor window, manual
page, version stamp, crown wing, jar lid).

## Logos & shapes
- **Wordmark + monogram**:
  - Monogram: a single capital letter (here, `C`) set in Anton, with a
    small Gold "crown wing" SVG sitting on top
    (`M6 8 L12 4 L18 9 L24 4 L30 8 L28 14 L8 14 Z`). Always Gold on
    Crimson, used in the side rail and the dark accent tile.
  - Wordmark: `ATELIER CONSERVA` in Anton at 2–3 rem, optionally with a
    small Playfair italic descriptor like `new tradition` underneath in
    Gold Deep.
- **Allowed shapes**: rectangles, circles (for jar lids and version
  stamps), pennant clip-paths, the olive-branch dingbat, the crown
  wing, hand-drawn-feel SVG illustrations of software artifacts (an
  editor window, a printed page, a version medallion).
- **Banned**: drop shadows above 6px hard offset, glassmorphism / blur
  effects, gradients above 3 stops outside the marble texture, emoji
  icons (except the `✦` glyph), rounded corners on anything that isn't
  a jar lid or a stamp pill.

## Accessibility
Crimson on Cream passes AA-large only. Use Crimson for headlines and
labels ≥14px. For body text below 14px, use Coffee (#2A1810). Gold on
Crimson is decorative only — never set body copy in Gold on Crimson.
The terminal block (Cream Warm on Coffee) passes AA at all sizes.

## Deliverable
A single HTML file. Tailwind from `https://cdn.tailwindcss.com`, fonts
from Google Fonts (Anton, Oswald, Playfair Display, JetBrains Mono).
Apply the palette, surfaces, motifs, typography rules, and component
shapes exactly as specified above.

The page should look like a cream-paper press sheet from a heritage
software workshop — hand-set, opinionated, and unmistakably built to
age. Apply the kit to **developer-product surfaces**: hero pages,
release journals, table-of-contents pages, editor lineups, CLI
welcome screens, and changelogs. Avoid food, restaurants, retail, or
any other consumer context — this is a workshop for tools.
