import React from 'react';
import { motion } from 'framer-motion';

const ArtExhibitVisual: React.FC = () => {
  return (
    <div className="w-full h-56 bg-gray-900/50 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-gray-900/50 to-purple-900/50"></div>

      {/* Floating Dust Motes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            backgroundColor: 'rgba(224, 216, 255, 0.6)',
            boxShadow: `0 0 5px rgba(224, 216, 255, 0.4)`
          }}
          animate={{
            x: [0, Math.random() * 30 - 15],
            y: [0, Math.random() * 30 - 15],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Central Rotating 3D-like structure */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '800px' }}>
        <motion.div
          className="w-32 h-32 relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {/* Faces of the cube */}
          <motion.div
            className="absolute w-32 h-32 border-2 border-pink-500/70 rounded-md"
            style={{ transform: 'rotateY(0deg) translateZ(4rem)' }}
          />
          <motion.div
            className="absolute w-32 h-32 border-2 border-cyan-400/70 rounded-md"
            style={{ transform: 'rotateY(90deg) translateZ(4rem)' }}
          />
          <motion.div
             className="absolute w-32 h-32 border-2 border-purple-500/70 rounded-md"
            style={{ transform: 'rotateX(90deg) translateZ(4rem)' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ArtExhibitVisual;
