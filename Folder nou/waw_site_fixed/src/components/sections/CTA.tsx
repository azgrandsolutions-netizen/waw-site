// src/components/sections/CTA.tsx
"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl p-4">
        <div className="rounded-3xl border p-8 sm:p-10 text-center">
          <h3 className="text-2xl font-bold">Ai un proiect sau o urgență?</h3>
          <p className="text-gray-600 mt-2">
            Scrie-ne câteva detalii și îți răspundem rapid cu o soluție.
          </p>
          <div className="mt-6 flex justify-center gap-3">
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
        </div>
      </div>
    </section>
  );
}
