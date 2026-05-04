import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { Pullquote } from '@/components/site/Pullquote';
import { SplitText } from '@/components/site/SplitText';
import { TwoLinesMotif } from '@/components/site/TwoLinesMotif';
import { useT } from '@/i18n';

export default function BetweenTwoTides() {
  const t = useT();

  const structure = [
    { title: t.betweenTides.structureItem1Title, body: t.betweenTides.structureItem1Body },
    { title: t.betweenTides.structureItem2Title, body: t.betweenTides.structureItem2Body },
    { title: t.betweenTides.structureItem3Title, body: t.betweenTides.structureItem3Body },
    { title: t.betweenTides.structureItem4Title, body: t.betweenTides.structureItem4Body },
  ];

  const pairings = [
    t.betweenTides.pairing1,
    t.betweenTides.pairing2,
    t.betweenTides.pairing3,
    t.betweenTides.pairing4,
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-paper pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        {/* Two-lines motif as background watermark */}
        <div aria-hidden="true" className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <TwoLinesMotif tone="graphite" defaultGap={70} height={220} />
        </div>

        <Container size="lg">
          <Eyebrow number="—">{t.betweenTides.eyebrow}</Eyebrow>
          <SplitText
            as="h1"
            unit="word"
            stagger={0.075}
            delay={0.2}
            italic={[3, 4]}
            className="font-serif text-display-lg md:text-display-xl text-graphite leading-[1.02] max-w-4xl"
          >
            {t.betweenTides.heroH1}
          </SplitText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
            className="mt-8 font-serif text-body-lg text-graphite/70 max-w-prose-lg leading-relaxed"
          >
            {t.betweenTides.heroSubtitle}
          </motion.p>
        </Container>
      </section>

      {/* Hero image — coastal/horizon */}
      <section className="bg-paper">
        <div className="px-6 md:px-12 lg:px-16">
          <motion.figure
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1.0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <img
              src="/images/slide01-lofoten.jpg"
              alt="Rambergstranda — coastal landscape and horizon"
              loading="eager"
              className="w-full aspect-[16/8] md:aspect-[16/6] object-cover transition-transform duration-1000 ease-out hover:scale-[1.02]"
            />
          </motion.figure>
        </div>
      </section>

      {/* Concept */}
      <section className="bg-paper py-24 md:py-40">
        <Container size="md">
          <Eyebrow number="(01)">{t.betweenTides.conceptHeading}</Eyebrow>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="prose-editorial space-y-6"
          >
            <p>{t.betweenTides.conceptBody1}</p>
            <p>{t.betweenTides.conceptBody2}</p>
            <p>{t.betweenTides.conceptBody3}</p>
          </motion.div>
        </Container>
      </section>

      {/* Pull-quote */}
      <Pullquote variant="graphite" cite="Between Two Tides" size="xl">
        {t.betweenTides.pullquote}
      </Pullquote>

      {/* Structure */}
      <section className="bg-paper py-24 md:py-40">
        <Container size="lg">
          <Eyebrow number="(02)">{t.betweenTides.structureEyebrow}</Eyebrow>
          <h2 className="font-serif text-display-md md:text-display-lg text-graphite max-w-3xl leading-[1.05]">
            {t.betweenTides.structureHeading}
          </h2>

          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
            {structure.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-graphite/15 pt-6 group/item"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-prussian/85 mb-3">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-graphite italic mb-3">
                  {s.title}
                </h3>
                <p className="font-serif text-base text-graphite/72 leading-relaxed max-w-md">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pairings */}
      <section className="bg-graphite text-paper py-24 md:py-40 overflow-hidden">
        <Container size="lg">
          <Eyebrow tone="paper" number="(03)">{t.betweenTides.pairingsEyebrow}</Eyebrow>
          <h2 className="font-serif text-display-md md:text-display-lg max-w-3xl leading-[1.05]">
            {t.betweenTides.pairingsHeading}
          </h2>
          <p className="mt-8 max-w-prose font-serif text-body text-paper/70 leading-relaxed">
            {t.betweenTides.pairingsBody}
          </p>

          <ol className="mt-16 md:mt-20 space-y-px bg-paper/10 max-w-3xl">
            {pairings.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-graphite px-6 md:px-10 py-7 md:py-9 flex items-baseline gap-6 group/pair"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/40 shrink-0 w-8">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-2xl md:text-3xl text-paper italic transition-transform duration-500 group-hover/pair:translate-x-2">
                  {p}
                </span>
              </motion.li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Apply CTA */}
      <section className="bg-paper-soft py-24 md:py-40">
        <Container size="md">
          <Eyebrow number="(04)">{t.betweenTides.applyEyebrow}</Eyebrow>
          <h2 className="font-serif text-display-md md:text-display-lg text-graphite max-w-3xl leading-[1.05]">
            {t.betweenTides.applyHeading}
          </h2>
          <p className="mt-8 font-serif text-body-lg text-graphite/70 leading-relaxed max-w-prose-lg">
            {t.betweenTides.applyBody}
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/bestill"
              className="inline-flex items-center gap-3 px-7 py-4 bg-graphite text-paper font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-prussian transition-colors group/cta"
            >
              {t.betweenTides.applyCta}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-1.5"
                strokeWidth={1.25}
              />
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-graphite/65 hover:text-graphite transition-colors"
            >
              {t.common.contact}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
