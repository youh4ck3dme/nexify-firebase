import React from 'react';
import { motion } from 'framer-motion';

const SEOptimaVisual: React.FC = () => {
  const barData = [40, 65, 50, 80, 75, 60];

  return (
    <div className="w-full h-56 bg-gray-900/50 relative overflow-hidden p-8 flex items-end justify-between">
      {/* Bar Graph */}
      {barData.map((height, i) => (
        <motion.div
          key={i}
          className="w-8 bg-gradient-to-t from-cyan-400/70 to-cyan-600/70 rounded-t-sm"
          initial={{ height: '0%' }}
          animate={{ height: `${height}%` }}
          transition={{ 
            duration: 1.5, 
            delay: i * 0.15 + 0.5,
            ease: [0.16, 1, 0.3, 1] 
          }}
        />
      ))}

      {/* Floating Data Points */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-pink-500/80 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            x: `${10 + Math.random() * 80}%`,
            y: `${10 + Math.random() * 80}%`,
          }}
          transition={{ 
            duration: 3 + Math.random() * 3, 
            repeat: Infinity, 
            delay: i * 0.3,
            ease: 'easeInOut'
          }}
        />
      ))}
      
      {/* Growth Arrow */}
       <motion.div 
        className="absolute bottom-8 right-8"
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0}}
        transition={{delay: 1.5, duration: 1}}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="2">
          <motion.path 
            d="M12 19V5M12 5L5 12M12 5L19 12" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{duration: 2, ease: "easeInOut", delay: 1.8}}
          />
        </svg>
      </motion.div>

    </div>
  );
};

export default SEOptimaVisual;
