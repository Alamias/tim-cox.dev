import type { Metadata } from "next";
import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Career highlights across Intrepid Studios, Ambry Genetics, NetBrains, Disney, and Sony Online Entertainment—with site screenshot galleries.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Work</p>
      <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Experience across games, genetics, and entertainment
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
        Each company page includes role highlights and a gallery of historical site
        screenshots from the years Tim was there.
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.slug} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
}
