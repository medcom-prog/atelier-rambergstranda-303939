import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface TwoLinesMotifProps {
  /** Stroke color */
  tone?: 'paper' | 'graphite' | 'prussian';
  /** Static distance between the two lines (when not scrolled) */
  defaultGap?: number;
  className?: string;
  /** Height of the motif in px */
  height?: number;
}

/**
 * The "Between Two Tides" recurring motif: two horizontal lines whose
 * spacing breathes with scroll. Visual metaphor for distance / relation
 * / dialogue. Used at section boundaries on the residency page.
 */
export function TwoLinesMotif({
  tone = 'graphite',
  defaultGap = 40,
  className,
  height = 100,
}: TwoLinesMotifProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // The two lines drift apart and back as the section scrolls through the viewport
  const top = useTransform(scrollYProgress, [0, 0.5, 1], [defaultGap, defaultGap * 0.4, defaultGap]);
  const bottom = useTransform(scrollYProgress, [0, 0.5, 1], [-defaultGap, -defaultGap * 0.4, -defaultGap]);

  const colorClass =
    tone === 'paper' ? 'bg-paper/60' : tone === 'prussian' ? 'bg-prussian/70' : 'bg-graphite/30';

  return (
    <div
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cn('relative w-full flex items-center justify-center', className)}
      style={{ height }}
    >
      <div className="relative w-full max-w-md mx-auto">
        <motion.div
          style={{ y: top }}
          className={cn('absolute left-0 right-0 h-px', colorClass)}
        />
        <motion.div
          style={{ y: bottom }}
          className={cn('absolute left-0 right-0 h-px', colorClass)}
        />
      </div>
    </div>
  );
}
