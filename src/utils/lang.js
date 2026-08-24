export const SUPPORTED_LANGS = ["en", "cs", "ru"];

export function getLangFromPath(pathname) {
  const first = pathname.split("/")[1];
  return SUPPORTED_LANGS.includes(first) ? first : "en";
}