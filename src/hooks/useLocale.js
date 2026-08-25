import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

// هوک ساده برای دسترسی به متن، جهت صفحه و تابع تغییر زبان در هر کامپوننت
export function useLocale() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LanguageProvider");
  }
  return ctx;
}
