// src/app/[locale]/page.tsx
export default function HomePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Bun venit la WAW</h1>
      <p className="mt-4 text-gray-600">
        Site protejat cu Basic Auth temporar, Consent Mode v2 activ (default
        denied), fonturi Inter + JetBrains Mono prin next/font, Tailwind
        configurat corect.
      </p>
    </section>
  );
}
