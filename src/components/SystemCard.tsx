"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  BookOpen,
  ChevronRight,
  X,
} from "lucide-react";
import { GithubIcon } from "./icons";

export interface Project {
  name: string;
  status: "ACTIVE" | "PROTOTYPE" | "ARCHIVED" | "COMPLETE";
  type: string;
  impact: string;
  role: string;
  stack: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: {
    problem: string;
    whyItMatters: string;
    solution: string;
    architecture: string;
    outcome: string;
  };
}

interface SystemCardProps {
  project: Project;
  index: number;
}

export default function SystemCard({ project, index }: SystemCardProps) {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const statusColor = {
    ACTIVE: "text-success",
    PROTOTYPE: "text-warning",
    ARCHIVED: "text-muted",
    COMPLETE: "text-cyan",
  };

  const statusDotClass = {
    ACTIVE: "status-active",
    PROTOTYPE: "status-prototype",
    ARCHIVED: "status-archived",
    COMPLETE: "status-active",
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="group bg-surface border border-border rounded-lg p-6 hover:border-cyan/20 hover:bg-surface-hover transition-all duration-300 relative overflow-hidden"
      >
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between mb-4 relative">
          <div>
            <div className="font-mono text-[10px] text-muted tracking-widest mb-2">
              SYSTEM
            </div>
            <h3 className="text-xl font-bold group-hover:text-cyan transition-colors">
              {project.name}
            </h3>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className={`status-dot ${statusDotClass[project.status]}`} />
            <span className={statusColor[project.status]}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-3 mb-4 relative">
          <div>
            <div className="font-mono text-[10px] text-muted mb-0.5">TYPE</div>
            <div className="text-sm text-foreground/80">{project.type}</div>
          </div>
          <div>
            <div className="font-mono text-[10px] text-muted mb-0.5">ROLE</div>
            <div className="text-sm text-foreground/80">{project.role}</div>
          </div>
        </div>

        {/* Impact */}
        <div className="mb-4 relative">
          <div className="font-mono text-[10px] text-muted mb-0.5">IMPACT</div>
          <div className="text-sm text-muted-light leading-relaxed">
            {project.impact}
          </div>
        </div>

        {/* Stack */}
        <div className="mb-6 relative">
          <div className="font-mono text-[10px] text-muted mb-2">STACK</div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2 py-0.5 bg-background border border-border rounded text-muted-light"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 relative">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-cyan hover:text-cyan/80 border border-cyan/20 px-3 py-1.5 rounded hover:bg-cyan/5 transition-all"
            >
              <ExternalLink size={12} />
              Visit Site
            </a>
          )}
          {project.caseStudy && (
            <button
              onClick={() => setShowCaseStudy(true)}
              className="flex items-center gap-1.5 font-mono text-xs text-foreground/70 hover:text-cyan border border-border px-3 py-1.5 rounded hover:border-cyan/20 hover:bg-cyan/5 transition-all cursor-pointer"
            >
              <BookOpen size={12} />
              Case Study
            </button>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-foreground/70 hover:text-cyan border border-border px-3 py-1.5 rounded hover:border-cyan/20 hover:bg-cyan/5 transition-all"
            >
              <GithubIcon size={12} />
              Source
            </a>
          )}
        </div>
      </motion.div>

      {/* Case Study Modal */}
      {showCaseStudy && project.caseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowCaseStudy(false)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-surface border border-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setShowCaseStudy(false)}
              className="absolute top-4 right-4 text-muted-light hover:text-cyan transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="font-mono text-[10px] text-cyan tracking-widest mb-2">
                CASE STUDY
              </div>
              <h2 className="text-2xl font-bold">{project.name}</h2>
              <div className="text-sm text-muted-light mt-1">
                {project.type} · {project.role}
              </div>
            </div>

            {/* Sections */}
            {[
              { title: "The Problem", content: project.caseStudy.problem },
              {
                title: "Why It Matters",
                content: project.caseStudy.whyItMatters,
              },
              { title: "The Solution", content: project.caseStudy.solution },
              {
                title: "Architecture",
                content: project.caseStudy.architecture,
              },
              { title: "Outcome", content: project.caseStudy.outcome },
            ].map((section, i) => (
              <div key={section.title} className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <ChevronRight size={14} className="text-cyan" />
                  <h3 className="font-mono text-sm font-bold text-cyan">
                    {section.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-light leading-relaxed pl-6">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Links */}
            <div className="flex gap-3 mt-8 pt-6 border-t border-border">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-cyan border border-cyan/20 px-4 py-2 rounded hover:bg-cyan/5 transition-all"
                >
                  <ExternalLink size={12} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-foreground/70 border border-border px-4 py-2 rounded hover:border-cyan/20 transition-all"
                >
                  <GithubIcon size={12} />
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
