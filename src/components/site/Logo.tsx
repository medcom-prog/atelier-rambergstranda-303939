import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  tone?: 'paper' | 'graphite';
  className?: string;
}

const sizes = {
  sm: { atelier: 'text-base', sub: 'text-[9px]', subSpacing: 'tracking-[0.32em]', gap: 'mt-0.5' },
  md: { atelier: 'text-xl', sub: 'text-[10px]', subSpacing: 'tracking-[0.4em]', gap: 'mt-1' },
  lg: { atelier: 'text-3xl md:text-4xl', sub: 'text-[12px]', subSpacing: 'tracking-[0.5em]', gap: 'mt-2' },
  xl: { atelier: 'text-5xl md:text-6xl lg:text-7xl', sub: 'text-sm md:text-base', subSpacing: 'tracking-[0.6em]', gap: 'mt-3 md:mt-4' },
};

export function Logo({ size = 'md', tone = 'graphite', className }: LogoProps) {
  const s = sizes[size];
  const colorClass = tone === 'paper' ? 'text-paper' : 'text-graphite';

  return (
    <Link to="/" className={cn('block group', className)} aria-label="Atelier Rambergstranda — Hjem">
      <div className={cn('text-center font-serif uppercase leading-none', colorClass)}>
        <div className={cn(s.atelier, 'tracking-[0.14em] font-normal')}>
          Atelier
        </div>
        <div className={cn(s.sub, s.subSpacing, s.gap, 'font-normal opacity-95')}>
          Rambergstranda
        </div>
      </div>
    </Link>
  );
}
