import { motion } from 'framer-motion';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { SplitText } from '@/components/site/SplitText';

interface Event {
  year: string;
  date?: string;
  title: string;
  body: string;
  type: 'creative' | 'regulatory' | 'milestone';
}

const EVENTS: Event[] = [
  {
    year: '2015',
    title: 'Visjonen tar form',
    body:
      'Galina Manikova starter arbeidet med å etablere et senter for alternativ fotografi i Lofoten. Boblefesten arrangeres for første gang på Rambergstranda.',
    type: 'creative',
  },
  {
    year: '2017',
    title: 'Boblefesten · Blås i det',
    body:
      'Den andre festivalrunden på stranden får støtte fra Nordland fylkeskommune, Norske Kunsthåndverkere og Norsk Kulturråd, og mye positiv lokalpresse.',
    type: 'creative',
  },
  {
    year: '2019',
    date: '12. mars',
    title: 'Omregulering vedtatt — strandsiden',
    body:
      'Etter flere års arbeid blir omreguleringen for strandsiden av tomta vedtatt av Flakstad kommune.',
    type: 'regulatory',
  },
  {
    year: '2019',
    date: '25. mai',
    title: 'Vedtaket offentliggjort',
    body: 'Reguleringsvedtaket publiseres.',
    type: 'regulatory',
  },
  {
    year: '2019',
    date: 'August',
    title: 'Forhåndskonferanse',
    body:
      'Vigsnæs & Kosberg Arkitekter (tidligere JVA) deltar på forhåndskonferanse i Flakstad kommune for å presentere konseptet for teknisk etat.',
    type: 'milestone',
  },
  {
    year: '2020',
    date: 'Mars',
    title: 'Endelig vedtak godkjent',
    body:
      'Reguleringsplanen for strandsiden blir endelig godkjent etter fem høringsrunder. Arkitekttegninger for hovedbygget kan nå utvikles.',
    type: 'regulatory',
  },
  {
    year: '2020',
    date: 'Sommer',
    title: 'Kulturminner kartlagt på nytt',
    body:
      'Arkeologene fra Nordland fylkeskommune gjennomfører befaring og oppdaterer hensynssonen. Status på fjellsiden endres fra «automatisk fredet» til «ikke fredet», noe som åpner for bedre utnyttelse av arealet.',
    type: 'milestone',
  },
  {
    year: '2020',
    date: 'Oktober',
    title: 'Avkjørselstillatelse fra Statens Vegvesen',
    body:
      'Tillatelse til avkjørsel fra E10 til fjellsiden gis. Tomteanalyse og visuelt konsept utarbeides av Anna Karoline Hov Larsen / HOV + EGGE Arkitekter, Rakkestad.',
    type: 'milestone',
  },
  {
    year: '2021',
    title: 'Fat(t) det ufattelige',
    body:
      'Tredje festivalrunde på Rambergstranda. Festivaltradisjonen som startet i 2015 er nå godt etablert.',
    type: 'creative',
  },
];

const typeColor: Record<Event['type'], string> = {
  creative: 'bg-prussian',
  regulatory: 'bg-graphite',
  milestone: 'bg-graphite/45',
};

export default function Tidslinje() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper pt-32 md:pt-40 pb-16 md:pb-24">
        <Container size="lg">
          <Eyebrow number="—">Tidslinje</Eyebrow>
          <SplitText
            as="h1"
            unit="word"
            stagger={0.085}
            delay={0.15}
            italic={[3, 4]}
            className="font-serif text-display-lg md:text-display-xl text-graphite leading-[1.02] max-w-4xl"
          >
            {'Et tiår fra visjon til vedtak.'}
          </SplitText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
            className="mt-8 font-serif text-body-lg text-graphite/70 max-w-prose-lg leading-relaxed"
          >
            Fra de første festivalene i 2015, gjennom fem høringsrunder og endelig
            reguleringsvedtak i mars 2020 — en gjennomgang av prosjektets viktigste milepæler.
          </motion.p>
        </Container>
      </section>

      {/* Vertical timeline */}
      <section className="bg-paper pb-32 md:pb-48">
        <Container size="md">
          <ol className="relative">
            {/* Vertical line */}
            <div
              aria-hidden="true"
              className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-graphite/15"
            />

            {EVENTS.map((e, i) => (
              <motion.li
                key={`${e.year}-${e.date ?? i}`}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 5) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 md:pl-16 pb-14 md:pb-18 last:pb-0"
              >
                {/* Marker */}
                <motion.span
                  aria-hidden="true"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.15 + (i % 5) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute left-0 top-1.5 inline-block h-3.5 w-3.5 md:h-[22px] md:w-[22px] rounded-full ${typeColor[e.type]} ring-4 ring-paper`}
                />

                <div className="flex flex-wrap items-baseline gap-3 md:gap-5">
                  <span className="font-mono text-2xl md:text-3xl text-prussian font-light leading-none">
                    {e.year}
                  </span>
                  {e.date && (
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite/55">
                      {e.date}
                    </span>
                  )}
                </div>

                <h2 className="mt-3 font-serif text-2xl md:text-3xl text-graphite italic leading-tight">
                  {e.title}
                </h2>
                <p className="mt-3 font-serif text-base md:text-body text-graphite/70 leading-relaxed max-w-prose">
                  {e.body}
                </p>
              </motion.li>
            ))}
          </ol>

          {/* Legend */}
          <div className="mt-16 md:mt-20 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.22em] text-graphite/55">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-prussian" />
              Kreativt arbeid
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-graphite" />
              Regulatorisk
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-graphite/45" />
              Milepæl
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}
