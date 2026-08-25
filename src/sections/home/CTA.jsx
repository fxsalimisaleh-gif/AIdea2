import { Link } from "react-router-dom";
import { useLocale } from "../../hooks/useLocale";
import AnimatedSection from "../../components/ui/AnimatedSection";
import Button from "../../components/ui/Button";

export default function CTA() {
  const { t } = useLocale();

  return (
    <section className="section-y border-t border-border bg-bg-soft">
      <div className="container-aidea">
        <AnimatedSection className="relative overflow-hidden rounded-container border border-border bg-card px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-radial-fade" aria-hidden="true" />
          <div className="relative flex flex-col items-center gap-5">
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
              {t.cta.heading}
            </h2>
            <p className="max-w-md text-base text-ink-soft">{t.cta.subtext}</p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button as={Link} to="/contact">
                {t.cta.ctaPrimary}
              </Button>
              <Button as={Link} to="/contact" variant="secondary">
                {t.cta.ctaSecondary}
              </Button>
            </div>
            <span className="text-xs text-ink-faint">{t.cta.note}</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
