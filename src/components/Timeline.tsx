import { timeline } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Timeline() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border py-24 md:py-32"
    >
      <div className="container-px">
        <Reveal className="max-w-xl">
          <span className="font-mono text-xs text-ink-faint">Expérience</span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Parcours &amp; stages
          </h2>
        </Reveal>

        <div className="mt-16 space-y-0">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="grid gap-2 border-t border-border py-8 md:grid-cols-[140px_1fr] md:gap-8 last:border-b">
                <span className="font-mono text-sm text-ink-faint">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">{item.org}</p>
                  <ul className="mt-4 space-y-2">
                    {item.points.map((p) => (
                      <li
                        key={p}
                        className="max-w-2xl text-sm leading-relaxed text-ink-muted"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
