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
  description: "ATULYAM 2026 — Haru no Stars. Where Cultures Bloom & Stars Shine.",
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
        {children}
      </body>
    </html>
  );
}
