import { motion } from 'framer-motion';

export const Minimap = () => {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-40"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      <div
        className="relative w-48 h-48 rounded-lg overflow-hidden cursor-pointer"
        data-easter-minimap
        style={{
          background: 'linear-gradient(135deg, rgba(30, 35, 40, 0.95), rgba(1, 10, 19, 0.95))',
          border: '3px solid',
          borderImage: 'linear-gradient(135deg, #0BC5EA, #C8AA6E) 1',
          boxShadow: '0 0 30px rgba(200, 170, 110, 0.3)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-gray-900/50 to-red-950/50" />
        
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 200">
          <line x1="0" y1="0" x2="200" y2="200" stroke="#0BC5EA" strokeWidth="1" />
          <line x1="0" y1="50" x2="150" y2="200" stroke="#0BC5EA" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="50" y1="0" x2="200" y2="150" stroke="#0BC5EA" strokeWidth="1" strokeDasharray="5,5" />
        </svg>

        <motion.div
          className="absolute w-4 h-4 rounded-full bg-gold border-2 border-dark-bg"
          style={{
            left: '30%',
            top: '40%',
            boxShadow: '0 0 15px rgba(200, 170, 110, 0.8)',
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gold"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${60 + i * 5}%`,
              background: i % 2 === 0 ? '#0BC5EA' : '#4A9FD8',
              boxShadow: `0 0 8px ${i % 2 === 0 ? '#0BC5EA' : '#4A9FD8'}`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        <div className="absolute bottom-0 left-0 right-0 p-2 bg-dark-bg/80">
          <div className="flex items-center justify-between text-[10px] font-bold">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-hextech-blue" />
              <span className="text-hextech-blue">TEAM: 5</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-ability-r" />
              <span className="text-ability-r">ENEMY: 0</span>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute top-2 right-2 text-gold text-xs font-black"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        >
          12:34
        </motion.div>
      </div>
    </motion.div>
  );
};
