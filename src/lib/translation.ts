import { Locale } from "@/lib/i18n";

export async function getTranslations(locale: Locale) {
  try {
    const data = await import(`@/locales/${locale}/common.json`);
    return data.default;
  } catch {
    const fallback = await import("@/locales/ro/common.json");
    return fallback.default;
  }
}
