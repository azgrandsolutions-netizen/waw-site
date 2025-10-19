// src/components/sections/Process.tsx
"use client";

const steps = [
  {
    n: 1,
    t: "Cerere & evaluare",
    d: "Ne transmiți pe scurt ce ai nevoie; evaluăm gratuit.",
  },
  {
    n: 2,
    t: "Ofertă clară",
    d: "Trimitem costuri, durată, materiale, garanții.",
  },
  {
    n: 3,
    t: "Execuție",
    d: "Planificăm intervenția; lucrări curate și sigure.",
  },
  {
    n: 4,
    t: "Recepție & garanție",
    d: "Verificăm împreună; garanție pe lucrare.",
  },
];

export default function Process() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl p-4">
        <h2 className="text-3xl font-bold mb-8">Procesul nostru</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border p-6">
              <div className="text-4xl font-extrabold">
                {s.n.toString().padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-semibold">{s.t}</h3>
              <p className="mt-2 text-gray-600">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
