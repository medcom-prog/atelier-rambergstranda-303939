import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroCarousel } from '@/components/site/HeroCarousel';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { Logo } from '@/components/site/Logo';
import { SplitText } from '@/components/site/SplitText';
import { Marquee } from '@/components/site/Marquee';

const HERO_SLIDES = [
  {
    src: '/images/slide01-lofoten.jpg',
    alt: 'Rambergstranda i Lofoten — bratt fjellterreng og ca 1 km lang strand',
    caption: 'Lofoten.',
  },
  {
    src: '/images/slide-ny-tegning.jpg',
    alt: 'Arkitektonisk skisse av kunstnerboligen integrert i landskapet',
    caption: 'Kunstnerboligen.',
  },
  {
    src: '/images/slide04-workshops.jpg',
    alt: 'Workshop i alternativ fotografi',
    caption: 'Workshops.',
  },
  {
    src: '/images/slide04-festival.jpg',
    alt: 'Lokal kunstfestival på stranden',
    caption: 'Festivaler.',
  },
  {
    src: '/images/slide07-utstillinger.jpg',
    alt: 'Kunstutstilling',
    caption: 'Utstillinger.',
  },
];

const PILLARS = [
  {
    n: '01',
    label: 'Visjonen',
    href: '/om-prosjektet#visjonen',
    body:
      'Et moderne hovedbygg på sjøsiden, og 10 til 12 minihus for kunstnere på fjellsiden. Coworking, mørkerom, undervisningsrom og fotostudio.',
  },
  {
    n: '02',
    label: 'Workshops',
    href: '/om-prosjektet#kurs-workshops',
    body:
      'Cyanotype, van Dyke, hullkamera, kollodium og fotooverføring til papir, tekstil, glass, keramikk og tre. Lyset fra atelier-takvinduene gjør resten.',
  },
  {
    n: '03',
    label: 'Festivaler',
    href: '/om-prosjektet#festivaler',
    body:
      'Boblefesten, Blås i det og Fat(t) det ufattelige er allerede arrangert på Rambergstranda i 2015, 2017 og 2021. Det blir flere.',
  },
  {
    n: '04',
    label: 'Artist in residence',
    href: '/om-prosjektet#artist-in-residence',
    body:
      'Hybel-seksjon i hovedbygget og minihusene på fjellsiden. Et regionalt unikt mørkerom for alternative fotoprosesser.',
  },
];

export default function Home() {
  return (
    <>
      <HeroCarousel slides={HERO_SLIDES} />

      {/* Manifesto / vertical wordmark anchor under the hero */}
      <section className="relative bg-paper py-24 md:py-40 lg:py-48 overflow-hidden">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-4"
            >
              <Logo size="xl" tone="graphite" className="!text-left" />
            </motion.div>
            <div className="md:col-span-8 md:pt-4">
              <Eyebrow number="—">Et prosjekt av Galina Manikova</Eyebrow>
              <p className="font-serif text-2xl md:text-3xl lg:text-display-md text-graphite leading-[1.25]">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1.0, delay: 0.15, ease: 'easeOut' }}
                >
                  Et kunstsenter på Rambergstranda i Lofoten.
                  Hovedbygg ved sjøen, minihus på fjellsiden,
                  workshops, festivaler og residency på{' '}
                  <em>Norges vakreste strand.</em>
                </motion.span>
              </p>
              <Link
                to="/om-prosjektet"
                className="inline-flex items-center gap-3 mt-12 font-mono text-[11px] uppercase tracking-[0.25em] text-graphite hover:text-prussian transition-colors group/cta"
              >
                Les om prosjektet
                <span className="overflow-hidden inline-block">
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-500 ease-out group-hover/cta:translate-x-1.5"
                    strokeWidth={1.25}
                  />
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Marquee strip — slow editorial cluster */}
      <section className="bg-paper-soft text-graphite border-y border-graphite/10">
        <Marquee
          items={['kunnskap', 'kreativitet', 'glede', 'samhold']}
          duration={42}
          className="text-graphite"
        />
      </section>

      {/* Four pillars — image-light, type-led */}
      <section className="bg-graphite text-paper py-24 md:py-40 overflow-hidden">
        <Container size="xl">
          <Eyebrow tone="paper">Atelier Rambergstranda</Eyebrow>
          <div className="max-w-4xl">
            <SplitText
              as="h2"
              unit="word"
              stagger={0.085}
              delay={0.1}
              italic={[3, 4, 5]}
              className="font-serif text-display-md md:text-display-lg text-paper leading-[1.05]"
            >
              {'Kunnskap, kreativitet, glede og samhold.'}
            </SplitText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-16 md:mt-24" style={{ backgroundColor: 'rgba(244,241,236,0.08)' }}>
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-graphite p-10 md:p-14 group/pillar"
              >
                <p className="font-mono text-3xl md:text-4xl text-prussian font-light leading-none transition-colors duration-500 group-hover/pillar:text-paper">
                  {p.n}
                </p>
                <h3 className="mt-8 font-serif text-2xl md:text-3xl text-paper">
                  {p.label}
                </h3>
                <p className="mt-4 font-serif text-base text-paper/72 leading-relaxed max-w-md">
                  {p.body}
                </p>
                <Link
                  to={p.href}
                  className="inline-flex items-center gap-2 mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/55 hover:text-paper transition-colors group/link"
                >
                  Les mer
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-500 group-hover/link:translate-x-1"
                    strokeWidth={1.25}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Funder line */}
      <section className="bg-paper py-20 md:py-28">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-16"
          >
            <p className="font-serif text-lg md:text-xl text-graphite/85 italic leading-relaxed max-w-md">
              Et forprosjekt om utvikling av en ny kunstarena på Ramberg har fått støtte fra Norsk Kulturråd.
            </p>
            <img
              src="/images/kulturradet.png"
              alt="Kulturrådet — Arts Council Norway"
              className="h-16 md:h-20 w-auto opacity-90"
              loading="lazy"
            />
          </motion.div>
        </Container>
      </section>
    </>
  );
}
