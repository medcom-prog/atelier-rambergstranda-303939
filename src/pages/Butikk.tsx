import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Plus, Minus } from 'lucide-react';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { SplitText } from '@/components/site/SplitText';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useT, useLang } from '@/i18n';
import { cn } from '@/lib/utils';

type ProductCategory = 'prints' | 'workshops' | 'books' | 'editions';

interface Product {
  id: string;
  name_no: string;
  name_en: string;
  meta_no: string;
  meta_en: string;
  category: ProductCategory;
  priceNok: number;
  image: string;
  status?: 'limited' | 'sold';
}

// Mock catalogue — visual only, no real fulfilment.
const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name_no: 'Lofoten — drone, 50×33 cm',
    name_en: 'Lofoten — drone, 50×33 cm',
    meta_no: 'Pigment-print · Hahnemühle Photo Rag · sign. + nummerert · ed. 25',
    meta_en: 'Pigment print · Hahnemühle Photo Rag · signed + numbered · ed. 25',
    category: 'prints',
    priceNok: 4200,
    image: '/images/drone-DJI_0552.jpg',
  },
  {
    id: 'p2',
    name_no: 'Strandfront — sommer, 70×47 cm',
    name_en: 'Beachfront — summer, 70×47 cm',
    meta_no: 'Pigment-print · ed. 12 · sign. + nummerert',
    meta_en: 'Pigment print · ed. 12 · signed + numbered',
    category: 'prints',
    priceNok: 6900,
    image: '/images/slide01-lofoten.jpg',
    status: 'limited',
  },
  {
    id: 'p3',
    name_no: 'Cyanotype-arbeid på akvarellpapir',
    name_en: 'Cyanotype work on watercolor paper',
    meta_no: 'Original alternativ-prosess · 30×40 cm · unika',
    meta_en: 'Original alternative-process work · 30×40 cm · unique',
    category: 'editions',
    priceNok: 8500,
    image: '/images/blasidet-29.jpg',
    status: 'limited',
  },
  {
    id: 'w1',
    name_no: 'Cyanotype-workshop · helg',
    name_en: 'Cyanotype workshop · weekend',
    meta_no: 'Lørdag–søndag · maks 8 deltakere · Ramberg',
    meta_en: 'Saturday–Sunday · max 8 participants · Ramberg',
    category: 'workshops',
    priceNok: 3200,
    image: '/images/slide04-workshops.jpg',
  },
  {
    id: 'w2',
    name_no: 'Hullkamera + digitale negativer · 1 dag',
    name_en: 'Pinhole + digital negatives · 1 day',
    meta_no: 'Innføring i prosessen · max 6 deltakere',
    meta_en: 'Introduction to the process · max 6 participants',
    category: 'workshops',
    priceNok: 1800,
    image: '/images/slide04-festival.jpg',
  },
  {
    id: 'w3',
    name_no: 'Van Dyke Brown · 2-dagers fordypning',
    name_en: 'Van Dyke Brown · 2-day deep dive',
    meta_no: 'Med Galina Manikova · maks 6 deltakere',
    meta_en: 'With Galina Manikova · max 6 participants',
    category: 'workshops',
    priceNok: 4400,
    image: '/images/blasidet-23.jpg',
    status: 'limited',
  },
  {
    id: 'b1',
    name_no: 'Tomteanalyse + visuelt konsept (PDF)',
    name_en: 'Site analysis + visual concept (PDF)',
    meta_no: 'Anna K. Hov Larsen · HOV + EGGE · 2020 · 84 sider',
    meta_en: 'Anna K. Hov Larsen · HOV + EGGE · 2020 · 84 pages',
    category: 'books',
    priceNok: 240,
    image: '/images/slide-ny-tegning.jpg',
  },
  {
    id: 'b2',
    name_no: 'Between Two Tides — konseptdokument',
    name_en: 'Between Two Tides — concept paper',
    meta_no: 'Galina Manikova · 2026 · trykk + digitalt',
    meta_en: 'Galina Manikova · 2026 · print + digital',
    category: 'books',
    priceNok: 320,
    image: '/images/blasidet-32-v2.jpg',
  },
];

interface CartLine {
  product: Product;
  quantity: number;
}

function formatPrice(nok: number, lang: 'no' | 'en'): string {
  if (lang === 'no') {
    return `${nok.toLocaleString('nb-NO')} kr`;
  }
  return `NOK ${nok.toLocaleString('en-US')}`;
}

export default function Butikk() {
  const t = useT();
  const { lang } = useLang();
  const [category, setCategory] = useState<ProductCategory | 'all'>('all');
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const categories = [
    { id: 'all', label: t.shop.categoryAll },
    { id: 'prints', label: t.shop.categoryPrints },
    { id: 'workshops', label: t.shop.categoryWorkshops },
    { id: 'books', label: t.shop.categoryBooks },
    { id: 'editions', label: t.shop.categoryEditions },
  ];

  const filtered = useMemo(
    () => (category === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === category)),
    [category]
  );

  const cartCount = cart.reduce((acc, l) => acc + l.quantity, 0);
  const cartTotal = cart.reduce((acc, l) => acc + l.product.priceNok * l.quantity, 0);

  const addToCart = (p: Product) => {
    setCart((prev) => {
      const idx = prev.findIndex((l) => l.product.id === p.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return next;
      }
      return [...prev, { product: p, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((l) => (l.product.id === id ? { ...l, quantity: l.quantity + delta } : l))
        .filter((l) => l.quantity > 0)
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-paper pt-32 md:pt-40 pb-12 md:pb-16">
        <Container size="lg">
          <Eyebrow number="—">{t.shop.eyebrow}</Eyebrow>
          <SplitText
            as="h1"
            unit="word"
            stagger={0.075}
            delay={0.15}
            italic={[3]}
            className="font-serif text-display-lg md:text-display-xl text-graphite leading-[1.02] max-w-4xl"
          >
            {t.shop.heroH1}
          </SplitText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
            className="mt-8 font-serif text-body-lg text-graphite/70 max-w-prose-lg leading-relaxed"
          >
            {t.shop.heroSubtitle}
          </motion.p>
        </Container>
      </section>

      {/* Sticky filter bar + cart */}
      <section className="bg-paper sticky top-16 md:top-20 z-30 backdrop-blur-md bg-paper/85 border-y border-graphite/10">
        <Container size="xl">
          <div className="flex items-center gap-3 justify-between py-4">
            <nav
              aria-label={t.shop.eyebrow}
              className="flex gap-1 md:gap-3 overflow-x-auto no-scrollbar -mx-2 px-2"
            >
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCategory(c.id as ProductCategory | 'all')}
                  className={cn(
                    'shrink-0 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors',
                    category === c.id
                      ? 'text-graphite bg-paper-soft'
                      : 'text-graphite/55 hover:text-graphite'
                  )}
                >
                  {c.label}
                </button>
              ))}
            </nav>

            {/* Cart trigger */}
            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger
                aria-label={t.shop.cartLabel}
                className="relative shrink-0 inline-flex items-center gap-2 h-11 px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-graphite hover:bg-paper-soft transition-colors"
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                <span className="hidden sm:inline">{t.shop.cartLabel}</span>
                {cartCount > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded-full bg-graphite text-paper font-sans text-[10px]">
                    {cartCount}
                  </span>
                )}
              </SheetTrigger>
              <SheetContent side="right" className="bg-paper p-0 max-w-md flex flex-col">
                <div className="px-7 sm:px-9 pt-7 sm:pt-9 pb-4 border-b border-graphite/10 flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite">
                    {t.shop.cartLabel} {cartCount > 0 && `· ${cartCount}`}
                  </p>
                </div>

                <div className="flex-1 overflow-y-auto px-7 sm:px-9 py-6">
                  {cart.length === 0 ? (
                    <p className="font-serif text-base italic text-graphite/55 text-center py-12">
                      {t.shop.cartEmpty}
                    </p>
                  ) : (
                    <ul className="space-y-6">
                      {cart.map((line) => (
                        <li key={line.product.id} className="flex gap-4">
                          <div className="shrink-0 w-20 h-20 overflow-hidden">
                            <img
                              src={line.product.image}
                              alt=""
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-serif text-sm text-graphite leading-snug">
                              {lang === 'no' ? line.product.name_no : line.product.name_en}
                            </p>
                            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-graphite/55">
                              {formatPrice(line.product.priceNok, lang)}
                            </p>
                            <div className="mt-3 flex items-center gap-3">
                              <button
                                type="button"
                                onClick={() => updateQty(line.product.id, -1)}
                                aria-label="−"
                                className="inline-flex items-center justify-center h-7 w-7 border border-graphite/20 text-graphite hover:bg-graphite hover:text-paper transition-colors"
                              >
                                <Minus className="h-3 w-3" strokeWidth={1.5} />
                              </button>
                              <span className="font-mono text-sm text-graphite tabular-nums w-4 text-center">
                                {line.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQty(line.product.id, 1)}
                                aria-label="+"
                                className="inline-flex items-center justify-center h-7 w-7 border border-graphite/20 text-graphite hover:bg-graphite hover:text-paper transition-colors"
                              >
                                <Plus className="h-3 w-3" strokeWidth={1.5} />
                              </button>
                              <button
                                type="button"
                                onClick={() => updateQty(line.product.id, -line.quantity)}
                                aria-label="Remove"
                                className="ml-auto inline-flex items-center justify-center h-7 w-7 text-graphite/40 hover:text-graphite transition-colors"
                              >
                                <X className="h-3.5 w-3.5" strokeWidth={1.5} />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="px-7 sm:px-9 py-6 border-t border-graphite/10 space-y-4 bg-paper-soft">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite/55">
                        {t.shop.cartTotal}
                      </span>
                      <span className="font-serif text-2xl text-graphite">
                        {formatPrice(cartTotal, lang)}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-graphite text-paper font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-prussian transition-colors"
                    >
                      {t.shop.cartCheckout}
                    </button>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-graphite/40 text-center">
                      {lang === 'no'
                        ? 'Demo · betaling kobles til ved lansering'
                        : 'Demo · payment connects at launch'}
                    </p>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </section>

      {/* Product grid */}
      <section className="bg-paper py-16 md:py-24 pb-32 md:pb-48">
        <Container size="xl">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-20"
            >
              {filtered.map((p, i) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group/card"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-paper-soft">
                    <img
                      src={p.image}
                      alt={lang === 'no' ? p.name_no : p.name_en}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/card:scale-[1.04]"
                    />
                    {p.status && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] bg-paper text-graphite">
                        {p.status === 'limited' ? t.shop.limited : t.shop.sold}
                      </div>
                    )}
                  </div>
                  <div className="mt-5 flex flex-col gap-1">
                    <h2 className="font-serif text-lg md:text-xl text-graphite leading-snug">
                      {lang === 'no' ? p.name_no : p.name_en}
                    </h2>
                    <p className="font-sans text-sm text-graphite/55 leading-relaxed">
                      {lang === 'no' ? p.meta_no : p.meta_en}
                    </p>
                    <div className="mt-3 flex items-baseline justify-between gap-3">
                      <span className="font-mono text-sm text-graphite tabular-nums">
                        {formatPrice(p.priceNok, lang)}
                      </span>
                      <button
                        type="button"
                        onClick={() => addToCart(p)}
                        disabled={p.status === 'sold'}
                        className={cn(
                          'inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors',
                          p.status === 'sold'
                            ? 'text-graphite/30 cursor-not-allowed'
                            : 'text-graphite/65 hover:text-graphite'
                        )}
                      >
                        {t.shop.addToCart}
                        <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>
    </>
  );
}
