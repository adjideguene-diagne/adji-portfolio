import { skills } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section
      id="competences"
      className="scroll-mt-24 border-t border-border py-24 md:py-32"
    >
      <div className="container-px">
        <Reveal>
          <span className="font-mono text-xs text-ink-faint">Compétences</span>
          <h2 className="mt-3 max-w-xl text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Une palette d&apos;outils au service de solutions concrètes
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <h3 className="font-display text-sm font-medium text-ink">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="rounded-full border border-border bg-bg-raised px-3 py-1.5 text-sm text-ink-muted transition-colors duration-200 hover:border-accent/40 hover:bg-accent-soft hover:text-accent-ink"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
