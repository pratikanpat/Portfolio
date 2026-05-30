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
  title: "Pratik Anpat — Full Stack Developer & Founder, Kalipr Labs",
  description:
    "Full Stack Developer & SaaS Product Builder. Founder of Kalipr Labs. Creator of Kalvora — used by 100+ interior designers across India.",
  keywords: [
    "Pratik Anpat",
    "Kalipr Labs",
    "Founder",
    "Full Stack Developer",
    "SaaS Product Builder",
    "Kalvora",
    "Software Products",
    "Pune India",
  ],
  authors: [{ name: "Pratik Anpat" }],
  openGraph: {
    title: "Pratik Anpat — Full Stack Developer & Founder, Kalipr Labs",
    description:
      "Full Stack Developer & SaaS Product Builder. Founder of Kalipr Labs. Creator of Kalvora.",
    url: "https://pratik.kaliprlabs.in",
    siteName: "Pratik Anpat",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Anpat — Full Stack Developer & Founder, Kalipr Labs",
    description:
      "Full Stack Developer & SaaS Product Builder. Founder of Kalipr Labs. Creator of Kalvora.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pratik Anpat",
              url: "https://pratik.kaliprlabs.in",
              jobTitle: ["Full Stack Developer", "SaaS Product Builder", "Founder"],
              worksFor: {
                "@type": "Organization",
                name: "Kalipr Labs",
                url: "https://kaliprlabs.in",
              },
              description:
                "Full Stack Developer & SaaS Product Builder. Founder of Kalipr Labs. Creator of Kalvora.",
              sameAs: [
                "https://www.linkedin.com/in/pratikanpat",
                "https://github.com/pratikanpat",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
