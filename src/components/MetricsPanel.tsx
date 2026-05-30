"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Metric {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

const metrics: Metric[] = [
  {
    label: "PRODUCTS BUILT",
    value: 5,
    suffix: "+",
    description: "From concept to production",
  },
  {
    label: "MVPs SHIPPED",
    value: 3,
    suffix: "+",
    description: "Validated with real users",
  },
  {
    label: "IDEAS TESTED",
    value: 10,
    suffix: "+",
    description: "Experiments & prototypes",
  },
  {
    label: "STACK DEPTH",
    value: 6,
    suffix: "+",
    description: "Core technologies mastered",
  },
];

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan glow-text-cyan tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function MetricsPanel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-8 lg:mb-12"
      >
        <div className="font-mono text-[11px] text-muted tracking-widest mb-3">
          SYSTEM:// METRICS
        </div>
        <h2 className="text-3xl font-bold mb-3">
          System <span className="text-cyan">Metrics</span>
        </h2>
        <p className="text-muted-light max-w-lg">
          The numbers behind the work.
        </p>
      </motion.div>

      {/* Metrics Grid */}
      <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface border border-border rounded-lg p-4 lg:p-6 text-center hover:border-cyan/20 transition-all duration-300"
          >
            <div className="mb-2">
              <AnimatedCounter
                target={metric.value}
                suffix={metric.suffix}
                isVisible={isInView}
              />
            </div>
            <div className="font-mono text-[11px] text-muted tracking-widest mb-1">
              {metric.label}
            </div>
            <div className="text-xs text-muted-light">
              {metric.description}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Current Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-6 lg:mt-8 bg-surface border border-border rounded-lg p-4 lg:p-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-3">
            <span className="status-dot status-active" />
            <span className="font-mono text-sm text-foreground">
              SYSTEM STATUS: ALL OPERATIONAL
            </span>
          </div>
          <div className="font-mono text-xs text-muted-light">
            CURRENT FOCUS:{" "}
            <span className="text-cyan">AI + Automation + Scaling Kalvora</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
