import { useLocale } from "../hooks/useLocale";
import AnimatedSection from "../components/ui/AnimatedSection";
import Card from "../components/ui/Card";

export default function About() {
  const { t } = useLocale();
  const p = t.pages.about;

  return (
    <>
      <section className="section-y">
        <div className="container-aidea flex flex-col gap-14">
          <AnimatedSection className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {p.eyebrow}
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              {p.heading}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="flex max-w-2xl flex-col gap-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>{p.body1}</p>
            <p>{p.body2}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-y border-t border-border bg-bg-soft">
        <div className="container-aidea flex flex-col gap-10">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">{p.valuesHeading}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {p.values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.desc}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
