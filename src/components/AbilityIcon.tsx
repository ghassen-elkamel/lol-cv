import { motion } from 'framer-motion';
import type { Ability } from '../lib/data';

interface AbilityIconProps {
  ability: Ability;
  onClick: () => void;
  index: number;
}

export const AbilityIcon = ({ ability, onClick, index }: AbilityIconProps) => {
  const isUltimate = ability.key === 'R';
  const isPassive = ability.key === 'Passive';
  
  const size = isUltimate ? 'w-32 h-32' : isPassive ? 'w-20 h-20' : 'w-24 h-24';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center gap-3"
    >
      <motion.button
        onClick={onClick}
        className={`relative ${size} cursor-pointer group`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <linearGradient id={`grad-${ability.key}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: ability.color, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: ability.color, stopOpacity: 0.6 }} />
            </linearGradient>
            <filter id={`glow-${ability.key}`}>
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke={ability.color}
            strokeWidth="3"
            opacity="0.3"
          />
          
          <motion.circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke={`url(#grad-${ability.key})`}
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
          
          <motion.circle
            cx="50"
            cy="50"
            r="43"
            fill={`${ability.color}15`}
            stroke={ability.color}
            strokeWidth="1"
            filter={`url(#glow-${ability.key})`}
            animate={{
              r: [43, 45, 43],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`rounded-full flex items-center justify-center font-black text-3xl ${
              isUltimate ? 'w-20 h-20' : isPassive ? 'w-14 h-14' : 'w-16 h-16'
            }`}
            style={{
              background: `radial-gradient(circle, ${ability.color}40, ${ability.color}10)`,
              color: ability.color,
              textShadow: `0 0 10px ${ability.color}`,
            }}
          >
            {ability.key === 'Passive' ? '⚡' : ability.key}
          </div>
        </div>
        
        {isUltimate && (
          <motion.div
            className="absolute -inset-2 rounded-full border-2"
            style={{ borderColor: ability.color }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
        
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: `0 0 0px ${ability.color}`,
          }}
          whileHover={{
            boxShadow: `0 0 30px ${ability.color}`,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
      
      <div className="text-center">
        <div
          className="text-xs font-bold tracking-wider mb-1"
          style={{ color: ability.color }}
        >
          {ability.key === 'Passive' ? 'PASSIVE' : `KEY: ${ability.key}`}
        </div>
        <div className="text-sm font-bold text-text-primary">{ability.name}</div>
      </div>
    </motion.div>
  );
};
