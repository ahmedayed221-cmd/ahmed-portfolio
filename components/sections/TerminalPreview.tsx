import { HudFrame } from "@/components/ui/HudFrame";

export function TerminalPreview() {
  return (
    <HudFrame className="w-full rounded-lg border border-border bg-surface/70 font-mono text-sm shadow-2xl shadow-black/40 backdrop-blur-md">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-accent-text">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Live
        </span>
      </div>
      <div className="space-y-2 px-4 py-5 text-muted">
        <p className="text-accent-text">
          <span className="typewriter">$ vibe-coding invomly</span>
        </p>
        <p className="terminal-line pl-4" style={{ animationDelay: "0.75s" }}>
          &gt; invoice generator for French freelancers
        </p>
        <p className="terminal-line pl-4" style={{ animationDelay: "0.95s" }}>
          &gt; describe, generate, review, ship
        </p>
        <p className="terminal-line pl-4 text-foreground" style={{ animationDelay: "1.15s" }}>
          ✓ deployed → invomly.com
        </p>
      </div>
    </HudFrame>
  );
}
