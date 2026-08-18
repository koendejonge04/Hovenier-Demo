import { site } from "@/config/site";
import { Reveal } from "@/components/shared";

const UspBar = () => (
  <section data-testid="usp-bar" className="relative z-10 -mt-14 px-6 md:px-12">
    <Reveal className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 rounded-2xl border border-line bg-white p-8 shadow-[0_16px_48px_rgb(0,0,0,0.07)] sm:grid-cols-2 lg:grid-cols-4">
        {site.usps.map((usp) => (
          <div
            key={usp.title}
            data-testid={`usp-${usp.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            className="flex items-start gap-4"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sand text-forest">
              <usp.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-base font-semibold text-ink">
                {usp.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-sage">{usp.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

export default UspBar;
