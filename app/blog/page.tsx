import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { BlogCard } from "@/components/sections/BlogCard";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on vibe coding, building in public, and what I'm shipping.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container className="py-16">
      <h1 className="text-2xl font-semibold text-foreground">Blog</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        My vibe coding journey — process notes, tips, and what I&apos;m building.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}
