// src/lib/mail.ts
import nodemailer from "nodemailer";

function bool(v?: string | null) {
  return v === "1" || v === "true";
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure:
    bool(process.env.SMTP_SECURE) || Number(process.env.SMTP_PORT) === 465,
  auth: process.env.SMTP_USER
    ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    : undefined,
});

export async function sendMail(params: {
  subject: string;
  text: string;
  html?: string;
  to?: string;
  replyTo?: string;
}) {
  const from =
    process.env.MAIL_FROM || process.env.SMTP_USER || "no-reply@example.com";
  const to = params.to || process.env.MAIL_TO || from;

  await transporter.sendMail({
    from,
    to,
    subject: params.subject,
    text: params.text,
    html: params.html,
    replyTo: params.replyTo,
  });
}
