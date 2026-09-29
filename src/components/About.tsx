import { Reveal } from "./Reveal";

const focusAreas = [
  "Développement web",
  "Conception logicielle",
  "Bases de données",
  "APIs",
  "IA appliquée",
  "Computer Vision",
  "OCR",
  "Intégration de LLM",
  "Déploiement",
];

export function About() {
  return (
    <section id="apropos" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-px grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <span className="font-mono text-xs text-ink-faint">À propos</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Du problème à la solution déployée
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal delay={0.08}>
            <p className="text-balance text-lg leading-relaxed text-ink-muted md:text-xl">
              Titulaire d&apos;une Licence en Génie Logiciel &amp; Systèmes
              d&apos;Information (ESP — UCAD), j&apos;aborde chaque projet en
              partant du problème réel avant la technologie : comprendre le
              besoin, concevoir une architecture adaptée, développer une
              solution robuste, puis l&apos;intégrer et la déployer.
            </p>
            <p className="mt-5 leading-relaxed text-ink-muted">
              Mon expérience s&apos;étend du développement web classique à
              l&apos;intelligence artificielle appliquée — notamment la
              Computer Vision et l&apos;OCR — que j&apos;intègre uniquement
              lorsqu&apos;elle apporte une réelle valeur au produit, jamais
              pour l&apos;effet.
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-10">
            <ul className="flex flex-wrap gap-2.5">
              {focusAreas.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-border px-3.5 py-1.5 text-sm text-ink-muted"
                >
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
