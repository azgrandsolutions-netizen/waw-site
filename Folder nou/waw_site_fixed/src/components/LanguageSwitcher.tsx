// src/components/LanguageSwitcher.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/config/site";

export default function LanguageSwitcher({ current }: { current: string }) {
  const pathname = usePathname() || "/";

  function buildHref(target: string) {
    // sparge path-ul curent în segmente fără string-uri goale
    const segs = pathname.split("/").filter(Boolean);

    if (segs.length === 0) {
      // ești pe "/" (fără limbă) -> adaugă target ca prim segment
      return `/${target}`;
    }

    // dacă primul segment e o limbă, ÎL ÎNLOCUIM cu target
    if (LOCALES.includes(segs[0] as any)) {
      segs[0] = target;
    } else {
      // altfel, punem target ca prefix o singură dată
      segs.unshift(target);
    }

    return "/" + segs.join("/");
  }

  return (
    <nav aria-label="Language switcher" className="flex gap-2">
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={buildHref(l)}
          prefetch={false}
          aria-current={l === current ? "page" : undefined}
          className={`px-2 py-1 rounded ${
            l === current ? "bg-black text-white" : "hover:underline"
          }`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
