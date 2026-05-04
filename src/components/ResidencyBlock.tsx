import { motion } from 'framer-motion'

export function ResidencyBlock() {
  return (
    <section id="residency" className="bg-paper-soft py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-24">

          {/* Text side */}
          <div>
            <motion.p
              className="font-mono text-label text-muted uppercase tracking-widest mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              (05) Artist in residence
            </motion.p>

            <motion.h2
              className="font-serif text-display-md text-graphite mb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Jobbe og oppholde seg
              <br />
              <em>et annet sted enn i sitt vante miljø.</em>
            </motion.h2>

            <motion.div
              className="font-serif text-body text-graphite space-y-5 max-w-prose"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>
                Artist-in-residence-programmer gjør det mulig for kunstnere, akademikere,
                kuratorer, og andre mennesker i kreativt arbeid å jobbe og oppholde seg
                et annet sted enn i sitt vante miljø.
              </p>
              <p>
                Hybel-seksjon i hovedbygget og minihusene på fjellsiden brukes til
                gjesteopphold. Mørkerommet for alternativ fotografi vil være regionalt
                unikt, og gjøre stedet attraktivt for norske og internasjonale kunstnere.
              </p>
            </motion.div>

            <motion.a
              href="#kontakt"
              className="inline-flex items-center gap-3 mt-10 font-sans text-caption uppercase tracking-widest text-graphite border border-graphite/30 px-6 py-3 hover:bg-graphite hover:text-paper transition-colors duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Spør om residency
              <span aria-hidden="true">→</span>
            </motion.a>
          </div>

          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[2/3] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80&auto=format&fit=crop"
                alt="Kunstner i studio — alternativ fotografi"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-graphite/70 to-transparent">
                <p className="font-mono text-label text-paper/80 uppercase tracking-wide">
                  "When people ask me what equipment I use,<br />I tell them my eyes."
                </p>
                <p className="font-mono text-label text-paper/50 mt-2 uppercase tracking-wide">
                  Galina Manikova
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
