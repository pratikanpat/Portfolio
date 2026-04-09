# PRATIK // SYSTEM — Portfolio

## Product Description

- **What:** A "System Interface / Control Room" portfolio website that positions Pratik Anpat as a systems-oriented product engineer
- **Who:** Recruiters, potential collaborators, and anyone interested in Pratik's work
- **Core problem:** Traditional portfolios are boring and don't showcase product thinking — this one feels like entering a futuristic operating system

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, SSG) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React + Custom SVG brand icons |
| Typography | JetBrains Mono (monospace) + Inter (sans) |
| Deployment | Vercel |
| DNS | Cloudflare CNAME → Vercel |

## Folder Structure

```
src/
├── app/
│   ├── api/contact/route.ts    # Contact form POST endpoint
│   ├── globals.css             # Design system (colors, glow effects, animations)
│   ├── layout.tsx              # Root layout (fonts, SEO meta, OG tags)
│   └── page.tsx                # Single-page assembly with scroll spy
├── components/
│   ├── icons.tsx               # Custom SVG brand icons (GitHub, LinkedIn)
│   ├── BootSequence.tsx        # Terminal-style typing intro animation
│   ├── Sidebar.tsx             # Fixed left nav (desktop ≥1024px)
│   ├── MobileNav.tsx           # Hamburger + slide-in panel (<1024px)
│   ├── DashboardHero.tsx       # Name, role, stats, Current Focus card
│   ├── StatusIndicator.tsx     # Reusable pulsing status dot
│   ├── SystemCard.tsx          # Project card + inline Case Study modal
│   ├── SystemsSection.tsx      # Featured projects grid (Kalvora, Quantimize, Smart-Bin)
│   ├── SystemsThinking.tsx     # "How I Build" 6-step methodology pipeline
│   ├── ExperimentsSection.tsx  # Side projects grid (VidASCII, FOSSEE, etc.)
│   ├── TechStackSection.tsx    # 3-tier tech stack (Primary/Tools/Exploring)
│   ├── MetricsPanel.tsx        # Animated counter stats + system status bar
│   └── ContactSection.tsx      # Contact form + direct channels + footer
```

## Core Features Implemented

- **Boot Sequence** — Terminal typing animation on first visit (session-persisted skip)
- **Scroll Spy Navigation** — IntersectionObserver-based active section highlighting
- **Case Study Modals** — Expandable project deep-dives (Problem → Solution → Outcome)
- **Animated Counters** — Count-up metrics triggered by scroll-into-view
- **Contact Form** — POST to `/api/contact` with validation
- **Responsive Layout** — Desktop sidebar ↔ mobile hamburger nav
- **Micro-interactions** — Hover glows, card lifts, status pulsing, example reveals

## Important Architecture / Logic

- **Single-page layout** — All sections stacked vertically, smooth scroll navigation
- **Client Components** — All components are `"use client"` for Framer Motion interactivity
- **Session persistence** — Boot sequence uses `sessionStorage` to skip on revisit
- **Design tokens** — All colors defined in `@theme inline` block in `globals.css` (Tailwind v4 syntax)
- **Brand icons** — GitHub/LinkedIn are custom SVG components in `icons.tsx` since `lucide-react` v1.8+ removed brand icons
- **Static generation** — All pages pre-rendered at build time (SSG), only `/api/contact` is dynamic

## Database Schema

N/A — Fully static site, no database needed.

## API Structure

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/contact` | POST | Accepts `{ name, email, message }`, validates, logs to console. Ready for email service integration (Resend/SendGrid). |

## Current Limitations

- Contact form only logs to console — needs email service integration for production
- No resume PDF in `/public/resume.pdf` — placeholder needed
- No OG image generated for social sharing
- Calendly link in contact section points to generic `calendly.com`
- GitHub username in links is `pratikanpat` — verify this is correct

## Product Roadmap

- [ ] Integrate email service (Resend) for contact form submissions
- [ ] Add actual resume PDF
- [ ] Generate OG image for social previews
- [ ] Add Calendly scheduling link
- [ ] Analytics integration (Vercel Analytics or Plausible)
- [ ] Blog/writing section (optional)
- [ ] Dark/light theme toggle (optional — currently dark-only)

## Usage Instructions

```bash
# Development
npm run dev          # Starts at http://localhost:3000

# Production build
npm run build        # Static generation
npm run start        # Serve production build

# Deploy
git push origin main # Auto-deploys via Vercel
```

### DNS Setup (Cloudflare → Vercel)
1. CNAME record: `pratik` → `cname.vercel-dns.com` (DNS only, no proxy)
2. Add `pratik.kaliprlabs.in` in Vercel project settings
3. Vercel auto-provisions SSL
