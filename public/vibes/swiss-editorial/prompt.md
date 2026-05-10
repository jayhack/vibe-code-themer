You are styling a web UI in the **Swiss Editorial** aesthetic. Apply the
design kit below verbatim — do not invent new colors, fonts, or motifs.

## Mood
A printed Swiss-design quarterly, opened on a desk. Twelve-column grid,
generous margins, hairline rules, one accent color. The page should feel
governed — every element sits on a baseline and inside a column. No
ornament, no shadows, no gradients. Restraint as the loudest tool.

References: Müller-Brockmann posters, Das Feld / Journal Quarterly /
WERK magazine, Apple `HIG` print typography, the New York Times print
edition. The tone is *editorial*, not *corporate*.

## Palette (use these hex values — no substitutions)
- Paper:  #F4F1EC  (page background, off-white with paper warmth)
- Ink:    #0A0A0A  (default text, all rules, primary button bg)
- Red:    #E3001B  (the single accent — used sparingly)
- Muted:  #6B6B6B  (labels, captions, metadata)

That is the entire palette. Four colors. No secondary, no tertiary, no
gradients, no tints beyond `Ink/15%` for the divide-y between table rows.

The accent **Red** appears no more than ~5 times per screen: one numeric
marker, one underlined CTA link, one drop-cap or pull-quote highlight, and
the occasional baseline rule under a "Specimen" header. Restraint is the
brand.

## Typography
Load these from Google Fonts:
- Sans (everything): `"Inter"` weights 300/400/500/600/700/800/900.
  Inter is the Helvetica substitute that ships everywhere; if available,
  prefer real Helvetica via the system fallback chain
  `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif`. Enable
  `font-feature-settings: "ss01", "cv11"` for the closer-to-Helvetica
  alternates.
- Editorial italic accents only: `"Newsreader"` italic 300/400. Used **only**
  for: in-line italicized words inside headlines (≤3 words at a time),
  pull-quotes, and the word "By" before a byline. Never for body copy.

Type scale & rules:
- **Display headlines**: Inter 800, `letter-spacing: -0.035em`,
  `line-height: 0.92`, sized `clamp(3rem, 7vw, 5.5rem)`.
- **Body**: Inter 400 at 15px, `line-height: 1.65`. Justified is allowed
  in 3-column layouts; otherwise left-aligned.
- **Labels** (the workhorse): Inter 500 at 11px, `letter-spacing: 0.18em`,
  `text-transform: uppercase`. Use these everywhere — section markers,
  bylines, page numbers, nav, captions.
- **Editorial italic**: Newsreader italic 300, sized 1.0–1.1× the
  surrounding text. Optionally tinted Red.
- **Drop cap**: a single capital letter at 4rem, Red, `float: left`,
  `line-height: 0.8`, used at the start of one feature article only.

## Visual motifs (include at least 5 per page)
1. **Twelve-column grid** with `gap-6` (24px). Every section uses
   `grid-cols-12`. A label sits in a 2-column gutter on the left, content
   in 7–10 columns to its right, a metadata stub in the remaining 2–3.
2. **Hairline rules** — 1px Ink — between every section. Three rule weights
   exist and **only three**:
   - `1px solid Ink` (default section divider)
   - `4px solid Ink` (heavy chapter rule)
   - `4px solid Red` (specimen / accent rule)
3. **Numbered markers**: `№ 02`, `№ 03`. The `№` is mandatory. Plus a
   small Red filled circle (22px) with a white numeral inside, used at
   feature openers.
4. **Index tables**: `divide-y` with `Ink/15` between rows. Each row =
   `№`, title, byline, page range, all on one baseline.
5. **Page-range / metadata stubs**: `pp. 12 — 27`, set in the Label style,
   right-aligned in the metadata column.
6. **One Red marker dot** (6px, `border-radius: 999px`) used once per
   masthead/nav to signal "live now" / "issue available".
7. **Drop cap** — see Typography. Exactly one per page maximum.

## Components
Use **Tailwind CSS** (CDN). All components are **square-cornered** except
for the single Red marker dot.

- **Buttons**:
  - Primary: `bg-[Ink] text-[Paper]` square, padding `px-5 py-2.5`,
    text-sm Inter 500. Hover: bg pure black.
  - Secondary: transparent, `border border-[Ink] text-[Ink]`, hover
    inverts to Ink-on-Paper.
  - Tertiary: a Label-styled link with a 1px Red `border-b` underline and
    a `→` glyph. Use for "Read more" / "Download PDF".
  - Accent CTA: `bg-[Red] text-white` square. Use sparingly — typically
    one per page (the subscribe button).
- **Inputs**: transparent background, **bottom-border-only** (`border-b
  border-[Ink]`), `py-2`, focus border becomes Red. Labels above inputs
  in Label style + Muted color.
- **Cards / panels**: there are no "cards" in the modern sense. Use
  `border border-[Ink]/20 p-5` only for the subscribe form. Everything
  else is delineated by rules and whitespace alone.
- **Nav**: a top bar separated by 1px Ink rules above and below.
  Uppercase Label links, active link in Ink, inactive in Muted.
- **Tables**: `divide-y divide-[Ink]/15`, no zebra striping ever.

Optional libraries: none. **Do not** pull in shadcn, MUI, DaisyUI, or any
icon library. The only glyphs used are: `№`, `—` (em dash), `·` (middle
dot), `→`, and a single 6px Red dot.

## Logos & shapes
- **Wordmark only.** No logo mark. The masthead is the publication name
  set in the Display style at ~3rem with a non-breaking space inside
  (e.g. `DAS\u00a0FELD`). No mark accompanies it.
- **Allowed shapes**: rectangles, hairlines, the single Red marker dot,
  and the 22px Red number circle.
- **Banned**: any drop shadow, any rounded corner above 4px (except the
  number circle and marker dot), any gradient, any decorative SVG icon,
  any emoji, any photograph treated like a "hero image".

## Accessibility
Ink on Paper is AAA. Red on Paper is AA-large only — never use Red for
body copy under 18px. Labels at 11px must always be Ink or Muted, never Red.

## Deliverable
A single HTML file. Tailwind from `https://cdn.tailwindcss.com`, fonts
from Google Fonts (Inter, Newsreader). Apply the palette, typography,
grid rules, motifs, and component shapes exactly as specified above.
The page should look like the cover and first spread of a Swiss design
quarterly that an agent can extend to additional pages without breaking
the system.
