import type { Metadata } from "next";
import Script from "next/script";
import { interSans, mono } from "@/lib/fonts";
import CookieConsent from "@/components/CookieConsent";
import "../globals.css";

export const metadata: Metadata = {
  title: "WAW — Site",
  description: "Next.js 15 cu Consent Mode v2 și Basic Auth.",
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale} className={`${interSans.variable} ${mono.variable}`}>
      <head>
        {/* Consent Mode v2 — default denied */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white antialiased">
        <main className="min-h-[70vh]">{children}</main>
        <CookieConsent />
      </body>
    </html>
  );
}
