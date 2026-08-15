import { HudFrame } from "@/components/ui/HudFrame";
import { Tag } from "@/components/ui/Tag";
import { skillCategories } from "@/lib/skills";
import { getTechIcon } from "@/lib/tech-icons";

export function SkillsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {skillCategories.map((group) => (
        <HudFrame
          key={group.category}
          className="rounded-lg border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-hover"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-muted">{group.category}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => {
              const icon = getTechIcon(item);
              if (!icon) return <Tag key={item}>{item}</Tag>;
              return (
                <span
                  key={item}
                  className="flex items-center gap-1.5 rounded border border-border px-2 py-1 font-mono text-xs text-muted"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    width={14}
                    height={14}
                    fill="currentColor"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d={icon.path} />
                  </svg>
                  {item}
                </span>
              );
            })}
          </div>
        </HudFrame>
      ))}
    </div>
  );
}
