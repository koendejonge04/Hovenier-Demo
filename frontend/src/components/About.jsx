import { ArrowRight, Leaf } from "lucide-react";
import { site } from "@/config/site";
import { Reveal } from "@/components/shared";

const About = () => {
  const { about } = site;

  return (
    <section
      id="over-ons"
      data-testid="about-section"
      className="scroll-mt-24 bg-white py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <img
              src={about.image}
              alt="Hovenier van Groen & Buiten aan het werk in een tuin"
              data-testid="about-image"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_20px_50px_rgb(0,0,0,0.10)] sm:aspect-[5/4] lg:aspect-[4/5]"
            />
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-xl border border-line bg-white px-5 py-4 shadow-[0_12px_36px_rgb(0,0,0,0.10)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest text-white">
                <Leaf className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-sm font-semibold text-ink">
                {about.badge}
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            {about.eyebrow}
          </p>
          <h2
            data-testid="about-title"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            {about.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-sage md:text-lg">
            {about.text}
          </p>
          <a
            href="#contact"
            data-testid="about-cta"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-forest px-6 py-3 text-sm font-semibold text-forest transition-colors duration-200 hover:bg-sand"
          >
            {about.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
