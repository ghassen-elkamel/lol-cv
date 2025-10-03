import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const GoldCounter = () => {
  const [gold, setGold] = useState(0);
  const [showGain, setShowGain] = useState(false);
  const [gainAmount, setGainAmount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const gain = Math.floor(Math.random() * 50) + 10;
      setGainAmount(gain);
      setGold(prev => prev + gain);
      setShowGain(true);
      setTimeout(() => setShowGain(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed top-20 right-4 z-40"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <div
        className="relative px-6 py-3 rounded-lg cursor-pointer"
        data-easter-gold
        style={{
          background: 'linear-gradient(135deg, rgba(200, 170, 110, 0.2), rgba(200, 170, 110, 0.1))',
          border: '2px solid #C8AA6E',
          boxShadow: '0 0 20px rgba(200, 170, 110, 0.4)',
        }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="text-3xl"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            💰
          </motion.div>
          <div>
            <div className="text-gold text-xs font-bold">EXPERIENCE POINTS</div>
            <motion.div
              className="text-gold text-2xl font-black"
              key={gold}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              {gold.toLocaleString()}
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {showGain && (
            <motion.div
              className="absolute -top-8 right-4 text-gold font-black text-xl"
              initial={{ y: 0, opacity: 1, scale: 0.8 }}
              animate={{ y: -20, opacity: 0, scale: 1.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                textShadow: '0 0 10px rgba(200, 170, 110, 0.8)',
              }}
            >
              +{gainAmount}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
