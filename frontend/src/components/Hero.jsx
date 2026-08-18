import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/config/site";

const Hero = () => {
  const { hero } = site;

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative flex min-h-[88vh] items-center overflow-hidden"
    >
      <img
        src={hero.image}
        alt="Moderne, groene tuin aangelegd door een hovenier"
        data-testid="hero-image"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p
            data-testid="hero-eyebrow"
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/85"
          >
            <span className="h-px w-10 bg-clay" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1
            data-testid="hero-title"
            className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {hero.title}
          </h1>
          <p
            data-testid="hero-subtitle"
            className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
          >
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              data-testid="hero-primary-cta"
              className="inline-flex items-center justify-center rounded-lg bg-forest px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-colors duration-200 hover:bg-forest-dark"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#projecten"
              data-testid="hero-secondary-cta"
              className="inline-flex items-center justify-center rounded-lg border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-forest"
            >
              {hero.secondaryCta}
            </a>
          </div>
          <p
            data-testid="hero-trust-line"
            className="mt-8 flex items-center gap-2 text-sm font-medium text-white/75"
          >
            <MapPin className="h-4 w-4 text-clay" aria-hidden="true" />
            {hero.trustLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
