"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl p-4 text-center space-y-4">
        <h1 className="text-3xl font-extrabold">A apărut o eroare</h1>
        <p className="text-gray-600">Reîncearcă încă o dată.</p>
        <button className="btn btn-primary" onClick={() => reset()}>
          Reîncarcă secțiunea
        </button>
      </div>
    </section>
  );
}
