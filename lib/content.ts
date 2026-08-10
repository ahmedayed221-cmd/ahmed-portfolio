import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");
const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  stack: string[];
  liveUrl?: string;
  year: string;
  status: string;
  featured: boolean;
  highlights: string[];
  credibility?: string;
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  content: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: string;
  content: string;
};

function readMdxFiles(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { slug, data, content };
    });
}

export function getAllProjects(): Project[] {
  return readMdxFiles(PROJECTS_DIR)
    .map(({ slug, data, content }) => ({
      slug,
      title: data.title,
      summary: data.summary,
      tags: data.tags ?? [],
      stack: data.stack ?? [],
      liveUrl: data.liveUrl,
      year: data.year,
      status: data.status,
      featured: Boolean(data.featured),
      highlights: data.highlights ?? [],
      credibility: data.credibility,
      screenshot: data.screenshot,
      content,
    }))
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return b.year.localeCompare(a.year);
    });
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getAllPosts(): Post[] {
  return readMdxFiles(BLOG_DIR)
    .map(({ slug, data, content }) => ({
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      tags: data.tags ?? [],
      readingTime: readingTime(content).text,
      content,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
