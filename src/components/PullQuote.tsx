import { motion } from 'framer-motion'

export function PullQuote() {
  return (
    <section className="bg-graphite py-24 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-serif text-display-xl text-paper italic leading-tight max-w-5xl">
            "Bebyggelsen vokser opp og ut av landskapet med ryggen mot fjellet og ansiktet mot havet."
          </p>
          {/* text-paper/70 on graphite = sufficient contrast for small label */}
          <footer className="mt-8">
            <cite className="font-mono text-label text-paper/70 uppercase tracking-widest not-italic">
              HOV + EGGE Arkitekter · Visuelt konsept
            </cite>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
