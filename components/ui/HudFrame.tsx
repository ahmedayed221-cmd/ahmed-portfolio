import { ReactNode } from "react";

/**
 * The decorative corner brackets + scan-line sweep. Render this as the
 * first child of any relatively-positioned element with the `hud-frame`
 * class to give it the HUD treatment — used directly by HudFrame below,
 * and inline by components that can't use a wrapping <div> (e.g. cards
 * whose root element is a Link/anchor).
 *
 * `color` picks the bracket color — default `accent` reads against dark
 * surfaces; `white` is for use on solid accent-colored backgrounds (e.g.
 * the primary button) where accent-on-accent would disappear.
 */
export function HudCorners({ color = "accent" }: { color?: "accent" | "white" }) {
  const borderColor = color === "accent" ? "border-accent" : "border-white/80";
  return (
    <>
      <span
        className={`hud-corner pointer-events-none absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 ${borderColor}`}
        aria-hidden="true"
      />
      <span
        className={`hud-corner pointer-events-none absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 ${borderColor}`}
        aria-hidden="true"
      />
      <span
        className={`hud-corner pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 ${borderColor}`}
        aria-hidden="true"
      />
      <span
        className={`hud-corner pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 ${borderColor}`}
        aria-hidden="true"
      />
      <span className="hud-scan pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden="true" />
    </>
  );
}

export function HudFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`hud-frame relative ${className}`}>
      <HudCorners />
      {children}
    </div>
  );
}
