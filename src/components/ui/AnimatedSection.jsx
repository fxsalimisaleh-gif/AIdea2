import { motion } from "framer-motion";

// رپر انیمیشن ورود بخش‌ها هنگام اسکرول — یک‌بار اجرا می‌شود، بدون تکرار مزاحم
export default function AnimatedSection({ children, className = "", delay = 0, as = "div" }) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
