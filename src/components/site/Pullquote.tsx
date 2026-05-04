import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface PullquoteProps {
  children: ReactNode;
  cite?: string;
  variant?: 'paper' | 'graphite';
  size?: 'md' | 'lg' | 'xl';
  className?: string;
}

const sizes = {
  md: 'text-2xl md:text-3xl',
  lg: 'text-3xl md:text-display-md',
  xl: 'text-display-md md:text-display-lg',
};

export function Pullquote({ children, cite, variant = 'paper', size = 'lg', className }: PullquoteProps) {
  const isPaper = variant === 'paper';
  return (
    <figure
      className={cn(
        'relative py-16 md:py-24 px-6 md:px-12',
        isPaper ? 'bg-paper text-graphite' : 'bg-graphite text-paper',
        className
      )}
    >
      <div className="mx-auto max-w-prose-lg">
        <span
          aria-hidden="true"
          className={cn(
            'block font-serif text-7xl md:text-8xl leading-none mb-2 -ml-1',
            isPaper ? 'text-prussian/60' : 'text-paper/30'
          )}
        >
          “
        </span>
        <blockquote
          className={cn(
            'font-serif italic leading-[1.2]',
            sizes[size],
            isPaper ? 'text-graphite' : 'text-paper'
          )}
        >
          {children}
        </blockquote>
        {cite && (
          <figcaption
            className={cn(
              'mt-8 font-mono text-[11px] uppercase tracking-[0.22em] not-italic',
              isPaper ? 'text-graphite/55' : 'text-paper/55'
            )}
          >
            — {cite}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
