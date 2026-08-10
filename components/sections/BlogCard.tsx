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
      className="group block rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:bg-surface-hover hover:shadow-[0_16px_40px_-24px_rgba(124,108,246,0.5)]"
    >
      <div className="mb-2 flex items-center gap-3 font-mono text-xs text-muted">
        <span>{formatDate(post.date)}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
    </Link>
  );
}
