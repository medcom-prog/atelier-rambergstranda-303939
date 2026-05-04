import { motion } from 'framer-motion'

export function ContactMinimal() {
  return (
    <section id="kontakt" className="bg-graphite py-24 md:py-36 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Heading */}
          <div>
            <motion.h2
              className="font-serif text-display-lg text-paper"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Skriv til oss.
            </motion.h2>
            <motion.p
              className="font-serif text-body-lg text-paper/60 mt-4 italic"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Galina Manikova er tilgjengelig for spørsmål om kurs,
              festivaler, residency og samarbeid.
            </motion.p>
          </div>

          {/* Contact info */}
          <motion.address
            className="not-italic space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="font-mono text-label text-paper/40 uppercase tracking-widest mb-2">
                E-post
              </p>
              <a
                href="mailto:galina@galina.no"
                className="font-serif text-display-md text-paper hover:text-prussian transition-colors duration-200"
              >
                galina@galina.no
              </a>
            </div>

            <div>
              <p className="font-mono text-label text-paper/40 uppercase tracking-widest mb-2">
                Telefon
              </p>
              <a
                href="tel:+4790017522"
                className="font-serif text-body-lg text-paper hover:text-prussian transition-colors duration-200"
              >
                +47 90 01 75 22
              </a>
            </div>

            <div>
              <p className="font-mono text-label text-paper/40 uppercase tracking-widest mb-2">
                Adresse
              </p>
              <p className="font-serif text-body text-paper/70">
                Galina Manikova<br />
                Vestre Braarudgaten 2b<br />
                3181 Horten
              </p>
            </div>
          </motion.address>

        </div>
      </div>
    </section>
  )
}
