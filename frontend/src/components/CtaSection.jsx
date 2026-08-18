import { Phone } from "lucide-react";
import { site } from "@/config/site";
import { Reveal } from "@/components/shared";

const CtaSection = () => {
  const { cta, company } = site;

  return (
    <section data-testid="cta-section" className="bg-cream px-6 pb-20 md:px-12 md:pb-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-forest px-8 py-14 text-center shadow-[0_24px_60px_rgb(30,63,32,0.28)] md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/5"
            aria-hidden="true"
          />
          <h2
            data-testid="cta-title"
            className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {cta.text}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              data-testid="cta-primary-btn"
              className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-forest transition-colors duration-200 hover:bg-sand"
            >
              {cta.primaryCta}
            </a>
            <a
              href={company.phoneHref}
              data-testid="cta-call-btn"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {cta.secondaryCta}: {company.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CtaSection;
