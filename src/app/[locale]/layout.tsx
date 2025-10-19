// src/app/[locale]/layout.tsx
import type { ReactNode } from "react";

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
