// src/components/sections/Testimonials.tsx
"use client";

const items = [
  {
    name: "Administrator ansamblu",
    text: "Intervenții rapide și oferă clară. Recomand!",
    loc: "Amsterdam",
  },
  {
    name: "Proprietar casă",
    text: "Lucrări curate, respectați la timp și buget.",
    loc: "Rotterdam",
  },
  {
    name: "Firma chiriașă",
    text: "Au organizat totul cap-coadă — zero stres.",
    loc: "Utrecht",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl p-4">
        <h2 className="text-3xl font-bold mb-8">Testimoniale</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl border p-6 bg-white">
              <blockquote className="text-gray-700">“{t.text}”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">
                {t.name} · {t.loc}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
