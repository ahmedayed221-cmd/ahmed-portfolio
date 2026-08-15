export function HudDivider() {
  return (
    <div className="relative h-px w-full bg-border" aria-hidden="true">
      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-accent bg-background" />
      <span className="absolute left-6 top-1/2 h-2 w-px -translate-y-1/2 bg-border-hover sm:left-10" />
      <span className="absolute right-6 top-1/2 h-2 w-px -translate-y-1/2 bg-border-hover sm:right-10" />
    </div>
  );
}
