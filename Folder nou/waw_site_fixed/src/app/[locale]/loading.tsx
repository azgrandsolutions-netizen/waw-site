export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl p-4">
      <div className="animate-pulse grid gap-4">
        <div className="h-10 w-2/3 rounded-xl bg-gray-200" />
        <div className="h-4 w-1/2 rounded-xl bg-gray-200" />
        <div className="h-48 w-full rounded-2xl bg-gray-200" />
      </div>
    </div>
  );
}
