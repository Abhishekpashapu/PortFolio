import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="container-x text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
          <Compass className="h-3.5 w-3.5 text-accent-soft" />
          Signal lost
        </span>
        <h1 className="mt-6 font-display text-7xl font-semibold tracking-tight text-white sm:text-9xl">
          4<span className="text-gradient-accent">0</span>4
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base text-white/50">
          This route does not exist — or it moved. The work is all on the main
          page.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-soft hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-white/70 transition-colors hover:border-accent/40 hover:text-white"
          >
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
