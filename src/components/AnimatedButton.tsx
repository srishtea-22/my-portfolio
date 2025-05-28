import React from 'react';
import { motion, useAnimation } from 'framer-motion';

interface AnimatedButtonProps {
  text: string;
  className?: string; 
  repeatCount?: number;
  animationDuration?: number;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  className,
  repeatCount = 10,
  animationDuration = 10,
  
}) => {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      x: ['0%', '-500%'],
      transition: {
        x: { repeat: Infinity, repeatType: 'loop', duration: animationDuration, ease: 'linear' }
      }
    });
  };

  const handleHoverEnd = () => {
    controls.stop();
    controls.set({ x: 0 }); 
  };

  return (
    <button
      className={`border border-white text-white font-bold py-2 px-4 rounded-full transition-all overflow-hidden ${className || ''}`}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div
        animate={controls}
        className="flex whitespace-nowrap"
      >
        {Array(repeatCount).fill(text).map((item, i) => (
          <span key={i} className="mr-4">{item}</span>
        ))}
      </motion.div>
    </button>
  );
};

export default AnimatedButton;