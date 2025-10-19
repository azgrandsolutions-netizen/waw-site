export type Dict = Record<string, string>;
export type Locale = "nl" | "ro" | "en" | "pl" | "ru" | "uk" | "de";

export async function getDict(locale: Locale): Promise<Dict> {
  try {
    const mod = await import(`@/locales/${locale}/common.json`);
    return (mod.default ?? mod) as Dict;
  } catch {
    const fallback = await import("@/locales/ro/common.json");
    return (fallback.default ?? fallback) as Dict;
  }
}
