import { motion } from 'framer-motion';
import { championReveal, fadeIn } from '../lib/animations';
import type { Champion } from '../lib/data';
import { HexagonBackground } from './HexagonBackground';
import { ChampionPortrait } from './ChampionPortrait';

interface HeroSectionProps {
  champion: Champion;
  onLockIn: () => void;
}

export const HeroSection = ({ champion, onLockIn }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-dark-bg flex items-center justify-center py-12">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-hextech-blue/5 via-dark-bg to-gold/5" />
        <HexagonBackground />
      </div>

      <motion.div
        className="relative z-10 px-4 w-full max-w-7xl mx-auto"
        variants={championReveal}
        initial="initial"
        animate="animate"
      >
        <motion.div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold" />
            <h2 className="text-gold text-xl md:text-2xl font-bold tracking-[0.3em] uppercase">
              Champion Select
            </h2>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        <motion.div
          className="relative p-8 md:p-12 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={fadeIn}
          style={{
            background: 'linear-gradient(135deg, rgba(30, 35, 40, 0.95), rgba(1, 10, 19, 0.95))',
            border: '2px solid transparent',
            backgroundClip: 'padding-box',
            boxShadow: '0 0 40px rgba(11, 197, 234, 0.3), inset 0 0 60px rgba(11, 197, 234, 0.1)',
          }}
        >
          <div className="absolute inset-0 rounded-lg pointer-events-none" style={{
            background: 'linear-gradient(135deg, #0BC5EA, #C8AA6E)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            padding: '2px',
          }} />

          <div className="space-y-6 text-center lg:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #F0E6D2, #C8AA6E, #F0E6D2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px rgba(200, 170, 110, 0.4))',
              }}
            >
              {champion.name}
            </motion.h1>

            <motion.p className="text-lg md:text-xl lg:text-2xl text-hextech-blue italic font-light tracking-wide">
              "{champion.title}"
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              <div className="relative bg-dark-bg/60 p-4 rounded-lg border border-hextech-blue/40">
                <div className="text-hextech-blue text-[10px] font-bold tracking-wider mb-1 uppercase">Experience</div>
                <div className="text-text-primary text-xl font-bold">{champion.level}+ Years</div>
              </div>
              <div className="relative bg-dark-bg/60 p-4 rounded-lg border border-gold/40">
                <div className="text-gold text-[10px] font-bold tracking-wider mb-1 uppercase">Role</div>
                <div className="text-text-primary text-xl font-bold">Full-Stack</div>
              </div>
              <div className="relative bg-dark-bg/60 p-4 rounded-lg border border-victory/40">
                <div className="text-victory text-[10px] font-bold tracking-wider mb-1 uppercase">Region</div>
                <div className="text-text-primary text-xl font-bold">{champion.region.split('/')[0]}</div>
              </div>
            </div>

            <motion.button
              onClick={onLockIn}
              className="relative group px-12 py-4 font-bold text-xl tracking-wider overflow-hidden rounded-lg mt-6 border-2 border-dark-bg/50 attack-cursor w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              data-cursor="attack"
              style={{
                background: 'linear-gradient(135deg, #C8AA6E 0%, #F0E6D2 50%, #C8AA6E 100%)',
                boxShadow: '0 0 25px rgba(200, 170, 110, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
              }}
            >
              <span className="relative z-10 font-black tracking-[0.2em] drop-shadow-lg" style={{
                color: '#010A13',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
              }}>LOCK IN</span>
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #0BC5EA 0%, #4A9FD8 100%)',
                }}
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              <span className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-black tracking-[0.2em]" style={{
                color: '#010A13',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
              }}>
                LOCK IN
              </span>
            </motion.button>

            <motion.div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-text-secondary text-xs">
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-hextech-blue"
              />
              <span>Click to enter the Rift</span>
            </motion.div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <ChampionPortrait level={champion.level} />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  );
};
