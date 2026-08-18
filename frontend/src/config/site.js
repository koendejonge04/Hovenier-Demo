// ============================================================================
// SITE CONFIGURATIE — Groen & Buiten Hoveniers (DEMO-TEMPLATE)
// ----------------------------------------------------------------------------
// Dit bestand bevat ALLE bedrijfsgegevens en teksten van de website.
// Wil je deze template dupliceren voor een andere hovenier?
// Pas dan alleen dit bestand aan (en de kleuren in tailwind.config.js).
// ============================================================================

import {
  MessageSquareText,
  Award,
  ClipboardCheck,
  MapPin,
} from "lucide-react";

export const site = {
  // --- BEDRIJFSGEGEVENS -----------------------------------------------------
  company: {
    name: "Groen & Buiten",
    suffix: "Hoveniers",
    region: "Amsterdam & omgeving",
    phone: "06 12 34 56 78",
    phoneHref: "tel:+31612345678",
    email: "info@groen-en-buiten-demo.nl",
  },

  // --- NAVIGATIE -------------------------------------------------------------
  nav: [
    { label: "Home", href: "#home" },
    { label: "Diensten", href: "#diensten" },
    { label: "Over ons", href: "#over-ons" },
    { label: "Projecten", href: "#projecten" },
    { label: "Contact", href: "#contact" },
  ],
  ctaLabel: "Offerte aanvragen",

  // --- HERO ------------------------------------------------------------------
  hero: {
    eyebrow: "Hoveniersbedrijf · Amsterdam & omgeving",
    title: "Uw tuin, professioneel aangelegd en onderhouden.",
    subtitle:
      "Van complete tuinaanleg tot zorgvuldig tuinonderhoud. Groen & Buiten zorgt voor een tuin waar u jarenlang van geniet.",
    primaryCta: "Vraag een vrijblijvende offerte aan",
    secondaryCta: "Bekijk onze projecten",
    trustLine: "Actief in Amsterdam en omgeving",
    image:
      "https://images.unsplash.com/photo-1668120089662-42642838cfef?auto=format&fit=crop&w=2000&q=80",
  },

  // --- USP-BALK ---------------------------------------------------------------
  usps: [
    {
      icon: MessageSquareText,
      title: "Persoonlijk advies",
      text: "We denken mee vanaf het eerste idee.",
    },
    {
      icon: Award,
      title: "Vakmanschap",
      text: "Ervaren hoveniers met oog voor detail.",
    },
    {
      icon: ClipboardCheck,
      title: "Vrijblijvende offerte",
      text: "Heldere prijzen, zonder verrassingen.",
    },
    {
      icon: MapPin,
      title: "Amsterdam & omgeving",
      text: "Lokaal actief, snel ter plaatse.",
    },
  ],

  // --- DIENSTEN ----------------------------------------------------------------
  services: {
    eyebrow: "Onze diensten",
    title: "Van ontwerp tot onderhoud",
    intro:
      "Of u nu een compleet nieuwe tuin wilt aanleggen of uw bestaande tuin goed wilt onderhouden: wij helpen u van idee tot uitvoering.",
    items: [
      {
        title: "Tuinaanleg",
        text: "Een complete tuin die past bij uw woning, wensen en levensstijl.",
        image:
          "https://images.unsplash.com/photo-1597201278257-3687be27d954?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Tuinonderhoud",
        text: "Regelmatig en professioneel onderhoud zodat uw tuin er het hele jaar verzorgd uitziet.",
        image:
          "https://images.pexels.com/photos/32427439/pexels-photo-32427439.jpeg?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Tuinontwerp",
        text: "Een doordacht ontwerp waarin sfeer, functionaliteit en groen samenkomen.",
        image:
          "https://images.pexels.com/photos/35115306/pexels-photo-35115306.jpeg?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Bestrating & beplanting",
        text: "Van terrassen en paden tot beplanting die uw tuin compleet maakt.",
        image:
          "https://images.unsplash.com/photo-1700689807667-82630348b301?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },

  // --- OVER ONS -----------------------------------------------------------------
  about: {
    eyebrow: "Over ons",
    title: "Een tuin waar u elke dag van geniet",
    text: "Bij Groen & Buiten geloven we dat een tuin meer is dan alleen groen. Het is een plek om te ontspannen, samen te zijn en van buiten te genieten. We combineren vakmanschap met persoonlijk advies om iedere tuin passend te maken bij de klant.",
    cta: "Meer over ons",
    badge: "Lokale vakmensen",
    image:
      "https://images.pexels.com/photos/5163429/pexels-photo-5163429.jpeg?auto=format&fit=crop&w=1000&q=80",
  },

  // --- PROJECTEN ------------------------------------------------------------------
  projects: {
    eyebrow: "Projecten",
    title: "Recent gerealiseerde tuinen",
    intro:
      "Een selectie van tuinen waar we trots op zijn. Van compacte stadstuin tot complete aanleg.",
    items: [
      {
        title: "Moderne stadstuin",
        location: "Amsterdam-Zuid",
        text: "Een compacte stadstuin omgevormd tot groene oase met verhoogde borders, een strak terras en sfeervolle verlichting.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Sfeervolle achtertuin",
        location: "Amstelveen",
        text: "Van kale achtertuin naar een warme buitenruimte met natuurlijke beplanting en een beschutte zithoek.",
        image:
          "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Complete tuinaanleg",
        location: "Haarlem",
        text: "Volledige aanleg van ontwerp tot oplevering: bestrating, gazon en beplantingsplan in één traject.",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },

  // --- REVIEWS ---------------------------------------------------------------------
  // LET OP: dit zijn FICTIEVE reviews voor de demo.
  // Vervang deze door echte klantreviews voordat de website live gaat.
  reviews: {
    eyebrow: "Reviews",
    title: "Wat klanten over ons zeggen",
    items: [
      {
        quote:
          "Van het eerste ontwerp tot de aanleg verliep alles perfect. We zijn ontzettend blij met het resultaat.",
        name: "Mark & Sophie",
        place: "Amsterdam",
      },
      {
        quote:
          "Onze tuin wordt nu elk seizoen keurig onderhouden. Prettig contact, duidelijke afspraken en altijd netjes op tijd.",
        name: "Familie De Vries",
        place: "Amstelveen",
      },
      {
        quote:
          "Zeer vakkundig team. Het terras en de beplanting zijn prachtig geworden. Een echte aanrader.",
        name: "Jeroen Bakker",
        place: "Haarlem",
      },
    ],
  },

  // --- CTA-SECTIE ---------------------------------------------------------------------
  cta: {
    title: "Ook plannen voor uw tuin?",
    text: "Vertel ons wat u voor ogen heeft. We denken graag met u mee en maken vrijblijvend een voorstel.",
    primaryCta: "Vraag een vrijblijvende offerte aan",
    secondaryCta: "Bel direct",
  },

  // --- CONTACT -------------------------------------------------------------------------
  contact: {
    eyebrow: "Contact",
    title: "Vraag een vrijblijvende offerte aan",
    intro:
      "Laat uw gegevens achter en we nemen binnen één werkdag contact met u op.",
    formTitle: "Stuur ons een bericht",
    submitLabel: "Offerte aanvragen",
  },

  // --- FOOTER ----------------------------------------------------------------------------
  footer: {
    description:
      "Professionele tuinaanleg, tuinontwerp en tuinonderhoud in Amsterdam en omgeving.",
    privacyLabel: "Privacyverklaring",
    copyright: "© 2026 Groen & Buiten Hoveniers",
    demoNote: "DEMO WEBSITE — voorbeeld voor hoveniersbedrijven",
  },
};
