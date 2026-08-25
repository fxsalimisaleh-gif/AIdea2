import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocale } from "../../hooks/useLocale";
import Button from "../../components/ui/Button";

// المان بصری امضادار هیرو: گراف انتزاعی از منابع پراکنده (اسناد، تیکت، چت)
// که به یک گره مرکزی پاسخ می‌رسند — دقیقاً مفهوم اصلی برند AIdea
function ReasoningGraph() {
  const nodes = [
    { x: 40, y: 60, label: "Docs" },
    { x: 40, y: 180, label: "Tickets" },
    { x: 40, y: 300, label: "Chat" },
    { x: 40, y: 400, label: "Wiki" },
  ];
  const center = { x: 300, y: 230 };

  return (
    <svg
      viewBox="0 0 420 460"
      className="h-full w-full"
      role="img"
      aria-label="Diagram showing scattered data sources converging into a single cited answer"
    >
      <defs>
        <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="nodeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* خطوط اتصال منابع پراکنده به گره مرکزی پاسخ */}
      {nodes.map((n, i) => (
        <motion.path
          key={n.label}
          d={`M ${n.x} ${n.y} C ${n.x + 120} ${n.y}, ${center.x - 120} ${center.y}, ${center.x} ${center.y}`}
          stroke="url(#edgeGradient)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
        />
      ))}

      <circle cx={center.x} cy={center.y} r="70" fill="url(#centerGlow)" />

      {nodes.map((n, i) => (
        <g key={n.label}>
          <motion.rect
            x={n.x - 34}
            y={n.y - 16}
            width="68"
            height="32"
            rx="9"
            fill="#121827"
            stroke="rgba(148,163,184,0.16)"
            initial={{ opacity: 0, x: n.x - 34 - 10 }}
            animate={{ opacity: 1, x: n.x - 34 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
          />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            fontSize="10"
            fontFamily="Inter, sans-serif"
            fill="#94A3B8"
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* گره مرکزی: پاسخ نهایی مستند */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <circle cx={center.x} cy={center.y} r="46" fill="#0F1422" stroke="url(#nodeGlow)" strokeWidth="1.5" />
        <path
          d={`M ${center.x - 14} ${center.y + 4} l 8 8 l 18 -18`}
          stroke="url(#nodeGlow)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.g>
    </svg>
  );
}

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" aria-hidden="true" />

      <div className="container-aidea relative grid grid-cols-1 items-center gap-14 pb-20 pt-16 lg:grid-cols-2 lg:pb-28 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-6 text-start"
        >
          <span className="rounded-full border border-border bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {t.hero.eyebrow}
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {t.hero.headline}
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">{t.hero.subtext}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to="/contact">
              {t.hero.ctaPrimary}
            </Button>
            <Button as="a" href="#introduction" variant="secondary">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </motion.div>

        {/* روی موبایل ویژوال بعد از متن و CTA قرار می‌گیرد؛ در دسکتاپ کنار متن */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-md"
        >
          <div className="animate-drift">
            <ReasoningGraph />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
