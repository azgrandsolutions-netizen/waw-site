// src/components/sections/About.tsx
"use client";

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl p-4 grid gap-8 sm:grid-cols-2 sm:items-center">
        <div className="rounded-3xl border p-4 sm:p-6 order-2 sm:order-1">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gray-100 grid place-items-center text-gray-500">
            Echipa / utilaje / flota
          </div>
        </div>
        <div className="order-1 sm:order-2">
          <h2 className="text-3xl font-bold">Despre noi</h2>
          <p className="mt-4 text-gray-600">
            Suntem o echipă cu experiență în mentenanță, reparații și renovări
            pentru clădiri rezidențiale și comerciale. Oferim comunicare clară,
            execuție responsabilă și garanție pe lucrări.
          </p>
          <ul className="mt-4 text-gray-700 list-disc pl-5">
            <li>Planificare și coordonare cap-coadă</li>
            <li>Verificări și rapoarte periodice</li>
            <li>Parteneriate pe termen lung cu administratori de imobile</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
