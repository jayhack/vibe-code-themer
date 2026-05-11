You are styling a web UI in the **Automata** aesthetic. Apply the design
kit below verbatim — do not invent new colors, fonts, motifs, or corner
radii.

## Mood
A live cellular automaton humming behind a sheet of paper. The background
is a quiet field of light-purple squares that flicker on and off — Conway's
Game of Life left running, never the foreground. On top of that field sit
sharp, distinct elements: thick black display type with a hard purple
lift-shadow, dark-purple gradient buttons with strong mono labels, and
crisp white secondaries. The page should feel like a research console for
emergent computation: ethereal background of compute, decisive controls
in front. Not cyberpunk, not neon — closer to a graduate lab notebook
where the math has been allowed to bloom across the wall.

References: Wolfram's *A New Kind of Science* plates, Conway's Game of
Life screenshots from a CRT, Bauhaus grid studies tinted lavender,
research-paper figure captions. The tone is **quiet underneath, loud on
top**.

## Palette (use these hex values — no substitutions)
- Paper:      #FFFFFF  (page background, secondary button fill)
- Lattice:    #F4ECFF  (faintest cell — "just died" / off-state shimmer)
- Bloom:      #DCC9FF  (the default light-purple living cell)
- Pulse:      #B69AFF  (older cell, still alive — second-generation glow)
- Spark:      #6B2BFF  (rare bright accent — pinned cells, focus rings, links)
- Sovereign:  #2D1473  (primary button base — dark, serious purple)
- Deep:       #150A45  (primary button gradient end, lift-shadow base)
- Glyph:      #0A0612  (default text — thick near-black with a violet tint)
- Stone:      #8E84A6  (muted text, captions, axis labels)

Default page background is **Paper (#FFFFFF)**. Default body text is
**Glyph (#0A0612)**. Muted copy is **Stone (#8E84A6)**.

**Discipline rule:** The cellular background does the atmospheric work.
Keep foreground elements **crisp, solid, and small in radius** — never
let the gradient or the cells bleed into a button, a card, or a chart.
Sovereign + Deep + Spark combined should occupy **less than 12%** of any
rendered surface. The cells underneath can drift across as much as 60%
of the canvas, but they live behind everything, at 50–65% opacity.

## Required gradients (use these strings exactly)
The system has **one** gradient — applied only to primary buttons and the
gallery card hero:

```
linear-gradient(180deg, #2D1473 0%, #150A45 100%)
```

A second, larger card-hero diagonal (used for the gallery thumbnail
only) bleeds from lattice into deep purple:

```
linear-gradient(135deg, #F4ECFF 0%, #DCC9FF 35%, #6B2BFF 72%, #2D1473 100%)
```

No other gradients. No radial sun discs, no glass, no blur. Everything
else is a flat field.

## Typography
Load these from Google Fonts:
- Display: `"Archivo Black"` — single weight (900). Use uppercase for
  mastheads, mixed case for section openers. Letter-spacing **-0.025em**,
  line-height **0.9**. Hero size: `clamp(3.5rem, 11vw, 9rem)`.
- Body: `"Inter"` weights **400 / 500 / 600 / 700**. Sentence case.
  14–16px paragraphs, line-height **1.55**.
- Mono: `"JetBrains Mono"` weights **400 / 500 / 700**. Uppercase for
  CTAs, micro-labels, telemetry (`GEN 0142`, `RULE B3/S23`, `LIVE 318`).
  Tracking for mono uppercase is always **0.16em**.

**The signature type effect — the lift-shadow.** Every display heading
gets a hard offset purple shadow that makes the letters feel cut out
and floating above the cells:

```css
.display-lift {
  color: #0A0612;
  text-shadow:
    4px 4px 0 #DCC9FF,
    8px 8px 0 rgba(21, 10, 69, 0.18);
}
```

Hero mastheads scale this up to `6px 6px 0 #DCC9FF, 12px 12px 0 rgba(21,10,69,0.18)`.
Section headlines stay at 4/8. Body copy and labels never use the
lift-shadow.

Type rules:
- Display is **always Glyph (#0A0612)** on Paper. Never violet display
  text, never on a Sovereign field.
- Mono labels are Stone or Spark, never Sovereign (too dark on Paper for
  10–11px).
- Section labels: Inter 500 at 11px, `letter-spacing: 0.16em`, uppercase,
  prefixed with the cell glyph `▪` in Spark.

## Visual motifs (include at least 5 per page)
1. **The living background.** A fixed-position `<canvas>` covering the
   viewport runs **Conway's Game of Life** at roughly **one step every
   ~1200ms** on a **large 44px cell grid with a 4px gap**. The cells
   are deliberately big, soft, and **far below the content's visual
   weight** — they're atmosphere, not pattern. Births and deaths
   **ease** (not lerp) toward their target alpha each
   `requestAnimationFrame`:

   ```js
   alpha += (target - alpha) * EASE
   ```

   with `EASE_IN ≈ 0.032` and `EASE_OUT ≈ 0.020`. The asymptotic curve
   makes cells feel like they're **softly landing** into the lattice
   rather than fading linearly. The target alpha for a living cell is
   capped at **0.72** (never 1.0) so even at peak the cells stay quiet,
   and the canvas element itself sits at **opacity 0.30** so the
   lattice is felt before it is seen. Cells fill with a single bluer
   periwinkle tint — `rgba(199, 202, 255, a)` — which reads more
   "computational" than the warmer Bloom that the rest of the kit uses
   for foreground accents. Don't band by age at this cell size; one
   quiet color is enough. Re-seed sparsely every ~80 generations (5%
   density) to keep activity alive; do a larger ~24% re-seed every 320
   generations. Honor `prefers-reduced-motion: reduce` by painting a
   single static frame. If JS is unavailable, fall back to a CSS-grid
   checkerboard of Bloom + Lattice cells.
2. **The lift-shadow display heading** (see Typography). Use it on the
   masthead, on each `§` section opener, and on UX-application titles.
   Three times per page minimum.
3. **The cell glyph `▪`** — the BLACK SMALL SQUARE, set in Spark, is
   the only icon system. Use it to bullet lists, prefix section labels,
   and replace any rounded dot.
4. **Telemetry strips.** Three or four mono uppercase stats riding a
   1px Glyph hairline: `GEN 0142 · LIVE 318 · BORN 12 · DIED 9`. Used
   in the simulation console and at the top of pattern cards.
5. **Cell-grid badges.** Pill-free badges built from a 4×2 mini grid
   of 4px Bloom squares with one Spark cell, followed by a mono label
   (`▪▪▪▪ / ▪▪▪◼ — STILL LIFE`).
6. **Pattern thumbnails.** Each named CA pattern (Glider, Blinker,
   Pulsar, R-pentomino, Gosper Glider Gun, LWSS) is rendered as a
   small SVG or CSS-grid of Bloom cells on Paper — never as a
   photograph, never with shading.
7. **Coordinate captions.** Figure captions read `Fig. 03 · (x=14, y=22)`
   in JetBrains Mono. Spark for the figure number, Stone for the
   coordinates.

## Components
Use **Tailwind CSS** (CDN). All component radii are exactly **2px**
(treated as "xxs"). No rounded-lg, no rounded-full except the focus dot.

- **Buttons**:
  - **Primary**: background `linear-gradient(180deg, #2D1473 0%, #150A45 100%)`,
    white text, mono uppercase at 12px, `letter-spacing: 0.16em`,
    font-weight 700, padding `13px 22px`, border-radius **2px**, a 1px
    inner highlight (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.18)`),
    and a hard 2px Bloom drop-shadow for lift (`box-shadow: 0 2px 0 #DCC9FF`).
    Hover: slightly brighter gradient (`#3A1C8F → #1B0D55`); active:
    shadow collapses (`transform: translateY(2px); box-shadow: none`).
  - **Secondary**: `background: Paper (#FFFFFF)`, `border: 1.5px solid Glyph`,
    Glyph text, mono uppercase 12px, padding `12px 21px`, border-radius
    **2px**, same lift-shadow trick in Bloom. Hover: invert to
    Glyph-on-Paper.
  - **Ghost / link**: Spark text with a 1px Spark underline, mono
    uppercase.
- **Inputs**: `background: Paper`, `border: 1.5px solid Glyph`,
  border-radius **2px**, padding `10px 14px`, text 14px Inter 500.
  Focus: border becomes Spark, plus a 3px Bloom outer ring
  (`box-shadow: 0 0 0 3px #DCC9FF`).
- **Selects**: same as inputs, with a `▪` glyph as the chevron.
- **Badges / pills**: rectangle with **2px radius**, `border: 1px solid Glyph`,
  Paper background, mono uppercase 10px Glyph text, optional Spark `▪`
  prefix. Never filled with Sovereign.
- **Cards**: Paper background, `border: 1.5px solid Glyph`,
  border-radius **2px**, plus a hard 4px Bloom drop-shadow for the
  same lift effect as buttons (`box-shadow: 4px 4px 0 #DCC9FF`).
  Header bar inside the card is a 1px Glyph hairline.
- **Sliders / dials** (for the simulation console): track is a 4px
  Lattice rail with a 4px Spark fill; thumb is a 14×14 Glyph square
  with 2px radius and a Bloom lift-shadow.
- **Tables / lists**: `divide-y` Glyph/15. Mono uppercase 10px Stone
  for left column labels, Inter 14px Glyph for body cells, JetBrains
  Mono 11px Stone for right-aligned coordinates.

Optional libraries: **none**. Hand-built from Tailwind + Google Fonts +
a small inline `<script>` for the CA simulation. **Do not** pull in
shadcn, MUI, DaisyUI, p5.js, or any icon set besides the `▪` glyph.

## Logos & shapes
- **Logo mark**: a 4×4 mini cellular grid — twelve Bloom squares with
  four Spark cells forming a glider pattern. Use the inline SVG:

  ```html
  <svg viewBox="0 0 36 36" width="28" height="28" aria-hidden="true">
    <!-- 4x4 grid, 8px cells with 1px gap -->
    <g fill="#DCC9FF">
      <rect x="0"  y="0"  width="8" height="8" rx="1"/>
      <rect x="9"  y="0"  width="8" height="8" rx="1"/>
      <rect x="27" y="0"  width="8" height="8" rx="1"/>
      <rect x="18" y="9"  width="8" height="8" rx="1"/>
      <rect x="0"  y="18" width="8" height="8" rx="1"/>
      <rect x="18" y="18" width="8" height="8" rx="1"/>
      <rect x="27" y="18" width="8" height="8" rx="1"/>
      <rect x="9"  y="27" width="8" height="8" rx="1"/>
      <rect x="18" y="27" width="8" height="8" rx="1"/>
    </g>
    <g fill="#6B2BFF">
      <rect x="18" y="0"  width="8" height="8" rx="1"/>
      <rect x="9"  y="9"  width="8" height="8" rx="1"/>
      <rect x="9"  y="18" width="8" height="8" rx="1"/>
      <rect x="0"  y="27" width="8" height="8" rx="1"/>
      <rect x="27" y="27" width="8" height="8" rx="1"/>
    </g>
  </svg>
  ```

  Pair the mark with an Archivo Black wordmark `AUTOMATA` in Glyph,
  with the lift-shadow.
- **Allowed shapes**: 2px-radius rectangles, the `▪` cell glyph, 1px
  Glyph hairlines, the 1.5px Glyph borders, and the canvas cell grid.
- **Banned**: anything with `border-radius > 4px`, drop shadows that
  aren't hard-offset Bloom, gradients beyond the two specified above,
  blur / glass / backdrop-filter, emoji, icon libraries, organic
  blobs, any chrome / glow / neon effect.

## Accessibility
Glyph on Paper is AAA. Glyph on Bloom (the lift-shadow color) is AAA at
14px+. Spark on Paper passes AA at ≥14px — fine for buttons and badges.
Sovereign on Paper passes AAA. The cellular background sits at ≤60%
opacity behind a Paper-fill content column so body text never lands on
a live cell. Reserve Stone (#8E84A6) for ≤14px micro-labels only.

The Game-of-Life canvas must respect `prefers-reduced-motion: reduce` —
stop the simulation and render a single static frame in that case.

## Deliverable
A single HTML file. Tailwind from `https://cdn.tailwindcss.com`, fonts
from Google Fonts (Archivo Black, Inter, JetBrains Mono). Render the
animated CA background canvas first, then a Paper-fill content column
on top, then apply the palette, typography rules, lift-shadow, and 2px
radii exactly as specified. The page should look like a research
console for emergent computation: ethereal underneath, ruthlessly sharp
on top. When in doubt, sharpen the foreground and quiet the background.
