import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Mail,
  Workflow,
} from "lucide-react";
import { getProject, profile, projects, statusStyles } from "@/lib/data";
import { DomainIcon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — Abhi`,
      description: project.summary,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`}
          />
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
        </div>

        <div className="container-x">
          <Reveal>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All projects
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <Reveal delay={0.05}>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] ${
                      statusStyles[project.status]
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                    · {project.year}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl">
                  {project.title}
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-4 max-w-2xl text-lg text-white/60">
                  {project.subtitle}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="hidden justify-end lg:flex">
              <span className="flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md">
                <DomainIcon
                  name={project.icon}
                  className="h-12 w-12 text-white/70"
                />
              </span>
            </Reveal>
          </div>
        </div>
      </header>

      <div className="container-x pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-12">
            <Reveal>
              <div className="card p-6 md:p-8">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-soft">
                  Overview
                </h2>
                <p className="mt-3 text-base leading-relaxed text-white/65">
                  {project.summary}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <section aria-labelledby="problem">
                <h2
                  id="problem"
                  className="font-display text-2xl font-medium text-white"
                >
                  The problem
                </h2>
                <p className="mt-3 text-base leading-relaxed text-white/55">
                  {project.problem}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="approach">
                <h2
                  id="approach"
                  className="font-display text-2xl font-medium text-white"
                >
                  The approach
                </h2>
                <p className="mt-3 text-base leading-relaxed text-white/55">
                  {project.solution}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="architecture">
                <div className="flex items-center gap-3">
                  <Workflow className="h-4 w-4 text-accent-soft" />
                  <h2
                    id="architecture"
                    className="font-display text-2xl font-medium text-white"
                  >
                    Architecture
                  </h2>
                </div>
                <ol className="relative mt-5 space-y-3">
                  <span
                    aria-hidden="true"
                    className="absolute left-[17px] top-4 bottom-4 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent"
                  />
                  {project.architecture.map((layer, i) => (
                    <li key={layer.label} className="relative pl-12">
                      <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-ink font-mono text-[10px] text-accent-soft">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                        <p className="text-sm font-medium text-white/85">
                          {layer.label}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/45">
                          {layer.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="features">
                <h2
                  id="features"
                  className="font-display text-2xl font-medium text-white"
                >
                  Key features
                </h2>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-sm text-white/60"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="process">
                <h2
                  id="process"
                  className="font-display text-2xl font-medium text-white"
                >
                  How it was built
                </h2>
                <ol className="mt-4 space-y-3">
                  {project.process.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm">
                      <span className="font-mono text-[10px] text-accent-soft/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed text-white/55">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>

            <Reveal>
              <section
                aria-labelledby="contribution"
                className="rounded-2xl border border-accent/20 bg-accent/[0.05] p-6"
              >
                <h2
                  id="contribution"
                  className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-soft"
                >
                  My contribution
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {project.contribution}
                </p>
              </section>
            </Reveal>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={0.05}>
              <div className="card p-5">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Tech stack
                </h2>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.035] px-2 py-1 text-[11px] text-white/60"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card p-5">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Project links
                </h2>
                <div className="mt-3 space-y-2">
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2 text-xs text-white/70 transition-colors hover:border-accent/40 hover:text-white"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Github className="h-3.5 w-3.5" />
                        Repository
                      </span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2 text-xs text-white/70 transition-colors hover:border-accent/40 hover:text-white"
                    >
                      <span className="inline-flex items-center gap-2">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        Live demo
                      </span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : null}
                  {!project.repo && !project.demo ? (
                    <>
                      <p className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 text-[11px] leading-relaxed text-white/40">
                        No public repository or demo yet. Links are added here
                        only when they are real.
                      </p>
                      <a
                        href={`mailto:${profile.email}?subject=${encodeURIComponent(
                          `${project.title} — request a walkthrough`
                        )}`}
                        className="flex items-center justify-between rounded-lg border border-accent/25 bg-accent/10 px-3 py-2 text-xs text-white/75 transition-colors hover:bg-accent hover:text-white"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Mail className="h-3.5 w-3.5" />
                          Request a walkthrough
                        </span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </>
                  ) : null}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="card p-5">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                  At a glance
                </h2>
                <dl className="mt-3 space-y-2.5 text-xs">
                  <div className="flex justify-between gap-3">
                    <dt className="text-white/35">Domain</dt>
                    <dd className="text-right text-white/65">
                      {project.category}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-white/35">Year</dt>
                    <dd className="text-white/65">{project.year}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-white/35">Status</dt>
                    <dd className="text-white/65">{project.status}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-white/35">Role</dt>
                    <dd className="text-right text-white/65">Builder</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </aside>
        </div>

        <nav
          aria-label="Project navigation"
          className="mt-16 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2"
        >
          <Link
            href={`/projects/${prev.slug}`}
            className="card group flex items-center gap-3 p-4"
          >
            <ArrowLeft className="h-4 w-4 text-white/35 transition-transform group-hover:-translate-x-1" />
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">
                Previous
              </span>
              <p className="text-sm text-white/70">{prev.title}</p>
            </div>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="card group flex items-center justify-end gap-3 p-4 text-right"
          >
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">
                Next
              </span>
              <p className="text-sm text-white/70">{next.title}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-white/35 transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>
      </div>
    </article>
  );
}
