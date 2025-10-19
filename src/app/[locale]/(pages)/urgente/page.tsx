import Section from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

async function ReportedNotice() {
  const { headers } = await import("next/headers");
  const search = (headers().get("x-next-url") || "").split("?")[1] || "";
  const params = new URLSearchParams(search);
  const s = params.get("reported");
  if (!s) return null;
  const ok = s === "1";
  return (
    <div
      className={`mt-4 rounded-xl border p-3 text-sm ${
        ok
          ? "border-blue-200 bg-blue-50 text-blue-800"
          : "border-red-200 bg-red-50 text-red-800"
      }`}
    >
      {ok
        ? "Urgența a fost raportată. Revenim cu un apel cât mai rapid!"
        : "A apărut o eroare la trimitere. Te rugăm să ne suni."}
    </div>
  );
}

export const metadata = {
  title: "Urgențe — WAW",
  description: "Servicii de intervenție rapidă pentru clădiri și instalații.",
};

export default function UrgentePage() {
  const items = [
    {
      title: "Instalații electrice",
      text: "Scurtcircuite, întrerupătoare, tablouri, siguranțe.",
    },
    {
      title: "Instalații sanitare",
      text: "Scurgeri, țevi sparte, robineți, wc, chiuvete.",
    },
    { title: "Acces / închideri", text: "Uși/blocări, yale, ferestre." },
    {
      title: "Daune apă",
      text: "Detectare infiltrații, uscare locală, reparații gips-carton.",
    },
  ];

  return (
    <Section
      title="Urgențe"
      lead="Intervenim rapid pe aria ta pentru remedierea problemelor critice."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((x) => (
          <Card key={x.title} title={x.title}>
            <p className="text-sm text-gray-600">{x.text}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card p-5">
          <div className="mb-3 font-semibold">Zone acoperite</div>
          <div className="flex flex-wrap gap-2">
            {[
              "Amsterdam",
              "Rotterdam",
              "Utrecht",
              "Den Haag",
              "Leiden",
              "Haarlem",
              "Almere",
            ].map((c) => (
              <span key={c} className="rounded-full border px-3 py-1 text-xs">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="card p-5">
          <div className="mb-3 font-semibold">Tipuri de urgențe</div>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
            <li>Scurgeri apă / țevi sparte / infiltrații</li>
            <li>Scurtcircuite / întreruperi pe scară / tablouri</li>
            <li>Închideri provizorii uși/geamuri</li>
            <li>Daune post-furtună / siguranță acces</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 card p-5">
        <div className="mb-4 font-semibold">Raportează urgența</div>
        <form
          method="post"
          action="/api/lead"
          className="grid gap-4 md:grid-cols-2"
        >
          <div>
            <label className="block text-xs text-gray-500">Nume</label>
            <input
              name="name"
              required
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
          <div>
            <label className="block text-xs text-gray-500">
              Adresă (opțional)
            </label>
            <input
              name="address"
              placeholder="Stradă, nr., oraș"
              className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand/40"
            />
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
          <div className="md:col-span-2">
            <label className="block text-xs text-gray-500">
              Ce s-a întâmplat?
            </label>
            <textarea
              name="details"
              required
              rows={8}
              placeholder="Ex: țeavă spartă, infiltrații la etaj, întrerupere curent pe scară etc."
              className="mt-1 h-40 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand/40"
            />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="btn btn-primary">
              Trimite urgența
            </button>
          </div>
        </form>
        {/* @ts-expect-error Server Component */}
        <ReportedNotice />
      </div>
    </Section>
  );
}
