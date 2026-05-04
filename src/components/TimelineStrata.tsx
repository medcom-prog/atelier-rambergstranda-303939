import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * THE WEIRD THING #2 / "timeline-as-strata"
 *
 * The project timeline rendered as vertical geological strata.
 * Each year is a "layer" that reveals as the user scrolls into it.
 * Regulatory milestones are marked with accent dots in Prussian blue.
 * Monospace year labels emphasize the archival/technical nature.
 */

const milestones = [
  {
    year: '2015',
    event: 'Galina Manikova starter visjonen. Første festival: Boblefesten.',
    type: 'creative',
    layer: 'bg-paper',
  },
  {
    year: '2017',
    event: 'Festival: Blås i det.',
    type: 'creative',
    layer: 'bg-paper-soft',
  },
  {
    year: '2019 — mars 12',
    event: 'Omregulering vedtatt, strandsiden.',
    type: 'regulatory',
    layer: 'bg-paper',
  },
  {
    year: '2019 — mai 25',
    event: 'Reguleringsvedtak offentliggjort.',
    type: 'regulatory',
    layer: 'bg-paper-soft',
  },
  {
    year: '2019 — august',
    event: 'Forhåndskonferanse, Flakstad kommune.',
    type: 'regulatory',
    layer: 'bg-paper',
  },
  {
    year: '2020',
    event: 'Tomteanalyse og visuelt konsept ferdig. Anna Karoline Hov Larsen / HOV + EGGE Arkitekter.',
    type: 'creative',
    layer: 'bg-paper-soft',
  },
  {
    year: '2020 — mars',
    event: 'Endelig reguleringsvedtak godkjent etter fem høringsrunder.',
    type: 'regulatory',
    layer: 'bg-paper',
  },
  {
    year: '2020 — oktober',
    event: 'Statens Vegvesen ga avkjørselstillatelse.',
    type: 'regulatory',
    layer: 'bg-paper-soft',
  },
  {
    year: '2021',
    event: 'Festival: Fat(t) det ufattelige. Norsk Kulturråd bevilger støtte til forprosjektet.',
    type: 'funding',
    layer: 'bg-paper',
  },
]

function StrataLayer({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'start 40%'],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1])
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -16 : 16, 0])

  const dotColor = milestone.type === 'regulatory'
    ? 'bg-prussian'
    : milestone.type === 'funding'
      ? 'bg-prussian'
      : 'bg-muted'

  return (
    <motion.div
      ref={ref}
      className={`${milestone.layer} border-b border-paper-soft`}
      style={{ opacity, x }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-6 md:gap-12 py-8 md:py-10 items-start">

          {/* Year column */}
          <div className="flex items-start gap-3 pt-1">
            <div className={`w-2 h-2 rounded-full ${dotColor} flex-shrink-0 mt-1.5`} />
            <span className="font-mono text-caption text-muted uppercase tracking-wider leading-tight">
              {milestone.year}
            </span>
          </div>

          {/* Event column */}
          <p className="font-serif text-body text-graphite leading-relaxed">
            {milestone.event}
          </p>

        </div>
      </div>
    </motion.div>
  )
}

export function TimelineStrata() {
  return (
    <section id="tidslinje" className="bg-paper border-t border-paper-soft">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <motion.p
          className="font-mono text-label text-muted uppercase tracking-widest mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          (06) Prosjektets gang
        </motion.p>

        <motion.h2
          className="font-serif text-display-md text-graphite mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Fra visjon til regulert tomt.
        </motion.h2>

        {/* Legend */}
        <motion.div
          className="flex gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-prussian" />
            <span className="font-mono text-label text-muted uppercase tracking-wider">Regulatorisk milepæl</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-muted" />
            <span className="font-mono text-label text-muted uppercase tracking-wider">Kreativt / kunstnerisk</span>
          </div>
        </motion.div>
      </div>

      {/* Strata layers */}
      <div>
        {milestones.map((milestone, index) => (
          <StrataLayer key={milestone.year} milestone={milestone} index={index} />
        ))}
      </div>
    </section>
  )
}
