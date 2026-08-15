import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `How ${siteConfig.name} got into vibe coding, what he builds, and how the process actually works.`,
};

const facts = [
  { label: "Primary tool", value: "Claude Code" },
  { label: "Shipped", value: "Invomly — invomly.com" },
  { label: "Stack", value: "Next.js, TypeScript, Vercel" },
];

export default function AboutPage() {
  return (
    <Container className="py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-wider text-accent">About</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          I build software by talking to it — then reading every line before it ships.
        </h1>
      </Reveal>

      <div className="mt-14 grid gap-14 md:grid-cols-[1fr_280px]">
        <div className="space-y-12">
          <Reveal>
            <section>
              <h2 className="font-mono text-sm uppercase tracking-wider text-muted">How I got here</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                I didn&apos;t come from a traditional engineering background where I spent years learning
                frameworks one at a time. What pulled me in was the opposite: watching the gap between having
                an idea and having a working product shrink from months to days. The first time I described a
                feature to Claude Code and watched it turn into a real, working screen, it stopped feeling like
                a novelty and started feeling like a genuinely different way to build software.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                That&apos;s what &quot;vibe coding&quot; means to me — not typing less for its own sake, but
                spending almost all of my attention on the decisions that actually matter: what the product
                should do, how it should feel, and where it needs to be exactly right.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="font-mono text-sm uppercase tracking-wider text-muted">How it actually works</h2>
              <div className="mt-4 max-w-2xl">
                <ProcessSteps />
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="font-mono text-sm uppercase tracking-wider text-muted">What I actually build</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                I build real, shipped products — not demos. My first is{" "}
                <a
                  href="https://invomly.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
                >
                  Invomly
                </a>
                , an invoicing SaaS built specifically for French freelancers — with the authentication,
                billing, multi-language support, and compliance rules that a toy project would skip. I&apos;m
                drawn to narrow, well-defined problems where I understand the user well enough to make good
                calls fast, and where AI-assisted development compresses the boring parts without
                compromising the parts that need real judgment.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="font-mono text-sm uppercase tracking-wider text-muted">What makes this different</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                &quot;Vibe coding&quot; has a reputation for meaning &quot;ship whatever the model outputs and
                hope for the best.&quot; That&apos;s not how I work. Every diff gets read. Every edge case gets
                poked at manually before it goes live. The speed comes from compressing the loop between idea
                and working code — not from skipping the review that makes software trustworthy. I treat the
                AI as a fast, capable collaborator, not a replacement for judgment.
              </p>
            </section>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <aside className="rounded-lg border border-border bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Quick facts</p>
            <dl className="mt-4 space-y-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-xs text-muted">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>
      </div>
    </Container>
  );
}
