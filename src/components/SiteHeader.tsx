'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from 'framer-motion';
import { useEffect, useId, useState } from 'react';
import clsx from 'clsx';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/resume', label: 'Resume' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setCompact(y > 24);
  });

  useEffect(() => {
    setTimeout(() => {
      setMenuOpen(false);
    }, 0);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <motion.header
      role='banner'
      className={clsx(
        'relative sticky top-0 z-50 overflow-visible border-b backdrop-blur-md transition-colors',
        compact || menuOpen ?
          'border-line bg-canvas/90'
        : 'border-transparent bg-canvas/70',
      )}
      animate={{ height: compact && !menuOpen ? 56 : 64 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className='site-gutter mx-auto flex h-full max-w-6xl items-center justify-between'>
        <Link
          href='/'
          className='font-display text-lg font-semibold tracking-tight text-ink transition hover:text-accent sm:text-xl'
          onClick={() => setMenuOpen(false)}
        >
          Tim Cox
        </Link>

        <nav
          className='hidden items-center gap-1 sm:gap-2 md:flex'
          aria-label='Primary'
        >
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'relative rounded-md px-3 py-2 text-sm font-medium transition',
                  active ? 'text-ink' : 'text-ink-muted hover:text-ink',
                )}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId='nav-underline'
                    className='absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-accent'
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type='button'
          className='relative z-[70] flex h-11 w-11 items-center justify-center rounded-md text-ink md:hidden'
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            aria-hidden
            className='flex h-4 w-5 flex-col justify-between'
          >
            <span
              className={clsx(
                'block h-[2px] w-full origin-center rounded-full bg-current transition duration-200',
                menuOpen && 'translate-y-[7px] rotate-45',
              )}
            />
            <span
              className={clsx(
                'block h-[2px] w-full rounded-full bg-current transition duration-200',
                menuOpen && 'opacity-0',
              )}
            />
            <span
              className={clsx(
                'block h-[2px] w-full origin-center rounded-full bg-current transition duration-200',
                menuOpen && '-translate-y-[7px] -rotate-45',
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type='button'
              aria-label='Close menu'
              className='fixed inset-0 z-[55] bg-canvas/70 md:hidden'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              id={menuId}
              className='absolute inset-x-0 top-full z-[60] border-b border-line bg-canvas/95 backdrop-blur-md md:hidden'
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <nav
                aria-label='Mobile'
                className='site-gutter mx-auto flex max-w-6xl flex-col py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]'
              >
                {links.map((link) => {
                  const active =
                    pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={clsx(
                        'rounded-md px-2 py-3 text-base font-medium',
                        active ? 'text-accent' : 'text-ink-muted',
                      )}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
