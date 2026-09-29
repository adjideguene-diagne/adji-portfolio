import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-px flex flex-col items-start gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-ink">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-ink-muted">{profile.role}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-muted">
          <a href={profile.linkedin} className="hover:text-accent-ink transition-colors">
            LinkedIn
          </a>
          <a href={profile.github} className="hover:text-accent-ink transition-colors">
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-accent-ink transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-ink-faint">© 2026 {profile.name}</p>
      </div>
    </footer>
  );
}
