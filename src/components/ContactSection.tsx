"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-8 lg:mb-12"
      >
        <div className="font-mono text-[11px] text-muted tracking-widest mb-3">
          SYSTEM:// CONTACT
        </div>
        <h2 className="text-3xl font-bold mb-3">
          Working on an <span className="text-cyan">Interesting Problem</span>?
        </h2>
        <p className="text-muted-light max-w-lg">
          Need help building software? Have a project worth solving?
          Get in touch.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 lg:space-y-5"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="block font-mono text-[11px] text-muted tracking-widest mb-2"
            >
              NAME
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-surface border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all font-mono"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block font-mono text-[11px] text-muted tracking-widest mb-2"
            >
              EMAIL
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-surface border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all font-mono"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block font-mono text-[11px] text-muted tracking-widest mb-2"
            >
              MESSAGE
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-surface border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all font-mono resize-none"
              placeholder="Tell me about your idea or project..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className={`flex items-center gap-2 font-mono text-sm px-6 py-3 rounded-md transition-all duration-300 cursor-pointer ${
              status === "sent"
                ? "bg-success/10 border border-success/30 text-success"
                : status === "error"
                ? "bg-danger/10 border border-danger/30 text-danger"
                : "bg-cyan/10 border border-cyan/30 text-cyan hover:bg-cyan/20 hover:border-cyan/50 glow-cyan-sm"
            }`}
            id="submit-contact"
          >
            {status === "sending" && <Loader2 size={14} className="animate-spin" />}
            {status === "sent" && <CheckCircle size={14} />}
            {status === "idle" && <Send size={14} />}
            {status === "error" && <Send size={14} />}
            <span>
              {status === "idle" && "TRANSMIT_MESSAGE"}
              {status === "sending" && "TRANSMITTING..."}
              {status === "sent" && "MESSAGE DELIVERED"}
              {status === "error" && "TRANSMISSION FAILED — RETRY"}
            </span>
          </button>
        </motion.form>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {/* Direct channels — compact inline on mobile, stacked cards on desktop */}
          <div className="font-mono text-[11px] text-muted tracking-widest mb-3 lg:mb-4">
            DIRECT CHANNELS
          </div>

          {/* Mobile: compact icon row */}
          <div className="flex items-center gap-3 lg:hidden mb-4">
            <a
              href="mailto:pratikanpat89@gmail.com"
              className="flex items-center gap-2.5 px-4 py-2.5 bg-surface border border-border rounded-lg hover:border-cyan/20 transition-all flex-1"
            >
              <div className="p-1.5 bg-cyan/5 border border-cyan/10 rounded-md">
                <Mail size={14} className="text-cyan" />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[10px] text-muted">EMAIL</div>
                <div className="text-xs text-foreground/80 truncate">pratikanpat89@gmail.com</div>
              </div>
            </a>
          </div>
          <div className="flex items-center gap-2 lg:hidden mb-4">
            <a
              href="https://linkedin.com/in/pratik-anpat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 bg-surface border border-border rounded-lg hover:border-cyan/20 transition-all flex-1"
            >
              <div className="p-1.5 bg-cyan/5 border border-cyan/10 rounded-md">
                <LinkedinIcon size={14} className="text-cyan" />
              </div>
              <span className="font-mono text-xs text-foreground/80">LinkedIn</span>
            </a>
            <a
              href="https://github.com/pratikanpat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 bg-surface border border-border rounded-lg hover:border-cyan/20 transition-all flex-1"
            >
              <div className="p-1.5 bg-cyan/5 border border-cyan/10 rounded-md">
                <GithubIcon size={14} className="text-cyan" />
              </div>
              <span className="font-mono text-xs text-foreground/80">GitHub</span>
            </a>
          </div>

          {/* Desktop: stacked cards */}
          <a
            href="mailto:pratikanpat89@gmail.com"
            className="hidden lg:flex group items-center gap-4 p-4 bg-surface border border-border rounded-lg hover:border-cyan/20 hover:bg-surface-hover transition-all"
          >
            <div className="p-2 bg-cyan/5 border border-cyan/10 rounded-md group-hover:border-cyan/30 transition-all">
              <Mail size={18} className="text-cyan" />
            </div>
            <div>
              <div className="font-mono text-xs text-muted mb-0.5">EMAIL</div>
              <div className="text-sm text-foreground/80 group-hover:text-cyan transition-colors">
                pratikanpat89@gmail.com
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/pratik-anpat"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex group items-center gap-4 p-4 bg-surface border border-border rounded-lg hover:border-cyan/20 hover:bg-surface-hover transition-all"
          >
            <div className="p-2 bg-cyan/5 border border-cyan/10 rounded-md group-hover:border-cyan/30 transition-all">
              <LinkedinIcon size={18} className="text-cyan" />
            </div>
            <div>
              <div className="font-mono text-xs text-muted mb-0.5">
                LINKEDIN
              </div>
              <div className="text-sm text-foreground/80 group-hover:text-cyan transition-colors">
                pratik-anpat
              </div>
            </div>
          </a>

          <a
            href="https://github.com/pratikanpat"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex group items-center gap-4 p-4 bg-surface border border-border rounded-lg hover:border-cyan/20 hover:bg-surface-hover transition-all"
          >
            <div className="p-2 bg-cyan/5 border border-cyan/10 rounded-md group-hover:border-cyan/30 transition-all">
              <GithubIcon size={18} className="text-cyan" />
            </div>
            <div>
              <div className="font-mono text-xs text-muted mb-0.5">GITHUB</div>
              <div className="text-sm text-foreground/80 group-hover:text-cyan transition-colors">
                github.com/pratikanpat
              </div>
            </div>
          </a>

          {/* Quote — desktop only */}
          <div className="hidden lg:block mt-8 p-4 border-l-2 border-cyan/30">
            <p className="text-sm text-muted-light italic leading-relaxed">
              &ldquo;Building Kalvora. Working with a handful of clients.
              Learning how to build sustainable software businesses.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 lg:mt-20 pt-6 lg:pt-8 border-t border-border"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} PRATIK.SYS
          </div>
          <div className="font-mono text-xs text-muted">
            Built with Next.js · Deployed on Vercel
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-muted">
          <span>Founder of{" "}
            <a href="https://kaliprlabs.in" target="_blank" rel="noopener noreferrer" className="text-cyan/70 hover:text-cyan transition-colors">Kalipr Labs</a>
          </span>
          <span className="text-border">·</span>
          <span>Creator of{" "}
            <a href="https://kalvora.kaliprlabs.in" target="_blank" rel="noopener noreferrer" className="text-cyan/70 hover:text-cyan transition-colors">Kalvora</a>
          </span>
        </div>
      </motion.div>
    </section>
  );
}
