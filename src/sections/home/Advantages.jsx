import { useLocale } from "../../hooks/useLocale";
import AnimatedSection from "../../components/ui/AnimatedSection";
import SectionHeading from "../../components/ui/SectionHeading";

export default function Advantages() {
  const { t } = useLocale();

  return (
    <section className="section-y border-t border-border bg-bg-soft">
      <div className="container-aidea flex flex-col items-center gap-14">
        <AnimatedSection>
          <SectionHeading eyebrow={t.advantages.eyebrow} heading={t.advantages.heading} />
        </AnimatedSection>

        <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-container border border-border bg-border sm:grid-cols-3">
          {t.advantages.items.map((item, i) => (
            <AnimatedSection
              key={item.title}
              delay={i * 0.1}
              className="flex flex-col gap-3 bg-bg-soft px-8 py-10"
            >
              <span className="h-1 w-8 rounded-full bg-brand-gradient" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{item.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
