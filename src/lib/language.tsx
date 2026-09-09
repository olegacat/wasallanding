import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type SiteLang = "en" | "ar";

const STORAGE_KEY = "wasal:lang";

type LanguageContextValue = {
  lang: SiteLang;
  dir: "ltr" | "rtl";
  setLang: (lang: SiteLang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  dir: "ltr",
  setLang: () => {},
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<SiteLang>("en");

  // Read the stored preference after hydration so SSR markup stays stable.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((next: SiteLang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — in-memory preference still applies */
    }
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "ar" ? "en" : "ar");
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider value={{ lang, dir: lang === "ar" ? "rtl" : "ltr", setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** The Wasal slogan in both languages — single source of truth. */
export const SLOGAN = {
  en: "Connection … not just contact",
  ar: "وصال .. مش اتصال",
} as const;
