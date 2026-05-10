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
];

export function findVibe(slug: string | undefined): Vibe | undefined {
  if (!slug) return undefined;
  return VIBES.find((v) => v.slug === slug);
}
