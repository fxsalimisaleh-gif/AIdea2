// کارت پایه با استایل تیره و مینیمال، برای استفاده مجدد در بخش‌های مختلف
export default function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`rounded-card border border-border bg-card p-7 shadow-card ${
        hover ? "transition-colors duration-300 hover:border-border-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
