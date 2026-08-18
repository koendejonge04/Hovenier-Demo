import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";

const Footer = () => {
  const { company, footer } = site;

  return (
    <footer data-testid="site-footer" className="bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 md:px-12 md:py-16">
        <div>
          <a href="#home" data-testid="footer-logo" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold tracking-tight">
                {company.name}
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                {company.suffix}
              </span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {footer.description}
          </p>
        </div>

        <nav aria-label="Footer navigatie" data-testid="footer-nav">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
            Navigatie
          </h3>
          <ul className="mt-4 space-y-2.5">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-testid={`footer-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
              {company.region}
            </li>
            <li>
              <a
                href={company.phoneHref}
                data-testid="footer-phone-link"
                className="flex items-center gap-2.5 transition-colors duration-200 hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                data-testid="footer-email-link"
                className="flex items-center gap-2.5 transition-colors duration-200 hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/55 sm:flex-row md:px-12">
          <p data-testid="footer-copyright">{footer.copyright}</p>
          <a
            href="#home"
            data-testid="footer-privacy-link"
            className="transition-colors duration-200 hover:text-white"
          >
            {footer.privacyLabel}
          </a>
        </div>
        <p
          data-testid="footer-demo-note"
          className="border-t border-white/5 py-3 text-center text-[11px] font-medium uppercase tracking-[0.24em] text-white/35"
        >
          {footer.demoNote}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
