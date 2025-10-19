import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEFAULT_LOCALE = "ro";
const LOCALES = new Set(["ro", "nl", "de", "pl", "ru", "uk"]); // după folderele tale din [locale]

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // dacă e root, du-l pe /ro
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}`;
    return NextResponse.redirect(url);
  }

  // dacă începe cu /[locale] valid, lasă-l să treacă
  const maybeLocale = pathname.split("/")[1];
  if (LOCALES.has(maybeLocale)) {
    return NextResponse.next();
  }

  // orice altceva lăsăm normal
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest).*)",
  ],
};
