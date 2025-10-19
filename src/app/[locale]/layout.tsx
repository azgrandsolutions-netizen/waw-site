// src/app/[locale]/layout.tsx
import type { Metadata, LayoutProps } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import "../globals.css";

export const metadata: Metadata = {
  title: "WAW — Site",
  description: "Next.js 15 — layout per locale",
};

// ✅ Layout corect pentru Next 15.5 (params e Promise)
export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { children } = props;
  const params = await props.params;
  const locale = params.locale;

  return (
    <>
      <Nav locale={locale} />
      <main className="min-h-[70vh]">{children}</main>
      <Footer locale={locale} />
      <CookieConsent />
    </>
  );
}
