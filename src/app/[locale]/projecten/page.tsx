// src/app/[locale]/projecten/page.tsx
export default function ProjectenPage() {
  return (
    <main style={{ padding: 24, maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ marginTop: 0 }}>Proiecte</h1>
      <p style={{ opacity: 0.9 }}>
        Aici vom lista proiectele finalizate și în desfășurare. (Versiune
        simplificată temporar)
      </p>

      <ul style={{ lineHeight: 1.8 }}>
        <li>Renovare apartament – Amsterdam</li>
        <li>Refacere instalații – Haarlem</li>
        <li>Modernizare birouri – Zaandam</li>
      </ul>
    </main>
  );
}
