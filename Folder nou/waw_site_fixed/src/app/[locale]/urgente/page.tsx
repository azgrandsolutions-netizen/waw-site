// src/app/[locale]/urgente/page.tsx
import LeadFormUrgente from "@/components/LeadFormUrgente";
import Link from "next/link";
import { PHONE_TEL, WHATSAPP_URL } from "@/config/contacts";

export const dynamic = "force-static";

export default function UrgentePage() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl p-4 space-y-10">
        <div className="rounded-3xl border p-6 sm:p-10 bg-white">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Urgențe tehnice — intervenim rapid
          </h1>
          <p className="mt-3 text-gray-600">
            Infiltrații, avarii instalații, scurtcircuite, închideri provizorii…
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={PHONE_TEL} className="btn btn-primary">
              📞 Sună acum
            </a>
            <a href={WHATSAPP_URL} className="btn border rounded-2xl px-5 py-3">
              💬 WhatsApp
            </a>
            <Link href="../oferta" className="btn border rounded-2xl px-5 py-3">
              Cere ofertă
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border p-6 bg-white">
            <h2 className="text-2xl font-bold">Zone acoperite</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Amsterdam",
                "Rotterdam",
                "Utrecht",
                "Den Haag",
                "Leiden",
                "Haarlem",
                "Almere",
              ].map((z) => (
                <span
                  key={z}
                  className="px-3 py-1 rounded-full border text-sm bg-gray-50"
                >
                  {z}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border p-6 bg-white">
            <h2 className="text-2xl font-bold">Tipuri de urgențe</h2>
            <ul className="mt-3 text-gray-700 list-disc pl-5 space-y-1">
              <li>Scurgeri apă / țevi sparte / infiltrații</li>
              <li>Scurtcircuite / întreruperi pe scară / tablouri</li>
              <li>Închideri provizorii uși/geamuri</li>
              <li>Daune post-furtună / siguranță acces</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border p-6 bg-white">
          <LeadFormUrgente />
        </div>
      </div>
    </section>
  );
}
