import { motion, useScroll } from 'framer-motion';

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1"
      style={{
        background: 'linear-gradient(90deg, #010A13 0%, #1E2328 50%, #010A13 100%)',
      }}
    >
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: scrollYProgress,
          background: 'linear-gradient(90deg, #0BC5EA 0%, #C8AA6E 50%, #0BC5EA 100%)',
          boxShadow: '0 0 20px rgba(11, 197, 234, 0.8)',
        }}
      />
    </motion.div>
  );
};
