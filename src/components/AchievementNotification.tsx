import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const AchievementNotification = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [unlockedIds, setUnlockedIds] = useState<Set<string>>(new Set());

  const allAchievements: Achievement[] = [
    { id: 'stats', title: 'Champion Analysis', description: 'Viewed champion statistics', icon: '📊' },
    { id: 'abilities', title: 'Ability Scholar', description: 'Explored all abilities', icon: '⚡' },
    { id: 'skins', title: 'Skin Collector', description: 'Checked work experience', icon: '🎨' },
    { id: 'matches', title: 'Match Historian', description: 'Reviewed project victories', icon: '🏆' },
    { id: 'runes', title: 'Rune Master', description: 'Examined skill tree', icon: '✨' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const achievement = allAchievements.find(a => 
              sectionId.includes(a.id) || 
              entry.target.querySelector(`[data-achievement="${a.id}"]`)
            );
            
            if (achievement && !unlockedIds.has(achievement.id)) {
              setUnlockedIds(prev => new Set([...prev, achievement.id]));
              setAchievements(prev => [...prev, achievement]);
              setTimeout(() => {
                setAchievements(prev => prev.filter(a => a.id !== achievement.id));
              }, 4000);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [unlockedIds]);

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2 pointer-events-none">
      <AnimatePresence>
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            initial={{ x: 400, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 400, opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', damping: 15 }}
            className="pointer-events-auto"
          >
            <div
              className="p-4 rounded-lg border-2 border-gold min-w-[280px]"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 35, 40, 0.98), rgba(1, 10, 19, 0.98))',
                boxShadow: '0 0 30px rgba(200, 170, 110, 0.6)',
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="text-4xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {achievement.icon}
                </motion.div>
                <div className="flex-1">
                  <div className="text-gold text-xs font-bold tracking-wider mb-1">
                    ACHIEVEMENT UNLOCKED
                  </div>
                  <div className="text-text-primary font-bold text-sm mb-0.5">
                    {achievement.title}
                  </div>
                  <div className="text-text-secondary text-xs">
                    {achievement.description}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
