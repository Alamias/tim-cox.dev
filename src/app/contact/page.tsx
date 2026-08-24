import type { Metadata } from "next";
import { profile } from "@/data/experience";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tim Cox about Senior Frontend opportunities.",
};

export default function ContactPage() {
  return (
    <div className="site-gutter mx-auto max-w-3xl py-12 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent sm:text-sm sm:tracking-[0.2em]">Contact</p>
      <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
        Let&apos;s talk about the next frontend challenge
      </h1>
      <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
        I&apos;m interested in Senior Frontend roles (and frontend-leaning full-stack) —
        remote, or hybrid/on-site within commuting distance of Ontario, California.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-line bg-canvas-deep/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-canvas-deep hover:shadow-lg hover:shadow-accent/10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
            LinkedIn
          </p>
          <p className="mt-2 font-display text-xl font-semibold text-ink">Connect</p>
          <p className="mt-1 text-sm text-ink-muted">Best place for roles and intros</p>
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-xl border border-line bg-canvas-deep/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-canvas-deep hover:shadow-lg hover:shadow-accent/10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
            Email
          </p>
          <p className="mt-2 font-display text-xl font-semibold text-ink break-all">
            {profile.email}
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            Prefer LinkedIn if you&apos;re reaching out about a role
          </p>
        </a>
        <a
          href="/resume"
          className="rounded-xl border border-line bg-canvas-deep/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-canvas-deep hover:shadow-lg hover:shadow-accent/10 sm:col-span-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
            Resume
          </p>
          <p className="mt-2 font-display text-xl font-semibold text-ink">
            View &amp; download
          </p>
          <p className="mt-1 text-sm text-ink-muted">PDF and DOCX available</p>
        </a>
      </div>
    </div>
  );
}
