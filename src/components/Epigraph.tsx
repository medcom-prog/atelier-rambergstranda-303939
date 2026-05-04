import { motion } from 'framer-motion'

export function Epigraph() {
  return (
    <section className="bg-paper py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <motion.blockquote
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
    </section>
  )
}
