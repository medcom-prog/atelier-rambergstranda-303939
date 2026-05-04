import { motion } from 'framer-motion'

const techniques = [
  { id: '01', name: 'Cyanotype', desc: 'Lysfølsomhetens grunnprosess. Papir, stoff, glass, tre.' },
  { id: '02', name: 'Van Dyke Brown', desc: 'Jernbasert prosess med varm brunlig tone.' },
  { id: '03', name: 'Hullkamera', desc: 'Pinhole-fotografering uten linse. Ren geometri og lys.' },
  { id: '04', name: 'Fotooverføring', desc: 'Bilder overføres til akvarellpapir, tekstil, keramikk, metall.' },
  { id: '05', name: 'Kollodium', desc: 'Våtplate-kollodium i storformat. Mørkerom med overlys.' },
  { id: '06', name: 'Digitale negativer', desc: 'Bro mellom digital bearbeiding og analoge prosesser.' },
]

export function CoursesCallout() {
  return (
    <section id="kurs" className="bg-graphite py-24 md:py-36 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              className="font-mono text-label text-paper/40 uppercase tracking-widest mb-4"
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
          </div>

          <motion.a
            href="#kontakt"
            className="inline-flex items-center gap-3 font-sans text-caption uppercase tracking-widest text-paper border border-paper/30 px-6 py-3 hover:bg-paper hover:text-graphite transition-colors duration-300 self-start md:self-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Meld interesse for neste kurs
            <span aria-hidden="true">→</span>
          </motion.a>
        </div>

        {/* Technique grid — numbered, no icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/10">
          {techniques.map((tech, i) => (
            <motion.div
              key={tech.id}
              className="bg-graphite p-8 group hover:bg-graphite-soft transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-3xl text-prussian font-medium mb-4 group-hover:text-paper/60 transition-colors duration-300">
                {tech.id}
              </p>
              <h3 className="font-serif text-xl text-paper mb-3 italic">{tech.name}</h3>
              <p className="font-sans text-caption text-paper/60 leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Studio note */}
        <motion.p
          className="mt-10 font-serif text-body text-paper/50 italic max-w-prose"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Atelieret får overlys fra takvinduer, mørkerom for alternative fototeknikker, og
          skylight-fotoopptaksrom egnet for storformat og kollodium.
        </motion.p>
      </div>
    </section>
  )
}
