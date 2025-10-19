// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendContactMail } from "@/lib/mail";

// RATE-LIMIT simplu în memorie (ephemeral). Pentru producție poți muta în KV/DB.
const WINDOW_MS = 60_000; // 1 minut
const MAX_REQS = 5;
const bucket = new Map<string, { count: number; ts: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const rec = bucket.get(ip);
  if (!rec || now - rec.ts > WINDOW_MS) {
    bucket.set(ip, { count: 1, ts: now });
    return false;
  }
  rec.count += 1;
  if (rec.count > MAX_REQS) return true;
  return false;
}

export async function POST(req: Request) {
  try {
    const ip =
      (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() ||
      "0.0.0.0";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Prea multe cereri. Încearcă puțin mai târziu." },
        { status: 429 }
      );
    }

    const data = await req.json().catch(() => ({}));
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Date invalide", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, message, token } = parsed.data;

    // Verificare dezactivată implicit — se reactivează când vrei (vezi .env)
    const VERIFY_MODE = (process.env.CONTACT_VERIFY ?? "off").toLowerCase();
    if (VERIFY_MODE === "turnstile") {
      const secret = process.env.TURNSTILE_SECRET;
      if (!secret) {
        return NextResponse.json(
          { ok: false, error: "Lipsește TURNSTILE_SECRET" },
          { status: 500 }
        );
      }
      if (!token) {
        return NextResponse.json(
          { ok: false, error: "Verificarea a eșuat (fără token)" },
          { status: 400 }
        );
      }
      // Dacă vei dori, readaug aici fetch la https://challenges.cloudflare.com/turnstile/v0/siteverify
      // Momentan, cum ai cerut, verificarea este „scoasă din uz”.
    }

    // Trimite email
    const clean = (s: string) => s.replace(/\r?\n/g, " ").trim();
    const subject = `[WAW] Mesaj nou — ${clean(name)} (${clean(email)})`;
    const text = [
      `Nume: ${name}`,
      `Email: ${email}`,
      phone ? `Telefon: ${phone}` : "",
      ``,
      `Mesaj:`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Helvetica,Arial,sans-serif;line-height:1.5">
        <h2 style="margin:0 0 12px 0">Mesaj nou din formular</h2>
        <p><b>Nume:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        ${phone ? `<p><b>Telefon:</b> ${escapeHtml(phone)}</p>` : ""}
        <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb" />
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    `;

    await sendContactMail({ subject, text, html });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Eroare la trimitere. Verifică setările de email." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
