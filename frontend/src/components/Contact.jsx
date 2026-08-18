import { useState } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { site } from "@/config/site";
import { Reveal, SectionHeading } from "@/components/shared";

const initialValues = { naam: "", email: "", telefoon: "", bericht: "" };

const Contact = () => {
  const { contact, company } = site;
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [verzonden, setVerzonden] = useState(false);

  const setField = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  // DEMO: dit formulier verstuurt nog niets naar een backend.
  // Koppel hier later een e-mailservice (bijv. Resend) of een API-endpoint.
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!values.naam.trim()) errs.naam = "Vul uw naam in.";
    if (!values.email.trim()) errs.email = "Vul uw e-mailadres in.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      errs.email = "Vul een geldig e-mailadres in.";
    if (!values.bericht.trim())
      errs.bericht = "Vertel kort waar we u mee kunnen helpen.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setVerzonden(true);
    setValues(initialValues);
    toast.success("Bedankt voor uw aanvraag! We nemen binnen één werkdag contact met u op.");
  };

  const inputClass = (hasError) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-sage/60 focus:border-forest focus:ring-2 focus:ring-forest/15 ${
      hasError ? "border-red-400" : "border-line"
    }`;

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="scroll-mt-24 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          intro={contact.intro}
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <div data-testid="contact-details" className="space-y-7">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {company.name} {company.suffix}
                </h3>
                <p className="mt-1 text-sm text-sage">{site.footer.description}</p>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sand text-forest">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Werkgebied</p>
                    <p className="text-sm text-sage">{company.region}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sand text-forest">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Telefoon</p>
                    <a
                      href={company.phoneHref}
                      data-testid="contact-phone-link"
                      className="text-sm text-sage transition-colors duration-200 hover:text-forest"
                    >
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sand text-forest">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">E-mail</p>
                    <a
                      href={`mailto:${company.email}`}
                      data-testid="contact-email-link"
                      className="text-sm text-sage transition-colors duration-200 hover:text-forest"
                    >
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sand text-forest">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Reactietijd</p>
                    <p className="text-sm text-sage">
                      Binnen één werkdag reactie op uw aanvraag
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              data-testid="contact-form"
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-line bg-cream p-7 shadow-[0_12px_40px_rgb(0,0,0,0.05)] md:p-9"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                {contact.formTitle}
              </h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="naam" className="mb-1.5 block text-sm font-medium text-ink">
                    Naam <span className="text-clay">*</span>
                  </label>
                  <input
                    id="naam"
                    data-testid="form-naam-input"
                    type="text"
                    autoComplete="name"
                    placeholder="Uw naam"
                    value={values.naam}
                    onChange={setField("naam")}
                    className={inputClass(errors.naam)}
                  />
                  {errors.naam && (
                    <p data-testid="form-naam-error" className="mt-1.5 text-xs text-red-600">
                      {errors.naam}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                    E-mailadres <span className="text-clay">*</span>
                  </label>
                  <input
                    id="email"
                    data-testid="form-email-input"
                    type="email"
                    autoComplete="email"
                    placeholder="u@voorbeeld.nl"
                    value={values.email}
                    onChange={setField("email")}
                    className={inputClass(errors.email)}
                  />
                  {errors.email && (
                    <p data-testid="form-email-error" className="mt-1.5 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="telefoon" className="mb-1.5 block text-sm font-medium text-ink">
                    Telefoonnummer
                  </label>
                  <input
                    id="telefoon"
                    data-testid="form-telefoon-input"
                    type="tel"
                    autoComplete="tel"
                    placeholder="06 12 34 56 78"
                    value={values.telefoon}
                    onChange={setField("telefoon")}
                    className={inputClass(false)}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="bericht" className="mb-1.5 block text-sm font-medium text-ink">
                    Waar kunnen we u mee helpen? <span className="text-clay">*</span>
                  </label>
                  <textarea
                    id="bericht"
                    data-testid="form-bericht-input"
                    rows={4}
                    placeholder="Bijvoorbeeld: we willen onze achtertuin opnieuw laten aanleggen…"
                    value={values.bericht}
                    onChange={setField("bericht")}
                    className={`${inputClass(errors.bericht)} resize-none`}
                  />
                  {errors.bericht && (
                    <p data-testid="form-bericht-error" className="mt-1.5 text-xs text-red-600">
                      {errors.bericht}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                data-testid="contact-submit-btn"
                className="mt-7 w-full rounded-lg bg-forest px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-forest-dark sm:w-auto"
              >
                {contact.submitLabel}
              </button>
              {verzonden && (
                <p
                  data-testid="form-success-message"
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-forest"
                >
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Uw aanvraag is verzonden. We nemen snel contact met u op.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
