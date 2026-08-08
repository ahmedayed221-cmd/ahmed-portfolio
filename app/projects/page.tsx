import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Products I've built and shipped by vibe coding with Claude Code.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container className="py-16">
      <h1 className="text-2xl font-semibold text-foreground">Work</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Products I&apos;ve designed, built, and shipped by pairing with Claude Code.
      </p>
      <div className="mt-10 grid gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
