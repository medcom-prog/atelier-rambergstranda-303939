import { motion } from 'framer-motion';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { Pullquote } from '@/components/site/Pullquote';

const TECHNIQUES = [
  { id: '01', name: 'Cyanotype', body: 'Lysfølsomhetens grunnprosess. Papir, stoff, glass, tre, keramikk.' },
  { id: '02', name: 'Van Dyke Brown', body: 'Jernbasert prosess. Varm brunlig tone på papir og tekstil.' },
  { id: '03', name: 'Hullkamera', body: 'Pinhole-fotografering uten linse. Ren geometri og lys.' },
  { id: '04', name: 'Fotooverføring', body: 'Bilder overføres til akvarellpapir, tekstil, keramikk, metall.' },
  { id: '05', name: 'Kollodium', body: 'Våtplate-kollodium i storformat. Mørkerom med overlys fra tak.' },
  { id: '06', name: 'Digitale negativer', body: 'Bro mellom digital bearbeiding og analoge prosesser.' },
];

const FESTIVALER = [
  { name: 'Boblefesten', year: 2015, img: '/images/boblefesten-04.jpg' },
  { name: 'Boblefesten', year: 2017, img: '/images/boblefesten-07.jpg' },
  { name: 'Blås i det', year: 2017, img: '/images/blasidet-09.jpg' },
  { name: 'Blås i det', year: 2017, img: '/images/blasidet-23.jpg' },
  { name: 'Fat(t) det ufattelige', year: 2021, img: '/images/blasidet-29.jpg' },
  { name: 'Fat(t) det ufattelige', year: 2021, img: '/images/blasidet-32.jpg' },
];

const ANCHORS: ReadonlyArray<{ id: string; label: string }> = [
  { id: 'visjonen', label: 'Visjonen' },
  { id: 'arkitektur', label: 'Arkitektur' },
  { id: 'kurs-workshops', label: 'Kurs og workshops' },
  { id: 'festivaler', label: 'Festivaler' },
  { id: 'artist-in-residence', label: 'Artist in residence' },
];

export default function OmProsjektet() {
  return (
    <>
      {/* Hero — architectural rendering */}
      <section className="relative h-[78vh] min-h-[560px] overflow-hidden bg-graphite">
        <img
          src="/images/slide-ny-tegning.jpg"
          alt="Arkitektonisk skisse av kunstnerboligen integrert i Lofoten-landskapet"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/30 via-transparent to-graphite/65" />
        <div className="absolute inset-x-0 bottom-0 px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
          <Container size="xl" className="!px-0">
            <Eyebrow tone="paper" number="01">Om prosjektet</Eyebrow>
            <h1 className="font-serif text-display-md md:text-display-lg text-paper max-w-3xl leading-[1.05]">
              Et hovedbygg ved sjøen.
              <br />
              <em>Ti til tolv minihus på fjellsiden.</em>
            </h1>
          </Container>
        </div>
      </section>

      {/* Helen Keller pull-quote */}
      <Pullquote variant="paper" cite="Helen Keller">
        The only thing worse than being blind is having sight but no vision.
      </Pullquote>

      {/* Section anchors TOC (sticky on desktop) */}
      <section className="bg-paper border-t border-graphite/10 sticky top-16 md:top-20 z-30 backdrop-blur-md bg-paper/85">
        <Container size="xl">
          <nav aria-label="Innhold" className="flex gap-1 md:gap-3 overflow-x-auto py-4 -mx-2 px-2">
            {ANCHORS.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="shrink-0 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-graphite/60 hover:text-graphite transition-colors"
              >
                {a.label}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {/* Visjonen */}
      <section id="visjonen" className="bg-paper py-24 md:py-40 scroll-mt-32">
        <Container size="lg">
          <Eyebrow number="(01)">Visjonen</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-7 prose-editorial space-y-6">
              <p>
                På sjøsiden av eiendom gnr. 29 / bnr. 185 er planen å bygge en moderne bygning
                som kan bli en base for den nye kunstarenaen. I tillegg til å kunne brukes som
                bolig og arbeidssted for kunstnere, vil dette bli et lokale hvor utstillinger,
                kurs, workshops og utvikling av lokale kulturfestivaler finner sted.
              </p>
              <p>
                Coworking-spaces vil inkludere undervisningsrom, mørkerom tilrettelagt for
                alternative fototeknikker og fotoopptaks-studio.
              </p>
              <p>
                På fjellsiden ønskes det å etablere en minilandsby for kunstnere med 10 til 12
                minihus, hvor kunstnere som bruker fotografi i sitt arbeid kan bo og bruke senteret
                på sjøsiden som felles arealer.
              </p>
              <p>
                Bygget på stranda og minihusene på fjellsiden skal bli en arkitektonisk attraksjon
                og utgjøre et eksempel på framtidsrettet, miljø- og klimavennlig arkitektur som
                kan være til inspirasjon for andre. Det vil bli lagt stor vekt på bruk av
                kortreist materiale og energiøkonomiske løsninger.
              </p>
            </div>
            <aside className="md:col-span-5 md:pt-2">
              <dl className="border-l border-graphite/15 pl-6 md:pl-8 space-y-8">
                {[
                  ['10–12', 'Minihus på fjellsiden'],
                  ['5', 'Høringsrunder · endelig godkjent mars 2020'],
                  ['2015', 'Prosjektet startet'],
                  ['Lofoten', 'Flakstad kommune'],
                ].map(([k, v]) => (
                  <div key={String(v)}>
                    <dt className="font-serif text-3xl md:text-4xl text-prussian leading-none">
                      {k}
                    </dt>
                    <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-graphite/60">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          {/* Drone gallery */}
          <div className="mt-20 md:mt-28">
            <Eyebrow number="—">Luftfoto · Knut-Ivar Johansen</Eyebrow>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-graphite/10">
              {[
                'drone-DJI_0541',
                'drone-DJI_0552',
                'drone-DJI_0567',
                'drone-DJI_0570',
                'drone-DJI_0577',
                'drone-DJI_0578',
              ].map((id, i) => (
                <motion.figure
                  key={id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[16/10] overflow-hidden bg-paper"
                >
                  <img
                    src={`/images/${id}.jpg`}
                    alt={`Rambergstranda fra luften — ${id}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </motion.figure>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Arkitektur */}
      <section id="arkitektur" className="bg-paper-soft py-24 md:py-40 scroll-mt-32">
        <Container size="lg">
          <Eyebrow number="(02)">Arkitektur</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-7 prose-editorial space-y-6">
              <h2 className="font-serif text-display-md text-graphite mb-2 leading-[1.1]">
                Diskret framtoning. <em className="text-graphite/65">Integrert i omgivelsene.</em>
              </h2>
              <p>
                Bebyggelsen skal tilpasses landskapet slik at den gis en diskret framtoning og
                opptrer som en integrert del av omgivelsene. Husene skal, ved hvordan de er
                plassert i terrenget og ved materialbruk, framstå som svært lite iøynefallende sett
                fra veien og vegvesenets utkikkspunkt.
              </p>
              <p>
                Anleggsarbeidene skal foregå på en mest mulig skånsom måte slik at den opprinnelige
                floraen blir beholdt så langt inn mot bygningene som mulig.
              </p>
            </div>
            <div className="md:col-span-5">
              <Eyebrow number="—">Arkitekt</Eyebrow>
              <ol className="space-y-5 font-serif text-body text-graphite/85">
                <li>
                  <strong className="text-graphite font-normal">HOV + EGGE Arkitekter</strong>
                  <span className="block text-sm text-graphite/60 mt-0.5 font-sans">Rakkestad · konseptarbeid pågår</span>
                </li>
                <li>
                  <strong className="text-graphite font-normal">Vigsnæs &amp; Kosberg / JVA</strong>
                  <span className="block text-sm text-graphite/60 mt-0.5 font-sans">Forhåndskonferanse, Flakstad kommune</span>
                </li>
                <li>
                  <strong className="text-graphite font-normal">Effekt</strong>
                  <span className="block text-sm text-graphite/60 mt-0.5 font-sans">København · REGEN villages-konseptet</span>
                </li>
                <li>
                  <strong className="text-graphite font-normal">KWK Promes / Robert Konieczny</strong>
                  <span className="block text-sm text-graphite/60 mt-0.5 font-sans">Polen · vurdert</span>
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* Kurs og workshops */}
      <section id="kurs-workshops" className="bg-graphite text-paper py-24 md:py-40 scroll-mt-32">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
            <div className="md:col-span-6">
              <Eyebrow tone="paper" number="(03)">Kurs og workshops</Eyebrow>
              <h2 className="font-serif text-display-md md:text-display-lg leading-[1.05]">
                Kunnskap, kreativitet,
                <br />
                <em>glede og samhold.</em>
              </h2>
            </div>
            <div className="md:col-span-6 md:pt-3 prose-editorial !text-paper/80 space-y-5">
              <p>
                Initiativtaker Galina Manikova er en erfaren kunstner, fotograf og kursholder som
                har spesialisert seg på alternativt fotografi overført til alternative flater.
                Hennes ekspertise på dette feltet er anerkjent og omtalt i flere internasjonale
                publikasjoner.
              </p>
              <p>
                Atelieret får overlys fra takvinduer og blir utstyrt med et mørkerom som er
                tilgjengelig for kursdeltakere og gjestekunstnere. Et skylight-fotoopptaksrom
                egner seg for storformatfotografering og kollodium.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(244,241,236,0.08)' }}>
            {TECHNIQUES.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="bg-graphite p-10 md:p-12"
              >
                <p className="font-mono text-3xl md:text-4xl text-prussian font-light leading-none">
                  {t.id}
                </p>
                <h3 className="mt-7 font-serif text-2xl text-paper italic">{t.name}</h3>
                <p className="mt-3 font-serif text-base text-paper/72 leading-relaxed">{t.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Festivaler */}
      <section id="festivaler" className="bg-paper py-24 md:py-40 scroll-mt-32">
        <Container size="xl">
          <Eyebrow number="(04)">Festivaler</Eyebrow>
          <h2 className="font-serif text-display-md md:text-display-lg text-graphite max-w-3xl leading-[1.05]">
            Festivaler på <em>Norges vakreste strand.</em>
          </h2>
          <div className="mt-10 max-w-prose-lg prose-editorial space-y-5">
            <p>
              Det ble arrangert flere festivaler på stranden i 2015, 2017 og 2021. Disse ble godt
              mottatt av befolkningen og myndighetene. Prosjektene har fått støtte fra Nordland
              fylkeskommune, Norske Kunsthåndverkere og Norsk Kulturråd, og har fått mye positiv
              omtale i lokalavisene.
            </p>
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {FESTIVALER.map((f, i) => (
              <motion.figure
                key={f.img}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className={i % 5 === 0 ? 'aspect-[3/4] overflow-hidden' : 'aspect-[4/3] overflow-hidden'}>
                  <img
                    src={f.img}
                    alt={`${f.name} ${f.year}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-graphite/55">
                  <span>{f.name}</span>
                  <span>{f.year}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </Container>
      </section>

      {/* Artist in residence */}
      <section id="artist-in-residence" className="bg-paper-soft py-24 md:py-40 scroll-mt-32">
        <Container size="lg">
          <Eyebrow number="(05)">Artist in residence</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-7 prose-editorial space-y-6">
              <h2 className="font-serif text-display-md text-graphite leading-[1.1]">
                Tid til refleksjon, forskning, presentasjon, produksjon.
              </h2>
              <p>
                Artist-in-residence-programmer gjør det mulig for kunstnere, akademikere,
                kuratorer og andre mennesker i kreativt arbeid å jobbe og oppholde seg et annet
                sted enn i sitt vante miljø.
              </p>
              <p>
                I hovedbygningen planlegges det å bygge en hybel-seksjon. Dette vil fortrinnsvis
                være en bolig som kan leies ut til gjestende kunstnere som ønsker seg en
                arbeidsperiode i Flakstad, og som er villige til å bidra med kurs, workshops eller
                deltakelse ved festivaler.
              </p>
              <p>
                Med kanskje regionens eneste mørkerom for alternativt fotografi vil dette bli et
                svært attraktivt tilbud for både norske og internasjonale kunstnere.
              </p>
            </div>
            <aside className="md:col-span-5">
              <figure className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/drone-DJI_0568.jpg"
                  alt="Lofoten-landskapet sett fra fjellsiden av tomta"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </figure>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
