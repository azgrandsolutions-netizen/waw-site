"use client";
import React from "react";

export type Service = {
  key: string;
  title: string;
  description: string;
};

const DEFAULT_SERVICES: Service[] = [
  {
    key: "mentenanta",
    title: "Mentenanță părți comune",
    description:
      "Intervenții rapide, revizii periodice, verificări instalații și raportare tehnică clară.",
  },
  {
    key: "renovari",
    title: "Renovări interioare",
    description:
      "Apartamente, case, birouri: finisaje premium, coordonare cap‑coadă, proiectare & execuție.",
  },
  {
    key: "instalatii",
    title: "Instalații (MEP)",
    description:
      "Electric, sanitar, HVAC: diagnostic corect, soluții conforme și punere în funcțiune.",
  },
  {
    key: "urgente",
    title: "Urgențe & avarii",
    description:
      "Echipe on‑call 24/7 pentru avarii majore, izolare zonă, remediere și readucere la normal.",
  },
];

export default function Services({
  items = DEFAULT_SERVICES,
}: {
  items?: Service[];
}) {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Serviciile noastre
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Tot ce ai nevoie, într‑un singur partener tehnic.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <article
              key={s.key}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/5 ring-1 ring-slate-900/10">
                {/* Simplu placeholder pentru icon – poate fi înlocuit cu un SVG dedicat */}
                <div className="h-4 w-4 rounded bg-slate-900/40" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {s.description}
              </p>
              <div className="mt-4 text-sm font-medium text-slate-900/60 opacity-0 transition group-hover:opacity-100">
                • Evaluări gratuite • Ofertare rapidă
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
