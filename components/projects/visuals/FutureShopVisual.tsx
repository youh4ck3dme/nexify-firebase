
import React from 'react';
import { motion } from 'framer-motion';

const FutureShopVisual: React.FC = () => {
  return (
    <div className="w-full h-56 bg-gray-900/50 relative overflow-hidden">
      <motion.div className="absolute inset-0 w-full h-full">
        {/* Animated Grid Background */}
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(0, 245, 255, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={`${10 + Math.random() * 80}%`}
            cy={`${10 + Math.random() * 80}%`}
            r={`${2 + Math.random() * 3}`}
            fill="rgba(0, 245, 255, 0.5)"
            animate={{
              cx: `${10 + Math.random() * 80}%`,
              cy: `${10 + Math.random() * 80}%`,
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* Central Glowing Orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-400/50 rounded-full"
          style={{ x: '-50%', y: '-50%' }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut'
          }}
        />

        {/* Orbiting Elements */}
        {[1, 2, 3].map(orb => (
          <motion.div
            key={orb}
            className="absolute top-1/2 left-1/2"
            style={{ x: '-50%', y: '-50%' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10 * orb, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className="w-2 h-2 bg-pink-500 rounded-full absolute"
              style={{ x: `${(40 + orb * 20)}px` }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FutureShopVisual;
