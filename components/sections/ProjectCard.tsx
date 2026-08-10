import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:bg-surface-hover hover:shadow-[0_16px_40px_-24px_rgba(124,108,246,0.5)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <Link href={`/projects/${project.slug}`} className="text-lg font-semibold text-foreground">
              {project.title}
            </Link>
            <span className="font-mono text-xs text-accent">{project.status}</span>
          </div>
          <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        </div>
        <span className="shrink-0 font-mono text-xs text-muted">{project.year}</span>
      </div>

      {project.highlights.length > 0 && (
        <ul className="mt-5 grid gap-x-6 gap-y-1.5 text-sm text-muted sm:grid-cols-2">
          {project.highlights.slice(0, 4).map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <span className="mt-0.5 text-accent">✓</span>
              {highlight}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-5 text-sm">
        <Link href={`/projects/${project.slug}`} className="text-foreground underline decoration-accent underline-offset-4">
          Read the case study
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            Visit live site ↗
          </a>
        )}
      </div>
    </div>
  );
}
