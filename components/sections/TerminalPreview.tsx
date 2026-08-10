export function TerminalPreview() {
  return (
    <div className="w-full rounded-lg border border-border bg-surface font-mono text-sm shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>
      <div className="space-y-2 px-4 py-5 text-muted">
        <p className="text-accent">
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
    </div>
  );
}
