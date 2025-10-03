import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LevelUpNotification = () => {
  const [show, setShow] = useState(false);
  const [level] = useState(2);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;

    const timer = setTimeout(() => {
      setShow(true);
      setHasShown(true);
      setTimeout(() => setShow(false), 1500);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [hasShown]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
          initial={{ scale: 0, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 15 }}
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg width="300" height="300" viewBox="0 0 300 300">
              <defs>
                <linearGradient id="levelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0BC5EA" />
                  <stop offset="50%" stopColor="#C8AA6E" />
                  <stop offset="100%" stopColor="#0BC5EA" />
                </linearGradient>
                <filter id="levelGlow">
                  <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <motion.circle
                cx="150"
                cy="150"
                r="120"
                fill="none"
                stroke="url(#levelGradient)"
                strokeWidth="8"
                filter="url(#levelGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />

              <motion.polygon
                points="150,30 200,100 280,120 210,180 230,260 150,220 70,260 90,180 20,120 100,100"
                fill="url(#levelGradient)"
                filter="url(#levelGlow)"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 360] }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />

              <circle cx="150" cy="150" r="60" fill="#010A13" stroke="url(#levelGradient)" strokeWidth="4" />

              <text
                x="150"
                y="140"
                textAnchor="middle"
                fill="#C8AA6E"
                fontSize="24"
                fontWeight="bold"
              >
                LEVEL
              </text>
              <text
                x="150"
                y="180"
                textAnchor="middle"
                fill="#0BC5EA"
                fontSize="60"
                fontWeight="black"
              >
                {level}
              </text>
            </svg>

            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              animate={{
                scale: [0, 2.5, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            >
              <div className="w-64 h-64 rounded-full border-4 border-gold" />
            </motion.div>

            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gold rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 45}deg) translateY(-150px)`,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
