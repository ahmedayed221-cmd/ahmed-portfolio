import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Hero } from "@/components/sections/Hero";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ComingSoonCard } from "@/components/sections/ComingSoonCard";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
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
        <Reveal>
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="text-sm font-mono uppercase tracking-wider text-muted">Featured project</h2>
            <Link href="/projects" className="text-sm text-muted transition-colors hover:text-foreground">
              All projects →
            </Link>
          </div>
        </Reveal>
        <Reveal delay={100}>{featuredProject && <ProjectCard project={featuredProject} />}</Reveal>
        <Reveal delay={200} className="mt-4">
          <ComingSoonCard compact />
        </Reveal>
      </Container>

      <Container className="border-t border-border py-16">
        <Reveal>
          <h2 className="mb-6 text-sm font-mono uppercase tracking-wider text-muted">Stack & tools</h2>
        </Reveal>
        <Reveal delay={100}>
          <SkillsGrid />
        </Reveal>
      </Container>

      <Container className="border-t border-border py-16">
        <Reveal>
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="text-sm font-mono uppercase tracking-wider text-muted">Latest writing</h2>
            <Link href="/blog" className="text-sm text-muted transition-colors hover:text-foreground">
              All posts →
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {latestPosts.map((post, i) => (
            <Reveal key={post.slug} delay={100 + i * 80}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="border-t border-border py-16">
        <Reveal>
          <InstagramCallout />
        </Reveal>
      </Container>
    </>
  );
}
