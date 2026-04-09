"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  FileDown,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
} from "lucide-react";

export default function DashboardHero() {
  return (
    <section id="dashboard" className="section-container pt-24 lg:pt-20">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="font-mono text-[11px] text-muted tracking-widest mb-8"
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
            className="font-mono text-lg text-muted-light mb-6"
          >
            Full-Stack Developer &{" "}
            <span className="text-foreground">SaaS Builder</span>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex items-center gap-2 text-sm text-muted-light mb-8"
          >
            <MapPin size={14} className="text-cyan" />
            <span>Pune, India</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-light max-w-lg leading-relaxed mb-10"
          >
            I build products that people actually use — from idea to production.
          </motion.p>

          {/* Quick Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6 mb-10"
          >
            {[
              { label: "Products Shipped", value: "3+" },
              { label: "Ideas Tested", value: "10+" },
              { label: "Current Focus", value: "Kalvora" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-4 py-3 bg-surface border border-border rounded-md"
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
              <span>EXPORT_CREDENTIALS.PDF</span>
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
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/pratik-anpat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-light hover:text-cyan border border-border hover:border-cyan/30 rounded transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
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

        {/* Right side — Current Focus Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full lg:w-[320px] border-glow rounded-lg p-6 bg-surface/50 relative overflow-hidden"
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
            Scaling user acquisition for a SaaS platform that streamlines
            creator-client workflows.
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-muted">STACK</span>
              <span className="text-foreground/80">React · Node · Supabase</span>
            </div>
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-muted">STATUS</span>
              <span className="flex items-center gap-1.5">
                <span className="status-dot status-active" />
                <span className="text-success">LIVE</span>
              </span>
            </div>
          </div>

          <a
            href="https://kalvora.kaliprlabs.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-cyan hover:underline"
          >
            → Launch System
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex justify-center mt-16"
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
  );
}
