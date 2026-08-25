/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#080B14", // پس‌زمینه اصلی
          soft: "#0F1422", // پس‌زمینه ثانویه برای بخش‌بندی بصری
        },
        card: "#121827",
        border: {
          DEFAULT: "rgba(148, 163, 184, 0.12)",
          hover: "rgba(148, 163, 184, 0.24)",
        },
        primary: {
          DEFAULT: "#7C5CFF",
          dim: "#6647E0",
        },
        accent: {
          DEFAULT: "#22D3EE",
        },
        ink: {
          DEFAULT: "#F8FAFC", // متن اصلی
          soft: "#94A3B8", // متن ثانویه
          faint: "#64748B",
        },
      },
      fontFamily: {
        en: ["Inter", "sans-serif"],
        fa: ["Vazirmatn", "sans-serif"],
      },
      borderRadius: {
        btn: "12px",
        card: "20px",
        container: "24px",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(124, 92, 255, 0.35)",
        "glow-cyan": "0 0 60px -15px rgba(34, 211, 238, 0.25)",
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 20px 40px -20px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #7C5CFF 0%, #22D3EE 100%)",
        "radial-fade": "radial-gradient(circle at 50% 0%, rgba(124,92,255,0.15), transparent 60%)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-14px) translateX(6px)" },
        },
        "fade-up": {
          from: { opacity: 0, transform: "translateY(16px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        drift: "drift 8s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
