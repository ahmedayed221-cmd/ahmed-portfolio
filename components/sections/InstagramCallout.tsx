import { siteConfig } from "@/lib/site-config";

export function InstagramCallout() {
  return (
    <a
      href={`https://instagram.com/${siteConfig.instagramHandle}`}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:bg-surface-hover hover:shadow-[0_16px_40px_-24px_rgba(124,108,246,0.5)]"
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-accent">Follow along</p>
        <p className="mt-2 text-base text-foreground">
          Behind-the-scenes builds and process on Instagram — @{siteConfig.instagramHandle}
        </p>
      </div>
      <span className="font-mono text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground">
        ↗
      </span>
    </a>
  );
}
