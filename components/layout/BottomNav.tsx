"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HudCorners } from "@/components/ui/HudFrame";
import { navLinks, siteConfig } from "@/lib/site-config";
import { WorkIcon, AboutIcon, BlogIcon, ContactIcon, InstagramIcon } from "@/components/layout/nav-icons";

const icons: Record<string, typeof WorkIcon> = {
  "/projects": WorkIcon,
  "/about": AboutIcon,
  "/blog": BlogIcon,
  "/contact": ContactIcon,
};

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 pb-[env(safe-area-inset-bottom)] sm:bottom-4 sm:px-4"
      aria-label="Primary"
    >
      <div className="hud-frame relative mx-auto flex max-w-lg items-stretch justify-around border-t border-border bg-background/90 backdrop-blur-md sm:max-w-md sm:rounded-2xl sm:border sm:shadow-2xl sm:shadow-black/40">
        <HudCorners />
        {navLinks.map((link) => {
          const Icon = icons[link.href];
          const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative flex flex-1 flex-col items-center gap-1 py-2.5 font-mono text-[10px] uppercase tracking-wider transition-colors duration-200 ${
                active ? "text-accent-text" : "text-muted hover:text-foreground"
              }`}
            >
              {active && (
                <span
                  className="absolute -top-px h-0.5 w-6 rounded-full bg-accent shadow-[0_0_8px_rgba(124,108,246,0.9)]"
                  aria-hidden="true"
                />
              )}
              <Icon
                className={`h-5 w-5 transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(124,108,246,0.6)] ${
                  active ? "drop-shadow-[0_0_6px_rgba(124,108,246,0.8)]" : ""
                }`}
              />
              {link.label}
            </Link>
          );
        })}
        <a
          href={`https://instagram.com/${siteConfig.instagramHandle}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="group flex flex-1 flex-col items-center gap-1 py-2.5 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors duration-200 hover:text-foreground"
        >
          <InstagramIcon className="h-5 w-5 transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(124,108,246,0.6)]" />
          Insta
        </a>
      </div>
    </nav>
  );
}
