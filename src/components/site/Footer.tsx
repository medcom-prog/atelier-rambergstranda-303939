import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Separator } from '@/components/ui/separator';
import { useT } from '@/i18n';

export function Footer() {
  const t = useT();

  const sitemapLinks: ReadonlyArray<[string, string]> = [
    ['/', t.nav.home],
    ['/om-prosjektet', t.nav.about],
    ['/between-two-tides', t.nav.betweenTides],
    ['/visuelt-konsept', t.nav.visualConcept],
    ['/tomteanalyse', t.nav.siteAnalysis],
    ['/tidslinje', t.nav.timeline],
    ['/butikk', t.nav.shop],
    ['/bestill', t.nav.booking],
    ['/kontakt', t.nav.contact],
  ];

  return (
    <footer className="bg-graphite text-paper py-20 md:py-28 px-6 md:px-10 lg:px-14">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
          {/* Logo + tagline */}
          <div className="md:col-span-5">
            <Logo size="lg" tone="paper" className="!text-left" />
            <p className="mt-8 font-serif text-base md:text-lg text-paper/70 max-w-md italic leading-relaxed">
              {t.common.tagline} {t.common.projectBy}.
            </p>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/45 mb-6">
              {t.footer.sitemap}
            </p>
            <ul className="space-y-3 font-sans text-sm">
              {sitemapLinks.map(([href, label]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-paper/70 hover:text-paper transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/45 mb-6">
              {t.footer.contact}
            </p>
            <div className="space-y-2 font-serif text-base">
              <p className="text-paper">Galina Manikova</p>
              <a
                href="mailto:galina@galina.no"
                className="block text-paper/70 hover:text-paper transition-colors"
              >
                galina@galina.no
              </a>
              <a
                href="tel:+4790017522"
                className="block text-paper/70 hover:text-paper transition-colors"
              >
                +47 90 01 75 22
              </a>
              <p className="pt-2 text-paper/55 text-sm font-sans leading-relaxed whitespace-pre-line">
                {t.footer.address}
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-paper/10 my-14 md:my-16" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 leading-relaxed space-y-1">
            <p>{t.footer.photoCreditDrone}</p>
            <p>{t.footer.photoCreditAltProcess}</p>
            <p>{t.footer.architect}</p>
            <p>{t.footer.funder}</p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="/images/kulturradet.png"
              alt="Kulturrådet · Arts Council Norway"
              className="h-12 w-auto opacity-70"
              loading="lazy"
            />
          </div>
        </div>

        <p className="mt-14 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/30">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
