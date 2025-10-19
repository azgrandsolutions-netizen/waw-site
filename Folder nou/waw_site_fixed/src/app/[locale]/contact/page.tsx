// src/app/[locale]/contact/page.tsx
import LeadForm from "@/components/LeadForm";
import { BUSINESS } from "@/config/business";

export const dynamic = "force-static";

export default function ContactPage() {
  const phoneTel = `tel:${BUSINESS.phoneE164}`;
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl p-4 space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="text-gray-600">
            Scrie-ne câteva detalii despre proiectul sau urgența ta și revenim
            rapid.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Formularul existent */}
          <div className="rounded-2xl border p-6 bg-white">
            <LeadForm />
          </div>

          {/* Detalii business */}
          <aside className="rounded-2xl border p-6 bg-white">
            <h2 className="text-xl font-semibold">Detalii de contact</h2>
            <div className="mt-3 space-y-2 text-gray-700">
              <div>
                <span className="font-medium">Telefon: </span>
                <a className="underline" href={phoneTel}>
                  {BUSINESS.phoneE164}
                </a>
              </div>
              <div>
                <span className="font-medium">WhatsApp: </span>
                <a
                  className="underline"
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deschide conversația
                </a>
              </div>
              <div>
                <span className="font-medium">Email: </span>
                <a className="underline" href={`mailto:${BUSINESS.email}`}>
                  {BUSINESS.email}
                </a>
              </div>
              <div className="mt-2">
                <div className="font-medium">Adresă</div>
                <div>
                  {BUSINESS.address.street}, {BUSINESS.address.postalCode}{" "}
                  {BUSINESS.address.city}, {BUSINESS.address.country}
                </div>
              </div>
              <div className="mt-2">
                <div className="font-medium">Program</div>
                <ul className="text-sm">
                  {BUSINESS.openingHours.map((x) => (
                    <li key={x.day}>
                      {x.day}: {x.hours}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hartă statică (placeholder) */}
            <div className="mt-6 rounded-xl overflow-hidden border">
              <iframe
                title="Hartă locație"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  `${BUSINESS.address.street}, ${BUSINESS.address.city}`
                )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="240"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
