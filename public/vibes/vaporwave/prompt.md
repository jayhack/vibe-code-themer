You are styling a web UI in the **VaporWave** aesthetic. Apply the design kit
below verbatim — do not invent new colors, fonts, or motifs.

## Mood
Late-night Tokyo arcade meets a pastel cassette cover. Magenta and ultraviolet
sunset bleeding into cyan, chrome serif type, low-poly horizon grids, and a
soft CRT scanline overlay. The page should feel nostalgic, slightly off-spec,
and deliberately "too much."

## Palette (use these hex values — no substitutions)
- Hot Pink:    #FF6AD5  (primary accent)
- Lavender:    #C774E8
- Ultraviolet: #8C52FF  (primary brand)
- Cyan:        #26C6DA  (secondary accent)
- Sunset:      #FF9472
- Midnight:    #0B0B2B  (background)

Default page background is **Midnight (#0B0B2B)**, default text is **#F8F6FF**.

### Required gradients
- Brand gradient (buttons, logos):
  `linear-gradient(135deg, #FF6AD5 0%, #8C52FF 100%)`
- Sunset gradient (heroes, suns):
  `linear-gradient(180deg, #FFF7C2 0%, #FFB84A 22%, #FF6AD5 55%, #8C52FF 100%)`
- Chrome text gradient (display headings only):
  `linear-gradient(180deg, #FFFFFF 0%, #FFD1F6 20%, #C774E8 45%, #8C52FF 65%, #26C6DA 100%)`
  applied via `background-clip: text` with a faint pink+violet glow.

## Typography
Load these from Google Fonts:
- Display: `"Monoton"` (fallback: `"Audiowide"`) — uppercase, letter-spacing
  `0.04em`, used for hero titles and section labels. ALWAYS render display
  text with the chrome gradient.
- Body: `"Space Grotesk"` weights 400/500/700.
- Pixel mono: `"VT323"` for terminal-style accents, prices, timestamps,
  ASCII shapes.

Hero size: clamp roughly `text-6xl`–`text-8xl`. Body size: `text-base`–`text-lg`.

## Visual motifs (include at least 3 per page)
1. **Perspective grid floor**: a single pink/cyan grid plane rotated
   `perspective(600px) rotateX(60deg)` from the page midpoint downward, masked
   to fade out at the bottom. Animate with a slow vertical scroll.
2. **Sun disc**: a circle filled with the sunset gradient, with horizontal
   black bands occupying the lower 40% (use a `repeating-linear-gradient`).
3. **Scanlines**: a 1px white repeating-linear-gradient at ~3px spacing,
   `mix-blend-mode: overlay`, opacity 0.04, applied to the whole `<body>`.
4. **Glitch type**: duplicate hero text in pink (`#FF6AD5`) and cyan
   (`#26C6DA`) layers offset by ±2px with `mix-blend-mode: screen`.
5. **Pixel terminal line**: somewhere visible, render a VT323 line like
   `> LOAD "A E S T H E T I C",8,1` in cyan with a soft glow.
6. **Optional**: checkerboard footer strips, dolphin/palm/statue silhouettes,
   roman numeral copyright (`© MCMXCVII`).

## Components
Use **Tailwind CSS** (CDN is fine). Component shapes:
- **Buttons**: `rounded-xl`, brand gradient background, white text, neon
  outer glow `box-shadow: 0 0 24px rgba(255,106,213,0.45), 0 0 48px rgba(140,82,255,0.35)`.
- **Cards**: `rounded-2xl`, `border border-white/10`, `bg-white/5`,
  `backdrop-filter: blur(10px)` (frosted-on-midnight).
- **Inputs**: `bg-black/40`, `border border-white/15`, focus border
  `#FF6AD5` or `#26C6DA`. Placeholders in VT323.
- **Pills/badges**: rounded-full, white/15 background, uppercase tracking
  `0.25em`, with a 1.5×1.5 dot in `#FF6AD5`.
- **Nav**: floating pill of links over a frosted background. Active link
  is solid white with `#0B0B2B` text.

Optional libraries: **Framer Motion** for parallax + glitch animations, but
do not pull in any other UI kit (no shadcn, no DaisyUI, no MUI). The vibe is
hand-built.

## Logos & shapes
- Logo mark: a `7×7` to `28×28` rounded square filled with a conic-gradient
  `conic-gradient(from 220deg, #FF6AD5, #8C52FF, #26C6DA, #FF6AD5)` and the
  neon outer glow above. Pair with a Monoton chrome wordmark.
- Use **only geometric primitives**: triangles ▲, circles ●, diamonds ◆,
  half-moons ◐, squares ■. Never organic blobs, never hand-drawn icons.
- Decorative dividers can be `vhs-bar`s: an 8/8 px repeating-linear-gradient
  in white/8 horizontal stripes.

## Accessibility
Even though this vibe is loud, keep contrast ratios ≥ 4.5:1 for body text
(white on midnight passes). Never put body copy directly on the chrome
gradient.

## Deliverable
A single HTML file is fine. Pull Tailwind from
`https://cdn.tailwindcss.com` and the fonts from Google Fonts. Apply the
palette, gradients, motifs, and component shapes exactly as specified above.
