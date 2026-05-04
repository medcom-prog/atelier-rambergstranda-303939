import { motion, type Variants } from 'framer-motion';
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
  as?: 'h1' | 'h2' | 'h3' | 'p';
  /** Italicize specific words by 0-based word index (only for unit='word') */
  italic?: number[];
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: '0.55em' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// Static map — defining motion components OUTSIDE of render avoids
// the new-component-each-render problem that breaks framer's variant
// orchestration (children stay stuck in the hidden state).
const motionTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
};

/**
 * Editorial word-by-word reveal — slow rise + fade, like a magazine title
 * being typeset. The wrapping motion element IS the heading tag, so the
 * staggerChildren orchestration cascades directly to each word.
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

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const MotionTag = motionTags[as];

  return (
    <MotionTag
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(className)}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className={cn('inline-block will-change-transform', italic.includes(i) && 'italic')}
        >
          {w}
          {i < words.length - 1 && (unit === 'line' ? <br /> : ' ')}
        </motion.span>
      ))}
    </MotionTag>
  );
}
