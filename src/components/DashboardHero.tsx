"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import {
  MapPin,
  FileDown,
  Mail,
  ArrowDown,
  BookOpen,
  X,
  ChevronRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const kalvoraCaseStudy = {
  problem:
    "Interior designers typically create quotations manually in Word or Excel, losing hours formatting documents and managing scattered revisions.",
  whyItMatters:
    "First impressions are critical for design professionals. Sending a poorly formatted Excel sheet undermines a premium brand image, and slow turnaround times can cost them the project.",
  solution:
    "Built a guided, multi-section platform where designers can input client details, rooms, and pricing to instantly generate beautifully styled PDF proposals or share dynamic approval links.",
  architecture:
    "Built on Next.js 14 App Router and Supabase for auth and database. Integrates Browserless via REST API for robust server-side PDF generation. Uses Resend for automated client approval emails.",
  outcome:
    "Live system featuring short link sharing (e.g., /p/KV-xxxxx), frictionless client approvals that trigger automated invoicing, payment milestone tracking, and a built-in feedback loop.",
};

export default function DashboardHero() {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <>
    <section id="dashboard" className="section-container min-h-screen flex flex-col justify-center relative pt-0 pb-0 lg:pt-0 lg:pb-0">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="font-mono text-[11px] text-muted tracking-widest mb-4 lg:mb-8"
      >
        SYSTEM:// DASHBOARD / OVERVIEW
      </motion.div>

      {/* Main Hero */}
      <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
        <div>
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            Pratik{" "}
            <span className="text-cyan glow-text-cyan">Anpat</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-muted-light mb-3 lg:mb-6 space-y-1"
          >
            <div className="text-lg">
              Founder,{" "}
              <a href="https://kaliprlabs.in" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-cyan transition-colors">Kalipr Labs</a>
            </div>
            <div className="text-sm text-muted">
              Full Stack Developer · SaaS Product Builder
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex items-center gap-2 text-sm text-muted-light mb-4 lg:mb-8"
          >
            <MapPin size={14} className="text-cyan" />
            <span>Pune, India</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base lg:text-lg text-muted-light max-w-lg leading-relaxed mb-6 lg:mb-10"
          >
            Building products. Shipping for clients. Learning how to build sustainable software businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3 lg:gap-6 mb-6 lg:mb-10"
          >
            {[
              { label: "Products", value: "3" },
              { label: "Users", value: "100+" },
              { label: "Clients", value: "3" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-3 py-2 lg:px-4 lg:py-3 bg-surface border border-border rounded-md"
              >
                <div className="font-mono text-xs text-muted mb-1">
                  {stat.label}
                </div>
                <div className="font-mono text-lg font-bold text-foreground">
                  {stat.value}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-mono text-sm border border-cyan/30 text-cyan px-5 py-2.5 hover:bg-cyan/10 hover:border-cyan/60 transition-all duration-300 glow-cyan-sm"
              id="download-resume"
            >
              <FileDown size={14} />
              <span>EXPORT_RESUME.PDF</span>
              <span className="text-[10px] text-cyan/50 ml-1 hidden group-hover:inline transition-all">
                ~120KB
              </span>
            </a>

            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://github.com/pratikanpat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-light hover:text-cyan border border-border hover:border-cyan/30 rounded transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://linkedin.com/in/pratik-anpat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-light hover:text-cyan border border-border hover:border-cyan/30 rounded transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="mailto:pratikanpat89@gmail.com"
                className="p-2 text-muted-light hover:text-cyan border border-border hover:border-cyan/30 rounded transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right side — Current Focus Card (desktop only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="hidden lg:block w-full lg:w-[320px] border-glow rounded-lg p-6 bg-surface/50 relative overflow-hidden"
        >
          {/* Animated border pulse */}
          <div className="absolute inset-0 rounded-lg border border-cyan/10 animate-pulse pointer-events-none" />

          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">🔥</span>
            <span className="font-mono text-xs text-cyan tracking-widest font-bold">
              CURRENT FOCUS
            </span>
          </div>

          <h3 className="font-bold text-lg mb-2">Kalvora</h3>
          <p className="text-sm text-muted-light mb-4 leading-relaxed">
            From Quote to Invoice - in one place. Interior designers fill a form, get a branded PDF, share a link, and auto-generate an invoice the moment the client approves.
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-muted">STACK</span>
              <span className="text-foreground/80">Next.js · Supabase · Vercel</span>
            </div>
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-muted">STATUS</span>
              <span className="flex items-center gap-1.5">
                <span className="status-dot status-active" />
                <span className="text-success">LIVE</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://kalvora.kaliprlabs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-cyan hover:underline"
            >
              → Visit Site
            </a>
            <span className="text-border">|</span>
            <button
              onClick={() => setShowCaseStudy(true)}
              className="flex items-center gap-1.5 font-mono text-xs text-foreground/70 hover:text-cyan transition-colors cursor-pointer"
            >
              <BookOpen size={12} />
              Case Study
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile — compact Current Focus chip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="lg:hidden mt-4"
      >
        <a
          href="https://kalvora.kaliprlabs.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-cyan/20 bg-surface/60 hover:bg-surface-hover transition-all group"
        >
          <span className="text-sm">🔥</span>
          <span className="font-mono text-xs text-cyan font-bold tracking-wide">BUILDING</span>
          <span className="font-mono text-xs text-foreground/80">Kalvora</span>
          <span className="flex items-center gap-1">
            <span className="status-dot status-active" style={{ width: 6, height: 6 }} />
            <span className="font-mono text-[10px] text-success">LIVE</span>
          </span>
          <ChevronRight size={12} className="text-muted group-hover:text-cyan transition-colors" />
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-36 lg:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-muted"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>

    {/* Case Study Modal */}
    {showCaseStudy && (
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
            <h2 className="text-2xl font-bold">Kalvora</h2>
            <div className="text-sm text-muted-light mt-1">
              SaaS Product · Solo Founder · Full-Stack
            </div>
          </div>

          {/* Sections */}
          {[
            { title: "The Problem", content: kalvoraCaseStudy.problem },
            { title: "Why It Matters", content: kalvoraCaseStudy.whyItMatters },
            { title: "The Solution", content: kalvoraCaseStudy.solution },
            { title: "Architecture", content: kalvoraCaseStudy.architecture },
            { title: "Outcome", content: kalvoraCaseStudy.outcome },
          ].map((section) => (
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
            <a
              href="https://kalvora.kaliprlabs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-cyan border border-cyan/20 px-4 py-2 rounded hover:bg-cyan/5 transition-all"
            >
              → Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    )}
    </>
  );
}
