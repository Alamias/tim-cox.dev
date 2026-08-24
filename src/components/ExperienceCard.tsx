"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Experience } from "@/data/experience";

export function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const cover = experience.gallery[experience.gallery.length - 1] ?? experience.gallery[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/work/${experience.slug}`} className="block">
        <div className="gallery-frame overflow-hidden rounded-lg">
          <div className="relative aspect-[16/10] overflow-hidden bg-canvas-deep">
            {cover ? (
              <Image
                src={cover.src}
                alt={`${experience.company} screenshot — ${cover.title}`}
                fill
                className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${experience.accent}33, transparent)`,
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />
            <motion.div
              className="absolute left-0 top-0 h-full w-1 bg-accent origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.05 }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                {experience.period}
              </p>
              <h3 className="font-display mt-1 text-2xl font-semibold text-white sm:text-3xl">
                {experience.company}
              </h3>
              <p className="mt-1 text-sm text-white/85">{experience.role}</p>
            </div>
          </div>
        </div>
        <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
          {experience.summary}
        </p>
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-300 group-hover:gap-3">
          View details
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </Link>
    </motion.article>
  );
}
