import { Button } from "@/components/ui/Button";
import { TerminalPreview } from "@/components/sections/TerminalPreview";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-4xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
            Vibe coding developer
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {siteConfig.name} builds real products by pairing with AI, not by cutting corners.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted">
            I design, build, and ship apps using Claude Code — describing what I want, reviewing every change,
            and moving from idea to production fast. First shipped product:{" "}
            <a href="https://invomly.com" target="_blank" rel="noreferrer" className="text-foreground underline decoration-accent underline-offset-4">
              Invomly
            </a>
            , an invoice generator for French freelancers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">See my work</Button>
            <Button href="/blog" variant="ghost">
              Read the blog
            </Button>
          </div>
        </div>
        <TerminalPreview />
      </div>
    </section>
  );
}
