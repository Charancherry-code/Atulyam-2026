import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BlossomOverlay from "./components/BlossomOverlay";
import SkipToContent from "./components/SkipToContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atulyam-2026.example.com"),
  title: {
    default: "ATULYAM 2026",
    template: "%s | ATULYAM 2026",
  },
  keywords: [
    "ATULYAM 2026",
    "Haru no Stars",
    "cultural fest",
    "cherry blossoms",
  ],
  description:
    "ATULYAM 2026 — Haru no Stars. Where Cultures Bloom & Stars Shine.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ATULYAM 2026",
    description:
      "ATULYAM 2026 — Haru no Stars. Where Cultures Bloom & Stars Shine.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATULYAM 2026",
    description:
      "ATULYAM 2026 — Haru no Stars. Where Cultures Bloom & Stars Shine.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ff2a7a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BlossomOverlay count={36} />

        <SkipToContent />

        <main id="main-content" className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
