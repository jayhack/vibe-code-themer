You are styling a web UI in the **Conserva** aesthetic. Apply the design kit
below verbatim — do not invent new colors, fonts, or motifs.

## Mood
A modern Spanish heritage delicatessen reissued for 2026. Cream butcher-
paper background, crimson stamped headlines all-caps and tightly stacked,
old-gold monogram crests, banner / pennant-shaped buttons, curve-cut photo
strips with food shot from overhead, and the year "DESDE 1987" repeated
like a stamp of authenticity. Warm, appetizing, peninsular, hand-crafted.
Tradition modernized — never twee, never gourmet-trendy.

References: Don Molinico (donmolinico.es), Brindisa, Conservas Olasagasti,
Lobel's, Levain Bakery print packaging, vintage Spanish vermouth labels.

## Palette (use these hex values — no substitutions)
- Cream:        #FBF5E7  (page background — warm butcher paper)
- Cream Warm:   #F4EAD0  (alt surface, gingham base)
- Crimson:      #D70321  (brand red — headlines, primary buttons, side rail)
- Crimson Deep: #A8021A  (jar bands, deep stamps)
- Oxblood:      #6A0613  (secondary button, hover, footer rules)
- Gold:         #CBA058  (monogram, button text, decorative rings)
- Gold Deep:    #A37B32  (italic script accents, "— Section labels")
- Coffee:       #2A1810  (body text, dark food gradients)
- Olive Green:  #4A5A2A  (olive bowl, stem dingbat — used sparingly)

Default page background is **Cream (#FBF5E7)**. Default body text is
**Crimson (#D70321)** for headlines and labels, **Coffee (#2A1810)** for
long-form copy. Body copy on Cream is set in Coffee for legibility; short
display copy is Crimson.

### Required surfaces
- **Paper grain**: three radial-gradient dot layers in tiny opacities of
  crimson/gold/coffee, sized 6px / 8px / 10px, layered on Cream. Subtle —
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
- **Warm marble countertop** (for hero food panels): three layered radial
  gradients in warm peach / terracotta / amber — see the preview.html
  `.marble` rule. Used as the backdrop for "overhead food photography"
  even when no real photo is present.

## Typography
Load these from Google Fonts:
- Display: `"Anton"` (single weight 400). Used for all hero headlines.
  Set `text-transform: uppercase`, `line-height: 0.88`,
  `letter-spacing: -0.005em`. Hero size: `clamp(3rem, 9vw, 7.5rem)`.
  Anton is wide-set Bebas — it should feel stamped, not delicate.
- Body / labels: `"Oswald"` weights 300/400/500/600/700. Used for
  paragraphs, labels, button copy, navigation. Body paragraphs are
  **all caps**, weight 600, `letter-spacing: 0.12em`, line-height
  relaxed. This is non-negotiable — sentences read as labels here.
- Heritage script (sparingly): `"Playfair Display"` italic 500/700.
  Used only for ≤2-word inserts inside a display headline (e.g. the word
  "nueva" or "sabor"), and for ornamental moments. Always tinted
  Gold Deep (#A37B32). **Never** for body copy.

Tracking rules:
- Anton display: `-0.005em` (already tight by design).
- Oswald uppercase: `0.12em` for paragraph labels, `0.22em` for the
  smallest tag labels (10–11px).
- Playfair italic: normal tracking, normal case (lowercase is fine).

## Visual motifs (include at least 5 per page)
1. **Heritage stamp**: a small crimson rectangle containing
   `DESDE 1987 ✦ NUEVA TRADICIÓN`. The `✦` is mandatory and tinted Gold.
   Always centered above the hero headline.
2. **Stacked display headline**: a hero set in Anton, broken onto 3–4
   short lines, each tightly stacked (`line-height: 0.88`). One word
   per headline may be swapped to Playfair italic in Gold Deep —
   typically the word "nueva", "sabor", or the article.
3. **Olive-branch dingbat**: a small SVG arch of three olive-shaped
   ellipses on each side of a vertical stem, in Gold. Used as a section
   divider beneath display headlines. Tilt the ellipses ±15°. Width ~76px.
4. **Pennant / ribbon buttons** with chevron-cut right edge using
   `clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%,
   calc(100% - 18px) 100%, 0 100%)`. Solid Crimson background, Gold text
   in Oswald 600 uppercase tracked 0.12em. Secondary version uses
   Oxblood background and Cream text. **No rounded corners on buttons.**
5. **Curve-cut photo strips**: horizontal panels of food imagery (or
   gradient stand-ins) with a concave bottom edge produced via
   `mask-image: radial-gradient(ellipse 140% 70% at 50% 0%, black 70%,
   transparent 72%)`. Top strips dip inward; bottom strips bulge outward
   (swap mask origin to `50% 100%`).
6. **Side rail brand bar** (right side of page, fixed, ~64px wide,
   Crimson background, full-height). Contains hamburger menu on top, the
   Gold "C" + crown monogram in the middle, vertical `DESDE 1987` text at
   the bottom rotated 180° with `writing-mode: vertical-rl`.
7. **Jar-lid product cards**: 4 circular product tiles laid out as red
   jar lids. Each is a `rounded-full` div with a Gold inner ring
   (`box-shadow: inset 0 0 0 2px gold, inset 0 0 0 6px lid-color,
   inset 0 0 0 7px gold`) and an SVG `<textPath>` running uppercase
   Oswald 700 around the circumference saying `DESDE · 1987 · NUEVA ·
   TRADICIÓN · CONSERVA · <flavor>`. The product name sits in the
   center in Anton at ~22px.
8. **Section markers**: short labels prefixed with `— ` and set in
   Oswald 600 at 12px, tracked 0.12em, in Gold Deep. e.g.
   `— Nuestros sabores`, `— Casa Conserva`.

## Components
Use **Tailwind CSS** (CDN). Component shapes:
- **Buttons**: pennant clip-path (see above). Square horizontal corners,
  chevron-cut right (or both) edges. Padding: `px-7 py-3.5 pr-12` to
  account for the cut. Mono-style Oswald 600 uppercase text tracked
  0.12em. Hover: deepen background to Oxblood.
- **Inputs**: bottom-border-only (`border-b border-[Crimson]`), Cream
  background, Coffee text, focus border becomes Gold Deep. Labels above
  inputs in the Section-marker style.
- **Stamps**: small Crimson rectangles with Cream/Gold uppercase text,
  used for "DESDE 1987" badges. Always sized to content + tight padding.
- **Cards / panels**: 1px gap grid where the gap color is Coffee/15%,
  panels themselves are Paper. Never rounded except for jar lids.
- **Nav**: lives entirely in the right-side rail. No top nav bar.
- **Heritage badge** (top-of-hero): horizontal pill of Crimson with
  three text blocks separated by the `✦` glyph in Gold.

Optional libraries: none. **Do not** pull in shadcn, MUI, DaisyUI, or
any icon set. The icon system is: `✦` (mandatory star), `·` (middle dot
separator for circular type and footer breadcrumbs), `—` (em dash for
section markers), and SVG illustrations of food objects (jar, bread,
olives, skillet, stuffed pepper, crown wing).

## Logos & shapes
- **Wordmark + monogram**:
  - Monogram: a single capital letter set in Anton, with a small Gold
    "crown wing" SVG sitting on top
    (`M6 8 L12 4 L18 9 L24 4 L30 8 L28 14 L8 14 Z`). Always Gold on
    Crimson, used in the side rail and the dark accent tile.
  - Wordmark: brand name in Anton at 2–3 rem, optionally with a small
    Playfair italic descriptor like `nueva tradición` underneath in
    Gold Deep.
- **Allowed shapes**: rectangles, circles (for jar lids), pennant
  clip-paths, the olive-branch dingbat, the crown wing, hand-drawn-feel
  SVG illustrations of food objects.
- **Banned**: drop shadows above 6px hard offset, glassmorphism /
  blur effects, gradients above 3 stops outside the marble texture,
  emoji icons (except the `✦` glyph), rounded corners on anything that
  isn't a jar lid or a tag pill.

## Accessibility
Crimson on Cream passes AA-large only. Use Crimson for headlines and
labels ≥14px. For body text below 14px, use Coffee (#2A1810). Gold on
Crimson is decorative only — never set body copy in Gold on Crimson.

## Deliverable
A single HTML file. Tailwind from `https://cdn.tailwindcss.com`, fonts
from Google Fonts (Anton, Oswald, Playfair Display). Apply the palette,
surfaces, motifs, typography rules, and component shapes exactly as
specified above. The page should look like a cream-paper recipe insert
from a heritage Spanish conservas brand — appetizing, hand-set, and
unmistakably peninsular.
