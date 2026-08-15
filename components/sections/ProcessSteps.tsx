const steps = ["Describe", "Generate", "Review", "Ship"];

export function ProcessSteps() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
      {steps.map((step, i) => (
        <div key={step} className="flex items-stretch sm:flex-1">
          <div className="flex flex-1 items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-colors duration-300 hover:border-border-hover">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-xs text-accent">
              {i + 1}
            </span>
            <span className="text-sm font-medium text-foreground">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="hidden shrink-0 items-center px-2 text-muted sm:flex" aria-hidden="true">
              →
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
