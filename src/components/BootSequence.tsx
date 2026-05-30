"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  { text: "PRATIK.SYS", delay: 0 },
  { text: "Initializing...", delay: 100 },
  { text: "", delay: 200 },
  { text: "> Founder, Kalipr Labs", delay: 250 },
  { text: "> Full Stack Developer · SaaS Product Builder", delay: 300 },
  { text: "> Creator of Kalvora", delay: 400 },
  { text: "", delay: 500 },
  { text: "STATUS: READY", delay: 600 },
];

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isExiting, setIsExiting] = useState(false);

  const handleComplete = useCallback(() => {
    if (isExiting) return;
    if (typeof window !== "undefined") {
      sessionStorage.setItem("boot-seen", "1");
    }
    setIsExiting(true);
    setTimeout(onComplete, 500);
  }, [onComplete, isExiting]);

  useEffect(() => {
    // Check if already seen this session
    if (typeof window !== "undefined" && sessionStorage.getItem("boot-seen")) {
      onComplete();
      return;
    }

    // Show lines progressively, then auto-proceed after the last line
    bootLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(i + 1);
      }, line.delay);
    });

    // Auto-proceed after the animation finishes + a brief pause to read "STATUS: READY"
    const lastLineDelay = bootLines[bootLines.length - 1].delay;
    const autoProceed = setTimeout(() => {
      handleComplete();
    }, lastLineDelay + 800);

    return () => clearTimeout(autoProceed);
  }, [onComplete, handleComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 bg-background flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >

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
                      : line.text === "PRATIK.SYS"
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
