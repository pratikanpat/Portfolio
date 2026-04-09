"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      // Show only after user has scrolled a tiny bit
      setVisible(v > 0.005);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #00f0ff 0%, #00f0ff 80%, #00f0ffaa 100%)",
        boxShadow: "0 0 8px #00f0ff80, 0 0 2px #00f0ff",
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
