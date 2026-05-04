import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface MarqueeProps {
  /** Items to repeat across the marquee */
  items: string[];
  /** Total animation duration in seconds — slower = more deliberate */
  duration?: number;
  /** Reverse direction */
  reverse?: boolean;
  className?: string;
  /** Color of the separator dot */
  separator?: ReactNode;
}

/**
 * Slow editorial marquee — uses CSS keyframes for smooth, GPU-friendly
 * looping. Mirrors the duplicated content trick to hide the seam.
 * Pauses on hover for readability.
 */
export function Marquee({
  items,
  duration = 38,
  reverse = false,
  className,
  separator,
}: MarqueeProps) {
  // Duplicate enough times to ensure full-width coverage even on wide screens
  const repeated = [...items, ...items, ...items, ...items];
  const sep = separator ?? (
    <span aria-hidden="true" className="mx-6 md:mx-10 inline-block h-1.5 w-1.5 rounded-full bg-current opacity-40" />
  );

  return (
    <div
      className={cn(
        'group relative w-full overflow-hidden py-6 md:py-8',
        className
      )}
      aria-label={items.join(' · ')}
    >
      <div
        className="flex w-max items-center will-change-transform group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-${reverse ? 'right' : 'left'} ${duration}s linear infinite`,
        }}
      >
        {repeated.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center font-serif text-3xl md:text-5xl italic whitespace-nowrap">
            <span>{item}</span>
            {sep}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-25%, 0, 0); }
        }
        @keyframes marquee-right {
          0%   { transform: translate3d(-25%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </div>
  );
}
