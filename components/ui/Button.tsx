import Link from "next/link";
import { ReactNode } from "react";
import { HudCorners } from "@/components/ui/HudFrame";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
};

export function Button({ href, children, variant = "primary", external = false }: ButtonProps) {
  const base =
    "hud-frame relative inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-accent text-white shadow-[0_0_16px_-6px_rgba(124,108,246,0.55)] hover:shadow-[0_8px_28px_-6px_rgba(124,108,246,0.75)] hover:opacity-95"
      : "border border-border text-foreground hover:border-accent/60 hover:bg-surface";

  const content = (
    <>
      {variant === "primary" && <HudCorners color="white" />}
      {children}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {content}
    </Link>
  );
}
