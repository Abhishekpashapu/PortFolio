"use client";

import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";
import { useId } from "react";
import type { ScenePose } from "@/lib/data";

const loop = (
  duration: number,
  values: number[],
  reverse = false
): Transition => {
  void values;
  return {
    duration,
    repeat: Infinity,
    repeatType: reverse ? "reverse" : "loop",
    ease: "easeInOut",
  };
};

const upperVariants: Variants = {
  idle: { y: [0, -3, 0], transition: loop(3.4, [0, -3, 0]) },
  wave: { y: 0 },
  jump: { y: -3 },
  type: { y: 2 },
  read: { y: 2 },
  think: { y: 0 },
  build: { y: 0 },
  shield: { y: 0 },
  contact: { y: 0 },
  run: { y: [0, -2, 0], transition: loop(0.6, [0, -2, 0]) },
};

const headVariants: Variants = {
  idle: { rotate: [0, 1.5, 0], transition: loop(4, [0, 1.5, 0]) },
  wave: { rotate: -2 },
  jump: { rotate: -4 },
  type: { rotate: -5 },
  read: { rotate: 13 },
  think: { rotate: -7 },
  build: { rotate: -3 },
  shield: { rotate: 4 },
  contact: { rotate: -3 },
  run: { rotate: 2 },
};

const leftArmVariants: Variants = {
  idle: { rotate: 4, transition: { duration: 0.5 } },
  wave: { rotate: 6, transition: { duration: 0.4 } },
  jump: { rotate: 140, transition: { duration: 0.35 } },
  type: { rotate: [-48, -56, -48], transition: loop(0.9, [-48, -56, -48]) },
  read: { rotate: -40, transition: { duration: 0.4 } },
  think: { rotate: -12, transition: { duration: 0.4 } },
  build: { rotate: 16, transition: { duration: 0.4 } },
  shield: { rotate: -62, transition: { duration: 0.35 } },
  contact: { rotate: 6, transition: { duration: 0.4 } },
  run: { rotate: [-30, 25, -30], transition: loop(0.7, [-30, 25, -30]) },
};

const rightArmVariants: Variants = {
  idle: { rotate: -4, transition: { duration: 0.5 } },
  wave: { rotate: [-145, -162, -145], transition: loop(1.3, [-145, -162, -145]) },
  jump: { rotate: -140, transition: { duration: 0.35 } },
  type: { rotate: [48, 56, 48], transition: loop(0.9, [48, 56, 48]) },
  read: { rotate: 40, transition: { duration: 0.4 } },
  think: { rotate: 150, transition: { duration: 0.45 } },
  build: { rotate: [-70, -82, -70], transition: loop(1.6, [-70, -82, -70]) },
  shield: { rotate: -128, transition: { duration: 0.35 } },
  contact: { rotate: [-140, -160, -140], transition: loop(1.2, [-140, -160, -140]) },
  run: { rotate: [25, -30, 25], transition: loop(0.7, [25, -30, 25]) },
};

const leftThighVariants: Variants = {
  idle: { rotate: 2 },
  wave: { rotate: 2 },
  jump: { rotate: 17, transition: { duration: 0.3 } },
  type: { rotate: 0 },
  read: { rotate: 0 },
  think: { rotate: 3 },
  build: { rotate: 3 },
  shield: { rotate: 5 },
  contact: { rotate: 2 },
  run: { rotate: [22, -18, 22], transition: loop(0.7, [22, -18, 22]) },
};

const rightThighVariants: Variants = {
  idle: { rotate: -2 },
  wave: { rotate: -2 },
  jump: { rotate: -17, transition: { duration: 0.3 } },
  type: { rotate: 0 },
  read: { rotate: 0 },
  think: { rotate: -3 },
  build: { rotate: -3 },
  shield: { rotate: -5 },
  contact: { rotate: -2 },
  run: { rotate: [-18, 22, -18], transition: loop(0.7, [-18, 22, -18]) },
};

const leftShinVariants: Variants = {
  idle: { rotate: 0 },
  wave: { rotate: 0 },
  jump: { rotate: -20, transition: { duration: 0.3 } },
  type: { rotate: 0 },
  read: { rotate: 0 },
  think: { rotate: 0 },
  build: { rotate: 0 },
  shield: { rotate: 0 },
  contact: { rotate: 0 },
  run: { rotate: [-16, 26, -16], transition: loop(0.7, [-16, 26, -16]) },
};

const rightShinVariants: Variants = {
  idle: { rotate: 0 },
  wave: { rotate: 0 },
  jump: { rotate: 20, transition: { duration: 0.3 } },
  type: { rotate: 0 },
  read: { rotate: 0 },
  think: { rotate: 0 },
  build: { rotate: 0 },
  shield: { rotate: 0 },
  contact: { rotate: 0 },
  run: { rotate: [26, -16, 26], transition: loop(0.7, [26, -16, 26]) },
};

export function Character({
  pose = "idle",
  className,
}: {
  pose?: ScenePose;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, "");
  const visorId = `visor-${uid}`;
  const jacketId = `jacket-${uid}`;
  const flameId = `flame-${uid}`;

  const still = reduce ? "idle" : pose;

  return (
    <svg
      viewBox="0 0 200 300"
      className={className}
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id={visorId} x1="82" y1="48" x2="120" y2="66" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9ec1ff" />
          <stop offset="0.55" stopColor="#4f7cff" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id={jacketId} x1="70" y1="96" x2="130" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="#151b2f" />
          <stop offset="1" stopColor="#090d18" />
        </linearGradient>
        <linearGradient id={flameId} x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop stopColor="#9ec1ff" />
          <stop offset="0.6" stopColor="#4f7cff" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* backpack + thrusters */}
      <rect x="55" y="106" width="20" height="64" rx="9" fill="#080b14" stroke="#26304a" strokeWidth="1.5" />
      <rect x="59" y="118" width="12" height="30" rx="4" fill="#0d1322" />
      <motion.g
        animate={{ opacity: still === "jump" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <rect x="61" y="170" width="8" height="12" rx="3" fill="#1a2440" />
        <motion.path
          d="M61 182 Q65 198 69 182 Z"
          fill={`url(#${flameId})`}
          animate={reduce ? undefined : { scaleY: [0.7, 1.35, 0.7] }}
          transition={{ duration: 0.16, repeat: Infinity }}
          style={{ transformOrigin: "65px 182px", transformBox: "view-box" }}
        />
      </motion.g>

      {/* legs */}
      <motion.g
        animate={still}
        variants={leftThighVariants}
        initial={false}
        style={{ transformOrigin: "88px 170px", transformBox: "view-box" }}
      >
        <line x1="88" y1="170" x2="85" y2="222" stroke="#0d1222" strokeWidth="15" strokeLinecap="round" />
        <motion.g
          animate={still}
          variants={leftShinVariants}
          initial={false}
          style={{ transformOrigin: "85px 222px", transformBox: "view-box" }}
        >
          <line x1="85" y1="222" x2="83" y2="264" stroke="#10162a" strokeWidth="13" strokeLinecap="round" />
          <path d="M70 258 Q83 264 99 258 L98 270 Q83 275 71 270 Z" fill="#1b2540" stroke="#2f3b5c" strokeWidth="1.5" />
          <path d="M72 268 H97" stroke="#4f7cff" strokeWidth="1.5" opacity="0.55" />
        </motion.g>
      </motion.g>

      <motion.g
        animate={still}
        variants={rightThighVariants}
        initial={false}
        style={{ transformOrigin: "112px 170px", transformBox: "view-box" }}
      >
        <line x1="112" y1="170" x2="115" y2="222" stroke="#0d1222" strokeWidth="15" strokeLinecap="round" />
        <motion.g
          animate={still}
          variants={rightShinVariants}
          initial={false}
          style={{ transformOrigin: "115px 222px", transformBox: "view-box" }}
        >
          <line x1="115" y1="222" x2="117" y2="264" stroke="#10162a" strokeWidth="13" strokeLinecap="round" />
          <path d="M101 258 Q117 264 130 258 L129 270 Q117 275 102 270 Z" fill="#1b2540" stroke="#2f3b5c" strokeWidth="1.5" />
          <path d="M103 268 H128" stroke="#4f7cff" strokeWidth="1.5" opacity="0.55" />
        </motion.g>
      </motion.g>

      {/* upper body */}
      <motion.g
        animate={still}
        variants={upperVariants}
        initial={false}
        style={{ transformOrigin: "100px 172px", transformBox: "view-box" }}
      >
        {/* torso */}
        <path
          d="M77 98 Q100 87 123 98 L133 166 Q100 177 67 166 Z"
          fill={`url(#${jacketId})`}
          stroke="#26304a"
          strokeWidth="1.6"
        />
        <path d="M100 100 L100 165" stroke="#2c3654" strokeWidth="1.2" strokeDasharray="3 4" />
        <rect x="87" y="110" width="26" height="30" rx="6" fill="#060911" stroke="#33406a" />
        <path d="M93 118 H107 M93 124 H104 M93 130 H108" stroke="#4f7cff" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
        <circle cx="100" cy="149" r="2.2" fill="#7aa2ff" />
        <path d="M68 132 H78 M122 132 H132" stroke="#4f7cff" strokeWidth="2" opacity="0.5" />

        {/* left arm */}
        <motion.g
          animate={still}
          variants={leftArmVariants}
          initial={false}
          style={{ transformOrigin: "78px 106px", transformBox: "view-box" }}
        >
          <line x1="78" y1="106" x2="68" y2="164" stroke="#141a2c" strokeWidth="13" strokeLinecap="round" />
          <line x1="72" y1="146" x2="70" y2="156" stroke="#4f7cff" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          <circle cx="66" cy="168" r="6.5" fill="#c7d2e8" stroke="#2a3350" strokeWidth="1.5" />
        </motion.g>

        {/* right arm */}
        <motion.g
          animate={still}
          variants={rightArmVariants}
          initial={false}
          style={{ transformOrigin: "122px 106px", transformBox: "view-box" }}
        >
          <line x1="122" y1="106" x2="132" y2="164" stroke="#141a2c" strokeWidth="13" strokeLinecap="round" />
          <line x1="128" y1="146" x2="130" y2="156" stroke="#4f7cff" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          <circle cx="134" cy="168" r="6.5" fill="#c7d2e8" stroke="#2a3350" strokeWidth="1.5" />
        </motion.g>

        {/* neck + head */}
        <rect x="94" y="82" width="12" height="13" rx="4" fill="#0c1120" />
        <motion.g
          animate={still}
          variants={headVariants}
          initial={false}
          style={{ transformOrigin: "100px 86px", transformBox: "view-box" }}
        >
          <circle cx="100" cy="59" r="26" fill="#0d101c" stroke="#2a3350" strokeWidth="2" />
          <path
            d="M75 53 Q79 30 100 30 Q121 30 126 53 Q116 42 100 42 Q84 42 75 53 Z"
            fill="#161c2e"
            stroke="#2a3350"
            strokeWidth="1"
          />
          <rect x="81" y="49" width="38" height="17" rx="8.5" fill={`url(#${visorId})`} opacity="0.92" />
          <path d="M86 54 H101" stroke="#e6f0ff" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
          <rect x="108" y="54" width="5" height="3" rx="1.5" fill="#e6f0ff" opacity="0.35" />
          <circle cx="125" cy="63" r="4" fill="#4f7cff" />
          <circle cx="125" cy="63" r="7.5" fill="none" stroke="#4f7cff" strokeWidth="1" opacity="0.35" />
          <path d="M113 77 Q106 81 99 77" stroke="#7aa2ff" strokeWidth="1.2" fill="none" opacity="0.35" />
        </motion.g>
      </motion.g>
    </svg>
  );
}
