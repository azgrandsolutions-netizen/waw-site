// src/config/site.ts
export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const LOCALES = ["nl", "ro", "en", "pl", "ru", "uk", "de"] as const;
export type Locale = (typeof LOCALES)[number];

/**
 * Listează DOAR rutele canonice (fără aliasuri/redirecturi).
 * Exemplu: folosim "projecten" ca slug canonic pentru "proiecte".
 */
export const PUBLIC_ROUTES: string[] = [
  "", // homepage pe fiecare limbă -> /nl, /ro, etc.
  "servicii",
  "projecten", // ← canonic; NU adăuga și "proiecte"
  "urgente",
  "oferta",
  "contact",
];
