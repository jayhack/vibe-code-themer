You are styling a web UI in the **Dune** aesthetic. Apply the design kit
below verbatim — do not invent new colors, fonts, or motifs.

## Mood
A Denis Villeneuve still of Arrakis at dusk, paused. Endless beige sand,
the air thick with spice haze, an obsidian silhouette against an amber
horizon, and one cold sliver of Bene Gesserit blue cutting the warmth.
Monumental, slow, brutalist, planetary in scale. The page should feel
like a printed planetological survey delivered to House Atreides — quiet
beige paper with ember stamps, Roman-cap headlines carved like
inscriptions, and the rare blue panel humming like a glowing Ibad eye.

References for the look (not the topic): Denis Villeneuve cinematography
(Dune 2021/2024, Blade Runner 2049, Sicario), Trajan-column inscriptions,
brutalist concrete (Tadao Ando, Boullée), and Frank Herbert's appendices.
Avoid neon, glass, soft glow, and decorative blobs — Arrakis is austere.

## Palette (use these hex values — no substitutions)
- Bone:    #F2E5C8  (lightest sand · highlights, hero text on dark)
- Sand:    #E8D4A8  (page background — sun-bleached paper)
- Dune:    #D6B071  (deeper sand, dunes in shadow, panel separator)
- Bronze:  #8B5A2B  (deep sand shadow, body-secondary text)
- Spice:   #E8542C  (brand ember — primary CTAs, stamps, accents)
- Solar:   #FF8027  (bright spice glow — gradient highlight, badges)
- Ibad:    #1B4F7A  (Bene Gesserit blue — used SPARINGLY as the cold pop)
- Char:    #1A0F08  (deep dark — text, silhouettes, dark panels)

Default page background is **Sand (#E8D4A8)**. Long-form copy is
**Char (#1A0F08)**; secondary copy is **Bronze (#8B5A2B)**. Headlines
and section labels use **Char** or **Spice**. **Ibad** is rationed:
no more than ONE Ibad-tinted panel or stat per visible viewport — it's
the cold counterweight that makes the warmth feel hot.

### Required surfaces
- **Sand grain**: layer four tiny radial-dot textures on Sand to give
  the page warm paper grain. Use Bronze, Spice, and Char dots at
  3–6% opacity, sized 3px / 5px / 7px.
- **Spice haze** (hero, full-bleed):
  ```
  background:
    radial-gradient(ellipse 90% 65% at 50% 30%, #FF8027 0%, transparent 55%),
    linear-gradient(180deg, #FFB060 0%, #E8542C 35%, #8B3A1A 70%, #1A0F08 100%);
  ```
- **Sandstorm** (subtle banner / strip):
  ```
  background: linear-gradient(180deg, #F2E5C8 0%, #E8D4A8 50%, #D6B071 100%);
  ```
- **Obsidian** (dark panels, terminal blocks): solid `#1A0F08` with a
  hairline `#8B5A2B` border. Foreground text is Bone or Solar.
- **Ibad eye** (the blue counterweight): solid `#1B4F7A` with a 1px
  Bone inner border. Foreground text is Bone, accents are a thin Solar
  rule.

## Required gradients
1. **Arrakis horizon (card hero, page banner)**:
   `linear-gradient(180deg, #F2E5C8 0%, #FFB060 30%, #E8542C 55%, #6B2410 85%, #1A0F08 100%)`
2. **Spice ember (primary CTA)**:
   `linear-gradient(135deg, #E8542C 0%, #FF8027 100%)`
3. **Sandstorm strip (section banner)**:
   `linear-gradient(180deg, #F2E5C8 0%, #E8D4A8 60%, #D6B071 100%)`
4. **Eclipse disc (hero motif)**:
   `radial-gradient(circle at 50% 50%, #FF8027 0%, #E8542C 25%, #8B3A1A 55%, #1A0F08 90%)`

## Typography
Load these from Google Fonts:
- **Display: `"Cinzel"`** weights 500/700/900. Roman-inscription caps,
  used for every hero, section heading, and panel title. **Always
  uppercase**, `letter-spacing: 0.04em`, `line-height: 0.92`. Hero
  size: `clamp(3.5rem, 10vw, 8rem)`. Cinzel is doing the work of
  Trajan inscriptions cut into Arrakeen stone — treat it as carved,
  not decorative.
- **Body / labels: `"Inter"`** weights 400/500/600/700. Used for
  paragraphs, navigation, button copy, captions. Default body 15–16px,
  Char on Sand. Section labels are Inter 600 uppercase 11px tracked
  `0.24em`, in Spice or Bronze.
- **Mono: `"JetBrains Mono"`** weights 400/500/700. Used for telemetry,
  spice readings, coordinates, code blocks. Always uppercase when used
  as a label, tracked `0.18em`.
- **Optional accent: `"Cormorant Garamond"`** italic 500. Used for ≤2
  word inserts inside a Cinzel hero (e.g. *desert*, *prophet*) — always
  tinted Spice. Never for body copy.

Tracking rules:
- Cinzel display: `0.04em`.
- Inter body: normal; Inter labels uppercase: `0.24em`.
- JetBrains Mono labels: `0.18em`.

## Visual motifs (include at least 5 per page)
1. **Eclipse disc**: a large radial-gradient circle behind the hero, sized
   60–80vh, sitting low so the title clips its top edge. Uses the
   Eclipse gradient. The page's signature mark.
2. **Dune ripple SVG divider**: a 100%-wide SVG of three to five
   horizontal undulating lines (sine curves, 1px Bronze, 60% opacity),
   used between sections in place of a hard rule. Width: full bleed,
   height: ~36px.
3. **Atreides hawk emblem**: an SVG glyph — a downward-pointing chevron
   flanked by two outstretched wings (straight lines, no curves).
   Always rendered in Char on Sand, or Bone on Char. Used as the brand
   mark. Construction: `M0 12 L10 0 L20 12 L26 8 L20 16 L13 22 L7 16 L0 8 Z`
   feel — geometric, no organic curves. ~28px.
4. **Hieroglyph row** (Fremen sigil strip): a horizontal row of 6–10
   small glyphs (▲ ▽ ◇ ⌬ ⏣ ⌖ |‖| · ◯ ✦), Inter or symbol font,
   tracked `0.6em`, in Bronze. Used as a label-row above section
   headings, like a carved frieze.
5. **Sietch arch silhouette**: a vertical arch shape (clip-path:
   `polygon(0 100%, 0 30%, 50% 0, 100% 30%, 100% 100%)`) used as
   panel cards on the Sietch UX. Filled with Char + a thin Spice top
   highlight, never rounded.
6. **Ornithopter glyph**: a 4-bladed dragonfly silhouette in pure SVG
   lines (4 thin elongated diamonds around a small center cube). Used
   as a status icon and on the dispatch board.
7. **Sandworm track**: concentric arcs (3–5 nested ellipse paths in
   1px Bronze) representing Shai-Hulud surfacing. Used inside maps or
   as a decorative inset on a single panel.
8. **Coordinate grid**: a faint 56px Bronze 1px grid at 8% opacity over
   dark obsidian panels — never on Sand backgrounds.
9. **Heritage stamp**: a small Spice rectangle with Bone uppercase
   Inter text — `IMPERIAL · 10191 A.G.` or `HOUSE ATREIDES · ARRAKIS`
   — used once per major section. Always tight padding, square corners.

## Components
Use **Tailwind CSS** (CDN). Component shapes:
- **Buttons**: square corners always.
  - Primary = Spice ember gradient fill, Char text, Inter 600
    uppercase tracked `0.18em`, padding `px-5 py-3`.
    Hover deepens to flat Spice.
  - Secondary = transparent fill, 1px Char border, Char text.
    Hover swaps to Char fill / Bone text.
  - Ghost = Bronze text, no border. Hover = Char text + 1px Bronze
    bottom border.
- **Inputs**: bottom-border-only (`border-b border-Char`), transparent
  background, Char text, focus border becomes Spice. Labels above
  inputs in section-marker style.
- **Cards / panels**: 1px Dune separators between panels (gap-px on a
  Dune background). Each panel is Bone or Sand internally. Dark
  panels are Char with a 1px Bronze border. Never rounded.
- **Pills / tags**: 1px Bronze border on Sand, Inter mono uppercase
  10–11px text, Bronze color, optional 4px Spice or Ibad dot prefix.
  Square corners.
- **Stamps**: small Spice rectangles with Bone uppercase Inter text,
  used for `IMPERIAL · 10191 A.G.`, edition numbers, status badges.
- **Tables**: hairline Bronze/15% divide-y, never zebra striped.
  Roman-numeral row leaders in Cinzel, Inter middle, Mono right.
- **Terminal block**: Obsidian background, Bone text, prompt char `›`
  in Solar, cursor in Bone/40 opacity.
- **Nav**: minimal top nav, single Spice rule under active link.

Optional libraries: **none**. Do NOT pull in shadcn, MUI, DaisyUI, or
any icon set. The icon system is exactly: the Atreides hawk SVG, the
ornithopter SVG, the dune-ripple SVG divider, the sandworm-track SVG,
plus glyphs `›`, `·`, `—`, `◇`, `✦`, `▲`, `▽`. No emoji.

## Logos & shapes
- **Wordmark**: `DUNE` set in Cinzel 900 uppercase, tracked `0.18em`,
  in Char on Sand or Bone on Char. Optionally followed by a small
  Inter mono caption like `· ARRAKIS · 10191 A.G.` in Bronze.
- **Mark**: the Atreides hawk SVG glyph, ~28px square.
- **Allowed shapes**: rectangles, circles (only for the eclipse disc
  and the rare Ibad pill), the hawk and ornithopter SVGs, sietch arch
  clip-path, and the dune ripple SVG.
- **Banned**: drop shadows above 4px, glassmorphism / blur effects,
  rounded corners (everything is square except the eclipse disc and
  pills with intentional radius), gradients above 4 stops outside the
  Arrakis-horizon banner, emoji icons, neon glow, organic blobs, and
  any pastel.

## Accessibility
Char on Sand passes AA at all sizes. Spice on Sand passes AA-large
only — use Spice for headlines, labels ≥14px, and accents, never for
body copy. Bone on Char passes AA at all sizes. Ibad on Sand passes
AA-large only; Bone on Ibad passes AA at all sizes — keep Ibad text
≥14px or invert. The terminal block (Bone on Obsidian) passes AA at
all sizes.

## Deliverable
A single HTML file. Tailwind from `https://cdn.tailwindcss.com`, fonts
from Google Fonts (Cinzel, Inter, Cormorant Garamond, JetBrains Mono).
Apply the palette, surfaces, motifs, typography rules, and component
shapes exactly as specified above.

The page should look like a sun-bleached planetological survey of
Arrakis: warm beige paper, monumental Roman-cap inscriptions, ember
stamps and gradients, one rationed pop of Ibad blue, and the Atreides
hawk standing in for any logo. Apply the kit to **Imperial / Arrakis
operational surfaces**: an Arrakeen operations console (spice harvest,
weather, sandworm activity), an Imperial Archive (codex / manuscript
reader), and a Sietch Tabr communications board. Avoid generic dev
dashboards — every surface should feel like House Atreides could ship
it tomorrow.
