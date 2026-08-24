"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const links = [
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setCompact(y > 24);
  });

  return (
    <motion.header
      role="banner"
      className={clsx(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-colors",
        compact ? "border-line bg-canvas/90" : "border-transparent bg-canvas/70"
      )}
      animate={{ height: compact ? 56 : 72 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-ink transition hover:text-accent"
        >
          Tim Cox
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition",
                  active ? "text-ink" : "text-ink-muted hover:text-ink"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
