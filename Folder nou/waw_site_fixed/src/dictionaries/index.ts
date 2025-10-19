import nl from "./nl";
import ro from "./ro";
import en from "./en";

const maps = { nl, ro, en } as const;
export type Locale = keyof typeof maps;

export async function getDictionary(locale: string) {
  const key = (locale in maps ? locale : "nl") as Locale;
  return maps[key];
}
