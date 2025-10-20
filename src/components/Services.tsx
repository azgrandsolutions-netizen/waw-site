"use client";

type Service = {
  title: string;
  desc: string;
  bullets: string[];
  emoji: string;
};

const SERVICES: Service[] = [
  {
    title: "Intervenții rapide",
    desc:
      "Remedieri pentru instalații, părți comune, uși, ferestre, infiltrații, electrice și sanitare.",
    bullets: ["Programare 24–48h", "Diagonostic pe loc", "Raport foto la final"],
    emoji: "⚡",
  },
  {
    title: "Renovări interioare",
    desc:
      "Finisaje curate: glet, vopsea, gresie/faiță, parchet, montaj uși, bucătării și băi.",
    bullets: ["Echipă proprie", "Curățenie la predare", "Garanție lucrări"],
    emoji: "🧱",
  },
  {
    title: "Mentenanță clădiri",
    desc:
      "Plan lunar de mentenanță pentru asociații, birouri și spații comerciale.",
    bullets: ["Checklist lunar", "Intervenții prioritare", "Facturare simplă"],
    emoji: "🏢",
  },
];

export default function Services() {
  return (
    <section className="rounded-2xl border bg-white/60 p-6 shadow-sm sm:p-10">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">Servicii principale</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Mentenanță părți comune, reparații instalații și renovări interioare — executate rapid și curat.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {SERVICES.map((s, i) => (
          <li
            key={i}
            className="group rounded-2xl border bg-white/70 p-5 shadow-sm transition
                       hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-3xl">{s.emoji}</div>
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{s.desc}</p>

            <ul className="mt-4 space-y-1 text-sm text-gray-700">
              {s.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full border" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium shadow-sm transition
                           hover:bg-gray-50 active:translate-y-px"
              >
                Cere ofertă
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
