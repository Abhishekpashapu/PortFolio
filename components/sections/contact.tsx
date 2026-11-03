"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function isPlaceholder(value: string) {
  return value.startsWith("[");
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [opening, setOpening] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Portfolio enquiry from ${form.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    setOpening(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setOpening(false), 2500);
  }

  const socials = [
    { label: "LinkedIn", value: profile.linkedin, icon: Linkedin },
    { label: "GitHub", value: profile.github, icon: Github },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/[0.1] blur-[140px]" />
      </div>

      <div className="container-x">
        <SectionHeading
          eyebrow="07 — Contact"
          title="Have a problem worth"
          accent="engineering?"
          description="I am open to software, embedded, IoT and AI opportunities. Tell me what you are building and where the hard part is."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <Reveal>
              <div className="card p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Email
                </p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="break-all text-sm text-white/80 transition-colors hover:text-accent-soft"
                  >
                    {profile.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-colors hover:border-accent/40 hover:text-white"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
                <span className="mt-1 block text-[10px] text-white/30">
                  {copied ? "Copied to clipboard" : "Click the icon to copy"}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <a
                href={`tel:${profile.phone}`}
                className="card flex items-center justify-between p-5"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Phone
                  </p>
                  <p className="mt-2 text-sm text-white/80">{profile.phone}</p>
                </div>
                <Phone className="h-4 w-4 text-accent-soft" />
              </a>
            </Reveal>

            {socials.map((social, index) =>
              isPlaceholder(social.value) ? (
                <Reveal key={social.label} delay={0.1 + index * 0.05}>
                  <div className="card flex items-center justify-between p-5 opacity-70">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                        {social.label}
                      </p>
                      <p className="mt-2 text-xs text-white/40">
                        Add your profile URL in lib/data.ts
                      </p>
                    </div>
                    <social.icon className="h-4 w-4 text-white/25" />
                  </div>
                </Reveal>
              ) : (
                <Reveal key={social.label} delay={0.1 + index * 0.05}>
                  <a
                    href={social.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card flex items-center justify-between p-5"
                  >
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                        {social.label}
                      </p>
                      <p className="mt-2 text-sm text-white/80">Open profile</p>
                    </div>
                    <social.icon className="h-4 w-4 text-accent-soft" />
                  </a>
                </Reveal>
              )
            )}

            <Reveal delay={0.2}>
              <div className="card flex items-center justify-between gap-3 p-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Resume
                  </p>
                  <p className="mt-2 text-xs text-white/45">
                    Placeholder PDF — replace it before publishing.
                  </p>
                </div>
                <a
                  href={profile.resume}
                  download
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent-soft transition-colors hover:bg-accent hover:text-white"
                  aria-label="Download resume"
                >
                  <Download className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3 text-[11px] text-emerald-200/80">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Usually replies within 1–2 days
                <span className="ml-auto inline-flex items-center gap-1 text-white/35">
                  <MapPin className="h-3 w-3" />
                  {profile.location}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="card relative overflow-hidden p-6 md:p-7"
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative">
                <h3 className="font-display text-lg font-medium text-white">
                  Send a message
                </h3>
                <p className="mt-1 text-xs text-white/40">
                  This opens your email app with the message pre-filled. Nothing
                  is stored on this site.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                      Name
                    </span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-ink/70 px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-accent/50 focus:outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                      Email
                    </span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-ink/70 px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-accent/50 focus:outline-none"
                    />
                  </label>
                </div>

                <label className="mt-3 block">
                  <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                    Subject
                  </span>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    placeholder="Opportunity, collaboration, question…"
                    className="w-full rounded-xl border border-white/10 bg-ink/70 px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-accent/50 focus:outline-none"
                  />
                </label>

                <label className="mt-3 block">
                  <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                    Message
                  </span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me about the project, the role or the problem."
                    className="w-full resize-none rounded-xl border border-white/10 bg-ink/70 px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-accent/50 focus:outline-none"
                  />
                </label>

                <button
                  type="submit"
                  className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-soft hover:text-ink"
                >
                  {opening ? "Opening email app…" : "Send message"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <div className="mt-4 flex items-center justify-between gap-3 text-[10px] text-white/30">
                  <span>Prefer email? {profile.email}</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1 text-accent-soft/80 hover:text-accent-soft"
                  >
                    Direct
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
