"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/data";

const links = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#apropos", label: "À propos" },
  { href: "/#competences", label: "Compétences" },
  { href: "/#projets", label: "Projets" },
  { href: "/#experience", label: "Expérience" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between md:h-20">
        <Link
          href="/#accueil"
          className="font-display text-sm font-semibold tracking-tight text-ink"
        >
          A. Deguene Diagne
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-muted transition-colors hover:text-accent-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          {profile.cvUrl ? (
            <a
              href={profile.cvUrl}
              className="rounded-full border border-border-strong px-4 py-2 text-sm text-ink transition-colors hover:bg-bg-raised"
            >
              Mon CV
            </a>
          ) : null}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-ink"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-bg md:hidden"
          >
            <div className="container-px flex flex-col gap-1 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base text-ink-muted transition-colors hover:bg-bg-raised hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
              {profile.cvUrl ? (
                <a
                  href={profile.cvUrl}
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full border border-border-strong px-4 py-3 text-center text-sm text-ink"
                >
                  Mon CV
                </a>
              ) : null}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
