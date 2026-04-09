"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  { text: "PRATIK.SYS v2.0", delay: 0 },
  { text: "Initializing system...", delay: 400 },
  { text: "", delay: 700 },
  { text: "> Loading Product Engineering", delay: 900 },
  { text: "> Loading SaaS Systems", delay: 1200 },
  { text: "> Loading Startup Experiments", delay: 1500 },
  { text: "", delay: 1800 },
  { text: "All systems operational.", delay: 2000 },
  { text: "STATUS: READY", delay: 2400 },
];

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showEnter, setShowEnter] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleSkip = useCallback(() => {
    setIsExiting(true);
    setTimeout(onComplete, 500);
  }, [onComplete]);

  useEffect(() => {
    // Check if already seen this session
    if (typeof window !== "undefined" && sessionStorage.getItem("boot-seen")) {
      onComplete();
      return;
    }

    // Auto-skip after 8 seconds
    const autoSkip = setTimeout(() => {
      if (!showEnter) {
        setShowEnter(true);
      }
    }, 8000);

    // Show lines progressively
    bootLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(i + 1);
        if (i === bootLines.length - 1) {
          setTimeout(() => setShowEnter(true), 400);
        }
      }, line.delay);
    });

    return () => clearTimeout(autoSkip);
  }, [onComplete, showEnter]);

  const handleEnter = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("boot-seen", "1");
    }
    setIsExiting(true);
    setTimeout(onComplete, 500);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 bg-background flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 font-mono text-xs text-muted-light hover:text-cyan transition-colors cursor-pointer"
            id="skip-boot"
          >
            [ SKIP ]
          </button>

          {/* Scanline effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
            <div
              className="w-full h-[2px] bg-cyan"
              style={{ animation: "scanline 3s linear infinite" }}
            />
          </div>

          <div className="w-full max-w-xl px-6">
            {/* Terminal output */}
            <div className="font-mono text-sm leading-7">
              {bootLines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={
                    line.text === "STATUS: READY"
                      ? "text-cyan glow-text-cyan font-bold mt-2"
                      : line.text.startsWith(">")
                      ? "text-muted-light"
                      : line.text === "PRATIK.SYS v2.0"
                      ? "text-cyan text-lg font-bold"
                      : "text-foreground/70"
                  }
                >
                  {line.text || "\u00A0"}
                </motion.div>
              ))}

              {/* Typing cursor */}
              {visibleLines < bootLines.length && (
                <span className="typing-cursor" />
              )}
            </div>

            {/* Enter button */}
            <AnimatePresence>
              {showEnter && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-10"
                >
                  <button
                    onClick={handleEnter}
                    className="group font-mono text-sm border border-cyan/30 text-cyan px-8 py-3 hover:bg-cyan/10 hover:border-cyan/60 transition-all duration-300 cursor-pointer glow-cyan-sm"
                    id="enter-system"
                  >
                    <span className="group-hover:tracking-wider transition-all duration-300">
                      [ ENTER SYSTEM ]
                    </span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
