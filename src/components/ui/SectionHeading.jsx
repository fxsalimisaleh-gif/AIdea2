// الگوی ثابت عنوان بخش: eyebrow + H2 + توضیح کوتاه — در تمام بخش‌های صفحه استفاده می‌شود
export default function SectionHeading({ eyebrow, heading, subtext, align = "center" }) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-start items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">{heading}</h2>
      {subtext && <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{subtext}</p>}
    </div>
  );
}
