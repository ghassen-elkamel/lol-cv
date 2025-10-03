import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [tips] = useState([
    "💡 Full-Stack Development mastery: Building complete solutions from database to UI",
    "⚡ React 19 expertise: Leveraging the latest features for optimal performance",
    "🛡️ Security-first mindset: OAuth2, JWT, and enterprise-grade protection",
    "🚀 Cloud deployment expert: AWS, GCP, and Vercel infrastructure",
    "⚔️ Clean code warrior: Writing maintainable, scalable, and testable code",
  ]);
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const tipInterval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % tips.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(tipInterval);
    };
  }, [onComplete, tips.length]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-dark-bg flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-hextech-blue/10 via-dark-bg to-gold/10" />
      
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-hextech-blue rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <svg className="w-32 h-32 mx-auto" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0BC5EA" />
                <stop offset="50%" stopColor="#C8AA6E" />
                <stop offset="100%" stopColor="#0BC5EA" />
              </linearGradient>
            </defs>
            <motion.polygon
              points="100,10 175,55 175,145 100,190 25,145 25,55"
              fill="none"
              stroke="url(#loadingGradient)"
              strokeWidth="4"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.polygon
              points="100,30 160,65 160,135 100,170 40,135 40,65"
              fill="none"
              stroke="url(#loadingGradient)"
              strokeWidth="3"
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <text
              x="100"
              y="110"
              textAnchor="middle"
              fill="#C8AA6E"
              fontSize="48"
              fontWeight="bold"
            >
              ⚔️
            </text>
          </svg>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-black mb-4 tracking-wider"
          style={{
            background: 'linear-gradient(135deg, #0BC5EA, #C8AA6E, #0BC5EA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          animate={{
            backgroundPosition: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          LOADING CHAMPION DATA
        </motion.h2>

        <motion.div
          className="mb-8"
          key={currentTip}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-primary text-lg mb-2">
            {tips[currentTip]}
          </p>
        </motion.div>

        <div className="relative w-full max-w-xl mx-auto">
          <div className="relative h-4 bg-dark-bg/80 rounded-full overflow-hidden border-2 border-hextech-blue/30">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-hextech-blue via-gold to-hextech-blue rounded-full"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(11, 197, 234, 0.8)',
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-hextech-blue font-bold text-sm">
              Loading Assets...
            </span>
            <span className="text-gold font-black text-xl">
              {progress}%
            </span>
          </div>
        </div>

        <motion.div
          className="mt-8 flex justify-center gap-2"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-hextech-blue"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
