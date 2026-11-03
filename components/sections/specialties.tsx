import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { projects, specialties, type Specialty } from "@/lib/data";
import { DomainIcon } from "@/components/ui/icon";
import { JumpLine } from "@/components/ui/jump-line";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function SpecialtyScene({
  specialty,
  index,
}: {
  specialty: Specialty;
  index: number;
}) {
  const flip = index % 2 === 1;
  const related = specialty.projects
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <section
      id={specialty.id}
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${specialty.accent} opacity-80`}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <span className="pointer-events-none absolute -top-10 right-4 font-display text-[8rem] leading-none text-white/[0.035] md:text-[11rem]">
        {specialty.index}
      </span>

      <div className="container-x relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className={flip ? "lg:order-2" : undefined}>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
                  Scene {specialty.index}
                </span>
                <span className="h-px w-8 bg-white/15" />
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-soft/70">
                  {specialty.kicker}
                </span>
              </div>

              <div className="mt-5 flex items-start gap-4">
                <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-accent-soft">
                  <DomainIcon name={specialty.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-3xl font-medium tracking-tight text-white md:text-4xl">
                    {specialty.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50">
                    {specialty.description}
                  </p>
                </div>
              </div>

              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {specialty.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-2 text-[13px] leading-relaxed text-white/60"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-soft/80" />
                    {capability}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-1.5">
                {specialty.stack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-white/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {related.length ? (
                <div className="mt-8">
                  <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/30">
                    Related work
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {related.map((project) => (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-white/65 transition-colors hover:border-accent/40 hover:text-white"
                      >
                        {project.title}
                        <ArrowUpRight className="h-3 w-3 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </Reveal>
          </div>

          <div className={flip ? "lg:order-1" : undefined}>
            <Reveal delay={0.08}>
              <div className="relative">
                <div
                  className={`pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br ${specialty.accent} blur-2xl`}
                />
                <div className="glass relative overflow-hidden rounded-3xl p-5">
                  <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-white/20" />
                  <span className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-white/20" />
                  <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-white/20" />
                  <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-white/20" />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/35">
                      system view
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-300/70">
                      <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
                      online
                    </span>
                  </div>

                  <div className="relative mt-6 grid h-[250px] place-items-center">
                    <div className="absolute h-48 w-48 rounded-full border border-white/10" />
                    <div className="absolute h-56 w-56 rounded-full border border-dashed border-white/10" />
                    <div className="absolute h-36 w-36 rounded-full border border-white/10" />
                    <div className="absolute h-48 w-48 animate-spin-slow">
                      <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-soft shadow-glow-sm" />
                    </div>
                    <div className="absolute h-56 w-56 animate-spin-slower">
                      <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet/80" />
                    </div>

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-ink/80 shadow-glow">
                      <DomainIcon
                        name={specialty.icon}
                        className="h-8 w-8 text-accent-soft"
                      />
                      <span className="absolute -inset-2 rounded-[1.75rem] border border-accent/15" />
                    </div>

                    <span className="absolute left-3 top-4 rounded-full border border-white/10 bg-ink/80 px-2 py-0.5 font-mono text-[7px] uppercase tracking-[0.14em] text-white/40">
                      {specialty.sceneLabel}
                    </span>
                    <span className="absolute bottom-4 right-3 rounded-full border border-white/10 bg-ink/80 px-2 py-0.5 font-mono text-[7px] uppercase tracking-[0.14em] text-white/40">
                      pose · {specialty.pose}
                    </span>
                  </div>

                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {specialty.flow.map((step, flowIndex) => (
                      <div
                        key={step}
                        className="relative rounded-xl border border-white/10 bg-white/[0.03] px-2 py-2.5 text-center"
                      >
                        <span className="block font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
                          0{flowIndex + 1}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-white/70">
                          {step}
                        </span>
                        {flowIndex < 2 ? (
                          <ArrowRight className="absolute -right-[9px] top-1/2 h-3 w-3 -translate-y-1/2 text-white/25" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Specialties() {
  return (
    <section id="specialties" className="relative scroll-mt-24">
      <div className="container-x pt-24 md:pt-32">
        <SectionHeading
          eyebrow="05 — Engineering specialties"
          title="Six rooms,"
          accent="one engineer."
          description="Each discipline gets its own scene instead of a single grid. Scroll through the lab wing — the character jumps into every room and picks up the right tool."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {specialties.map((specialty) => (
            <a
              key={specialty.id}
              href={`#${specialty.id}`}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/50 transition-colors hover:border-accent/40 hover:text-white"
            >
              <span className="font-mono text-[9px] text-white/25 group-hover:text-accent-soft">
                {specialty.index}
              </span>
              {specialty.title}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16">
        {specialties.map((specialty, index) => (
          <div key={specialty.id}>
            {index > 0 ? <JumpLine label={`Jumping to ${specialty.title}`} /> : null}
            <SpecialtyScene specialty={specialty} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
