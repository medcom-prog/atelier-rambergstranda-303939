import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wordmark } from './Wordmark'

const links = [
  { label: 'Visjonen', href: '#visjonen' },
  { label: 'Arkitektur', href: '#arkitektur' },
  { label: 'Kurs', href: '#kurs' },
  { label: 'Festivaler', href: '#festivaler' },
  { label: 'Residency', href: '#residency' },
  { label: 'Kontakt', href: '#kontakt' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const variant = scrolled ? 'light' : 'dark'
  const textColor = scrolled ? 'text-graphite' : 'text-paper'

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-paper/95 backdrop-blur-sm border-b border-paper-soft shadow-sm' : 'bg-transparent'
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto px-6 md:px-12 lg:px-20 max-w-screen-2xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Wordmark variant={variant} />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Hovednav">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-label uppercase tracking-widest transition-opacity duration-200 hover:opacity-60 ${textColor}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden flex flex-col gap-1.5 p-2 ${textColor}`}
              aria-label={mobileOpen ? 'Lukk meny' : 'Åpne meny'}
            >
              <span className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-graphite flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-display-md text-paper italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
