"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 rounded-2xl border bg-white/60 p-6 text-center text-sm text-gray-600 shadow-sm sm:mt-16 sm:p-10">
      <p className="font-medium text-gray-800">© {year} WAW Services</p>
      <p className="mt-1 text-gray-600">
        Soluții tehnice integrate • Renovări • Mentenanță rapidă
      </p>

      <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
        <a href="/privacy" className="hover:text-gray-800">
          Politica de confidențialitate
        </a>
        <a href="/cookies" className="hover:text-gray-800">
          Cookies
        </a>
        <a href="/termeni" className="hover:text-gray-800">
          Termeni și condiții
        </a>
      </div>

      <p className="mt-4 text-xs text-gray-400">
        Website realizat de AZGS Digital • www.azgs.nl
      </p>
    </footer>
  );
}
