// src/app/[locale]/layout.tsx
import type { ReactNode } from "react";
import type { Metadata } from "next";
import NavBarClient from "@/components/NavBarClient";
import FooterClient from "@/components/FooterClient";
import TranslationProvider from "@/components/TranslationProvider";
import EmergencyBanner from "@/components/EmergencyBanner";
import WhatsappFab from "@/components/WhatsappFab";
import { BASE_URL, LOCALES, type Locale } from "@/config/site";
import Script from "next/script"; // ⬅️ pentru JSON-LD

export const dynamic = "force-static";

const TITLES: Record<Locale, string> = {
  nl: "AZGS — Technische diensten voor gebouwen",
  ro: "AZGS — Servicii tehnice integrate",
  en: "AZGS — Integrated technical services",
  pl: "AZGS — Zintegrowane usługi techniczne",
  ru: "AZGS — Комплексные технические услуги",
  uk: "AZGS — Комплексні технічні послуги",
  de: "AZGS — Integrierte technische Dienstleistungen",
};

const DESCRIPTIONS: Record<Locale, string> = {
  nl: "Onderhoud, snelle interventies en renovaties in Nederland.",
  ro: "Mentenanță, intervenții rapide și renovări în Olanda.",
  en: "Maintenance, rapid interventions and renovations in the Netherlands.",
  pl: "Utrzymanie, szybkie interwencje i remonty w Holandii.",
  ru: "Обслуживание, быстрые выезды и ремонт в Нидерландах.",
  uk: "Обслуговування, швидкі виїзди та ремонти в Нідерландах.",
  de: "Wartung, schnelle Einsätze und Renovierungen in den Niederlanden.",
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (params.locale || "nl") as Locale;

  const alternates: Record<string, string> = {};
  for (const l of LOCALES) {
    alternates[l] = `${BASE_URL}/${l}`;
  }

  return {
    title: TITLES[locale],
    description: DESCRIPTIONS[locale],
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `/${locale}`,
      languages: alternates,
    },
    openGraph: {
      title: TITLES[locale],
      description: DESCRIPTIONS[locale],
      url: `/${locale}`,
      siteName: "AZGS",
      type: "website",
      images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "AZGS" }],
    },
    icons: {
      icon: [{ url: "/icon.svg" }],
      apple: [{ url: "/icon-192.png" }],
    },
  };
}

// JSON-LD (minim) pentru WebSite
function jsonLdWebsite(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AZGS",
    url: BASE_URL,
    inLanguage: locale,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/search?q={query}`,
      "query-input": "required name=query",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = (params.locale || "nl") as Locale;

  return (
    <>
      <TranslationProvider locale={locale}>
        <NavBarClient locale={locale} />
        <EmergencyBanner />
        <main className="mx-auto max-w-6xl p-4">{children}</main>
        <FooterClient />
        <WhatsappFab />
      </TranslationProvider>

      {/* JSON-LD injectat prin next/script — va apărea sigur în Elements */}
      <Script
        id="ld-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdWebsite(locale)),
        }}
      />
    </>
  );
}
