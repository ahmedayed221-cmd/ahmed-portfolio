export function ComingSoonCard({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`rounded-lg border border-dashed border-border text-muted transition-colors duration-300 hover:border-border-hover ${
        compact ? "p-5" : "p-6"
      }`}
    >
      <p className="font-mono text-xs text-accent-text">$ more_projects --status queued</p>
      <p className="mt-3 text-sm leading-relaxed">
        More case studies are in progress. I ship in public — the next one lands here as soon as it&apos;s
        live.
      </p>
    </div>
  );
}
