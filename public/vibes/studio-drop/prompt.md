You are styling a web UI in the **Studio Drop** aesthetic. Apply the
design kit below verbatim — do not invent new colors, fonts, or motifs.

## Mood
A small type studio's seasonal merchandise shop, printed on cream paper.
Massive Archivo Black mastheads spill across the viewport, a **single
hot red** rules every accent, neutral product photos sit on bone or ink
backdrops, and tiny mono labels keep the system honest. The page should
feel like a print catalog reissued for the browser: confident in
typography, ruthless about color. The energy is design-studio-doing-merch
— editorial restraint with a streetwear drop's swagger.

References: heavy grotesk apparel sites (HelloHello's *Outfit*, OFFF
festival merch, Pentagram studio shops), Swiss specimen books, Wim
Crouwel grids, late-90s editorial print. The tone is **catalog**, not
**brand**.

## Palette (use these hex values — no substitutions)
- Paper:     #F1E7D9  (page background — cream paper, warm off-white)
- Paper II:  #F7F0E5  (component / panel surface — slightly lighter cream)
- Bone:      #E8E0D2  (default product-photo backdrop)
- Stone:     #8C857C  (muted text, captions, metadata)
- Ink:       #0C0C0C  (default text, photo backdrop, ink button bg)
- Charcoal:  #1F1F1F  (secondary dark surface, nav inactive)
- Red Hot:   #FF1820  (the single brand accent — rules, marks, CTAs)
- Red Deep:  #C90F18  (Red Hot's hover / pressed state)

Default page background is **Paper (#F1E7D9)**. Default body text is
**Ink (#0C0C0C)**. Muted copy is **Stone (#8C857C)**.

**Discipline rule (this vibe is built on it):** Red Hot + Red Deep
combined must occupy **less than 6%** of any rendered surface. Use red
for: section labels, the masthead wordmark, the 2px rule that anchors
each section, the primary CTA, a single category dot ●, the `®`
superscript, and **nothing else**. If you find yourself filling a card
with red, you've broken the vibe — replace it with Ink or Bone.

## Fields & the one gradient
Almost every surface in Studio Drop is a **flat field**, not a gradient.
The only gradient in the system is the card-hero diagonal used in the
gallery:

```
linear-gradient(
  135deg,
  #F1E7D9 0%, #F1E7D9 55%,
  #FF1820 55%, #FF1820 58%,
  #F1E7D9 58%, #F1E7D9 100%
)
```

Beyond that: no glass, no blur, no multi-stop blends, no radial sun
discs. Product photos sit on **flat Bone (#E8E0D2)**, **flat Ink
(#0C0C0C)**, or — at most once per row — **flat Red Hot (#FF1820)**.

## Typography
Load these from Google Fonts:
- Display: `"Archivo Black"` — single weight (900). Uppercase only,
  letter-spacing **-0.05em**, line-height **0.86**. Hero size:
  `clamp(5rem, 16vw, 13rem)`. This is a Helvetica-grade workhorse
  grotesk cranked to its heaviest cut. Use it for: the masthead
  wordmark, section headlines, prices on the cart total, product detail
  titles.
- Body: `"Inter"` weights **400 / 500 / 600 / 700**. Sentence case.
  13–16px paragraphs, line-height **1.55**.
- Mono: `"JetBrains Mono"` weights **400 / 500 / 700**. Uppercase for
  CTAs, prices, micro-labels, the `®` glyph, drop numbers (e.g.
  `№ 04 / 03`). Letter-spacing for mono uppercase is always **0.18em**.

Type rules:
- **Display** is always Red Hot or Ink — never Stone, never on a red
  field. The masthead wordmark is Red Hot on Paper, period.
- **Labels** (the workhorse): Inter 500, 11px, `letter-spacing: 0.18em`,
  uppercase. Section labels are Red Hot; metadata labels are Stone.
- **Prices** are JetBrains Mono 400 at 14px — never display, never
  italic, never coloured. Currency sign in front (`$34.00`).

## Visual motifs (include at least 4 per page)
1. **Massive masthead wordmark** — the page name set in Archivo Black at
   `clamp(5rem, 16vw, 13rem)` in Red Hot, with a mono `®` superscript
   in the top-right corner of the wordmark. The wordmark may extend
   edge-to-edge of the page gutter; that is the point.
2. **The 2px red rule** — `height: 2px; background: Red Hot`. Used once
   under the masthead and once at the top of every major section. Never
   thicker than 2px, never dashed.
3. **The twin-bar studio mark `◼◼`** — two filled rectangles of equal
   width with a narrow gap (12×12 each, 6px gap). Renders in Red Hot at
   ~14–24px tall, used as the brand mark wherever a logo would sit. Use
   the inline SVG:

   ```html
   <svg viewBox="0 0 30 12" width="24" height="10">
     <rect x="0"  y="0" width="12" height="12" fill="#FF1820"/>
     <rect x="18" y="0" width="12" height="12" fill="#FF1820"/>
   </svg>
   ```

   This is the only logo mark. **Do not** use `++`, `**`, monograms, or
   crests. Two filled bars, that's it.
4. **Pagination dots** — three 9px circles in the top-right corner of
   the masthead row: one Ink-filled, one Ink-outlined, one Red Hot-filled.
   Used as a "you are on page N of 3" indicator and as decoration.
5. **Section labels in red, mono uppercase** — `◼◼ 01.1 / Palette` or
   `◼◼ 02.1 / UX — Drop shop`. The twin-bar mark always opens the
   section label.
6. **Realistic apparel copy** — drop numbers (`№ 04 / 03`), product names
   that sound like a type studio joke (`Printer's Devil Tee`, `Baseline
   12 Cap`, `Em-Dash Keychain`, `Offset Crew`, `Margin Hoodie`, `Drop
   Case Tote`), and prices in plain USD (`$34.00`, `$58.00`). **No
   lorem ipsum.** No "Product 1 — $XX.YY".
7. **One red-backdrop product photo per row** — exactly one of the
   four cards in a product grid uses `background: Red Hot` instead of
   Bone. It's the visual punch that anchors the page.
8. **Circular red "VIEW MORE" disc** — a 92×92 round badge overlapping
   one product image. Background Red Hot, mono uppercase white text at
   11px / `letter-spacing: 0.18em`. Used at most once per page.
9. **The `®` and `№` glyphs** — the registration mark always lives at
   the top-right of the masthead wordmark; the numero sign opens every
   drop reference (`№ 04 / 03`). Set both in JetBrains Mono.
10. **Underlined active nav** — current page = Red Hot text with a
    1.5px Red Hot underline 4px below; inactive = Charcoal text, no
    underline. Hover = Red Hot, no underline.

## Components
Use **Tailwind CSS** (CDN). Component shapes (all square corners except
for pagination dots and the VIEW MORE disc):

- **Buttons**:
  - **Primary**: `bg: Red Hot`, white text, mono uppercase at 11px,
    `letter-spacing: 0.18em`, font-weight 700, padding `13px 22px`,
    trailing `→` glyph. Hover: `bg: Red Deep`.
  - **Secondary**: transparent, `border: 1px solid Ink`, Ink text, same
    type treatment as primary. Hover: invert to Ink-on-Paper.
  - **Tertiary / link**: Red Hot text, 1px Red Hot bottom border, mono
    uppercase, used for "Shipping & returns →" style inline CTAs.
- **Inputs**: transparent background, **bottom-border-only**
  (`border-b border-Ink`), padding `py-2`, 14px text. Placeholder is
  mono uppercase Stone. Focus = bottom border becomes Red Hot. No
  rounded corners.
- **Selects**: same as inputs.
- **Quantity stepper**: `border-top` + `border-bottom` Ink only,
  `−  1  +`, 36px buttons, 44px value column, Inter 500.
- **Pills / category tags**: NOT a filled pill — render as
  `● APPAREL` where `●` is a 6px Red Hot dot followed by mono uppercase
  Red Hot text. No background, no border. This is the "category label"
  pattern.
- **Product card**:
  - Image area: `aspect-ratio: 4 / 5`, flat Bone backdrop by default,
    flat Ink or flat Red Hot as accent variants. Drop number in the
    top-left in mono uppercase 10px.
  - Caption row 1: product name (Inter 500, 15px, Ink) left, price
    (JetBrains Mono 400, 14px, Ink) right, baseline-aligned.
  - Caption row 2: category pill (`● APPAREL`).
- **Nav**: top bar with the twin-bar studio mark left, mono uppercase
  links centre/right, pagination dots far right. 1px Ink-hairline
  optional below the meta strip.
- **Cards / panels**: there are no rounded "cards" in the modern sense.
  Either a flat Paper II rectangle with surrounding `gap-px` Ink/15
  dividers, or — for the mailing-list aside — a flat Ink rectangle with
  Paper text. Never a shadow, never a gradient.
- **Tables / lists**: `divide-y` with Ink at 15% opacity, mono uppercase
  10px Stone for left column, Inter 13.5–14px Ink for body cells, mono
  11px Stone right-aligned for metadata. Never zebra-striped.

Optional libraries: **none**. The vibe is hand-built from Tailwind +
Google Fonts. **Do not** pull in shadcn, MUI, DaisyUI, or any icon set
besides the inline SVGs you build yourself.

## Logos & shapes
- **Logo mark**: the twin-bar `◼◼` SVG above. Pair with an Archivo Black
  wordmark in Red Hot and a mono `®` superscript.
- **Allowed shapes**: rectangles (the only shape that matters), 1px
  hairlines, the 2px Red rule, the twin-bar mark, pagination dots, and
  the single VIEW MORE disc.
- **Banned**: rounded blobs, drop shadows, soft shadows, gradients
  beyond the one card-hero diagonal, glass / blur / backdrop-filter,
  emoji, any icon library, any photograph treated as a decorative
  "hero illustration", any chrome / metallic effect.

## Accessibility
Ink on Paper is AAA. Red Hot on Paper passes AA at ≥18px — **never**
use Red Hot for body copy under 18px. Stone on Paper is AA-large only;
reserve it for ≤14px micro-labels. The Red Hot-backdrop product card
needs Ink, not white, as foreground (the cream-pink contrast on white
on red fails).

## Deliverable
A single HTML file. Tailwind from `https://cdn.tailwindcss.com`, fonts
from Google Fonts (Archivo Black, Inter, JetBrains Mono). Apply the
palette, motifs, typography rules, and component shapes exactly as
specified above. The page should look like the cover and first spread
of a type studio's seasonal merch catalog — confident in display type,
ruthless about color, set on cream paper. When in doubt, remove a
color, not add one.
