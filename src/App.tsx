import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { StatsPanel } from './components/StatsPanel';
import { AbilitiesGrid } from './components/AbilitiesGrid';
import { SkinsCarousel } from './components/SkinsCarousel';
import { MatchHistory } from './components/MatchHistory';
import { RunesTree } from './components/RunesTree';
import { SummonerProfile } from './components/SummonerProfile';
import { ContactPanel } from './components/ContactPanel';
import { LoadingScreen } from './components/LoadingScreen';
import { HealthManaBar } from './components/HealthManaBar';
import { Minimap } from './components/Minimap';
import { GoldCounter } from './components/GoldCounter';
import { MasteryBadge } from './components/MasteryBadge';
import { LevelUpNotification } from './components/LevelUpNotification';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { AchievementNotification } from './components/AchievementNotification';
import { LoLCursor } from './components/LoLCursor';
import { SectionDivider } from './components/SectionDivider';
import { EasterEggs } from './components/EasterEggs';
import { championData } from './lib/data';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLocked, setIsLocked] = useState(false);
  const [showVictory, setShowVictory] = useState(false);

  useEffect(() => {
    if (!isLocked) return;
    
    let hasTriggered = false;
    
    const handleScroll = () => {
      if (hasTriggered) return;
      
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 90) {
        hasTriggered = true;
        setShowVictory(true);
        setTimeout(() => setShowVictory(false), 2000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLocked]);

  const handleLockIn = () => {
    setIsLocked(true);
    setTimeout(() => {
      document.getElementById('stats-panel')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-text-primary">
      <LoLCursor />
      <EasterEggs />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        ) : !isLocked ? (
          <motion.div
            key="hero"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8 }}
          >
            <HeroSection champion={championData} onLockIn={handleLockIn} />
          </motion.div>
        ) : (
          <>
            <ScrollProgressBar />
            <HealthManaBar 
              health={100} 
              mana={95} 
              name={championData.name}
              level={championData.level}
            />
            <GoldCounter />
            <Minimap />
            <MasteryBadge />
            <LevelUpNotification />
            <AchievementNotification />

            <motion.div
              key="content"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

            <StatsPanel champion={championData} />
            <SectionDivider />
            <AbilitiesGrid abilities={championData.abilities} />
            <SectionDivider />
            <SkinsCarousel skins={championData.skins} />
            <SectionDivider />
            <MatchHistory matches={championData.matchHistory} />
            <SectionDivider />
            <RunesTree runes={championData.runes} />
            <SectionDivider />
            <SummonerProfile profile={championData.summonerProfile} />
            <SectionDivider />
            <ContactPanel contact={championData.contact} />

            <footer className="py-8 px-4 bg-card-bg border-t border-border">
              <div className="max-w-7xl mx-auto text-center">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gold mb-2">
                    {championData.name}
                  </h3>
                  <p className="text-text-secondary italic">
                    {championData.title}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm text-text-secondary">
                  <span>Level {championData.level}+ Years</span>
                  <span>•</span>
                  <span>{championData.region}</span>
                  <span>•</span>
                  <span>Full-Stack Developer</span>
                </div>

                <div className="text-text-secondary text-sm">
                  <p className="mb-2">
                    Built with React 19, TypeScript, Tailwind CSS, Framer Motion & ❤️
                  </p>
                  <p>
                    © 2025 {championData.name.split(' ')[0]}. All rights reserved.
                  </p>
                </div>

                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="mt-6 px-6 py-2 bg-hextech-blue text-dark-bg font-bold rounded-lg hover:scale-105 transition-transform"
                  whileHover={{ boxShadow: '0 0 20px rgba(11, 197, 234, 0.6)' }}
                >
                  BACK TO TOP
                </motion.button>
              </div>
            </footer>

                <AnimatePresence>
                  {showVictory && (
                    <motion.div
                      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 90 }}
                        transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 15 }}
                        className="text-center"
                      >
                        <motion.div
                          className="text-9xl font-black mb-4"
                          style={{
                            background: 'linear-gradient(135deg, #00C8C8, #0BC5EA, #C8AA6E)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 80px rgba(0, 200, 200, 0.5)',
                          }}
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          VICTORY
                        </motion.div>
                        <motion.div
                          className="text-3xl text-gold font-bold"
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                        >
                          You've explored the entire champion profile! 🏆
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
          </motion.div>
          </>
        )}
      </AnimatePresence>

      {isLocked && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          onClick={() => {
            setIsLocked(false);
            setShowVictory(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="fixed top-4 left-4 z-50 px-4 py-2 bg-dark-bg/90 border-2 border-gold/60 text-gold font-bold text-sm rounded-lg hover:bg-gold hover:text-dark-bg hover:border-gold transition-all backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          style={{
            boxShadow: '0 0 15px rgba(200, 170, 110, 0.3)',
          }}
        >
          ← CHAMPION SELECT
        </motion.button>
      )}
    </div>
  );
}

export default App;