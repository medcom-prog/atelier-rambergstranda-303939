import { motion } from 'framer-motion';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { CountUp } from '@/components/site/CountUp';
import { SplitText } from '@/components/site/SplitText';

const FACTS: ReadonlyArray<{
  display: string;
  count?: { from?: number; to: number; suffix?: string; prefix?: string };
  label: string;
}> = [
  { display: '~1 km', count: { to: 1, prefix: '~', suffix: ' km' }, label: 'Strandlengde Rambergstranda' },
  { display: '60 km/t', count: { to: 60, suffix: ' km/t' }, label: 'Fartsgrense E10 forbi tomta' },
  { display: '900–1600', label: 'ÅDT, kjøretøy per døgn på E10' },
  { display: 'Mars 2020', label: 'Endelig reguleringsvedtak strandsiden' },
];

const SECTIONS = [
  {
    n: '(01)',
    title: 'Landskap',
    body: [
      'Landskapet er typisk bratt, alpint Lofoten-fjellterreng. Den ca. 1 km lange Rambergstranda setter et tydelig preg på Ramberg.',
      'Terrenget byr på åpen beitemark med lav vegetasjon og begrenset skogdekke, samt selvgrodd bjørke- og plantet granskog.',
    ],
  },
  {
    n: '(02)',
    title: 'Klima',
    body: [
      'Ramberg ligger åpent for vinder fra nord, vest og sør, og er godt soleksponert fra tidlig formiddag til midnatt om sommeren.',
    ],
  },
  {
    n: '(03)',
    title: 'Veg og trafikkforhold',
    body: [
      'E10 går forbi eiendommen i 60 km/t. Årsdøgntrafikken (ÅDT) ligger mellom 900 og 1600 kjøretøy.',
      'Eiendommens avkjøring fra E10 er tenkt koblet med innkjørselen til nabotomt gnr. 29 / bnr. 190, anbefalt av vegvesenet. Tillatelse fra Statens Vegvesen ble gitt i oktober 2020.',
    ],
  },
  {
    n: '(04)',
    title: 'Risiko og sårbarhet',
    body: [
      'Ramberg omfattes av store skredsoner som legger vesentlige begrensninger på utbyggingsmuligheter.',
      'Hensynssonen for kulturminner ble oppklart med arkeologene fra fylkeskommunen sommeren 2020. Etter befaring ble feltet på fjellsiden forminsket — status endret fra «automatisk fredet» til «ikke fredet». Dette åpnet for bedre utnyttelse av arealet på fjellsiden.',
    ],
  },
  {
    n: '(05)',
    title: 'Planlagte tiltak i området',
    body: [
      'Arealbruken tar høyde for forventet havnivåstigning og for følgende planlagte tiltak: sykkelvei, fjellsikring, og flytting av hovedvannledning.',
      'Hovedvannledningen er flyttet, og det er etablert et tilkoblingspunkt som kan brukes til den nye bygningen på stranda. Disse to tiltakene gjør det mulig å utvikle arkitektskisser for bygningen på strandsiden.',
    ],
  },
  {
    n: '(06)',
    title: 'Konklusjon',
    body: [
      'Bygningen skal ikke «stjele» utsikten fra naboer eller sjenere det generelle inntrykket av det vakre landskapet. Bygningen skal bli nøktern og ikke markant eller fremtredende, samtidig vil det etterstrebes at arkitekturen blir både miljøvennlig og moderne.',
      'Håpet er å tilføre noe positivt og fint til både landskapet og lokalbefolkningen, og at arkitekturen vil være berikende på flere måter.',
    ],
  },
];

export default function Tomteanalyse() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-paper pt-32 md:pt-40 pb-12 md:pb-16">
        <Container size="lg">
          <Eyebrow number="—">Tomteanalyse</Eyebrow>
          <SplitText
            as="h1"
            unit="word"
            stagger={0.085}
            delay={0.15}
            italic={[2, 3]}
            className="font-serif text-display-lg md:text-display-xl text-graphite leading-[1.02] max-w-4xl"
          >
            {'Bratt, alpint Lofoten-fjellterreng.'}
          </SplitText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
            className="mt-8 font-serif text-body-lg text-graphite/70 max-w-prose-lg leading-relaxed"
          >
            Områdeanalyse av eiendommen på Ramberg, Flakstad kommune. Landskap, klima, trafikk,
            risiko og kulturminner — slik de er per mars 2020.
          </motion.p>
        </Container>
      </section>

      {/* Drone image with parallax-on-load */}
      <section className="bg-paper">
        <div className="px-6 md:px-12 lg:px-16">
          <motion.figure
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1.0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden">
              <img
                src="/images/drone-DJI_0552.jpg"
                alt="Eiendommen sett fra luften — Rambergstranda, Lofoten"
                loading="lazy"
                className="w-full aspect-[16/8] md:aspect-[16/6] object-cover transition-transform duration-1000 ease-out hover:scale-[1.02]"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-graphite/55">
              Foto · Knut-Ivar Johansen · Eiendom gnr. 29 / bnr. 185
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* Facts strip with CountUp */}
      <section className="bg-paper py-20 md:py-28 border-t border-graphite/10 mt-16 md:mt-24">
        <Container size="xl">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
            {FACTS.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <dt className="font-serif text-3xl md:text-4xl lg:text-5xl text-prussian font-light leading-none">
                  {f.count ? (
                    <CountUp
                      to={f.count.to}
                      duration={1.6}
                      format={(n) => `${f.count!.prefix ?? ''}${Math.round(n)}${f.count!.suffix ?? ''}`}
                    />
                  ) : (
                    f.display
                  )}
                </dt>
                <dd className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-graphite/60">
                  {f.label}
                </dd>
              </motion.div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Numbered sections — long-form */}
      <section className="bg-paper py-12 md:py-20">
        <Container size="md">
          <div className="space-y-20 md:space-y-28">
            {SECTIONS.map((s, i) => (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
              >
                <div className="md:col-span-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite/45">
                    {s.n}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl md:text-4xl text-graphite italic leading-tight">
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-9 prose-editorial space-y-5 md:pt-2">
                  {s.body.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
