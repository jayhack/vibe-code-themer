import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { GitHubMark, Header } from "../components/Header";
import type { Vibe } from "../data/types";
import { findVibe } from "../data/vibes";
import { NotFound } from "./NotFound";

type Tab = "preview" | "theme";

export function VibeDetail() {
  const { slug } = useParams();
  const vibe = useMemo(() => findVibe(slug), [slug]);

  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const tab: Tab = tabParam === "theme" ? "theme" : "preview";

  const [prompt, setPrompt] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [previewError, setPreviewError] = useState(false);

  const previewUrl = vibe ? assetUrl(vibe.previewHtml) : "";
  const promptUrl = vibe ? assetUrl(vibe.promptMarkdown) : "";

  useEffect(() => {
    if (!promptUrl) return;
    let cancelled = false;
    fetch(promptUrl)
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error(r.statusText))))
      .then((text) => {
        if (!cancelled) setPrompt(text);
      })
      .catch(() => {
        if (!cancelled) setPrompt("");
      });
    return () => {
      cancelled = true;
    };
  }, [promptUrl]);

  if (!vibe) return <NotFound />;

  const setTab = (next: Tab) => {
    const params = new URLSearchParams(searchParams);
    if (next === "preview") params.delete("tab");
    else params.set("tab", next);
    setSearchParams(params, { replace: true });
  };

  const onCopy = async () => {
    if (!prompt) return;
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore — fallback handled by the textarea selection
    }
  };

  return (
    <div className="flex h-screen flex-col bg-white">
      <Header
        vibeName={vibe.name}
        detailAfterTitle={
          <div className="inline-flex shrink-0 items-center gap-1 rounded-full bg-black/[0.04] p-1">
            <TabButton
              active={tab === "preview"}
              onClick={() => setTab("preview")}
            >
              Preview
            </TabButton>
            <TabButton
              active={tab === "theme"}
              onClick={() => setTab("theme")}
            >
              Theme
            </TabButton>
          </div>
        }
        detailActions={
          <>
            <button
              type="button"
              onClick={onCopy}
              disabled={!prompt}
              className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-sm font-medium text-white transition hover:bg-black/85 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {copied ? "Copied!" : "Prompt"}
              {!copied && (
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                </svg>
              )}
            </button>
            <a
              href="https://github.com/jayhack/vibe-code-themer"
              aria-label="View on GitHub"
              className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.06] px-3 py-1.5 font-medium text-black/70 transition hover:bg-black/[0.1] hover:text-black"
            >
              <GitHubMark />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </>
        }
      />

      {tab === "preview" ? (
        <PreviewPane
          previewUrl={previewUrl}
          previewHtml={vibe.previewHtml}
          name={vibe.name}
          previewError={previewError}
          onError={() => setPreviewError(true)}
        />
      ) : (
        <div className="flex-1 overflow-y-auto">
          <ThemePane
            vibe={vibe}
            prompt={prompt}
            copied={copied}
            onCopy={onCopy}
          />
        </div>
      )}
    </div>
  );
}

function PreviewPane({
  previewUrl,
  previewHtml,
  name,
  previewError,
  onError,
}: {
  previewUrl: string;
  previewHtml: string;
  name: string;
  previewError: boolean;
  onError: () => void;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-white">
      {previewError ? (
        <div className="flex flex-1 items-center justify-center p-10 text-center text-sm text-black/55">
          Couldn't load <code className="ml-1 font-mono">{previewHtml}</code>.
        </div>
      ) : (
        <iframe
          key={previewUrl}
          src={previewUrl}
          title={`${name} preview`}
          className="block h-full w-full flex-1 border-0 bg-white"
          loading="lazy"
          onError={onError}
        />
      )}
    </div>
  );
}

function ThemePane({
  vibe,
  prompt,
  copied,
  onCopy,
}: {
  vibe: Vibe;
  prompt: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="flex flex-wrap items-center gap-2">
        {vibe.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-black/[0.04] px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-black/65"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-black/65">
        {vibe.description}
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card title="Palette">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {vibe.palette.map((c) => (
              <div
                key={c.hex}
                className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-2"
              >
                <span
                  className="block h-9 w-9 shrink-0 rounded-lg ring-1 ring-black/5"
                  style={{ background: c.hex }}
                />
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-black">
                    {c.name}
                  </div>
                  <div className="font-mono text-xs uppercase text-black/50">
                    {c.hex}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Fonts">
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <FontRow label="Display" family={vibe.fonts.display} />
            <FontRow label="Body" family={vibe.fonts.body} />
            {vibe.fonts.mono && (
              <FontRow label="Mono" family={vibe.fonts.mono} />
            )}
          </dl>
        </Card>

        <Card title="Visual motifs">
          <ul className="space-y-2 text-sm text-black/75">
            {vibe.motifs.map((m) => (
              <li key={m} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
                {m}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Component kits & libraries">
          <ul className="flex flex-wrap gap-2">
            {vibe.kits.map((k) => (
              <li key={k.label}>
                {k.url ? (
                  <a
                    href={k.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-black hover:bg-black/[0.04]"
                  >
                    {k.label}
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-black">
                    {k.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Logos & shapes" className="lg:col-span-2">
          <ul className="grid gap-2 text-sm text-black/75 sm:grid-cols-2">
            {vibe.shapes.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
                {s}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-10 rounded-3xl border border-black/10 bg-[#0B0B0F] text-white shadow-pop">
        <div className="flex items-center justify-between gap-4 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold">Agent prompt</h2>
            <p className="text-sm text-white/60">
              Copy this and paste it to your coding agent. It is the entire
              design kit, in plain text.
            </p>
          </div>
          <button
            type="button"
            onClick={onCopy}
            disabled={!prompt}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-black transition hover:bg-white/90 disabled:opacity-50"
          >
            {copied ? "Copied!" : "Copy prompt"}
            {!copied && (
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15V5a2 2 0 0 1 2-2h10" />
              </svg>
            )}
          </button>
        </div>
        <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-b-3xl bg-black/40 px-6 py-5 font-mono text-[13px] leading-relaxed text-white/90">
          {prompt || "Loading prompt…"}
        </pre>
      </div>

      {vibe.author && (
        <p className="mt-6 text-sm text-black/50">
          Submitted by{" "}
          {vibe.author.url ? (
            <a
              className="font-medium text-black/70 underline-offset-4 hover:underline"
              href={vibe.author.url}
            >
              {vibe.author.name}
            </a>
          ) : (
            <span className="font-medium text-black/70">
              {vibe.author.name}
            </span>
          )}
          .
        </p>
      )}
    </section>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        "rounded-full px-3.5 py-1 text-sm font-medium transition " +
        (active
          ? "bg-white text-black shadow-[0_1px_2px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.05)]"
          : "text-black/55 hover:text-black")
      }
    >
      {children}
    </button>
  );
}

function Card({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-black/5 bg-white p-5 shadow-pop ${className}`}
    >
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-black/55">
        {title}
      </h3>
      {children}
    </div>
  );
}

function FontRow({ label, family }: { label: string; family: string }) {
  return (
    <div className="rounded-xl border border-black/5 bg-white p-3">
      <dt className="text-xs font-medium uppercase tracking-wider text-black/45">
        {label}
      </dt>
      <dd className="mt-1 truncate font-mono text-sm text-black/80" title={family}>
        {family}
      </dd>
    </div>
  );
}

/**
 * Build a URL relative to the Vite base, so static assets in /public resolve
 * correctly whether the site is served at "/", under a GitHub Pages subpath,
 * or from a HashRouter path.
 */
function assetUrl(relativePath: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const trimmedBase = base.endsWith("/") ? base : `${base}/`;
  const trimmedPath = relativePath.replace(/^\//, "");
  return new URL(trimmedBase + trimmedPath, window.location.href).toString();
}
