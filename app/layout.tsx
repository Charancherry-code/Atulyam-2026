import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ATULYAM 2026",
    template: "%s | ATULYAM 2026",
  },
  description:
    "ATULYAM 2026 — Haru no Stars. Where Cultures Bloom & Stars Shine.",
  openGraph: {
    title: "ATULYAM 2026",
    description:
      "ATULYAM 2026 — Haru no Stars. Where Cultures Bloom & Stars Shine.",
    type: "website",
  },
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
        <a
          href="#main-content"
          className="absolute left-3 top-3 z-50 -translate-y-16 rounded-md bg-white px-3 py-2 text-black transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
