import { Header } from "../components/Header";
import { VibeCard } from "../components/VibeCard";
import { VIBES } from "../data/vibes";

export function Home() {
  return (
    <div className="min-h-screen page-backdrop">
      <Header />

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-24">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium tracking-wide text-black/60">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 220deg at 50% 50%, #FF6AD5, #8C52FF, #26C6DA, #FF6AD5)",
                }}
              />
              Inspiration board · v0.1
            </p>
            <h1 className="text-5xl font-extrabold tracking-tight text-black md:text-6xl">
              Design vibes
              <span className="block bg-gradient-to-r from-[#FF6AD5] via-[#8C52FF] to-[#26C6DA] bg-clip-text text-transparent">
                for coding agents.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/65">
              A curated, ever-growing wall of aesthetics. Click any card to see
              the live HTML showcase, then copy the prompt to give your coding
              agent a complete design kit — colors, fonts, motifs, components,
              and shapes.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="https://github.com/jayhack/vibe-code-themer#contributing"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-black/[0.04]"
            >
              <PlusIcon /> Submit a vibe
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIBES.map((vibe) => (
            <VibeCard key={vibe.slug} vibe={vibe} />
          ))}
          <ComingSoonCard />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function ComingSoonCard() {
  return (
    <a
      href="https://github.com/jayhack/vibe-code-themer#contributing"
      className="group relative flex min-h-[320px] flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-black/15 bg-white/60 p-6 text-center transition hover:border-black/35 hover:bg-white"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/[0.04] text-black/70 group-hover:bg-black/[0.08]">
        <PlusIcon />
      </span>
      <h3 className="text-lg font-semibold text-black">Add your vibe</h3>
      <p className="max-w-[18rem] text-sm text-black/55">
        Brutalism, Y2K, Memphis, Swiss, Glassmorphism — what's missing? Open a
        PR with one HTML file and a prompt.
      </p>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-8 text-sm text-black/55 sm:flex-row sm:items-center">
        <p>
          Built for coding agents. Each vibe is just an HTML file + a prompt —
          no install required.
        </p>
        <p className="flex items-center gap-2">
          <span>MIT licensed.</span>
          <a
            href="https://github.com/jayhack/vibe-code-themer"
            className="font-medium text-black/75 underline-offset-4 hover:underline"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
