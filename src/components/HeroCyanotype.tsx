import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * THE WEIRD THING: Cyanotype Hero
 *
 * Full-bleed Lofoten drone image. As the user scrolls, a CSS SVG duotone filter
 * gradually tints the photo toward cyanotype Prussian blue (#1F3A5F).
 * This references Galina Manikova's analogue photography practice without being a gimmick.
 *
 * Technical: framer-motion useScroll + useTransform drives a filter opacity on an
 * absolutely-positioned color overlay using mix-blend-mode: color.
 */
export function HeroCyanotype() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // As we scroll through the hero, the cyanotype tint goes from 0 → 0.72
  const cyanotintOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 0.72])
  // Parallax: image moves up slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  // Scale down slightly at scroll end for a cinematic feel
  const imageScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.08])

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative h-screen min-h-[600px] overflow-hidden bg-graphite"
      aria-label="Rambergstranda, Lofoten"
    >
      {/* Drone photograph */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY, scale: imageScale }}
      >
        <img
          src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=2000&q=85&auto=format&fit=crop"
          alt="Luftfoto over Rambergstranda, Lofoten — foto: Knut-Ivar Johansen"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Base dark vignette so text is legible if we add any */}
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/30 via-transparent to-graphite/50" />
      </motion.div>

      {/* Cyanotype color overlay — mix-blend-mode: color tints the photo toward Prussian blue */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: cyanotintOpacity,
          background: 'linear-gradient(160deg, #1F3A5F 0%, #0d2240 100%)',
          mixBlendMode: 'color',
        }}
        aria-hidden="true"
      />

      {/* SVG cyanotype duotone filter — additional textural effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: useTransform(scrollYProgress, [0.1, 0.6], [0, 0.35]) }}
        aria-hidden="true"
      >
        <svg className="w-0 h-0 absolute" aria-hidden="true">
          <defs>
            <filter id="cyanotype-duotone">
              <feColorMatrix
                type="matrix"
                values="0.12 0.14 0.06 0 0
                        0.19 0.22 0.10 0 0.10
                        0.31 0.36 0.16 0 0.31
                        0    0    0   1 0"
              />
            </filter>
          </defs>
        </svg>
        <div className="w-full h-full" style={{ filter: 'url(#cyanotype-duotone)', backdropFilter: 'none' }} />
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div
          className="w-px h-16 bg-paper/40"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className="font-mono text-label text-paper/50 uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          Scroll
        </motion.span>
      </div>

      {/* Caption bottom-right */}
      <motion.p
        className="absolute bottom-8 right-8 font-mono text-label text-paper/40 uppercase tracking-wider hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-label="Bildetekst"
      >
        Rambergstranda · Flakstad, Lofoten
      </motion.p>
    </section>
  )
}
