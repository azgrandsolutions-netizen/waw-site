import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { leadSchema, sanitize } from "@/lib/validators";
import { sendLeadMail } from "@/lib/email";

// rate limit simplu pentru dev
const WINDOW_MS = 60_000;
const MAX_REQ = 5;
const bucket = new Map<string, { count: number; ts: number }>();
function rateLimit(ip: string) {
  const now = Date.now();
  const item = bucket.get(ip);
  if (!item || now - item.ts > WINDOW_MS) {
    bucket.set(ip, { count: 1, ts: now });
    return true;
  }
  if (item.count >= MAX_REQ) return false;
  item.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
    if (!rateLimit(ip))
      return NextResponse.json(
        { ok: false, error: "Prea multe cereri" },
        { status: 429 }
      );

    const body = await req.json().catch(() => ({}));
    const parsed = leadSchema.safeParse(body);
    if (!parsed.success)
      return NextResponse.json(
        { ok: false, error: "Date invalide" },
        { status: 400 }
      );

    const p = parsed.data;
    if (p.honey && p.honey.trim()) return NextResponse.json({ ok: true });

    const clean = {
      name: sanitize(p.name),
      email: sanitize(p.email),
      phone: sanitize(p.phone),
      message: sanitize(p.message),
      address: sanitize(p.address || ""),
      source: sanitize(p.source || ""),
      locale: sanitize(p.locale),
    };

    const subject = `Lead ${clean.locale.toUpperCase()} — ${clean.name}`;
    const text = `Nume. ${clean.name}
Email. ${clean.email}
Telefon. ${clean.phone}
Adresă. ${clean.address}
Sursă. ${clean.source}
Mesaj.
${clean.message}`;
    const html = `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto">
  <h2>Lead nou</h2>
  <p><b>Nume</b> ${clean.name}</p>
  <p><b>Email</b> ${clean.email}</p>
  <p><b>Telefon</b> ${clean.phone}</p>
  <p><b>Adresă</b> ${clean.address}</p>
  <p><b>Sursă</b> ${clean.source}</p>
  <p><b>Mesaj</b><br/>${clean.message}</p>
</div>`;

    const result = await sendLeadMail(subject, text, html);
    return NextResponse.json({
      ok: true,
      message: "Lead trimis",
      messageId: result.messageId,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Eroare internă" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
