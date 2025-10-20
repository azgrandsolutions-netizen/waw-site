import type { Metadata } from "next";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WAW • Servicii tehnice și renovări",
  description:
    "Intervenții rapide, mentenanță părți comune și renovări interioare. Estimare gratuită în 24h.",
};

// Layout pentru /[locale] – fără <html>/<body>
export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* FOOTER */}
      <Footer />

      {/* Bara lipicioasă pe mobil */}
      <StickyCTA />
    </>
  );
}
