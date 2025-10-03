import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const MouseFollowEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout: number;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      clearTimeout(timeout);
      timeout = window.setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 w-6 h-6 rounded-full border-2 border-hextech-blue"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: isMoving ? 1.5 : 1,
          opacity: isMoving ? 0.8 : 0.3,
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        className="fixed pointer-events-none z-50 w-3 h-3 rounded-full bg-hextech-blue"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
        }}
        animate={{
          scale: isMoving ? 0.8 : 0.5,
          opacity: isMoving ? 1 : 0.5,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};
