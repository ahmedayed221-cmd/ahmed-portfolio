import { Tag } from "@/components/ui/Tag";
import { skillCategories } from "@/lib/skills";

export function SkillsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {skillCategories.map((group) => (
        <div
          key={group.category}
          className="rounded-lg border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-hover"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-muted">{group.category}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
