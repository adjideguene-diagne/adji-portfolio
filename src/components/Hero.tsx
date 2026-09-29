"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { profile } from "@/lib/data";

const headline = "Adji Deguene Diagne";

export function Hero() {
  const reduce = useReducedMotion();
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (reduce) return;
    // Matches the "IA Appliquée" entrance (delay 0.55s + duration 0.6s):
    // the cursor blinks only until the text has fully appeared, then hides
    // permanently instead of blinking forever.
    const timer = setTimeout(() => setShowCursor(false), 1300);
    return () => clearTimeout(timer);
  }, [reduce]);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.045, delayChildren: 0.15 },
    },
  };
  const letter: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 md:pt-28"
    >
      {/* subtle ambient glow — single, restrained accent moment */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)",
        }}
      />

      {/* faint decorative glyph evoking code — discreet, no motion */}
      <span
        aria-hidden
        className="font-mono pointer-events-none absolute -left-6 top-1/3 hidden select-none text-[13rem] font-medium leading-none text-accent opacity-[0.05] md:block"
      >
        {"</>"}
      </span>

      <div className="container-px grid w-full items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs text-accent-ink"
          >
            {profile.location}
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-5 font-display text-[13vw] font-semibold leading-[0.98] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.2rem]"
            aria-label={headline}
          >
            {headline.split(" ").map((word, wi) => (
              <span key={wi} className="mr-4 inline-block overflow-hidden align-bottom last:mr-0">
                <motion.span variants={letter} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 font-display text-xl text-ink-muted md:text-2xl"
          >
            Développeuse Web &amp; <span className="text-accent">IA Appliquée</span>
            {!reduce && showCursor && (
              <motion.span
                aria-hidden
                className="ml-1 inline-block w-[2px] translate-y-[3px] bg-accent align-middle"
                style={{ height: "0.9em" }}
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                  times: [0, 0.5, 0.5, 1],
                }}
              />
            )}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.68 }}
            className="mt-4 max-w-xl text-balance text-base leading-relaxed text-ink-muted"
          >
            Je conçois, développe et déploie des solutions web modernes en
            intégrant intelligemment{" "}
            <span className="text-accent">l&apos;intelligence artificielle</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/#projets"
              className="group glow-accent inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              Voir mes projets
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm text-ink transition-colors hover:border-accent/50 hover:bg-bg-raised hover:text-accent-ink"
            >
              Me contacter
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[340px] md:max-w-none"
        >
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-bg-raised transition-shadow duration-500 hover:shadow-[0_20px_60px_-20px_var(--accent-glow)]">
            <Image
              src="/images/profile.jpg"
              alt="Adji Deguene Diagne — Développeuse Web & IA Appliquée"
              fill
              priority
              sizes="(min-width: 768px) 34vw, 80vw"
              className="object-cover object-top grayscale-[8%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-bg/25 via-transparent to-transparent"
            />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border border-accent/25"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint md:flex"
      >
        <span className="font-mono text-[11px] tracking-wide">scroll</span>
        <motion.span
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.div>
    </section>
  );
}
