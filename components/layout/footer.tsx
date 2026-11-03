import Link from "next/link";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-panel/40">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href="/#top"
              className="inline-flex items-center gap-3 font-display text-lg font-semibold tracking-tight text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm">
                A
              </span>
              ABHI
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              {profile.role} building software, embedded systems and intelligent
              connected products. Open to opportunities where hardware and
              software meet.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
              Explore
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-white/55 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-accent-soft" />
                  <span className="break-all">{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  className="inline-flex items-center gap-2 text-white/55 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-accent-soft" />
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js,
            TypeScript, Tailwind CSS and Framer Motion.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/35">
              {profile.domain === "[YOUR DOMAIN]"
                ? "Domain placeholder"
                : profile.domain}
            </span>
            <Link
              href="/#top"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60 transition-colors hover:border-accent/40 hover:text-white"
            >
              Back to top
              <ArrowUp className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
