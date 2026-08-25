import { useState } from "react";
import { useLocale } from "../hooks/useLocale";
import AnimatedSection from "../components/ui/AnimatedSection";
import Button from "../components/ui/Button";

const fieldClass =
  "w-full rounded-btn border border-border bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-primary focus:outline-none";

export default function Contact() {
  const { t } = useLocale();
  const p = t.pages.contact;
  const [submitted, setSubmitted] = useState(false);

  // فرم فقط سمت کلاینت اعتبارسنجی می‌شود؛ اتصال واقعی به بک‌اند بعداً اضافه می‌شود
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section-y">
      <div className="container-aidea grid grid-cols-1 gap-14 lg:grid-cols-2">
        <AnimatedSection className="flex flex-col gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {p.eyebrow}
          </span>
          <h1 className="text-4xl font-extrabold leading-tight text-ink sm:text-5xl">{p.heading}</h1>
          <p className="max-w-md text-lg text-ink-soft">{p.subtext}</p>
          <p className="text-sm text-ink-faint">
            {p.direct} <span className="text-ink-soft">hello@aidea.ai</span>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-card border border-border bg-card p-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-ink">{p.form.submit} ✓</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-card border border-border bg-card p-7">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-ink-soft">
                  {p.form.name}
                </label>
                <input id="name" name="name" type="text" required className={fieldClass} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-ink-soft">
                  {p.form.email}
                </label>
                <input id="email" name="email" type="email" required className={fieldClass} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-sm font-medium text-ink-soft">
                  {p.form.company}
                </label>
                <input id="company" name="company" type="text" className={fieldClass} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-ink-soft">
                  {p.form.message}
                </label>
                <textarea id="message" name="message" rows={4} required className={fieldClass} />
              </div>

              <Button type="submit" className="mt-2 w-full">
                {p.form.submit}
              </Button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
