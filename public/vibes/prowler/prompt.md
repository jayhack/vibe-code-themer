You are styling a web UI in the **Prowler** aesthetic. Apply the design kit
below verbatim — do not invent new colors, fonts, or motifs.

## Mood
A hand-built restomod muscle coupé parked on pebble gravel in an Italian
villa courtyard at dusk. Lacquered dark teal-green paint deep enough to
read black at first glance, twin off-white racing stripes down the hood,
four chrome halo headlamps glowing cold-white from a blackened lower
bumper, and warm cognac saddle leather visible through the windshield.
Wisteria hanging behind the bushline. The vibe is **coachbuilt atelier,
not rally** — quiet, expensive, hand-numbered, prowling.

The audience is a private build registry, a coachbuilder's order sheet,
or an owner's manual letterpressed onto cream stock. Reference: small-batch
Italian restomod ateliers (Touring Superleggera, Automobili Amos), Singer
911 build sheets, Bizzarrini and Lancia rally heritage, 1970s gauge clusters
on rosewood dashboards. Avoid neon, racing-livery sponsor logos, AI-slop
chrome renders, and anything that screams stadium.

## Palette (use these hex values — no substitutions)
- Lacquer:       #0E2A2E   (body color — primary brand teal-green)
- Lacquer Deep:  #061418   (page background · tarmac · ink)
- Foliage:       #1F3326   (alt deep panel · wisteria backdrop)
- Chrome:        #DDE3E5   (trim · bezels · hairlines · dividers)
- Halo:          #F0EDDF   (off-white · hood stripe · LED ring · text-on-dark)
- Saddle:        #C58A4E   (cognac leather · primary CTA · warm accent)
- Saddle Deep:   #7A4A1F   (stitching · hover · ink-stamp warm)
- Amber:         #E8B73B   (single indicator · the warning blink · build № plate)

Default page background is **Lacquer Deep (#061418)** — Prowler is a
dark-mode-first vibe (the car at dusk, not the showroom). Long-form copy
is **Halo (#F0EDDF)**; secondary copy is **Chrome (#DDE3E5)** at 60–80%
opacity. Headlines are **Halo** or **Saddle**. **Saddle** is the warm
CTA tone and must occupy **under 12%** of any rendered surface — it is
the leather inside the cabin, not the paint job. **Amber** is rationed
even harder: at most **one Amber dot per visible viewport** — it is a
warning blinker, not a decoration.

### Required gradients (use these strings exactly — they are the vibe)
- **Lacquer body** (signature — used on hero, card hero, key panels):
  `linear-gradient(135deg, #0E2A2E 0%, #1A3D40 38%, #0E2A2E 62%, #061418 100%)`
- **Chrome strip** (vertical bezels, side trim, button rims):
  `linear-gradient(180deg, #F0EDDF 0%, #B5BFC2 28%, #6F7A7E 50%, #B5BFC2 72%, #F0EDDF 100%)`
- **Saddle leather** (primary CTA fill, cognac panels):
  `linear-gradient(135deg, #D69E62 0%, #C58A4E 40%, #9C6634 75%, #7A4A1F 100%)`
- **Halo lamp** (radial — the LED ring; used on the logo and one signal
  indicator per page):
  `radial-gradient(circle at 50% 50%, #FFFFFF 0%, #F0EDDF 18%, #DDE3E5 32%, #1A3D40 70%, #061418 100%)`
- **Villa courtyard** (180° atmospheric — for footers and full-bleed
  sections):
  `linear-gradient(180deg, #1F3326 0%, #122A2A 50%, #061418 100%)`

## Typography
Load these from Google Fonts:
- **Display: `"Saira Stencil One"`** weight 400. Mechanical stencil
  caps — reads as a VIN-plate, a fabrication drawing, a stamped chassis
  number. **Always uppercase**, `letter-spacing: 0.02em`,
  `line-height: 0.95`. Hero size `clamp(3.5rem, 9vw, 7.5rem)`. Always
  Halo, with the occasional Saddle word swap.
- **Body: `"Inter"`** weights 400/500/600/700. Sentence case for
  long-form. Section labels are **Inter 700 uppercase** at 11–12px,
  `letter-spacing: 0.22em`, in Chrome or Saddle.
- **Mono: `"JetBrains Mono"`** weights 400/500/700. Used for VIN
  strings, gauge readings, build line items, timestamps, and the
  diagnostic terminal. Mono uppercase tracking is always `0.18em`.
- **Atelier italic: `"Playfair Display"`** italic 500/600. Used **only**
  for ≤3-word inserts inside a Saira display headline ("garden",
  "prowling", "atelier", "by hand"), the bottom-of-page atelier
  signature, and pull-quotes. Always tinted Saddle.

## Visual motifs (include at least 6 per page)
1. **Halo lamp**: a 24–80px SVG composed of a 2px Chrome outer ring,
   the **Halo lamp** radial gradient inside, and a 3px white center
   dot. The signature glyph. Used as bullet, list marker, section
   opener, the eye of the logo, and the only “live” indicator.
2. **Quad-halo cluster**: four small halo lamps in a horizontal row
   (16–22px each, 6–8px gap) — the actual headlight cluster from the
   reference car. Used as the logo monogram and atop major sections.
3. **Twin hood stripes**: a pair of 4–8px Halo vertical bars (20px
   apart), running floor-to-ceiling down the **left** edge of a
   Lacquer-bodied panel. Replaces any left-border accent on hero cards.
4. **Chrome bezel**: a 1.5–2px Chrome border on Lacquer panels, with a
   1px inner Halo highlight at the top — reads as polished trim. Used
   on stat tiles, gauge dials, and the primary CTA rim.
5. **Saddle-stitch divider**: a dashed Saddle line (1px, 6px dash, 6px
   gap) with a tiny `×` cross-stitch glyph every 80px, in Saddle Deep.
   Replaces every generic `<hr>`. Reads like contrast-stitching on
   cognac leather.
6. **VIN plate**: a small etched-aluminum rectangle (Chrome gradient
   background, 1px Lacquer Deep border, 3px corner dots as bolt-heads)
   containing mono uppercase text like `№ 038 / 100 · MMXXVI · CARRARA`
   or `PROW · 23 · 038 · M`.
7. **Gauge dial**: a circular SVG with a Chrome bezel ring (gradient),
   Lacquer face, Halo numerals at 0/25/50/75/100 positions, a single
   Saddle needle, and one Amber tick at the redline. Used for stats,
   never decorative.
8. **Pebble grain**: subtle dual-radial-dot CSS texture on Lacquer
   Deep — Foliage and Chrome dots at 4–6% opacity, sized 5px / 9px —
   the gravel underfoot. Applied to the whole body background.
9. **Specimen plate corner-tag**: every card has a top-left tag in
   the format `◉ FIELD / 03` — a Halo lamp glyph + mono uppercase
   label, on a Lacquer Deep strip with 1px Chrome bottom border.

## Components
Use **Tailwind CSS** (CDN). Component shapes:
- **Buttons** (square corners, Inter 700 uppercase, tracking 0.18em):
  - `primary`: Saddle leather gradient bg, Lacquer Deep text. Hover:
    flat Saddle Deep + Halo text. `px-6 py-3`, 1px Saddle Deep border,
    4px Lacquer Deep hard offset shadow.
  - `secondary`: Lacquer bg, Halo text, 1px Chrome border. Hover:
    Foliage bg.
  - `ghost`: transparent bg, Saddle text. Hover: 1px Saddle bottom
    underline.
  - One `primary` per region. Never two side-by-side.
- **Inputs**: Lacquer bg, bottom-border-only (1px Chrome), Halo text.
  Focus border switches to Saddle. Labels above inputs in the mono
  section-marker style.
- **Cards / panels**: Lacquer or Foliage bg, 1.5px Chrome border with
  a 1px inner Halo top highlight, 4px Lacquer Deep hard offset shadow.
  Square corners — only halo lamps, pills, and bolt-head dots are round.
- **Pills / badges**: rounded-full, 1px Chrome border, Inter 700
  uppercase 10–11px tracking 0.22em, with a 6px colored dot (Halo,
  Saddle, or Amber). Background is always Lacquer or transparent.
- **Tables**: 1px Chrome/15% divide-y, Inter 600 uppercase headers in
  Chrome, Halo body cells, JetBrains Mono numerals in Saddle. A small
  halo lamp marks the active row.
- **Diagnostic terminal**: Lacquer Deep (#061418) bg, Halo text,
  Saddle `$` prompt, Saddle cursor, Amber `◆ FAULT` lines. 1px Chrome
  border, always inside a card with a `◉ OBD · 014` corner tag.
- **Gauge cluster**: a row of 3–5 circular gauge dials (component #7
  above) at the top of any dashboard — never a sparkline, never a
  vague chart. Numbers come from real units (rpm, °C, bar, kW, Nm).
- **Nav**: top bar with quad-halo cluster on the left, mono uppercase
  links center, one Saddle CTA right. 1px Chrome bottom rule with a
  centered 8px Halo diamond.

Optional libraries: **none**. No shadcn, MUI, DaisyUI, no icon set.
The icon system is exactly: the **halo lamp**, the **quad-halo
cluster**, the **gauge dial**, the **VIN plate**, and the glyphs
`◉` (Halo lamp glyph), `◆` (warning / fault diamond), `·`, `—`, `×`
(saddle-stitch). No emoji. No Heroicons. No Lucide.

## Logos & shapes
- **Wordmark + monogram**:
  - Monogram: the **quad-halo cluster** SVG (4 halo lamps in a row)
    inside a 64×40px Lacquer plaque with a Chrome bezel border, sitting
    on a 4px Lacquer Deep hard offset shadow.
  - Wordmark: `PROWLER` set in Saira Stencil One at 2–3 rem, Halo,
    optionally followed by a Playfair italic descriptor
    `· garden series` in Saddle.
- **Allowed shapes**: rectangles, circles (halo lamps, gauge dials,
  pill dots, bolt heads), thin Chrome hairlines, the twin-stripe pair,
  the saddle-stitch dashed line, and the VIN-plate rectangles.
- **Banned**: drop shadows above 6px offset, blur / glass / backdrop
  filters, gradients above the 5 named gradients above, ANY emoji,
  rounded corners on cards or buttons (pills excepted), Lucide /
  Heroicons / Feather icon sets, raw photographs of cars, AI-slop
  hero renders, racing decals or sponsor wordmarks.

## Accessibility
Halo on Lacquer Deep passes AA at all body sizes. Halo on Lacquer
passes AAA. Saddle on Lacquer Deep passes AA-large only — reserve
Saddle for ≥14px headlines, labels, and CTA backgrounds. Chrome
secondary text must stay above 14px and at ≥70% opacity for AA.
Amber on Lacquer Deep passes AA-large only — never set body copy
in Amber. The saddle-leather CTA (Lacquer Deep text on Saddle gradient)
passes AAA.

## Deliverable
A single HTML file. Tailwind from `https://cdn.tailwindcss.com`, fonts
from Google Fonts (Saira Stencil One, Inter, JetBrains Mono, Playfair
Display).

The page should look like a coachbuilder's private order sheet for car
№ 038 of 100 in the Garden Series: dark teal lacquer surfaces, twin
hood stripes down the hero, four chrome halo lamps glowing on key
modules, saddle-stitched dividers between sections, gauge dials
reporting real numbers, and one Playfair italic line of atelier
signature at the bottom. Apply the kit to coachbuilder surfaces:
- a **build order sheet** (the configurator — paint, leather, wheels,
  options, options total),
- a **garage workbench / diagnostic dashboard** (cars in progress,
  gauge cluster, OBD terminal, fault flags),
- an **owner's manual codex** (typeset workshop manual with a TOC
  sidebar and a code/spec specimen).

Avoid generic dev dashboards, AI-slop chrome renders, racing decals,
and anything that wants to feel like a stadium. Prowler is quiet,
expensive, hand-numbered, prowling.
