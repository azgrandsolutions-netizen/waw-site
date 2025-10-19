// src/app/[locale]/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl p-4 text-center space-y-4">
        <h1 className="text-4xl font-extrabold">Pagina nu a fost găsită</h1>
        <p className="text-gray-600">
          Link-ul poate fi greșit sau pagina a fost mutată.
        </p>
        <div className="flex justify-center gap-3">
          <Link href="../" className="btn btn-primary">
            Înapoi la acasă
          </Link>
          <Link href="../contact" className="btn border rounded-2xl px-5 py-3">
            Contactează-ne
          </Link>
        </div>
      </div>
    </section>
  );
}
