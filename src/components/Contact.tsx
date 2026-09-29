import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border py-28 md:py-40"
    >
      <div className="container-px">
        <Reveal>
          <h2 className="max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            Construisons quelque chose ensemble.
          </h2>
          <p className="mt-6 max-w-lg text-balance leading-relaxed text-ink-muted">
            Vous avez un projet, une opportunité ou souhaitez simplement
            échanger ? N&apos;hésitez pas à me contacter.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-base font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Me contacter
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>

        <Reveal delay={0.16} className="mt-14 flex flex-wrap gap-x-10 gap-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-ink-muted transition-colors hover:text-accent-ink"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            className="text-sm text-ink-muted transition-colors hover:text-accent-ink"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            className="text-sm text-ink-muted transition-colors hover:text-accent-ink"
          >
            GitHub
          </a>
          {profile.whatsapp ? (
            <a
              href={profile.whatsapp}
              className="text-sm text-ink-muted transition-colors hover:text-accent-ink"
            >
              WhatsApp
            </a>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
