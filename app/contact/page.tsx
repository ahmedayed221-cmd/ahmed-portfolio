import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">Get in touch</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        Building something, hiring, or just want to talk about vibe coding? Email is the fastest way to
        reach me.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Button>
        <Button
          href={`https://instagram.com/${siteConfig.instagramHandle}`}
          variant="ghost"
          external
        >
          Instagram
        </Button>
      </div>
    </Container>
  );
}
