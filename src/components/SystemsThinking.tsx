"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Rocket,
  MessageSquare,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Problem",
    description: "Identify a real pain point. Talk to users, observe workflows, find the friction.",
    example: "Creators juggling 5+ tools for client management",
  },
  {
    icon: Lightbulb,
    title: "Research",
    description: "Analyze existing solutions. Find the gap. Validate the market exists.",
    example: "Studied 10+ competitor tools, identified workflow gaps",
  },
  {
    icon: Rocket,
    title: "MVP",
    description: "Build the smallest thing that solves the core problem. Ship fast.",
    example: "Kalvora v1: proposals + invoicing in 3 weeks",
  },
  {
    icon: MessageSquare,
    title: "Feedback",
    description: "Put it in front of real users. Listen to what they say and what they do.",
    example: "Early users wanted better template customization",
  },
  {
    icon: RefreshCw,
    title: "Iterate",
    description: "Improve based on data, not assumptions. Kill features that don't work.",
    example: "Rebuilt the editor from scratch based on user sessions",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "Optimize performance, automate processes, grow the user base.",
    example: "Currently scaling Kalvora's acquisition channels",
  },
];

export default function SystemsThinking() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const handleInteraction = useCallback(
    (index: number, type: "enter" | "leave" | "tap") => {
      if (type === "tap") {
        // Touch device: toggle
        setIsTouchDevice(true);
        setActiveStep((prev) => (prev === index ? null : index));
      } else if (!isTouchDevice) {
        // Mouse device: hover behavior
        setActiveStep(type === "enter" ? index : null);
      }
    },
    [isTouchDevice]
  );

  return (
    <section id="thinking" className="section-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10 lg:mb-12"
      >
        <div className="font-mono text-[11px] text-muted tracking-widest mb-3">
          SYSTEM:// METHODOLOGY
        </div>
        <h2 className="text-3xl font-bold mb-3">
          How I <span className="text-cyan">Build</span> Products
        </h2>
        <p className="text-muted-light max-w-lg">
          Not just code. A systematic approach from problem identification to
          production-ready systems.
        </p>
      </motion.div>

      {/* Flow Pipeline */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        {steps.map((step, i) => {
          const isActive = activeStep === i;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => handleInteraction(i, "tap")}
              onMouseEnter={() => handleInteraction(i, "enter")}
              onMouseLeave={() => handleInteraction(i, "leave")}
              className={`relative p-4 lg:p-5 rounded-lg border transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-surface-hover border-cyan/30 glow-cyan-sm"
                  : "bg-surface border-border hover:border-border-active"
              }`}
            >
              {/* Step Number */}
              <div className="absolute top-3 right-3 lg:top-4 lg:right-4 font-mono text-[10px] text-muted">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div
                className={`mb-2 lg:mb-3 transition-colors ${
                  isActive ? "text-cyan" : "text-muted"
                }`}
              >
                <step.icon size={18} />
              </div>

              {/* Title */}
              <h3 className="font-mono text-xs lg:text-sm font-bold mb-1.5 lg:mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-[11px] lg:text-xs text-muted-light leading-relaxed mb-2 lg:mb-3">
                {step.description}
              </p>

              {/* Example — tap to toggle on mobile, hover on desktop */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-2 lg:pt-3 border-t border-border">
                  <div className="font-mono text-[10px] text-cyan mb-1">
                    REAL EXAMPLE
                  </div>
                  <p className="text-[11px] lg:text-xs text-foreground/70">{step.example}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
