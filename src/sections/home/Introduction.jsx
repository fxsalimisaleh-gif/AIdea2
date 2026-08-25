import { useLocale } from "../../hooks/useLocale";
import AnimatedSection from "../../components/ui/AnimatedSection";
import SectionHeading from "../../components/ui/SectionHeading";

export default function Introduction() {
  const { t } = useLocale();

  return (
    <section id="introduction" className="section-y border-t border-border bg-bg-soft">
      <div className="container-aidea flex flex-col items-center gap-14">
        <AnimatedSection>
          <SectionHeading eyebrow={t.intro.eyebrow} heading={t.intro.heading} subtext={t.intro.body} />
        </AnimatedSection>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {t.intro.stats.map((stat, i) => (
            <AnimatedSection
              key={stat.label}
              delay={i * 0.1}
              className="rounded-card border border-border bg-card px-6 py-8 text-center"
            >
              <div className="text-gradient text-3xl font-extrabold sm:text-4xl">{stat.value}</div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
