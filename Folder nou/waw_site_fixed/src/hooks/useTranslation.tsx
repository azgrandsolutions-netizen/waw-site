"use client";

import { useT } from "@/components/TranslationProvider";

export function useTranslation() {
  const t = useT();
  return { t };
}
