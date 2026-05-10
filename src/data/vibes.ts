import type { Vibe } from "./types";

/**
 * The single source of truth for every vibe shown on the board.
 *
 * To add a new vibe, copy an existing entry, update the fields, and drop the
 * matching files into `public/vibes/<slug>/`. See `AGENTS.md` for the full
 * contribution flow.
 */
export const VIBES: Vibe[] = [
  // First vibe ships in the "Add VaporWave vibe" PR — see AGENTS.md.
];

export function findVibe(slug: string | undefined): Vibe | undefined {
  if (!slug) return undefined;
  return VIBES.find((v) => v.slug === slug);
}
