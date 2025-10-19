// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WAW — Site",
  description: "Root layout minimal pentru izolare erori",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Root layout trebuie să returneze obligatoriu <html><body> în App Router
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
