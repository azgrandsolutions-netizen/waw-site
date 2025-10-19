"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);
  return (
    <html>
      <body>
        <div className="mx-auto max-w-3xl p-6 text-center space-y-3">
          <h1 className="text-2xl font-bold">Eroare neașteptată</h1>
          <p className="text-gray-600">Ne pare rău. Încearcă din nou.</p>
          <button className="btn btn-primary" onClick={() => reset()}>
            Reîncarcă aplicația
          </button>
        </div>
      </body>
    </html>
  );
}
