import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { parseBody } from "@/lib/validation";
import { sendMail } from "@/lib/mail";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const isForm =
    (req.headers.get("content-type") || "").includes(
      "application/x-www-form-urlencoded"
    ) ||
    (req.headers.get("content-type") || "").includes("multipart/form-data");

  try {
    let data: any;
    if (isForm) {
      const form = await req.formData();
      data = Object.fromEntries(form.entries());
    } else {
      data = await req.json().catch(() => ({}));
    }

    const payload = parseBody(contactSchema, {
      name: String(data.name || ""),
      phone: String(data.phone || ""),
      email: String(data.email || ""),
      message: String(data.message || ""),
    });

    const subject = `WAW • Contact - ${payload.name}`;
    const text = `Nume: ${payload.name}
Telefon: ${payload.phone}
Email: ${payload.email || "-"}
Mesaj:
${payload.message}
`;

    await sendMail({
      subject,
      text,
      replyTo: payload.email || undefined,
    });

    if (isForm) {
      const referer = req.headers.get("referer");
      const back = referer ? new URL(referer) : new URL("/", req.url);
      back.searchParams.set("sent", "1");
      return NextResponse.redirect(back, 303);
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    if (isForm) {
      const referer = req.headers.get("referer");
      const back = referer ? new URL(referer) : new URL("/", req.url);
      back.searchParams.set("sent", "0");
      return NextResponse.redirect(back, 303);
    }
    return NextResponse.json(
      { ok: false, error: e?.message || "Error" },
      { status: 400 }
    );
  }
}
