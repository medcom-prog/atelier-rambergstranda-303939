import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * THE WEIRD THING: Cyanotype Hero
 *
 * Full-bleed Lofoten drone image. As the user scrolls, framer-motion drives
 * a color overlay (mix-blend-mode: color) that gradually tints the photo toward
 * cyanotype Prussian blue (#1F3A5F), referencing Galina Manikova's analogue practice.
 */
export function HeroCyanotype() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const cyanotintOpacity = useTransform(scrollYProgress, [0, 0.65], [0, 0.7])
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative h-screen min-h-[600px] overflow-hidden bg-graphite"
      aria-label="Rambergstranda, Lofoten"
    >
      {/* Background drone photograph */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=2400&q=88&auto=format&fit=crop"
          alt="Luftfoto over Rambergstranda, Lofoten"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Strong dark overlay ensures text contrast at any lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/40 via-graphite/20 to-graphite/70" />
      </motion.div>

      {/* Cyanotype color overlay — revealed on scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: cyanotintOpacity,
          background: 'linear-gradient(145deg, #1F3A5F 0%, #0c2240 100%)',
          mixBlendMode: 'color',
        }}
        aria-hidden="true"
      />

      {/* Hero text — staggered entrance, full contrast white on dark */}
      <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:px-12 lg:px-20">
        <motion.p
          className="font-mono text-label text-paper/75 uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Ramberg · Flakstad · Lofoten
        </motion.p>
        <motion.h1
          className="font-serif text-display-xl text-paper max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Et kunstsenter
          <br />
          <em>ved sjøen.</em>
        </motion.h1>
        <motion.p
          className="font-serif text-body-lg text-paper/90 mt-4 max-w-xl italic"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Kunstnerbolig, workshops, festivaler og artist-in-residence.
          <br />
          Norges vakreste strand.
        </motion.p>
        <motion.a
          href="#visjonen"
          className="mt-8 inline-flex items-center gap-3 font-sans text-caption text-paper uppercase tracking-widest hover:opacity-70 transition-opacity duration-300 self-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Les om prosjektet
          <span aria-hidden="true">↓</span>
        </motion.a>
      </div>

      {/* Photo credit — sufficient contrast on dark bg */}
      <motion.p
        className="absolute bottom-6 right-6 font-mono text-label text-paper/60 uppercase tracking-wider hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        aria-label="Fotokreditering"
      >
        Foto: Knut-Ivar Johansen
      </motion.p>
    </section>
  )
}
