// src/components/ServiceGrid.tsx
"use client";

const services = [
  {
    title: "Mentenanță părți comune",
    bullets: [
      "Scări, holuri, subsoluri, parcări",
      "Consumabile, verificări, mici reparații",
      "Rapoarte periodice",
    ],
  },
  {
    title: "Intervenții rapide",
    bullets: [
      "Instalații electrice/sanitare",
      "Închideri provizorii",
      "Remedieri infiltrații",
    ],
  },
  {
    title: "Renovări interioare",
    bullets: [
      "Zugrăveli, pardoseli, tâmplărie",
      "Băi și bucătării",
      "Amenajări birouri",
    ],
  },
  {
    title: "Management lucrări",
    bullets: [
      "Planificare și bugetare",
      "Coordonare echipe",
      "Un singur punct de contact",
    ],
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <article key={s.title} className="rounded-2xl border bg-white p-6">
          <h3 className="font-semibold text-lg">{s.title}</h3>
          <ul className="mt-3 space-y-1 text-gray-700 list-disc pl-5">
            {s.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
