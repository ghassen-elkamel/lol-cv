import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';
import type { Ability } from '../lib/data';
import { useState } from 'react';
import { AbilityIcon } from './AbilityIcon';

interface AbilitiesGridProps {
  abilities: Ability[];
}

export const AbilitiesGrid = ({ abilities }: AbilitiesGridProps) => {
  const [selectedAbility, setSelectedAbility] = useState<Ability | null>(null);

  const passiveAbility = abilities.find(a => a.key === 'Passive');
  const basicAbilities = abilities.filter(a => a.key !== 'Passive' && a.key !== 'R');
  const ultimateAbility = abilities.find(a => a.key === 'R');

  return (
    <section id="abilities-section" data-achievement="abilities" className="relative py-20 px-4 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #010A13 0%, #0A1520 50%, #010A13 100%)',
    }}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #0BC5EA 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <h2 
              className="text-5xl md:text-6xl font-black tracking-wider"
              style={{
                background: 'linear-gradient(135deg, #C8AA6E, #F0E6D2, #C8AA6E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              CHAMPION ABILITIES
            </h2>
            <div className="h-px w-32 bg-gradient-to-l from-transparent via-gold to-transparent" />
          </div>
          <p className="text-hextech-blue text-lg font-medium tracking-wide">
            Click on any ability to view full details
          </p>
        </motion.div>

        <div className="relative bg-card-bg/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-hextech-blue/20" style={{
          boxShadow: '0 0 60px rgba(11, 197, 234, 0.2), inset 0 0 40px rgba(11, 197, 234, 0.05)',
        }}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {passiveAbility && (
              <div className="order-1">
                <AbilityIcon
                  ability={passiveAbility}
                  onClick={() => setSelectedAbility(passiveAbility)}
                  index={0}
                />
              </div>
            )}

            <div className="flex items-center justify-center gap-6 md:gap-8 order-2">
              {basicAbilities.map((ability, index) => (
                <AbilityIcon
                  key={ability.key}
                  ability={ability}
                  onClick={() => setSelectedAbility(ability)}
                  index={index + 1}
                />
              ))}
            </div>

            {ultimateAbility && (
              <div className="order-3 relative">
                <AbilityIcon
                  ability={ultimateAbility}
                  onClick={() => setSelectedAbility(ultimateAbility)}
                  index={4}
                />
                <motion.div
                  className="absolute -inset-4 rounded-full border border-ability-r/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            )}
          </div>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
          >
            {abilities.filter(a => a.key !== 'Passive' && a.key !== 'R').map((ability) => (
              <motion.div
                key={ability.key}
                variants={fadeInUp}
                className="bg-dark-bg/50 p-4 rounded-lg border border-hextech-blue/20 cursor-pointer hover:border-hextech-blue/50 transition-all"
                onClick={() => setSelectedAbility(ability)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold border-2"
                    style={{
                      borderColor: ability.color,
                      color: ability.color,
                      background: `radial-gradient(circle, ${ability.color}20, transparent)`,
                    }}
                  >
                    {ability.key}
                  </div>
                  <div className="flex-1">
                    <div
                      className="text-xs font-bold tracking-wider"
                      style={{ color: ability.color }}
                    >
                      {ability.name}
                    </div>
                  </div>
                </div>
                <p className="text-text-secondary text-xs line-clamp-2 mb-2">
                  {ability.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {ability.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-medium"
                      style={{
                        backgroundColor: `${ability.color}15`,
                        color: ability.color,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {ability.technologies.length > 2 && (
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-medium"
                      style={{
                        backgroundColor: `${ability.color}15`,
                        color: ability.color,
                      }}
                    >
                      +{ability.technologies.length - 2}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedAbility && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.85), rgba(1, 10, 19, 0.95))',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAbility(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, ' + selectedAbility.color + ' 2px, ' + selectedAbility.color + ' 4px)',
              }} />
              
              <div className="absolute inset-0" style={{
                background: `linear-gradient(135deg, rgba(1, 10, 19, 0.98), rgba(10, 21, 32, 0.98))`,
                boxShadow: `inset 0 0 100px ${selectedAbility.color}40`,
              }} />

              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
                background: `linear-gradient(135deg, ${selectedAbility.color}, transparent 50%, ${selectedAbility.color})`,
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                padding: '3px',
              }} />

              <motion.div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: selectedAbility.color }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <div className="relative p-8 md:p-10">
                <motion.button
                  onClick={() => setSelectedAbility(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-all z-10"
                  style={{
                    backgroundColor: `${selectedAbility.color}20`,
                    border: `2px solid ${selectedAbility.color}`,
                    color: selectedAbility.color,
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: selectedAbility.color,
                    color: '#010A13',
                    boxShadow: `0 0 20px ${selectedAbility.color}`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  ×
                </motion.button>

                <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                  <motion.div
                    className="relative"
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                  >
                    <div
                      className="w-28 h-28 rounded-2xl flex items-center justify-center text-5xl font-black relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${selectedAbility.color}, ${selectedAbility.color}cc)`,
                        boxShadow: `0 0 40px ${selectedAbility.color}80, inset 0 0 20px rgba(255, 255, 255, 0.2)`,
                      }}
                    >
                      <div className="absolute inset-0 opacity-20" style={{
                        background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.1) 10px, rgba(255, 255, 255, 0.1) 20px)',
                      }} />
                      <span className="relative z-10 drop-shadow-lg" style={{ color: '#010A13' }}>
                        {selectedAbility.key}
                      </span>
                    </div>
                    <motion.div
                      className="absolute -inset-2 rounded-2xl border-2 opacity-50"
                      style={{ borderColor: selectedAbility.color }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>

                  <div className="flex-1 text-center md:text-left">
                    <motion.div
                      className="inline-block px-4 py-1 rounded-full mb-3 text-xs font-bold tracking-widest"
                      style={{
                        backgroundColor: `${selectedAbility.color}30`,
                        border: `1px solid ${selectedAbility.color}`,
                        color: selectedAbility.color,
                      }}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {selectedAbility.key === 'Passive' ? 'PASSIVE ABILITY' : `KEY: ${selectedAbility.key}`}
                    </motion.div>
                    <motion.h3 
                      className="text-4xl md:text-5xl font-black mb-2 tracking-tight"
                      style={{
                        background: `linear-gradient(135deg, ${selectedAbility.color}, #F0E6D2)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: `drop-shadow(0 0 20px ${selectedAbility.color}60)`,
                      }}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {selectedAbility.name}
                    </motion.h3>
                  </div>
                </div>

                <motion.div
                  className="mb-8 p-5 rounded-xl relative overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    border: `1px solid ${selectedAbility.color}30`,
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: selectedAbility.color }} />
                  <p className="text-text-primary text-base md:text-lg leading-relaxed pl-3">
                    {selectedAbility.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="h-px flex-1"
                      style={{ background: `linear-gradient(to right, ${selectedAbility.color}, transparent)` }}
                    />
                    <h4
                      className="text-xl font-bold tracking-wider uppercase"
                      style={{ color: selectedAbility.color }}
                    >
                      Technologies & Skills
                    </h4>
                    <div 
                      className="h-px flex-1"
                      style={{ background: `linear-gradient(to left, ${selectedAbility.color}, transparent)` }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {selectedAbility.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-4 py-2 rounded-lg text-sm font-bold tracking-wide"
                        style={{
                          background: `linear-gradient(135deg, ${selectedAbility.color}25, ${selectedAbility.color}15)`,
                          border: `2px solid ${selectedAbility.color}50`,
                          color: selectedAbility.color,
                          boxShadow: `0 0 10px ${selectedAbility.color}30`,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.05 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: `${selectedAbility.color}40`,
                          boxShadow: `0 0 20px ${selectedAbility.color}60`,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
