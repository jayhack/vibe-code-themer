You are styling a web UI in the **Surf's Up** aesthetic. Apply the design
kit below verbatim — do not invent new colors, fonts, or motifs.

## Mood
A 1970s screen-printed surf poster pinned in a beach-shack cafe. Hand-cut
wave-curl letterforms stack edge-to-edge across cream paper while the sun
bleeds through them in marigold → tangerine → blood-orange → midnight
stripes, and a single ink silhouette carves the bottom of a curling wave.
The page should feel **printed by hand**: warm halftone grain, slightly
mis-registered color, no glow, no blur, no gradient haze — just sun,
ocean, thick black ink, and confidence. Equal parts surf-shop window,
60s travel poster, and risograph fanzine.

References: vintage Hawaiian / Californian surf prints (1965–1979), Steve
Wilson screenprints, Australian Surfrider posters, riso-printed zines,
the Beach Boys' "Endless Summer" cover, hand-painted board logos.
**Avoid**: airbrushed gradients, neon glow, glassmorphism, "tropical AI
slop", any palette that looks Instagram-pastel. This is screen-print, not
spring-break.

## Palette (use these hex values — no substitutions)
- **Foam**:     `#F4E7CA`  page background — cream paper, sun-bleached
- **Sand**:     `#E8D9B0`  deeper cream — panels, photo backdrops
- **Marigold**: `#F2BA3D`  the sun, yellow stripe in the sunset
- **Tangerine**:`#EE7B26`  orange stripe — secondary CTAs, accent
- **Crimson**:  `#D6362A`  blood-orange red — primary brand, headlines
- **Oxblood**:  `#8B2114`  deep red — hard-offset shadows, dark stamps
- **Lagoon**:   `#4E89B5`  ocean wave mid-blue — water surfaces
- **Midnight**: `#1F3A5F`  navy — the bottom-right "F" silhouette tone
- **Pitch**:    `#0A1A2E`  near-black ink — type, silhouettes, rules

Default page background is **Foam (#F4E7CA)**. Default body type is
**Pitch (#0A1A2E)**; muted copy is **Midnight (#1F3A5F)** at ~70%
opacity. Headlines are **Crimson** or **Pitch** — never Marigold and
never Tangerine (those tones fail contrast on Foam).

### Print-grain rule
**Every** large field gets a halftone grain overlay. Layer four small
radial-dot textures on Foam (and Sand) at 4–7% opacity, dot sizes
3px / 5px / 7px / 9px, tinted Oxblood + Pitch + Midnight. The page
must look like it was pulled through a riso, not rendered on a screen.

## Required gradients
The vibe uses **stripe gradients**, not blends. Hard color stops only —
no soft transitions, no radial haze.

1. **Sunset ribbon (hero, full-bleed banner)**:
   ```
   linear-gradient(
     180deg,
     #F2BA3D 0%, #F2BA3D 18%,
     #EE7B26 18%, #EE7B26 42%,
     #D6362A 42%, #D6362A 66%,
     #1F3A5F 66%, #1F3A5F 88%,
     #4E89B5 88%, #4E89B5 100%
   )
   ```
2. **Sun disc (radial sunset behind the hero)**:
   ```
   radial-gradient(
     circle at 50% 100%,
     #F2BA3D 0%, #F2BA3D 12%,
     #EE7B26 12%, #EE7B26 28%,
     #D6362A 28%, #D6362A 48%,
     transparent 48%
   )
   ```
3. **Card-hero diagonal (gallery / preview card)**:
   ```
   linear-gradient(
     135deg,
     #F2BA3D 0%, #EE7B26 28%,
     #D6362A 52%, #1F3A5F 78%, #4E89B5 100%
   )
   ```
4. **Stripe tape (top / bottom of section)** — 4 horizontal 6px bars,
   stacked: Marigold, Tangerine, Crimson, Lagoon. Use as a section break
   in place of an `<hr>` on light layouts.

That's the full gradient list. **No glassmorphism, no inner-shadow blur,
no soft drop-shadow over 2px** (the only exception is the hard 4px
Oxblood / Midnight offset on cards — see Components).

## Typography
Load these from Google Fonts:
- **Display: `"Anton"`** — single weight 400. Always uppercase,
  `letter-spacing: 0.02em`, `line-height: 0.85`. Hero size:
  `clamp(5rem, 16vw, 13rem)`. Anton is the heavy condensed grotesk that
  stands in for the hand-cut wave letterforms on the source poster —
  vertical stems, no flourish, treat it like a screen-print block.
- **Script accent: `"Pacifico"`** — used ONLY for ≤2-word inserts
  inside an Anton headline (e.g. *up*, *swell*, *dawn patrol*). Always
  tinted Crimson, slightly tilted (`transform: rotate(-4deg)`),
  generous `letter-spacing: 0.01em`. Never for body copy. Never for nav.
- **Body: `"Inter"`** weights 400 / 500 / 600 / 700. Sentence case.
  14–16px paragraphs, line-height 1.55, Pitch.
- **Mono: `"JetBrains Mono"`** weights 400 / 500 / 700. Used for
  telemetry, surf-report numbers, prices, time-stamps. Always uppercase
  when used as a label, tracked `0.18em`.

Tracking rules:
- Anton display: `0.02em`.
- Inter body: normal; Inter labels uppercase: `0.22em`.
- JetBrains Mono labels: `0.18em`.
- Pacifico: `0.01em`, never tighter.

### Print-register offset (mandatory)
Display headlines get a **screen-print mis-registration**: render the
headline three times stacked in the same position —
1. A Tangerine copy translated `(-2px, 2px)`,
2. A Lagoon copy translated `(2px, -2px)`,
3. The Pitch (or Crimson) copy on top, dead center.

Hero `SURF'S UP` wordmark uses this triple-print effect; standard
section headlines may use just two layers (Tangerine + Pitch).

## Visual motifs (include at least 5 per page)
1. **Sunset ribbon banner** — the hero/section banner with the 5-stripe
   gradient above. Headlines sit *across* it; the Pitch ink type must
   read on every band (we tested it — keep type Pitch, never white).
2. **Sun disc behind the hero** — the radial sunset gradient placed at
   the bottom-center of the hero so the wordmark "rises" out of it.
   Use a 700px disc, fixed at `position: absolute; bottom: -20%`.
3. **Wave-curl SVG mark** — the brand mark is a stylized curling wave:
   ```html
   <svg viewBox="0 0 40 28" width="40" height="28">
     <path d="M2 22 C 8 22, 10 8, 22 8 C 30 8, 34 14, 38 14
              L 38 22 L 30 22 C 26 22, 24 16, 20 16
              C 14 16, 12 22, 6 22 Z" fill="#D6362A"/>
     <circle cx="32" cy="10" r="3" fill="#F2BA3D"/>
   </svg>
   ```
   A curl with a small Marigold "sun" tucked into the lip. Used wherever
   a logo would sit, never recolored outside Crimson + Marigold.
4. **Silhouette surfer** — one pure-Pitch SVG silhouette of a surfer
   carving a wave bottom, used **once per page** as the visual anchor.
   Body in a low crouch, board angled ~25°, trailing hand. Lifted
   straight from the source poster's iconography.
5. **Wave-rule divider** — instead of `<hr>`, render a horizontal SVG
   sine curve (3–4 full periods, 1.5px Pitch, ~40px tall). Use between
   every major section.
6. **Halftone grain field** — see "Print-grain rule" above. Applied to
   `body` and every flat panel.
7. **Stripe tape** — the 4-bar Marigold/Tangerine/Crimson/Lagoon
   stripe, 24px tall, used at the very top and bottom of the page (the
   "poster border") and as a section opener.
8. **Vintage stamps** — small rectangular Oxblood-bordered tags in
   uppercase mono: `EST. 1970`, `SUMMER · '77`, `GROM APPROVED`,
   `DAWN PATROL`. Used as section badges and footer flair.
9. **Tide / swell glyphs** — `▲ ▼` arrows for swell direction, `~` (a
   single tilde tracked `0.4em`) for water surfaces in stat blocks.
10. **Number tag** — a small filled Crimson square with a Foam Anton
    numeral inside, used to mark section openers (`01`, `02`, `03`).

## Components
Use **Tailwind CSS** (CDN). Component shapes (square corners only —
nothing rounded except pill dots, the sun disc, and the wave-curl
mark's tucked sun):

- **Buttons**:
  - **Primary**: Crimson fill, Foam text, Anton uppercase 16px tracked
    `0.06em`, padding `14px 22px`. Hover: shifts to Oxblood. A **4px
    Pitch hard offset shadow** (`box-shadow: 4px 4px 0 #0A1A2E`) is
    required — the button literally looks pinned to the page.
  - **Secondary**: Foam fill, 2px Pitch border, Pitch text, same type
    treatment, same hard offset (but in Crimson: `box-shadow: 4px 4px
    0 #D6362A`).
  - **Ghost**: Crimson text, no border, 1.5px Crimson bottom-border on
    hover. Trailing `→` glyph, Inter 600 uppercase tracked `0.18em`.
- **Inputs**: transparent background, **bottom-border-only** (1.5px
  Pitch), Pitch text, focus border becomes Crimson. Placeholder is
  mono uppercase Midnight/70. Never rounded.
- **Cards / panels**: flat Foam or Sand surface, **2px Pitch border**,
  **4px hard Oxblood (or Midnight) offset shadow**. No soft blur, no
  gradient. The hard offset is the only shadow allowed.
- **Pills / tags**: rectangle with 1.5px Pitch border, Inter mono
  uppercase 10–11px, Pitch text, optional 6px Crimson or Lagoon dot
  prefix. Square corners.
- **Stamps**: small Oxblood-bordered rectangle with Oxblood mono
  uppercase text inside (e.g. `EST. 1970`). Optional Marigold fill for
  positive states.
- **Tables / lists**: hairline divider Pitch/15% `divide-y`, never
  zebra striped. Mono uppercase 11px Midnight for left column, Inter
  14px Pitch for body, JetBrains Mono 13px right-aligned for numerics.
- **Nav**: top bar with the wave-curl mark on the left, Anton wordmark
  next to it, Inter 600 uppercase tracked `0.18em` links right.
  Active link = 2px Crimson underline 6px below text.
- **Hero**: full-bleed sunset ribbon banner OR sand-paper section with
  the sun disc behind. The wordmark uses the triple-print register
  effect described above.

Optional libraries: **none**. No shadcn, no DaisyUI, no MUI, no icon
set besides the inline SVGs (wave-curl, sine-wave divider, silhouette
surfer, tide-arrow) you build yourself. **No** lucide/heroicons.

## Logos & shapes
- **Wordmark**: `SURF'S UP` set in Anton 400 uppercase, tracked
  `0.02em`, in Pitch on Foam (or Crimson on Foam). Triple-print
  register on the hero. The apostrophe is mandatory — `SURFS UP`
  without it reads wrong.
- **Mark**: the wave-curl SVG above (Crimson curl + Marigold sun tuck).
  ~40×28px. Pair with the wordmark or stand alone in nav.
- **Allowed shapes**: rectangles (the chassis of the system), 1.5–2px
  hairlines, the wave-curl SVG, the sine-wave divider, the silhouette
  surfer SVG, circles (only for the sun disc, the curl's sun tuck, and
  pill dots), and the stripe tape.
- **Banned**: drop shadows above 4px and any soft/blurred shadow (only
  hard offsets allowed); rounded corners (everything square except the
  exceptions above); glassmorphism / backdrop-filter; neon glow;
  gradients above the 4 in the gradient list; organic decorative blobs
  that aren't the curl or the silhouette; emoji; AI-generated hero
  illustrations; pastel anything; metallic / chrome effects.

## Accessibility
- Pitch on Foam: AAA at all sizes.
- Crimson on Foam: AA at ≥14px — use for headlines, labels, button
  copy, but **not** for body paragraphs.
- Foam on Crimson: AA at ≥14px — fine for button copy.
- Marigold on Foam: **fails AA** — use Marigold strictly for fills,
  dots, the sun disc, stamp backgrounds. **Never** as text.
- Lagoon on Foam: AA at ≥18px — fine for headlines, fails at body.
- Midnight on Foam: AA at all sizes — the muted-copy color.

The triple-print register is decoration: the readable layer (Pitch or
Crimson) is dead-center, so the headline still passes contrast even
when the Tangerine + Lagoon ghosts are visible.

## Deliverable
A single HTML file. Tailwind from `https://cdn.tailwindcss.com`, fonts
from Google Fonts (Anton, Pacifico, Inter, JetBrains Mono). Apply the
palette, sunset ribbon + sun disc + stripe tape gradients, halftone
grain, triple-print register on the hero, wave-curl mark, silhouette
surfer, wave-rule dividers, vintage stamps, and hard-offset cards
exactly as specified above.

The page should look like a 1970s screen-printed surf poster reissued
as a working product: warm cream paper, sun rising through stacked
condensed type, one ink silhouette carving the wave, and zero
gradient mush. Apply the kit to **surf-culture product surfaces**: a
surf-shop catalog (boards, fins, wax, traction pads), a swell /
tide / wind forecast dashboard for a real-ish break (Pleasure Point,
Steamer Lane, Rincon, Pipeline), and a contest leaderboard with heat
results. Use **realistic copy** — no lorem ipsum, plausible board
names (`Channel Islands Rocket Wide 5'10"`, `Lost Driver 2.0 5'8"`),
plausible board prices (`$745`), plausible wave heights (`4–6 ft @
14s WNW`), and plausible surfer names. The vibe is on-vibe when it
looks like it could ship as a small surf brand's site tomorrow.
