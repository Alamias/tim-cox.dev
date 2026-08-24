"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences, profile } from "@/data/experience";

export function HomeSections() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Work
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Places that shaped the craft
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/work"
              className="text-sm font-semibold text-accent transition hover:text-accent-deep"
            >
              Company pages →
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.slug} experience={exp} index={index} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-canvas-deep/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Frontend architecture for products people actually use
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
              From Station.com-era MMO platforms to modern React/Next.js stacks, I focus on
              performance, shared UI systems, and shipping reliably with product and design
              partners.
            </p>
          </motion.div>
          <ul className="grid grid-cols-2 gap-3">
            {profile.skills.slice(0, 8).map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -2, borderColor: "rgba(91,140,255,0.45)" }}
                className="rounded-md border border-line bg-canvas/90 px-4 py-3 text-sm font-medium text-ink"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-accent/25 bg-gradient-to-br from-accent to-accent-deep px-8 py-12 text-white sm:px-12"
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Looking for the next build
          </h2>
          <p className="mt-3 max-w-xl text-white/85">
            Open to Senior Frontend and frontend-focused full-stack roles—remote or hybrid
            within reach of Ontario, California.
          </p>
          <Link
            href="/contact"
            className="btn-primary mt-8 inline-flex rounded-md bg-canvas px-5 py-3 text-sm font-semibold text-ink transition hover:bg-canvas-deep"
          >
            Start a conversation
          </Link>
        </motion.div>
      </section>
    </>
  );
}
