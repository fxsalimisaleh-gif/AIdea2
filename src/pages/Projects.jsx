import { useLocale } from "../hooks/useLocale";
import AnimatedSection from "../components/ui/AnimatedSection";
import UseCasesSection from "../sections/home/UseCases";
import CTA from "../sections/home/CTA";

export default function Projects() {
  const { t } = useLocale();
  const p = t.pages.projects;

  return (
    <>
      <section className="section-y pb-0">
        <div className="container-aidea">
          <AnimatedSection className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {p.eyebrow}
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              {p.heading}
            </h1>
            <p className="mt-4 text-lg text-ink-soft">{p.subtext}</p>
          </AnimatedSection>
        </div>
      </section>

      <UseCasesSection />
      <CTA />
    </>
  );
}
