import { motion } from 'framer-motion';

export const SectionDivider = () => {
  return (
    <div className="relative py-8">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-4xl flex items-center gap-4">
          <motion.div
            className="flex-1 h-px bg-gradient-to-r from-transparent via-hextech-blue to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <polygon
                points="20,5 30,15 30,25 20,35 10,25 10,15"
                fill="none"
                stroke="#0BC5EA"
                strokeWidth="2"
              />
              <polygon
                points="20,10 26,16 26,24 20,30 14,24 14,16"
                fill="#0BC5EA"
                opacity="0.3"
              />
            </svg>
          </motion.div>
          <motion.div
            className="flex-1 h-px bg-gradient-to-l from-transparent via-gold to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.div>
    </div>
  );
};
