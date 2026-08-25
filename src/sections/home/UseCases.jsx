import { useLocale } from "../../hooks/useLocale";
import AnimatedSection from "../../components/ui/AnimatedSection";
import SectionHeading from "../../components/ui/SectionHeading";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

export default function UseCases() {
  const { t } = useLocale();

  return (
    <section className="section-y">
      <div className="container-aidea flex flex-col items-center gap-14">
        <AnimatedSection>
          <SectionHeading
            eyebrow={t.useCases.eyebrow}
            heading={t.useCases.heading}
            subtext={t.useCases.subtext}
          />
        </AnimatedSection>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
          {t.useCases.items.map((item, i) => (
            <AnimatedSection key={item.title} delay={(i % 2) * 0.1}>
              <Card className="flex h-full flex-col gap-4">
                <Badge>{item.role}</Badge>
                <h3 className="text-xl font-semibold leading-snug text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{item.desc}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
