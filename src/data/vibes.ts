import type { Vibe } from "./types";

/**
 * The single source of truth for every vibe shown on the board.
 *
 * To add a new vibe, copy an existing entry, update the fields, and drop the
 * matching files into `public/vibes/<slug>/`. See `AGENTS.md` for the full
 * contribution flow.
 */
export const VIBES: Vibe[] = [
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
];

export function findVibe(slug: string | undefined): Vibe | undefined {
  if (!slug) return undefined;
  return VIBES.find((v) => v.slug === slug);
}
