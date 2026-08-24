import type { Metadata } from "next";
import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences } from "@/data/experience";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata({
  title: "Frontend Developer Work",
  description:
    "Portfolio of Tim Cox, a senior frontend developer open to work. React, Next.js, and TypeScript at Intrepid, Ambry, Disney, and Sony Online Entertainment.",
  path: "/work",
  keywords: [
    "frontend developer portfolio",
    "React developer work",
    "Next.js projects",
    "TypeScript frontend engineer",
    "Intrepid Studios",
    "Sony Online Entertainment",
  ],
});

export default function WorkPage() {
  return (
    <div className="site-gutter mx-auto max-w-6xl py-12 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent sm:text-sm sm:tracking-[0.2em]">Work</p>
      <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
        Experience across games, genetics, and entertainment
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:mt-5 sm:text-lg">
        Each company page includes role highlights and a gallery of historical site
        screenshots from the years Tim was there.
      </p>

      <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-12 lg:grid-cols-2">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.slug} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
}
