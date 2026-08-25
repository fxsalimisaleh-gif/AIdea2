import { useLocale } from "../../hooks/useLocale";
import AnimatedSection from "../../components/ui/AnimatedSection";
import SectionHeading from "../../components/ui/SectionHeading";
import Card from "../../components/ui/Card";

// آیکون‌های خطی و انتزاعی سفارشی — بدون استفاده از تصاویر کلیشه‌ای هوش مصنوعی
const icons = [
  // Cited Answers — لینک/زنجیره
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <path d="M9 15L15 9M10 6l1.5-1.5a3.5 3.5 0 015 5L15 11M14 18l-1.5 1.5a3.5 3.5 0 01-5-5L9 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  // Cross-Source Reasoning — گره‌های متصل
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <circle cx="5" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="5" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="19" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 6.8L16.8 11M7 17.2L16.8 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  // Team Memory — لایه‌های روی هم
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <path d="M12 4l8 4-8 4-8-4 8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 12l8 4 8-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16l8 4 8-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Access-Aware — قفل
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  // Structured Output — جدول
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 10h16M9.5 5v14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  // Workflow Native — بلوک‌های وصل‌شده
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 7.5h4a2 2 0 012 2V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
];

export default function Features() {
  const { t } = useLocale();

  return (
    <section className="section-y">
      <div className="container-aidea flex flex-col items-center gap-14">
        <AnimatedSection>
          <SectionHeading
            eyebrow={t.features.eyebrow}
            heading={t.features.heading}
            subtext={t.features.subtext}
          />
        </AnimatedSection>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <AnimatedSection key={item.title} delay={(i % 3) * 0.08}>
                <Card className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
