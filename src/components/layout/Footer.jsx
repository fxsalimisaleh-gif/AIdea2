import { useLocale } from "../../hooks/useLocale";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  const columns = [
    { title: t.footer.product, links: t.footer.links.product },
    { title: t.footer.company, links: t.footer.links.company },
    { title: t.footer.resources, links: t.footer.links.resources },
    { title: t.footer.legal, links: t.footer.links.legal },
  ];

  return (
    <footer className="border-t border-border bg-bg-soft">
      <div className="container-aidea grid grid-cols-2 gap-10 py-16 sm:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-2 flex flex-col gap-3 sm:col-span-3 lg:col-span-2">
          <div className="flex items-center gap-2 text-lg font-bold text-ink">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-sm font-black text-white">
              A
            </span>
            AIdea
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">{t.footer.tagline}</p>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-ink-soft transition-colors hover:text-ink">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-aidea flex flex-col-reverse items-center justify-between gap-3 py-6 text-xs text-ink-faint sm:flex-row">
          <span>
            © {year} AIdea. {t.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
