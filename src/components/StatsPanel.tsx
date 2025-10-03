import { motion } from 'framer-motion';
import { fadeInUp, statBarFill, staggerContainer } from '../lib/animations';
import type { Champion } from '../lib/data';
import { useEffect, useState } from 'react';

interface StatsPanelProps {
  champion: Champion;
}

export const StatsPanel = ({ champion }: StatsPanelProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-panel');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    { name: 'Attack (Frontend)', value: champion.stats.frontend, color: 'bg-ability-q' },
    { name: 'Defense (Backend)', value: champion.stats.backend, color: 'bg-ability-w' },
    { name: 'Magic (DevOps)', value: champion.stats.devops, color: 'bg-ability-e' },
    { name: 'Attack Speed (Coding)', value: champion.stats.speed, color: 'bg-hextech-blue' },
    { name: 'Mana (Cloud/Scale)', value: champion.stats.scale, color: 'bg-gold' },
  ];

  return (
    <section id="stats-panel" data-achievement="stats" data-cursor="inspect" className="relative py-20 px-4 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #010A13 0%, #0F1923 50%, #010A13 100%)',
    }}>
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="hexPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <polygon points="10,1 17,5 17,13 10,17 3,13 3,5" fill="none" stroke="#0BC5EA" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#hexPattern)" />
        </svg>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      >
        <motion.div
          className="relative p-8 md:p-12 rounded-2xl overflow-hidden"
          variants={fadeInUp}
          style={{
            background: 'linear-gradient(135deg, rgba(30, 35, 40, 0.9), rgba(1, 10, 19, 0.9))',
            boxShadow: '0 0 60px rgba(200, 170, 110, 0.2), inset 0 0 80px rgba(11, 197, 234, 0.05)',
            border: '2px solid',
            borderImage: 'linear-gradient(135deg, #0BC5EA, #C8AA6E) 1',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-hextech-blue via-gold to-hextech-blue" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-hextech-blue via-gold to-hextech-blue" />

          <div className="mb-12 text-center">
            <motion.div 
              className="inline-block mb-4"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(200, 170, 110, 0.3)',
                  '0 0 40px rgba(200, 170, 110, 0.6)',
                  '0 0 20px rgba(200, 170, 110, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="px-8 py-3 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border-2 border-gold rounded-full">
                <h2 
                  className="text-5xl md:text-6xl font-black tracking-wider"
                  style={{
                    background: 'linear-gradient(135deg, #F0E6D2, #C8AA6E, #F0E6D2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {champion.name}
                </h2>
              </div>
            </motion.div>
            <p className="text-hextech-blue text-2xl italic font-light mb-2">
              "{champion.title}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-2 px-4 py-1 bg-hextech-blue/10 border border-hextech-blue/30 rounded-full">
                <span className="text-hextech-blue font-bold text-sm">⭐ LEVEL</span>
                <span className="text-gold font-bold">{champion.level}+</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-1 bg-victory/10 border border-victory/30 rounded-full">
                <span className="text-victory font-bold text-sm">💼 EXP</span>
                <span className="text-text-primary font-bold">{champion.level}Y</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-hextech-blue to-transparent" />
              <h3 className="text-2xl font-black text-hextech-blue tracking-[0.3em]">
                CHAMPION STATISTICS
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-hextech-blue to-transparent" />
            </div>
            
            <div className="space-y-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.name}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded border-2 flex items-center justify-center text-xs font-bold"
                        style={{
                          borderColor: stat.color === 'bg-ability-q' ? '#4A9FD8' : stat.color === 'bg-ability-w' ? '#8B5FBF' : stat.color === 'bg-ability-e' ? '#F0A93C' : stat.color === 'bg-hextech-blue' ? '#0BC5EA' : '#C8AA6E',
                          color: stat.color === 'bg-ability-q' ? '#4A9FD8' : stat.color === 'bg-ability-w' ? '#8B5FBF' : stat.color === 'bg-ability-e' ? '#F0A93C' : stat.color === 'bg-hextech-blue' ? '#0BC5EA' : '#C8AA6E',
                          background: `radial-gradient(circle, ${stat.color === 'bg-ability-q' ? '#4A9FD8' : stat.color === 'bg-ability-w' ? '#8B5FBF' : stat.color === 'bg-ability-e' ? '#F0A93C' : stat.color === 'bg-hextech-blue' ? '#0BC5EA' : '#C8AA6E'}15, transparent)`,
                        }}
                      >
                        {['⚔️', '🛡️', '⚡', '🚀', '☁️'][index]}
                      </div>
                      <span className="text-text-primary font-bold text-lg">{stat.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        {[...Array(10)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-6 rounded-sm"
                            style={{
                              backgroundColor: i < stat.value
                                ? (stat.color === 'bg-ability-q' ? '#4A9FD8' : stat.color === 'bg-ability-w' ? '#8B5FBF' : stat.color === 'bg-ability-e' ? '#F0A93C' : stat.color === 'bg-hextech-blue' ? '#0BC5EA' : '#C8AA6E')
                                : '#1E2328',
                              border: '1px solid ' + (i < stat.value ? 'transparent' : '#2A3038'),
                            }}
                            initial={{ scaleY: 0 }}
                            animate={isVisible ? { scaleY: i < stat.value ? 1 : 0.3 } : { scaleY: 0 }}
                            transition={{ delay: index * 0.1 + i * 0.05, duration: 0.2 }}
                          />
                        ))}
                      </div>
                      <span
                        className="text-2xl font-black min-w-[60px] text-right"
                        style={{
                          color: stat.color === 'bg-ability-q' ? '#4A9FD8' : stat.color === 'bg-ability-w' ? '#8B5FBF' : stat.color === 'bg-ability-e' ? '#F0A93C' : stat.color === 'bg-hextech-blue' ? '#0BC5EA' : '#C8AA6E',
                        }}
                      >
                        {stat.value}/10
                      </span>
                    </div>
                  </div>
                  <div className="relative h-2 bg-dark-bg/80 rounded-full overflow-hidden border border-card-bg">
                    <motion.div
                      className={`absolute inset-y-0 left-0 ${stat.color} rounded-full`}
                      variants={statBarFill(stat.value)}
                      initial="initial"
                      animate={isVisible ? "animate" : "initial"}
                      style={{
                        boxShadow: `0 0 15px ${stat.color === 'bg-ability-q' ? '#4A9FD8' : stat.color === 'bg-ability-w' ? '#8B5FBF' : stat.color === 'bg-ability-e' ? '#F0A93C' : stat.color === 'bg-hextech-blue' ? '#0BC5EA' : '#C8AA6E'}60`,
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-12 pt-8 border-t border-hextech-blue/20"
            variants={fadeInUp}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-dark-bg/50 p-4 rounded-lg border border-hextech-blue/20 text-center">
                <div className="text-3xl mb-1">💪</div>
                <div className="text-hextech-blue text-xs font-bold mb-1">POWER LEVEL</div>
                <div className="text-gold text-xl font-black">
                  {Math.round((stats.reduce((acc, s) => acc + s.value, 0) / stats.length) * 10)}
                </div>
              </div>
              <div className="bg-dark-bg/50 p-4 rounded-lg border border-gold/20 text-center">
                <div className="text-3xl mb-1">🏆</div>
                <div className="text-gold text-xs font-bold mb-1">RANK</div>
                <div className="text-hextech-blue text-xl font-black">CHALLENGER</div>
              </div>
              <div className="bg-dark-bg/50 p-4 rounded-lg border border-victory/20 text-center">
                <div className="text-3xl mb-1">📈</div>
                <div className="text-victory text-xs font-bold mb-1">WIN RATE</div>
                <div className="text-gold text-xl font-black">100%</div>
              </div>
              <div className="bg-dark-bg/50 p-4 rounded-lg border border-ability-r/20 text-center">
                <div className="text-3xl mb-1">⚡</div>
                <div className="text-ability-r text-xs font-bold mb-1">MASTERY</div>
                <div className="text-gold text-xl font-black">LEVEL 7</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
