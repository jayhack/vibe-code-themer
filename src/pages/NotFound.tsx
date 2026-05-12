import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-wider text-black/50">
          404
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-black">
          That vibe doesn't exist… yet.
        </h1>
        <p className="max-w-xl text-black/65">
          Want to be the one to add it? Check the contribution guide and open a
          PR with one HTML file plus a prompt.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            to="/"
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/85"
          >
            Back to the board
          </Link>
          <a
            href="https://github.com/jayhack/ditto#contributing"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-black/[0.04]"
          >
            Contribute a vibe
          </a>
        </div>
      </div>
    </div>
  );
}
