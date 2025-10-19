// src/app/[locale]/head.tsx
export default function Head() {
  const GA = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <>
      {GA && (
        <>
          {/* Consent Mode v2 — default denied încă din head, doar pe server, fără hidratare */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'ad_storage': 'denied',
                  'analytics_storage': 'denied',
                  'functionality_storage': 'denied',
                  'security_storage': 'granted',
                  'personalization_storage': 'denied'
                });
              `,
            }}
          />
          {/* GA4 loader cât mai devreme */}
          <script
            async
            src={"https://www.googletagmanager.com/gtag/js?id=" + GA}
          />
        </>
      )}
    </>
  );
}
