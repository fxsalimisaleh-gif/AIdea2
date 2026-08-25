import { useLocale } from "../../hooks/useLocale";

// سوییچ زبان بین انگلیسی و فارسی — تغییر آن جهت کل صفحه را نیز به‌روزرسانی می‌کند
export default function LanguageSwitcher({ className = "" }) {
  const { lang, toggleLang } = useLocale();

  return (
    <button
      onClick={toggleLang}
      className={`inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-semibold text-ink-soft transition-colors hover:border-border-hover hover:text-ink ${className}`}
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "text-ink" : ""}>EN</span>
      <span className="text-ink-faint">/</span>
      <span className={lang === "fa" ? "text-ink" : ""}>فا</span>
    </button>
  );
}
