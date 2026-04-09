import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PRATIK // SYSTEM — Product Engineer & SaaS Builder",
  description:
    "I build products that people actually use — from idea to production. Full-stack developer, SaaS builder, and systems thinker based in Pune, India.",
  keywords: [
    "Pratik Anpat",
    "Product Engineer",
    "SaaS Builder",
    "Full Stack Developer",
    "Kalvora",
    "Portfolio",
  ],
  authors: [{ name: "Pratik Anpat" }],
  openGraph: {
    title: "PRATIK // SYSTEM — Product Engineer & SaaS Builder",
    description:
      "I build products that people actually use — from idea to production.",
    url: "https://pratik.kaliprlabs.in",
    siteName: "Pratik Anpat",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRATIK // SYSTEM",
    description:
      "I build products that people actually use — from idea to production.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
