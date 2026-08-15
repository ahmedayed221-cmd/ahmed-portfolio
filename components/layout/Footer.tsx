import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.name}.
        </p>
        <div className="flex items-center gap-5 text-sm text-muted">
          <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-foreground">
            Email
          </a>
          <a
            href={`https://instagram.com/${siteConfig.instagramHandle}`}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Instagram
          </a>
        </div>
      </Container>
    </footer>
  );
}
