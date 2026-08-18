# Groen & Buiten Hoveniers — Demo-website (template)

Moderne één-pagina demo-website voor een fictief Nederlands hoveniersbedrijf.
Gebouwd als herbruikbaar template: alle teksten, foto's en bedrijfsgegevens
staan centraal in één bestand.

## Lokaal draaien

Vereisten: **Node.js 18+** en **yarn** (`npm install -g yarn`).

```bash
cd frontend
yarn install
yarn start
```

De site draait daarna op http://localhost:3000

> De map `backend/` wordt door deze demo NIET gebruikt (er is bewust geen
> server of database nodig). Je kunt die map negeren of verwijderen.

## Productie-build maken

```bash
cd frontend
yarn build
```

De statische bestanden verschijnen in `frontend/build/`. Die map kun je op
elke willekeurige hosting (Netlify, Vercel, eigen webserver) plaatsen.

## Template aanpassen voor een andere hovenier

| Wat | Waar |
|---|---|
| Bedrijfsnaam, telefoon, e-mail, locatie | `frontend/src/config/site.js` |
| Alle teksten (hero, diensten, projecten, reviews) | `frontend/src/config/site.js` |
| Alle afbeeldingen (URL's) | `frontend/src/config/site.js` |
| Kleuren (donkergroen, aardetinten, etc.) | `frontend/tailwind.config.js` |
| Lettertypen | `frontend/tailwind.config.js` + `frontend/public/index.html` |
| SEO-titel en -beschrijving | `frontend/public/index.html` |

## Belangrijk voordat de site live gaat

- Het contactformulier verstuurt nog niets (demo). Koppel een e-mailservice
  of API in `frontend/src/components/Contact.jsx`.
- De reviews zijn fictief (gemarkeerd in `frontend/src/config/site.js` en
  `frontend/src/components/Reviews.jsx`). Vervang door echte klantreviews.
- De link "Privacyverklaring" in de footer is een placeholder.
