import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/experience";

export const metadata: Metadata = {
  title: "About",
  description: "About Tim Cox — Senior Frontend Engineer based in Ontario, California.",
};

export default function AboutPage() {
  return (
    <div className="site-gutter mx-auto max-w-3xl py-12 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent sm:text-sm sm:tracking-[0.2em]">About</p>
      <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
        Building interfaces that scale with the people who use them
      </h1>

      <div className="mt-10 space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-14 rounded-xl border border-line bg-canvas-deep/70 p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-ink">Education</h2>
        <p className="mt-3 text-ink-muted">
          {profile.education.focus} · {profile.education.school}
        </p>
        <p className="text-sm text-ink-faint">{profile.education.years}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-ink">Skills</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-line bg-canvas px-3 py-1.5 text-sm font-medium text-ink"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-12 text-ink-muted">
        Prefer the timeline?{" "}
        <Link href="/work" className="font-semibold text-accent hover:text-accent-deep">
          Browse the work history
        </Link>
        {" · "}
        <Link href="/resume" className="font-semibold text-accent hover:text-accent-deep">
          Download the resume
        </Link>
        .
      </p>
    </div>
  );
}
