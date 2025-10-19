// src/app/[locale]/oferta/page.tsx
import LeadFormMini from "@/components/LeadFormMini";

export const dynamic = "force-static";

export default function OfertaPage() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl p-4 space-y-8">
        <h1 className="text-3xl font-bold mb-6">Cere o ofertă personalizată</h1>
        <p className="text-gray-600">
          Fie că ai nevoie de renovare, mentenanță sau intervenție rapidă —
          trimite-ne datele tale și revenim în cel mai scurt timp.
        </p>

        {/* Formular mini pentru cerere rapidă */}
        <LeadFormMini />
      </div>
    </section>
  );
}
