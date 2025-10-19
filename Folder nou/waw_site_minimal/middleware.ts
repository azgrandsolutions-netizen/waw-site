import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ENABLED = true;           // Basic Auth activ
const USER = "admin";           // user temporar
const PASS = "WawTemp123!";     // parolă temporară

export function middleware(req: NextRequest) {
  if (!ENABLED) return NextResponse.next();

  const basicAuth = req.headers.get("authorization");
  if (!basicAuth) {
    return new NextResponse("Authentication required.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' }
    });
  }

  const [, base64] = basicAuth.split(" ");
  const decoded = Buffer.from(base64 || "", "base64").toString();
  const sep = decoded.indexOf(":");
  const u = sep >= 0 ? decoded.slice(0, sep) : "";
  const p = sep >= 0 ? decoded.slice(sep + 1) : "";

  if (u === USER && p === PASS) return NextResponse.next();

  return new NextResponse("Access denied.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' }
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
