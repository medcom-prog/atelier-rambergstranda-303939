import { motion } from 'framer-motion'

const techniques = [
  { id: '01', name: 'Cyanotype', desc: 'Lysfølsomhetens grunnprosess. Papir, stoff, glass, tre, keramikk.' },
  { id: '02', name: 'Van Dyke Brown', desc: 'Jernbasert prosess. Varm brunlig tone på papir og tekstil.' },
  { id: '03', name: 'Hullkamera', desc: 'Pinhole-fotografering uten linse. Ren geometri og lys.' },
  { id: '04', name: 'Fotooverføring', desc: 'Bilder overføres til akvarellpapir, tekstil, keramikk, metall.' },
  { id: '05', name: 'Kollodium', desc: 'Våtplate-kollodium i storformat. Mørkerom med overlys fra tak.' },
  { id: '06', name: 'Digitale negativer', desc: 'Bro mellom digital bearbeiding og analoge prosesser.' },
]

export function CoursesCallout() {
  return (
    <section id="kurs" className="bg-graphite py-24 md:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.p
              className="font-mono text-label text-paper/70 uppercase tracking-widest mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              (03) Kurs og workshops
            </motion.p>
            <motion.h2
              className="font-serif text-display-md text-paper"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              kunnskap — kreativitet
              <br />
              <em>glede — samhold</em>
            </motion.h2>
            <motion.p
              className="font-serif text-body text-paper/75 italic mt-4 max-w-prose"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Atelieret får overlys fra takvinduer, mørkerom for alternative fototeknikker,
              og skylight-opptaksrom egnet for storformat og kollodium.
            </motion.p>
          </div>

          <motion.a
            href="#kontakt"
            className="inline-flex items-center gap-3 font-sans text-caption uppercase tracking-widest text-paper border border-paper/40 px-6 py-4 hover:bg-paper hover:text-graphite transition-all duration-300 self-start lg:self-end whitespace-nowrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            whileHover={{ scale: 1.02 }}
          >
            Meld interesse
            <span aria-hidden="true">→</span>
          </motion.a>
        </div>

        {/* Technique grid — numbers, no icons, 1px gap separator */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(244,241,236,0.10)' }}>
          {techniques.map((tech, i) => (
            <motion.div
              key={tech.id}
              className="bg-graphite p-8 md:p-10 group hover:bg-graphite-soft transition-colors duration-300 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-4xl text-prussian font-medium mb-5 leading-none">
                {tech.id}
              </p>
              <h3 className="font-serif text-xl text-paper mb-3 italic">{tech.name}</h3>
              {/* text-paper/75 = ~4.5:1 on graphite bg — passes WCAG AA for body text */}
              <p className="font-sans text-sm text-paper/75 leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
