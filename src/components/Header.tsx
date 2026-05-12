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
            <Link to="/" className="group flex shrink-0 items-center gap-2.5">
              <DittoLogo className="h-7 w-10" />
              <span className="text-lg font-bold tracking-tight text-black">
                Ditto
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
                href="https://github.com/jayhack/ditto#contributing"
                className="hidden rounded-full px-3 py-1.5 text-black/70 hover:bg-black/[0.04] hover:text-black sm:inline"
              >
                Submit a vibe
              </a>
              <a
                href="https://github.com/jayhack/ditto"
                aria-label="View on GitHub"
                className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-white transition hover:bg-black/85"
              >
                <GitHubMark />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </>
          ) : (
            <a
              href="https://github.com/jayhack/ditto"
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

function DittoLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-1.25 0 178.4 126.9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient
          id="dittoBlue"
          x1="0"
          y1="0"
          x2="175"
          y2="125"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="55%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <path
        fill="url(#dittoBlue)"
        d="M173.75 69.65 Q172.15 75.3 167.65 77.65 164.3 79.3 158.45 79.5 152.0 79.4 149.35 79.65 144.9 80.1 143.55 82.6 141.1 87.15 145.15 91.0 147.1 92.85 155.15 97.4 162.45 101.5 164.9 104.75 168.6 109.65 165.55 116.0 162.95 121.5 156.3 121.05 148.95 119.5 146.25 120.0 143.2 120.55 139.3 123.9 135.8 126.9 132.55 126.9 129.6 126.9 126.75 125.2 L121.75 121.45 Q114.9 116.1 106.9 116.4 102.95 116.55 99.75 118.1 L94.5 121.35 Q87.75 125.9 79.5 125.9 71.15 125.9 64.4 119.45 L59.1 114.35 Q55.9 111.7 52.6 110.75 47.55 109.3 41.2 110.75 37.7 111.55 30.45 114.35 24.15 116.75 21.3 117.05 16.95 117.5 14.6 114.5 10.45 109.1 17.3 100.8 L22.05 95.1 Q24.05 92.2 22.9 90.65 21.65 88.9 18.35 88.3 L11.95 87.5 Q3.2 86.25 0.75 79.0 -1.25 73.05 2.35 66.6 5.1 61.75 13.05 53.85 L28.3 38.55 Q37.75 28.45 43.8 18.55 L48.25 10.9 Q50.5 7.0 52.25 5.05 56.65 0.0 64.55 0.0 68.8 0.0 74.55 3.6 80.3 7.15 84.75 7.15 89.9 7.15 98.3 3.9 106.15 0.85 111.15 1.3 117.25 1.85 121.2 5.9 124.1 8.9 126.95 15.3 L132.0 26.45 Q135.4 32.8 139.95 36.3 142.85 38.55 150.55 42.35 159.5 46.7 162.95 48.9 177.15 57.8 173.75 69.65 Z"
      />
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
