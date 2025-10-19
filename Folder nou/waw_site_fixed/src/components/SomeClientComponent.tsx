"use client";
import { useT } from "@/hooks/useT";

export default function SomeClientComponent() {
  const t = useT();
  return <h1>{t("home.title")}</h1>;
}
