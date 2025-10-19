import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold">Pagina nu a fost găsită</h1>
      <p className="mt-2 text-gray-600">
        Verifică adresa sau întoarce-te acasă.
      </p>
      <div className="mt-6">
        <Link
          href="../"
          className="rounded-xl border px-4 py-2 hover:bg-gray-50"
        >
          Înapoi
        </Link>
      </div>
    </section>
  );
}
