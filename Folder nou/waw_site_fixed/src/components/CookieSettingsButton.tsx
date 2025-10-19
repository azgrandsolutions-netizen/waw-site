// src/components/CookieSettingsButton.tsx
"use client";

export default function CookieSettingsButton() {
  function handleClick() {
    try {
      localStorage.removeItem("azgs-consent");
      location.reload();
    } catch {}
  }

  return (
    <button onClick={handleClick} className="underline">
      Setări cookie
    </button>
  );
}
