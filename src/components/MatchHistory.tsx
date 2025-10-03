import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';
import type { Project } from '../lib/data';

interface MatchHistoryProps {
  matches: Project[];
}

export const MatchHistory = ({ matches }: MatchHistoryProps) => {
  return (
    <section id="matches-section" data-achievement="matches" className="py-20 px-4 bg-dark-bg">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">MATCH HISTORY</h2>
          <p className="text-text-secondary text-lg">
            Recent Project Victories
          </p>
        </motion.div>

        <div className="space-y-6">
          {matches.map((match, index) => (
            <motion.div
              key={match.name}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="group cursor-pointer project-card"
              data-cursor="inspect"
            >
              <div className="hextech-border p-6 md:p-8 rounded-lg bg-card-bg hover:bg-card-bg/80 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`px-4 py-2 rounded font-bold text-sm ${
                        match.status === 'Victory'
                          ? 'bg-victory text-dark-bg'
                          : 'bg-ability-r text-dark-bg'
                      }`}
                    >
                      {match.status.toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary group-hover:text-hextech-blue transition-colors">
                        {match.name}
                      </h3>
                      <p className="text-text-secondary text-sm">{match.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-dark-bg p-4 rounded-lg">
                    <div className="text-text-secondary text-sm mb-1">Performance</div>
                    <div className="text-victory text-xl font-bold">{match.kda.performance}</div>
                  </div>
                  <div className="bg-dark-bg p-4 rounded-lg">
                    <div className="text-text-secondary text-sm mb-1">Speed</div>
                    <div className="text-hextech-blue text-xl font-bold">{match.kda.speed}</div>
                  </div>
                  <div className="bg-dark-bg p-4 rounded-lg">
                    <div className="text-text-secondary text-sm mb-1">Impact</div>
                    <div className="text-gold text-xl font-bold">{match.kda.impact}</div>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gold text-sm font-bold">ITEMS BUILT:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {match.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-bg text-hextech-blue border border-hextech-blue/30 rounded text-sm font-medium hover:border-hextech-blue hover:bg-hextech-blue/10 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gold text-sm font-bold">HIGHLIGHTS:</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {match.highlights.map((highlight, i) => (
                      <div key={i} className="flex gap-2 text-sm text-text-secondary">
                        <span className="text-victory">✓</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-victory/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-card-bg px-8 py-4 rounded-lg hextech-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-victory">{matches.length}</div>
              <div className="text-text-secondary text-sm">Total Matches</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-victory">
                {matches.filter(m => m.status === 'Victory').length}
              </div>
              <div className="text-text-secondary text-sm">Victories</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">100%</div>
              <div className="text-text-secondary text-sm">Win Rate</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
