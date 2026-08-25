import { forwardRef } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-brand-gradient text-white shadow-glow hover:shadow-[0_0_70px_-10px_rgba(124,92,255,0.5)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-transparent text-ink border border-border hover:border-border-hover hover:bg-white/[0.03]",
  ghost: "bg-transparent text-ink-soft hover:text-ink",
};

// دکمه پایه با سه حالت: اصلی (گرادیانت برند)، ثانویه (border) و ghost
const Button = forwardRef(function Button(
  { as: Component = "button", variant = "primary", className = "", children, ...props },
  ref
) {
  return (
    <Component ref={ref} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
});

export default Button;
