import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * Thin prussian-blue progress rule fixed to top of viewport.
 * Editorial accent that ties to the cyanotype palette.
 * Sits above the Nav (z-50) and below modal sheets.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 38,
    restDelta: 0.001,
  });

  // Fade in once user has scrolled enough that progress is meaningful
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.99, 1], [0, 1, 1, 0.5]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, opacity, transformOrigin: '0% 50%' }}
      className="fixed left-0 right-0 top-0 z-50 h-[2px] bg-prussian"
    />
  );
}
