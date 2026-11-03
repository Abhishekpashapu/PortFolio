"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroOverlay() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduce) {
      setVisible(false);
      return;
    }
    const start = Date.now();
    const duration = 1500;
    const id = window.setInterval(() => {
      const p = Math.min(
        100,
        Math.round(((Date.now() - start) / duration) * 100)
      );
      setProgress(p);
      if (p >= 100) {
        window.clearInterval(id);
        window.setTimeout(() => setVisible(false), 220);
      }
    }, 40);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && !reduce ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
          <div className="relative flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/40"
            >
              Portfolio
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-display text-6xl font-semibold tracking-tight text-white sm:text-8xl"
            >
              ABHI
            </motion.span>
            <div className="mt-8 h-px w-56 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-violet"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
            <span className="mt-3 font-mono text-[10px] tracking-[0.3em] text-white/30">
              {String(progress).padStart(3, "0")}
            </span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
