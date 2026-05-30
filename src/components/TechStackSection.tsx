"use client";

import { motion } from "framer-motion";

interface TechItem {
  name: string;
  category: "primary" | "tools" | "exploring";
}

const techStack: TechItem[] = [
  // Primary Weapons
  { name: "React", category: "primary" },
  { name: "Next.js", category: "primary" },
  { name: "Node.js", category: "primary" },
  { name: "TypeScript", category: "primary" },
  { name: "PostgreSQL", category: "primary" },
  { name: "Python", category: "primary" },
  // Tools in Rotation
  { name: "Supabase", category: "tools" },
  { name: "Tailwind CSS", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "FastAPI", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "Figma", category: "tools" },
  // Experimenting With
  { name: "n8n", category: "exploring" },
  { name: "AI/ML", category: "exploring" },
  { name: "OpenCV", category: "exploring" },
  { name: "Prompt Engineering", category: "exploring" },
  { name: "Automation", category: "exploring" },
];

const categories = [
  {
    key: "primary" as const,
    label: "PRIMARY WEAPONS",
    description: "Core technologies I build with daily",
    color: "text-cyan border-cyan/20 bg-cyan/5",
  },
  {
    key: "tools" as const,
    label: "TOOLS IN ROTATION",
    description: "Ecosystem tools that power my workflow",
    color: "text-foreground/80 border-border bg-surface",
  },
  {
    key: "exploring" as const,
    label: "EXPERIMENTING WITH",
    description: "Technologies I'm actively learning",
    color: "text-muted-light border-border bg-surface",
  },
];

export default function TechStackSection() {
  return (
    <section id="stack" className="section-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-8 lg:mb-12"
      >
        <div className="font-mono text-[11px] text-muted tracking-widest mb-3">
          SYSTEM:// ACTIVE STACK
        </div>
        <h2 className="text-3xl font-bold mb-3">
          Tech I Actually <span className="text-cyan">Use</span>
        </h2>
        <p className="text-muted-light max-w-lg">
          Not a keyword dump. These are tools I build with - organized by how
          deeply they&apos;re integrated into my workflow.
        </p>
      </motion.div>

      {/* Stack Categories */}
      <div className="space-y-5 lg:space-y-8">
        {categories.map((cat, catIndex) => {
          const items = techStack.filter((t) => t.category === cat.key);
          return (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3 lg:mb-4">
                <div className="font-mono text-[11px] text-muted tracking-widest">
                  {cat.label}
                </div>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {items.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + i * 0.03 }}
                    className={`font-mono text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-md border transition-all duration-300 hover:border-cyan/30 hover:bg-cyan/5 hover:text-cyan cursor-default ${cat.color}`}
                  >
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
