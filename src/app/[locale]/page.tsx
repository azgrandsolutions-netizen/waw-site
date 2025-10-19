// src/app/[locale]/page.tsx
export default function LocaleHome() {
  const locale = "ro"; // simplu, fără handlers => Server Component valid

  const links = [
    { href: `/${locale}/despre`, label: "Despre noi" },
    { href: `/${locale}/servicii`, label: "Servicii" },
    { href: `/${locale}/projecten`, label: "Proiecte" },
    { href: `/${locale}/oferta`, label: "Ofertă" },
    { href: `/${locale}/urgente`, label: "Urgențe 24/7" },
    { href: `/${locale}/contact`, label: "Contact" },
  ];

  return (
    <main style={{ padding: "2rem", maxWidth: 1100, margin: "0 auto" }}>
      <section style={{ marginBottom: "2rem" }}>
        <p style={{ opacity: 0.75, margin: 0 }}>WAW / AZGS</p>
        <h1
          style={{
            fontSize: "2.2rem",
            lineHeight: 1.2,
            margin: "0.25rem 0 0.5rem",
          }}
        >
          Servicii tehnice integrate — {locale.toUpperCase()}
        </h1>
        <p style={{ fontSize: "1.05rem", opacity: 0.9 }}>
          Intervenții rapide, mentenanță părți comune, renovări interioare,
          execuții complete.
        </p>
      </section>

      <nav
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "12px",
          marginBottom: "2rem",
        }}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              display: "block",
              border: "1px solid #e5e7eb",
              borderRadius: 14,
              padding: "14px 16px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            {l.label} →
          </a>
        ))}
      </nav>

      <section
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 16,
          padding: "18px 18px",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: 10, fontSize: "1.25rem" }}>
          De ce noi?
        </h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
          <li>Intervenții în aceeași zi pe Amsterdam & NL Nord-Holland</li>
          <li>Ofertare rapidă, comunicare directă pe WhatsApp</li>
          <li>Echipă completă: instalații, electric, finisaje, management</li>
        </ul>
      </section>
    </main>
  );
}
