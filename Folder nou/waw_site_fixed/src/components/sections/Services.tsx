// src/components/sections/Services.tsx
"use client";

const items = [
  {
    title: "Mentenanță părți comune",
    desc: "Întreținere recurentă pentru scări, holuri, subsoluri, parcări; verificări, consumabile, mici reparații.",
  },
  {
    title: "Intervenții rapide",
    desc: "Remedieri urgente: instalații electrice / sanitare, închideri provizorii, infiltrații.",
  },
  {
    title: "Renovări interioare",
    desc: "Apartamente, case, birouri: finisaje, zugrăveli, pardoseli, tâmplărie, băi, bucătării.",
  },
  {
    title: "Management lucrări",
    desc: "Planificare, bugetare și coordonare echipe — un singur punct de contact.",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl p-4">
        <h2 className="text-3xl font-bold mb-8">Servicii principale</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border bg-white p-6">
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
