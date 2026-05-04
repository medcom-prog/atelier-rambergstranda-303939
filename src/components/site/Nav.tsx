import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
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

export function Nav({ variant = 'solid' }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isOnPaper = variant === 'solid' || scrolled;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-300',
        isOnPaper ? 'bg-paper/85 backdrop-blur-md border-b border-graphite/8' : 'bg-transparent'
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
                    'font-sans text-[11px] uppercase tracking-[0.2em] transition-opacity duration-200',
                    isOnPaper ? 'text-graphite' : 'text-paper',
                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                  )
                }
              >
                {r.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Åpne meny"
              className={cn(
                'lg:hidden inline-flex items-center justify-center h-10 w-10 -mr-2 transition-colors',
                isOnPaper ? 'text-graphite' : 'text-paper'
              )}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </SheetTrigger>
            <SheetContent side="right" className="bg-paper text-graphite flex flex-col p-8">
              <div className="mb-8">
                <Logo size="md" tone="graphite" />
              </div>
              <nav className="flex flex-col gap-1" aria-label="Mobilmeny">
                {ROUTES.map((r) => (
                  <Link
                    key={r.href}
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
    </header>
  );
}
