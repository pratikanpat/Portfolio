# PRATIK // SYSTEM — Portfolio

A "System Interface / Control Room" portfolio website that positions myself as a systems-oriented product engineer. The site feels like entering a futuristic operating system, focusing on a minimalist and scannable interface.

**Live Domain:** [pratik.kaliprlabs.in](https://pratik.kaliprlabs.in)

## Overview

Unlike traditional portfolios, this one focuses on product building and systems. It features a complete command-line/terminal boot sequence, dynamic status indicators, scroll-spy navigation, and case-study modals for featured products.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, SSG)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom SVGs
- **Forms/Email:** [Resend](https://resend.com) integration for the contact form
- **Deploy:** Vercel

## Key Features

- **Boot Sequence:** Terminal-style initialization typing animation (persists in session storage to not annoy returning users).
- **Smooth Navigation:** Client-side routing with `framer-motion` page transitions and intersection observers for active sidebar sections.
- **Project Modals:** Expands "Live Systems" into deep-dive case studies without navigating away from the dashboard.
- **Metrics Panel:** Animated scroll-triggered counters.
- **Contact API:** Next.js Server Route connected with `@resend/node` for direct email delivery.

## Local Development

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root and add your Resend API key:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## Deployment

The project is fully ready for static generation (`build` outputs a static bundle with the dynamic `/api/contact` API route). Recommended deployment platform is **Vercel** for optimal zero-config Next.js compatibility.

```bash
npm run build
npm run start
```

## Contact

- **Email:** pratikanpat89@gmail.com
- **LinkedIn:** [pratik-anpat](https://linkedin.com/in/pratik-anpat)
- **GitHub:** [pratikanpat](https://github.com/pratikanpat)

---
*Built with Next.js & Tailwind CSS. All systems operational.*
