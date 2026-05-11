You are styling a web UI in the **Thunderdome** aesthetic. Apply the design
kit below verbatim — do not invent new colors, fonts, or motifs.

## Mood
Mad Max, but slightly futuristic. Adversarial AI agent combat in a blackened
steel arena — match-poster, not friendly arcade. Chrome, damage, voltage.
Industrial, hostile, high-contrast, spectator-ready. Every surface looks
like it's been cut by a plasma torch and lit by overhead floods.

## Palette (use these hex values — no substitutions)
- Black Iron:   #050505  (page background, brand black)
- Gunmetal:     #4b545b  (metal midtone, borders, secondary surfaces)
- Chrome:       #edf3f7  (default text, logo highlight, primary button bg)
- Acid Cyan:    #28f0d4  (--ring, primary accent, "blue team" telemetry)
- Hot Magenta:  #ff2f7d  (brand slash, "red team" telemetry, danger)
- Burnt Ember:  #c64720  (--primary alt, sparingly, for warnings/sparks)

Default page background is **Black Iron (#050505)**. Default text is
**Chrome (#edf3f7)**. Muted secondary text is `#a8b0b6`. Hairline borders
are `#1f2428` or `rgba(75, 84, 91, 0.5)`.

### Required surfaces & gradients
- **Panel surface**: `linear-gradient(180deg, #0d1013 0%, #07090b 100%)`
  with a 1px gunmetal border and a 1px inner top highlight
  (`box-shadow: 0 1px 0 rgba(255,255,255,0.04) inset`).
- **Scratched chrome** (used inside the bolt logo and on metallic plates):
  ```
  background:
    repeating-linear-gradient(105deg, rgba(0,0,0,0.18) 0 1px, transparent 1px 4px),
    repeating-linear-gradient(85deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 7px),
    linear-gradient(180deg, #fff 0%, #d6dee5 30%, #6f7a83 55%, #b8c1c9 70%, #2a2f33 100%);
  ```
- **Damage cuts**: 1–2 thin diagonal `linear-gradient` stripes overlaid on
  hero panels at ~115deg, in Acid Cyan and Hot Magenta at 18% opacity.
  Always sparse, never decorative-only.
- **Scanlines overlay** on `<body>::after`: 1px white repeating gradient at
  3px spacing, `mix-blend-mode: overlay`, opacity 0.04.

## Typography
Load these from Google Fonts:
- Display: `"Barlow Condensed"` weights 800/900, **uppercase**, letter-spacing
  `-0.01em`. Used for hero titles, stat numbers, and section labels.
  This is the match-poster face — set it tight and huge.
- Body: `"Inter"` weights 400/500/600/700.
- Mono: `"JetBrains Mono"` weights 400/500/600. Used for **all** uppercase
  micro-labels (telemetry, scoring, integrity), pill text, corner tags, and
  button copy. Letter-spacing for mono uppercase is always `0.18–0.22em`.

Hero titles: `clamp(3rem, 8vw, 7rem)` with line-height `0.9`. Stat numbers
use Barlow Condensed 900 at 5rem with `letter-spacing: -0.02em`.

## Visual motifs (include at least 4 per page)
1. **Chrome bolt mark with chromatic damage cuts**: an SVG lightning bolt
   filled with the scratched-chrome surface, with two ghost copies offset
   ±8px in Acid Cyan and Hot Magenta behind it. The bolt has a 2px Black
   Iron stroke and a hard `drop-shadow(0 6px 0 rgba(0,0,0,0.5))`.
2. **Corner tags**: every panel has a `position: absolute; top: -1px;
   left: -1px` mono label like `◢ MARK / 02`, `◢ Color system`,
   `◢ Bracket / round 03`. Padding `4px 10px 5px`, color Acid Cyan,
   background Black Iron, with the panel's borders biting into it.
3. **The `◢` glyph** (BLACK LOWER RIGHT TRIANGLE, U+25E2) prefixes all
   mono micro-labels. It is the entire icon system. Do not introduce
   any other icon family.
4. **Hairline grid panels**: pages are built from 1px-gapped panels in a
   CSS grid where the gap color is `#1f2428` and panel surfaces stack
   over it. Never use rounded corners on panels — only on pills.
5. **Telemetry stat blocks**: number + uppercase mono label, each block
   bordered in either Hot Magenta (`red team`) or Acid Cyan (`blue team`)
   with a matching outer ring on the active one.
6. **Mono pills**: small uppercase pills with a 6px colored dot, used for
   tags ("Industrial", "Hostile", etc.).

## Components
Use **Tailwind CSS** (CDN). Component shapes:
- **Buttons** (square corners, mono uppercase copy, tracking 0.2em):
  - `primary`: Chrome bg, Black Iron text. Hover: pure white.
  - `secondary`: `#1a1d20` bg, Chrome text, Gunmetal border. Hover border + text → Acid Cyan.
  - `outline`: transparent bg, Chrome text, Gunmetal border. Hover → Hot Magenta.
- **Panels**: see "Panel surface" above. Square corners. Always with a
  corner tag.
- **Inputs**: Black Iron bg, 1px Gunmetal border, square corners.
  Focus border switches to Acid Cyan.
- **Pills/badges**: rounded-full, gunmetal/18% bg, gunmetal/55% border,
  mono uppercase, with a 6px colored dot.
- **Nav**: a thin top bar with a gunmetal bottom border. Mono labels left,
  text links right, primary CTA on the far right.

Optional libraries: none. The vibe is hand-built from Tailwind + CSS
gradients. **Do not** pull in shadcn, MUI, DaisyUI, or any icon set —
the only icon is `◢`.

## Logos & shapes
- **Logo mark**: an SVG lightning bolt
  `M68 0 L8 90 L52 90 L42 160 L112 60 L66 60 Z` with the scratched-chrome
  fill and the cyan/magenta ghost copies described above. Optional wordmark
  is "THUNDERDOME" in Barlow Condensed 900 with two horizontal slashes
  underneath in Acid Cyan + Hot Magenta.
- **Allowed shapes**: lightning bolts, triangles (`◢`), squares, hard
  diagonals at ~115°, hairlines.
- **Banned**: rounded blobs, soft shadows, organic curves, gradients with
  more than 3 stops outside the chrome surface, ANY emoji icons.

## Accessibility
Chrome on Black Iron passes AAA. When using Acid Cyan or Hot Magenta on
Black Iron, only use them for ≥14px text or non-text accents — both fail
AA on black for body copy below that.

## Deliverable
A single HTML file. Tailwind from `https://cdn.tailwindcss.com`, fonts
from Google Fonts (Barlow Condensed, Inter, JetBrains Mono). Apply the
palette, surfaces, motifs, typography rules, and component shapes exactly
as specified above.
