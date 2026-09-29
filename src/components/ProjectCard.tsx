"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

export function ProjectCard({
  project,
  size = "medium",
}: {
  project: Project;
  size?: "large" | "medium" | "small";
}) {
  const aspect =
    size === "large"
      ? "aspect-[16/10]"
      : size === "medium"
      ? "aspect-[4/3]"
      : "aspect-[5/4]";

  return (
    <Link
      href={`/projets/${project.slug}`}
      className="group block focus-visible:outline-none"
    >
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className={`relative ${aspect} overflow-hidden rounded-2xl border border-border bg-bg-raised transition-colors duration-300 group-hover:border-accent/40`}
      >
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes={
              size === "large"
                ? "(min-width: 768px) 66vw, 100vw"
                : "(min-width: 768px) 32vw, 100vw"
            }
            className={`${
              project.imageFit === "contain" ? "object-contain" : "object-cover"
            } ${
              project.imagePosition === "top"
                ? "object-top"
                : project.imagePosition === "bottom"
                ? "object-bottom"
                : "object-center"
            }`}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

        <motion.span
          variants={{ rest: { opacity: 0, x: -4 }, hover: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.25 }}
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-accent text-white focus-visible:outline-none group-focus-visible:opacity-100"
          aria-hidden
        >
          ↗
        </motion.span>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-mono text-[11px] text-white/60">
            {project.category}
          </p>
          <h3
            className={`mt-1.5 font-display font-semibold text-white text-balance ${
              size === "large" ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
            }`}
          >
            {project.title}
          </h3>
        </div>
      </motion.div>

      {size !== "large" && (
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-muted">
          {project.short}
        </p>
      )}
    </Link>
  );
}
