import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';
import type { WorkExperience } from '../lib/data';

interface SkinsCarouselProps {
  skins: WorkExperience[];
}

export const SkinsCarousel = ({ skins }: SkinsCarouselProps) => {
  const getTierStars = (tier: string) => {
    const tierMap: Record<string, number> = {
      'Legendary': 5,
      'Epic': 4,
      'Rare': 3,
      'Common': 2,
    };
    return tierMap[tier] || 3;
  };

  const getTierColor = (tier: string) => {
    const colorMap: Record<string, string> = {
      'Legendary': '#FF6B00',
      'Epic': '#A335EE',
      'Rare': '#0070DD',
      'Common': '#9D9D9D',
    };
    return colorMap[tier] || '#C8AA6E';
  };

  return (
    <section id="skins-section" data-achievement="skins" className="py-20 px-4 bg-gradient-to-b from-card-bg/50 to-dark-bg">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">CHAMPION SKINS</h2>
          <p className="text-text-secondary text-lg">
            Work Experience Timeline
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skins.map((skin, index) => (
            <motion.div
              key={skin.company}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
              data-cursor="target"
            >
              <div
                className="relative p-6 rounded-lg border-2 bg-card-bg overflow-hidden transition-all duration-300"
                style={{
                  borderColor: getTierColor(skin.tier),
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${getTierColor(skin.tier)}, transparent)`,
                  }}
                />

                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-gold transition-colors">
                      {skin.company}
                    </h3>
                    <div
                      className="flex gap-1"
                      style={{ color: getTierColor(skin.tier) }}
                    >
                      {Array.from({ length: getTierStars(skin.tier) }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                  
                  <p
                    className="text-lg font-medium mb-1"
                    style={{ color: getTierColor(skin.tier) }}
                  >
                    {skin.role}
                  </p>
                  
                  <div className="flex justify-between text-sm text-text-secondary">
                    <span>{skin.period}</span>
                    <span className="text-hextech-blue">{skin.patch}</span>
                  </div>
                </div>

                <div
                  className="inline-block px-3 py-1 rounded text-xs font-bold mb-4"
                  style={{
                    backgroundColor: `${getTierColor(skin.tier)}20`,
                    color: getTierColor(skin.tier),
                    border: `1px solid ${getTierColor(skin.tier)}`,
                  }}
                >
                  {skin.tier.toUpperCase()} SKIN
                </div>

                <div className="space-y-2">
                  {skin.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-2 text-sm text-text-secondary">
                      <span className="text-hextech-blue mt-1">▸</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-hextech-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary">
            Each position represents a unique chapter in the professional journey
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
