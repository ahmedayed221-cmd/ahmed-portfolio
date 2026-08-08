import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { BlogCard } from "@/components/sections/BlogCard";
import { InstagramCallout } from "@/components/sections/InstagramCallout";
import { getAllProjects, getAllPosts } from "@/lib/content";

export default function Home() {
  const featuredProject = getAllProjects()[0];
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />

      <Container className="py-16">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted">Featured project</h2>
          <Link href="/projects" className="text-sm text-muted hover:text-foreground">
            All projects →
          </Link>
        </div>
        {featuredProject && <ProjectCard project={featuredProject} />}
      </Container>

      <Container className="py-16 border-t border-border">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted">Latest writing</h2>
          <Link href="/blog" className="text-sm text-muted hover:text-foreground">
            All posts →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>

      <Container className="py-16 border-t border-border">
        <InstagramCallout />
      </Container>
    </>
  );
}
