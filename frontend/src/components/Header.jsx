import { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { site } from "@/config/site";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur-md transition-[box-shadow,border-color] duration-300 ${
        scrolled ? "border-line shadow-[0_4px_24px_rgb(0,0,0,0.06)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-12">
        <a
          href="#home"
          data-testid="logo-link"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest text-white">
            <Leaf className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-tight text-ink">
              {site.company.name}
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-sage">
              {site.company.suffix}
            </span>
          </span>
        </a>

        <nav
          data-testid="desktop-nav"
          className="hidden items-center gap-8 lg:flex"
          aria-label="Hoofdnavigatie"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm font-medium text-ink/80 transition-colors duration-200 hover:text-forest"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-testid="header-cta-btn"
            className="hidden rounded-lg bg-forest px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-forest-dark sm:inline-flex"
          >
            {site.ctaLabel}
          </a>
          <button
            type="button"
            data-testid="mobile-menu-toggle"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink transition-colors duration-200 hover:bg-sand lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="border-t border-line bg-white lg:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4" aria-label="Mobiele navigatie">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3.5 text-base font-medium text-ink transition-colors duration-200 last:border-0 hover:text-forest"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              data-testid="mobile-cta-btn"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-lg bg-forest px-5 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-forest-dark"
            >
              {site.ctaLabel}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
