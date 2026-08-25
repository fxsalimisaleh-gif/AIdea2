import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "../../hooks/useLocale";
import Button from "../ui/Button";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // افکت شیشه‌ای فقط بعد از اسکرول فعال می‌شود تا هدر روی هیرو سبک بماند
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.features, to: "/features" },
    { label: t.nav.projects, to: "/projects" },
    { label: t.nav.contact, to: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-ink" : "text-ink-soft hover:text-ink"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur-lg" : "border-b border-transparent"
      }`}
    >
      <nav className="container-aidea flex h-18 items-center justify-between py-4" aria-label="Main">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-sm font-black text-white">
            A
          </span>
          AIdea
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Button as={NavLink} to="/contact" className="!px-5 !py-2.5">
            {t.nav.cta}
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path
                d="M1 4H17M1 9H17M1 14H17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* منوی موبایل — بازشونده با انیمیشن کوتاه، بدون افکت اضافه */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-border bg-bg md:hidden"
          >
            <div className="container-aidea flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-ink-soft hover:bg-white/[0.03] hover:text-ink"
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-2 flex items-center justify-between gap-3 px-3">
                <LanguageSwitcher />
                <Button as={NavLink} to="/contact" onClick={() => setMenuOpen(false)} className="flex-1 !py-2.5">
                  {t.nav.cta}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
