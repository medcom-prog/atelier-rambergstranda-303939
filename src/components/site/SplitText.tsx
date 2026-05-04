import { motion } from 'framer-motion';
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
 * Editorial word-by-word reveal — slow rise + fade, like a magazine title
 * being typeset. Uses per-word initial/animate with computed delays
 * (no variants orchestration — that proved unreliable across page
 * mount + PageTransition wrapping in this app).
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
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: '0.55em' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={cn(
            'inline-block will-change-transform',
            italic.includes(i) && 'italic'
          )}
        >
          {w}
          {i < words.length - 1 && (unit === 'line' ? <br /> : ' ')}
        </motion.span>
      ))}
    </Tag>
  );
}
