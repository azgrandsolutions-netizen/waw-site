// src/lib/mail.ts
import nodemailer from "nodemailer";

const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_SECURE,
  MAIL_USER,
  MAIL_PASS,
  MAIL_FROM,
  MAIL_TO,
} = process.env;

if (!MAIL_HOST || !MAIL_PORT || !MAIL_FROM || !MAIL_TO) {
  // Intenționat nu aruncăm eroare la import ca să poți porni dev fără .env,
  // dar la trimitere vom valida și vom returna un mesaj clar.
}

export function assertMailEnv() {
  const missing: string[] = [];
  if (!MAIL_HOST) missing.push("MAIL_HOST");
  if (!MAIL_PORT) missing.push("MAIL_PORT");
  if (!MAIL_FROM) missing.push("MAIL_FROM");
  if (!MAIL_TO) missing.push("MAIL_TO");
  if (missing.length) {
    throw new Error(
      `Lipsesc variabilele de mail: ${missing.join(
        ", "
      )}. Vezi .env.local.example`
    );
  }
}

export function createTransport() {
  const secure = String(MAIL_SECURE ?? "false").toLowerCase() === "true";
  return nodemailer.createTransport({
    host: MAIL_HOST,
    port: Number(MAIL_PORT),
    secure,
    auth:
      MAIL_USER && MAIL_PASS
        ? {
            user: MAIL_USER,
            pass: MAIL_PASS,
          }
        : undefined,
  });
}

export async function sendContactMail(opts: {
  subject?: string;
  html: string;
  text: string;
}) {
  assertMailEnv();
  const transporter = createTransport();
  await transporter.sendMail({
    from: process.env.MAIL_FROM!,
    to: process.env.MAIL_TO!,
    subject: opts.subject ?? "Mesaj nou din formularul de contact",
    text: opts.text,
    html: opts.html,
  });
}
