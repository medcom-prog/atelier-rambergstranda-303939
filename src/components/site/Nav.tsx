import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';

const ROUTES: ReadonlyArray<{ href: string; label: string }> = [
  { href: '/', label: 'Hjem' },
  { href: '/om-prosjektet', label: 'Om prosjektet' },
  { href: '/visuelt-konsept', label: 'Visuelt konsept' },
  { href: '/tomteanalyse', label: 'Tomteanalyse' },
  { href: '/tidslinje', label: 'Tidslinje' },
  { href: '/kontakt', label: 'Kontakt' },
];

interface NavProps {
  variant?: 'transparent' | 'solid';
}

/**
 * Sticky top navigation. Becomes opaque on scroll past hero.
 * Hides when scrolling down past 240px, reveals again on scroll up
 * (better mobile reading experience). Mobile menu via Radix Sheet.
 */
export function Nav({ variant = 'solid' }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      const dy = y - lastY.current;
      // Only react past the fold and only if delta is significant
      if (y > 240 && Math.abs(dy) > 6) {
        if (dy > 0) {
          // scrolling down — hide
          setHidden(true);
        } else {
          // scrolling up — reveal
          setHidden(false);
        }
      } else if (y <= 240) {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close mobile sheet on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isOnPaper = variant === 'solid' || scrolled;

  return (
    <motion.header
      animate={{ y: hidden ? '-110%' : 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-300',
        isOnPaper
          ? 'bg-paper/85 backdrop-blur-md border-b border-graphite/8'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo
            size="md"
            tone={isOnPaper ? 'graphite' : 'paper'}
            className="shrink-0"
          />

          {/* Desktop nav */}
          <nav
            aria-label="Hovedmeny"
            className="hidden lg:flex items-center gap-8"
          >
            {ROUTES.slice(1).map((r) => (
              <NavLink
                key={r.href}
                to={r.href}
                className={({ isActive }) =>
                  cn(
                    'relative font-sans text-[11px] uppercase tracking-[0.2em] transition-opacity duration-200 py-2',
                    isOnPaper ? 'text-graphite' : 'text-paper',
                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {r.label}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          aria-hidden="true"
                          className={cn(
                            'absolute left-0 right-0 -bottom-0.5 h-px',
                            isOnPaper ? 'bg-graphite' : 'bg-paper'
                          )}
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 35,
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Åpne meny"
              className={cn(
                'lg:hidden inline-flex items-center justify-center h-11 w-11 -mr-2 transition-colors',
                isOnPaper ? 'text-graphite' : 'text-paper'
              )}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </SheetTrigger>
            <SheetContent side="right" className="bg-paper text-graphite flex flex-col p-7 sm:p-9 max-w-sm">
              <div className="mb-8">
                <Logo size="md" tone="graphite" />
              </div>
              <nav className="flex flex-col gap-1" aria-label="Mobilmeny">
                {ROUTES.map((r, i) => (
                  <motion.div
                    key={r.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.06 + i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      to={r.href}
                      className={cn(
                        'block font-serif text-3xl py-3 transition-colors',
                        location.pathname === r.href
                          ? 'text-graphite'
                          : 'text-graphite/55 hover:text-graphite'
                      )}
                    >
                      {r.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto pt-10 border-t border-graphite/15">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Galina Manikova
                </p>
                <a
                  href="mailto:galina@galina.no"
                  className="block mt-2 font-serif text-base text-graphite hover:text-prussian transition-colors"
                >
                  galina@galina.no
                </a>
                <a
                  href="tel:+4790017522"
                  className="block mt-1 font-serif text-base text-graphite hover:text-prussian transition-colors"
                >
                  +47 90 01 75 22
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
