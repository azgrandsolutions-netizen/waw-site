import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LeadFormMini from "@/components/LeadFormMini";

export default async function Page({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale || "ro";

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-8 sm:py-12">
      {/* HERO */}
      <Hero />

      {/* SERVICII */}
      <Services />

      {/* FORMULAR CONTACT */}
      <section
        id="contact"
        className="rounded-2xl border bg-white/60 p-6 shadow-sm sm:p-10"
      >
        <h2 className="text-2xl font-semibold">Cere ofertă</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Completează formularul și te contactăm în 24 de ore cu o estimare
          gratuită.
        </p>
        <div className="mt-6 max-w-xl">
          <LeadFormMini />
        </div>
      </section>
    </main>
  );
}
