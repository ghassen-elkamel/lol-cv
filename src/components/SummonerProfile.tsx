import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';
import type { Education } from '../lib/data';

interface SummonerProfileProps {
  profile: Education;
}

export const SummonerProfile = ({ profile }: SummonerProfileProps) => {
  return (
    <section className="py-20 px-4 bg-dark-bg">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">SUMMONER PROFILE</h2>
          <p className="text-text-secondary text-lg">
            Education & Achievements
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="hextech-border p-8 md:p-12 rounded-lg bg-card-bg"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold to-hextech-blue p-1">
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                  <div className="text-6xl">🎓</div>
                </div>
              </div>
              <motion.div
                className="absolute -top-2 -right-2 w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm"
                style={{
                  backgroundColor: '#E74856',
                  color: '#010A13',
                  border: '3px solid #010A13',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {profile.rank.split(' ')[0]}
              </motion.div>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <div
                className="inline-block px-4 py-2 rounded-lg mb-4 font-bold text-sm"
                style={{
                  backgroundColor: '#E7485620',
                  color: '#E74856',
                  border: '1px solid #E74856',
                }}
              >
                {profile.rank.toUpperCase()}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                {profile.degree}
              </h3>

              <p className="text-xl text-gold mb-4">
                {profile.institution}
              </p>

              <p className="text-text-secondary">
                {profile.period}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-dark-bg p-4 rounded-lg">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-text-secondary text-sm">Strong Foundation</div>
              <div className="text-hextech-blue font-bold">Academic Excellence</div>
            </div>
            <div className="bg-dark-bg p-4 rounded-lg">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-text-secondary text-sm">Accreditation</div>
              <div className="text-gold font-bold">CTI Certified</div>
            </div>
            <div className="bg-dark-bg p-4 rounded-lg">
              <div className="text-3xl mb-2">💡</div>
              <div className="text-text-secondary text-sm">Specialization</div>
              <div className="text-victory font-bold">Software Engineering</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
