"use client";

import { motion, useReducedMotion } from "framer-motion";

export function JumpLine({ label }: { label: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="relative overflow-hidden py-10 md:py-12" aria-hidden="true">
      <div className="container-x flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/10" />
        <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.26em] text-white/30">
          {label}
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/10" />
      </div>

      {!reduce ? (
        <motion.span
          className="absolute top-1/2 h-1.5 w-1.5 rounded-full bg-accent-soft shadow-glow-sm"
          initial={{ left: "6%", y: 0, opacity: 0 }}
          whileInView={{ left: "92%", y: [0, -34, 0], opacity: [0, 1, 1, 0] }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 2.4, ease: "easeInOut", times: [0, 0.5, 1] }}
        />
      ) : null}
    </div>
  );
}
