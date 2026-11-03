"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import { useState } from "react";
import {
  levelStyles,
  skillCategories,
  skillChains,
  type Level,
} from "@/lib/data";
import { DomainIcon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active =
    skillCategories.find((category) => category.id === activeId) ??
    skillCategories[0];

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="03 — Technical skills"
            title="Tools I reach for,"
            accent="and how well."
            description="Grouped by discipline and labelled by real proficiency — expert, advanced, intermediate or currently learning."
          />
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3.5 py-2.5 text-[11px] text-white/45">
              <Info className="h-3.5 w-3.5 text-accent-soft" />
              Self-assessed, no invented percentages.
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div
            className="mt-10 flex gap-1.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Skill categories"
          >
            {skillCategories.map((category) => {
              const isActive = category.id === activeId;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(category.id)}
                  className={`relative shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="skill-tab"
                      className="absolute inset-0 -z-10 rounded-full border border-accent/30 bg-accent/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  {category.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8"
              role="tabpanel"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent-soft">
                  <DomainIcon name={active.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-white">
                    {active.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">{active.blurb}</p>
                </div>
              </div>

              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {active.techs.map((tech, index) => (
                  <motion.li
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 * index, duration: 0.35 }}
                    className="group flex flex-col gap-2 rounded-xl border border-white/10 bg-ink/60 p-3.5 transition-colors hover:border-accent/30"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-white/85">
                        {tech.name}
                      </span>
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[9px] uppercase tracking-[0.1em] ${
                          levelStyles[tech.level as Level]
                        }`}
                      >
                        {tech.level}
                      </span>
                    </div>
                    {tech.relatedProjects && tech.relatedProjects.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {tech.relatedProjects.map((slug) => (
                          <Link
                            key={slug}
                            href={`/projects/${slug}`}
                            className="inline-flex items-center gap-1 text-[10px] text-white/35 transition-colors hover:text-accent-soft"
                          >
                            used in project
                            <ArrowRight className="h-2.5 w-2.5" />
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <span className="text-[10px] text-white/25">
                        foundational
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent/70" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.26em] text-accent-soft">
                Skill → project mapping
              </h3>
            </div>
            <p className="mt-3 max-w-2xl text-sm text-white/45">
              Skills only matter when they become something. These chains show
              how each capability travels from a tool into a working project.
            </p>
          </Reveal>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {skillChains.map((chain, index) => (
              <Reveal key={chain.title} delay={index * 0.04}>
                <Link
                  href={`/projects/${chain.slug}`}
                  className="card group block p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-white/85">
                      {chain.title}
                    </p>
                    <ArrowRight className="h-4 w-4 text-white/25 transition-all group-hover:translate-x-1 group-hover:text-accent-soft" />
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2">
                    {chain.steps.map((step, i) => (
                      <span key={step} className="flex items-center gap-1.5">
                        <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-white/60">
                          {step}
                        </span>
                        {i < chain.steps.length - 1 ? (
                          <span className="text-[10px] text-accent/60">→</span>
                        ) : null}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
                    {chain.project}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
