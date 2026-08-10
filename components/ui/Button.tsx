import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
};

export function Button({ href, children, variant = "primary", external = false }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-accent text-white shadow-[0_0_0_0_rgba(124,108,246,0)] hover:shadow-[0_8px_24px_-8px_rgba(124,108,246,0.6)] hover:opacity-95"
      : "border border-border text-foreground hover:border-border-hover hover:bg-surface";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
