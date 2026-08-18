import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", y = 24 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ eyebrow, title, intro, align = "left" }) => (
  <Reveal
    className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
      {eyebrow}
    </p>
    <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
      {title}
    </h2>
    {intro && (
      <p className="mt-4 text-base leading-relaxed text-sage md:text-lg">
        {intro}
      </p>
    )}
  </Reveal>
);
