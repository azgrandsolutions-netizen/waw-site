import Section from "@/components/ui/Section";

export const metadata = {
  title: "Contact — WAW",
  description: "Contactează-ne pentru oferte sau intervenții.",
};

// afișează mesajul după redirect-ul din API (?sent=1|0)
async function SentNotice() {
  const { headers } = await import("next/headers");
  const search = (headers().get("x-next-url") || "").split("?")[1] || "";
  const params = new URLSearchParams(search);
  const s = params.get("sent");
  if (!s) return null;
  const ok = s === "1";
  return (
    <div
      className={`mt-4 rounded-xl border p-3 text-sm ${
        ok
          ? "border-green-200 bg-green-50 text-green-800"
          : "border-red-200 bg-red-50 text-red-800"
      }`}
    >
      {ok
        ? "Cererea a fost trimisă. Îți răspundem cât mai repede!"
        : "A apărut o eroare la trimitere. Te rugăm să încerci din nou sau să ne suni."}
    </div>
  );
}

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      lead="Scrie-ne câteva detalii despre proiectul sau urgența ta și revenim rapid."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-5">
          <div className="mb-4 font-semibold">Cere ofertă rapidă</div>

          {/* FORM: trimite direct la API (fără server actions) */}
          <form
            method="post"
            action="/api/contact"
            className="grid grid-cols-1 gap-3"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-xs text-gray-500">Nume</label>
                <input
                  name="name"
                  required
                  placeholder="Nume"
                  className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand/40"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500">Telefon</label>
                <input
                  name="phone"
                  required
                  placeholder="+31 ..."
                  className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand/40"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500">
                Email (opțional)
              </label>
              <input
                name="email"
                type="email"
                placeholder="exemplu@mail.com"
                className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500">Mesaj</label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Descrie pe scurt ce ai nevoie, locația și intervalul preferat."
                className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>
            <div className="pt-1">
              <button type="submit" className="btn btn-primary">
                Trimite
              </button>
            </div>
          </form>

          {/* @ts-expect-error Server Component */}
          <SentNotice />
        </div>

        <div className="card p-5">
          <div className="mb-4 font-semibold">Detalii de contact</div>
          <div className="space-y-2 text-sm">
            <div>
              Telefon:{" "}
              <a className="underline" href="tel:+31612345678">
                +31 6 1234 5678
              </a>
            </div>
            <div>
              WhatsApp:{" "}
              <a
                className="underline"
                href="https://wa.me/31612345678"
                target="_blank"
              >
                Deschide conversația
              </a>
            </div>
            <div>
              Email:{" "}
              <a className="underline" href="mailto:contact@example.com">
                contact@example.com
              </a>
            </div>
            <div className="pt-2">
              <div className="font-medium">Adresă</div>
              <div>Straat 1, 1011AA Amsterdam, NL</div>
            </div>
            <div className="pt-2">
              <div className="font-medium">Program</div>
              <div>Mo–Fr: 08:00–18:00</div>
              <div>Sa: 10:00–14:00</div>
            </div>
            <div className="pt-3">
              <iframe
                title="Hartă"
                src="https://maps.google.com/maps?q=Amsterdam&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-56 w-full rounded-2xl border"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
