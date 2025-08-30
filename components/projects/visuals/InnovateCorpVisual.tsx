import React from 'react';
import { motion } from 'framer-motion';

const InnovateCorpVisual: React.FC = () => {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    animate: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.5 },
    },
  };

  return (
    <div className="w-full h-56 bg-gray-900/50 relative overflow-hidden p-8 flex items-center justify-center">
      <motion.div 
        className="w-full max-w-xs h-full relative" 
        variants={containerVariants}
        initial="hidden"
        animate="animate"
      >
        {/* Animated Background Lines */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-cyan-400/20"
            style={{ top: `${20 + i * 20}%`, originX: i % 2 === 0 ? 0 : 1 }}
            variants={lineVariants}
          />
        ))}

        {/* Central Title Placeholder */}
        <div className="absolute inset-0 flex flex-col justify-center items-start">
          <motion.div className="w-3/4 h-3 bg-brand-primary/80 rounded-sm mb-3" variants={lineVariants} style={{originX: 0}} />
          <motion.div className="w-1/2 h-3 bg-brand-secondary/80 rounded-sm" variants={lineVariants} style={{originX: 0, transitionDelay: '0.2s'}}/>
        </div>

        {/* UI Elements */}
        <motion.div 
          className="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-12 border-4 border-pink-500/80 rounded-full flex items-center justify-center"
          variants={circleVariants}
        >
           <motion.div className="w-4 h-4 bg-pink-500/80 rounded-full" animate={{scale: [1, 1.3, 1]}} transition={{repeat: Infinity, duration: 2}}/>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default InnovateCorpVisual;
