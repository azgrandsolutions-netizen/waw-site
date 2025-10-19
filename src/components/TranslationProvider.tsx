"use client";
export default function TranslationProvider({
  children,
}: {
  locale: string;
  dict: any;
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
