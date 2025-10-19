// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WAW — Site",
  description: "Next.js 15 — Consent Mode v2, Basic Auth, Tailwind.",
};

const CONSENT_SNIPPET = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied'
  });
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" translate="no" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
        <script
          id="consent-default"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: CONSENT_SNIPPET }}
        />
      </head>
      <body
        className="min-h-screen bg-white antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
