import type { Metadata } from "next";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "AZGS",
  description: "Servicii tehnice integrate în Olanda",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}
