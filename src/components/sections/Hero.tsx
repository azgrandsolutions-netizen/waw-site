// src/components/sections/Hero.tsx
"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl p-4 grid gap-8 sm:grid-cols-2 sm:items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Servicii tehnice integrate pentru clădiri în Olanda
          </h1>
          <p className="mt-4 text-gray-600">
            Mentenanță părți comune, intervenții rapide, renovări interioare,
            management lucrări — totul cu un singur partener.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/nl/oferta" className="btn btn-primary">
              Cere ofertă
            </Link>
            <Link
              href="/nl/contact"
              className="btn border rounded-2xl px-5 py-3"
            >
              Contact
            </Link>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600">
            <li>⏱️ Intervenții rapide</li>
            <li>🛠️ Lucrări garantate</li>
            <li>📆 Programări flexibile</li>
            <li>🧾 Facturare corectă</li>
          </ul>
        </div>
        <div className="rounded-3xl border p-4 sm:p-6">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gray-100 grid place-items-center text-gray-500">
            Foto proiect / înainte & după
          </div>
        </div>
      </div>
    </section>
  );
}
