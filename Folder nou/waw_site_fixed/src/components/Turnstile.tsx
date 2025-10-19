"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: { sitekey: string; callback: (token: string) => void }
      ) => void;
    };
  }
}

type TurnstileProps = {
  siteKey: string;
  onVerify: (token: string) => void;
};

export default function Turnstile({ siteKey, onVerify }: TurnstileProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || !window.turnstile) return;
    window.turnstile.render(ref.current, {
      sitekey: siteKey,
      callback: onVerify,
    });
  }, [siteKey, onVerify]);

  return <div ref={ref} />;
}
