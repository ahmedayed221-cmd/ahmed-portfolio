export function Tag({ children }: { children: string }) {
  return (
    <span className="font-mono text-xs text-muted border border-border rounded px-2 py-1">
      {children}
    </span>
  );
}
