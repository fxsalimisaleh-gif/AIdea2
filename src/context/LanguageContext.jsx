import { createContext, useEffect, useState } from "react";
import en from "../locales/en";
import fa from "../locales/fa";

const dictionaries = { en, fa };

export const LanguageContext = createContext(null);

// این کانتکست زبان فعال، جهت صفحه (RTL/LTR) و متن‌های محلی را
// در کل اپلیکیشن مدیریت می‌کند تا کامپوننت‌ها مستقیماً import محتوا نداشته باشند
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("aidea-lang") : null;
    return stored === "fa" || stored === "en" ? stored : "en";
  });

  const t = dictionaries[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    document.title = t.meta.title;
    window.localStorage.setItem("aidea-lang", lang);
  }, [lang, t]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "fa" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, dir: t.dir, t, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
