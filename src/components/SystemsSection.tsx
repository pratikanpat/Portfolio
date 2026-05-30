"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SystemCard, { type Project } from "./SystemCard";

const projects: Project[] = [
  {
    name: "Kalvora",
    status: "ACTIVE",
    type: "SaaS Product",
    impact: "Quote → Proposal → Client Approval → Auto-Invoice - built for interior designers",
    role: "Solo Founder · Full-Stack",
    stack: ["Next.js", "React", "Supabase", "Tailwind", "Browserless API", "Vercel"],
    description:
      "Interior designers fill an 8-section form, choose a PDF template, share a magic approval link with the client, and get an invoice auto-generated the moment the client approves - all in one workflow.",
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
    name: "BeatYesterday",
    status: "ACTIVE",
    type: "PWA · Personal Project",
    impact:
      "Offline-first bodyweight workout tracker — log, beat your PR, repeat. No login, no cloud, no excuses.",
    role: "Solo Developer · Full-Stack",
    stack: [
      "React 19",
      "Vite",
      "Zustand",
      "Dexie.js",
      "Recharts",
      "Framer Motion",
      "PWA",
    ],
    description:
      "An offline-first PWA for tracking bodyweight workouts. Open the app, log your reps, see your PR, close the app. IndexedDB stores everything locally — works without internet, installs like a native app.",
    liveUrl: "https://beatyesterday.kaliprlabs.in",
    caseStudy: {
      problem:
        "Most fitness apps are bloated — meal plans, social feeds, subscriptions. Students and founders with chaotic schedules don't need another wellness platform. They need a 5-second way to log a set and see if they beat yesterday.",
      whyItMatters:
        "Consistency beats intensity. When the barrier to logging is high, people stop tracking. When they stop tracking, they stop showing up. The tool needs to be as fast as the workout is short.",
      solution:
        "Built an offline-first PWA with zero login required. Open the app → tap an exercise → enter reps → see your PR → done. IndexedDB stores everything locally. Works without internet, installs like a native app.",
      architecture:
        "Vite + React 19 frontend with Zustand for state management. Dexie.js wraps IndexedDB for offline-first persistence. Recharts powers PR sparklines and trend charts. Vite PWA plugin enables installable PWA with service worker caching. Landing page is a separate vanilla HTML/CSS/JS build with GSAP scroll animations. Deployed on Vercel with dual routing (/ → landing, /app → React PWA).",
      outcome:
        "Fully functional PWA with 5-second workout logging, real-time PR detection with celebration overlay, 30-day challenges, GitHub-style year heatmap, consistency scoring, body area coverage heatmap, CSV data export, and shareable Instagram-style PR cards.",
    },
  },
  {
    name: "Rentify Properties",
    status: "ACTIVE",
    type: "Full-Stack Platform · Client Project",
    impact:
      "SEO-driven real estate portal for a Pune broker — property discovery, lead management, and content marketing in one platform",
    role: "Solo Developer · Full-Stack",
    stack: [
      "Next.js 16",
      "React 19",
      "Prisma",
      "Supabase",
      "Tailwind CSS",
      "Zod",
      "MDX",
      "Vercel",
    ],
    description:
      "A full-stack real estate platform with a public SEO-optimized portal for property discovery across 5 Pune localities and a broker dashboard for listing management. Includes a content-driven blog with MDX.",
    liveUrl: "https://rentify-properties.vercel.app/",
    caseStudy: {
      problem:
        "A Pune-based real estate broker was managing property listings, leads, and client communication through scattered WhatsApp chats and Excel sheets — with zero online presence for organic lead generation.",
      whyItMatters:
        "In Indian real estate, 70%+ of property searches start online. Without a professional web presence, the broker was missing high-intent organic traffic entirely and relying solely on paid referrals.",
      solution:
        "Built a full-stack property platform with a public SEO-optimized portal for property discovery across 5 Pune localities (Baner, Hinjewadi, Kharadi, Viman Nagar, Wakad) and a broker dashboard for listing management. Includes a content-driven blog with MDX for locality guides and rental checklists.",
      architecture:
        "Next.js 16 App Router with React Server Components for SEO-first rendering. Prisma ORM with Supabase (PostgreSQL) for the database. Zod for runtime validation. Supabase Auth with middleware-based role protection. MDX-powered blog with frontmatter metadata. Programmatic SEO with structured data (RealEstateListing, BreadcrumbList). Deployed on Vercel.",
      outcome:
        "Live platform serving 5 locality pages with rich SEO content, property search with type and locality filtering, an MDX blog with guides, broker dashboard login, and a fully responsive design. Built for a single broker with a multi-tenant-ready database schema.",
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
        "Developed an open-source tool combining FastAPI for the backend API, CLI tools for batch processing, and a lightweight UI for visualization - all powered by OpenStreetMap data.",
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

const statusDotClass: Record<string, string> = {
  ACTIVE: "status-active",
  PROTOTYPE: "status-prototype",
  ARCHIVED: "status-archived",
  COMPLETE: "status-active",
};

const statusColor: Record<string, string> = {
  ACTIVE: "text-success",
  PROTOTYPE: "text-warning",
  ARCHIVED: "text-muted",
  COMPLETE: "text-cyan",
};

interface CompactCardProps {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function CompactProjectRow({ project, index, isExpanded, onToggle }: CompactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className={`border rounded-lg overflow-hidden transition-colors duration-300 ${
        isExpanded ? "border-cyan/20" : "border-border"
      }`}
    >
      {/* Compact header row — always visible */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3.5 bg-surface hover:bg-surface-hover transition-colors cursor-pointer"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className={`status-dot shrink-0 ${statusDotClass[project.status]}`} />
          <span className={`font-bold text-sm truncate transition-colors duration-200 ${isExpanded ? "text-cyan" : ""}`}>{project.name}</span>
          <span className="hidden sm:block font-mono text-[10px] text-muted truncate">
            {project.type}
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-3">
          <span className={`font-mono text-[10px] ${statusColor[project.status]}`}>
            {project.status}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <ChevronDown size={14} className={`transition-colors duration-200 ${isExpanded ? "text-cyan" : "text-muted"}`} />
          </motion.div>
        </div>
      </button>

      {/* Expanded full card */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-border">
              <SystemCard project={project} index={0} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function SystemsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="systems" className="section-container">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <div className="font-mono text-[11px] text-muted tracking-widest mb-3">
          SYSTEM:// LIVE SYSTEMS
        </div>
        <h2 className="text-3xl font-bold mb-3">
          Products &amp; <span className="text-cyan">Systems</span>
        </h2>
        <p className="text-muted-light max-w-lg">
          Real products solving real problems. Each system designed, built, and
          shipped end-to-end.
        </p>
      </motion.div>

      {/* Desktop: 2-column grid (unchanged) */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <SystemCard key={project.name} project={project} index={i} />
        ))}
      </div>

      {/* Mobile: unified accordion (one open at a time, Kalvora default) */}
      <div className="md:hidden space-y-2">
        {projects.map((project, i) => (
          <CompactProjectRow
            key={project.name}
            project={project}
            index={i}
            isExpanded={expandedIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </div>
    </section>
  );
}
