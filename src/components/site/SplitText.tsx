import { cn } from '@/lib/utils';
import type { JSX } from 'react';

interface SplitTextProps {
  children: string;
  /** Split unit: by full word, or by line break */
  unit?: 'word' | 'line';
  className?: string;
  /** Stagger delay between units (seconds). Editorial pace ~0.06–0.10 */
  stagger?: number;
  /** Initial-load delay (seconds) */
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  /** Italicize specific words by 0-based word index (only for unit='word') */
  italic?: number[];
}

/**
 * Editorial word-by-word reveal — slow rise + fade. Implemented with
 * pure CSS keyframes (no framer-motion) because nested motion contexts
 * with PageTransition kept blocking the on-mount animation. CSS
 * animations fire on element insertion regardless of parent state.
 */
export function SplitText({
  children,
  unit = 'word',
  className,
  stagger = 0.07,
  delay = 0.2,
  as = 'h1',
  italic = [],
}: SplitTextProps) {
  const words: string[] =
    unit === 'line' ? children.split('\n') : children.trim().split(/\s+/);

  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(className)}>
      <style>{`
        @keyframes split-text-rise {
          from { opacity: 0; transform: translateY(0.55em); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {words.map((w, i) => (
        <span key={i} className="inline">
          <span
            className={cn(
              'inline-block will-change-transform',
              italic.includes(i) && 'italic'
            )}
            style={{
              opacity: 0,
              transform: 'translateY(0.55em)',
              animation: `split-text-rise 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay + i * stagger}s forwards`,
            }}
          >
            {w}
          </span>
          {i < words.length - 1 ? (unit === 'line' ? <br /> : ' ') : null}
        </span>
      ))}
    </Tag>
  );
}
