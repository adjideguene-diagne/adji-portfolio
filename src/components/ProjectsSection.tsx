import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function ProjectsSection() {
  const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));

  return (
    <section
      id="projets"
      className="scroll-mt-24 border-t border-border py-24 md:py-32"
    >
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs text-ink-faint">Projets</span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Projets sélectionnés
          </h2>
          <p className="mt-4 leading-relaxed text-ink-muted">
            Quelques projets sur lesquels j&apos;ai conçu, développé ou
            expérimenté des solutions concrètes.
          </p>
        </Reveal>

        <div className="mt-16 space-y-6">
          {/* ANPR — grande présentation visuelle */}
          <Reveal>
            <ProjectCard project={bySlug["anpr"]} size="large" />
          </Reveal>

          {/* SénSanté + TranspoBot — deux projets IA complémentaires */}
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <ProjectCard project={bySlug["sensante"]} size="medium" />
            </Reveal>
            <Reveal delay={0.1}>
              <ProjectCard project={bySlug["transpobot"]} size="medium" />
            </Reveal>
          </div>

          {/* EasyQueue + Bibliothèque, puis application scolaire */}
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal delay={0.05}>
              <ProjectCard project={bySlug["easyqueue"]} size="small" />
            </Reveal>
            <Reveal delay={0.1}>
              <ProjectCard project={bySlug["gestion-bibliotheque"]} size="small" />
            </Reveal>
            <Reveal delay={0.15}>
              <ProjectCard project={bySlug["gestion-scolaire"]} size="small" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
