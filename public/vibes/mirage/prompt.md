You are styling a web UI in the **Mirage** aesthetic. Apply the design kit
below verbatim — do not invent new colors, fonts, or motifs.

## Mood
A misunderstood desert-spirit dragonfly, cataloged by a 1970s expedition
team. Cream-sand pages, emerald scale-green ink, a single ruby-lens red,
and the iridescent stained-glass sweep of compound-eye wings. The vibe
is field journal meets retro-tech telemetry — equal parts Saharan
expedition log, biologist's notebook, and 1978 atmospheric sciences
console. Warm but precise. Outlandish in spirit, surgical in execution.

The reference is a real-world creature you can't quite catch — a
sandstorm-summoning dragonfly-dragon known only by tracks, refraction
heat-shimmer, and the occasional red glint of a goggle-lens in the dunes.
Surface this as: dev tools that feel like expedition gear. Code editors
become field journals; agent runs become drift expeditions; dashboards
become tracking telemetry.

## Palette (use these hex values — no substitutions)
- Bone Sand:    #F4E8C8  (page background — warm desert paper)
- Dune:         #E7D29A  (alt surface, panel base, table zebra)
- Spice:        #C26A2A  (warm clay accent — section markers, hover)
- Crimson Lens: #E0303F  (signature red — reticle, primary CTAs, "lens")
- Emerald:      #1FA956  (brand green — body scale, headlines, links)
- Emerald Deep: #0E6D3A  (text on Bone Sand, button hover, dark stamps)
- Sky Wash:     #5BA3D9  (wing iridescence cyan — accents, focus rings)
- Obsidian:     #1A1410  (deep text, terminal background, ink)

Default page background is **Bone Sand (#F4E8C8)**. Body text is
**Emerald Deep (#0E6D3A)** or **Obsidian (#1A1410)** for long paragraphs.
Headlines are **Emerald (#1FA956)**. Accents and CTAs are
**Crimson Lens (#E0303F)** — and Crimson Lens must occupy **under 8%**
of any rendered surface. It is a reticle, not a flood.

### Required gradients (use these strings exactly — they are the vibe)
- **Wing iridescence** (signature — used on hero, card-hero, key panels):
  `linear-gradient(135deg, #F4E8C8 0%, #F6BE6F 22%, #E0303F 42%, #5BA3D9 62%, #1FA956 80%, #0E6D3A 100%)`
- **Heat haze** (vertical shimmer for backgrounds and hero coronas):
  `linear-gradient(180deg, #F4E8C8 0%, #F6D080 35%, #E7D29A 70%, #F4E8C8 100%)`
- **Dune horizon** (footer / section bottoms):
  `linear-gradient(180deg, #F4E8C8 0%, #E7D29A 60%, #C26A2A 100%)`
- **Scale gradient** (logo mark, emerald medallions, dark panels):
  `linear-gradient(140deg, #1FA956 0%, #0E6D3A 100%)`
- **Crimson scope** (radial — used as the eye/lens of the logo and on
  one signal indicator per page):
  `radial-gradient(circle at 50% 50%, #FF6B73 0%, #E0303F 40%, #8A0E18 100%)`

## Typography
Load these from Google Fonts:
- **Display: `"Unica One"`** weight 400. Uppercase only, letter-spacing
  `0.04em`, line-height `0.92`. Geometric, retro-tech, faintly stenciled —
  it should read as *expedition signage*. Hero size
  `clamp(3.5rem, 10vw, 8rem)`. Always Emerald, with the occasional
  Crimson Lens word swap.
- **Body: `"Manrope"`** weights 400/500/600/700. Sentence case for
  long-form. Section labels are **Manrope 700 uppercase** at 11–12px,
  letter-spacing `0.22em`, in Spice or Emerald Deep.
- **Mono: `"JetBrains Mono"`** weights 400/500/700. Used for telemetry,
  coordinates, timestamps, the CLI block, and pill labels. Mono uppercase
  tracking is always `0.18em`.
- **Heritage italic: `"Cormorant Garamond"`** italic 500/600. Used **only**
  for ≤3-word inserts inside a display headline ("mirage", "drifts",
  "spirit", "afterimage"), and for the field-journal quote at the page
  bottom. Always tinted Crimson Lens.

## Visual motifs (include at least 5 per page)
1. **Crimson reticle**: a 14–22px SVG composed of a 1px Emerald ring +
   inner 1px Crimson Lens crosshair + 4–6px Crimson Lens center diamond.
   It is the signature glyph. Used as bullet, list marker, section
   opener, and the eye of the logo mark.
2. **Compound-eye hex grid**: a tiled background of 1px Emerald hexagons
   (use CSS background-image with two layered linear-gradients masked into
   hex shapes, or an SVG pattern) at 6–8% opacity. Used behind the hero
   and behind the spirit tracker stats. Subtle — it should read as
   "graph paper for compound eyes", not loud honeycomb.
3. **Heat-haze shimmer**: 1px vertical Sky Wash strokes rising from the
   baseline of the hero, repeating every 22–34px, animated up by 18px
   over 2.4s. `mix-blend-mode: multiply`, opacity `0.25`.
4. **Stained-glass wing panels**: large hero/card surfaces use the
   `wing iridescence` gradient. Optionally clip to a wing silhouette
   (long ellipse with pointed tip) — but flat rectangles also work.
5. **Dune horizon rule**: a 2px Emerald horizontal rule at section
   breaks, with a 6px Crimson Lens diamond centered on the rule. Replaces
   any generic `<hr>`.
6. **Sandstorm spiral**: an SVG spiral coil (use `<path d="..."` or a
   conic-gradient ring) used as the logo's body/tail and as a "loading"
   indicator. Always Emerald with a 4px Crimson Lens center dot.
7. **Telemetry beacons**: short JetBrains Mono lines in Emerald Deep
   prefixed with `> ` or `◆ ` — `> DUNE 14 OF 40 · SIGNAL STABLE`,
   `◆ DRIFT +3.2 NM · HEADING 217°`. Uppercase, mono, letter-spacing
   `0.18em`.
8. **Field-journal margin numerals**: Cormorant Garamond italic page
   numbers and side notes (`fig. 03`, `iv.`) tinted Crimson Lens, anchored
   to the left margin of panels.
9. **Hard offset shadow on cards**: panels that need to feel "stamped"
   use `box-shadow: 4px 4px 0 #0E6D3A` and a 1px Obsidian border. Never
   use blurred shadows. Never above 6px offset.

## Components
Use **Tailwind CSS** (CDN). Component shapes:
- **Buttons** (square corners, Manrope 700 uppercase, tracking 0.18em):
  - `primary`: Crimson Lens bg, Bone Sand text. Hover: Emerald Deep bg.
    `px-6 py-3`, 1px Obsidian border, 4px Emerald Deep hard offset shadow.
  - `secondary`: Bone Sand bg, Emerald Deep text, 1px Emerald border.
    Hover: Dune bg.
  - `ghost`: transparent bg, Spice text. Hover: 1px Spice bottom underline.
  - One `primary` per region. Never two.
- **Inputs**: Bone Sand bg, bottom-border-only (1px Emerald), Obsidian
  text. Focus border switches to Crimson Lens. Labels above inputs in
  the section-marker style.
- **Cards / panels**: Dune or Bone Sand bg, 1px Obsidian border, optional
  4px Emerald Deep hard offset shadow. Square corners — only the reticle
  diamonds, dots, and pills round.
- **Pills / badges**: rounded-full, 1px Emerald border, Manrope 700
  uppercase 10–11px, tracking 0.22em, with a 6px colored dot
  (Emerald, Crimson Lens, or Sky Wash). Background is always Bone Sand
  or transparent.
- **Tables / lists**: 1px Obsidian/15% divide-y, Manrope 600 uppercase
  headers in Spice, Obsidian body cells, JetBrains Mono numerals in
  Emerald Deep. Crimson reticle as the row marker on the active row.
- **Terminal / CLI block**: Obsidian (#1A1410) background, Bone Sand
  text, Emerald `$` prompt, Crimson Lens cursor. 1px Emerald Deep
  border. Always inside a card with a `◆ FIELD UNIT` corner tag.
- **Nav**: top bar, 2px Emerald bottom rule with a single Crimson Lens
  diamond centered on the rule. Wordmark left, mono uppercase labels
  center, one Crimson Lens primary CTA right.

Optional libraries: **none**. No shadcn, no MUI, no DaisyUI, no icon
set. The icon system is exactly: the **crimson reticle**, the
**sandstorm spiral**, hexagons (`⬡`, `⬢`), and the dot separator (`·`).
No emoji. No Heroicons. No Lucide.

## Logos & shapes
- **Wordmark + monogram**:
  - Monogram: a 56px square Emerald tile with the scale gradient, a 2px
    Bone Sand inner border, a sandstorm-spiral SVG in Bone Sand, and a
    single 6px Crimson Lens dot at the spiral center (the "eye").
  - Wordmark: `MIRAGE` in Unica One at 2–3 rem, Emerald, with optional
    Cormorant italic descriptor `· drifts north` in Crimson Lens.
- **Allowed shapes**: rectangles, circles (reticle, dot, monogram badge),
  hexagons (compound-eye tiles, stat backings), the sandstorm spiral,
  the wing-silhouette ellipse, and 1px hairlines.
- **Banned**: drop shadows above 6px offset, blur / glass / backdrop
  filters, gradients above the 5 named gradients above, ANY emoji,
  rounded corners on cards, lucide / heroicons / feather icon sets,
  raw photographs, AI-slop hero illustrations.

## Accessibility
Emerald Deep on Bone Sand passes AA at all body sizes. Emerald on
Bone Sand passes AA-large only — reserve for ≥14px headlines and
labels. Crimson Lens on Bone Sand passes AA at all sizes. Sky Wash is
decorative only — never set body copy in Sky Wash on Bone Sand. The
terminal block (Bone Sand on Obsidian) passes AAA.

## Deliverable
A single HTML file. Tailwind from `https://cdn.tailwindcss.com`, fonts
from Google Fonts (Unica One, Manrope, JetBrains Mono, Cormorant
Garamond). Apply the palette, gradients, motifs, typography rules, and
component shapes exactly as specified above.

The page should look like a 1978 desert expedition team's debrief on a
creature they could only half-photograph — sand-paper backgrounds,
emerald ink, ruby lens highlights, stained-glass wing prints in the
margins. Apply the kit to **developer surfaces**: code editors as field
journals, agent runs as drift expeditions, dashboards as tracking
telemetry, CLI welcomes as expedition radio chatter. Avoid pop-culture
references, mascot characters, and any literal animal illustration —
the spirit is implied by motif, never depicted.
