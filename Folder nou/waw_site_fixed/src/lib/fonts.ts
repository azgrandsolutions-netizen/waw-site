import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

export const interSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});
