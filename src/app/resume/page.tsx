import type { Metadata } from "next";
import Link from "next/link";
import { resume, resumeFiles } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume for Tim Cox — Senior Frontend Engineer. Download PDF or DOCX.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Resume
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {resume.name}
      </h1>
      <p className="mt-2 text-lg text-ink-muted">{resume.title}</p>
      <p className="mt-3 text-sm text-ink-faint">
        {resume.location}
        {" · "}
        <a
          href={`mailto:${resume.email}`}
          className="text-accent hover:text-accent-deep"
        >
          {resume.email}
        </a>
        {" · "}
        <a
          href={resume.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-deep"
        >
          {resume.linkedinLabel}
        </a>
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={resumeFiles.pdf}
          download="Tim-Cox-Resume.pdf"
          className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas transition hover:bg-accent-deep"
        >
          Download PDF
        </a>
        <a
          href={resumeFiles.docx}
          download="Tim-Cox-Resume.docx"
          className="inline-flex items-center justify-center rounded-md border border-line bg-canvas-deep/80 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-accent/40 hover:bg-canvas-deep"
        >
          Download DOCX
        </a>
        <a
          href={resumeFiles.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-line px-5 py-2.5 text-sm font-semibold text-ink-muted transition hover:text-ink"
        >
          Open PDF
        </a>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-xl font-semibold text-ink">
          Professional summary
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          {resume.summary}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-ink">Skills</h2>
        <div className="mt-5 space-y-5">
          {resume.skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
                {group.label}
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line bg-canvas px-3 py-1.5 text-sm font-medium text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-xl font-semibold text-ink">
          Professional experience
        </h2>
        <div className="mt-8 space-y-12">
          {resume.experience.map((job) => (
            <article key={job.company} className="border-t border-line pt-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {job.company}
                </h3>
                <p className="text-sm text-ink-faint">{job.period}</p>
              </div>
              {("location" in job && job.location) || ("note" in job && job.note) ? (
                <p className="mt-1 text-sm text-ink-faint">
                  {[
                    "location" in job ? job.location : "",
                    "note" in job ? job.note : "",
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              ) : null}
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {job.blurb}
              </p>
              <div className="mt-5 space-y-6">
                {job.roles.map((role) => (
                  <div
                    key={`${job.company}-${role.title}-${"period" in role ? role.period : ""}`}
                  >
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                      <p className="font-semibold text-ink">{role.title}</p>
                      {"period" in role && role.period ? (
                        <p className="text-sm text-ink-faint">{role.period}</p>
                      ) : null}
                    </div>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted">
                      {role.bullets.map((bullet) => (
                        <li key={bullet.slice(0, 48)}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-xl border border-line bg-canvas-deep/70 p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-ink">Education</h2>
        <p className="mt-3 text-ink-muted">
          {resume.education.focus} · {resume.education.school}
        </p>
        <p className="text-sm text-ink-faint">{resume.education.location}</p>
      </section>

      <p className="mt-12 text-ink-muted">
        Prefer case studies?{" "}
        <Link href="/work" className="font-semibold text-accent hover:text-accent-deep">
          Browse the work history
        </Link>
        .
      </p>
    </div>
  );
}
