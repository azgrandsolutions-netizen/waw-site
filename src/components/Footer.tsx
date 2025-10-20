"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="text-lg font-semibold text-slate-900">WAW</div>
            <p className="mt-2 text-sm text-slate-600">
              Servicii tehnice integrate în Olanda. Mentenanță, renovări,
              instalații.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Contact
            </div>
            <ul className="mt-3 space-y-1 text-sm text-slate-600">
              <li>Telefon: +31 ••• ••• •••</li>
              <li>Email: office@waw-site.nl</li>
              <li>Program: Luni–Vineri, 08:00–18:00</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Link-uri
            </div>
            <ul className="mt-3 space-y-1 text-sm text-slate-600">
              <li>
                <a className="hover:text-slate-900" href="#services">
                  Servicii
                </a>
              </li>
              <li>
                <a className="hover:text-slate-900" href="#lead-form-mini">
                  Cere ofertă
                </a>
              </li>
              <li>
                <a className="hover:text-slate-900" href="#">
                  Termeni & Politici
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} WAW. Toate drepturile rezervate.</p>
          <p>Construit cu Next.js</p>
        </div>
      </div>
    </footer>
  );
}
