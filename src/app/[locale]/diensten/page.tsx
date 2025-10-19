export const dynamic = "force-static";

const servicii = [
  { title: "Instalații sanitare", desc: "Reparații. montaj. urgențe 24 7." },
  { title: "Instalații electrice", desc: "Diagnoză. remedieri. tablouri." },
  {
    title: "Zugrăveli și finisaje",
    desc: "Apartamente. birouri. spații comerciale.",
  },
  { title: "Mentenanță clădiri", desc: "Părți comune. verificări periodice." },
];

export default function ServiciiPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-extrabold">Servicii</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {servicii.map((s) => (
          <li key={s.title} className="rounded-2xl border p-4">
            <h2 className="font-bold">{s.title}</h2>
            <p className="text-gray-700">{s.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
