"use client";
import { useEffect, useState } from "react";

type ConsentState = "granted" | "denied" | "unset";
const KEY = "cookie-consent-v2";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem(KEY) as ConsentState) || "unset";
    setShow(saved === "unset");
  }, []);

  const setConsent = (next: Exclude<ConsentState, "unset">) => {
    // @ts-ignore
    window.gtag?.("consent", "update", {
      ad_storage: next === "granted" ? "granted" : "denied",
      analytics_storage: next === "granted" ? "granted" : "denied",
      ad_user_data: next === "granted" ? "granted" : "denied",
      ad_personalization: next === "granted" ? "granted" : "denied",
    });
    localStorage.setItem(KEY, next);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto mb-4 w-[min(100%-1rem,900px)] rounded-2xl border bg-white/90 p-4 shadow-xl backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6">
            Folosim cookie-uri pentru analiză. Implicit sunt <b>dezactivate</b>{" "}
            (Consent Mode v2).
          </p>
          <div className="flex gap-2">
            <button
              className="rounded-xl border px-3 py-2 text-sm"
              onClick={() => setConsent("denied")}
            >
              Respinge
            </button>
            <button
              className="rounded-xl bg-black px-3 py-2 text-sm text-white"
              onClick={() => setConsent("granted")}
            >
              Acceptă
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
