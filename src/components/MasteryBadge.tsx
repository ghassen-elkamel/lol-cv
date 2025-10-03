import { motion } from 'framer-motion';

export const MasteryBadge = () => {
  return (
    <motion.div
      className="fixed bottom-4 left-4 z-40"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.1 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(200, 170, 110, 0.3)',
            '0 0 40px rgba(200, 170, 110, 0.6)',
            '0 0 20px rgba(200, 170, 110, 0.3)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <svg width="100" height="120" viewBox="0 0 100 120">
          <defs>
            <linearGradient id="masteryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C8AA6E" />
              <stop offset="50%" stopColor="#F0E6D2" />
              <stop offset="100%" stopColor="#C8AA6E" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M50 10 L30 40 L10 45 L30 65 L25 85 L50 72 L75 85 L70 65 L90 45 L70 40 Z"
            fill="url(#masteryGradient)"
            stroke="#785A28"
            strokeWidth="2"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            fill="#010A13"
            stroke="url(#masteryGradient)"
            strokeWidth="2"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          <text
            x="50"
            y="60"
            textAnchor="middle"
            fill="#C8AA6E"
            fontSize="32"
            fontWeight="black"
          >
            7
          </text>

          <rect
            x="25"
            y="95"
            width="50"
            height="20"
            rx="10"
            fill="#C8AA6E"
          />
          <text
            x="50"
            y="109"
            textAnchor="middle"
            fill="#010A13"
            fontSize="12"
            fontWeight="black"
          >
            MASTERY
          </text>
        </svg>

        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <svg width="100" height="120" viewBox="0 0 100 120">
            <path
              d="M50 10 L30 40 L10 45 L30 65 L25 85 L50 72 L75 85 L70 65 L90 45 L70 40 Z"
              fill="none"
              stroke="#C8AA6E"
              strokeWidth="3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
