"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import BootSequence from "@/components/BootSequence";
import ScrollProgress from "@/components/ScrollProgress";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import DashboardHero from "@/components/DashboardHero";
import SystemsSection from "@/components/SystemsSection";
import SystemsThinking from "@/components/SystemsThinking";
import ExperimentsSection from "@/components/ExperimentsSection";
import TechStackSection from "@/components/TechStackSection";
import MetricsPanel from "@/components/MetricsPanel";
import ContactSection from "@/components/ContactSection";

const SECTION_IDS = [
  "dashboard",
  "systems",
  "thinking",
  "experiments",
  "stack",
  "contact",
];

export default function Home() {
  const [showBoot, setShowBoot] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Check sessionStorage on mount to decide whether to show boot
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem("boot-seen")
    ) {
      setShowBoot(false);
    }
  }, []);

  // Scroll spy via Intersection Observer
  const setupObserver = useCallback(() => {
    // Disconnect any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    observerRef.current = observer;

    // Observe all sections
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!showBoot) {
      // Small delay to ensure DOM is ready after boot exits
      const timer = setTimeout(setupObserver, 100);
      return () => clearTimeout(timer);
    }
  }, [showBoot, setupObserver]);

  const handleBootComplete = useCallback(() => {
    setShowBoot(false);
  }, []);

  if (showBoot) {
    return <BootSequence onComplete={handleBootComplete} />;
  }

  return (
    <div className="min-h-screen bg-background grid-bg">
      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navigation */}
      <Sidebar activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />

      {/* Main Content — offset for sidebar on desktop, for mobile nav on mobile */}
      <main className="lg:ml-[260px] pt-14 lg:pt-0">
        <DashboardHero />
        <SystemsSection />
        <SystemsThinking />
        <ExperimentsSection />
        <TechStackSection />
        <MetricsPanel />
        <ContactSection />
      </main>
    </div>
  );
}
