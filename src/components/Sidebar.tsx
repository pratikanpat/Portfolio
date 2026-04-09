"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Server,
  Brain,
  FlaskConical,
  Layers,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "systems", label: "Systems", icon: Server },
  { id: "thinking", label: "Thinking", icon: Brain },
  { id: "experiments", label: "Experiments", icon: FlaskConical },
  { id: "stack", label: "Stack", icon: Layers },
  { id: "contact", label: "Contact", icon: Mail },
];

interface SidebarProps {
  activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[260px] flex-col border-r border-border bg-background/95 backdrop-blur-sm z-40">
      {/* Logo / Identity */}
      <div className="px-6 pt-8 pb-6 border-b border-border">
        <button
          onClick={() => scrollTo("dashboard")}
          className="cursor-pointer text-left"
        >
          <div className="font-mono text-xs text-muted-light tracking-widest mb-1">
            SYSTEM://
          </div>
          <h1 className="font-mono text-lg font-bold text-cyan glow-text-cyan tracking-wide">
            PRATIK.SYS
          </h1>
        </button>
        <div className="flex items-center gap-2 mt-3">
          <span className="status-dot status-active" />
          <span className="font-mono text-xs text-success">ONLINE</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6">
        <div className="font-mono text-[10px] text-muted uppercase tracking-widest px-3 mb-4">
          Navigation
        </div>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md font-mono text-sm transition-all duration-200 cursor-pointer group relative ${
                    isActive
                      ? "text-cyan bg-cyan/5 border-glow"
                      : "text-muted-light hover:text-foreground hover:bg-surface-hover"
                  }`}
                  id={`nav-${item.id}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-cyan rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <item.icon
                    size={16}
                    className={
                      isActive
                        ? "text-cyan"
                        : isHovered
                        ? "text-foreground"
                        : "text-muted"
                    }
                  />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="px-6 py-6 border-t border-border">
        <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-3">
          Links
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/pratikanpat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-light hover:text-cyan transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/pratik-anpat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-light hover:text-cyan transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:pratikanpat89@gmail.com"
            className="text-muted-light hover:text-cyan transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://kalvora.kaliprlabs.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-light hover:text-cyan transition-colors"
            aria-label="Kalvora"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </aside>
  );
}
