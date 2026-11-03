"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Character } from "@/components/character/character";
import { SceneBack, SceneFront } from "@/components/character/scene-props";
import { sectionIds, specialties, type ScenePose } from "@/lib/data";

type SceneMeta = {
  pose: ScenePose;
  label: string;
  action: string;
  glow: string;
};

const baseScenes: Record<string, SceneMeta> = {
  top: {
    pose: "idle",
    label: "Arrival",
    action: "waiting for the first jump",
    glow: "bg-accent/15",
  },
  about: {
    pose: "wave",
    label: "About",
    action: "waving hello",
    glow: "bg-accent/15",
  },
  journey: {
    pose: "run",
    label: "Journey",
    action: "moving through the timeline",
    glow: "bg-violet/15",
  },
  skills: {
    pose: "type",
    label: "Skills Lab",
    action: "practising at the terminal",
    glow: "bg-accent/15",
  },
  projects: {
    pose: "build",
    label: "Project Bay",
    action: "assembling something new",
    glow: "bg-accent/15",
  },
  education: {
    pose: "read",
    label: "Study Room",
    action: "reading the fundamentals",
    glow: "bg-violet/15",
  },
  contact: {
    pose: "contact",
    label: "Contact",
    action: "saying hello",
    glow: "bg-accent/15",
  },
};

const specialtyScenes: Record<string, SceneMeta> = Object.fromEntries(
  specialties.map((specialty) => [
    specialty.id,
    {
      pose: specialty.pose,
      label: specialty.sceneLabel,
      action: specialty.action,
      glow: specialty.glow,
    },
  ])
);

const scenes: Record<string, SceneMeta> = { ...baseScenes, ...specialtyScenes };

const fallbackScene: SceneMeta = {
  pose: "idle",
  label: "Portfolio",
  action: "standing by",
  glow: "bg-accent/15",
};

const totalScenes = sectionIds.length - 1;

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function CharacterStage() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("top");
  const [pose, setPose] = useState<ScenePose>("idle");
  const [jumping, setJumping] = useState(false);
  const [burst, setBurst] = useState(0);
  const [atFooter, setAtFooter] = useState(false);
  const lastScene = useRef("top");
  const tokenRef = useRef(0);

  const scene = scenes[active] ?? fallbackScene;
  const index = Math.max(0, sectionIds.indexOf(active));
  const stageVisible = !atFooter;
  const companionVisible = !atFooter;

  /* Which section is currently in the reading band of the viewport. */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* Get out of the way when the footer arrives. */
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAtFooter(entry.isIntersecting),
      { threshold: 0.08 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  /* Jump choreography whenever the scene changes. */
  useEffect(() => {
    if (active === "top") {
      lastScene.current = active;
      setPose("idle");
      setJumping(false);
      return;
    }

    if (lastScene.current === active) return;
    lastScene.current = active;

    if (reduce) {
      setPose(scene.pose);
      return;
    }

    const token = ++tokenRef.current;
    setPose("jump");
    setJumping(true);

    const landPose = window.setTimeout(() => {
      if (tokenRef.current === token) setPose(scene.pose);
    }, 330);

    const land = window.setTimeout(() => {
      if (tokenRef.current !== token) return;
      setJumping(false);
      setBurst((value) => value + 1);
    }, 900);

    return () => {
      window.clearTimeout(landPose);
      window.clearTimeout(land);
    };
  }, [active, reduce, scene.pose]);

  const characterMotion = reduce
    ? { y: 0, x: 0, rotate: 0, scale: 1 }
    : jumping
      ? {
          y: [0, -108, 0],
          x: [0, 26, 0],
          rotate: [0, 9, 0],
          scale: [1, 1.03, 1],
        }
      : { y: [0, -6, 0], x: 0, rotate: 0, scale: 1 };

  return (
    <>
      {/* Desktop stage — docks into the reserved right rail. */}
      <div
        aria-hidden="true"
        data-character-stage="desktop"
        className="pointer-events-none fixed inset-y-0 right-0 z-40 hidden w-[300px] xl:block"
      >
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-y-0 inset-x-0 bg-gradient-to-l from-ink/50 via-ink/10 to-transparent" />

        <AnimatePresence>
          {stageVisible ? (
            <motion.div
              key="stage"
              initial={{ opacity: 0, x: 46 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 46 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full flex-col justify-end px-3 pb-6"
            >
              <div className="relative mx-auto h-[500px] w-[280px]">
                {/* ambient scene light */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.12 }}
                      transition={{ duration: 0.8 }}
                      className={`absolute left-1/2 top-[270px] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[72px] ${scene.glow}`}
                    />
                  </AnimatePresence>
                  <div className="absolute left-1/2 top-[220px] h-[350px] w-[244px] -translate-x-1/2 rounded-[50%] border border-white/[0.06]" />
                  <div className="absolute left-1/2 top-[250px] h-[290px] w-[206px] -translate-x-1/2 rounded-[50%] border border-dashed border-white/[0.05]" />
                  <div className="grid-bg absolute inset-x-0 bottom-0 h-[220px] opacity-30" />
                </div>

                {/* HUD */}
                <div className="absolute inset-x-0 top-0 z-40">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.26em] text-white/35">
                      Scene {pad(index)}{" "}
                      <span className="text-white/15">/ {pad(totalScenes)}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.22em] text-white/35">
                      <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
                      live
                    </span>
                  </div>
                  <div className="mt-2 border-b border-white/10 pb-2.5">
                    <p className="font-display text-[15px] font-medium text-white">
                      {scene.label}
                    </p>
                    <p className="mt-0.5 truncate font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                      {scene.action}
                    </p>
                  </div>
                  <div className="mt-2.5 flex gap-1">
                    {sectionIds.slice(1).map((id, i) => (
                      <span
                        key={id}
                        className={`h-[3px] flex-1 rounded-full transition-colors duration-500 ${
                          i === index - 1
                            ? "bg-accent"
                            : i < index - 1
                              ? "bg-accent/50"
                              : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* jump path */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 280 500"
                  fill="none"
                >
                  <motion.path
                    d="M22 446 Q140 92 258 446"
                    stroke="#7aa2ff"
                    strokeWidth="1.2"
                    strokeDasharray="3 7"
                    initial={false}
                    animate={{
                      opacity: jumping ? 0.7 : 0,
                      pathLength: jumping ? 1 : 0,
                    }}
                    transition={{ duration: 0.85, ease: "easeInOut" }}
                  />
                </svg>

                <div className="absolute inset-0 z-10">
                  <SceneBack scene={active} />
                </div>

                {/* floor + character */}
                <div className="absolute bottom-8 left-1/2 z-20 h-[300px] w-[200px] -translate-x-1/2">
                  <div className="absolute -bottom-1 left-1/2 h-4 w-40 -translate-x-1/2 rounded-[50%] bg-black/60 blur-md" />
                  <motion.div
                    className="relative h-full w-full"
                    initial={false}
                    animate={characterMotion}
                    transition={
                      jumping
                        ? { duration: 0.92, times: [0, 0.45, 1], ease: "easeInOut" }
                        : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }
                    }
                  >
                    {jumping && !reduce ? (
                      <>
                        <Character
                          pose="jump"
                          className="absolute left-2 top-0 h-full w-full opacity-20 blur-[2px]"
                        />
                        <Character
                          pose="jump"
                          className="absolute left-4 top-0 h-full w-full opacity-10 blur-[4px]"
                        />
                      </>
                    ) : null}
                    <Character
                      pose={pose}
                      className="relative h-full w-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]"
                    />
                  </motion.div>
                </div>

                {/* landing burst */}
                <div className="pointer-events-none absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
                  <AnimatePresence>
                    {burst > 0 && !reduce ? (
                      <motion.div
                        key={burst}
                        initial={{ opacity: 0.85, scale: 0.3 }}
                        animate={{ opacity: 0, scale: 1.7 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-12 w-48 rounded-[50%] border border-accent/50"
                      />
                    ) : null}
                  </AnimatePresence>
                </div>

                <div className="absolute inset-0 z-30">
                  <SceneFront scene={active} />
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Mobile / tablet companion */}
      <div
        aria-hidden="true"
        data-character-stage="mobile"
        className="pointer-events-none fixed bottom-3 right-3 z-40 xl:hidden"
      >
        <AnimatePresence>
          {companionVisible ? (
            <motion.div
              key="companion"
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex max-w-[230px] items-center gap-2 rounded-2xl border border-white/10 bg-ink/85 py-1.5 pl-1.5 pr-3 shadow-2xl backdrop-blur-xl"
            >
              <div className="relative h-12 w-10 overflow-hidden rounded-xl border border-white/5 bg-white/[0.03]">
                <motion.div
                  className="absolute -left-1 -top-2 h-[64px] w-[44px]"
                  initial={false}
                  animate={
                    jumping && !reduce
                      ? { y: [0, -18, 0], rotate: [0, 6, 0] }
                      : { y: [0, -2, 0] }
                  }
                  transition={
                    jumping
                      ? { duration: 0.75, times: [0, 0.5, 1] }
                      : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
                  }
                >
                  <Character pose={pose} className="h-full w-full" />
                </motion.div>
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-[11px] text-white">
                  {scene.label}
                </p>
                <p className="truncate font-mono text-[7px] uppercase tracking-[0.16em] text-white/40">
                  {pad(index)}/{pad(totalScenes)} · {scene.action}
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* quick light sweep between mobile scenes */}
      <AnimatePresence>
        {jumping && !reduce ? (
          <motion.div
            key="sweep"
            className="pointer-events-none fixed inset-0 z-30 overflow-hidden xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ x: "-70%", skewX: -12 }}
              animate={{ x: "170%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-accent/10 to-transparent blur-2xl"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
