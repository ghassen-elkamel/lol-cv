import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';
import type { Skill } from '../lib/data';

interface RunesTreeProps {
  runes: Skill[];
}

export const RunesTree = ({ runes }: RunesTreeProps) => {
  const getRuneColor = (type: string) => {
    const colorMap: Record<string, string> = {
      'primary': '#C8AA6E',
      'secondary': '#0BC5EA',
      'shard': '#8B5FBF',
    };
    return colorMap[type] || '#C8AA6E';
  };

  const getRuneLabel = (type: string) => {
    const labelMap: Record<string, string> = {
      'primary': 'DOMINATION',
      'secondary': 'PRECISION',
      'shard': 'STAT SHARDS',
    };
    return labelMap[type] || 'RUNE';
  };

  const primaryRunes = runes.filter(r => r.type === 'primary');
  const secondaryRunes = runes.filter(r => r.type === 'secondary');
  const shardRunes = runes.filter(r => r.type === 'shard');

  return (
    <section id="runes-section" data-achievement="runes" className="py-20 px-4 bg-gradient-to-b from-card-bg/50 to-dark-bg">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">RUNES & MASTERIES</h2>
          <p className="text-text-secondary text-lg">
            Technical Skills & Expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div variants={fadeInUp}>
            <div
              className="border-2 rounded-lg p-6 bg-card-bg"
              style={{ borderColor: getRuneColor('primary') }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center font-bold"
                  style={{
                    backgroundColor: getRuneColor('primary'),
                    color: '#010A13',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold tracking-wider"
                  style={{ color: getRuneColor('primary') }}
                >
                  {getRuneLabel('primary')}
                </h3>
              </div>

              <div className="space-y-6">
                {primaryRunes.map((rune, index) => (
                  <motion.div
                    key={rune.category}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: getRuneColor('primary') }}
                      />
                      {rune.category}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {rune.items.map((item) => (
                        <motion.div
                          key={item}
                          className="relative group"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div
                            className="px-3 py-2 rounded text-sm font-medium text-center transition-all duration-300 cursor-pointer"
                            style={{
                              backgroundColor: `${getRuneColor('primary')}10`,
                              color: getRuneColor('primary'),
                              border: `1px solid ${getRuneColor('primary')}30`,
                            }}
                          >
                            {item}
                          </div>
                          <motion.div
                            className="absolute inset-0 rounded pointer-events-none"
                            style={{
                              boxShadow: `0 0 0px ${getRuneColor('primary')}`,
                            }}
                            whileHover={{
                              boxShadow: `0 0 15px ${getRuneColor('primary')}60`,
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div
              className="border-2 rounded-lg p-6 bg-card-bg"
              style={{ borderColor: getRuneColor('secondary') }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center font-bold"
                  style={{
                    backgroundColor: getRuneColor('secondary'),
                    color: '#010A13',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" fill="#010A13" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold tracking-wider"
                  style={{ color: getRuneColor('secondary') }}
                >
                  {getRuneLabel('secondary')}
                </h3>
              </div>

              <div className="space-y-6">
                {secondaryRunes.map((rune, index) => (
                  <motion.div
                    key={rune.category}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: getRuneColor('secondary') }}
                      />
                      {rune.category}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {rune.items.map((item) => (
                        <motion.div
                          key={item}
                          className="relative group"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div
                            className="px-3 py-2 rounded text-sm font-medium text-center transition-all duration-300 cursor-pointer"
                            style={{
                              backgroundColor: `${getRuneColor('secondary')}10`,
                              color: getRuneColor('secondary'),
                              border: `1px solid ${getRuneColor('secondary')}30`,
                            }}
                          >
                            {item}
                          </div>
                          <motion.div
                            className="absolute inset-0 rounded pointer-events-none"
                            style={{
                              boxShadow: `0 0 0px ${getRuneColor('secondary')}`,
                            }}
                            whileHover={{
                              boxShadow: `0 0 15px ${getRuneColor('secondary')}60`,
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp}>
          <div
            className="border-2 rounded-lg p-6 bg-card-bg"
            style={{ borderColor: getRuneColor('shard') }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center font-bold"
                style={{
                  backgroundColor: getRuneColor('shard'),
                  color: '#010A13',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold tracking-wider"
                style={{ color: getRuneColor('shard') }}
              >
                {getRuneLabel('shard')}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shardRunes.map((rune, index) => (
                <motion.div
                  key={rune.category}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: getRuneColor('shard') }}
                    />
                    {rune.category}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {rune.items.map((item) => (
                      <motion.div
                        key={item}
                        className="relative group"
                        whileHover={{ scale: 1.05 }}
                        data-cursor="ability"
                      >
                        <div
                          className="px-3 py-2 rounded text-sm font-medium text-center transition-all duration-300 cursor-pointer"
                          style={{
                            backgroundColor: `${getRuneColor('shard')}10`,
                            color: getRuneColor('shard'),
                            border: `1px solid ${getRuneColor('shard')}30`,
                          }}
                        >
                          {item}
                        </div>
                        <motion.div
                          className="absolute inset-0 rounded pointer-events-none"
                          style={{
                            boxShadow: `0 0 0px ${getRuneColor('shard')}`,
                          }}
                          whileHover={{
                            boxShadow: `0 0 15px ${getRuneColor('shard')}60`,
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary">
            Continuously expanding knowledge and adapting to new technologies
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
