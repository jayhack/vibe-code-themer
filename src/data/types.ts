export interface VibeSwatch {
  name: string;
  hex: string;
}

export interface VibeKit {
  /** Short human label, e.g. "Tailwind + shadcn/ui". */
  label: string;
  /** Optional URL to docs/site. */
  url?: string;
}

export interface Vibe {
  /** URL slug, also the directory name in `public/vibes/<slug>/`. */
  slug: string;
  /** Display name, e.g. "VaporWave". */
  name: string;
  /** One-line tagline shown on the card. */
  tagline: string;
  /** 1–2 sentence description shown on the detail page. */
  description: string;
  /** Tags rendered as small pills. */
  tags: string[];
  /** CSS gradient string used as the card hero background. */
  cardGradient: string;
  /** Foreground text color over `cardGradient` (light or dark). */
  cardForeground: "light" | "dark";
  /** Featured palette swatches. */
  palette: VibeSwatch[];
  /** Recommended fonts (CSS family names). */
  fonts: {
    display: string;
    body: string;
    mono?: string;
  };
  /** Visual motifs the agent should lean on. */
  motifs: string[];
  /** Suggested component kits / CSS libraries. */
  kits: VibeKit[];
  /** Logo / shape language guidance. */
  shapes: string[];
  /** Path (relative to site root) of the standalone preview HTML. */
  previewHtml: string;
  /** Path (relative to site root) of the agent prompt markdown. */
  promptMarkdown: string;
  /** Author handle (GitHub) for credit on the detail page. */
  author?: {
    name: string;
    url?: string;
  };
}
