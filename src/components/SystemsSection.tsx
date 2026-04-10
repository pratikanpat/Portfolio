"use client";

import { motion } from "framer-motion";
import SystemCard, { type Project } from "./SystemCard";

const projects: Project[] = [
  {
    name: "Kalvora",
    status: "ACTIVE",
    type: "SaaS Product",
    impact: "Streamlines interior design proposals into branded PDF documents instantly",
    role: "Solo Founder · Full-Stack",
    stack: ["Next.js", "React", "Supabase", "Tailwind", "Browserless API", "Vercel"],
    description:
      "A web tool for interior designers to quickly create structured, professional quotation proposals and generate branded PDF documents.",
    liveUrl: "https://kalvora.kaliprlabs.in",
    caseStudy: {
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
    },
  },
  {
    name: "Quantimize",
    status: "PROTOTYPE",
    type: "Engineering Tool",
    impact: "Optimizes corridor routing using OpenStreetMap data and algorithms",
    role: "Developer · Researcher",
    stack: ["Python", "FastAPI", "OpenStreetMap", "CLI"],
    description:
      "Corridor routing experiments with a FastAPI backend, CLI tools, and a lightweight UI for OSM-based path analysis.",
    githubUrl: "https://github.com/pratikanpat/Quantimize",
    caseStudy: {
      problem:
        "Urban corridor routing lacks accessible, open-source tools that can analyze and optimize paths using real-world map data.",
      whyItMatters:
        "Efficient routing impacts logistics, urban planning, and infrastructure development. Most existing solutions are proprietary and expensive.",
      solution:
        "Developed an open-source tool combining FastAPI for the backend API, CLI tools for batch processing, and a lightweight UI for visualization — all powered by OpenStreetMap data.",
      architecture:
        "FastAPI handles route computation and serves results via REST endpoints. OSM data is processed and cached locally. CLI tools enable script-based batch analysis. Frontend visualizes routes on interactive maps.",
      outcome:
        "Working prototype that successfully computes and visualizes optimized routes. Demonstrates potential for scaling to real-world logistics applications.",
    },
  },
  {
    name: "Smart-Bin",
    status: "PROTOTYPE",
    type: "IoT + Web",
    impact: "Smart waste management system with real-time monitoring",
    role: "Developer",
    stack: ["HTML", "CSS", "JavaScript", "IoT"],
    description:
      "A smart waste management solution combining hardware sensors with a web dashboard for real-time monitoring.",
    githubUrl: "https://github.com/pratikanpat/Smart-Bin",
  },
];

export default function SystemsSection() {
  return (
    <section id="systems" className="section-container">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="font-mono text-[11px] text-muted tracking-widest mb-3">
          SYSTEM:// LIVE SYSTEMS
        </div>
        <h2 className="text-3xl font-bold mb-3">
          Products & <span className="text-cyan">Systems</span>
        </h2>
        <p className="text-muted-light max-w-lg">
          Real products solving real problems. Each system designed, built, and
          shipped end-to-end.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <SystemCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
