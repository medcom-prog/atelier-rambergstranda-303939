/**
 * Two-language content dictionary for Atelier Rambergstranda.
 * Norwegian Bokmål is canonical; English is a faithful translation of the
 * source content. Long-form pages (Visuelt konsept, Tomteanalyse, Tidslinje
 * deep prose) are stored in their pages and translated inline using t().
 */

export type Language = 'no' | 'en';

interface DictNo {
  common: {
    readMore: string; apply: string; contact: string; bookATime: string;
    sendInquiry: string; addToCart: string; browse: string; back: string;
    next: string; previous: string; from: string; photoCredit: string;
    siteName: string; tagline: string; projectBy: string;
  };
  nav: {
    home: string; about: string; visualConcept: string; siteAnalysis: string;
    timeline: string; betweenTides: string; booking: string; shop: string; contact: string;
  };
  home: {
    slideLofoten: string; slideArtistHouse: string; slideWorkshops: string;
    slideFestivals: string; slideExhibitions: string;
    manifestoEyebrow: string; manifestoBody: string; manifestoEm: string; manifestoCta: string;
    pillarsEyebrow: string; pillarsHeadline: string;
    pillarVision: string; pillarVisionBody: string;
    pillarWorkshops: string; pillarWorkshopsBody: string;
    pillarFestivals: string; pillarFestivalsBody: string;
    pillarResidency: string; pillarResidencyBody: string;
    funderText: string;
  };
  footer: {
    sitemap: string; contact: string; address: string;
    photoCreditDrone: string; photoCreditAltProcess: string; architect: string;
    funder: string; copyright: string;
  };
  betweenTides: {
    eyebrow: string; heroH1: string; heroSubtitle: string;
    conceptHeading: string; conceptBody1: string; conceptBody2: string; conceptBody3: string;
    structureEyebrow: string; structureHeading: string;
    structureItem1Title: string; structureItem1Body: string;
    structureItem2Title: string; structureItem2Body: string;
    structureItem3Title: string; structureItem3Body: string;
    structureItem4Title: string; structureItem4Body: string;
    pairingsEyebrow: string; pairingsHeading: string; pairingsBody: string;
    pairing1: string; pairing2: string; pairing3: string; pairing4: string;
    pullquote: string;
    applyEyebrow: string; applyHeading: string; applyBody: string; applyCta: string;
  };
  booking: {
    eyebrow: string; heroH1: string; heroSubtitle: string;
    legendAvailable: string; legendLimited: string; legendBooked: string;
    typeLabel: string; typeWorkshop: string; typeWorkshopShort: string;
    typeResidency: string; typeOther: string;
    messageLabel: string; messagePlaceholder: string;
    submitCta: string; successTitle: string; successBody: string;
  };
  shop: {
    eyebrow: string; heroH1: string; heroSubtitle: string;
    categoryAll: string; categoryPrints: string; categoryWorkshops: string;
    categoryBooks: string; categoryEditions: string;
    addToCart: string; cartLabel: string; cartEmpty: string;
    cartTotal: string; cartCheckout: string; sold: string; limited: string;
  };
}

export const dictionary: Record<Language, DictNo> = {
  no: {
    common: {
      readMore: 'Les mer',
      apply: 'Søk',
      contact: 'Kontakt',
      bookATime: 'Bestill time',
      sendInquiry: 'Send forespørsel',
      addToCart: 'Legg i kurv',
      browse: 'Se utvalget',
      back: 'Tilbake',
      next: 'Neste',
      previous: 'Forrige',
      from: 'Fra',
      photoCredit: 'Foto',
      siteName: 'Atelier Rambergstranda',
      tagline:
        'Kunstnerbolig, workshops, festivaler og artist-in-residence på Norges vakreste strand.',
      projectBy: 'Et prosjekt av Galina Manikova',
    },
    nav: {
      home: 'Hjem',
      about: 'Om prosjektet',
      visualConcept: 'Visuelt konsept',
      siteAnalysis: 'Tomteanalyse',
      timeline: 'Tidslinje',
      betweenTides: 'Between Two Tides',
      booking: 'Bestill',
      shop: 'Butikk',
      contact: 'Kontakt',
    },
    home: {
      slideLofoten: 'Lofoten.',
      slideArtistHouse: 'Kunstnerboligen.',
      slideWorkshops: 'Workshops.',
      slideFestivals: 'Festivaler.',
      slideExhibitions: 'Utstillinger.',
      manifestoEyebrow: 'Et prosjekt av Galina Manikova',
      manifestoBody:
        'Et kunstsenter på Rambergstranda i Lofoten. Hovedbygg ved sjøen, minihus på fjellsiden, workshops, festivaler og residency på',
      manifestoEm: 'Norges vakreste strand.',
      manifestoCta: 'Les om prosjektet',
      pillarsEyebrow: 'Atelier Rambergstranda',
      pillarsHeadline: 'Kunnskap, kreativitet, glede og samhold.',
      pillarVision: 'Visjonen',
      pillarVisionBody:
        'Et moderne hovedbygg på sjøsiden, og 10 til 12 minihus for kunstnere på fjellsiden. Coworking, mørkerom, undervisningsrom og fotostudio.',
      pillarWorkshops: 'Workshops',
      pillarWorkshopsBody:
        'Cyanotype, van Dyke, hullkamera, kollodium og fotooverføring til papir, tekstil, glass, keramikk og tre. Lyset fra atelier-takvinduene gjør resten.',
      pillarFestivals: 'Festivaler',
      pillarFestivalsBody:
        'Boblefesten, Blås i det og Fat(t) det ufattelige er allerede arrangert på Rambergstranda i 2015, 2017 og 2021. Det blir flere.',
      pillarResidency: 'Artist in residence',
      pillarResidencyBody:
        'Hybel-seksjon i hovedbygget og minihusene på fjellsiden. Et regionalt unikt mørkerom for alternative fotoprosesser.',
      funderText:
        'Et forprosjekt om utvikling av en ny kunstarena på Ramberg har fått støtte fra Norsk Kulturråd.',
    },
    footer: {
      sitemap: 'Side',
      contact: 'Kontakt',
      address: 'Vestre Braarudgaten 2b\n3181 Horten',
      photoCreditDrone: 'Foto · Knut-Ivar Johansen (drone)',
      photoCreditAltProcess: 'Foto · Galina Manikova (alternativ-prosess)',
      architect: 'Arkitekt · HOV + EGGE Arkitekter, Rakkestad',
      funder: 'Forprosjekt støttet av Norsk Kulturråd',
      copyright: '© Atelier Rambergstranda',
    },
    betweenTides: {
      eyebrow: 'Residency · Between Two Tides',
      heroH1: 'Et opphold delt mellom to.',
      heroSubtitle:
        'En én-til-én residency i Ramberg, Lofoten. Strukturert rundt to mennesker, og rommet mellom dem.',
      conceptHeading: 'Konsept',
      conceptBody1:
        '«Between Two Tides» er en stedssensitiv én-til-én residency i Ramberg, Lofoten. Programmet samler to mennesker — en kunstner og en motpart — for en periode med vedvarende utveksling formet av landskap, vær og levd tid.',
      conceptBody2:
        'Plassert ved den norske kyst, der skiftende lys og årstidsekstremer kontinuerlig redefinerer persepsjon, foreslår residencyen at mening ikke oppstår i isolasjon, men i relasjon: mellom stemmer, mellom kropper, mellom menneske og omgivelser.',
      conceptBody3:
        'Programmet trekker på dialogisk tenkning fra Mikhail Bakhtin og det relasjonelle rammeverket fra Nicolas Bourriaud — kunstpraksis som utfolder seg mellom posisjoner, snarere enn innenfor én forfatterstemme.',
      structureEyebrow: 'Struktur',
      structureHeading: 'Tre uker. To mennesker. Ett sted.',
      structureItem1Title: 'Varighet',
      structureItem1Body: '3–4 uker per residency. Tre perioder per år: vår, sommer, høst.',
      structureItem2Title: 'Deltakere',
      structureItem2Body: '1 invitert eller utvalgt kunstner, 1 motpart (kunstner / forfatter / kurator / lokal praktiker).',
      structureItem3Title: 'Format',
      structureItem3Body: 'Delt bolig i Ramberg. Enkelt atelier. Et «tredje rom» — kjøkken, kystruter, fjære.',
      structureItem4Title: 'Resultat',
      structureItem4Body: 'Ingen krav om ferdig arbeid. Når noe oppstår, kan det være samtaler, tekster, gester eller små presentasjoner.',
      pairingsEyebrow: 'Mulige par',
      pairingsHeading: 'Dialog som arbeidsform.',
      pairingsBody:
        'Hvert par utvikler sin egen metode — strukturert eller intuitiv — innenfor felles rammer: vedvarende én-til-én-dialog, lytting til stedet, minimal ytre press, åpenhet for usikkerhet.',
      pairing1: 'Kunstner ↔ Fisker',
      pairing2: 'Kunstner ↔ Gartner',
      pairing3: 'Kunstner ↔ Arkitekt eller bygger',
      pairing4: 'Kunstner ↔ Forfatter',
      pullquote:
        'To mennesker møtes her. Ikke for å produsere, men for å forbli i utveksling.',
      applyEyebrow: 'Søk',
      applyHeading: 'Tre uker i Ramberg.',
      applyBody:
        'Søk alene (vi matcher deg) eller som par. Send et kort statement om praksisen din, hvorfor én-til-én-formatet betyr noe for deg, og hvordan du forestiller deg å arbeide med en annen person.',
      applyCta: 'Send søknad',
    },
    booking: {
      eyebrow: 'Bestill',
      heroH1: 'Reserver tid for kurs eller residency.',
      heroSubtitle:
        'Velg en tilgjengelig dato. Vi tar kontakt for å bekrefte detaljer, prising og tilrettelegging før vi setter den i kalenderen.',
      legendAvailable: 'Tilgjengelig',
      legendLimited: 'Begrenset',
      legendBooked: 'Opptatt',
      typeLabel: 'Type opphold',
      typeWorkshop: 'Workshop · 1 dag',
      typeWorkshopShort: 'Helg-workshop · 2–3 dager',
      typeResidency: 'Residency · 3–4 uker',
      typeOther: 'Annet · skriv kort',
      messageLabel: 'Kort melding',
      messagePlaceholder: 'Hvilket opphold tenker du på? Hvor mange dere er?',
      submitCta: 'Send forespørsel',
      successTitle: 'Forespørsel mottatt',
      successBody: 'Vi kommer tilbake til deg innen 48 timer.',
    },
    shop: {
      eyebrow: 'Butikk',
      heroH1: 'Verker, prints, kurs og bøker.',
      heroSubtitle:
        'Originale arbeider og publikasjoner fra Galina Manikovas verksted, samt billetter til kommende workshops.',
      categoryAll: 'Alle',
      categoryPrints: 'Prints',
      categoryWorkshops: 'Workshops',
      categoryBooks: 'Bøker',
      categoryEditions: 'Edisjoner',
      addToCart: 'Legg i kurv',
      cartLabel: 'Kurv',
      cartEmpty: 'Kurven din er tom',
      cartTotal: 'Total',
      cartCheckout: 'Til kassen',
      sold: 'Utsolgt',
      limited: 'Begrenset',
    },
  },

  en: {
    common: {
      readMore: 'Read more',
      apply: 'Apply',
      contact: 'Contact',
      bookATime: 'Book a time',
      sendInquiry: 'Send inquiry',
      addToCart: 'Add to cart',
      browse: 'Browse',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      from: 'From',
      photoCredit: 'Photo',
      siteName: 'Atelier Rambergstranda',
      tagline:
        'Artist residence, workshops, festivals and residency on Norway’s most beautiful beach.',
      projectBy: 'A project by Galina Manikova',
    },
    nav: {
      home: 'Home',
      about: 'The project',
      visualConcept: 'Visual concept',
      siteAnalysis: 'Site analysis',
      timeline: 'Timeline',
      betweenTides: 'Between Two Tides',
      booking: 'Booking',
      shop: 'Shop',
      contact: 'Contact',
    },
    home: {
      slideLofoten: 'Lofoten.',
      slideArtistHouse: 'The artist house.',
      slideWorkshops: 'Workshops.',
      slideFestivals: 'Festivals.',
      slideExhibitions: 'Exhibitions.',
      manifestoEyebrow: 'A project by Galina Manikova',
      manifestoBody:
        'An arts centre on Rambergstranda in Lofoten. A main building by the sea, mini-houses on the hillside, workshops, festivals and residency on',
      manifestoEm: 'Norway’s most beautiful beach.',
      manifestoCta: 'Read about the project',
      pillarsEyebrow: 'Atelier Rambergstranda',
      pillarsHeadline: 'Knowledge, creativity, joy and community.',
      pillarVision: 'The vision',
      pillarVisionBody:
        'A modern main building by the sea, and 10 to 12 mini-houses for artists on the hillside. Coworking, darkroom, teaching rooms and photo studio.',
      pillarWorkshops: 'Workshops',
      pillarWorkshopsBody:
        'Cyanotype, van Dyke, pinhole, collodion and photo-transfer onto paper, textile, glass, ceramic and wood. Skylight does the rest.',
      pillarFestivals: 'Festivals',
      pillarFestivalsBody:
        'Boblefesten, Blås i det and Fat(t) det ufattelige have already been held on Rambergstranda in 2015, 2017 and 2021. There will be more.',
      pillarResidency: 'Artist in residence',
      pillarResidencyBody:
        'A residency wing in the main building and mini-houses on the hillside. A regionally unique darkroom for alternative photographic processes.',
      funderText:
        'A pre-project for the development of a new arts arena on Ramberg has received support from Arts Council Norway.',
    },
    footer: {
      sitemap: 'Site',
      contact: 'Contact',
      address: 'Vestre Braarudgaten 2b\n3181 Horten · Norway',
      photoCreditDrone: 'Photo · Knut-Ivar Johansen (drone)',
      photoCreditAltProcess: 'Photo · Galina Manikova (alternative process)',
      architect: 'Architect · HOV + EGGE Arkitekter, Rakkestad',
      funder: 'Pre-project supported by Arts Council Norway',
      copyright: '© Atelier Rambergstranda',
    },
    betweenTides: {
      eyebrow: 'Residency · Between Two Tides',
      heroH1: 'A residency held between two people.',
      heroSubtitle:
        'A one-to-one residency in Ramberg, Lofoten. Structured around two individuals, and the space between them.',
      conceptHeading: 'Concept',
      conceptBody1:
        '“Between Two Tides” is a site-responsive, one-to-one residency program based in Ramberg, Lofoten. It brings together two individuals — an artist and a counterpart — for a period of sustained exchange shaped by landscape, weather, and lived time.',
      conceptBody2:
        'Situated on the edge of the Norwegian Sea, where shifting light and seasonal extremes continuously redraw perception, the residency proposes that meaning does not emerge in isolation, but in relation: between voices, between bodies, between human and environment.',
      conceptBody3:
        'Drawing on dialogical thinking associated with Mikhail Bakhtin, and the relational framework articulated by Nicolas Bourriaud, the program understands artistic practice as something that unfolds between positions rather than within a single authorial voice.',
      structureEyebrow: 'Structure',
      structureHeading: 'Three weeks. Two people. One place.',
      structureItem1Title: 'Duration',
      structureItem1Body: '3–4 weeks per residency. Three periods per year: spring, summer, autumn.',
      structureItem2Title: 'Participants',
      structureItem2Body: '1 invited or selected artist, 1 paired counterpart (artist / writer / curator / local practitioner).',
      structureItem3Title: 'Format',
      structureItem3Body: 'Shared accommodation in Ramberg. A simple studio. A “third space” — kitchen, outdoor routes, shoreline.',
      structureItem4Title: 'Outcome',
      structureItem4Body: 'No required output. When something emerges, it may take the form of conversations, texts, gestures, or small-scale presentations.',
      pairingsEyebrow: 'Possible pairings',
      pairingsHeading: 'Dialogue as method.',
      pairingsBody:
        'Each pair develops its own working method — structured or intuitive — within a shared framework: sustained one-to-one dialogue, responsiveness to place, minimal external pressure, openness to uncertainty.',
      pairing1: 'Artist ↔ Fisher',
      pairing2: 'Artist ↔ Gardener',
      pairing3: 'Artist ↔ Architect or builder',
      pairing4: 'Artist ↔ Writer',
      pullquote:
        'Two people meet here. Not to produce, but to remain in exchange.',
      applyEyebrow: 'Apply',
      applyHeading: 'Three weeks in Ramberg.',
      applyBody:
        'Apply alone (we will pair you) or as an existing pair. Send a short statement about your practice, why a one-to-one format matters to you, and how you imagine working with another person.',
      applyCta: 'Send application',
    },
    booking: {
      eyebrow: 'Booking',
      heroH1: 'Reserve a time for a workshop or residency.',
      heroSubtitle:
        'Pick an available date. We come back to you to confirm details, pricing and arrangements before it goes on the calendar.',
      legendAvailable: 'Available',
      legendLimited: 'Limited',
      legendBooked: 'Booked',
      typeLabel: 'Type of stay',
      typeWorkshop: 'Workshop · 1 day',
      typeWorkshopShort: 'Weekend workshop · 2–3 days',
      typeResidency: 'Residency · 3–4 weeks',
      typeOther: 'Other · briefly describe',
      messageLabel: 'Short message',
      messagePlaceholder: 'Which stay are you considering? How many of you?',
      submitCta: 'Send inquiry',
      successTitle: 'Inquiry received',
      successBody: 'We will get back to you within 48 hours.',
    },
    shop: {
      eyebrow: 'Shop',
      heroH1: 'Works, prints, courses and books.',
      heroSubtitle:
        'Original works and publications from Galina Manikova’s practice, plus tickets to upcoming workshops.',
      categoryAll: 'All',
      categoryPrints: 'Prints',
      categoryWorkshops: 'Workshops',
      categoryBooks: 'Books',
      categoryEditions: 'Editions',
      addToCart: 'Add to cart',
      cartLabel: 'Cart',
      cartEmpty: 'Your cart is empty',
      cartTotal: 'Total',
      cartCheckout: 'Checkout',
      sold: 'Sold out',
      limited: 'Limited',
    },
  },
};

export type DictionaryShape = DictNo;
