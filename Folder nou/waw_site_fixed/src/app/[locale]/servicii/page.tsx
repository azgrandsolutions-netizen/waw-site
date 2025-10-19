// src/app/[locale]/servicii/page.tsx
import Services from "@/components/sections/Services";

export const dynamic = "force-static";

export default function ServiciiPage() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl p-4 space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold">Servicii</h1>
          <p className="text-gray-600">
            Mentenanță părți comune, intervenții rapide, renovări interioare și
            management lucrări — coordonăm cap-coadă, cu un singur punct de
            contact.
          </p>
        </header>

        {/* Refolosim secțiunea existentă */}
        <Services />
      </div>
    </section>
  );
}
