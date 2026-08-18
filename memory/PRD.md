# PRD — Groen & Buiten Hoveniers (demo-template)

## Oorspronkelijke opdracht
Moderne, professionele, conversiegerichte DEMO-WEBSITE voor een fictief Nederlands hoveniersbedrijf "Groen & Buiten Hoveniers" (Amsterdam & omgeving). Compacte één-pagina-site die webdesign-klanten (hoveniers) overtuigt. Geen backend, geen echte formulierverwerking. Eenvoudig te dupliceren: alle content centraal in `frontend/src/config/site.js`, kleuren in `tailwind.config.js`.

## User persona's
- Webdesigner (eigenaar template): wil snel dupliceren/aanpassen per hovenier
- Hovenier (prospect): wil zien hoe professioneel zijn bedrijf online kan staan
- Eindklant hovenier (fictief): wil binnen 5 sec begrijpen wat het bedrijf doet en een offerte aanvragen

## Kernvereisten (statisch)
- Sticky header + mobiele hamburger, CTA "Offerte aanvragen"
- Hero met tuinfoto, headline, dual CTA, vertrouwensregel
- USP-balk (4 items), Diensten (4 kaarten), Over ons, Projecten (3), Reviews (3 fictief), CTA-sectie, Contact + formulier, Footer met subtiele DEMO-markering
- Donkergroen (#1E3F20) + wit/gebroken wit/aardetinten, veel witruimte, subtiele animaties
- Responsive, snelle laadtijd, semantische HTML, SEO-basis, formulier-validatie

## Architectuur
- Frontend-only (React + Tailwind + framer-motion + sonner). Backend niet gebruikt.
- Content-centraal: `frontend/src/config/site.js` (naam, contact, teksten, foto's, diensten, projecten, reviews)
- Kleuren/fonts: `frontend/tailwind.config.js` + `frontend/src/index.css`
- Componenten per sectie in `frontend/src/components/`

## Geïmplementeerd
- 2026-07: Volledige homepage (alle 10 secties), Nederlandse copy, responsive, getest op desktop + mobiel
- 2026-07: Contactformulier met client-side validatie + succesmelding (verstuurt niets — bewust, demo)
- 2026-07: Projectfoto's vervangen na visuele controle; alle externe afbeeldingen gecheckt op bereikbaarheid
- 2026-07: SEO-basis (nl lang, title, meta description, OG-tags), Google Fonts Outfit + Manrope

## Backlog / vervolgstappen
- P0: Formulier koppelen aan e-mail (bijv. Resend) zodra het voor een echte klant live gaat
- P0: Fictieve reviews vervangen door echte klantreviews (is in broncode gemarkeerd)
- P1: Privacyverklaring-pagina aanmaken (link is nu een placeholder)
- P1: Echte projectfoto's en logo van de hovenier
- P2: Extra dienstenpagina's, Google Maps-embed, cookiebanner

## Test-credentials
Geen authenticatie in deze demo. Formulier is client-side (MOCKED).
