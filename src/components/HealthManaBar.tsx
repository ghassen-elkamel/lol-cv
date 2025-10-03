import { motion } from 'framer-motion';

interface HealthManaBarProps {
  health: number;
  mana: number;
  name: string;
  level: number;
}

export const HealthManaBar = ({ health, mana, name, level }: HealthManaBarProps) => {
  return (
    <div className="fixed top-16 left-4 z-40 w-80">
      <motion.div
        className="relative"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, rgba(30, 35, 40, 0.95), rgba(1, 10, 19, 0.95))',
          border: '2px solid',
          borderImage: 'linear-gradient(135deg, #0BC5EA, #C8AA6E) 1',
          borderRadius: '8px',
          padding: '12px',
          boxShadow: '0 0 30px rgba(11, 197, 234, 0.3)',
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl border-2 border-gold"
            style={{
              background: 'radial-gradient(circle, rgba(200, 170, 110, 0.3), transparent)',
            }}
          >
            ⚔️
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-gold font-black text-lg">{name}</span>
              <div
                className="px-2 py-0.5 bg-gold text-dark-bg text-xs font-black rounded"
                style={{
                  boxShadow: '0 0 10px rgba(200, 170, 110, 0.5)',
                }}
              >
                LVL {level}
              </div>
            </div>
            <div className="text-hextech-blue text-xs font-bold">Full-Stack Champion</div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="relative h-5 bg-dark-bg/80 rounded-sm overflow-hidden border border-green-900">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500"
              initial={{ width: 0 }}
              animate={{ width: `${health}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{
                boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.3)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xs font-bold drop-shadow-lg">
                HP: {health}%
              </span>
            </div>
          </div>

          <div className="relative h-4 bg-dark-bg/80 rounded-sm overflow-hidden border border-blue-900">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${mana}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              style={{
                boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.3)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold drop-shadow-lg">
                MANA: {mana}%
              </span>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-2 flex gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {['Q', 'W', 'E', 'R'].map((key, i) => (
            <motion.div
              key={key}
              className="flex-1 h-6 rounded flex items-center justify-center text-xs font-black border-2"
              style={{
                background: 'radial-gradient(circle, rgba(11, 197, 234, 0.2), transparent)',
                borderColor: '#0BC5EA',
                color: '#0BC5EA',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(11, 197, 234, 0.8)' }}
              animate={{
                boxShadow: ['0 0 5px rgba(11, 197, 234, 0.3)', '0 0 10px rgba(11, 197, 234, 0.6)', '0 0 5px rgba(11, 197, 234, 0.3)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {key}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
