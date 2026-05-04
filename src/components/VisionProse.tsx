import { motion } from 'framer-motion'

export function VisionProse() {
  return (
    <section id="visjonen" className="bg-paper py-20 md:py-32 px-6 md:px-12 lg:px-20 border-t border-paper-soft">
      <div className="max-w-screen-2xl mx-auto">

        {/* Section label */}
        <motion.p
          className="font-mono text-label text-muted uppercase tracking-widest mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          (01) Visjonen
        </motion.p>

        {/* Asymmetric editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_3fr] gap-16 lg:gap-24 items-start">

          {/* Primary column */}
          <div>
            <motion.h2
              className="font-serif text-display-lg text-graphite mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Rambergstranda, Lofoten.
            </motion.h2>

            <motion.p
              className="font-serif text-body-lg text-graphite mb-6 font-semibold"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Et kunstsenter ved sjøen. Ti til tolv minihus på fjellsiden bak.
            </motion.p>

            <motion.div
              className="font-serif text-body text-graphite space-y-5 max-w-prose-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>
                På sjøsiden av eiendom gnr. 29 / bnr. 185 skal det bygges et moderne hovedbygg som
                blir base for kunstarenaen, bolig og arbeidssted for kunstnere, lokale for utstillinger,
                kurs, workshops og festivaler. Coworking-spaces inkluderer undervisningsrom, mørkerom
                for alternative fototeknikker, og fotoopptaksstudio.
              </p>
              <p>
                På fjellsiden: en minilandsby med 10–12 minihus for kunstnere som bruker fotografi i
                sitt arbeid.
              </p>
              <p>
                Reguleringsvedtak for strandsiden ble vedtatt 12. mars 2019 og godkjent endelig mars
                2020 etter fem høringsrunder. Statens Vegvesen ga avkjørselstillatelse i oktober 2020.
                Norsk Kulturråd har bevilget støtte til forprosjektet.
              </p>
            </motion.div>
          </div>

          {/* Secondary column: pull-quote + aerial image */}
          <motion.div
            className="space-y-10 pt-2 lg:pt-20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Inline image */}
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop"
                alt="Lofoten fjell og hav sett fra luften"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <p className="absolute bottom-3 left-3 font-mono text-label text-paper/70 uppercase tracking-wider">
                Flakstad, Lofoten
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-6 border-l-2 border-prussian pl-6">
              {[
                { num: '10–12', label: 'Minihus på fjellsiden' },
                { num: '5', label: 'Høringsrunder, endelig godkjent 2020' },
                { num: '2015', label: 'Prosjektet startet' },
              ].map(({ num, label }) => (
                <div key={num}>
                  <p className="font-mono text-2xl text-prussian font-medium">{num}</p>
                  <p className="font-sans text-caption text-muted uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
