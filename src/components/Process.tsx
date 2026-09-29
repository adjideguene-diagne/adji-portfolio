import { process } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-px">
        <Reveal className="max-w-xl">
          <span className="font-mono text-xs text-ink-faint">Méthode</span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Ma façon de construire une solution
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-border border-t border-border">
          {process.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06}>
              <div className="grid items-baseline gap-3 py-7 md:grid-cols-[100px_1fr_1.4fr] md:gap-8">
                <span className="font-mono text-sm text-accent-ink">
                  {step.n}
                </span>
                <h3 className="font-display text-xl font-medium text-ink">
                  {step.title}
                </h3>
                <p className="text-ink-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
