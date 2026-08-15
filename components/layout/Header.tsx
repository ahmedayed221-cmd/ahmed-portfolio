import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center">
        <Link href="/" className="group flex items-center gap-2 font-mono text-sm text-foreground">
          <span>
            {siteConfig.shortName}
            <span className="text-accent-text">.</span>
          </span>
          <span className="hidden rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-widest text-muted transition-colors duration-200 group-hover:border-accent group-hover:text-accent-text sm:inline">
            Vibe Coding
          </span>
        </Link>
      </Container>
    </header>
  );
}
