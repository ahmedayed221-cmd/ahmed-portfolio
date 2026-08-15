import {
  siClaudecode,
  siNextdotjs,
  siReact,
  siTypescript,
  siTailwindcss,
  siPrisma,
  siPostgresql,
  siNodedotjs,
  siStripe,
  siVercel,
  siThreedotjs,
  type SimpleIcon,
} from "simple-icons";

const techIcons: Record<string, SimpleIcon> = {
  "Claude Code": siClaudecode,
  "Next.js": siNextdotjs,
  React: siReact,
  TypeScript: siTypescript,
  "Tailwind CSS": siTailwindcss,
  Prisma: siPrisma,
  PostgreSQL: siPostgresql,
  "Node.js": siNodedotjs,
  Stripe: siStripe,
  Vercel: siVercel,
  "Three.js": siThreedotjs,
};

export function getTechIcon(name: string): SimpleIcon | undefined {
  return techIcons[name];
}
