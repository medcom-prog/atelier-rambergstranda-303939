import { animate, useInView, useMotionValue, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  /** Final value */
  to: number;
  /** Starting value (default 0) */
  from?: number;
  /** Duration in seconds */
  duration?: number;
  /** Format function for the displayed value */
  format?: (n: number) => string;
  className?: string;
}

/**
 * Number counter that animates up from `from` to `to` once the element
 * enters the viewport. Editorial feel: easing curve is slow-out
 * (no bounce, no overshoot).
 */
export function CountUp({
  to,
  from = 0,
  duration = 1.6,
  format = (n) => Math.round(n).toString(),
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const value = useMotionValue(from);
  const display = useTransform(value, (latest) => format(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, to, duration, value]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
