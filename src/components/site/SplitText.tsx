import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SplitTextProps {
  children: string;
  /** Split unit: by full word, or by line break */
  unit?: 'word' | 'line';
  className?: string;
  /** Stagger delay between units (seconds). Editorial pace ~0.06–0.10 */
  stagger?: number;
  /** Initial-load delay (seconds) */
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  /** Italicize specific words by 0-based word index (only for unit='word') */
  italic?: number[];
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: '0.6em' },
  visible: { opacity: 1, y: 0 },
};

/**
 * Editorial word-by-word reveal — slow rise + fade, like a magazine title
 * being typeset. Use sparingly: hero headlines and section openers only.
 */
export function SplitText({
  children,
  unit = 'word',
  className,
  stagger = 0.07,
  delay = 0.2,
  as: Tag = 'h1',
  italic = [],
}: SplitTextProps) {
  const splits = unit === 'line' ? children.split('\n') : children.split(/(\s+)/);

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      // Wrap in a span so motion.* doesn't conflict with semantic block tags;
      // the parent passes the actual heading wrapper.
      style={{ display: 'block' }}
      className={cn(className)}
    >
      <Tag style={{ display: 'inline' }}>
        {splits.map((part, i) => {
          if (/^\s+$/.test(part)) {
            return <span key={i}>{part}</span>;
          }
          const wordIdx = splits.slice(0, i + 1).filter((p) => !/^\s+$/.test(p)).length - 1;
          const isItalic = italic.includes(wordIdx);
          return (
            <span key={i} className="inline-block overflow-hidden align-baseline">
              <motion.span
                variants={wordVariants}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className={cn('inline-block will-change-transform', isItalic && 'italic')}
              >
                {part as ReactNode}
              </motion.span>
            </span>
          );
        })}
      </Tag>
    </motion.span>
  );
}
