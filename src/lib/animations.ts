import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
};

export const slideInLeft: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};

export const slideInRight: Variants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const championReveal: Variants = {
  initial: {
    scale: 1.2,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

export const abilityHover = {
  rest: { scale: 1, boxShadow: '0 0 0px rgba(0,0,0,0)' },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 30px rgba(11, 197, 234, 0.6)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const statBarFill = (value: number): Variants => ({
  initial: { width: 0 },
  animate: {
    width: `${value * 10}%`,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
});

export const particleFloat = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
