import Link from "next/link";
import { lhref } from "@/lib/paths";

export default function Nav({ locale }: { locale: string }) {
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href={lhref(locale, "/")} className="font-semibold">
          WAW
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link href={lhref(locale, "/")} className="hover:underline">
            Acasă
          </Link>
          <Link href={lhref(locale, "/urgente")} className="hover:underline">
            Urgențe
          </Link>
          <Link href={lhref(locale, "/contact")} className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
