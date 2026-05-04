import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  number?: string;
  tone?: 'graphite' | 'paper' | 'prussian';
}

export function Eyebrow({ number, tone = 'graphite', className, children, ...props }: EyebrowProps) {
  const colorClass = {
    graphite: 'text-graphite/55',
    paper: 'text-paper/55',
    prussian: 'text-prussian',
  }[tone];

  return (
    <p
      className={cn(
        'font-mono text-[11px] uppercase tracking-[0.25em] mb-5 md:mb-7',
        colorClass,
        className
      )}
      {...props}
    >
      {number && <span className="opacity-65 mr-3">{number}</span>}
      {children}
    </p>
  );
}
