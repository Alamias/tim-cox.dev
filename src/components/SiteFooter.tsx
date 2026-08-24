"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/experience";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-line bg-canvas-deep/40 sm:mt-24">
      <div className="site-gutter mx-auto flex max-w-6xl flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-xl font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-muted">
            {profile.title} · {profile.location}
          </p>
        </motion.div>
        <div className="flex flex-wrap gap-4 text-sm">
          {[
            { href: "/work", label: "Work" },
            { href: "/resume", label: "Resume" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: profile.linkedin, label: "LinkedIn", external: true },
          ].map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted transition hover:text-accent"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-ink-muted transition hover:text-accent"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
      <div className="border-t border-line/70 py-4 text-center text-xs text-ink-faint">
        © {year} Tim Cox.
      </div>
    </footer>
  );
}
