import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ===== PAROLĂ TEMPORARĂ, HARD-CODATĂ =====
const ENABLED = true; // pune false la final ca să o oprești
const USER = "admin"; // user temporar
const PASS = "WawTemp123!"; // parolă temporară
// ========================================

export function middleware(req: NextRequest) {
  if (!ENABLED) return NextResponse.next();

  const basicAuth = req.headers.get("authorization");
  if (!basicAuth) {
    return new NextResponse("Authentication required.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    });
  }

  const [, base64] = basicAuth.split(" ");
  const [u, p] = Buffer.from(base64 || "", "base64")
    .toString()
    .split(":");

  if (u === USER && p === PASS) return NextResponse.next();

  return new NextResponse("Access denied.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
