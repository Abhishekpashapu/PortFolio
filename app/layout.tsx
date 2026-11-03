import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { IntroOverlay } from "@/components/ui/intro-overlay";
import { CinematicLayer } from "@/components/ui/cinematic-layer";
import { profile } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abhi — Software, Embedded & IoT Engineer",
    template: "%s — Abhi",
  },
  description:
    "Engineering portfolio of Abhi, an Electronics and Communication Engineering graduate building software, embedded systems, IoT products and applied AI.",
  keywords: [
    "Abhi portfolio",
    "engineering portfolio",
    "electronics and communication",
    "embedded systems",
    "IoT",
    "Java full stack",
    "AI ML",
    "networking security",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Abhi — Engineering Portfolio",
    title: "Abhi — Software, Embedded & IoT Engineer",
    description:
      "Software, embedded systems, IoT and applied AI — an engineering portfolio built around honest, working prototypes.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Abhi — Engineering Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhi — Software, Embedded & IoT Engineer",
    description:
      "Software, embedded systems, IoT and applied AI — an engineering portfolio built around honest, working prototypes.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050508",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <CinematicLayer />
        <IntroOverlay />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
