"use client";

import { usePathname } from "next/navigation";

export default function SkipToContent() {
  const pathname = usePathname();

  // Hide the skip link on the home page (hero) to remove the small nav there
  if (pathname === "/") return null;

  return (
    <a
      href="#main-content"
      className="absolute left-3 top-3 z-50 -translate-y-16 rounded-md bg-white px-3 py-2 text-black transition focus:translate-y-0"
    >
      Skip to content
    </a>
  );
}
