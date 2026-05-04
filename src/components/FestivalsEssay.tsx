import { motion } from 'framer-motion'

const festivals = [
  {
    name: 'Boblefesten',
    year: '2015',
    img: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=900&q=80&auto=format&fit=crop',
    alt: 'Utendørs kunstfestival Boblefesten 2015',
  },
  {
    name: 'Blås i det',
    year: '2017',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80&auto=format&fit=crop',
    alt: 'Festival Blås i det 2017 — musikk og kunst',
  },
  {
    name: 'Fat(t) det ufattelige',
    year: '2021',
    img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=80&auto=format&fit=crop',
    alt: 'Festival Fat(t) det ufattelige 2021',
  },
]

const supporters = ['Nordland fylkeskommune', 'Norske kunsthåndverkere', 'Norsk Kulturråd']

export function FestivalsEssay() {
  return (
    <section id="festivaler" className="bg-paper py-20 md:py-36 px-6 md:px-12 lg:px-20 border-t border-paper-soft">
      <div className="max-w-screen-2xl mx-auto">

        <motion.p
          className="font-mono text-label text-muted uppercase tracking-widest mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          (04) Festivaler
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 mb-16 items-end">
          <motion.h2
            className="font-serif text-display-md text-graphite"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Festivaler på Norges vakreste strand.
          </motion.h2>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-mono text-label text-muted uppercase tracking-widest mb-3">
              Støttet av
            </p>
            {supporters.map((s) => (
              <p key={s} className="font-serif text-body text-graphite italic">{s}</p>
            ))}
          </motion.div>
        </div>

        {/* Photo essay — 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {festivals.map((fest, i) => (
            <motion.article
              key={fest.name}
              className="group"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <img
                  src={fest.img}
                  alt={fest.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-prussian/0 group-hover:bg-prussian/10 transition-colors duration-500" />
              </div>

              {/* Caption row */}
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-xl text-graphite italic">{fest.name}</h3>
                <span className="font-mono text-caption text-muted">{fest.year}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
