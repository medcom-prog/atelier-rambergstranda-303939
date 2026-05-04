# Design Brief — Atelier Rambergstranda

## Customer Voice
Galina Manikova er billedkunstner og fotograf med internasjonal anerkjennelse for alternative og analoge fotografiprosesser (cyanotype, van Dyke brown, våtplate-kollodium, hullkamera). Siden 2015 jobber hun med å realisere et kunstsenter på Rambergstranda i Lofoten — et sted for workshops, festivaler, artist-in-residence, og arkitektonisk ambisjon.

Tonen i kildetekstene er velskrevet og konkret: regulatoriske datoer sitter ordrett, arkitekternavn er presise, siteringene er egne. Vi bruker dem.

## Eksisterende side
atelier-rambergstranda.no er en WordPress-side med slide-karusell. Fem h2-seksjoner (Lofoten, Kunstnerboligen, Workshops, Festivaler, Utstillinger) og én Om-side med all innhold på scroll. Ingen typografi å snakke om, ingen animations, ingen luft. Vi slår den ved: å ta fotografi alvorlig, å gi teksten luft, og å behandle tidslinjen som design.

## Hva vi gjør bedre (3 konkrete ting)
1. **Fotografi som protagonist.** Full-bleed Lofoten-bilder, arkitektrender og alternativ-prosess-teksturer erstatter den generiske karusellapproachen.
2. **Redaksjonelt rutenett, ikke mal.** Asymmetrisk layout med generøse marginer, serif brødtekst, nummererte seksjonsoverskrifter. Leser som et arkitektkontors portefølje, ikke en WordPress-template.
3. **Tidslinjen som design.** Vertikal stratigrafi-tidslinje med CSS-lag og framer-motion scroll — prosjektets milepæler behandlet som geologisk kjerne. "The weird thing" som ingen annen side har.

## Palett (customer brand colors overrides pack)
- Bakgrunn: `#F4F1EC` (off-white papir)
- Primærtekst: `#15171A` (grafitt)
- Eneste aksent: `#1F3A5F` (cyanotype Prussian blue)
- Dempet tekst: `#6F706A`
- Hero-dark (inverted sections): `#15171A` bakgrunn, `#F4F1EC` tekst

## Font-par
- Display/brødtekst: **EB Garamond** (Google Fonts) — redaksjonell serif
- UI/labels: **Inter Tight** (Google Fonts) — stille sans
- Mono (tidslinje-årstall): **JetBrains Mono**

## Section Composition (magazine-spread)
1. `nav-thin` — Minimal toppar med wordmark venstre, lenker høyre. Gjennomsiktig over hero.
2. `full-bleed-hero-cyanotype` — Lofoten drone-bilde med cyanotype CSS-filter som aktiveres ved scroll (weird thing A)
3. `epigraph-quote` — Helen Keller-epigraf: "The only thing worse than being blind is having sight but no vision."
4. `vision-prose` — Lang, redaksjonell brødtekst om visjonen. Serif, stor linjehøyde.
5. `image-grid-aerial` — Asymmetrisk bilderutenett med luftfotos (drone + festivaler)
6. `architecture-split` — Bilde-tekst-par om arkitektur (HOV+EGGE, inspirasjon, materialitet)
7. `courses-callout` — Kurs & workshops med fototeknikker og konkrete info
8. `festivals-essay` — Festivaler (Boblefesten, Blås i det, Fat(t) det ufattelige) med foto
9. `residency-block` — Artist in residence, tekst-ledet
10. `timeline-strata` — Vertikal stratigrafi-tidslinje (THE WEIRD THING)
11. `contact-minimal` — Galina Manikova + adresse + mail + tlf
12. `footer-credits` — Wordmark + lenker + bilde-krediteringer

## The Weird Thing: Cyanotype-hero (option A)
Hjemmesiden starter med et Lofoten-drone-bilde i full bredde. Ved scroll trekker et CSS `feColorMatrix` duotone-filter bildet gradvis mot cyanotype-blå (`#1F3A5F`). Dette refererer Galinas håndverk uten å bli gimmick. Implementasjon: `useScroll` + `useTransform` fra framer-motion, SVG-filter med duotone matrix.

## Anti-patterns vi unngår
- Ingen 4-kort-rutenett med ikon-tjenester
- Ingen fake testimonials
- Ingen priser
- Ingen generisk "Velkommen til..." hero-tekst
- Ingen em-dash mellom setninger
