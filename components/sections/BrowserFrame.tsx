import Image from "next/image";
import { HudFrame } from "@/components/ui/HudFrame";

export function BrowserFrame({
  src,
  alt,
  url,
  width,
  height,
}: {
  src: string;
  alt: string;
  url: string;
  width: number;
  height: number;
}) {
  return (
    <HudFrame className="overflow-hidden rounded-lg border border-border bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <div className="flex-1 truncate rounded border border-border bg-background px-3 py-1 text-center font-mono text-xs text-muted">
          {url}
        </div>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full"
        sizes="(min-width: 1024px) 800px, 100vw"
      />
    </HudFrame>
  );
}
