import { Award, ExternalLink, GraduationCap, Wrench } from "lucide-react";
import { certifications, education, toolGroups } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-[24rem] w-[24rem] rounded-full bg-violet/[0.06] blur-[130px]" />
      </div>

      <div className="container-x">
        <SectionHeading
          eyebrow="06 — Education & credentials"
          title="The formal part,"
          accent="stated honestly."
          description="Placeholders are used deliberately. Nothing here claims a college, grade or certificate that has not been provided."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent-soft">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <h3 className="font-display text-lg font-medium text-white">
                  Education
                </h3>
              </div>
            </Reveal>

            <ol className="mt-5 space-y-3">
              {education.map((item, index) => (
                <li key={item.degree}>
                  <Reveal delay={index * 0.05}>
                    <article className="card p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h4 className="font-display text-base font-medium text-white">
                          {item.degree}
                        </h4>
                        <span className="rounded-full border border-amber-400/25 bg-amber-400/[0.08] px-2 py-0.5 text-[9px] uppercase tracking-[0.12em] text-amber-200">
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-white/60">
                        {item.institution}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
                        {item.period}
                      </p>
                      <p className="mt-3 text-xs leading-relaxed text-white/40">
                        {item.detail}
                      </p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>

            <Reveal delay={0.1}>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 bg-white/[0.015] p-5">
                <p className="flex items-start gap-2 text-xs leading-relaxed text-white/40">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft/70" />
                  Edit{" "}
                  <code className="rounded bg-white/[0.06] px-1 py-0.5 font-mono text-[10px] text-white/60">
                    lib/data.ts
                  </code>{" "}
                  to add your real college, grades (only if you want them shown)
                  and verified certifications.
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent-soft">
                  <Award className="h-4 w-4" />
                </span>
                <h3 className="font-display text-lg font-medium text-white">
                  Certifications
                </h3>
              </div>
            </Reveal>

            <ul className="mt-5 space-y-3">
              {certifications.map((cert, index) => (
                <li key={`${cert.name}-${index}`}>
                  <Reveal delay={index * 0.05}>
                    <article className="card p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-sm font-medium text-white/85">
                            {cert.name}
                          </h4>
                          <p className="mt-0.5 text-xs text-white/45">
                            {cert.issuer} · {cert.date}
                          </p>
                        </div>
                        {cert.link ? (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] text-accent-soft hover:text-white"
                          >
                            Verify
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          <span className="rounded-full border border-white/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.1em] text-white/30">
                            unverified
                          </span>
                        )}
                      </div>
                      <p className="mt-3 text-[11px] leading-relaxed text-white/35">
                        {cert.note}
                      </p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="tools" className="mt-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent-soft">
                <Wrench className="h-4 w-4" />
              </span>
              <h3 className="font-display text-lg font-medium text-white">
                Development tools
              </h3>
            </div>
            <p className="mt-3 max-w-2xl text-sm text-white/45">
              The everyday workflow — the tools that turn an idea into a
              repeatable build and a reviewable diff.
            </p>
          </Reveal>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {toolGroups.map((group, index) => (
              <Reveal key={group.label} delay={index * 0.04} className="h-full">
                <div className="card h-full p-5">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                    {group.label}
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {group.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-md border border-white/10 bg-white/[0.035] px-2 py-1 text-[11px] text-white/60"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
