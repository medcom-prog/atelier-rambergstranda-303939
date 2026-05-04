import { motion } from 'framer-motion'

export function Epigraph() {
  return (
    <section className="bg-paper py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-16 items-center">

          {/* Vertical rule — desktop only */}
          <motion.div
            className="hidden md:block"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-px h-32 bg-prussian ml-auto" />
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif text-display-md text-graphite italic leading-snug">
              "The only thing worse than being blind is having sight but no vision."
            </p>
            <footer className="mt-6">
              <cite className="font-mono text-label text-muted uppercase tracking-widest not-italic">
                Helen Keller
              </cite>
            </footer>
          </motion.blockquote>

        </div>
      </div>
    </section>
  )
}
