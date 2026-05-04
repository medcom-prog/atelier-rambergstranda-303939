import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Nav } from '@/components/site/Nav';
import { Footer } from '@/components/site/Footer';
import Home from '@/pages/Home';
import OmProsjektet from '@/pages/OmProsjektet';
import VisueltKonsept from '@/pages/VisueltKonsept';
import Tomteanalyse from '@/pages/Tomteanalyse';
import Tidslinje from '@/pages/Tidslinje';
import Kontakt from '@/pages/Kontakt';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Let the in-page anchor scroll handle itself
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Wait one frame for layout
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Layout({ children, transparentNav = false }: { children: React.ReactNode; transparentNav?: boolean }) {
  return (
    <div className="bg-paper text-graphite antialiased min-h-screen">
      <Nav variant={transparentNav ? 'transparent' : 'solid'} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout transparentNav>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/om-prosjektet"
          element={
            <Layout transparentNav>
              <OmProsjektet />
            </Layout>
          }
        />
        <Route
          path="/visuelt-konsept"
          element={
            <Layout transparentNav>
              <VisueltKonsept />
            </Layout>
          }
        />
        <Route
          path="/tomteanalyse"
          element={
            <Layout>
              <Tomteanalyse />
            </Layout>
          }
        />
        <Route
          path="/tidslinje"
          element={
            <Layout>
              <Tidslinje />
            </Layout>
          }
        />
        <Route
          path="/kontakt"
          element={
            <Layout>
              <Kontakt />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <div className="min-h-screen flex items-center justify-center px-6 py-20">
                <div className="text-center max-w-md">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-graphite/50 mb-4">
                    404 — Ikke funnet
                  </p>
                  <h1 className="font-serif text-display-md text-graphite">Siden finnes ikke.</h1>
                  <a
                    href="/"
                    className="inline-block mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-graphite hover:text-prussian transition-colors"
                  >
                    ← Til forsiden
                  </a>
                </div>
              </div>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
