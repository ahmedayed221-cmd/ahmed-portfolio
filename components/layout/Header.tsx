import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2 font-mono text-sm text-foreground">
          <span>
            {siteConfig.shortName}
            <span className="text-accent">.</span>
          </span>
          <span className="hidden rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-widest text-muted transition-colors duration-200 group-hover:border-accent group-hover:text-accent sm:inline">
            Vibe Coding
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`https://instagram.com/${siteConfig.instagramHandle}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-muted transition-all duration-200 hover:scale-110 hover:text-foreground"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </nav>
      </Container>
    </header>
  );
}
