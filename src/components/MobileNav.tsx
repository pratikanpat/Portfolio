"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Server,
  Brain,
  FlaskConical,
  Layers,
  Mail,
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
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 30 }}
        className="flex items-center gap-1 px-3 py-2.5 rounded-2xl border border-white/8 bg-[#0e0e0e]/85 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <DockItem
              key={item.id}
              item={item}
              isActive={isActive}
              onPress={() => scrollTo(item.id)}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

interface DockItemProps {
  item: { id: string; label: string; icon: React.ElementType };
  isActive: boolean;
  onPress: () => void;
}

function DockItem({ item, isActive, onPress }: DockItemProps) {
  return (
    <button
      onClick={onPress}
      id={`dock-${item.id}`}
      aria-label={item.label}
      className="relative flex flex-col items-center justify-center w-11 h-11 rounded-xl transition-all duration-200 cursor-pointer group"
    >
      {/* Active background glow */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            layoutId="dockActive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            className="absolute inset-0 rounded-xl bg-cyan/10 border border-cyan/20"
            style={{ boxShadow: "0 0 12px rgba(0,240,255,0.15)" }}
          />
        )}
      </AnimatePresence>

      {/* Icon */}
      <item.icon
        size={18}
        className={`relative z-10 transition-all duration-200 ${
          isActive
            ? "text-cyan"
            : "text-[#555] group-hover:text-[#888]"
        }`}
        style={isActive ? { filter: "drop-shadow(0 0 6px rgba(0,240,255,0.7))" } : {}}
      />

      {/* Active dot */}
      <div className="relative z-10 mt-0.5 h-1">
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="w-1 h-1 rounded-full bg-cyan mx-auto"
              style={{ boxShadow: "0 0 4px rgba(0,240,255,0.8)" }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Tooltip label on hover/focus */}
      <span className="absolute -top-9 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-wider text-cyan bg-[#0e0e0e]/90 border border-cyan/20 px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150">
        {item.label}
      </span>
    </button>
  );
}
