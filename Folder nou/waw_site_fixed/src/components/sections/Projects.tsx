// src/components/sections/Projects.tsx
"use client";

const projects = [
  {
    title: "Reabilitare instalații",
    tag: "Condominiu",
    note: "Părți comune, 3 săptămâni",
  },
  {
    title: "Renovare apartament",
    tag: "Rezidențial",
    note: "Finisaje complete",
  },
  { title: "Reamenajare birouri", tag: "Office", note: "Open-space, 200 mp" },
  { title: "Intervenție urgență", tag: "Rapid", note: "Etaj 4, infiltrație" },
];

export default function Projects() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl p-4">
        <h2 className="text-3xl font-bold mb-8">Proiecte recente</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border bg-white overflow-hidden"
            >
              <div className="aspect-[4/3] bg-gray-100 grid place-items-center text-gray-500">
                Foto proiect
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-500">{p.tag}</div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{p.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
