"use client";

import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { Magnetic } from "@/components/ui/magnetic";
import { ParticleField } from "@/components/ui/particle-field";

const floatingChips = [
  { label: "Java", className: "left-[2%] top-[16%]", delay: "0s" },
  { label: "ESP32", className: "right-[0%] top-[26%]", delay: "1.1s" },
  { label: "React", className: "left-[8%] bottom-[20%]", delay: "2s" },
  { label: "Python", className: "right-[6%] bottom-[12%]", delay: "0.6s" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 18 });
  const sy = useSpring(my, { stiffness: 90, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-12, 12]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.rotatingRoles.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  const lines = ["Engineering", "ideas into"];
  const stagger = reduce ? 0 : 0.12;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
      onMouseMove={handleMove}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-violet/15 blur-[120px]" />
        <div className="absolute -left-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-accent-deep/15 blur-[110px]" />
        <ParticleField className="absolute inset-0 h-full w-full opacity-70" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-300">
              {profile.availability}
            </span>
          </motion.div>

          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
            {profile.name} · {profile.role}
          </p>

          <h1 className="mt-4 font-display text-[clamp(2.75rem,7.2vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.9,
                    delay: 1.75 + i * stagger,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block text-gradient-accent"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.9,
                  delay: 1.75 + 2 * stagger,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                reality.
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.25 }}
            className="mt-5 flex h-7 items-center gap-2 text-sm text-white/60"
          >
            <Sparkles className="h-4 w-4 text-accent-soft" />
            <span className="text-white/45">Focus:</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={profile.rotatingRoles[roleIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="font-medium text-white/85"
              >
                {profile.rotatingRoles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/55 md:text-lg"
          >
            {profile.headline} I work across Java full-stack, embedded firmware,
            IoT pipelines and applied machine learning — with an emphasis on
            systems that are documented, testable and honest about their limits.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.45 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-glow transition-colors hover:bg-accent-soft hover:text-ink"
              >
                Explore projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm text-white/85 transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-white"
              >
                Download resume
                <Download className="h-4 w-4" />
              </a>
            </Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3 py-3 text-sm text-white/55 transition-colors hover:text-white"
            >
              Get in touch
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 2.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold text-white">07</span>
              <span className="text-xs text-white/40">engineering projects</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold text-white">06</span>
              <span className="text-xs text-white/40">engineering specialties</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold text-white">40+</span>
              <span className="text-xs text-white/40">tools & technologies</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/35">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </span>
          </motion.div>
        </div>

        <div className="relative hidden justify-center lg:flex" aria-hidden="true">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square w-full max-w-[420px]"
            style={{ perspective: 1200 }}
          >
            <motion.div
              className="relative h-full w-full"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" />
              <div className="absolute inset-[4%] animate-spin-slower rounded-full border border-dashed border-white/10" />
              <div className="absolute inset-[14%] animate-spin-slow rounded-full border border-white/10" />
              <div className="absolute inset-[24%] rounded-full border border-accent/20" />

              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-accent-soft shadow-glow-sm"
                  style={{
                    transform: `rotate(${i * 90}deg) translateX(46%)`,
                  }}
                />
              ))}

              <div className="glass absolute inset-[30%] flex flex-col items-center justify-center rounded-[2rem] text-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                  ECE
                </span>
                <span className="mt-2 font-display text-4xl font-semibold tracking-tight text-white">
                  {profile.name}
                </span>
                <span className="mt-1 text-[11px] text-white/45">
                  software × hardware
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-accent-soft">
                  <span className="h-1 w-1 rounded-full bg-accent-soft" />
                  building
                </span>
              </div>

              {floatingChips.map((chip) => (
                <span
                  key={chip.label}
                  className={`absolute rounded-full border border-white/10 bg-ink/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/60 backdrop-blur-md animate-float ${chip.className}`}
                  style={{ animationDelay: chip.delay }}
                >
                  {chip.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/70 sm:flex"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-accent-soft"
            animate={reduce ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        <ArrowDown className="h-3 w-3" />
      </a>
    </section>
  );
}
