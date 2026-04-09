"use client";

import { motion } from "framer-motion";

interface StatusIndicatorProps {
  status: "active" | "prototype" | "archived" | "complete";
  label?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

const statusConfig = {
  active: {
    color: "bg-success",
    glow: "shadow-[0_0_8px_var(--color-success)]",
    text: "text-success",
    label: "ACTIVE",
  },
  prototype: {
    color: "bg-warning",
    glow: "shadow-[0_0_8px_var(--color-warning)]",
    text: "text-warning",
    label: "PROTOTYPE",
  },
  archived: {
    color: "bg-muted",
    glow: "",
    text: "text-muted",
    label: "ARCHIVED",
  },
  complete: {
    color: "bg-cyan",
    glow: "shadow-[0_0_8px_var(--color-cyan)]",
    text: "text-cyan",
    label: "COMPLETE",
  },
};

const sizeConfig = {
  sm: "w-1.5 h-1.5",
  md: "w-2 h-2",
  lg: "w-3 h-3",
};

export default function StatusIndicator({
  status,
  label,
  showLabel = false,
  size = "md",
}: StatusIndicatorProps) {
  const config = statusConfig[status];
  const dotSize = sizeConfig[size];

  return (
    <div className="flex items-center gap-2">
      <motion.div
        className={`rounded-full ${dotSize} ${config.color} ${config.glow}`}
        animate={
          status !== "archived"
            ? { opacity: [1, 0.5, 1] }
            : undefined
        }
        transition={
          status !== "archived"
            ? { repeat: Infinity, duration: 2, ease: "easeInOut" }
            : undefined
        }
      />
      {showLabel && (
        <span className={`font-mono text-xs ${config.text}`}>
          {label || config.label}
        </span>
      )}
    </div>
  );
}
