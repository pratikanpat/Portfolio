"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

interface Experiment {
  name: string;
  description: string;
  tech: string[];
  status: "Complete" | "MVP" | "Concept" | "Research";
  githubUrl?: string;
}

const experiments: Experiment[] = [
  {
    name: "VidASCII",
    description:
      "Convert any video into live ASCII art in your terminal. Real-time frame processing using OpenCV.",
    tech: ["Python", "OpenCV"],
    status: "Complete",
    githubUrl: "https://github.com/pratikanpat/VidASCII",
  },
  {
    name: "AI Debug Mentor",
    description:
      "Socratic-method AI mentor that teaches debugging concepts instead of giving quick fixes.",
    tech: ["Prompt Engineering", "Python"],
    status: "Concept",
    githubUrl: "https://github.com/pratikanpat/python-ai-debug",
  },
  {
    name: "Student Competence Analysis",
    description:
      "Research into using open-source AI to analyze student code, create assessment prompts, and identify learning gaps.",
    tech: ["AI/ML", "Python", "Research"],
    status: "Research",
    githubUrl:
      "https://github.com/pratikanpat/student-competence-analysis-fossee",
  },
  {
    name: "FOSSEE UI/UX Enhancement",
    description:
      "UI/UX improvements for the FOSSEE platform — making educational tools more accessible.",
    tech: ["Python", "UI/UX", "Research"],
    status: "Complete",
    githubUrl: "https://github.com/pratikanpat/UI-UX-Enhancement-FOSSEE",
  },
  {
    name: "The End Is The Beginning",
    description: "A cinematic landing page for a book — exploring creative web storytelling.",
    tech: ["HTML", "CSS", "Creative"],
    status: "Complete",
    githubUrl: "https://github.com/pratikanpat/The-End-Is-The-Beginning",
  },
];

const statusStyle: Record<string, string> = {
  Complete: "text-success bg-success/10 border-success/20",
  MVP: "text-warning bg-warning/10 border-warning/20",
  Concept: "text-cyan bg-cyan/10 border-cyan/20",
  Research: "text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/20",
};

export default function ExperimentsSection() {
  return (
    <section id="experiments" className="section-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="font-mono text-[11px] text-muted tracking-widest mb-3">
          SYSTEM:// EXPERIMENTS
        </div>
        <h2 className="text-3xl font-bold mb-3">
          Lab <span className="text-cyan">Experiments</span>
        </h2>
        <p className="text-muted-light max-w-lg">
          Side projects, research, and weird builds. Not everything ships — but
          everything teaches.
        </p>
      </motion.div>

      {/* Experiments Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiments.map((exp, i) => (
          <motion.div
            key={exp.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-surface border border-border rounded-lg p-5 hover:border-cyan/15 hover:bg-surface-hover transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-sm group-hover:text-cyan transition-colors">
                {exp.name}
              </h3>
              <span
                className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${
                  statusStyle[exp.status]
                }`}
              >
                {exp.status.toUpperCase()}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-muted-light leading-relaxed mb-4">
              {exp.description}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-1.5 py-0.5 bg-background border border-border rounded text-muted-light"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            {exp.githubUrl && (
              <a
                href={exp.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-light hover:text-cyan transition-colors"
              >
                <GithubIcon size={12} />
                View Source
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
