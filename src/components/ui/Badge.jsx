// نشان کوچک برای برچسب‌گذاری نقش تیم یا دسته‌بندی محتوا
export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs font-medium text-ink-soft ${className}`}
    >
      {children}
    </span>
  );
}
