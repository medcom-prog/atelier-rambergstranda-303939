import { motion } from 'framer-motion'

export function ArchitectureSplit() {
  return (
    <section id="arkitektur" className="bg-paper-soft py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">

        {/* Section label */}
        <motion.p
          className="font-mono text-label text-muted uppercase tracking-widest mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          (02) Arkitektur
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop"
                alt="Moderne arkitektur integrert i nordnorsk landskap"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-prussian/10 hover:bg-prussian/0 transition-colors duration-500" />
            </div>
            <p className="mt-3 font-mono text-label text-muted">
              HOV + EGGE Arkitekter, Rakkestad · konseptbilde
            </p>
          </motion.div>

          {/* Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-display-md text-graphite">
              Diskret framtoning.
              <br />
              <em>Integrert i omgivelsene.</em>
            </h2>

            <div className="font-serif text-body text-graphite space-y-4 max-w-prose">
              <p>
                Bygningene skal tilpasses landskapet slik at de gis en diskret framtoning og
                opptrer som en integrert del av omgivelsene.
              </p>
              <p>
                Materialitet: lokal stein på utvalgte fasader, malmfuru-kledning som gråner
                naturlig, grønne tak med stedegen vegetasjon, glasspartier rammet av tynne
                svarte karmer.
              </p>
              <p>
                Energi: passiv solvarme, betong som termisk masse, naturlig kryssventilasjon.
                Takutspring regulerer sesongsol.
              </p>
            </div>

            {/* Architect credit */}
            <div className="border-l-2 border-prussian pl-5 py-2">
              <p className="font-sans text-caption text-muted uppercase tracking-wide">
                Konseptarkitekt
              </p>
              <p className="font-serif text-body text-graphite font-semibold mt-1">
                HOV + EGGE Arkitekter
              </p>
              <p className="font-sans text-caption text-muted">
                Anna Karoline Hov Larsen · Rakkestad
              </p>
            </div>

            {/* Material list */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 pt-4">
              {[
                'Lokal stein',
                'Malmfuru-kledning',
                'Grønne tak',
                'Svarte stålkarmer',
                'Kortreist materiale',
                'Passiv energi',
              ].map((mat) => (
                <div key={mat} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-prussian flex-shrink-0" />
                  <span className="font-sans text-caption text-graphite">{mat}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
