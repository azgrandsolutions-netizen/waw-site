// src/app/[locale]/layout.tsx
import type { Metadata, LayoutProps } from "next";

export const metadata: Metadata = {
  title: "WAW — Site",
  description: "Next.js 15 — layout per locale (minimal)",
};

// Layout minimal: nu randăm nimic în afară de children
export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  // forțăm extragerea params ca să nu avem promisiuni ne-așteptate
  await props.params;
  return <>{props.children}</>;
}
