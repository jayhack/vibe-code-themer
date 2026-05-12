import type { Vibe } from "./types";

/**
 * The single source of truth for every vibe shown on the board.
 *
 * To add a new vibe, copy an existing entry, update the fields, and drop the
 * matching files into `public/vibes/<slug>/`. See `AGENTS.md` for the full
 * contribution flow.
 *
 * Array order is the on-screen order — the home page renders a 3-column grid
 * straight from VIBES.map(...). Keep the cream/red-diagonal cards (Swiss
 * Editorial, Conserva, Studio Drop) spread across rows so no row repeats a
 * silhouette.
 */
export const VIBES: Vibe[] = [
  {
    slug: "automata",
    name: "Automata",
    tagline: "A Game of Life humming behind thick-cut black type.",
    description:
      "A research console for emergent computation. Large, soft, light-purple squares ease in and out across a fixed background canvas — Conway's Game of Life left running at a whisper, softly landing — while sharp, distinct elements sit on top: thick black display type with a hard purple lift-shadow, dark-purple gradient primary buttons, crisp white secondaries, and 2px corner radii everywhere. Best for simulation dashboards, pattern libraries, ML research microsites, lab journals, anything that should feel ethereal underneath and ruthlessly sharp on top.",
    tags: ["computational", "ethereal", "minimal", "research"],
    cardGradient:
      "linear-gradient(135deg, #F4ECFF 0%, #DCC9FF 35%, #6B2BFF 72%, #2D1473 100%)",
    cardForeground: "light",
    palette: [
      { name: "Paper", hex: "#FFFFFF" },
      { name: "Lattice", hex: "#F4ECFF" },
      { name: "Bloom", hex: "#DCC9FF" },
      { name: "Pulse", hex: "#B69AFF" },
      { name: "Spark", hex: "#6B2BFF" },
      { name: "Sovereign", hex: "#2D1473" },
      { name: "Deep", hex: "#150A45" },
      { name: "Glyph", hex: "#0A0612" },
    ],
    fonts: {
      display: '"Archivo Black", "Helvetica Neue", Arial, sans-serif',
      body: '"Inter", system-ui, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, monospace',
    },
    motifs: [
      "Fixed-position canvas running Conway's Game of Life at ~0.8 gen/sec",
      "Large 44px periwinkle cells that ease in/out exponentially — soft landings",
      "Canvas at 0.30 opacity · single rgba(199,202,255) tint capped at 0.72 alpha",
      "Thick-black display type with hard 4/8px Bloom + Deep lift-shadow",
      "Primary buttons: linear-gradient(180deg, #2D1473, #150A45) + 2px Bloom drop",
      "Secondary buttons: white fill, 1.5px Glyph border, same Bloom drop",
      "2px (xxs) corner radius on every surface — cards, buttons, inputs, badges",
      "Telemetry strip — GEN 0142 · LIVE 318 · BORN 12 · RULE B3/S23",
      "▪ BLACK SMALL SQUARE in Spark is the only icon, prefixed to every section label",
    ],
    kits: [
      { label: "Tailwind CSS", url: "https://tailwindcss.com" },
      {
        label: "Google Fonts: Archivo Black, Inter, JetBrains Mono",
        url: "https://fonts.google.com",
      },
      {
        label: "No UI kit, no icon set — hand-built canvas + Tailwind",
      },
    ],
    shapes: [
      "Logo mark = 4×4 SVG cell-grid (Bloom + Spark glider) — never a wordmark alone",
      "All radii exactly 2px (xxs) — no rounded-lg, no pills, no full-round",
      "Buttons: gradient primary with inner highlight + 2px Bloom drop-shadow",
      "Cards: 1.5px Glyph border + 4px hard Bloom drop-shadow · no soft shadow",
      "Allowed glyphs: ▪ only · banned: emoji, icon libraries, organic blobs, glow",
    ],
    previewHtml: "vibes/automata/preview.html",
    promptMarkdown: "vibes/automata/prompt.md",
    author: {
      name: "Vibe Code Themer",
      url: "https://github.com/jayhack/vibe-code-themer",
    },
  },
  {
    slug: "studio-drop",
    name: "Studio Drop",
    tagline: "Cream paper, heavy grotesk masthead, one ruthless red.",
    description:
      "A small type studio's seasonal merch catalog, reissued for the browser. Massive Archivo Black mastheads spill edge-to-edge in Red Hot, a 2px red rule anchors every section, and product photos sit on flat Bone or flat Ink — never gradient. The twin-bar studio mark `◼◼` replaces every monogram. Realistic apparel copy, `№ 04 / 03` drop numbers, pagination dots, and ruthless typographic hierarchy. Best for design-studio merch shops, drop sites, fashion-editorial mockups, anything that should feel printed and confident.",
    tags: ["editorial", "streetwear", "grotesk", "minimal"],
    cardGradient:
      "linear-gradient(135deg, #F1E7D9 0%, #F1E7D9 55%, #FF1820 55%, #FF1820 58%, #F1E7D9 58%, #F1E7D9 100%)",
    cardForeground: "dark",
    palette: [
      { name: "Paper", hex: "#F1E7D9" },
      { name: "Paper II", hex: "#F7F0E5" },
      { name: "Bone", hex: "#E8E0D2" },
      { name: "Stone", hex: "#8C857C" },
      { name: "Ink", hex: "#0C0C0C" },
      { name: "Charcoal", hex: "#1F1F1F" },
      { name: "Red Hot", hex: "#FF1820" },
      { name: "Red Deep", hex: "#C90F18" },
    ],
    fonts: {
      display: '"Archivo Black", "Helvetica Neue", Arial, sans-serif',
      body: '"Inter", system-ui, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, monospace',
    },
    motifs: [
      "Massive Archivo Black masthead wordmark in Red Hot with mono ® superscript",
      "2px Red Hot rule anchoring every section — never thicker, never dashed",
      "Twin-bar studio mark ◼◼ (two filled rectangles) replaces every monogram",
      "Pagination dots (●○● in Ink + Red Hot) top-right of the masthead row",
      "Section labels as `◼◼ 01.1 / Palette` in mono uppercase Red Hot",
      "One Red Hot-backdrop product photo per row of four — the visual punch",
      "Circular red `VIEW MORE` disc overlapping one product image, mono uppercase",
      "Realistic apparel copy — drop numbers `№ 04 / 03`, `Printer's Devil Tee`, `$34.00`",
      "Underlined active nav (1.5px Red Hot, 4px below text)",
      "Flat fields only — no gradients beyond the card-hero diagonal",
    ],
    kits: [
      { label: "Tailwind CSS", url: "https://tailwindcss.com" },
      {
        label: "Google Fonts: Archivo Black, Inter, JetBrains Mono",
        url: "https://fonts.google.com",
      },
      {
        label: "Reference: type-studio merch catalogs (HelloHello Outfit, OFFF, Pentagram shop)",
        url: "https://outfit.hellohello.is/",
      },
    ],
    shapes: [
      "Logo mark = twin-bar SVG `◼◼` (two filled rectangles, 12px gap), Red Hot",
      "All corners square — only pagination dots and the VIEW MORE disc are round",
      "Buttons: square, mono uppercase, tracking 0.18em, Red Hot fill or Ink outline",
      "Inputs: bottom-border-only (1px Ink), focus = Red Hot border",
      "Category pill = `● APPAREL` (6px Red dot + mono uppercase Red text), no bg, no border",
      "Banned: drop shadows, gradients, glass / blur, emoji, monograms, `++` marks, icon libraries",
    ],
    previewHtml: "vibes/studio-drop/preview.html",
    promptMarkdown: "vibes/studio-drop/prompt.md",
    author: {
      name: "Inspired by outfit.hellohello.is",
      url: "https://outfit.hellohello.is/",
    },
  },
  {
    slug: "thunderdome",
    name: "Thunderdome",
    tagline: "Mad Max with a server rack — chrome, damage, voltage.",
    description:
      "Adversarial AI agent combat in a blackened steel arena. Scratched chrome lightning bolt with cyan + magenta damage cuts, gunmetal hairline panels, condensed match-poster type, and uppercase mono telemetry. Industrial, hostile, high-contrast, spectator-ready. Best for AI eval dashboards, leaderboards, fight-night landing pages, anything that wants to feel like a stadium and not an app.",
    tags: ["industrial", "cyberpunk", "brutalist", "high-contrast"],
    cardGradient:
      "linear-gradient(135deg, #050505 0%, #1a1d20 35%, #4b545b 60%, #28f0d4 100%)",
    cardForeground: "light",
    palette: [
      { name: "Black Iron", hex: "#050505" },
      { name: "Gunmetal", hex: "#4B545B" },
      { name: "Chrome", hex: "#EDF3F7" },
      { name: "Acid Cyan", hex: "#28F0D4" },
      { name: "Hot Magenta", hex: "#FF2F7D" },
      { name: "Burnt Ember", hex: "#C64720" },
    ],
    fonts: {
      display: '"Barlow Condensed", "Inter", sans-serif',
      body: '"Inter", system-ui, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, monospace',
    },
    motifs: [
      "Chrome lightning bolt with cyan + magenta chromatic damage cuts",
      "◢ corner tags on every panel (mono uppercase, Acid Cyan)",
      "Hairline grid panels with 1px gunmetal gaps — never rounded",
      "Diagonal damage stripes (~115°) in cyan + magenta at 18% opacity",
      "Telemetry stat blocks: red team / blue team with matching ring",
      "Single icon system: the ◢ glyph (BLACK LOWER RIGHT TRIANGLE)",
    ],
    kits: [
      { label: "Tailwind CSS", url: "https://tailwindcss.com" },
      {
        label: "Google Fonts: Barlow Condensed, Inter, JetBrains Mono",
        url: "https://fonts.google.com",
      },
      {
        label: "Reference: thunder-dome.com/design",
        url: "https://www.thunder-dome.com/design",
      },
    ],
    shapes: [
      "Logo = SVG bolt M68,0 L8,90 L52,90 L42,160 L112,60 L66,60 Z + chrome fill + ghost copies",
      "All panels are square-cornered; only pills are rounded-full",
      "Buttons: square, mono uppercase copy, tracking 0.2em",
      "No emoji icons; no organic curves; ◢ is the entire icon system",
    ],
    previewHtml: "vibes/thunderdome/preview.html",
    promptMarkdown: "vibes/thunderdome/prompt.md",
    author: {
      name: "Inspired by thunder-dome.com",
      url: "https://www.thunder-dome.com/design",
    },
  },
  {
    slug: "nightwave",
    name: "NightWave",
    tagline: "Vaporwave's grid, blacked out, with razor flares of ion and ember.",
    description:
      "A blacked-out warehouse rave at 3 AM. Vaporwave's perspective grid and CRT scanlines stripped of pastel sentimentality and rebuilt in pure void black, punched through with razor-thin ion blue and ember orange. Less mall, more bunker — hardcore, restrained, surgical. Best for underground broadcasts, hardcore label sites, dark dashboards, anything that should feel like a flare cracked in a tunnel.",
    tags: ["dark", "hardcore", "industrial", "minimal"],
    cardGradient:
      "linear-gradient(135deg, #030305 0%, #0A0A0F 50%, #00B4FF 50%, #00B4FF 51.5%, #030305 51.5%, #030305 78%, #FF5B1F 78%, #FF5B1F 79.5%, #030305 79.5%)",
    cardForeground: "light",
    palette: [
      { name: "Void", hex: "#030305" },
      { name: "Carbon", hex: "#0A0A0F" },
      { name: "Steel", hex: "#1A1A24" },
      { name: "Ash", hex: "#2E2E3A" },
      { name: "Ion Blue", hex: "#00B4FF" },
      { name: "Ember", hex: "#FF5B1F" },
      { name: "Bone", hex: "#E8E8EC" },
      { name: "Smoke", hex: "#6B6B7A" },
    ],
    fonts: {
      display: '"Big Shoulders Display", "Inter", sans-serif',
      body: '"Inter", system-ui, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, monospace',
    },
    motifs: [
      "Ion-blue perspective grid horizon — 1px lines on void, no glow",
      "Crosshair / target reticle replaces the vaporwave sun disc",
      "Razor scanlines (1px white at 3px spacing, opacity 0.06)",
      "Glitch type: ember + ion 2px offset with mix-blend-mode: screen",
      "Single 1px ember diagonal stripe per major section, sometimes paired with an ion counter-stripe",
      "Tick / barcode dividers — irregular 1px ash ticks as section breaks",
      "Terminal beacons in JetBrains Mono uppercase: > SIGNAL ACQUIRED · 03:42:18 UTC",
      "CRT vignette + 1px ash inset on every panel",
    ],
    kits: [
      { label: "Tailwind CSS", url: "https://tailwindcss.com" },
      {
        label: "Google Fonts: Big Shoulders Display, Inter, JetBrains Mono",
        url: "https://fonts.google.com",
      },
      {
        label: "No UI kit, no icon set — hand-built from CSS gradients",
      },
    ],
    shapes: [
      "Logo mark = 1px ion ring + 1px ember crosshair + 3px ember center dot",
      "All corners square — never rounded except inside vinyl/cassette art",
      "Buttons: square, mono uppercase, tracking 0.22em, primary = ember gradient on void text",
      "Pills: outlined only (1px ash), uppercase mono, 4px ember/ion dot",
      "Allowed glyphs: ▲ ▼ ◤ ◢ ▮ + the crosshair · banned: emoji, blobs, soft shadows, glass",
    ],
    previewHtml: "vibes/nightwave/preview.html",
    promptMarkdown: "vibes/nightwave/prompt.md",
    author: {
      name: "Vibe Code Themer",
      url: "https://github.com/jayhack/vibe-code-themer",
    },
  },
  {
    slug: "dune",
    name: "Dune",
    tagline: "Sun-bleached beige, ember stamps, one rationed pop of Ibad blue.",
    description:
      "A Denis Villeneuve still of Arrakis at dusk, paused. Endless beige sand, the air thick with spice haze, an obsidian silhouette against an amber horizon, and one cold sliver of Bene Gesserit blue cutting the warmth. Roman-inscription Cinzel headlines carved like Trajan-column captions, ember-orange stamps, dune-ripple SVG dividers, and the Atreides hawk standing in for any logo. Best for Imperial dashboards, Bene Gesserit archives, and sietch communications — any surface that should feel monumental, slow, and planetary in scale.",
    tags: ["editorial", "monumental", "warm", "cinematic"],
    cardGradient:
      "linear-gradient(180deg, #F2E5C8 0%, #FFB060 28%, #E8542C 55%, #6B2410 82%, #1A0F08 100%)",
    cardForeground: "light",
    palette: [
      { name: "Bone", hex: "#F2E5C8" },
      { name: "Sand", hex: "#E8D4A8" },
      { name: "Dune", hex: "#D6B071" },
      { name: "Bronze", hex: "#8B5A2B" },
      { name: "Spice", hex: "#E8542C" },
      { name: "Solar", hex: "#FF8027" },
      { name: "Ibad", hex: "#1B4F7A" },
      { name: "Char", hex: "#1A0F08" },
    ],
    fonts: {
      display: '"Cinzel", "Trajan Pro", serif',
      body: '"Inter", system-ui, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, monospace',
    },
    motifs: [
      "Eclipse disc — radial spice gradient sitting low behind the hero, title clips its top",
      "Dune ripple SVG divider — 3–5 sine curves in 1px Bronze between sections",
      "Atreides hawk emblem — geometric SVG of two wings + a downward chevron, no curves",
      "Hieroglyph frieze — row of ▲ ◇ ⌬ ⏣ glyphs tracked 0.6em above section labels",
      "Sietch arch panels — clip-path silhouette housings for the Fremen UX",
      "Ornithopter glyph — 4-bladed dragonfly silhouette used as status icon",
      "Sandworm radar — concentric ellipse rings inside the obsidian operations panel",
      "Heritage stamps — small Spice rectangles reading IMPERIAL · 10191 A.G.",
      "Ibad rationing — strictly one blue panel per viewport (the cold counterweight)",
    ],
    kits: [
      { label: "Tailwind CSS", url: "https://tailwindcss.com" },
      {
        label: "Google Fonts: Cinzel, Inter, Cormorant Garamond, JetBrains Mono",
        url: "https://fonts.google.com",
      },
      {
        label: "Reference: Denis Villeneuve cinematography (Dune, Blade Runner 2049)",
      },
    ],
    shapes: [
      "Logo mark = Atreides hawk SVG (two wings + chevron, no curves), Char on Sand",
      "Wordmark = `DUNE` set in Cinzel 900 uppercase, tracked 0.18em",
      "Square corners only — circles reserved for the eclipse disc and pill dots",
      "Buttons: Spice ember gradient fill (primary) or Char outline (secondary)",
      "Allowed glyphs: ▲ ▽ ◇ ⌬ ⏣ ◯ ✦ ⌖ + the hawk + ornithopter SVGs",
      "Banned: drop shadows above 4px, glass / blur, neon glow, organic blobs, pastel, emoji",
    ],
    previewHtml: "vibes/dune/preview.html",
    promptMarkdown: "vibes/dune/prompt.md",
    author: {
      name: "Vibe Code Themer",
      url: "https://github.com/jayhack/vibe-code-themer",
    },
  },
  {
    slug: "conserva",
    name: "Conserva",
    tagline: "Cream paper, crimson stamps, gold crests — a heritage software workshop.",
    description:
      "A heritage software workshop reissued for 2026. Cream butcher-paper background, crimson stamped headlines stacked tight in Anton, gold monogram crests, banner / pennant-shaped buttons, curve-cut press strips, and `EST. 1987` repeated like a stamp of authenticity. Warm, opinionated, hand-set, anti-AI-slop. The aesthetic is borrowed from old food packaging but applied entirely to developer surfaces — code editors, release journals, manuals, CLI welcomes, changelogs. Best for heritage dev tools, indie code editors, opinionated open-source libraries, anything that should feel printed and built to age.",
    tags: ["heritage", "editorial", "warm", "letterpress"],
    cardGradient:
      "linear-gradient(135deg, #FBF5E7 0%, #F4EAD0 40%, #D70321 40%, #D70321 60%, #FBF5E7 60%)",
    cardForeground: "dark",
    palette: [
      { name: "Cream", hex: "#FBF5E7" },
      { name: "Cream Warm", hex: "#F4EAD0" },
      { name: "Crimson", hex: "#D70321" },
      { name: "Crimson Deep", hex: "#A8021A" },
      { name: "Oxblood", hex: "#6A0613" },
      { name: "Gold", hex: "#CBA058" },
      { name: "Gold Deep", hex: "#A37B32" },
      { name: "Coffee", hex: "#2A1810" },
    ],
    fonts: {
      display: '"Anton", "Oswald", "Helvetica Neue", sans-serif',
      body: '"Oswald", "Helvetica Neue", Helvetica, Arial, sans-serif',
      mono: '"JetBrains Mono" (code, version strings, terminal blocks)',
    },
    motifs: [
      "Heritage stamp: EST. 1987 ✦ NEW TRADITION in Crimson + Gold",
      "Stacked all-caps Anton headlines with one Playfair italic word in Gold Deep",
      "Olive-branch dingbat divider beneath display headlines",
      "Pennant / ribbon buttons with chevron-cut right edge (clip-path)",
      "Curve-cut press strips of CSS-built editor / manual / version mockups",
      "Right-side Crimson rail with Gold monogram + vertical EST. 1987",
      "Jar-lid medallions used to badge editor releases (textPath circular type)",
      "Letterpress hard-offset shadow on cards: 6px 6px 0 Oxblood",
    ],
    kits: [
      { label: "Tailwind CSS", url: "https://tailwindcss.com" },
      {
        label: "Google Fonts: Anton, Oswald, Playfair Display, JetBrains Mono",
        url: "https://fonts.google.com",
      },
      {
        label: "Reference: heritage food packaging applied to dev tools",
        url: "https://www.donmolinico.es/",
      },
    ],
    shapes: [
      "Buttons are pennants with chevron-cut clip-path (px-7 py-3.5 pr-12)",
      "Monogram = capital Anton letter + Gold crown-wing SVG on Crimson square",
      "Jar lid = circle + Gold inner ring + textPath rim + Anton center + version below",
      "Icon system is only ✦, ·, —, the olive-branch SVG, and hand-drawn workshop objects",
      "Never rounded except jar lids and stamp pills; no glass, no blur, no soft shadows",
    ],
    previewHtml: "vibes/conserva/preview.html",
    promptMarkdown: "vibes/conserva/prompt.md",
    author: {
      name: "Vibe Code Themer",
      url: "https://github.com/jayhack/vibe-code-themer",
    },
  },
  {
    slug: "swiss-editorial",
    name: "Swiss Editorial",
    tagline: "Twelve columns, hairline rules, one red accent.",
    description:
      "A printed Swiss-design quarterly opened on a desk. Twelve-column grid, generous margins, Helvetica-style sans for everything, italic Newsreader for the rare emphasis, and a single red accent used five times per page maximum. The page should feel governed — restraint as the loudest tool. Best for marketing sites, documentation, editorial blogs, anything that needs to look adult.",
    tags: ["minimal", "editorial", "typographic", "grid"],
    cardGradient:
      "linear-gradient(135deg, #F4F1EC 0%, #F4F1EC 60%, #E3001B 60%, #E3001B 62%, #F4F1EC 62%)",
    cardForeground: "dark",
    palette: [
      { name: "Paper", hex: "#F4F1EC" },
      { name: "Ink", hex: "#0A0A0A" },
      { name: "Red", hex: "#E3001B" },
      { name: "Muted", hex: "#6B6B6B" },
    ],
    fonts: {
      display: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
      body: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
      mono: '"Newsreader" italic (editorial accents only)',
    },
    motifs: [
      "Twelve-column grid with 24px gap, label/content/metadata rhythm",
      "Three rule weights only: 1px Ink, 4px Ink, 4px Red",
      "Numbered markers — № 02, № 03 — with mandatory `№` glyph",
      "22px Red filled circle with white numeral inside, used at openers",
      "Index tables with Ink/15% divide-y, never zebra striped",
      "One Red drop cap per page, max — 4rem, float-left, line-height 0.8",
      "One 6px Red marker dot in the masthead to signal 'live'",
    ],
    kits: [
      { label: "Tailwind CSS", url: "https://tailwindcss.com" },
      {
        label: "Google Fonts: Inter, Newsreader",
        url: "https://fonts.google.com",
      },
    ],
    shapes: [
      "Wordmark only — no logo mark; masthead set in Display style",
      "All components square-cornered (except marker dot + number circle)",
      "Glyph kit is exactly: №, —, ·, →, and one 6px Red dot",
      "No drop shadows, no gradients, no decorative SVG icons",
    ],
    previewHtml: "vibes/swiss-editorial/preview.html",
    promptMarkdown: "vibes/swiss-editorial/prompt.md",
    author: {
      name: "Vibe Code Themer",
      url: "https://github.com/jayhack/vibe-code-themer",
    },
  },
  {
    slug: "mirage",
    name: "Mirage",
    tagline: "A 1978 desert expedition's field kit — emerald ink, ruby lens, stained-glass wings.",
    description:
      "A misunderstood desert-spirit dragonfly, cataloged by a 1970s expedition team. Cream-sand pages, emerald scale-green ink, a single ruby-lens red, and the stained-glass sweep of compound-eye wings. The vibe is field journal meets retro-tech telemetry — equal parts Saharan expedition log, biologist's notebook, and 1978 atmospheric sciences console. Apply it to CLI consoles, agent dashboards, and documentation that should read like notes from a team chasing something they can't quite catch.",
    tags: ["expedition", "retro-tech", "journal", "warm"],
    cardGradient:
      "linear-gradient(135deg, #F4E8C8 0%, #F6BE6F 22%, #E0303F 42%, #5BA3D9 62%, #1FA956 80%, #0E6D3A 100%)",
    cardForeground: "light",
    palette: [
      { name: "Bone Sand", hex: "#F4E8C8" },
      { name: "Dune", hex: "#E7D29A" },
      { name: "Spice", hex: "#C26A2A" },
      { name: "Crimson Lens", hex: "#E0303F" },
      { name: "Emerald", hex: "#1FA956" },
      { name: "Emerald Deep", hex: "#0E6D3A" },
      { name: "Sky Wash", hex: "#5BA3D9" },
      { name: "Obsidian", hex: "#1A1410" },
    ],
    fonts: {
      display: '"Unica One", "Audiowide", sans-serif',
      body: '"Manrope", system-ui, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, monospace',
    },
    motifs: [
      "Crimson reticle (emerald ring + red crosshair + red diamond) as the universal bullet and signal glyph",
      "Compound-eye hex grid (1px emerald hexagons at 6–10% opacity) behind hero and stat panels",
      "Stained-glass wing iridescence gradient on hero / featured panels, with thin Obsidian vein paths overlaid",
      "Animated heat-haze shimmer — 1px Sky Wash vertical strokes drifting up over the hero",
      "Dune-horizon rule: 2px Emerald line with a centered Crimson diamond, replacing every <hr>",
      "Sandstorm spiral as logo body — Emerald coil with a 4px Crimson center dot (the 'eye')",
      "JetBrains Mono telemetry beacons — `> DUNE 14/40 · BEARING N 217°`, `◆ MIRAGE FLAGGED · 03:42:18 UTC`",
      "Cormorant Garamond italic for ≤3-word inserts in display headlines (mirage, drifting, spirit), always Crimson Lens",
      "Hard 4px Emerald-Deep offset shadow on cards (no blurred shadows, never above 6px)",
    ],
    kits: [
      { label: "Tailwind CSS", url: "https://tailwindcss.com" },
      {
        label: "Google Fonts: Unica One, Manrope, JetBrains Mono, Cormorant Garamond",
        url: "https://fonts.google.com",
      },
      {
        label: "No UI kit, no icon set — reticle, spiral, and hexagons only",
      },
    ],
    shapes: [
      "Logo monogram = 56px Emerald scale-gradient tile, Bone Sand sandstorm spiral inside, 6px Crimson Lens eye at center",
      "All corners square — only the reticle diamonds, the monogram, and pills are round",
      "Buttons: square, Manrope 700 uppercase tracking 0.18em, primary = Crimson Lens fill + 4px Emerald-Deep hard offset shadow",
      "Inputs: bottom-border-only (1px Emerald), focus = Crimson Lens border, transparent background",
      "Icon system is exactly: the crimson reticle, the sandstorm spiral, hexagons (⬡ ⬢), and `·` — banned: emoji, lucide, heroicons, glass, blur",
    ],
    previewHtml: "vibes/mirage/preview.html",
    promptMarkdown: "vibes/mirage/prompt.md",
    author: {
      name: "After an underrated spirit of the dunes",
      url: "https://github.com/jayhack/vibe-code-themer",
    },
  },
  {
    slug: "surfs-up",
    name: "Surf's Up",
    tagline: "1970s screen-print poster — sun setting through wave-cut type.",
    description:
      "A 1970s screen-printed surf poster pinned in a beach-shack cafe. Hand-cut wave-curl Anton letterforms stack edge-to-edge across cream paper while the sun bleeds through them in marigold → tangerine → blood-orange → midnight stripes, and a single ink silhouette carves the bottom of a curling wave. Print-grain halftone, mis-registered tangerine/lagoon ghost type, hard-offset cards pinned with Oxblood, sine-wave dividers, vintage stamps. Apply it to surf-shop catalogs, swell/tide forecasts, and contest heat sheets — anything that should feel screen-printed, not airbrushed.",
    tags: ["retro", "screen-print", "warm", "surf"],
    cardGradient:
      "linear-gradient(135deg, #F2BA3D 0%, #EE7B26 28%, #D6362A 52%, #1F3A5F 78%, #4E89B5 100%)",
    cardForeground: "light",
    palette: [
      { name: "Foam", hex: "#F4E7CA" },
      { name: "Sand", hex: "#E8D9B0" },
      { name: "Marigold", hex: "#F2BA3D" },
      { name: "Tangerine", hex: "#EE7B26" },
      { name: "Crimson", hex: "#D6362A" },
      { name: "Oxblood", hex: "#8B2114" },
      { name: "Lagoon", hex: "#4E89B5" },
      { name: "Midnight", hex: "#1F3A5F" },
    ],
    fonts: {
      display: '"Anton", "Oswald", "Helvetica Neue", sans-serif',
      body: '"Inter", system-ui, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, monospace',
    },
    motifs: [
      "Sunset ribbon banner — 5 hard horizontal stripes (Marigold / Tangerine / Crimson / Midnight / Lagoon), no soft blends",
      "Sun disc behind the hero — radial 3-stop gradient at 50% 100%, transparent rim",
      "Triple-print register on the hero wordmark — Tangerine (-2,2) + Lagoon (2,-2) ghosts under a Pitch (or Crimson) top layer",
      "Wave-curl SVG mark — a Crimson curl with a Marigold sun tucked into the lip",
      "Halftone print-grain — 4-layer radial dot texture at 4–7% opacity over every flat field",
      "Silhouette ink surfer — one pure-Pitch SVG of a surfer carving a wave bottom, used once per page",
      "Wave-rule divider — 3–4 period sine curve in 1.5px Pitch instead of <hr>",
      "Stripe tape — 4-bar Marigold/Tangerine/Crimson/Lagoon strip at the top and bottom of the page",
      "Vintage stamps — Oxblood-bordered mono uppercase tags: `EST. 1970`, `DAWN PATROL`, `GROM APPROVED`, `№ 04 / SUMMER '77`",
      "Hard-offset cards — 2px Pitch border + 4px hard Oxblood (or Crimson) shadow, never blurred",
    ],
    kits: [
      { label: "Tailwind CSS", url: "https://tailwindcss.com" },
      {
        label: "Google Fonts: Anton, Pacifico, Inter, JetBrains Mono",
        url: "https://fonts.google.com",
      },
      {
        label: "No UI kit, no icon set — wave-curl SVG, sine-wave divider, silhouette surfer only",
      },
    ],
    shapes: [
      "Logo mark = wave-curl SVG (Crimson curl + Marigold sun tuck), ~40×28px, never recolored outside that pair",
      "All corners square — only the sun disc, the curl's sun tuck, and pill dots are round",
      "Buttons: square, Anton uppercase tracked 0.06em, primary = Crimson + 4px Pitch hard offset; secondary = Foam + 2px Pitch border + 4px Crimson hard offset",
      "Cards: 2px Pitch border + 4px hard Oxblood (or Midnight) offset shadow — no soft blur ever",
      "Allowed glyphs: ▲ ▼ ~ ◆ · → + the wave-curl, sine-wave, and silhouette SVGs · banned: emoji, lucide, neon glow, blur, pastel, chrome",
    ],
    previewHtml: "vibes/surfs-up/preview.html",
    promptMarkdown: "vibes/surfs-up/prompt.md",
    author: {
      name: "After a 1970s surf-print poster",
      url: "https://github.com/jayhack/vibe-code-themer",
    },
  },
  {
    slug: "prowler",
    name: "Prowler",
    tagline: "Garden-villa muscle — lacquer green, twin stripes, four cold haloes.",
    description:
      "A hand-built restomod muscle coupé parked on pebble gravel in an Italian villa courtyard at dusk. Lacquered dark teal-green panels deep enough to read black, twin off-white racing stripes down the hood, four chrome halo headlamps glowing cold-white, and warm cognac saddle leather visible through the windshield. The vibe is coachbuilt atelier, not rally — VIN-plate stencils, chrome bezels, saddle-stitched dividers, gauge dials reporting real numbers. Best for build configurators, owner's manuals, garage diagnostics, registry sites, anything that should feel hand-numbered out of 100.",
    tags: ["automotive", "atelier", "luxury", "metallic"],
    cardGradient:
      "linear-gradient(135deg, #061418 0%, #0E2A2E 30%, #0E2A2E 38%, #F0EDDF 38%, #F0EDDF 40%, #0E2A2E 40%, #0E2A2E 43%, #F0EDDF 43%, #F0EDDF 45%, #0E2A2E 45%, #0E2A2E 75%, #061418 100%)",
    cardForeground: "light",
    palette: [
      { name: "Lacquer", hex: "#0E2A2E" },
      { name: "Lacquer Deep", hex: "#061418" },
      { name: "Foliage", hex: "#1F3326" },
      { name: "Chrome", hex: "#DDE3E5" },
      { name: "Halo", hex: "#F0EDDF" },
      { name: "Saddle", hex: "#C58A4E" },
      { name: "Saddle Deep", hex: "#7A4A1F" },
      { name: "Amber", hex: "#E8B73B" },
    ],
    fonts: {
      display: '"Saira Stencil One", "Oswald", sans-serif',
      body: '"Inter", system-ui, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, monospace',
    },
    motifs: [
      "Halo lamp — chrome ring + radial Lacquer→white glow + 3px center dot; the signature glyph",
      "Quad-halo cluster — four halo lamps in a horizontal row, the logo monogram",
      "Twin hood stripes — paired 6px Halo bars (20px apart) down the left edge of Lacquer panels",
      "Chrome bezel — 1.5px Chrome border + 1px inner Halo highlight on Lacquer cards",
      "Saddle-stitch divider — dashed Saddle line with × cross-stitches, replaces every <hr>",
      "VIN plate — Chrome-gradient rectangle with 4 bolt-head dots and mono uppercase text",
      "Gauge dial — Chrome bezel + Lacquer face + Saddle needle + one Amber tick at redline",
      "Pebble grain — dual-radial Foliage/Chrome dot texture on Lacquer Deep page bg",
      "Specimen corner-tag — `◉ FIELD / 03` Halo-glyph + mono label on Lacquer Deep strip",
    ],
    kits: [
      { label: "Tailwind CSS", url: "https://tailwindcss.com" },
      {
        label: "Google Fonts: Saira Stencil One, Inter, JetBrains Mono, Playfair Display",
        url: "https://fonts.google.com",
      },
      {
        label: "No UI kit, no icon set — halo lamps, gauge dials, VIN plates only",
      },
    ],
    shapes: [
      "Monogram = quad-halo cluster SVG inside a 88×44 Lacquer plaque with Chrome bezel + 4px Lacquer Deep hard shadow",
      "All corners square — only halo lamps, pills, gauge dials, and bolt-head dots are round",
      "Buttons: square, Inter 700 uppercase tracking 0.18em; primary = Saddle leather gradient + 4px Lacquer Deep hard offset shadow",
      "Inputs: bottom-border-only 1px Chrome, focus = Saddle border, Halo text on Lacquer",
      "Icon system is exactly: halo lamp, quad-halo, gauge dial, VIN plate, ◉ ◆ · — × · banned: emoji, lucide, heroicons, glass/blur, racing decals",
    ],
    previewHtml: "vibes/prowler/preview.html",
    promptMarkdown: "vibes/prowler/prompt.md",
    author: {
      name: "Vibe Code Themer",
      url: "https://github.com/jayhack/vibe-code-themer",
    },
  },
  {
    slug: "vaporwave",
    name: "VaporWave",
    tagline: "Sunset gradients, chrome type, and a glitchy 80s grid.",
    description:
      "A neon-soaked tribute to late-night Tokyo arcades and pastel cassette covers. Lean on magenta-to-cyan gradients, chrome serif headings, and a low-poly horizon grid. Best for landing pages, music players, and anything that should feel like it belongs on a VHS box.",
    tags: ["retro", "neon", "gradient", "80s"],
    cardGradient:
      "linear-gradient(135deg, #FF6AD5 0%, #C774E8 35%, #8C52FF 65%, #26C6DA 100%)",
    cardForeground: "light",
    palette: [
      { name: "Hot Pink", hex: "#FF6AD5" },
      { name: "Lavender", hex: "#C774E8" },
      { name: "Ultraviolet", hex: "#8C52FF" },
      { name: "Cyan", hex: "#26C6DA" },
      { name: "Sunset Orange", hex: "#FF9472" },
      { name: "Midnight", hex: "#0B0B2B" },
    ],
    fonts: {
      display: '"Monoton", "Audiowide", "Orbitron", sans-serif',
      body: '"Space Grotesk", "Inter", system-ui, sans-serif',
      mono: '"VT323", "JetBrains Mono", ui-monospace, monospace',
    },
    motifs: [
      "Perspective grid horizon receding to a setting sun",
      "Chrome / metallic gradient text with subtle bevel",
      "Scanlines, CRT glow, occasional RGB chromatic aberration",
      "Pastel palm trees, statues, dolphins, checkerboards",
      "Soft outer glow on cards and buttons (drop-shadow + blur)",
    ],
    kits: [
      { label: "Tailwind CSS", url: "https://tailwindcss.com" },
      {
        label: "Google Fonts: Monoton, VT323, Space Grotesk",
        url: "https://fonts.google.com",
      },
      {
        label: "Framer Motion (for parallax + glitch)",
        url: "https://www.framer.com/motion/",
      },
    ],
    shapes: [
      "Sun = solid disc with horizontal cutout bands",
      "Logos use chrome gradient + 1px outline",
      "Buttons: rounded-lg with neon outer glow (shadow-[0_0_24px_#FF6AD5])",
      "Geometric primitives only (triangles, circles, grids), no organic blobs",
    ],
    previewHtml: "vibes/vaporwave/preview.html",
    promptMarkdown: "vibes/vaporwave/prompt.md",
    author: {
      name: "Vibe Code Themer",
      url: "https://github.com/jayhack/vibe-code-themer",
    },
  },
];

export function findVibe(slug: string | undefined): Vibe | undefined {
  if (!slug) return undefined;
  return VIBES.find((v) => v.slug === slug);
}
