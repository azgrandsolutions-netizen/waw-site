// src/middleware.ts
import { NextResponse, type NextRequest } from "next/server";

// limbi suportate – trebuie să corespundă cu [locale]
const LOCALES = new Set(["nl", "ro", "en", "pl", "ru", "uk", "de"]);

// aliasuri simple de slug (cheie -> canonic)
const ALIASES: Record<string, string> = {
  proiecte: "projecten",
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const origPath = url.pathname; // ex: /uk/ro/nl/projecten
  const segments = origPath.split("/").filter(Boolean);

  // nimic de făcut pt. rădăcină / sau pt. rute fără locale
  if (segments.length === 0) return NextResponse.next();
  const first = segments[0];

  // dacă primul segment NU e o limbă, ieșim
  if (!LOCALES.has(first)) return NextResponse.next();

  // elimină orice prefixe de limbă apărute după primul
  const rest: string[] = [];
  for (let i = 1; i < segments.length; i++) {
    const seg = segments[i];
    if (LOCALES.has(seg)) continue; // aruncăm /ro /nl etc. apărute din greșeală
    // înlocuiește aliasurile (ex. proiecte -> projecten)
    rest.push(ALIASES[seg] ?? seg);
  }

  const normalizedPath = "/" + [first, ...rest].join("/");
  if (normalizedPath !== origPath) {
    const redirectUrl = new URL(url);
    redirectUrl.pathname = normalizedPath;
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

// aplică middleware pentru toate rutele publice (exclude _next, api, fișiere statice)
export const config = {
  matcher: [
    "/((?!_next/|api/|static/|favicon.ico|icon-192.png|icon-512.png|icon.svg).*)",
  ],
};
