"use client";

import { motion } from "framer-motion";
import SystemCard, { type Project } from "./SystemCard";

const projects: Project[] = [
  {
    name: "Kalvora",
    status: "ACTIVE",
    type: "SaaS Product",
    impact: "Streamlines creator-client workflows — from proposals to invoicing",
    role: "Solo Founder · Full-Stack",
    stack: ["React", "Node.js", "Supabase", "PostgreSQL", "Vercel"],
    description:
      "End-to-end platform for creators and freelancers to manage clients, generate proposals, and handle invoicing.",
    liveUrl: "https://kalvora.kaliprlabs.in",
    caseStudy: {
      problem:
        "Creators and freelancers spend hours juggling between multiple tools for proposals, client communication, and invoicing. There's no single platform that handles the full workflow.",
      whyItMatters:
        "The creator economy is booming, but the tools haven't caught up. Freelancers lose time and money switching between systems, leading to missed opportunities and unprofessional client experiences.",
      solution:
        "Built Kalvora as a unified SaaS platform where creators can manage their entire client lifecycle — from initial proposal generation to final invoice delivery — in one place. Features a clean, intuitive interface designed for non-technical users.",
      architecture:
        "React frontend with server-side rendering for SEO. Supabase for auth, database (PostgreSQL), and real-time features. Deployed on Vercel with edge functions for optimal performance. Modular component architecture for rapid feature iteration.",
      outcome:
        "Live in production with active users. Continuously iterating on user feedback and scaling acquisition channels. The platform has reduced proposal creation time by 60% for early users.",
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
