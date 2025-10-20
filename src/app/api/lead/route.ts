import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs"; // <- important pentru nodemailer (NU edge)
export const dynamic = "force-dynamic"; // evită cache pe rute API

// ✅ Validează payload-ul ca să nu pice ruta pe input prost
const LeadSchema = z.object({
  name: z.string().min(2, "Nume prea scurt"),
  email: z.string().email("Email invalid").optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  message: z.string().min(5, "Mesaj prea scurt"),
  source: z.string().optional().or(z.literal("")),
  consent: z.boolean().optional(),
});

function ensureEnv(...keys: string[]) {
  const missing = keys.filter((k) => !process.env[k] || process.env[k] === "");
  if (missing.length) {
    throw new Error(
      `MISCONFIGURED_SMTP: lipsesc variabilele ${missing.join(", ")}`
    );
  }
}

export async function POST(req: Request) {
  try {
    // Acceptă atât JSON cât și formData
    const contentType = req.headers.get("content-type") || "";
    let data: any;

    if (contentType.includes("application/json")) {
      data = await req.json();
    } else if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      const fd = await req.formData();
      data = Object.fromEntries(fd.entries());
    } else {
      return NextResponse.json(
        { ok: false, error: "UNSUPPORTED_CONTENT_TYPE" },
        { status: 415 }
      );
    }

    const parsed = LeadSchema.safeParse({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source: data.source ?? "website",
      consent: data.consent === true || data.consent === "true",
    });

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "VALIDATION_ERROR",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    ensureEnv(
      "SMTP_HOST",
      "SMTP_PORT",
      "SMTP_USER",
      "SMTP_PASS",
      "MAIL_TO",
      "MAIL_FROM"
    );

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT!) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true pentru 465
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    const { name, email, phone, message, source, consent } = parsed.data;

    const subject = `WAW Lead – ${name}${phone ? ` (${phone})` : ""}`;
    const text = [
      `Nume: ${name}`,
      email ? `Email: ${email}` : "",
      phone ? `Telefon: ${phone}` : "",
      `Sursă: ${source}`,
      `Consimțământ: ${consent ? "da" : "nu/nespecificat"}`,
      "",
      "Mesaj:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.5">
        <h2 style="margin:0 0 12px">Lead nou WAW</h2>
        <p><b>Nume:</b> ${escapeHtml(name)}</p>
        ${email ? `<p><b>Email:</b> ${escapeHtml(email)}</p>` : ""}
        ${phone ? `<p><b>Telefon:</b> ${escapeHtml(phone)}</p>` : ""}
        <p><b>Sursă:</b> ${escapeHtml(source || "")}</p>
        <p><b>Consimțământ:</b> ${consent ? "da" : "nu/nespecificat"}</p>
        <hr />
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      subject,
      text,
      html,
      replyTo: email && email.length ? email : undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Lead send error:", err);
    const msg =
      typeof err?.message === "string" ? err.message : "UNKNOWN_ERROR";
    const status = msg.startsWith("MISCONFIGURED_SMTP") ? 500 : 500;
    return NextResponse.json(
      { ok: false, error: "MAIL_SEND_FAILED", reason: msg },
      { status }
    );
  }
}

// ——— helpers ———
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ——— GET healthcheck ———
export async function GET() {
  return Response.json({ ok: true, route: "lead" });
}
