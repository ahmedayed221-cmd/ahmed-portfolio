import Link from "next/link";
import type { Post } from "@/lib/content";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-lg border border-border bg-surface p-6 transition-colors hover:bg-surface-hover"
    >
      <div className="mb-2 flex items-center gap-3 font-mono text-xs text-muted">
        <span>{formatDate(post.date)}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
    </Link>
  );
}
