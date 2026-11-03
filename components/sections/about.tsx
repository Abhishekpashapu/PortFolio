import { ArrowUpRight, CheckCircle2, MapPin, Radio } from "lucide-react";
import { profile, stats } from "@/lib/data";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const facts = [
  { label: "Base", value: profile.location },
  { label: "Degree", value: "Electronics & Communication" },
  { label: "Focus", value: "Software · Embedded · IoT · AI" },
  { label: "Status", value: "Open to opportunities" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-x">
        <SectionHeading
          eyebrow="01 — About"
          title="An engineer who likes the"
          accent="whole stack."
          description="From the sensor on the bench to the dashboard in the browser — I care about how each layer earns its place."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="card noise relative overflow-hidden p-7">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />

              <div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent">
                <div className="absolute inset-2 rounded-full border border-dashed border-white/10 animate-spin-slower" />
                <span className="font-display text-6xl font-semibold tracking-tight text-gradient">
                  A
                </span>
              </div>

              <div className="relative mt-6 text-center">
                <h3 className="font-display text-xl font-semibold text-white">
                  {profile.name}
                </h3>
                <p className="mt-1 text-sm text-white/50">{profile.role}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-300">
                  <Radio className="h-3 w-3" />
                  Available
                </span>
              </div>

              <div className="relative mt-7 space-y-3 border-t border-white/10 pt-6">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-start justify-between gap-4 text-sm"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                      {fact.label}
                    </span>
                    <span className="text-right text-white/70">{fact.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="group relative mt-7 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75 transition-colors hover:border-accent/40 hover:text-white"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.05}>
              <div className="space-y-5 text-base leading-relaxed text-white/60 md:text-lg">
                {profile.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Ships complete, documented prototypes",
                  "Comfortable across hardware and software",
                  "Evaluates models honestly, not optimistically",
                  "Writes interfaces people can actually use",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-white/65"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-colors hover:border-accent/25"
                  >
                    <div className="font-display text-3xl font-semibold tracking-tight text-white">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-1 text-[11px] leading-tight text-white/40">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <figure className="mt-8 rounded-2xl border-l-2 border-accent/50 bg-white/[0.02] px-5 py-4">
                <blockquote className="text-sm italic leading-relaxed text-white/55">
                  “A working prototype is the beginning of the argument, not the
                  end of it — the documentation is where the engineering shows.”
                </blockquote>
                <figcaption className="mt-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                  <MapPin className="h-3 w-3" />
                  Working principle
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
