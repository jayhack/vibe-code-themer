You are styling a web UI in the **NightWave** aesthetic. Apply the design
kit below verbatim — do not invent new colors, fonts, or motifs.

## Mood
A blacked-out warehouse rave at 3 AM. Vaporwave's grid horizon and CRT
glow stripped of pastel sentimentality and rebuilt in pure void black,
punched through with razor-thin **ion blue** and **ember orange**. Less
mall, more bunker. Hardcore — restrained — surgical. Every accent should
look like a flare cracked in a tunnel: small, sharp, the only thing your
eyes can land on.

## Palette (use these hex values — no substitutions)
- Void:       #030305  (page background, brand black)
- Carbon:     #0A0A0F  (cards, panels, raised surfaces)
- Steel:      #1A1A24  (secondary surfaces, hover states)
- Ash:        #2E2E3A  (hairline borders, dividers)
- Ion Blue:   #00B4FF  (primary cold accent — links, focus, signals)
- Ember:      #FF5B1F  (primary hot accent — CTAs, danger, the brand mark)
- Bone:       #E8E8EC  (default text on Void/Carbon)
- Smoke:      #6B6B7A  (muted text, secondary labels)

Default page background is **Void (#030305)**. Default body text is
**Bone (#E8E8EC)**. Muted text is **Smoke (#6B6B7A)**. Hairline borders
are **Ash (#2E2E3A)** or `rgba(232, 232, 236, 0.08)`.

**Discipline rule (the whole vibe lives or dies on this):** Ion Blue
and Ember together must occupy **less than 5%** of any rendered surface.
Use them as 1px strokes, single-letter highlights, dots, focus rings,
and the one button per region that matters. If you find yourself filling
a card with ember, you've broken the vibe.

### Required gradients
- **Ember stroke** (primary CTA fill, brand bar):
  `linear-gradient(135deg, #FF5B1F 0%, #FF8A1F 100%)`
- **Ion stroke** (signal indicators, secondary CTA outline glow):
  `linear-gradient(135deg, #00B4FF 0%, #0078CC 100%)`
- **Vignette** (page corona, applied as fixed `::before`):
  `radial-gradient(ellipse 80% 60% at 50% 0%, #14141C 0%, #030305 70%)`
- **Slash strip** (hero accent, alternating piercing cuts on Void —
  used at most once per page as a 4–8px tall strip):
  ```
  linear-gradient(
    90deg,
    #030305 0 30%, #00B4FF 30% 31%, #030305 31% 70%,
    #FF5B1F 70% 71%, #030305 71% 100%
  )
  ```

## Typography
Load these from Google Fonts:
- Display: `"Big Shoulders Display"` weight **800/900** — uppercase,
  letter-spacing **-0.01em**, line-height **0.85**. Industrial, condensed,
  poster-grade. Used for hero titles and section headers. Never lowercase.
- Body: `"Inter"` weights **400/500/600/700**. Sentence case.
- Mono: `"JetBrains Mono"` weights **400/500/700** — uppercase for
  micro-labels, telemetry, timestamps, and pill text. Letter-spacing
  for mono uppercase is always **0.22em**.

Hero size: `clamp(4rem, 10vw, 9rem)`. Stat numbers use Big Shoulders 900
at `5rem` with `letter-spacing: -0.02em`. Body: 14–16px.

## Visual motifs (include at least 4 per page)
1. **Ion grid horizon**: a perspective grid floor in **1px Ion Blue at
   40% opacity** on Void Black, rotated `perspective(700px) rotateX(62deg)`,
   masked to fade to transparent over the bottom 60%. Sharp lines — no
   glow, no thickening. The grid is a blueprint, not a sunset.
2. **Crosshair mark** (replaces the vaporwave sun disc): a 280–360px
   reticle — outer Ion Blue ring (1px), inner crosshair lines (1px Ember),
   four small notches at the cardinal points, a 3px Ember dot at center.
   Sits dead-centered behind the hero title. Optional faint Ion Blue
   radial halo, never warm.
3. **Razor scanlines**: 1px white repeating-linear-gradient at 3px spacing,
   `mix-blend-mode: overlay`, opacity **0.06** on the body.
4. **Glitch type**: hero text duplicated in `#FF5B1F` and `#00B4FF`
   layers offset by ±2px with `mix-blend-mode: screen`. Same technique
   as vaporwave; harsher palette.
5. **Tick / barcode dividers**: vertical 1px Ash ticks at irregular
   spacings (`2px, 6px, 14px, 4px, 22px, 8px...`) used as section breaks.
6. **Single ember stripe**: one — and only one — full-bleed 1px Ember
   diagonal at 115° per major section. Optionally one Ion Blue
   counter-stripe.
7. **CRT vignette**: the page-level radial gradient above plus a 1px
   inset ash border on every panel — gives the "tube" feeling.
8. **Terminal beacons**: short JetBrains Mono lines in Ion Blue like
   `> SIGNAL ACQUIRED · 03:42:18 UTC` or `// CHANNEL 037 · STABLE`.
   Always uppercase, always with the `>` or `//` prefix.

## Components
Use **Tailwind CSS** (CDN). Component shapes:
- **Buttons** (square corners only — never rounded; mono uppercase, tracking 0.22em):
  - `primary`: Ember gradient fill, Void text. Hover: brightness 110%,
    1px Ember outer ring (`box-shadow: 0 0 0 1px #FF5B1F`).
  - `secondary`: Carbon bg, Bone text, 1px Ash border. Hover border
    switches to Ion Blue + text to Ion Blue.
  - `ghost`: transparent bg, Smoke text, no border. Hover: Bone text,
    1px Ash bottom underline.
- **Cards / panels**: square corners, Carbon background, 1px Ash border,
  optional 1px Ion Blue inner top highlight
  (`box-shadow: inset 0 1px 0 rgba(0, 180, 255, 0.15)`). Never rounded,
  never blurred.
- **Inputs**: Void bg, 1px Ash border, square corners, mono placeholder
  in Smoke. Focus: 1px Ion Blue border, no halo.
- **Pills / badges**: square corners (4px max), uppercase mono, 1px Ash
  border, optional 4px colored dot (Ember for hot, Ion for cold). Never
  filled — only outlined.
- **Nav**: a thin top bar with a 1px Ash bottom border. Wordmark left,
  mono labels center, single Ember-outlined CTA on the right. No pills,
  no frosted glass.
- **Tables / lists**: 1px Ash divide-y, mono uppercase headers in Smoke,
  Bone body cells, Ion Blue numerals.

Optional libraries: **none**. The vibe is hand-built from Tailwind +
CSS gradients. **Do not** pull in shadcn, MUI, DaisyUI, or any icon set.

## Logos & shapes
- **Logo mark**: an SVG crosshair — outer 1px Ion ring, inner 1px Ember
  cross, 3px Ember dot at center. Pair with a Big Shoulders 900
  wordmark. Optional `▮` square cursor before the wordmark in Ember.
- **Allowed shapes**: 1px hairlines, squares, hard diagonals, the
  crosshair, and the warning glyphs `▲ ▼ ◤ ◢`.
- **Banned**: rounded blobs, soft shadows, drop shadows over 0px-blur,
  organic curves, multi-stop pastel gradients, ANY emoji, gloss, glass,
  or backdrop blur.

## Accessibility
Bone on Void passes AAA. Ember on Void and Ion Blue on Void both pass
AA at ≥14px — never use them for body copy below that. Smoke on Void
is borderline; reserve it for ≤12px micro-labels only.

## Deliverable
A single HTML file. Tailwind from `https://cdn.tailwindcss.com`, fonts
from Google Fonts (Big Shoulders Display, Inter, JetBrains Mono). Apply
the palette, gradients, motifs, typography rules, and component shapes
exactly as specified above. Restraint is the entire point — when in
doubt, remove a color, not add one.
