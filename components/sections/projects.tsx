import { Eye } from "lucide-react";
import { featuredProjects, otherProjects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/[0.07] blur-[140px]" />
      </div>

      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="04 — Featured projects"
            title="Work that ships,"
            accent="not just demos."
            description="Four projects across software, IoT, AI and embedded systems. Each one has a full case study covering the problem, the build and the honest limitations."
          />
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-xl border border-amber-400/20 bg-amber-400/[0.06] px-3.5 py-2.5 text-[11px] text-amber-200/70">
              <Eye className="h-3.5 w-3.5" />
              Status labels are kept current and honest.
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent/70" />
                <h3 className="font-mono text-[11px] uppercase tracking-[0.26em] text-accent-soft">
                  All projects
                </h3>
              </div>
              <p className="text-xs text-white/35">
                {otherProjects.length} further builds and explorations
              </p>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 0.05}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  index={featuredProjects.length + index}
                  compact
                />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-xs leading-relaxed text-white/40">
            <span className="font-medium text-white/60">
              About repository links:
            </span>{" "}
            project buttons appear only when a public repository or demo exists.
            No placeholder URLs are used — add real links in{" "}
            <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[11px] text-white/60">
              lib/data.ts
            </code>{" "}
            when they are ready.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
