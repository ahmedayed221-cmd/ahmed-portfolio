import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout/Container";
import { Tag } from "@/components/ui/Tag";
import { BrowserFrame } from "@/components/sections/BrowserFrame";
import { getAllProjects, getProjectBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <Container className="py-16">
      <div className="text-scrim mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{project.title}</h1>
          <span className="font-mono text-xs text-accent-text">{project.status}</span>
        </div>
        <p className="mt-2 max-w-xl text-sm text-muted">{project.summary}</p>

        {project.credibility && (
          <p className="mt-3 flex items-center gap-2 font-mono text-xs text-accent-text">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {project.credibility}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-5 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline decoration-accent underline-offset-4"
            >
              Visit {project.liveUrl.replace(/^https?:\/\//, "")} ↗
            </a>
          )}
          <span className="text-muted">{project.stack.join(" · ")}</span>
        </div>
      </div>

      {project.screenshot && (
        <div className="mb-12">
          <BrowserFrame
            src={project.screenshot.src}
            alt={project.screenshot.alt}
            width={project.screenshot.width}
            height={project.screenshot.height}
            url={project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "") : project.title}
          />
        </div>
      )}

      {project.highlights.length > 0 && (
        <div className="mb-12 rounded-lg border border-border bg-surface p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">What&apos;s built in</p>
          <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-sm text-foreground">
                <span className="mt-0.5 text-accent-text">✓</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="text-scrim mdx-content">
        <MDXRemote source={project.content} />
      </div>
    </Container>
  );
}
