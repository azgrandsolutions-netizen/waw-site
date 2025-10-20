"use client";

export default function StickyCTA() {
  return (
    <div
      className="
        fixed inset-x-0 bottom-0 z-40
        block sm:hidden
        border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70
      "
    >
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3">
        <a
          href="tel:+31600000000"
          className="flex-1 rounded-xl border px-4 py-3 text-center text-sm font-medium shadow-sm active:translate-y-px"
        >
          Sună
        </a>
        <a
          href="https://wa.me/31600000000"
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-xl border px-4 py-3 text-center text-sm font-medium shadow-sm active:translate-y-px"
        >
          WhatsApp
        </a>
        <a
          href="#contact"
          className="flex-[1.4] rounded-xl bg-black px-4 py-3 text-center text-sm font-medium text-white shadow active:translate-y-px"
        >
          Cere ofertă
        </a>
      </div>
      {/* spacer ca să nu acopere conținutul când apare banda */}
      <div className="h-2" />
    </div>
  );
}
