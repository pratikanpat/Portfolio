"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  LayoutDashboard,
  Server,
  Brain,
  FlaskConical,
  Layers,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "systems", label: "Systems", icon: Server },
  { id: "thinking", label: "Thinking", icon: Brain },
  { id: "experiments", label: "Experiments", icon: FlaskConical },
  { id: "stack", label: "Stack", icon: Layers },
  { id: "contact", label: "Contact", icon: Mail },
];

interface MobileNavProps {
  activeSection: string;
}

export default function MobileNav({ activeSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="font-mono text-sm font-bold text-cyan">
          PRATIK.SYS
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-muted-light hover:text-cyan transition-colors cursor-pointer"
          aria-label="Toggle navigation"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Slide-in menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-surface border-l border-border p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="font-mono text-xs text-muted-light tracking-widest">
                  NAVIGATION
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-light hover:text-cyan cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1">
                <ul className="space-y-2">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollTo(item.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-md font-mono text-sm transition-all cursor-pointer ${
                            isActive
                              ? "text-cyan bg-cyan/5 border-glow"
                              : "text-muted-light hover:text-foreground hover:bg-surface-hover"
                          }`}
                        >
                          <item.icon size={16} />
                          <span>{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Social */}
              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/pratikanpat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-light hover:text-cyan transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/pratik-anpat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-light hover:text-cyan transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="mailto:pratikanpat89@gmail.com"
                    className="text-muted-light hover:text-cyan transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
