"use client";

import {
  BrainCircuit,
  CircuitBoard,
  GraduationCap,
  Lock,
  Mail,
  Phone,
  Rocket,
  Router,
  ShieldCheck,
  Terminal,
  Wifi,
} from "lucide-react";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Shared props                                                       */
/* ------------------------------------------------------------------ */

const chip =
  "rounded-full border border-white/10 bg-ink/85 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-white/55 backdrop-blur-md";

function CodeScreen({
  className = "",
  title = "main.ts",
  tone = "accent",
}: {
  className?: string;
  title?: string;
  tone?: "accent" | "emerald" | "violet";
}) {
  const bar =
    tone === "emerald"
      ? "bg-emerald-400/40"
      : tone === "violet"
        ? "bg-violet/45"
        : "bg-accent/45";

  return (
    <div
      className={`absolute rounded-xl border border-white/10 bg-[#060911]/95 p-2.5 shadow-2xl backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
        <span className="ml-auto truncate font-mono text-[7px] uppercase tracking-[0.14em] text-white/30">
          {title}
        </span>
      </div>
      <div className="mt-2 space-y-1.5">
        <div className={`h-1 w-4/5 rounded ${bar}`} />
        <div className="h-1 w-3/5 rounded bg-white/15" />
        <div className={`h-1 w-11/12 rounded ${bar} opacity-70`} />
        <div className="h-1 w-2/5 rounded bg-white/10" />
        <div className="h-1 w-3/4 rounded bg-emerald-400/30" />
      </div>
    </div>
  );
}

function Monitor({ className = "", title = "build.sh" }: { className?: string; title?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="rounded-lg border border-white/15 bg-[#04060c] p-1.5 shadow-[0_0_34px_-10px_rgba(79,124,255,0.65)]">
        <div className="rounded-md bg-gradient-to-br from-[#0b1226] to-[#070a12] p-2">
          <div className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-rose-400/70" />
            <span className="h-1 w-1 rounded-full bg-amber-400/70" />
            <span className="h-1 w-1 rounded-full bg-emerald-400/70" />
            <span className="ml-auto font-mono text-[6px] uppercase tracking-[0.12em] text-white/30">
              {title}
            </span>
          </div>
          <div className="mt-2 space-y-1">
            <div className="h-[3px] w-4/5 animate-pulse rounded bg-accent/50" />
            <div className="h-[3px] w-2/3 rounded bg-white/15" />
            <div className="h-[3px] w-11/12 rounded bg-violet/40" />
            <div className="h-[3px] w-1/2 rounded bg-emerald-400/30" />
          </div>
          <div className="mt-2 flex items-center gap-1">
            <span className="h-[3px] w-[3px] animate-ping rounded-full bg-emerald-400" />
            <span className="font-mono text-[6px] text-emerald-300/60">running</span>
          </div>
        </div>
      </div>
      <div className="mx-auto h-2.5 w-1.5 bg-white/10" />
      <div className="mx-auto h-1 w-10 rounded-full bg-white/10" />
    </div>
  );
}

function Desk({ children }: { children?: ReactNode }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-30 h-[152px]">
      <div className="absolute inset-x-0 top-0 h-2.5 rounded-t-md border-t border-white/20 bg-gradient-to-b from-[#232d48] to-[#111726] shadow-[0_-12px_36px_-18px_rgba(79,124,255,0.6)]" />
      <div className="absolute inset-x-3 top-2.5 bottom-10 rounded-b-md border-x border-b border-white/5 bg-gradient-to-b from-[#0a0e18] to-[#04060c]" />
      <div className="absolute left-1/2 top-[-11px] w-[122px] -translate-x-1/2 rounded-[3px] border border-white/15 bg-[#0a0f1c] p-[3px] shadow-lg">
        <div className="grid grid-cols-10 gap-[1.5px]">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="h-[3px] rounded-[1px] bg-white/15" />
          ))}
        </div>
      </div>
      <div className="absolute right-7 top-[-8px] h-3.5 w-2.5 rounded-full border border-white/20 bg-white/5" />
      <div className="absolute left-6 top-[-22px] h-5 w-9 rounded-sm border border-white/10 bg-white/[0.04]">
        <div className="mx-auto mt-1 h-2 w-4 rounded-sm bg-amber-400/20" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-ink to-transparent" />
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  BACK LAYER (behind the character)                                  */
/* ------------------------------------------------------------------ */

export function SceneBack({ scene }: { scene: string }) {
  switch (scene) {
    case "about":
      return (
        <>
          <div className="absolute left-0 top-[96px] w-[104px] -rotate-6 rounded-xl border border-white/10 bg-white/[0.05] p-2.5 backdrop-blur-md animate-float">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/20 font-display text-[11px] text-accent-soft">
                A
              </span>
              <div>
                <div className="h-1 w-10 rounded bg-white/40" />
                <div className="mt-1 h-1 w-7 rounded bg-white/20" />
              </div>
            </div>
            <div className="mt-2 space-y-1">
              <div className="h-1 w-full rounded bg-white/10" />
              <div className="h-1 w-3/4 rounded bg-white/10" />
            </div>
            <div className="mt-2 flex gap-[2px]">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="h-2 w-[2px] bg-white/25" />
              ))}
            </div>
          </div>
          <span className={`absolute right-1 top-[150px] ${chip}`}>hello</span>
          <div className="absolute bottom-[36px] right-1 h-11 w-10 animate-float" style={{ animationDelay: "1s" }}>
            <div className="mx-auto h-7 w-7 rounded-b-md border border-white/15 bg-white/[0.06]" />
            <div className="mx-auto -mt-8 h-2 w-4 rounded-t-full border border-white/15 border-b-0" />
            <div className="absolute -top-2 left-1/2 h-6 w-4 -translate-x-1/2 rounded-full border border-white/10" />
            <span className="absolute left-1/2 top-[-18px] h-1 w-1 -translate-x-1/2 animate-ping rounded-full bg-white/30" />
          </div>
        </>
      );

    case "journey":
      return (
        <>
          <div className="absolute left-0 top-[100px] space-y-1.5">
            {["LEARN", "BUILD", "SHIP"].map((label, i) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-md border border-white/10 bg-ink/80 px-2 py-1 font-mono text-[8px] tracking-[0.16em] text-white/50 backdrop-blur"
                style={{ marginLeft: i * 8 }}
              >
                <span className="h-1 w-1 rounded-full bg-accent-soft" />
                {label}
              </div>
            ))}
          </div>
          <div className="absolute right-1 top-[100px] h-16 w-16 animate-spin-slow rounded-full border border-dashed border-white/15">
            <span className="absolute left-1/2 top-1/2 h-1 w-8 origin-left -translate-y-1/2 rounded bg-accent/40" />
            <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft" />
          </div>
          <svg className="absolute bottom-[20px] left-0 h-[90px] w-full" viewBox="0 0 280 90" fill="none">
            <path
              d="M4 70 C60 20 110 78 160 44 C204 14 240 40 276 12"
              stroke="#4f7cff"
              strokeOpacity="0.35"
              strokeWidth="1.5"
              strokeDasharray="5 6"
            />
            <circle cx="4" cy="70" r="3" fill="#7aa2ff" />
            <circle cx="276" cy="12" r="3" fill="#8b5cf6" />
          </svg>
        </>
      );

    case "skills":
      return (
        <>
          <Monitor className="left-0 top-[246px] w-[116px]" title="skills.tsx" />
          <CodeScreen className="right-0 top-[104px] w-[104px]" title="notes.md" tone="emerald" />
          <span className={`absolute right-2 top-[210px] ${chip}`}>practice</span>
          <div className="absolute left-2 top-[104px] flex items-center gap-1.5 rounded-md border border-white/10 bg-ink/80 px-2 py-1 font-mono text-[8px] text-white/45">
            <span className="h-1 w-1 animate-ping rounded-full bg-emerald-400" />
            learning mode
          </div>
        </>
      );

    case "projects":
      return (
        <>
          <div className="absolute left-0 top-[104px] w-[116px] rotate-3 rounded-lg border border-white/10 bg-[#070b14]/90 p-2 backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-accent-soft">
                blueprint
              </span>
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
            </div>
            <div className="mt-2 h-14 w-full rounded border border-dashed border-accent/25 bg-[radial-gradient(circle_at_center,rgba(79,124,255,0.16)_1px,transparent_1px)] [background-size:10px_10px]" />
            <div className="mt-2 space-y-1">
              <div className="h-1 w-3/4 rounded bg-white/20" />
              <div className="h-1 w-1/2 rounded bg-white/10" />
            </div>
          </div>
          <Rocket className="absolute right-1 top-[118px] h-7 w-7 rotate-12 text-accent-soft/70" />
          <div className="absolute right-0 bottom-[30px] h-[164px] w-[62px] animate-float">
            <svg viewBox="0 0 70 170" className="h-full w-full" fill="none">
              <path d="M35 10 C52 34 56 64 52 100 H18 C14 64 18 34 35 10 Z" fill="#0d1424" stroke="#33406a" />
              <path d="M35 10 C44 24 49 42 50 60 H20 C21 42 26 24 35 10 Z" fill="#16203a" />
              <circle cx="35" cy="58" r="9" fill="#0a101e" stroke="#7aa2ff" strokeWidth="1.5" />
              <circle cx="35" cy="58" r="4" fill="#4f7cff" opacity="0.7" />
              <path d="M18 92 L4 116 L18 110 Z" fill="#1b2540" stroke="#33406a" />
              <path d="M52 92 L66 116 L52 110 Z" fill="#1b2540" stroke="#33406a" />
              <path d="M25 100 H45 L41 122 H29 Z" fill="#0a0f1c" stroke="#26304a" />
              <path d="M28 122 Q35 158 42 122 Z" fill="url(#rocket-flame)" className="animate-pulse" />
              <defs>
                <linearGradient id="rocket-flame" x1="35" y1="122" x2="35" y2="158" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9ec1ff" />
                  <stop offset="0.5" stopColor="#4f7cff" />
                  <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </>
      );

    case "embedded":
      return (
        <>
          <div className="absolute left-0 top-[100px] w-[104px] rounded-lg border border-white/10 bg-[#04080f]/90 p-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-emerald-300/70">
                oscilloscope
              </span>
              <span className="h-1 w-1 animate-ping rounded-full bg-emerald-400" />
            </div>
            <svg viewBox="0 0 100 40" className="mt-1 h-10 w-full" fill="none">
              <path d="M0 20H10L15 8L22 32L30 14L38 24L46 20H100" stroke="#38d9b0" strokeWidth="1.5" className="animate-dash" strokeDasharray="4 4" />
              <path d="M0 30H100" stroke="#ffffff" strokeOpacity="0.06" />
            </svg>
          </div>
          <div className="absolute right-0 top-[104px] flex flex-col items-end gap-1.5">
            {["C++", "GPIO", "I2C"].map((label) => (
              <span key={label} className={chip}>
                {label}
              </span>
            ))}
          </div>
          <span className="absolute left-2 top-[196px] font-mono text-[8px] tracking-[0.18em] text-emerald-300/40">
            firmware/
          </span>
        </>
      );

    case "iot":
      return (
        <>
          <div className="absolute left-1 top-[98px] h-12 w-12 animate-float rounded-xl border border-cyan-400/30 bg-cyan-400/10">
            <Wifi className="mx-auto mt-3 h-5 w-5 text-cyan-300" />
          </div>
          <div className="absolute right-0 top-[118px] space-y-2">
            {["sensor node", "mqtt://broker", "dashboard"].map((label, i) => (
              <div
                key={label}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-ink/85 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.1em] text-white/50 backdrop-blur"
                style={{ marginRight: i * 6 }}
              >
                <span className="h-1 w-1 animate-pulse rounded-full bg-cyan-300" />
                {label}
              </div>
            ))}
          </div>
          <svg className="absolute left-0 top-[96px] h-[150px] w-full" viewBox="0 0 280 150" fill="none">
            <path d="M52 34 C120 40 150 70 214 44" stroke="#22d3ee" strokeOpacity="0.4" strokeDasharray="4 5" className="animate-dash" />
            <path d="M52 34 C120 52 160 96 228 70" stroke="#22d3ee" strokeOpacity="0.28" strokeDasharray="4 5" />
            <path d="M52 34 C120 66 170 120 232 100" stroke="#22d3ee" strokeOpacity="0.2" strokeDasharray="4 5" />
            <circle cx="52" cy="34" r="3" fill="#22d3ee" />
          </svg>
        </>
      );

    case "software":
      return (
        <>
          <CodeScreen className="left-0 top-[100px] w-[124px]" title="api.ts" />
          <div className="absolute right-0 top-[116px] w-[104px] rounded-lg border border-white/10 bg-[#05080f]/95 p-2 font-mono text-[7px] backdrop-blur">
            <div className="flex items-center gap-1 text-emerald-300/70">
              <Terminal className="h-2.5 w-2.5" />
              terminal
            </div>
            <p className="mt-1.5 text-white/40">$ npm run build</p>
            <p className="text-emerald-300/70">✓ compiled</p>
            <p className="text-white/30">deploying…</p>
            <span className="mt-1 inline-block h-2 w-1 animate-pulse bg-accent-soft/70" />
          </div>
          <div className="absolute right-2 top-[236px] flex items-center gap-1.5 rounded-md border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.14em] text-emerald-300">
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            api healthy
          </div>
          <Monitor className="left-0 top-[250px] w-[112px]" title="dashboard" />
        </>
      );

    case "ai":
      return (
        <>
          <div className="absolute left-2 top-[104px] flex items-center gap-1.5 rounded-md border border-violet-400/25 bg-violet-400/10 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-violet-200/80">
            <BrainCircuit className="h-3 w-3" />
            model: eval
          </div>
          <svg className="absolute inset-x-0 top-[136px] h-[124px] w-full" viewBox="0 0 280 124" fill="none">
            {[0, 1, 2].map((layer) =>
              [0, 1, 2, 3].slice(0, layer === 2 ? 2 : 3).map((node, i, arr) => {
                const x = 54 + layer * 86;
                const y = 62 + (i - (arr.length - 1) / 2) * 30;
                return (
                  <g key={`${layer}-${node}`}>
                    {layer < 2
                      ? [0, 1, 2].slice(0, layer === 0 ? 3 : 2).map((_, j, arr2) => {
                          const nx = 54 + (layer + 1) * 86;
                          const ny = 62 + (j - (arr2.length - 1) / 2) * 30;
                          return (
                            <line
                              key={j}
                              x1={x}
                              y1={y}
                              x2={nx}
                              y2={ny}
                              stroke="#8b5cf6"
                              strokeOpacity="0.22"
                              strokeWidth="1"
                            />
                          );
                        })
                      : null}
                    <circle cx={x} cy={y} r="7" fill="#0b0a16" stroke="#8b5cf6" strokeOpacity="0.5" />
                    <circle cx={x} cy={y} r="2.5" fill="#a78bfa">
                      <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                );
              })
            )}
            <path d="M232 62 H266" stroke="#a78bfa" strokeOpacity="0.5" strokeDasharray="3 4" />
            <circle cx="268" cy="62" r="3" fill="#a78bfa" />
          </svg>
          <span className={`absolute right-1 top-[92px] ${chip}`}>inference</span>
        </>
      );

    case "networking":
      return (
        <>
          <div className="absolute left-0 top-[100px] w-[92px] rounded-lg border border-sky-400/20 bg-sky-400/[0.06] p-2 backdrop-blur">
            <div className="flex items-center justify-between">
              <Router className="h-4 w-4 text-sky-300" />
              <span className="h-1 w-1 animate-ping rounded-full bg-emerald-400" />
            </div>
            <div className="mt-2 flex gap-1">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="h-1 w-1 animate-pulse rounded-full bg-sky-300"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
            <span className="mt-1 block font-mono text-[6px] text-white/35">router-01</span>
          </div>
          <div className="absolute right-0 top-[112px] space-y-2">
            {["192.168.1.10", "10.0.0.24", "172.16.4.8"].map((ip) => (
              <div key={ip} className="flex items-center gap-1.5 rounded border border-white/10 bg-ink/80 px-1.5 py-0.5 font-mono text-[7px] text-white/45">
                <span className="h-1 w-1 rounded-full bg-sky-300" />
                {ip}
              </div>
            ))}
          </div>
          <svg className="absolute left-0 top-[104px] h-[150px] w-full" viewBox="0 0 280 150" fill="none">
            <path d="M92 42 C150 42 160 38 216 38" stroke="#38bdf8" strokeOpacity="0.4" strokeDasharray="4 5" className="animate-dash" />
            <path d="M92 48 C150 60 164 64 222 62" stroke="#38bdf8" strokeOpacity="0.28" strokeDasharray="4 5" />
            <path d="M92 54 C150 78 170 94 228 92" stroke="#38bdf8" strokeOpacity="0.2" strokeDasharray="4 5" />
          </svg>
          <span className={`absolute left-2 top-[196px] ${chip}`}>tcpdump</span>
        </>
      );

    case "cybersecurity":
      return (
        <>
          <div className="absolute right-1 top-[96px] h-[112px] w-[112px] rounded-full border border-rose-400/20">
            <div
              className="absolute inset-0 animate-spin-slow rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(244,63,94,0.4), transparent 26%)",
              }}
            />
            <div className="absolute inset-3 rounded-full border border-rose-400/15" />
            <div className="absolute inset-7 rounded-full border border-rose-400/10" />
            <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.9)]" />
            <span className="absolute left-[30%] top-[34%] h-1 w-1 animate-ping rounded-full bg-rose-300" />
          </div>
          <div className="absolute left-0 top-[100px] flex h-11 w-11 items-center justify-center rounded-xl border border-rose-400/30 bg-rose-400/10">
            <ShieldCheck className="h-5 w-5 text-rose-300" />
          </div>
          <div className="absolute left-0 top-[168px] w-[118px] rounded-lg border border-rose-400/20 bg-[#0a0509]/90 p-2 font-mono text-[7px] backdrop-blur">
            <div className="flex items-center gap-1 text-rose-300/80">
              <Lock className="h-2.5 w-2.5" />
              ids alert
            </div>
            <p className="mt-1 text-rose-300/60">blocked 10.0.0.24</p>
            <p className="text-white/30">rule: deny inbound</p>
          </div>
          <span className={`absolute right-2 top-[222px] ${chip}`}>scope: lab</span>
        </>
      );

    case "education":
      return (
        <>
          <div className="absolute right-0 top-[98px] h-14 w-14 animate-float">
            <GraduationCap className="h-10 w-10 text-accent-soft/70" />
          </div>
          <div className="absolute left-0 top-[108px] space-y-1.5">
            {["signals", "networks", "embedded"].map((label, i) => (
              <div
                key={label}
                className="rounded border border-white/10 bg-ink/80 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-white/45 backdrop-blur"
                style={{ marginLeft: i * 10 }}
              >
                {label}
              </div>
            ))}
          </div>
          <span className={`absolute left-2 top-[214px] ${chip}`}>always learning</span>
        </>
      );

    case "contact":
      return (
        <>
          <div className="absolute right-0 top-[104px] flex h-14 w-16 animate-float items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
            <Mail className="h-6 w-6 text-accent-soft" />
          </div>
          <div className="absolute left-0 top-[136px] flex h-10 w-8 rotate-[-8deg] items-center justify-center rounded-lg border border-white/10 bg-ink/80">
            <Phone className="h-4 w-4 text-white/45" />
            <span className="absolute -right-1 -top-1 h-2 w-2 animate-ping rounded-full bg-emerald-400" />
          </div>
          <span className={`absolute right-1 top-[180px] ${chip}`}>open to work</span>
          <div className="absolute left-2 top-[196px] h-16 w-16 rounded-full border border-accent/15">
            <span className="absolute inset-2 animate-ping rounded-full border border-accent/20" />
          </div>
        </>
      );

    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/*  FRONT LAYER (in front of the character)                            */
/* ------------------------------------------------------------------ */

export function SceneFront({ scene }: { scene: string }) {
  switch (scene) {
    case "skills":
      return (
        <Desk>
          <span className="absolute left-4 top-3 font-mono text-[7px] uppercase tracking-[0.16em] text-white/25">
            practice bench
          </span>
        </Desk>
      );

    case "software":
      return (
        <Desk>
          <span className="absolute right-4 top-3 font-mono text-[7px] uppercase tracking-[0.16em] text-white/25">
            production
          </span>
        </Desk>
      );

    case "embedded":
      return (
        <Desk>
          <div className="absolute right-3 top-[-46px] w-[128px] rotate-[-4deg]">
            <svg viewBox="0 0 128 78" className="h-[70px] w-full" fill="none">
              <rect x="3" y="3" width="122" height="72" rx="5" fill="#06231d" stroke="#1f6f5f" strokeWidth="1.5" />
              <path d="M18 22H52V40H84V22H106" stroke="#38d9b0" strokeOpacity="0.55" strokeWidth="1.2" />
              <path d="M18 56H40V46H74V60H106" stroke="#38d9b0" strokeOpacity="0.35" strokeWidth="1.2" />
              <rect x="50" y="28" width="26" height="20" rx="2" fill="#0a0f18" stroke="#2a7f6c" />
              <circle cx="27" cy="42" r="4" fill="#0a0f18" stroke="#2a7f6c" />
              <circle cx="100" cy="38" r="5" fill="#0a0f18" stroke="#2a7f6c" />
              <circle cx="100" cy="38" r="2" fill="#38d9b0" className="animate-pulse" />
              <circle cx="14" cy="10" r="1.5" fill="#38d9b0" className="animate-pulse" />
              <path d="M58 34H68M58 38H66" stroke="#38d9b0" strokeOpacity="0.5" />
              <rect x="34" y="62" width="60" height="5" rx="2.5" fill="#0a0f18" stroke="#2a7f6c" />
            </svg>
            <span className="absolute -right-1 -top-1 h-2 w-2 animate-ping rounded-full bg-emerald-300" />
          </div>
          <span className="absolute left-4 top-3 font-mono text-[7px] uppercase tracking-[0.16em] text-white/25">
            workbench 01
          </span>
        </Desk>
      );

    case "education":
      return (
        <>
          <div className="absolute bottom-[132px] left-1/2 z-30 w-[156px] -translate-x-1/2">
            <svg viewBox="0 0 160 76" className="h-[76px] w-full drop-shadow-[0_10px_24px_rgba(79,124,255,0.25)]" fill="none">
              <path d="M80 64C61 54 38 53 12 59V22C38 16 61 17 80 27Z" fill="#e7edff" />
              <path d="M80 64C99 54 122 53 148 59V22C122 16 99 17 80 27Z" fill="#f6f8ff" />
              <path d="M80 64V27" stroke="#9aa7c7" strokeWidth="1" />
              <path d="M22 31H64M22 38H58M22 45H62M96 31H138M96 38H132M96 45H136" stroke="#aab6d4" strokeWidth="1.3" />
              <rect x="70" y="60" width="20" height="12" rx="3" fill="#0a0e18" stroke="#33406a" />
            </svg>
          </div>
          <div className="absolute bottom-[26px] left-0 z-30 flex w-[86px] flex-col-reverse gap-[3px]">
            <div className="h-4 w-[62px] rounded-sm border-l-2 border-emerald-400/70 bg-emerald-500/20" />
            <div className="h-4 w-[74px] rounded-sm border-l-2 border-accent/70 bg-accent/20" />
            <div className="h-4 w-[68px] rounded-sm border-l-2 border-violet/70 bg-violet/20" />
            <div className="h-4 w-[80px] rounded-sm border-l-2 border-amber-400/70 bg-amber-500/15" />
          </div>
        </>
      );

    case "cybersecurity":
      return (
        <div className="absolute bottom-[30px] left-1/2 z-30 -translate-x-1/2">
          <svg viewBox="0 0 90 100" className="h-[96px] w-[86px] opacity-30" fill="none">
            <path d="M45 6 L80 20 V48 C80 72 62 86 45 94 C28 86 10 72 10 48 V20 Z" stroke="#fb7185" strokeWidth="2" fill="rgba(244,63,94,0.06)" />
            <path d="M45 14 L72 25 V48 C72 67 58 79 45 86 C32 79 18 67 18 48 V25 Z" stroke="#fb7185" strokeOpacity="0.4" strokeDasharray="3 4" />
          </svg>
        </div>
      );

    default:
      return null;
  }
}
