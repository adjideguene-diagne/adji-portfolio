import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { ProjectPager } from "@/components/ProjectPager";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Adji Deguene Diagne`,
    description: project.short,
    openGraph: { title: project.title, description: project.short },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="container-px pt-28 pb-10 md:pt-36">
        <Link
          href="/#projets"
          className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={14} />
          Tous les projets
        </Link>

        <Reveal className="mt-8 max-w-3xl">
          <p className="font-mono text-xs text-accent-ink">
            {project.category}
          </p>
          <h1 className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-xl text-balance leading-relaxed text-ink-muted">
            {project.short}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm text-ink transition-colors hover:bg-bg-raised"
            >
              <Code2 size={15} />
              Voir le code
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-ink-muted">
              Découvrir le projet
            </span>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white"
            >
              Démo
              <ArrowUpRight size={15} />
            </a>
          ) : null}
        </Reveal>
      </header>

      <Reveal className="container-px">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-bg-raised">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="100vw"
            className={`${
              project.imageFit === "contain" ? "object-contain" : "object-cover"
            } ${
              project.imagePosition === "top"
                ? "object-top"
                : project.imagePosition === "bottom"
                ? "object-bottom"
                : "object-center"
            }`}
            priority
          />
        </div>
      </Reveal>

      <div className="container-px mt-20 grid gap-16 pb-20 md:grid-cols-12 md:gap-8">
        <div className="space-y-14 md:col-span-7">
          <Reveal>
            <h2 className="font-mono text-xs text-ink-faint">Problème</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-ink">
              {project.problem}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-mono text-xs text-ink-faint">Solution</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-ink">
              {project.solution}
            </p>
          </Reveal>

          {project.architecture ? (
            <Reveal>
              <h2 className="font-mono text-xs text-ink-faint">Architecture</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-ink">
                {project.architecture}
              </p>
            </Reveal>
          ) : null}

          {project.pipeline ? (
            <Reveal>
              <h2 className="font-mono text-xs text-ink-faint">Pipeline</h2>
              <ol className="mt-4 space-y-3">
                {project.pipeline.map((step, i) => (
                  <li key={step} className="flex gap-4 text-ink-muted">
                    <span className="font-mono text-xs text-accent-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          ) : null}

          {project.features ? (
            <Reveal>
              <h2 className="font-mono text-xs text-ink-faint">
                Fonctionnalités
              </h2>
              <ul className="mt-4 space-y-2.5">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="border-t border-border pt-2.5 leading-relaxed text-ink-muted first:border-t-0 first:pt-0"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          {project.results ? (
            <Reveal>
              <h2 className="font-mono text-xs text-ink-faint">Résultats</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-ink">
                {project.results}
              </p>
            </Reveal>
          ) : null}
        </div>

        <aside className="space-y-10 md:col-span-4 md:col-start-9">
          <Reveal>
            <h2 className="font-mono text-xs text-ink-faint">Mon rôle</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              {project.role}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="font-mono text-xs text-ink-faint">Technologies</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border px-3 py-1 text-xs text-ink-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </div>

      <ProjectPager prev={prev} next={next} />
    </article>
  );
}
