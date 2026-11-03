import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { statusStyles, type Project } from "@/lib/data";
import { DomainIcon } from "@/components/ui/icon";

export function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <Link
        href={`/projects/${project.slug}`}
        className="card group flex h-full flex-col overflow-hidden"
      >
        <div
          className={`relative flex h-28 items-center justify-between overflow-hidden bg-gradient-to-br ${project.accent} px-5`}
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <DomainIcon
            name={project.icon}
            className="relative h-8 w-8 text-white/70"
          />
          <span className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-2">
            <span
              className={`rounded-full border px-2 py-0.5 text-[9px] uppercase tracking-[0.1em] ${
                statusStyles[project.status]
              }`}
            >
              {project.status}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/30">
              {project.category}
            </span>
          </div>
          <h3 className="mt-3 font-display text-lg font-medium text-white">
            {project.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/45">
            {project.subtitle}
          </p>
          <div className="mt-auto flex items-center justify-between pt-4">
            <span className="font-mono text-[10px] text-white/25">
              {project.year}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-white/45 transition-colors group-hover:text-accent-soft">
              Case study
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card group flex h-full flex-col overflow-hidden"
    >
      <div
        className={`relative flex h-52 flex-col justify-between overflow-hidden bg-gradient-to-br ${project.accent} p-6`}
      >
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/5 blur-2xl transition-transform duration-700 group-hover:scale-125" />

        <div className="relative flex items-start justify-between">
          <span
            className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] ${
              statusStyles[project.status]
            }`}
          >
            {project.status}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="relative flex items-end justify-between">
          <DomainIcon
            name={project.icon}
            className="h-14 w-14 text-white/60 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-white/85"
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-medium text-white md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-white/55">{project.subtitle}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/40">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/50"
            >
              {tech}
            </li>
          ))}
          {project.tech.length > 4 ? (
            <li className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/35">
              +{project.tech.length - 4}
            </li>
          ) : null}
        </ul>

        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
          <span className="font-mono text-[10px] text-white/25">
            {project.year}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[12px] text-white/55 transition-colors group-hover:text-accent-soft">
            Read case study
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
