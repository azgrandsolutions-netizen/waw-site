"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile: any;
  }
}

export default function TurnstileBox({
  onToken,
}: {
  onToken: (token: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY;

  useEffect(() => {
    if (!sitekey) return;

    function render() {
      if (!window.turnstile || !ref.current) return;
      window.turnstile.render(ref.current, {
        sitekey,
        callback: (token: string) => onToken(token),
        "response-field": false,
        "c-data": "lead",
      });
      setLoaded(true);
    }

    // încarcă scriptul o singură dată
    const id = "cf-turnstile";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      s.async = true;
      s.defer = true;
      s.onload = render;
      document.head.appendChild(s);
    } else {
      render();
    }
  }, [onToken, sitekey]);

  return (
    <div ref={ref} className="my-2">
      {!loaded && (
        <span className="text-sm text-gray-500">Se încarcă validarea…</span>
      )}
    </div>
  );
}
