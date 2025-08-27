import React from 'react';
// FIX: Import Variants type to fix TypeScript error.
import { motion, Variants } from 'framer-motion';
import { useSettings } from '../../hooks/useSettings';
import Link from '../../routing/Link';

const HeroSection: React.FC = () => {
  const { settings } = useSettings();

  // FIX: Explicitly type variants with Variants for consistency and type safety.
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // FIX: Explicitly type variants with Variants to fix TypeScript error.
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen pt-24 pb-12 text-center">
      <div className="container mx-auto px-4 sm:px-8 z-10">
        <motion.div
          variants={settings.animations ? containerVariants : {}}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text animate-text-gradient bg-200% bg-left">
              Nexify
            </span>
            <span className="block text-brand-text mt-2">Digital Studio</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="mt-6 text-lg md:text-xl text-brand-text-muted max-w-2xl mx-auto"
          >
            Nexify | Digital Studio — tvoríme rýchle weby, PWA a e-shopy s 3D/AI interakciami, ktoré menia návštevníkov na zákazníkov.
          </motion.p>
          
          <motion.div 
            variants={itemVariants} 
            className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <motion.div
              whileHover={settings.animations ? { scale: 1.05, boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)' } : {}}
              whileTap={settings.animations ? { scale: 0.95 } : {}}
            >
              <Link
                href="#/projekty"
                className="block px-8 py-3 bg-brand-primary text-brand-bg font-bold rounded-full transition-transform duration-300"
              >
                Naše Projekty
              </Link>
            </motion.div>
            <motion.div
               whileHover={settings.animations ? { scale: 1.05, boxShadow: '0 0 20px rgba(224, 216, 255, 0.3)' } : {}}
              whileTap={settings.animations ? { scale: 0.95 } : {}}
            >
              <Link
                href="#/kontakt"
                className="block px-8 py-3 bg-transparent border-2 border-brand-text-muted text-brand-text-muted font-bold rounded-full transition-all duration-300 hover:text-brand-text hover:border-brand-text"
              >
                Kontaktujte nás
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;