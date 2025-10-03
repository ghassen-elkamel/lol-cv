import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const EasterEggs = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [showPentakill, setShowPentakill] = useState(false);
  const [showDance, setShowDance] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = [...keySequence, e.key.toLowerCase()].slice(-10);
      setKeySequence(newSequence);

      if (newSequence.join('').includes('qwer')) {
        showNotification('🔥 ABILITY COMBO! Ultimate Developer Activated!');
        setKeySequence([]);
      }

      if (newSequence.join('').includes('pentakill')) {
        setShowPentakill(true);
        setTimeout(() => setShowPentakill(false), 3000);
        setKeySequence([]);
      }

      if (e.key.toLowerCase() === 'd' && e.ctrlKey) {
        e.preventDefault();
        setShowDance(true);
        setTimeout(() => setShowDance(false), 2000);
        showNotification('💃 Dance Emote!');
      }

      if (e.key.toLowerCase() === 'b' && e.ctrlKey) {
        e.preventDefault();
        showNotification('🔵 Recalling to base... (Refreshing skills!)');
      }

      if (e.key.toLowerCase() === 'g' && newSequence.slice(-2).join('') === 'gg') {
        showNotification('😎 GG WP! Well Played!');
        setKeySequence([]);
      }

      const konamiCode = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
      const lastTen = newSequence.slice(-10).join(',');
      if (lastTen === konamiCode.join(',')) {
        showNotification('🎮 KONAMI CODE ACTIVATED! You are a true gamer! 🏆');
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
          document.body.style.animation = '';
        }, 5000);
        setKeySequence([]);
      }
    };

    const handleChampionClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-easter-champion]')) {
        const newCount = clickCount + 1;
        setClickCount(newCount);
        
        if (newCount === 5) {
          setShowPentakill(true);
          setTimeout(() => setShowPentakill(false), 3000);
          setClickCount(0);
        } else if (newCount === 3) {
          showNotification('⚔️ TRIPLE KILL!');
        }
      }
    };

    const handleMinimapClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-easter-minimap]')) {
        const pings = ['⚠️ Enemy Missing!', '⚠️ On My Way!', '⚠️ Danger!', '⚠️ Assist Me!'];
        showNotification(pings[Math.floor(Math.random() * pings.length)]);
      }
    };

    const handleGoldClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-easter-gold]')) {
        showNotification('💰 You have enough gold! Shop opening... (Skills fully stacked!)');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('click', handleChampionClick);
    window.addEventListener('click', handleMinimapClick);
    window.addEventListener('click', handleGoldClick);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('click', handleChampionClick);
      window.removeEventListener('click', handleMinimapClick);
      window.removeEventListener('click', handleGoldClick);
    };
  }, [keySequence, clickCount]);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <>
      <AnimatePresence>
        {notification && (
          <motion.div
            className="fixed top-20 right-4 z-[100] bg-dark-bg border-2 border-gold rounded-lg p-4 max-w-xs"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            style={{
              boxShadow: '0 0 30px rgba(200, 170, 110, 0.6)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <p className="text-gold font-bold text-sm">{notification}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPentakill && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: 'spring', stiffness: 150, damping: 12 }}
            >
              <motion.div
                className="text-8xl font-black mb-4"
                style={{
                  background: 'linear-gradient(135deg, #FF0000, #FF6B00, #FFD700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 30px rgba(255, 0, 0, 0.8))',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
              >
                PENTAKILL!
              </motion.div>
              <motion.div
                className="text-2xl text-gold font-bold"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                🔥 ACE! Legendary Developer! 🔥
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDance && (
          <motion.div
            className="fixed bottom-20 right-20 z-[100] text-8xl"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: 1, 
              rotate: [0, -10, 10, -10, 10, 0],
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ 
              rotate: { duration: 0.5, repeat: 3 },
              scale: { type: 'spring' }
            }}
          >
            🕺
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `}</style>
    </>
  );
};

