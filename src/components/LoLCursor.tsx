import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

type CursorType = 'default' | 'ability' | 'attack' | 'pointer' | 'target' | 'inspect';

export const LoLCursor = () => {
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [isVisible, setIsVisible] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      const target = e.target as HTMLElement;
      
      if (target.closest('[data-cursor="ability"]') || target.closest('.ability-card')) {
        setCursorType('ability');
      } else if (target.closest('[data-cursor="attack"]') || target.closest('.attack-cursor')) {
        setCursorType('attack');
      } else if (target.closest('[data-cursor="target"]') || target.closest('.achievement-card')) {
        setCursorType('target');
      } else if (target.closest('[data-cursor="inspect"]') || target.closest('.project-card')) {
        setCursorType('inspect');
      } else if (target.closest('button') || target.closest('a') || target.closest('[data-cursor="pointer"]')) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  const renderCursor = () => {
    switch (cursorType) {
      case 'ability':
        return (
          <motion.svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          >
              <defs>
                <radialGradient id="abilityGlow">
                  <stop offset="0%" stopColor="#4A9FD8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0BC5EA" stopOpacity="0" />
                </radialGradient>
              </defs>
              <motion.circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="#4A9FD8"
                strokeWidth="2"
                animate={{ r: [18, 22, 18], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <circle cx="24" cy="24" r="15" fill="url(#abilityGlow)" />
              <circle cx="24" cy="24" r="4" fill="#0BC5EA" />
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '24px', originY: '24px' }}
              >
                {[0, 90, 180, 270].map((angle) => (
                  <circle
                    key={angle}
                    cx="24"
                    cy="8"
                    r="2"
                    fill="#4A9FD8"
                    transform={`rotate(${angle} 24 24)`}
                  />
              ))}
            </motion.g>
          </motion.svg>
      );

      case 'attack':
        return (
          <motion.svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          >
            <defs>
              <linearGradient id="attackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E74856" />
                <stop offset="100%" stopColor="#FF6B00" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="url(#attackGradient)"
              strokeWidth="3"
              strokeDasharray="3 3"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '22px', originY: '22px' }}
            />
            <motion.path
              d="M22 10 L28 22 L22 34 L16 22 Z"
              fill="#E74856"
              opacity="0.6"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ originX: '22px', originY: '22px' }}
            />
            <circle cx="22" cy="22" r="3" fill="#FF6B00" />
          </motion.svg>
        );

      case 'target':
        return (
          <motion.svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          >
            <defs>
              <linearGradient id="targetGradient">
                <stop offset="0%" stopColor="#C8AA6E" />
                <stop offset="100%" stopColor="#F0E6D2" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="26"
              cy="26"
              r="22"
              fill="none"
              stroke="url(#targetGradient)"
              strokeWidth="2"
              animate={{ r: [20, 24, 20] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <circle cx="26" cy="26" r="16" fill="none" stroke="#C8AA6E" strokeWidth="2" />
            <circle cx="26" cy="26" r="10" fill="none" stroke="#C8AA6E" strokeWidth="2" />
            <circle cx="26" cy="26" r="3" fill="#F0E6D2" />
            {[0, 90, 180, 270].map((angle) => (
              <motion.line
                key={angle}
                x1="26"
                y1="4"
                x2="26"
                y2="12"
                stroke="#C8AA6E"
                strokeWidth="2"
                transform={`rotate(${angle} 26 26)`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: angle / 360 }}
              />
            ))}
          </motion.svg>
        );

      case 'inspect':
        return (
          <motion.svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          >
            <defs>
              <linearGradient id="inspectGradient">
                <stop offset="0%" stopColor="#00C8C8" />
                <stop offset="100%" stopColor="#0BC5EA" />
              </linearGradient>
            </defs>
            <motion.polygon
              points="23,6 35,16 35,30 23,40 11,30 11,16"
              fill="none"
              stroke="url(#inspectGradient)"
              strokeWidth="2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ originX: '23px', originY: '23px' }}
            />
            <polygon
              points="23,12 30,18 30,28 23,34 16,28 16,18"
              fill="rgba(0, 200, 200, 0.2)"
            />
            <circle cx="23" cy="23" r="4" fill="#00C8C8" />
            <motion.g
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '23px', originY: '23px' }}
            >
              {[0, 120, 240].map((angle) => (
                <circle
                  key={angle}
                  cx="23"
                  cy="10"
                  r="1.5"
                  fill="#0BC5EA"
                  transform={`rotate(${angle} 23 23)`}
                />
              ))}
            </motion.g>
          </motion.svg>
        );

      case 'pointer':
        return (
          <motion.svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          >
            <defs>
              <linearGradient id="pointerGradient">
                <stop offset="0%" stopColor="#0BC5EA" />
                <stop offset="100%" stopColor="#C8AA6E" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="20"
              cy="20"
              r="16"
              fill="none"
              stroke="url(#pointerGradient)"
              strokeWidth="3"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
            <circle cx="20" cy="20" r="8" fill="rgba(11, 197, 234, 0.3)" />
            <circle cx="20" cy="20" r="4" fill="#0BC5EA" />
            <motion.circle
              cx="20"
              cy="20"
              r="12"
              fill="none"
              stroke="#0BC5EA"
              strokeWidth="2"
              opacity="0.5"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.svg>
        );

      default:
        return (
          <motion.svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          >
            <circle
              cx="16"
              cy="16"
              r="12"
              fill="none"
              stroke="#0BC5EA"
              strokeWidth="2"
              opacity="0.6"
            />
            <circle cx="16" cy="16" r="3" fill="#0BC5EA" />
            <motion.circle
              cx="16"
              cy="16"
              r="8"
              fill="none"
              stroke="#0BC5EA"
              strokeWidth="1"
              opacity="0.3"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.svg>
        );
    }
  };

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ willChange: 'transform' }}
    >
      {renderCursor()}
    </div>
  );
};
