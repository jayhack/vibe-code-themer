import { Link } from "react-router-dom";
import type { Vibe } from "../data/types";

interface Props {
  vibe: Vibe;
}

export function VibeCard({ vibe }: Props) {
  const fg = vibe.cardForeground === "light" ? "text-white" : "text-black";
  const subFg =
    vibe.cardForeground === "light" ? "text-white/80" : "text-black/70";

  return (
    <Link
      to={`/vibe/${vibe.slug}`}
      className="card-glow group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-pop transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(11,11,15,0.25)]"
    >
      <div
        className={`relative h-52 overflow-hidden ${fg}`}
        style={{ background: vibe.cardGradient }}
      >
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "linear-gradient(to bottom, black 30%, transparent 100%)",
            }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <div className="flex items-center gap-2">
            {vibe.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={`rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider backdrop-blur ${fg}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div>
            <h3
              className={`text-3xl font-extrabold tracking-tight ${fg} drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]`}
            >
              {vibe.name}
            </h3>
            <p className={`mt-1 text-sm ${subFg}`}>{vibe.tagline}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-between gap-3 px-5 py-4">
        <div className="flex -space-x-1.5">
          {vibe.palette.slice(0, 5).map((c) => (
            <span
              key={c.hex}
              title={`${c.name} ${c.hex}`}
              className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
              style={{ background: c.hex }}
            />
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-black/70 transition group-hover:text-black">
          View vibe
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition group-hover:translate-x-0.5"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
