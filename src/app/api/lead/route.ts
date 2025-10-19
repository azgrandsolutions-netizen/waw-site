import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validators";
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

    const payload = parseBody(leadSchema, {
      name: String(data.name || ""),
      phone: String(data.phone || ""),
      email: String(data.email || ""),
      address: String(data.address || ""),
      details: String(data.details || ""),
    });

    const subject = `WAW • Urgență - ${payload.name}`;
    const text = `Nume: ${payload.name}
Telefon: ${payload.phone}
Email: ${payload.email || "-"}
Adresă: ${payload.address || "-"}
Detalii:
${payload.details}
`;

    await sendMail({
      subject,
      text,
      replyTo: payload.email || undefined,
    });

    if (isForm) {
      const referer = req.headers.get("referer");
      const back = referer ? new URL(referer) : new URL("/", req.url);
      back.searchParams.set("reported", "1");
      return NextResponse.redirect(back, 303);
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    if (isForm) {
      const referer = req.headers.get("referer");
      const back = referer ? new URL(referer) : new URL("/", req.url);
      back.searchParams.set("reported", "0");
      return NextResponse.redirect(back, 303);
    }
    return NextResponse.json(
      { ok: false, error: e?.message || "Error" },
      { status: 400 }
    );
  }
}
