"use client";
export default function NavBarClient({ locale }: { locale: string }) {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="font-semibold">WAW</span>
        <span className="text-sm text-gray-500">locale: {locale}</span>
      </div>
    </header>
  );
}
