import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout/Container";
import { Tag } from "@/components/ui/Tag";
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
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold text-foreground">{project.title}</h1>
          <span className="font-mono text-xs text-accent">{project.status}</span>
        </div>
        <p className="mt-2 max-w-xl text-sm text-muted">{project.summary}</p>

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

      <div className="mdx-content">
        <MDXRemote source={project.content} />
      </div>
    </Container>
  );
}
