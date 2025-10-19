"use client";

import { useEffect, useState } from "react";

function updateConsent(granted: boolean) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", {
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
    ad_storage: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
    functionality_storage: granted ? "granted" : "denied",
    personalization_storage: granted ? "granted" : "denied",
    security_storage: "granted",
  });
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("azgs-consent");
    if (!saved) setVisible(true);
    else updateConsent(saved === "granted");
  }, []);

  function acceptAll() {
    localStorage.setItem("azgs-consent", "granted");
    updateConsent(true);
    setVisible(false);
  }

  function rejectAll() {
    localStorage.setItem("azgs-consent", "denied");
    updateConsent(false);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-700">
          Folosim cookie-uri pentru analiză și marketing. Poți accepta sau
          respinge. Poți schimba opțiunea ulterior.
        </p>
        <div className="flex gap-2">
          <button
            onClick={rejectAll}
            className="rounded-2xl border px-4 py-2 text-sm font-semibold"
          >
            Respinge
          </button>
          <button
            onClick={acceptAll}
            className="rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-white"
          >
            Acceptă
          </button>
        </div>
      </div>
    </div>
  );
}
