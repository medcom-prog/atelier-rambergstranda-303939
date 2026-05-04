import { motion } from 'framer-motion';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { Pullquote } from '@/components/site/Pullquote';

const KONSEPT_PRINSIPPER = [
  {
    n: '01',
    title: 'Integrere',
    body: 'Bebyggelsen vokser opp og ut av landskapet med ryggen mot fjellet og ansiktet mot havet.',
  },
  {
    n: '02',
    title: 'Kamuflere',
    body: 'Terrenget vokser opp fra bakken og blir til bygningens tak, som åpner opp mot havet. Bebyggelsen respekterer landskapet og eksisterende topografi ved å integreres og heves på påler.',
  },
  {
    n: '03',
    title: 'Identifisere',
    body: 'Bebyggelsen gis et særegnet uttrykk gjennom form, materialitet og bruk av grønne tak.',
  },
];

const MATERIALITET = [
  ['Stein', 'Lokal stein på utvalgte fasader'],
  ['Tre', 'Malmfuru-kledning som gråner med tiden'],
  ['Glass', 'Tynne, svarte karmer reduserer innrammingens visuelle påvirkning'],
  ['Tak', 'Grønne tak med stedegen vegetasjon — gress og urter fra Lofoten'],
];

const ENERGI = [
  ['Solenergi', 'Passiv solvarme, takutspring som regulerer sesongsol, betong som termisk masse.'],
  ['Naturlig ventilasjon', 'Termisk drevet kryssventilasjon gjennom strategisk plasserte åpninger.'],
];

export default function VisueltKonsept() {
  return (
    <>
      {/* Hero — full-bleed cross-section sketch */}
      <section className="relative bg-graphite text-paper pt-32 md:pt-40 pb-24 md:pb-32">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-end">
            <div className="md:col-span-7">
              <Eyebrow tone="paper" number="—">Visuelt konsept</Eyebrow>
              <h1 className="font-serif text-display-lg md:text-display-xl leading-[1.02]">
                Bebyggelsen <em>tilpasses</em> landskapet.
              </h1>
            </div>
            <div className="md:col-span-5 md:pb-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55 leading-relaxed">
                Tomteanalyse og visuelt konsept
                <br />
                Anna Karoline Hov Larsen
                <br />
                HOV + EGGE Arkitekter, Rakkestad
                <br />
                2020
              </p>
            </div>
          </div>
        </Container>

        <div className="mt-16 md:mt-24 px-6 md:px-12 lg:px-16">
          <figure className="relative aspect-[16/7] md:aspect-[16/5] overflow-hidden bg-graphite-soft">
            <img
              src="/images/vk-galleri-02.jpg"
              alt="Arkitektonisk skisse av galleri og atelier integrert i Lofoten-fjellsiden"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </figure>
        </div>
      </section>

      <Pullquote variant="paper" size="xl">
        Bebyggelsen skal tilpasses landskapet slik at den gis en diskret framtoning og opptrer
        som en integrert del av omgivelsene.
      </Pullquote>

      {/* Konsept-prinsipper */}
      <section className="bg-paper-soft py-24 md:py-40">
        <Container size="lg">
          <Eyebrow number="(01)">Topografi og typologi</Eyebrow>
          <h2 className="font-serif text-display-md text-graphite max-w-3xl leading-[1.1]">
            Integrere · kamuflere · identifisere.
          </h2>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-graphite/10">
            {KONSEPT_PRINSIPPER.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="bg-paper-soft p-10 md:p-14"
              >
                <p className="font-mono text-3xl md:text-4xl text-prussian font-light leading-none">
                  {p.n}
                </p>
                <h3 className="mt-7 font-serif text-2xl md:text-3xl text-graphite italic">
                  {p.title}
                </h3>
                <p className="mt-4 font-serif text-base text-graphite/72 leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Materialitet */}
      <section className="bg-paper py-24 md:py-40">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <Eyebrow number="(02)">Materialitet</Eyebrow>
              <h2 className="font-serif text-display-md text-graphite leading-[1.1]">
                Materialene gjenspeiler landskapet.
              </h2>
              <p className="mt-6 font-serif text-body text-graphite/75 leading-relaxed">
                Glasspartiene rammes inn av tynne svarte karmer for å redusere innrammingens
                visuelle påvirkning. Grønne tak fortsetter terrengets naturlige flora opp på
                bygningskroppen.
              </p>
            </div>
            <dl className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {MATERIALITET.map(([k, v]) => (
                <div key={k} className="border-t border-graphite/15 pt-5">
                  <dt className="font-serif text-2xl text-graphite italic">{k}</dt>
                  <dd className="mt-3 font-serif text-base text-graphite/70 leading-relaxed">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Minihus / compact living */}
      <section className="bg-graphite text-paper py-24 md:py-40">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5 md:pt-2">
              <Eyebrow tone="paper" number="(03)">Minihus · compact living</Eyebrow>
              <p className="font-mono text-[60px] md:text-[80px] font-light text-prussian leading-none mt-2">
                35 – 70 m²
              </p>
            </div>
            <div className="md:col-span-7 prose-editorial !text-paper/80 space-y-6">
              <h2 className="font-serif text-display-md text-paper leading-[1.1]">
                En miljøvennlig og attraktiv boligtypologi.
              </h2>
              <p>
                Minihus er en miljøvennlig og attraktiv boligtypologi som gir et mindre fotavtrykk
                både hva gjelder kvadratmeter og CO2-utslipp. Denne tilnærmingen oppmuntrer til
                bærekraftige livsvalg.
              </p>
              <p>
                Flakstad kommune har integrert konseptet med minihus innenfor sin boligpolitikk
                og koblet det til regionale klima- og energiplaner i Lofoten.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Energieffektive løsninger */}
      <section className="bg-paper-soft py-24 md:py-40">
        <Container size="lg">
          <Eyebrow number="(04)">Energieffektive løsninger</Eyebrow>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-graphite/10">
            {ENERGI.map(([title, body], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-paper-soft p-10 md:p-14"
              >
                <h3 className="font-serif text-2xl md:text-3xl text-graphite italic">{title}</h3>
                <p className="mt-4 font-serif text-base text-graphite/75 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
