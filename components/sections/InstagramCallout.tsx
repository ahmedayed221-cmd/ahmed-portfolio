import { siteConfig } from "@/lib/site-config";

export function InstagramCallout() {
  return (
    <a
      href={`https://instagram.com/${siteConfig.instagramHandle}`}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-lg border border-border bg-surface p-6 transition-colors hover:bg-surface-hover"
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-accent">Follow along</p>
        <p className="mt-2 text-base text-foreground">
          Behind-the-scenes builds and process on Instagram — @{siteConfig.instagramHandle}
        </p>
      </div>
      <span className="font-mono text-muted transition-colors group-hover:text-foreground">↗</span>
    </a>
  );
}
