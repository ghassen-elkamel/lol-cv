import { motion } from 'framer-motion';

interface ChampionPortraitProps {
  level: number;
}

export const ChampionPortrait = ({ level }: ChampionPortraitProps) => {
  return (
    <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto mb-20 cursor-pointer" data-easter-champion>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8AA6E" />
            <stop offset="50%" stopColor="#F0E6D2" />
            <stop offset="100%" stopColor="#C8AA6E" />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0BC5EA" />
            <stop offset="50%" stopColor="#4A9FD8" />
            <stop offset="100%" stopColor="#0BC5EA" />
          </linearGradient>
          <clipPath id="hexClip">
            <polygon points="100,10 175,55 175,145 100,190 25,145 25,55" />
          </clipPath>
        </defs>
        
        <motion.polygon
          points="100,5 180,52.5 180,147.5 100,195 20,147.5 20,52.5"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        <motion.polygon
          points="100,8 177,54 177,146 100,192 23,146 23,54"
          fill="none"
          stroke="url(#blueGradient)"
          strokeWidth="2"
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      <motion.div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ clipPath: 'polygon(50% 5%, 90% 30%, 90% 70%, 50% 95%, 10% 70%, 10% 30%)' }}
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-br from-hextech-blue/30 to-gold/30" />
          <img 
            src="/profile.jpg" 
            alt="Champion Portrait"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className="w-full h-full hidden items-center justify-center text-8xl font-bold text-gold">
            ⚔️
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold via-yellow-300 to-gold text-dark-bg px-5 py-2 font-bold text-lg rounded-full border-3 border-dark-bg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          boxShadow: '0 0 15px rgba(200, 170, 110, 0.7), inset 0 0 8px rgba(255, 255, 255, 0.4)',
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="text-xl">⭐</span>
          <span className="text-base">LEVEL {level}</span>
          <span className="text-xl">⭐</span>
        </div>
      </motion.div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gold rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: `rotate(${i * 60}deg) translateY(-130px)`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};
