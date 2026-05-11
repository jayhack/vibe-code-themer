import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface HeaderProps {
  /** When set, renders the vibe's name next to the wordmark. */
  vibeName?: string;
  /** Vibe detail: controls shown after the title (e.g. Preview / Theme). */
  detailAfterTitle?: ReactNode;
  /** Vibe detail: right-side actions (e.g. Prompt + repo link). */
  detailActions?: ReactNode;
}

export function Header({
  vibeName,
  detailAfterTitle,
  detailActions,
}: HeaderProps = {}) {
  const onDetail = Boolean(vibeName);
  const detailBar = Boolean(
    detailAfterTitle != null || detailActions != null,
  );

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white">
      <div
        className={
          "mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 " +
          (detailBar ? "py-3" : "py-4")
        }
      >
        <div
          className={
            "flex min-w-0 items-center gap-2 sm:gap-3 " +
            (detailBar ? "flex-1 overflow-hidden" : "")
          }
        >
          {onDetail ? (
            <>
              <Link
                to="/"
                aria-label="Back to all vibes"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-black/70 hover:bg-black/[0.04] hover:text-black"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5" />
                  <path d="m12 19-7-7 7-7" />
                </svg>
              </Link>
              <span className="min-w-0 truncate text-base font-semibold tracking-tight text-black sm:text-lg">
                {vibeName}
              </span>
              {detailBar && detailAfterTitle ? (
                <div className="ml-1 flex min-w-0 shrink-0 items-center">
                  {detailAfterTitle}
                </div>
              ) : null}
            </>
          ) : (
            <Link to="/" className="group flex shrink-0 items-center gap-3">
              <BrushLogo className="h-7 w-7" />
              <span className="font-semibold tracking-tight text-black">
                Vibe Code Themer
              </span>
            </Link>
          )}
        </div>

        <nav className="flex shrink-0 items-center gap-2 text-sm">
          {detailBar && detailActions ? (
            detailActions
          ) : !onDetail ? (
            <>
              <a
                href="https://github.com/jayhack/vibe-code-themer#contributing"
                className="hidden rounded-full px-3 py-1.5 text-black/70 hover:bg-black/[0.04] hover:text-black sm:inline"
              >
                Submit a vibe
              </a>
              <a
                href="https://github.com/jayhack/vibe-code-themer"
                aria-label="View on GitHub"
                className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-white transition hover:bg-black/85"
              >
                <GitHubMark />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </>
          ) : (
            <a
              href="https://github.com/jayhack/vibe-code-themer"
              aria-label="View on GitHub"
              className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-white transition hover:bg-black/85"
            >
              <GitHubMark />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}

function BrushLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient
          id="vctBrushGrad"
          x1="14"
          y1="14"
          x2="50"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="55%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <g transform="rotate(-45 32 32)">
        <rect x="28" y="6" width="8" height="26" rx="4" fill="#0b0b0f" />
        <rect x="25" y="30" width="14" height="6" rx="2" fill="#0b0b0f" />
        <path d="M25 36 H39 L36 52 Q32 58 28 52 Z" fill="url(#vctBrushGrad)" />
      </g>
    </svg>
  );
}

export function GitHubMark() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}
