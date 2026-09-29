import Link from "next/link";
import type { Project } from "@/lib/data";

export function ProjectPager({
  prev,
  next,
}: {
  prev: Project;
  next: Project;
}) {
  return (
    <div className="grid border-t border-border sm:grid-cols-2">
      <Link
        href={`/projets/${prev.slug}`}
        className="group border-b border-border px-6 py-10 transition-colors hover:bg-bg-raised sm:border-b-0 sm:border-r"
      >
        <span className="font-mono text-xs text-ink-faint">
          ← Projet précédent
        </span>
        <p className="mt-2 font-display text-lg text-ink">{prev.title}</p>
      </Link>
      <Link
        href={`/projets/${next.slug}`}
        className="group px-6 py-10 text-right transition-colors hover:bg-bg-raised"
      >
        <span className="font-mono text-xs text-ink-faint">
          Projet suivant →
        </span>
        <p className="mt-2 font-display text-lg text-ink">{next.title}</p>
      </Link>
    </div>
  );
}
