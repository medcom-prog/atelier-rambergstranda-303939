import { motion } from 'framer-motion'
import { Wordmark } from './Wordmark'

const navLinks = [
  { label: 'Visjonen', href: '#visjonen' },
  { label: 'Arkitektur', href: '#arkitektur' },
  { label: 'Kurs', href: '#kurs' },
  { label: 'Festivaler', href: '#festivaler' },
  { label: 'Residency', href: '#residency' },
  { label: 'Kontakt', href: '#kontakt' },
]

export function FooterCredits() {
  return (
    <footer className="bg-paper border-t border-paper-soft py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-16">

          {/* Wordmark + tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Wordmark variant="light" className="mb-4" />
            <p className="font-sans text-caption text-muted max-w-xs leading-relaxed">
              Kunstnerbolig, workshops, festivaler og artist-in-residence på
              Norges vakreste strand. Et prosjekt av Galina Manikova.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            aria-label="Sidenavigasjon"
          >
            <p className="font-mono text-label text-muted uppercase tracking-widest mb-4">
              Sider
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-caption text-graphite hover:text-prussian transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Credits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-mono text-label text-muted uppercase tracking-widest mb-4">
              Krediteringer
            </p>
            <ul className="space-y-2">
              <li className="font-sans text-caption text-muted">Foto: Knut-Ivar Johansen (drone)</li>
              <li className="font-sans text-caption text-muted">Alternativ-prosess: Galina Manikova</li>
              <li className="font-sans text-caption text-muted">Arkitekt: HOV + EGGE Arkitekter, Rakkestad</li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-paper-soft pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-mono text-label text-muted">
            © {new Date().getFullYear()} Atelier Rambergstranda · Ramberg, Lofoten
          </p>
          <p className="font-mono text-label text-muted/50">
            Flakstad kommune · gnr. 29 / bnr. 185
          </p>
        </div>

      </div>
    </footer>
  )
}
