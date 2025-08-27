import React from 'react';
// FIX: Import Variants type to fix TypeScript error.
import { motion, Variants } from 'framer-motion';
import { useSettings } from '../../hooks/useSettings';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id, className = '' }) => {
  const { settings } = useSettings();

  // FIX: Explicitly type variants with Variants to fix TypeScript error.
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  if (!settings.parallax) {
    return (
      <section id={id} className={`py-20 md:py-28 ${className}`}>
        <div className="container mx-auto px-4 sm:px-8">{children}</div>
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={`py-20 md:py-28 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-8">{children}</div>
    </motion.section>
  );
};

export default AnimatedSection;