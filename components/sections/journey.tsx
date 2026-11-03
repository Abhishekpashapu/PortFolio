import { journey } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Journey() {
  return (
    <section id="journey" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-violet/[0.07] blur-[120px]" />
      </div>

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="02 — Journey"
              title="The path from"
              accent="circuits to systems."
              description="A progression rather than a highlight reel — each phase added a layer I still use today."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Current focus
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  Applied computer vision, reproducible security labs, and
                  keeping the software side of IoT as clean as the firmware.
                </p>
              </div>
            </Reveal>
          </div>

          <ol className="relative space-y-2">
            <span
              aria-hidden="true"
              className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent"
            />
            {journey.map((item, index) => (
              <li key={item.phase} className="relative pl-14">
                <Reveal delay={index * 0.06}>
                  <div className="group relative rounded-2xl border border-transparent px-2 py-5 transition-colors hover:border-white/10 hover:bg-white/[0.02]">
                    <span className="absolute -left-[43px] top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink font-mono text-[10px] text-accent-soft transition-colors group-hover:border-accent/40">
                      {item.phase}
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-medium text-white">
                        {item.title}
                      </h3>
                      <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {item.description}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/50"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
