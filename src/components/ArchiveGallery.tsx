"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryImage } from "@/data/types";

export function ArchiveGallery({
  images,
  company,
}: {
  images: GalleryImage[];
  company: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descId = useId();
  const touchStartX = useRef<number | null>(null);

  const active = activeIndex === null ? null : images[activeIndex];

  const close = useCallback(() => setActiveIndex(null), []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => {
      if (i === null) return i;
      return (i - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => {
      if (i === null) return i;
      return (i + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => closeRef.current?.focus(), 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [activeIndex, close, goNext, goPrev]);

  if (!images.length) {
    return (
      <p className="text-sm text-ink-muted">
        Screenshots for this role are still being collected.
      </p>
    );
  }

  return (
    <>
      <ul className="grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <li key={image.id}>
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12px" }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.4) }}
              whileHover={{ y: -4 }}
              onClick={() => setActiveIndex(index)}
              className="gallery-frame group w-full min-h-11 overflow-hidden rounded-lg text-left"
              aria-label={`Open screenshot: ${image.title}, ${image.year}`}
            >
              <div className="relative aspect-[16/10] bg-canvas-deep">
                <Image
                  src={image.src}
                  alt={`${company} website screenshot: ${image.title}`}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-accent/0 transition duration-300 group-hover:bg-accent/10" />
              </div>
              <div className="border-t border-line bg-canvas-deep/90 px-4 py-3">
                <p className="text-sm font-semibold text-ink">{image.title}</p>
                <p className="mt-0.5 text-xs text-ink-faint">{image.year}</p>
              </div>
            </motion.button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {active && activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="presentation"
          >
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descId}
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-[100dvh] w-full max-w-5xl flex-col overflow-hidden rounded-none border-0 border-line bg-canvas-deep shadow-2xl sm:max-h-[90vh] sm:rounded-lg sm:border"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => {
                touchStartX.current = e.changedTouches[0]?.clientX ?? null;
              }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
                touchStartX.current = null;
                if (dx > 50) goPrev();
                else if (dx < -50) goNext();
              }}
            >
              <div className="relative h-[min(58svh,24rem)] bg-canvas sm:h-auto sm:aspect-[16/10] sm:max-h-[70vh]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={active.src}
                      alt={`${company} website screenshot: ${active.title}`}
                      fill
                      className="object-contain object-top"
                      sizes="100vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goPrev}
                      className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-md border border-line bg-canvas/90 text-ink transition hover:border-accent hover:bg-accent hover:text-white sm:left-3 sm:h-11 sm:w-11"
                      aria-label="Previous screenshot"
                    >
                      <span aria-hidden className="text-xl leading-none">
                        ←
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-md border border-line bg-canvas/90 text-ink transition hover:border-accent hover:bg-accent hover:text-white sm:right-3 sm:h-11 sm:w-11"
                      aria-label="Next screenshot"
                    >
                      <span aria-hidden className="text-xl leading-none">
                        →
                      </span>
                    </button>
                  </>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-5">
                <div className="min-w-0 flex-1">
                  <p id={titleId} className="font-semibold text-ink">
                    {active.title}
                  </p>
                  <p id={descId} className="text-sm text-ink-muted">
                    {active.year}
                    {images.length > 1
                      ? ` · ${activeIndex + 1} of ${images.length}`
                      : ""}
                    <span className="sr-only">
                      . Swipe or use left and right arrow keys to navigate. Press
                      Escape to close.
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {images.length > 1 && (
                    <p className="hidden text-xs text-ink-faint sm:block" aria-hidden>
                      ← → to browse
                    </p>
                  )}
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={close}
                    className="min-h-11 rounded-md bg-ink px-4 py-2 text-sm font-medium text-canvas transition hover:bg-accent hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
