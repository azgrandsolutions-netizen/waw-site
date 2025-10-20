"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [ctaLoading, setCtaLoading] = useState(false);

  return (
    <section className="relative overflow-hidden rounded-2xl border bg-white/60 p-6 shadow-sm sm:p-10">
      {/* fundal decorativ simplu */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
          WAW • Renovări & Mentenanță rapidă
        </span>

        <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
          Reparații rapide, finisaje curate, <span className="whitespace-nowrap">fără bătăi de cap</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-balance text-sm text-gray-600 sm:text-base">
          Intervenții pentru părți comune ale clădirilor, renovări interioare și management complet al lucrării.
          Estimare gratuită în 24h și programare prioritizată.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#contact"
            onClick={() => setCtaLoading(true)}
            className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-white shadow transition hover:opacity-90 active:translate-y-px"
          >
            {ctaLoading ? "Se deschide..." : "Cere ofertă acum"}
          </Link>

          <a
            href="https://wa.me/31600000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 font-medium shadow-sm hover:bg-gray-50"
          >
            WhatsApp direct
          </a>
        </div>

        <ul className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-2 text-left text-sm text-gray-600 sm:grid-cols-3">
          <li className="rounded-xl border bg-white/70 px-3 py-2">
            ✅ Intervenții în 24–48h
          </li>
          <li className="rounded-xl border bg-white/70 px-3 py-2">
            ✅ Echipe proprii, asigurat
          </li>
          <li className="rounded-xl border bg-white/70 px-3 py-2">
            ✅ Factură & garanție lucrări
          </li>
        </ul>
      </div>
    </section>
  );
}
