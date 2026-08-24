import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveGallery } from "@/components/ArchiveGallery";
import {
  experiences,
  getAdjacent,
  getExperience,
} from "@/data/experience";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return experiences.map((exp) => ({ slug: exp.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) return { title: "Work" };
  return {
    title: exp.company,
    description: exp.summary,
  };
}

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) notFound();

  const { prev, next } = getAdjacent(slug);
  const hero = exp.gallery.find((g) => g.year >= exp.start) ?? exp.gallery[0];

  return (
    <article>
      <header className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 -z-10">
          {hero ? (
            <>
              <Image
                src={hero.src}
                alt=""
                fill
                priority
                className="object-cover object-top opacity-40 blur-[2px] scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-canvas/70 via-canvas/85 to-canvas" />
            </>
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at top, ${exp.accent}22, transparent 60%)`,
              }}
            />
          )}
        </div>

        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Link
            href="/work"
            className="text-sm font-semibold text-accent transition hover:text-accent-deep"
          >
            ← All work
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {exp.period}
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            {exp.company}
          </h1>
          <p className="mt-3 text-lg text-ink-muted sm:text-xl">
            {exp.role}
            <span className="text-ink-faint"> · {exp.location}</span>
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {exp.summary}
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_280px]">
        <div>
          <h2 className="font-display text-2xl font-semibold text-ink">Highlights</h2>
          <ul className="mt-6 space-y-4">
            {exp.highlights.map((item) => (
              <li
                key={item}
                className="relative border-l-2 border-accent/40 pl-5 text-ink-muted leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>

          {exp.roles && exp.roles.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">Roles</h2>
              <ul className="mt-4 space-y-2 text-ink-muted">
                {exp.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
          )}

          {exp.titles && exp.titles.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">Titles & platforms</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.titles.map((title) => (
                  <span
                    key={title}
                    className="rounded-md border border-line bg-canvas-deep/80 px-3 py-1.5 text-sm font-medium text-ink"
                  >
                    {title}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="h-fit rounded-xl border border-line bg-canvas-deep/80 p-5 lg:sticky lg:top-24">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
            Stack
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {exp.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-canvas px-2.5 py-1 text-xs font-medium text-ink"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-ink-faint">
            Gallery images are historical website screenshots from Tim&apos;s time at{" "}
            {exp.shortName} ({exp.start}–{exp.end}).
          </p>
        </aside>
      </div>

      <section className="border-t border-line bg-canvas-deep/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Screenshot gallery
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-ink">
            Sites from the {exp.shortName} years
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Marketing and player-facing pages as they looked while Tim worked on the web
            platforms behind them.
          </p>
          {exp.gallerySections && exp.gallerySections.length > 0 ? (
            <div className="mt-12 space-y-16">
              {exp.gallerySections.map((section) => (
                <div key={section.id} id={`gallery-${section.id}`}>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {section.title}
                  </h3>
                  <div className="mt-6">
                    <ArchiveGallery images={section.images} company={exp.company} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10">
              <ArchiveGallery images={exp.gallery} company={exp.company} />
            </div>
          )}
        </div>
      </section>

      <nav className="mx-auto flex max-w-6xl justify-between gap-4 px-5 py-12 sm:px-8">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="group max-w-[45%]">
            <span className="text-xs uppercase tracking-wider text-ink-faint">Previous</span>
            <span className="mt-1 block font-display text-lg font-semibold text-ink transition group-hover:text-accent">
              ← {prev.company}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/work/${next.slug}`} className="group max-w-[45%] text-right">
            <span className="text-xs uppercase tracking-wider text-ink-faint">Next</span>
            <span className="mt-1 block font-display text-lg font-semibold text-ink transition group-hover:text-accent">
              {next.company} →
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
