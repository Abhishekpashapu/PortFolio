"use client";

import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-3xl text-left"
      }
    >
      <Reveal>
        <div
          className={`flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-accent/70" />
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-soft">
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}{" "}
          {accent ? <span className="text-gradient-accent">{accent}</span> : null}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.12}>
          <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
