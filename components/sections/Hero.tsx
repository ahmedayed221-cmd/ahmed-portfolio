import { Button } from "@/components/ui/Button";
import { TerminalPreview } from "@/components/sections/TerminalPreview";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="glow left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3"
        aria-hidden="true"
      />
      <div className="mx-auto grid w-full max-w-5xl gap-14 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:items-center md:py-32">
        <div>
          <p className="load-in mb-5 font-mono text-xs uppercase tracking-wider text-accent">
            Vibe coding developer
          </p>
          <h1
            className="load-in text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            I ship real products, fast — by pairing with AI, not by cutting corners.
          </h1>
          <p
            className="load-in mt-6 max-w-lg text-base leading-relaxed text-muted"
            style={{ animationDelay: "260ms" }}
          >
            I&apos;m {siteConfig.name} — I design, build, and ship apps using Claude Code: describing what I want,
            reviewing every change, and moving from idea to production in days, not months. First shipped
            product:{" "}
            <a
              href="https://invomly.com"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
            >
              Invomly
            </a>
            , an invoice generator for French freelancers.
          </p>
          <div className="load-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "400ms" }}>
            <Button href="/projects">See my work</Button>
            <Button href="/about" variant="ghost">
              How I build
            </Button>
          </div>
        </div>
        <div className="load-in" style={{ animationDelay: "180ms" }}>
          <TerminalPreview />
        </div>
      </div>
    </section>
  );
}
