import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Slide {
  src: string;
  alt: string;
  caption: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  autoplayMs?: number;
}

/**
 * Full-bleed slide hero — mirrors the source homepage's slide carousel
 * (Lofoten / Kunstnerboligen / Workshops / Festivaler / Utstillinger).
 * Slow Ken-Burns motion on each slide, soft cross-fade between slides,
 * caption text typeset over the image with bottom-aligned safe zone.
 */
export function HeroCarousel({ slides, autoplayMs = 6500 }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 36 });
  const [selected, setSelected] = useState(0);

  const goTo = useCallback(
    (i: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(i);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || autoplayMs <= 0) return;
    const id = window.setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayMs);
    return () => window.clearInterval(id);
  }, [emblaApi, autoplayMs]);

  return (
    <section
      className="relative h-screen min-h-[640px] overflow-hidden bg-graphite"
      aria-label="Atelier Rambergstranda"
    >
      {/* Carousel viewport */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={slide.src} className="relative flex-[0_0_100%] h-full">
              <motion.img
                key={`${slide.src}-${selected === i}`}
                src={slide.src}
                alt={slide.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'low'}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.06 }}
                animate={{ scale: selected === i ? 1.0 : 1.06 }}
                transition={{ duration: autoplayMs / 1000 + 1.5, ease: 'linear' }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-graphite/30 via-graphite/10 to-graphite/65" />
            </div>
          ))}
        </div>
      </div>

      {/* Caption overlay (bottom-left) */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-12 lg:p-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-paper/75 mb-4">
              ({String(selected + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')})
            </p>
            <h2 className="font-serif text-display-lg text-paper">
              {slides[selected].caption}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="absolute right-6 md:right-12 bottom-12 md:bottom-16 z-20 hidden md:flex flex-col gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Gå til lysbilde ${i + 1}`}
            className={cn(
              'h-px transition-all duration-500',
              selected === i ? 'w-12 bg-paper' : 'w-6 bg-paper/40 hover:bg-paper/70'
            )}
          />
        ))}
      </div>
    </section>
  );
}
