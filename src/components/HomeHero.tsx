"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { profile } from "@/data/experience";

const companies = [
  "Intrepid Studios",
  "Ambry Genetics",
  "Disney",
  "Sony Online Entertainment",
  "NetBrains",
];

const nameWords = ["Tim", "Cox"];

export function HomeHero() {
  return (
    <section className="noise relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute -left-16 top-16 h-64 w-64 rounded-[2rem] border border-accent/20 bg-accent/5"
          animate={{ y: [0, 18, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <motion.div
          className="absolute bottom-10 right-8 h-72 w-72 rounded-full border border-sky-400/20 bg-sky-400/5"
          animate={{ y: [0, -22, 0], x: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(rgba(238,241,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(238,241,246,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 75% 65% at 40% 35%, black, transparent)",
          }}
        />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-accent"
        >
          {profile.title}
        </motion.p>

        <h1 className="font-display max-w-4xl text-[clamp(3.25rem,11vw,7rem)] font-semibold leading-[0.9] tracking-[-0.03em] text-ink">
          {nameWords.map((word, i) => (
            <motion.span
              key={word}
              className="mr-[0.22em] inline-block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="mt-4 h-[3px] origin-left rounded-full bg-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: "min(12rem, 40%)" }}
          aria-hidden
        />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.48 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            href="/work"
            className="btn-primary inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-canvas transition hover:bg-accent-deep"
          >
            View work
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center justify-center rounded-md border border-line bg-canvas-deep/80 px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-canvas-deep"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-line bg-canvas-deep/80 px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-canvas-deep"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>

      <div className="border-y border-line bg-canvas-deep/60 py-4 overflow-hidden" aria-hidden="true">
        <div className="marquee gap-10 text-sm font-medium text-ink-faint">
          {[...companies, ...companies].map((name, i) => (
            <span key={`${name}-${i}`} className="inline-flex items-center gap-10">
              <span>{name}</span>
              <span className="text-accent/50" aria-hidden>
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
