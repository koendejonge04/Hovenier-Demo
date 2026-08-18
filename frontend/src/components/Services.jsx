import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { Reveal, SectionHeading } from "@/components/shared";

const Services = () => {
  const { services } = site;

  return (
    <section
      id="diensten"
      data-testid="services-section"
      className="scroll-mt-24 bg-cream py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          intro={services.intro}
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <article
                data-testid={`service-card-${i}`}
                className="group h-full overflow-hidden rounded-2xl border border-line bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_44px_rgb(0,0,0,0.09)]"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-sage">
                    {service.text}
                  </p>
                  <a
                    href="#contact"
                    data-testid={`service-link-${i}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors duration-200 hover:text-forest-dark"
                  >
                    Vraag advies
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
