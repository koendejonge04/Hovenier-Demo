// LET OP: alle reviews in deze sectie zijn FICTIEF en dienen uitsluitend
// als demo-content. Vervang ze door echte klantreviews (bijv. via Google
// Reviews) voordat deze website live gaat.
import { Quote, Star } from "lucide-react";
import { site } from "@/config/site";
import { Reveal, SectionHeading } from "@/components/shared";

const Reviews = () => {
  const { reviews } = site;

  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="scroll-mt-24 bg-cream py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading eyebrow={reviews.eyebrow} title={reviews.title} />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.items.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.08}>
              <figure
                data-testid={`review-card-${i}`}
                className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <div className="flex items-center justify-between">
                  <Quote className="h-7 w-7 text-forest/25" aria-hidden="true" />
                  <div className="flex gap-0.5" aria-label="5 van 5 sterren">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-clay text-clay"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-display text-sm font-semibold text-ink">
                    {review.name}
                  </p>
                  <p className="text-sm text-sage">{review.place}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
